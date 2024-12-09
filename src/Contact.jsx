import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"; 
import axios from "axios"

const notify = () => toast.success("Your form is submitted!");

const HandleSubmit = async (e, navigate, captchaValid) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !phone || !message) {
    toast.error("All fields are required!");
    return;
  }

  if (!captchaValid) {
    toast.error("Please verify the CAPTCHA!");
    return;
  }

  try {
    const response= await axios.post("http://localhost:3001/send-email",{
      name,
      email,
      phone,
      message
    })

    if(response.status===200){
      notify();
  setTimeout(() => {
    navigate("/");
  }, 3000);
    }
    else{
      toast.error("There was an error with your submission.");
    }
  } catch (error) {
    console.error("Error sending form:", error);
    toast.error("There was an error sending your message!");
  }

  
};

const Contact = () => {
  const navigate = useNavigate();
  const [captchaValid, setCaptchaValid] = useState(false);

  return (
    <section className="contact flex flex-col items-center px-5 md:px-0 justify-center h-screen bg-white">
      <div className="py-10 px-5 w-full max-w-[600px] mx-10 flex justify-center bg-[#F5F5F5] rounded-2xl">
        <div className="w-screen max-w-[500px] px-5">
          <p className="text-2xl font-semibold pb-5">Contact Form</p>

          <form onSubmit={(e) => HandleSubmit(e, navigate, captchaValid)} className="gap-3 grid">
            <div className="flex flex-col">
              <label className="text-base font-semibold">Name</label>
              <input
                name="name"
                className="border-black border px-8 py-2 rounded-md"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-semibold">Email</label>
              <input
                name="email"
                className="border-black border px-8 py-2 rounded-md"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-semibold">Phone</label>
              <input
                name="phone"
                className="border-black border px-8 py-2 rounded-md"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-semibold">Message</label>
              <textarea
                name="message"
                className="border-black border px-8 py-2 rounded-md"
                placeholder="Write your message"
              />
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="" // Add key here ReCAPTCHA 
                onChange={() => setCaptchaValid(true)}
                
              />
            </div>

            <button
              type="submit"
              className="flex justify-center cursor-pointer mt-5 rounded-md py-2 w-full text-white bg-zinc-700 hover:bg-zinc-600 transition duration-300"
            >
              Submit
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
