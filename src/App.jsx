import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavigationProvider } from './contexts/NavigationContext';
import { PageNotFound } from './components/pageNotFound/PageNotFound';

function App() {
  // Navegação
    const navigate = useNavigate();

    function navigateTo(path) {
        navigate(path === 'home' ? '/' : `/${path}`)
    }
    
  return (
    <NavigationProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
      </Routes>
    </NavigationProvider>
  )
}

export default App
