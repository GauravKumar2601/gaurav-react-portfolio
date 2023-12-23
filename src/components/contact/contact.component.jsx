import React from "react";
import "./contact.styles.css";

const Contact = () => {
  return (
    <div className="container contact " id="contact">
      <h3>Contact</h3>
      <p>Let's connect</p>

      <form
        action="https://formsubmit.co/83e7d67642b858e2e6dee02acd094e46"
        method="POST"
      >
        <input type="text" name="name" required placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <textarea
          name="message"
          cols="30"
          rows="8"
          placeholder="Enter your message"
        ></textarea>
        <input type="hidden" name="_captcha" value="false"></input>
        {/* Custom thank you page after submit */}
        {/* <input type="hidden" name="_next" value="#"></input> */}
        <button type="submit" className="mainBtn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
