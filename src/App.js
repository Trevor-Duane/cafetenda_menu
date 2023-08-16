import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/HomePage/HomeScreen';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <HomeScreen />
    </ThemeProvider>

  );
}

export default App;
