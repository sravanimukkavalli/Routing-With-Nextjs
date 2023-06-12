"use client";
import { useState } from "react";
import { DeletePlanetInfo, getPlanetInfo } from "../../apis/client/http-client";
import { useQuery } from "react-query";

export default function GetRapid() {
  const { data: res } = useQuery(["planet"], () => getPlanetInfo());
  console.log(res);
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden overflow-y-auto">
      <ul className="grid grid-cols-3 flex-wrap ">
        {res &&
          res.map((each, index) => (
            <li key={each.id} className="bg-white drop-shadow-xl mx-4 my-2">
              <div className="flex flex-col text-center px-2 py-2">
                <p className="text-orange-900">{each.name}</p>
                <p className="text-gray-500 text-sm">{each.description}</p>
                <div className="flex flex-row justify-around pt-2">
                  <a href={each.wikiLink} target="_blank">
                    <img
                      src={each.imgSrc.img}
                      alt={each.name}
                      className="w-21 h-20"
                    />
                  </a>
                  <div className="flex flex-col justify-center">
                    <p>Volume : {each.basicDetails.volume}</p>
                    <p>Mass : {each.basicDetails.mass}</p>
                  </div>
                </div>
                {/* <button
                  type="button"
                  onClick={() => DeletePlanetInfo(each.id)}
                  className="bg-gray px-2 py-2 hover:bg-indigo-200 w-20 ml-[15rem]"
                >
                  DELETE
                </button> */}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
