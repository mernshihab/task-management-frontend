import React, { useRef } from "react";
import { RecoverVerifyEmailReq__API } from "../../API/API__REQUEST";
import { ErrorTost, IsEmail } from "../../helper/FormHelper";
import { Link, useNavigate } from "react-router-dom";
const SendOTP = () => {
  let navigate = useNavigate();
  let emailRef = useRef();
  const VerifyEmail = () => {
    let email = emailRef.value;
    if (IsEmail(email)) {
      ErrorTost("Valid Email Address Required !");
    } else if (email) {
      RecoverVerifyEmailReq__API(email).then((result) => {
        if (result === true) {
          navigate("/verify-otp");
        } else {
        }
      });
    }
  };
  return (
    <div>
      <div className="container SendOTP">
        <div className="row">
          <div className="col-12">
            <div className="card__item">
              <h5>Email Address</h5>
              <br />

              <label htmlFor="" className="animate__animated animate__fadeInUp">
                Your Email Address
              </label>
              <input
                ref={(input) => (emailRef = input)}
                type="email"
                name="email"
                id="email"
                className="animate__animated animate__fadeInUp"
              />
              <button
                onClick={VerifyEmail}
                className="my__btn animate__animated animate__fadeInUp"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
