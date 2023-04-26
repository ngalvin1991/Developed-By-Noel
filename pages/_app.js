import '../styles/globals.css';
import Navbar from '@/components/Navbar';

function App({ Component, pageProps }) {
  return (
<div>
  
  
  <Component {...pageProps} />

  </div>
  );
}

export default App;