
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white min-h-screen">
        <header>
        <nav className="mx-auto maxe-w-screen-lg py-8 px-8 flex justify-between items-center">
          <div className="text-2xl flex items-center font-black">logo
          </div>
          <div>
            <ul className= "flex md:gap-x-8">
            <li className=""><a className="border-2 border-transparent hover:border-blue-600 hover:text-blue-600 rounded-xl px-8 py-2 m-2">Home</a></li>
            <li className=""><a className="border-2 border-transparent hover:border-blue-600 hover:text-blue-600 rounded-xl px-8 py-2 m-2">About</a></li>
            <li className=""><a className="border-2 border-transparent hover:border-blue-600 hover:text-blue-600 rounded-xl px-8 py-2 m-2 ">Contact</a></li>
          </ul>
          </div>
          
        </nav>
        </header>
      
      {children}
      </div>
        
      </body>
    </html>
  );
}
