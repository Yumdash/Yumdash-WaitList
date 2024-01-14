import Modals from '../../Modal/Modal';
import NavBar from '../../NavBar/NavBar';
import Mail from '../../PartnerMail/Mail';
import Ride from '../../asserts/Frame 2.png';
import RideSm from '../../asserts/mobile view.png';

const Home = () => {
	return (
		<div>
			<div className="__home">
				<NavBar />
				<div className="__home_content pt-[4.5rem] px-2">
					<div className="text-center  md:mt-[4rem] mt-[9rem] space-y-3 md:space-y-7">
						<span className="__vendor_net_btn __ar_one_sans ">We Are Cooking</span>
						<h1 className="__young_serif text-white md:text-[3rem]  text-[24px]">
							We Are Transforming <br /> The Food Industry
						</h1>
						<p className="__ar_one_sans __vendor_content">
							Our platform is designed to streamline the food ordering process, offering a seamless and
							personalised experience for both users and restaurants. <br className="hidden md:block" />{' '}
							We believe that our unique approach, combined with the growing demand for convenient and
							efficient food solutions, positions us as a game-changer in the market.
						</p>
						<div>
							<div className="items-center justify-center text-center mt-5 flex">
								<Modals />
								<Mail />
							</div>
							<p className="text-[0.8rem] md:text-[1rem] mt-6 text-white">
								For more info contact info@yumdash.africa
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="__home_riders">
				<img src={Ride} alt="" className="__rider_img hidden md:block" />
				<img src={RideSm} alt="" className="__rider_sm_img md:hidden" />
			</div>
		</div>
	);
};

export default Home;
