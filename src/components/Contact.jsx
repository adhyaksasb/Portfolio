import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#10142c]  flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/0e93389f-f19d-433a-bd22-445887af94c4"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#784390]">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below or Feel free to send me an e-mail on
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
          name="name"
        />
        <input
          className="my-4 p-2 bg-slate-100"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-slate-100"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#784390] hover:border-[#784390] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
