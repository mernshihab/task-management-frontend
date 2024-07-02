class SessionHelper {
  setToken(token) {
    localStorage.setItem("Token", token);
  }
  getToken() {
    return localStorage.getItem("Token");
  }
  setUserDetails(userDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }

  setEmail(email) {
    localStorage.setItem("Email", email);
  }
  getEmail() {
    return localStorage.getItem("Email");
  }

  setOTP(OTP) {
    localStorage.setItem("OTP", OTP);
  }
  getOTP() {
    return localStorage.getItem("OTP");
  }

  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }
}

export const {
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  removeSession,
  setEmail,
  getEmail,
  setOTP,
  getOTP,
} = new SessionHelper();
