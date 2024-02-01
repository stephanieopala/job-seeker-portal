import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Home from './pages/Home';

function App() {
  return (
    <Theme
      accentColor='teal'
    >
      <Home />
    </Theme>
  )
}

export default App
