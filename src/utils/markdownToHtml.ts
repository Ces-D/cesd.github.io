import { Converter } from "showdown";

export default function markdownToHtml(mdContent: string) {
  const converter = new Converter();
  return converter.makeHtml(mdContent);
}
