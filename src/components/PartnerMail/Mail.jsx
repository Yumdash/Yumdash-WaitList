const Mail = () => {
  const openGmail = () => {
    const email = "partner@yumdash.africa";

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    window.open(gmailComposeUrl, "_blank");
  };
  return (
    <div>
      <button
        onClick={openGmail}
        className="hover:bg-white border border-[#01231A] py-2 px-5 md:px-8 rounded-full bg-[#F49200] text-[#01231A] transition duration-300 __ar_one_sans  "
      >
        Partner With Us
      </button>
    </div>
  );
};

export default Mail;
