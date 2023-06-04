import Social from "../../Components/Social/Social";
import "./Contact.scss";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import outlook from '../../assets/outlook.png'
import discord from "../../assets/discord.png";


const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <span>
      By clicking on the icons below, you can get in touch with me.
      </span>

      <div className="socials">
      <a href="https://github.com/nikolavujic15/"> <Social logo={github} title="GitHub" /></a>
           <a href="https://www.linkedin.com/in/nikola-vujic-81664a267/'"> <Social logo={linkedin} title="Linkedin" /></a>
           <a href="mailto:vujicn15@outlook.com"><Social logo={outlook} title="Outlook" /></a>
            <a href="https://www.facebook.com/nikola.vujic.98/"><Social logo={facebook} title="Facebook" /></a>
            
      </div>

      <footer>
        
      </footer>
    </div>
  );
};

export default Contact;
