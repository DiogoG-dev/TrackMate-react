import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { PageNotFound } from '../components/pageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pageNotFound' element={<PageNotFound />} />
    </Routes>
  )
}

export default App