import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import closeBtn from '../asserts/carbon_close-filled.png';

const Modals = () => {
	const [ modal, setModal ] = useState(false);

	const closeModal = () => {
		setModal(false);
	};
	const [ formData, setFormData ] = useState({
		name: '',
		email: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const submitForm = async () => {
		try {
			if (!formData.name || !formData.email) {
				toast.error('please fill out all fields');
				return;
			}

			const response = await axios.post('https://submit-form.com/bV1IluTJB');
			if (response) {
				toast.success('Your details were submitted successfully');
				closeModal();
			} else {
				toast.error('Waitlist submission failed. Please try again');
			}
		} catch (error) {
			console.error('Form submittion failed', error);
			toast.error('Waitlist submission failed. Please try again');
		}
	};
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
							<div className="__close_btn">
								<img src={closeBtn} className="cursor-pointer" onClick={closeModal} />
							</div>
							<div className="__join_waitlist_content">
								<h2 className="__ar_one_sans text-white text-3xl">Join Waitlist</h2>
								<form className="__join_waitlist_form items-center justify-center mt-5">
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
											onChange={handleChange}
											value={formData.name}
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
											onChange={handleChange}
											value={formData.email}
										/>
									</div>
									<div className="mt-[3rem]">
										<button
											type="button"
											onClick={submitForm}
											className="__waitlist_btn __ar_one_sans mr-3 text-black "
										>
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
export default Modals;
