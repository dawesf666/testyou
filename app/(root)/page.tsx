// //import { Collection } from "@/components/shared/Collection"
// import { ContainerScroll } from "@/components/global/container-scroll-animation";
// import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
// import Navbar from "@/components/shared/Navbar";
// import { Button } from "@/components/ui/button";
// import { navLinks } from "@/constants";
// //import { clients } from "@/constants";
// //import { getAllImages } from "@/lib/actions/image.actions";
// import Image from "next/image";
// import Link from "next/link";
// //const clients = [];
// const Home = () => {
//     return (
//         <div>
//             <Navbar />
//             <section className="h-screen w-full bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center antialiased">
//                 <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
//                 <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
//                     <ContainerScroll
//                         titleComponent={
//                             <div className="flex items-center flex-col">
//                                 <Button
//                                     size={"lg"}
//                                     className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
//                                 >
//                                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
//                                         Prova subito gratuitamente
//                                     </span>
//                                 </Button>
//                                 <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
//                                     Amplia la tua conoscenza imparando con
//                                     TestYou
//                                 </h1>
//                             </div>
//                         }
//                     />
//                 </div>
//             </section>
//             <section></section>

//             {/* <InfiniteMovingCards
//                 className="md:mt-[18rem] mt-[-100px]"
//                 items={clients}
//                 direction="right"
//                 speed="slow"
//             /> */}

//             {/* <section className="sm:mt-12">
//           <Collection
//             hasSearch={true}
//             images={images?.data}
//             totalPages={images?.totalPage}
//             page={page}
//           />
//         </section> */}
//         </div>
//     );
// };

// export default Home;

import React from "react";

type Props = {};

function page({}: Props) {
    return <div>page</div>;
}

export default page;
