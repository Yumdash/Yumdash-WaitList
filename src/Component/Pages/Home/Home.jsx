import NavBar from '../../NavBar/NavBar';
import House1 from '../../asserts/Group 27.png';
import House2 from '../../asserts/Vector.png';
import Rider1 from '../../asserts/man-doing-bicycle-delivery-svgrepo-com 4.svg';
import Rider2 from '../../asserts/man-doing-bicycle-delivery-svgrepo-com 5.svg';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className="__home">
				<NavBar />
				<div className="__home_content px-2">
					<div className="text-center space-y-7">
						<span className="__vendor_net_btn __ar_one_sans mb-7 px-12 py-1">We Are Cooking</span>
						<h1 className="__young_serif text-white md:text-[3rem] text-[1.8rem]">
							We Are Transforming <br /> The Food Industry
						</h1>
						<p className="__ar_one_sans text-white md:px-[20rem] -px-[1rem]">
							Our platform is designed to streamline the food ordering process, offering a seamless and
							personalised experience for both users and restaurants. <br /> We believe that our unique
							approach, combined with the growing demand for convenient and <br /> efficient food
							solutions, positions us as a game-changer in the market.
						</p>
						<div className="items-center justify-center text-center mt-5 block md:flex pb-[4rem]">
							<Link to="/waitlist" className="__download_btn1 __ar_one_sans mr-3 text-black ">
								Join Our Waitlist
							</Link>
							<button className="__download_btn2 __ar_one_sans ">Partner With Us</button>
						</div>
						<p className=" text-white block md:hidden">For more info contact officialyumdash@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="__home_riders">
				<span className="__home_riders_line z-10" />

				<div className="relative">
					<img src={House1} alt="" className="absolute left-0 md:-bottom-6 -bottom-2 md:h-[7rem] h-[4rem]" />
					<img
						src={House2}
						alt=""
						className="absolute md:right-[0rem] -right-[3.5rem] md:-bottom-[1.5rem] -bottom-[0.5rem] md:h-[14rem] h-[7rem]"
					/>
					<img
						src={Rider1}
						alt=""
						className="absolute md:right-[15rem] right-[2rem] md:bottom-2 bottom-2 md:h-[14rem] h-[7rem]"
					/>
					<img
						src={Rider2}
						alt=""
						className="absolute md:right-[55rem] right-[10rem] -bottom-2 md:h-[14rem] h-[7rem]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
