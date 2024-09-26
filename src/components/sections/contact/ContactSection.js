import React from "react";
import "./ContactSection.css";
import PrimaryButton from "../../button/PrimaryButton";

const ContactSection = () => {
  return (
    <section className="py-14 md:py-20 lg:py-32 flex" id="contact">
      <div className="container m-auto px-5 md:px-32 relative">
        <div className="max-w-[600px] m-auto text-center mb-24">
          <div className="font-mono text-lg my-3 text-primary">
            04. What’s Next?
          </div>
          <div className="large-title">Get In Touch</div>
          <div className="text-gray font-serif text-lg">
            I'm always open to new opportunities and connections. Whether you
            have a question, a project idea, or just want to say hello, feel
            free to reach out. I'll be delighted to hear from you and will do my
            best to respond promptly!
          </div>
          <PrimaryButton
            href="mailto:justinpong0416@gmail.com"
            className="mt-12"
            text="Say Hello"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
