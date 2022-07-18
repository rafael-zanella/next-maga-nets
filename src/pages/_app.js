import '../styles/globals.css'
import '../styles/grid.css'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import 'core-js'
import 'core-js/es/set'
import 'core-js/es/map'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
