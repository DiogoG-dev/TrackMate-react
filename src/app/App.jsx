import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound.jsx';
import { CookiePolicy } from '../pages/CookiePolicy/CookiePolicy.jsx';
import { TermsConditions } from '../pages/TermsConditions/TermsConditions.jsx';
import { DeliveriesReturns } from '../pages/DeliveriesReturns/DeliveriesReturns.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
        <Route path='/cookiePolicy' element={<CookiePolicy />} />
        <Route path='/termsConditions' element={<TermsConditions />} />
        <Route path='/deliveriesReturns' element={<DeliveriesReturns />} />
      </Routes>
    </>
  )
}

export default App