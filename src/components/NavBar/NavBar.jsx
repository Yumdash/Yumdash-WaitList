import { Link } from "react-router-dom";
import YumDash from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      {/* desktop */}
      <nav className=" __navbar_content">
        <Link className="text-white font-bold ">
          <img src={YumDash} alt="" className="pb-5 h-[66px]" />
        </Link>
        <div className="navbar __ar_one_sans space-x-8">
          <li>
            <a
              className=" __ar_one_sans text-[1.3rem]"
              href="https://www.facebook.com/yumdashafrica"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className=" __ar_one_sans text-[1.3rem]"
              href="https://www.instagram.com/yumdashng/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className=" __ar_one_sans text-[1.3rem]"
              href="https://twitter.com/yumdash"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </div>
      </nav>

      {/* mobile */}
      <nav className="__navbar_sm_content mb-5">
        <div>
          <img src={YumDash} alt="" className="h-[3rem] mx-auto " />
        </div>
        <div className="__ar_one_sans navbar flex pt-7 space-x-5 items-center justify-center">
          <li>
            <a
              className=" __ar_one_sans text-[1rem]"
              href="https://www.facebook.com/yumdashafrica"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className=" __ar_one_sans text-[1rem]"
              href="https://www.instagram.com/yumdashng/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className=" __ar_one_sans text-[1rem]"
              href="https://twitter.com/yumdash"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
