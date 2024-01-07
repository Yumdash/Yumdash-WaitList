const Mail = () => {
	const openGmail = () => {
		const email = 'officialyumdash@gmail.com';

		const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

		window.open(gmailComposeUrl, '_blank');
	};
	return (
		<div>
			<button onClick={openGmail} className="__download_btn2 __ar_one_sans ">
				Partner With Us
			</button>
		</div>
	);
};

export default Mail;
