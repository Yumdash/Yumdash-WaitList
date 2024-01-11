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
				<div className="navbar __ar_one_sans space-x-8">
					<li>
						<a className=" __ar_one_sans text-[1.3rem]" href="#">
							Facebook
						</a>
					</li>
					<li>
						<a className=" __ar_one_sans text-[1.3rem]" href="#">
							Instagram
						</a>
					</li>
					<li>
						<a className=" __ar_one_sans text-[1.3rem]" href="#">
							Twitter
						</a>
					</li>
				</div>
			</nav>

			{/* mobile */}
			<nav className="__navbar_sm_content">
				<div>
					<img src={YumDash} alt="" className="h-[3rem] mx-auto " />
				</div>
				<div className="__ar_one_sans navbar flex pt-10 space-x-5 items-center justify-center">
					<li>
						<a className=" __ar_one_sans text-[1.3rem]" href="#">
							Facebook
						</a>
					</li>
					<li>
						<a className=" __ar_one_sans text-[1.3rem]" href="#">
							Instagram
						</a>
					</li>
					<li>
						<a className=" __ar_one_sans text-[1.3rem]" href="#">
							Twitter
						</a>
					</li>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
