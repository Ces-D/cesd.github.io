import { Converter, ShowdownExtension, helper } from "showdown";
import { decode } from "he";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import csharp from "highlight.js/lib/languages/csharp";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("typescript", typescript);

const classAttr = 'class="';

const setHighlightJsClassesExtension = (pre = true): ShowdownExtension => {
  return {
    type: "output",
    filter(text) {
      let left = "<pre><code\\b[^>]*>",
        right = "</code></pre>",
        flags = "g",
        replacement = (match: string, left: string, right: string) => {
          match = decode(match);
          let lang = (left.match(/class=\"([^ \"]+)/) || [])[1];

          if (left.includes(classAttr)) {
            let attrIndex = left.indexOf(classAttr) + classAttr.length;
            left = left.slice(0, attrIndex) + "hljs " + left.slice(attrIndex);
          } else {
            left = left.slice(0, -1) + ' class="hljs">';
          }

          if (pre && lang) {
            left = left.replace("<pre>", `<pre class="${lang} language-${lang}">`);
          }

          if (lang && hljs.getLanguage(lang)) {
            return left + hljs.highlight(match, { language: lang }).value + right;
          } else {
            return left + hljs.highlightAuto(match).value + right;
          }
        };
      return helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
    },
  };
};

export default function markdownToHtml(mdContent: string) {
  const converter = new Converter();
  converter.setOption("tables", true);
  converter.setOption("tasklists", true);
  converter.addExtension(setHighlightJsClassesExtension);

  return converter.makeHtml(mdContent);
}
