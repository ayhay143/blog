import Image from "next/image";
export default function HomePage() {
  return (
     <div>
          <div className="mx-auto  py-8 px-8 flex  items-center">
            <div className="relative w-2/5 h-100 p-8 text-center pr-[50px] "><Image src="image-central.svg" fill alt={""}/></div>
            <div className="p-8 w-3/5 bg-blue-500 text-center mr-[50px] clip-custom">
                <h1 className="text-4xl font-bold text-white">Welcome to Our Blog</h1>
                <p className="text-lg text-white mt-4">Discover the latest articles and insights on various topics.</p>
                <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-200">Read More</button>
            </div>
          </div>
          <div className="bg-gray-500 p-8 text-center">
          blogs
          </div>
        </div>
  );
}