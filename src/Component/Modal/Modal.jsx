import { useState } from 'react';

const Modal = () => {
	const [ modal, setModal ] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div>
			<button onClick={toggleModal} className="__download_btn1 __ar_one_sans mr-3 text-black ">
				Join Our Waitlist
			</button>

			{modal && (
				<div className="modal pt-[59rem]">
					<div onClick={toggleModal} className="overlay" />
					<div className="modal-content">
						<div className="__join_waitlist">
							<div className="__join_waitlist_content">
								<h2 className="__ar_one_sans text-white text-3xl">Join Waitlist</h2>
								<form
									action="https://submit-form.com/bV1IluTJB"
									className="__join_waitlist_form items-center justify-center mt-5"
								>
									<div>
										<h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">
											Your Name
										</h1>
										<input
											id="name"
											name="name"
											className="__waitlist_form"
											type="text"
											placeholder="Name"
											required=""
										/>
									</div>
									<div className="my-4 ">
										<h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">
											Your Email
										</h1>
										<input
											id="email"
											name="email"
											className="__waitlist_form"
											type="email"
											placeholder="Email"
											required=""
										/>
									</div>
									<div className="mt-[3rem]">
										<button type="submit" className="__waitlist_btn __ar_one_sans mr-3 text-black ">
											Join Our Waitlist
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Modal;
