import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-default">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
