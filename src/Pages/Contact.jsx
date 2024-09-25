import React from "react";

const Contact = () => {
  const handelFormSubmit=(FormData)=>{
    const formInputData= Object.fromEntries(FormData.entries())
    console.log(formInputData);
    
    
  }
  return (
    <div>
      <div className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <form action={handelFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="enter your email"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your Message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
