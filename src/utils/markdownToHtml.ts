import { Converter } from "showdown";

export default function markdownToHtml(mdContent: string) {
  const converter = new Converter();
  converter.setOption("tables", true);
  converter.setOption("tasklists", true);

  return converter.makeHtml(mdContent);
}
