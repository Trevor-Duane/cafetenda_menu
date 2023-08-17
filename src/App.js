import HomeScreen from './pages/HomePage/HomeScreen';
import { ThemeProvider } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <HomeScreen />
    </ThemeProvider>

  );
}

export default App;
