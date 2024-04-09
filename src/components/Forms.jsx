import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Forms = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitForm = () => {
    setLoading(true);
    setSubmitted(true);
  };
  const handleSubmit = () => {
    if (submitted) {
      navigate("/message-sent");
      setLoading(false);
      setSubmitted(false);
    }
  };
  return (
    <>
      <div
        name="contact"
        className="w-full min-h-screen bg-[#10142c]  flex justify-center items-center p-4"
      >
        <iframe
          title="hiddenConfirm"
          name="hiddenConfirm"
          id="hiddenConfirm"
          className="hidden"
          onLoad={handleSubmit}
        ></iframe>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdvNzspjOhk54nhaV8baAMiSAYhn3tuwjYUBHVla6uHKkRuxg/formResponse"
          className="flex flex-col max-w-[600px] w-full"
          target="hiddenConfirm"
          onSubmit={submitForm}
        >
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#784390]">
              Contact
            </p>
            <p className="py-4 text-gray-300">
              Feel free to send me an e-mail on
              <u className="font-bold"> adhyaksasb@gmail.com</u>
            </p>
            <p className="pb-4 text-gray-300">
              Alternatively, you can also submit a form below.
            </p>
          </div>
          <input
            className="p-2 bg-slate-100"
            type="text"
            placeholder="Name"
            name="entry.2005620554"
            required
          />
          <input
            className="my-4 p-2 bg-slate-100"
            type="email"
            placeholder="Email"
            name="entry.1045781291"
            required
          />
          <textarea
            className="my-4 p-2 bg-slate-100"
            name="entry.839337160"
            placeholder="Message"
            rows="10"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white border-2 hover:bg-[#784390] hover:border-[#784390] px-4 py-3 my-8 mx-auto flex items-center"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
      <Loader loading={loading} test="test" />
    </>
  );
};

export default Forms;
