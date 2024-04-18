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
       <header >
          <nav className="bg-slate-400 max-w-[1120px] mx-auto mt-6">
               <div className="container ">
                  <div className="flex justify-between ">
                       <div className="text-primary py-2 ">
                           <h1 className="text-3xl font-bold font-serif ">Car Rental</h1>
                       </div>
                       <div className="pl-40">
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
                       <div className="pr-4">
                           <button className="py-2  bg-primary text-White1 border-2 border-primary rounded
                            hover:text-primary hover:bg-White1 transition-colors duration-500 text-lg font-medium">Login | Sign Up</button>
                       </div>
                  
                    </div>
              </div>
         </nav>
       
           <div className="container bg-black min-h-[742px] max-w-[613px]">

           </div>
           
         
        </header>


        
        </>
    );

}
export default Hero