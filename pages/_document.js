import { Analytics } from '@vercel/analytics/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="cs">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <Analytics />
      </Html>
    )
  }
}

export default MyDocument