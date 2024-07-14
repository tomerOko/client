import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage } from './flows/landing/landing';
import { SignupPage } from './flows/signup/page/signupPage';
import { SigninPage } from './flows/signin/page/signinPage';
import { SearchPage } from './flows/search/page/searchPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
