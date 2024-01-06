import { Link } from 'react-router-dom';

const JoinWaitList = () => {
	return (
		<div className="__join_waitlist">
			<div className="__join_waitlist_content">
				<h2 className="__ar_one_sans text-white text-3xl">Join Waitlist</h2>
				<form className="__join_waitlist_form items-center justify-center mt-5">
					<div>
						<h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">Your Name</h1>
						<input className="__waitlist_form" type="text" />
					</div>
					<div className="my-4 ">
						<h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">Your Email</h1>
						<input className="__waitlist_form" type="email" />
					</div>
					<div className="mt-[3rem]">
						<button to="/" className="__waitlist_btn __ar_one_sans mr-3 text-black ">
							Join Our Waitlist
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JoinWaitList;
