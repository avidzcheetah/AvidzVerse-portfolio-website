import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';
import '../styles/themes.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;