import "./contact.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import resume from "../../img/resume.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fwl9vdj",
        "template_surms8b",
        formRef.current,
        "o38KmF-CeYl8UDBwT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              giteshbatra02@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Delhi, India
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={linkedin} alt="" />
              <a href="https://www.linkedin.com/in/gitesh-batra/" className="link">gitesh-batra</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={github} alt="" />
              <a href="https://github.com/Gitesh-batra" className="link">Gitesh-batra</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={resume} alt="" />
              <a href="https://drive.google.com/file/d/13Iavsn9Ap1xQETyfatB32GoOVwNcJbF1/view?usp=sharing" className="link">Resume</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along :)
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="from_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="from_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
