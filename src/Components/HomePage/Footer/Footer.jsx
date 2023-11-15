import React from "react";
// import { useHistory } from "react-router";
// import useAuth from "../../../hooks/useAuth";

const Footer = () => {
  //   const history = useHistory();
  //   const { user } = useAuth();
  //   const signUp = () => {
  //     if (!user) {
  //       history.push("/register");
  //     }
  //   };
  return (
    <div className="bg-gray-900 text-white px-5 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-3">
          <img
            alt=""
            src="https://i.ibb.co/dPmrs62/Screenshot-5.png"
            width="80"
            height="80"
            className="inline-block align-top mb-3 p-1"
          />
          <h4 className="text-white">Save Life Hospital</h4>
          <p>Your Life Our Priority</p>
          <div className="flex space-x-3">
            <i className="fab fa-facebook text-2xl"></i>
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-youtube text-2xl"></i>
            <i className="fab fa-twitter text-2xl"></i>
          </div>
        </div>
        <div className="text-start mb-3">
          <p className="text-gray-400">Support</p>
          <p>Contact Us</p>
          <p>
            <i className="fas fa-phone"></i> Phone : +99999999888
          </p>
          <p>
            <i className="fas fa-envelope"></i> E-mail: savelife@gmail.com
          </p>
          <p>
            <i className="fas fa-location-arrow"></i> Azimpur rd-1 house-87
          </p>
          <p>
            <i className="fab fa-whatsapp"></i> +0099887766
          </p>
        </div>
        <div className="text-start mb-3">
          <p className="text-gray-400">Contact Other Branches</p>
          <p>Dhanmondi : +99999999888</p>
          <p>Uttara : +99999999877</p>
          <p>Gulshan : +99999999866</p>
          <p>Lalbagh : +99999999855</p>
          <p>Chittagong : +99999999844</p>
        </div>
        <div>
          <p>
            <i className="fas fa-envelope"></i> Any query??
          </p>
          <input
            type="email"
            name=""
            id=""
            className="bg-gray-900 text-white border-0 p-3"
            placeholder="Your opinion about us"
          />
          <div className="text-center mt-3">
            {/* <button onClick={signUp} className="btn-danger btn rounded">
              Send mail
            </button> */}
          </div>
        </div>
      </div>
      <p className="p-3 text-gray-400 text-center">
        @2023 Copyright all rights reserved @savelife@gmail.com{" "}
      </p>
    </div>
  );
};

export default Footer;
