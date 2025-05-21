import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound.jsx';
import { CookiePolicy } from '../pages/CookiePolicy/CookiePolicy.jsx';
import { TermsConditions } from '../pages/TermsConditions/TermsConditions.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
        <Route path='/cookiePolicy' element={<CookiePolicy />} />
        <Route path='/termsConditions' element={<TermsConditions />} />
      </Routes>
    </>
  )
}

export default App