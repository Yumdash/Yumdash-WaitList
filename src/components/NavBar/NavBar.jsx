import { Link } from "react-router-dom";
import YumDash from "../assets/logo.png";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/yumdashafrica",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yumdashng/",
  },
  {
    name: "X/Twitter",
    link: "https://x.com/yumdashng",
  },
];

const NavBar = () => {
  return (
    <div>
      {/* desktop */}
      <nav className=" __navbar_content">
        <Link className="text-white font-bold ">
          <img src={YumDash} alt="" className="pb-5 h-[66px]" />
        </Link>
        <div className="navbar __ar_one_sans space-x-8">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                className=" __ar_one_sans text-[1.3rem]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </div>
      </nav>

      {/* mobile */}
      <nav className="__navbar_sm_content mb-5">
        <div>
          <img src={YumDash} alt="" className="h-[3rem] mx-auto " />
        </div>
        <div className="__ar_one_sans navbar flex pt-7 space-x-5 items-center justify-center">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                className=" __ar_one_sans text-base"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
