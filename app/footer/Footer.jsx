import "./footer.css";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contact">
          <p>Shivansh Rawat</p>
          <p>Email: shivashrawat587@gmail.com</p>
          <p>Phone: 9557667604</p>
        </div>
        <div className="links">
          <a
            href="https://github.com/Shivansh3218"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> &nbsp; GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivansh-rawat-78aa421b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> &nbsp; LinkedIn
          </a>
          <a
            href="https://www.youtube.com/channel/UCicc2cwf78L6WXLB-BZ2hjg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube /> &nbsp; YouTube
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
