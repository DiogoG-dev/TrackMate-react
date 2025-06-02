import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home.jsx';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound.jsx';
import { CookiePolicy } from '../pages/CookiePolicy/CookiePolicy.jsx';
import { TermsConditions } from '../pages/TermsConditions/TermsConditions.jsx';
import { DeliveriesReturns } from '../pages/DeliveriesReturns/DeliveriesReturns.jsx'
import { PrivacyPolicy } from '../pages/PrivacyPolicy/PrivacyPolicy.jsx';
import { Faq } from '../pages/Faq/Faq.jsx';
import { ProductPage } from '../pages/ProductPage/ProductPage.jsx';
import { Bag } from '../pages/Bag/Bag.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pageNotFound' element={<PageNotFound />} />
        <Route path='/cookiePolicy' element={<CookiePolicy />} />
        <Route path='/termsConditions' element={<TermsConditions />} />
        <Route path='/deliveriesReturns' element={<DeliveriesReturns />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/productPage' element={<ProductPage />} />
        <Route path='/bag' element={<Bag />} />
      </Routes>
    </>
  )
}

export default App