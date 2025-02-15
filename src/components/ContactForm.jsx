import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className="flex max-w-[1280px] mx-auto mt-9">
      <div className="w-[50%] mt-4">
        <div className="flex gap-6 font-medium ">
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<IoCall />} />
        </div>
        <div className="flex font-medium w-full mt-3">
          <button
            type="button"
            className=" bg-gray-200 border border-black text-black flex items-center rounded py-3 px-3 justify-center gap-2 w-full"
          >
            <MdEmail />
            VIA EMAIL FORM
          </button>
        </div>
        <div className="mt-7 w-full">
          <form>
            <div className="flex flex-col relative">
              <label className=" bg-white font-medium absolute left-[10px] top-[-15px] px-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border border-black rounded px-1 font-light  h-[40px]"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mt-7 flex flex-col relative">
              <label className=" bg-white font-medium absolute left-[10px] top-[-15px] px-2">
                E-mail
              </label>
              <input
                type="email"
                name="name"
                className="border border-black rounded px-1 font-light  h-[40px]"
                placeholder="Enter Your E-mail"
              />
            </div>
            <div className="mt-7 flex flex-col relative">
              <label className=" bg-white font-medium absolute left-[10px] top-[-15px] px-2">
                Text
              </label>
              <textarea
                type="text"
                name="name"
                className="border border-black rounded px-1 py-1 font-light h-[100px]"
                placeholder="Enter Text"
              />
            </div>
            <div className="flex font-medium w-full mt-3">
              <button
                type="button"
                className=" bg-black text-white flex items-center rounded py-3 px-3 justify-center gap-2 w-full"
              >
                SUBMIT BUTTON
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[45%] mt-[-60px]">
        <img src="./contact.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
