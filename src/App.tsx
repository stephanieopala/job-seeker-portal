import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar';

function App() {
  return (
    <html>
      <body>
        <Theme
          accentColor='teal'
        >
          <Navbar />
        </Theme>
      </body>
    </html>
  )
}

export default App
