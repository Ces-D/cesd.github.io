import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);
    const stylesheet = new ServerStyleSheet();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => stylesheet.collectStyles(<App {...props} />),
        });

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {stylesheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      stylesheet.seal();
    }
  }
}

export default MyDocument;
