import React from "react";
import MainCar from "../../assets/main.jpeg"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
function Hero(){
    const NavLinks =[
        {
            id:"1",
            name:"HOME",
            link:"/#",
        },
        {
            id:"2",
            name:"About",
            link:"/#cars",
        },
        {
            id:"3",
            name:"Booking",
            link:"/#Booking",
        },
        {
            id:"4",
            name:"Cars",
            link:"/#Cars",
        },
        {
            id:"4",
            name:"Contacts",
            link:"/#Contacts",
        },
    ]

    return(
        <>
       <header className="relative  max-w-[1440px] max-h-[742]" >
          <nav className="absolute container top-[32px] left-[180px] bg-transparent min-w-[1400px] mx-auto ">
               <div className=" ">
                  <div className="flex justify-between ">
                       <div className="text-primary py-2 ">
                           <h1 className="text-3xl font-bold font-serif ">Car Rental</h1>
                       </div>
                       <div className="pl-96">
                          <ul className="flex items-center gap-8"> 
                          {
                               NavLinks.map((data) =>(
                                  <li key={data.id} className="py-2" >
                                  <a className="py-2 hover:border-b-2 hover:text-primary
                                  hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a>
                                  </li>
                                ))
                           }

                           </ul>
                     
  
                        </div>
                       <div className="pr-4 py-1">
                           <button className="py-2  bg-primary text-black border-2 border-primary rounded
                            hover:text-primary hover:bg-White1 transition-colors duration-500 text-lg font-medium">Login | Sign Up</button>
                       </div>
                  
                    </div>
              </div>
         </nav>
           
           <div className="container bg-black min-h-[1000px] max-w-[742px]">
              <div className="pt-[300px] pl-[100px]">
                 <div class="h-20 w-0.5 bg-primary mx-5 mb-9" ></div>
                     <FaInstagram className="bg-primary text-2xl  ml-2" />
                      <FaFacebook className="bg-primary text-2xl mt-3 ml-2" />
                      <FaTwitter className="bg-primary text-2xl mt-3 ml-2" />
                      <FaWhatsapp className="bg-primary text-2xl mt-3 ml-2" />
                      <FaTelegramPlane className="bg-primary text-2xl mt-3 ml-2" />
                  <div class="h-20 w-0.5 bg-primary mx-5 mt-9" ></div>
             </div>
           </div>
           <div className="absolute top-[130px] left-[650px]  ">
              <img src={MainCar} alt=""  className="min-h-[545px] max-w-[1200px]"/>
           </div>

           <div className="absolute container bg-black bg-opacity-25 max-w-[678px] min-h-[585px] top-[240px] left-[270px] pt-[50px]" >
              <div className="text-white p-7">
                  <h1 className="text-6xl font-serif font-bold">Enjoy your life with our comfortable cars.</h1>
                  <p className="text-4xl font-serif font-bold pt-6">Carent, is ready to serve the best
                  <br/>experience in car rental.</p>
             </div>
             <div className="ml-[30px]"> 
                 <button className="py-2  bg-primary text-black border-2 border-primary rounded
                            hover:text-primary hover:bg-White1 transition-colors duration-500 text-lg font-medium px-8">Explore Now</button>
              </div>
          </div>

          
           
  
        </header>


        
        </>
    );

}
export default Hero