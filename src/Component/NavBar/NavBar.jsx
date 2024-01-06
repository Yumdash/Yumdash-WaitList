import { Link } from 'react-router-dom';
import YumDash from '../asserts/Group 13.png';

const NavBar = () => {
	return (
		<div>
			{/* desktop */}
			<nav className=" __navbar_content">
				<Link className="text-white font-bold ">
					<img src={YumDash} alt="" className="pb-5 h-[66px]" />
				</Link>
				<div className="__ar_one_sans pt-1 flex space-x-12">
					<a href="#" className="nav__Links no-underline">
						FACEBOOK <span className="__line" />
					</a>
					<a href="#" className="nav__Links no-underline">
						INSTAGRAM <span className="__line" />
					</a>
					<a href="#" className="nav__Links no-underline">
						TWITTER <span className="__line" />
					</a>
				</div>
			</nav>

			{/* mobile */}
			<nav className="__navbar_sm_content text-center">
				<div>
					<img src={YumDash} alt="" className="h-[4rem] mx-auto " />
				</div>
				<div className="__ar_one_sans flex pt-10 space-x-5 px-7">
					<a href="#" className="nav__Links no-underline">
						FACEBOOK <span className="__line_sm" />
					</a>
					<a href="#" className="nav__Links no-underline">
						INSTAGRAM <span className="__line_sm" />
					</a>
					<a href="#" className="nav__Links no-underline">
						TWITTER <span className="__line_sm" />
					</a>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
