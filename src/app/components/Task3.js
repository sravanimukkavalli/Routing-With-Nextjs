import {
  AiOutlineMessage,
  AiOutlineThunderbolt,
  AiOutlineEye,
} from "react-icons/ai";
import { BiBrain } from "react-icons/bi";

export default function Task3() {
  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen bg-white">
      <div className="flex flex-row w-100 h-100 mt-20 rounded-tr-3xl rounded-br-3xl drop-shadow-2xl bg-white">
        <div className="h-80 w-58 bg-indigo-700 flex flex-col justify-center items-center p-10 rounded-t-xl rounded-b-xl">
          <h1 className="text-2xl pb-5 text-blue-100">Your Result</h1>
          <div className="flex flex-col items-center bg-blue-800 rounded-full w-2/5">
            <h2 className="text-15 pt-3 text-gray-400 pb-3">
              <span className="text-white text-center pl-2 text-2xl">76</span>
              <br /> of 100
            </h2>
          </div>
          <h2 className="text-white text-xl pt-2 pb-2">Great</h2>
          <p className="text-center text-md text-gray-300">
            You scored higher than 65% of <br /> the people who have taken
            <br /> these tests.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-br-2xl rounded-tr-2xl w-58 h-80 p-5">
          <h3 className="text-2xl text-black font-bold font-sans self-start">
            Summary
          </h3>
          <div className="flex flex-row items-center w-72 bg-pink-100 h-8 mb-3 mt-3">
            <AiOutlineThunderbolt className="pl-1 text-rose-500" />
            <p className="font-bold pr-5 text-rose-800 pl-2">Reaction</p>
            <p className="text-gray-500">
              <span className="text-gray-600 font-bold pl-20">80</span> / 100
            </p>
          </div>
          <div className="flex flex-row items-center w-72 bg-yellow-200 h-8 mb-3">
            <BiBrain className="pl-1 text-yellow-700" />
            <p className="font-bold text-yellow-700 pr-5 pl-2">Memory</p>
            <p className="text-gray-500">
              <span className="text-gray-600 font-bold pl-20">92</span> / 100
            </p>
          </div>
          <div className="flex flex-row items-center w-72 bg-green-100 h-8 mb-3">
            <AiOutlineMessage className="pl-1 text-green-800" />
            <p className="font-bold text-green-800 pr-9 pl-2">Verbal</p>
            <p className="text-gray-500">
              <span className="text-gray-600 font-bold pl-20">61</span> / 100
            </p>
          </div>
          <div className="flex flex-row items-center w-72 bg-blue-100 h-8 mb-3">
            <AiOutlineEye className="pl-1 text-blue-950" />
            <p className="font-bold text-blue-950 pr-9 pl-2">Visual</p>
            <p className="text-gray-500">
              <span className="text-gray-600 font-bold pl-20">72</span> / 100
            </p>
          </div>
          <button className="text-white w-40 bg-slate-700 h-8 rounded-t rounded-b mt-4">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
