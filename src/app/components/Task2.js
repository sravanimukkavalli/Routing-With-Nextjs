"use client";
import { useState } from "react";
export default function Task2() {
  const [name, updateName] = useState();
  const [email, updateEmail] = useState();
  const [phoneNumber, updatePhoneNumber] = useState();
  const onSubmitForm = (e) => {
    e.preventDefault();
    const payload = { Name: name, Email: email, Number: phoneNumber };
    console.log(payload);
    updateName("");
    updateEmail("");
    updatePhoneNumber("");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-green-100">
      <div className="flex flex-row items-center bg-white w-4/6 rounded-xl h-5/6">
        <div className="flex flex-col h-5/6 w-2/6 bg-blue-700 ml-3 rounded-xl pt-3">
          <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 pt-1 text-black border-2 border-gray bg-green-200">
              1
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 1</p>
              <p className="text-white text-md">YOUR INFO</p>
            </div>
          </div>
          <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent border-2 pt-1 text-white border-white ">
              2
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 2</p>
              <p className="text-white text-md">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent pt-1 text-white border-2 border-white">
              3
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 3</p>
              <p className="text-white text-md">ADD-ONS</p>
            </div>
          </div>
          <div className="flex flex-row items-center pl-10 pb-3">
            <p className="text-center w-8 h-8 rounded-full mt-2 bg-transparent pt-1 text-white border-2 border-white">
              4
            </p>
            <div className="flex pl-4 flex-col">
              <p className="pt-3 text-indigo-200 text-sm">STEP 4</p>
              <p className="text-white text-md">SUMMARY</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start pl-20">
          <h1 className="text-blue-900 font-bold font-serif text-xl">
            Personal info
          </h1>
          <p className="text-gray-500 font-normal text-16 pt-3">
            Please provide your name, email address, and phone number.
          </p>
          <form onSubmit={(e) => onSubmitForm(e)}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-blue-800 font-serif text-12 pt-5"
              >
                Name
              </label>
              <input
                type="text"
                value={name}
                id="name"
                className="border-2 border-hsl-209-14-31-53 bg-transparent w-350 mt-3 pl-3 rounded-lg h-10 outline-none"
                placeholder="e.g.Stephen King"
                onChange={(e) => updateName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-blue-800 font-serif text-12 pt-5"
              >
                Email Address
              </label>
              <input
                type="text"
                value={email}
                id="email"
                className="border-2 border-hsl-209-14-31-53 bg-transparent w-350 mt-3 pl-3 rounded-lg h-10 outline-none"
                placeholder="e.g.stephenking@lorem.com"
                onChange={(e) => updateEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="number"
                className="text-blue-800 font-serif text-12 pt-5"
              >
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                id="number"
                className="border-2 border-hsl-209-14-31-53 bg-transparent w-350 mt-3 pl-3 rounded-lg h-10 outline-none"
                placeholder="e.g. +1 234 567 890"
                onChange={(e) => updatePhoneNumber(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-190 h-35 px-5 py-1 bg-blue-900 border-none outline-none rounded-lg text-white ml-[15rem] mt-12"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
