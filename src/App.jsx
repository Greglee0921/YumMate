import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import { Pages } from './pages/Pages.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-mainBg">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
