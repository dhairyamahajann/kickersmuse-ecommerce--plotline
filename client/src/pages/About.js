import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ margin: "170px 1px 1px 1px", width: "90%" }}
          />
        </div>
        <div className="col-md-4" style={{ margin: "180px 1px 1px 1px" }}>
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Welcome to Kickermuse, where passion meets style and expertise. Our
            journey began in the hallowed halls of college, where three friends
            shared a common obsession - sneakers. Bound by our love for these
            iconic footwear pieces, we embarked on a remarkable adventure
            together. Armed with a deep understanding of sneaker culture, an
            insatiable thirst for knowledge, and an unwavering commitment to
            quality, we founded Kickermuse. What began as a labor of love soon
            transformed into a thriving business. Today, Kickermuse is not just
            a company; it's a testament to our dedication and the support of our
            incredible community of sneaker enthusiasts. We're proud to have
            turned our shared passion into a resounding success story, and we
            invite you to join us on this journey of style, authenticity, and
            the love of sneakers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
