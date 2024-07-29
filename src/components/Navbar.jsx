import logo from "../assets/chLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-15 w-20" src={logo} alt="logo" />
      </div>
      <div className="ml-auto flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/chaitanya-deep-chellu-4a2a32213/overlay/contact-info/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Chaitanyadeep14"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-purple-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/c_h_a_i_t_a_n_y_a__d_e_e_p?igsh=MXloaGJsMWlzMTZj"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:text-blue-400"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;