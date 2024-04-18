import React from "react";
import displayCar from "../../assets/AboutCar.jpeg"

function AboutUs(){

    return(<>
    <div className="w-11/12  inline-block justify-center items-center mx-[50px] ">
    <div className=" flex justify-center m-7">
            <h1 className="font-serif text-5xl font-bold border-b-2 border-primary md:text-3xl">About Us</h1>
       </div>
       <div className=" w-11/12 flex  justify-center flex-col ml-20 px-3  py-9 md:flex-row">
               <div className="flex-1  overflow-hidden md:mb-5 md:mr-0">
                   <img src={displayCar} alt=""  className="max-w-full h-auto block transition duration-500 ease hover:scale-125 "/>
               </div>
               <div className="flex-1 md:pl-6 overflow-hidden">
                  <div className="mt-3">
                     <p className="text-Title leading-relaxed font-light text-4xl font-sans md:text-1xl">We are a specialized team committed to providing
                     reliable car rental services. One of the advantages 
                     of renting a car from us is offering competitive and 
                     transparent prices.
                     By providing services such as comprehensive insurance ......</p>
                  </div>
                    <div className="mt-3 ">
                     <a href="#" className="py-2 hover:border-b-2 text-primary
                          hover:border-primary transition-colors duration-500 text-3xl font-medium">Read More</a>
    
                    </div>
                </div>
      </div> 

    </div>


    
    
    </>);

}
export default AboutUs


