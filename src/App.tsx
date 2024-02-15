// import '@radix-ui/themes/styles.css';
// import { Theme } from '@radix-ui/themes';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const content = useRoutes(routes);
  return (
    <>{content}</>
  )
}

export default App
