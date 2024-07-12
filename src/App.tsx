import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LandingPage } from './flows/land/landing';
import { SignupPage } from './flows/signup/page/signupPage';
import { SigninPage } from './flows/signin/page/signinPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signin" element={<SigninPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
