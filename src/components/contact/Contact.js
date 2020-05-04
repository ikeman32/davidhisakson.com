import React from "react";
import './contact.scss';

const Contact = () => {
  /*Put all of your hooks, functions, etc here */

  return (
    <div className="contact_container">
      <section className='form_section'>
        <form action="" method="post" className='contact_form'>
          <div id="name">
            <input type="text" name="fname" placeholder="First Name" required />
            <input type="text" name="lname" placeholder="Last Name" required />
          </div>

          <div className="info">
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="Company" placeholder="Company" />
          </div>
          <div className="subject">
            <select name="subject" id="subj" placeholder="Subject">
              <option value="Inquiry">Inquiry</option>
              <option value="">Are you available</option>
              <option value="">Interview requested</option>
            </select>
          </div>
          <div className="message">
            <textarea name="message" id="msg" cols="30" rows="10"></textarea>
          </div>
          <div className="btns">
            <input type="reset" name="rested" value="Reset" />
            <input type="submit" name="submit" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
