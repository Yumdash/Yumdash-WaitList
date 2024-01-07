import Modal from '../../Modal/Modal';
import NavBar from '../../NavBar/NavBar';
import Mail from '../../PartnerMail/Mail';
import House1 from '../../asserts/Group 27.png';
import House2 from '../../asserts/Vector.png';
import Rider1 from '../../asserts/man-doing-bicycle-delivery-svgrepo-com 4.svg';
import Rider2 from '../../asserts/man-doing-bicycle-delivery-svgrepo-com 5.svg';

const Home = () => {
	return (
		<div>
			<div className="__home">
				<NavBar />
				<div className="__home_content px-2">
					<div className="text-center space-y-7">
						<span className="__vendor_net_btn __ar_one_sans ">We Are Cooking</span>
						<h1 className="__young_serif text-white md:text-[3rem] text-[1.8rem]">
							We Are Transforming <br /> The Food Industry
						</h1>
						<p className="__ar_one_sans __vendor_content">
							Our platform is designed to streamline the food ordering process, offering a seamless and
							personalised experience for both users and restaurants. <br className="hidden md:block" />{' '}
							We believe that our unique approach, combined with the growing demand for convenient and
							efficient food solutions, positions us as a game-changer in the market.
						</p>
						<div className="items-center justify-center text-center mt-5 block md:flex pb-[4rem]">
							<Modal />
							<Mail />
						</div>
						<p className=" text-white block md:hidden">For more info contact officialyumdash@gmail.com</p>
					</div>
				</div>
			</div>
			<div className="__home_riders">
				<span className="__home_riders_line z-10" />

				<div className="relative">
					<img src={House1} alt="" className="__house1" />
					<img src={House2} alt="" className="__house2" />
					<img src={Rider1} alt="" className="__rider1" />
					<img src={Rider2} alt="" className="__rider2" />
				</div>
			</div>
		</div>
	);
};

export default Home;

{
	/* <button onClick={toggleModal} className="__download_btn1 __ar_one_sans mr-3 text-black ">
								Join Our Waitlist
							</button> */
}
