import React from "react";

function Hero(){
    const NavLinks =[
        {
            id:"1",
            name:"HOME",
            link:"/#",
        },
        {
            id:"2",
            name:"CARS",
            link:"/#cars",
        },
        {
            id:"3",
            name:"ABOUT",
            link:"/#about",
        },
        {
            id:"4",
            name:"BOOKING",
            link:"/#booking",
        }
    ]

    return(
        <>
        <div className="bg-Background container m ">
            
         
            <div className="flex justify-between items-center">
               <div>
                  <h1 className="text-3xl font-bold font-serif container min-h-[620px] bg-black ">Car Rental</h1>
             </div>
              <div>
                  <ul className="flex items-center gap-6"> 
                    {
                      NavLinks.map((data) =>(
                     <li key={data.id} className="py-4" >
                     <a className="py-2 hover:border-b-2 hover:text-primary
                         hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a>
                      </li>
                      ))
                    }
                   <button className="py-2 bg-primary text-White1 border-2 border-primary rounded
                   hover:text-primary hover:bg-White1 transition-colors duration-500 text-lg font-medium">Login | Sign Up</button>

                 </ul>
             </div>
           </div>
      </div>
        
        </>
    );

}
export default Hero