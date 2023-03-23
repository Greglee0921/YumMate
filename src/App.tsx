import { Navbar } from 'components';
import { Pages } from 'pages/Pages';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-mainBg dark:bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
