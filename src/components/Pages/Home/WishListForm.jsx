import { useFormspark } from "@formspark/use-formspark";
import { useState } from "react";
import { toast } from "react-toastify";

const FORMSPARK_FORM_ID = "bV1IluTJB";
function WishListForm() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email) {
        toast.error("please fill out all fields");
        return;
      }
      // Submit the form data
      await submit({ name, email });

      // Handle success (you can customize this part based on your requirements)
      toast.success("Your details were submitted successfully");

      // Optionally, reset the form or update the state after successful submission
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Form submittion failed", error);
      toast.error("Waitlist submission failed. Please try again");
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-3 w-full md:w-[20rem]"
    >
      <h2 className="__ar_one_sans text-white text-3xl">Join Waitlist</h2>
      <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="name" className="__ar_one_sans text-white font-light text-sm">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border focus:outline-none rounded-md px-2 py-2 bg-[#02674B] focus:ring focus:ring-[#F49200] text-white focus:border-transparent"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>

      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="email" className="__ar_one_sans text-sm text-white font-light">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border focus:outline-none rounded-md px-2 py-2 bg-[#02674B] focus:ring focus:ring-[#F49200] text-white focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="__ar_one_sans text-black border border-black bg-white py-2 px-8 md:px-12 rounded-full mt-2"
      >
        {submitting ? "Adding..." : "Join Our Waitlist"}
      </button>
    </form>
  );
}

export default WishListForm;
