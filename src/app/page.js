import Image from "next/image";
import GetPlanet from "../app/components/GetPlanet";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-300 bg-cover bg-no-repeat">
      <GetPlanet />
    </div>
  );
}
