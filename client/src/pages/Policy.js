import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ margin: "170px 1px 1px 1px", width: "90%" }}
          />
        </div>
        <div className="col-md-4" style={{ margin: "180px 1px 1px 1px" }}>
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p className="text-justify mt-2">
            At Kickermuse, we take your privacy seriously. We collect and use
            your personal information solely for order processing and customer
            support. We safeguard your data with industry-standard security
            measures and do not share it with third parties. By using our
            website, you agree to our privacy practices outlined here. For more
            details, please review our full Privacy Policy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
