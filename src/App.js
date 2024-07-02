import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";
import CreateNewPasswordPage from "./pages/AccountRecover__Page/CreateNewPasswordPage";
import SendOTPPage from "./pages/AccountRecover__Page/SendOTPPage";
import VerifyOTPPage from "./pages/AccountRecover__Page/VerifyOTPPage";
import CanceledPage from "./pages/CanceledPage";
import CompletePage from "./pages/CompletePage";
import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import Error404 from "./pages/Error404";
import ForgetPassPage from "./pages/ForgetPassPage";
import LoginPage from "./pages/LoginPage";
import NewPage from "./pages/NewPage";
import ProfilePage from "./pages/ProfilePage";
import ProgressPage from "./pages/ProgressPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/create" element={<CreatePage />} />
            <Route exact path="/completed" element={<CompletePage />} />
            <Route exact path="/canceled" element={<CanceledPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/forget" element={<ForgetPassPage />} />
            <Route exact path="/new" element={<NewPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/progress" element={<ProgressPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/login" replace={true} />}
            />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/forget" element={<ForgetPassPage />} />
            <Route exact path="/send-otp" element={<SendOTPPage />} />
            <Route exact path="/verify-otp" element={<VerifyOTPPage />} />
            <Route
              exact
              path="/create-password"
              element={<CreateNewPasswordPage />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  }
}

export default App;
