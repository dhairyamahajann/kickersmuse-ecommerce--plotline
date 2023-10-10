import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ margin: "170px 1px 1px 1px", width: "90%" }}
          />
        </div>
        <div className="col-md-4" style={{ margin: "180px 1px 1px 1px" }}>
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and info about our products feel free reach out at-
          </p>
          <p className="mt-3">Founder's Name: Dhairya Mahajan</p>
          <p className="mt-3">
            <BiMailSend /> : www.help@kickersmuse.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
