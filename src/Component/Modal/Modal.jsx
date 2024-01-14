import { useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import closeBtn from '../asserts/carbon_close-filled.png';

const FORMSPARK_FORM_ID = 'bV1IluTJB';

const Modals = () => {
	const [ modal, setModal ] = useState(false);
	const closeModal = () => {
		setModal(false);
	};

	const [ submit, submitting ] = useFormspark({
		formId: FORMSPARK_FORM_ID
	});

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			if (!name || !email) {
				toast.error('please fill out all fields');
				return;
			}
			// Submit the form data
			await submit({ name, email });

			// Handle success (you can customize this part based on your requirements)
			toast.success('Your details were submitted successfully');

			// Optionally, reset the form or update the state after successful submission
			setName('');
			setEmail('');
			closeModal();
		} catch (error) {
			console.error('Form submittion failed', error);
			toast.error('Waitlist submission failed. Please try again');
		}
	};

	const toggleModal = () => {
		setModal(!modal);
	};

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

								<form
									onSubmit={onSubmit}
									className="__join_waitlist_form items-center justify-center mt-5"
								>
									<div>
										<h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">
											Your Name
										</h1>
										<input
											type="text"
											id="name"
											name="name"
											className="__waitlist_form"
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="Name"
										/>
									</div>
									<div className='mt-3'>
										<h1 className="__ar_one_sans text-white text-xl pr-[13rem] font-light">
											Your Email
										</h1>
										<input
											type="email"
											id="email"
											name="email"
											className="__waitlist_form"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="Email"
										/>
									</div>
									<div className="mt-[3rem]">
										<button
											type="submit"
											disabled={submitting}
											className="__waitlist_btn __ar_one_sans mr-3 text-black "
										>
											{submitting ? 'Submitting...' : 'Submit'}
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
