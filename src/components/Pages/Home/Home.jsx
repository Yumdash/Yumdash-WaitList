import Modal from "../../Modal/Modal";
import NavBar from "../../NavBar/NavBar";
import Mail from "../../PartnerMail/Mail";
import Ride from "../../assets/Frame 2.png";
import RideSm from "../../assets/mobile view.png";
import WishListForm from "./WishListForm";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <NavBar />
      <div className="flex items-center flex-col justify-center gap-5 md:gap-3">
        <span className="__ar_one_sans text-white px-14 py-2 border border-[#474949]/80 shadow-[#F49200]/20 shadow-sm rounded-full bg-[#FFFFFF1A] transition duration-500 hover:-translate-y-1">
          We Are Cooking
        </span>
        <h1 className="__young_serif text-white md:text-[3rem] leading-tight text-[1.8rem] text-center">
          Own An Online Food <br /> Ordering Website Within <br /> 5 Minutes
          Today.
        </h1>
        <p className="px-2 __ar_one_sans text-center md:w-1/2 2xl:max-w-[40%] text-white font-medium text-base md:text-xl">
          We are creating the first truly effortless{" "}
          <span className="text-[#F49200]">e-commerce</span> platform for{" "}
          <span className="text-[#00E9AA]">food vendors</span>, combining the
          best of <span className="text-[#00E9AA]">e-commerce</span> platforms
          and <span className="text-[#00E9AA]">food marketplaces</span> while
          eliminating their{" "}
          <span className="text-[#FE3478]">biggest drawbacks</span>.
        </p>

        <p className="text-[#F49200] px-2 __ar_one_sans text-center md:w-1/2 xl:max-w-[40%] font-bold text-base md:text-xl my-1">
          Own An Online Food Ordering Website Within 5minutes Right Now
        </p>

        <div className="space-y-4">
          <div className="items-center justify-center text-center mt-3 flex md:gap-3 gap-2">
            <Modal>
              <Modal.Open opens="wishlist-modal">
                <button className="bg-white border border-[#01231A] py-2 px-5 md:px-8 rounded-full hover:bg-[#F49200] hover:text-white transition duration-300 __ar_one_sans text-black ">
                  Join Our Waitlist
                </button>
              </Modal.Open>
              <Modal.Window name="wishlist-modal">
                <WishListForm />
              </Modal.Window>
            </Modal>
            <Mail />
          </div>
          <p className="text-[0.8rem] md:text-[1rem] text-white w-fit mx-auto">
            For more info contact{" "}
            <a href="mailto:info@yumdash.africa" className="underline ">
              info@yumdash.africa
            </a>
          </p>
        </div>
      </div>
      <div>
        <img
          src={Ride}
          alt=""
          className="__rider_img hidden md:block fixed bottom-0"
        />
        <img
          src={RideSm}
          alt=""
          className="__rider_sm_img md:hidden fixed bottom-0"
        />
      </div>
    </div>
  );
};

export default Home;
