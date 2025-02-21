import type { RendererObject } from 'marked';

// see - https://github.com/markedjs/marked/blob/eb61090b41f4791c1c7a51322f3a4d6ad21053a4/src/helpers.ts#L43
export function cleanUrl(href: string) {
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch {
    return null;
  }
  return href;
}

// see - https://github.com/markedjs/marked/blob/eb61090b41f4791c1c7a51322f3a4d6ad21053a4/src/Renderer.ts
export const renderer: RendererObject = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return (
      `<h${depth + 1}>` +
      `<a name="${escapedText}" class="anchor" href="#${escapedText}">` +
      text +
      '</a>' +
      `</h${depth + 1}>`
    );
  },

  table(token) {
    let header = '';

    // header
    let cell = '';
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });

    let body = '';
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];

      cell = '';
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }

      body += this.tablerow({ text: cell });
    }
    if (body) body = `<tbody class="divide-y">${body}</tbody>`;

    return (
      '<div class="my-2 bg-white dark:bg-black relative overflow-x-auto shadow-md sm:rounded-lg">\n' +
      '<table class="w-full text-left">\n' +
      '<thead class="uppercase">\n' +
      header +
      '</thead>\n' +
      body +
      '</table>\n' +
      '</div>'
    );
  },

  tablerow({ text }) {
    return `<tr class="border-b last:border-b-0 bg-white dark:bg-gray-800 dark:border-gray-700">\n${text}</tr>\n`;
  },

  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? 'th' : 'td';
    const tag = token.align
      ? `<${type} class="px-6 py-4" align="${token.align}">`
      : `<${type} class="px-6 py-4" >`;
    return tag + content + `</${type}>\n`;
  },

  paragraph({ tokens }) {
    return `<p class="my-2 text-justify">${this.parser.parseInline(tokens)}</p>\n`;
  },

  list(token) {
    const ordered = token.ordered;
    const start = token.start;

    let body = '';
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }

    const type = ordered ? 'ol' : 'ul';
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return (
      '<' +
      type +
      startAttr +
      ' class="list-disc list-inside" ' +
      '>\n' +
      body +
      '</' +
      type +
      '>\n'
    );
  },

  listitem(item) {
    let itemBody = '';
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens[0]?.type === 'paragraph') {
          item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
          if (
            item.tokens[0].tokens &&
            item.tokens[0].tokens.length > 0 &&
            item.tokens[0].tokens[0].type === 'text'
          ) {
            item.tokens[0].tokens[0].text =
              checkbox + ' ' + encodeURIComponent(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: 'text',
            raw: checkbox + ' ',
            text: checkbox + ' ',
            escaped: true,
          });
        }
      } else {
        itemBody += checkbox + ' ';
      }
    }

    itemBody += this.parser.parse(item.tokens, !!item.loose);

    return `<li class="my-1 text-justify">${itemBody}</li>\n`;
  },

  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out =
      '<a href="' +
      href +
      '"' +
      "class='underline text-primary-900'" +
      "target='_blank'" +
      "rel='noopener noreferrer'";
    if (title) {
      out += ' title="' + encodeURIComponent(title) + '"';
    }
    out += '>' + text + '</a>';
    return out;
  },
};
