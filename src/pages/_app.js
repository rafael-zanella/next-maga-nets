import 'react-app-polyfill/ie9'

import 'es5-shim'
import 'es5-shim/es5-sham'
import 'console-polyfill'

import '../styles/globals.css'
import '../styles/grid.css'


// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
