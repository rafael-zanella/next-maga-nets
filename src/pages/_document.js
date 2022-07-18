import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  
  render () {
    return (
      <Html lang='pt'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel='shortcut icon' href='/favicon.ico' />          
          
          <link href="/fontawesome/css/all.css" rel="stylesheet" type="text/css" />
          
          <link rel="stylesheet" type="text/css" href="css/globals.css" media="screen" />
          <link rel="stylesheet" type="text/css" href="css/grid.css" media="screen" /> 
          <script type="text/javascript" src="js/respond.min.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}