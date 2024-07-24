import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "./flows/landing/landing";
import { SignupPage } from "./flows/signup/page/signupPage";
import { SigninPage } from "./flows/signin/page/signinPage";
import { SearchPage } from "./flows/search/page/searchPage";
import { TopicPage } from "./flows/topic/page/topicPage";
import TopBar from "./common/components/topBar";
import UserDetailsPage from "./flows/userDetails/page/userDetails";
import PaymentMethods from "./flows/addPaymentDetails/page/paymentMethodsPage";
import { ReviewingPage } from "./flows/reviewing/page/reviewing";
import { CallsHistoryPage } from "./flows/callsHistory/page/callsHistory";
import { ChatPage } from "./flows/chat/chat";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./common/theme/theme";
import NextMeetings from "./flows/nextMeetings/page/nextMeetingsPage";

const App = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/topic" element={<TopicPage />} />
            <Route path="/user-details" element={<UserDetailsPage />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/reviewing" element={<ReviewingPage />} />
            <Route path="/calls-history" element={<CallsHistoryPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/next-meetings" element={<NextMeetings />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
