import Image from "next/image";
import Park from "@/components/home/park"

type Place = {
  name: string,
  images: Image[],
  id: string
}

type Image = {
  url: string,
  caption: string
}

export default async function Home() {
  const response = await fetch("https://developer.nps.gov/api/v1/parks?api_key=dBtoOmPIKmoTCwhEkknXohlpvJnLhQtEMvslNvsc");

  const allstuff = await response.json();

  
  const places:Place[] = allstuff.data;


  return (
    <>
      <h1 className="">Hello, my name is John and I&apos;ve been to:</h1>
      <div className="flex flex-wrap bg-gradient-to-br from-green-800 to-purple-700">
        {places.map(place => <Park key={place.id} park={place} />)}
      </div>
    </>
  );
}
