
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <div>
        {/*  Created my routes here Using react-router */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
