<<<<<<< HEAD
=======


>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
import React from 'react';
import TestimonialCard from './TestimonialCard';
import {committeeHeadData} from "../datafactory/committeeHeadData.json";

const Testimonies = () => {
    return (
        <section className="flex flex-col mx-auto container justify-center items-center py-10 px-4">
          <div className="flex flex-col md:text-center">
<<<<<<< HEAD
            <h1 className="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">
              Testimonials
            </h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
=======
          <div class="lg:w w-full mb-6 lg:mb-0">
      <h1 class="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">Testimonials</h1>
        <div class="h-1 w-20 bg-yellow-400 rounded mb-8"></div>
      </div>
            {/* <h1 className="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">
              Testimonials
            </h1> */}
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
             {
               committeeHeadData.map(item=><TestimonialCard data={item}/>)
             }
            </div>
          </div>
        </section>
    );
}

export default Testimonies;
<<<<<<< HEAD
=======




// import React from 'react'

// export default function Testimonies() {
//     return (
//         <div>
//             <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap w-full mb-20">
//       <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
//       <h1 class="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">Testimonies</h1>
//         {/* <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Testimonies</h1> */}
//         <div class="h-1 w-20 bg-indigo-500 rounded"></div>
//       </div>
//       <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Look at this example of a long, rambling testimonial… “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>
//     </div>
//     <div class="flex flex-wrap -m-4">
//       <div class="xl:w-1/4 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
//           {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Executive Committee</h2>
//           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div class="xl:w-1/4 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
//           {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Working Committee</h2>
//           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div class="xl:w-1/4 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
//           {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Technical Committee</h2>
//           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div class="xl:w-1/4 md:w-1/2 p-4">
//         <div class="bg-gray-100 p-6 rounded-lg">
//           <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
//           {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Advisory Board</h2>
//           <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//         </div>
//     )
// }
>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
