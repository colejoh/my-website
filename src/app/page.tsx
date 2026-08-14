import type { Metadata } from "next";
import Me from "~/public/img/me_svg_white.svg";
import { ExternalLink } from "./_components/external-link";

export const metadata: Metadata = {
    title: "Cole Johnson",
};

export default function Home() {
    return (
        <div className="w-full h-full bg-white px-4  flex justify-center py-8">
            <div className="w-full max-w-[576px] flex flex-col grow">
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 text-white font-bold flex items-center justify-center bg-black rounded-xl">
                        CJ
                        {/* <Me className="w-8 h-8 -rotate-12" /> */}
                    </div>
                    <div>
                        <ExternalLink href="https://linkedin.com/in/colehjohn">
                            <p className="uppercase text-xs font-bold text-gray-600 underline group-hover:text-gray-900">
                                LinkedIn
                            </p>
                        </ExternalLink>
                    </div>
                </div>
                <div className="flex grow w-full items-center justify-center pb-10">
                    <div className="flex flex-col gap-6 w-full">
                        <p className="uppercase text-xl font-medium">
                            Hi, I'm Cole.
                        </p>
                        <div className="flex flex-col gap-3">
                            <p className="font-medium text-black/80">
                                Right now, I'm...
                            </p>
                            <ul className="list-disc list-inside md:pl-4 space-y-2">
                                <li>
                                    building{" "}
                                    <ExternalLink href="https://joinrunway.io">
                                        Runway
                                    </ExternalLink>
                                    .
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-medium font-black/80">
                                In the past, I...
                            </p>
                            <ul className="list-disc list-inside md:pl-4 space-y-2">
                                <li>
                                    founded a pizza restaurant{" "}
                                    <span className="hidden md:inline">
                                        in a small Colorado ski town.
                                    </span>
                                </li>
                                <li>
                                    helped build the first version{" "}
                                    <ExternalLink href="https://withjuly.com">
                                        July.
                                    </ExternalLink>
                                </li>
                                <li>
                                    worked on FE infra at{" "}
                                    <ExternalLink href="https://slack.com">
                                        Slack
                                    </ExternalLink>
                                    <span className="hidden md:inline">
                                        . (and got patent #US-11477296-B2)
                                    </span>
                                </li>
                                <li>
                                    taught{" "}
                                    <ExternalLink href="https://selfservice.mypurdue.purdue.edu/prod/bzwsrch.p_search_schedule?term=201810&subject=CS&cnbr=19300&schd_type=LEC">
                                        CS193
                                    </ExternalLink>{" "}
                                    at Purdue.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="flex items-center justify-center h-screen w-full max-md:block max-md:h-auto">
    //         <div className="max-w-[540px] mx-auto text-center box-border max-md:px-4 max-md:w-full">
    //             <div className="grid grid-cols-[2rem_1fr] text-left mt-[30px] mb-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="mr-4 mt-[2px] max-md:hidden">👋</div>
    //                 <div>Hi! I&apos;m Cole.</div>
    //             </div>

    //             <div className="grid grid-cols-[2rem_1fr] text-left my-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="mr-4 mt-[2px] max-md:hidden">🛫</div>
    //                 <div>
    //                     I&apos;m helping companies hire the best entry-level
    //                     talent at{" "}
    //                     <a
    //                         href="https://joinrunway.io"
    //                         target="_blank"
    //                         className="hover:underline"
    //                     >
    //                         Runway
    //                     </a>
    //                     .
    //                 </div>
    //             </div>

    //             <div className="grid grid-cols-[2rem_1fr] text-left my-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="mr-4 mt-[2px] max-md:hidden">🍕</div>
    //                 <div>
    //                     I founded a pizza restaurant called{" "}
    //                     <a
    //                         href="https://tosswoodfired.com"
    //                         target="_blank"
    //                         className="hover:underline"
    //                     >
    //                         Toss
    //                     </a>
    //                     .
    //                 </div>
    //             </div>

    //             <div className="grid grid-cols-[2rem_1fr] text-left my-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="mr-4 mt-[2px] max-md:hidden">🏎️</div>
    //                 <div>
    //                     I built a tool called{" "}
    //                     <a
    //                         href="https://miglia.co"
    //                         target="_blank"
    //                         className="hover:underline"
    //                     >
    //                         Miglia
    //                     </a>
    //                     , which car clubs use to run their events.
    //                 </div>
    //             </div>

    //             <div className="grid grid-cols-[2rem_1fr] text-left my-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="mr-4 mt-[2px] max-md:hidden">☀️</div>
    //                 <div>
    //                     I helped build the first version{" "}
    //                     <a
    //                         href="https://withjuly.com"
    //                         target="_blank"
    //                         className="hover:underline"
    //                     >
    //                         July
    //                     </a>
    //                     , which raised $2.3M from 776.
    //                 </div>
    //             </div>

    //             <div className="grid grid-cols-[2rem_1fr] text-left my-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="bg-[url('/img/slack.png')] w-5 h-5 bg-contain bg-no-repeat mr-4 mt-[2px] max-md:hidden" />
    //                 <div>
    //                     From 2018 to 2022, I was a Software Engineer at{" "}
    //                     <a
    //                         href="https://slack.com"
    //                         target="_blank"
    //                         className="hover:underline"
    //                     >
    //                         Slack
    //                     </a>
    //                     .
    //                 </div>
    //             </div>

    //             <div className="grid grid-cols-[2rem_1fr] text-left my-6 mx-auto items-start leading-[1.6rem] max-md:text-sm max-md:grid-cols-1 max-md:gap-2">
    //                 <div className="mr-4 mt-[2px] max-md:hidden">💻</div>
    //                 <div>
    //                     I graduated from{" "}
    //                     <a href="http://purdue.edu" className="hover:underline">
    //                         Purdue University
    //                     </a>{" "}
    //                     with a degree in Computer Science. At Purdue, I led
    //                     design at{" "}
    //                     <a
    //                         href="http://boilermake.org"
    //                         className="hover:underline"
    //                     >
    //                         Boilermake
    //                     </a>
    //                     , and lectured{" "}
    //                     <a
    //                         href="https://github.com/Purdue-CSUSB/CS-193-F2017"
    //                         className="hover:underline"
    //                     >
    //                         a class
    //                     </a>{" "}
    //                     of 500 CS Freshmen.
    //                 </div>
    //             </div>

    //             <div className="mt-[30px] flex gap-4 ml-8 max-md:flex-col max-md:items-start max-md:m-0">
    //                 <a href="http://github.com/colejoh" target="_blank">
    //                     <button className="inline-block px-[18px] py-[14px] shadow-[0_4px_6px_rgba(50,50,93,.11),0_1px_3px_rgba(0,0,0,.08)] bg-[#24292E] rounded text-xs font-semibold uppercase tracking-wide text-white border-none cursor-pointer transition-all duration-150 hover:-translate-y-px hover:shadow-[0_7px_14px_rgba(50,50,93,.1),0_3px_6px_rgba(0,0,0,.08)] max-md:text-[11px] max-md:w-[150px]">
    //                         <svg
    //                             className="inline-block w-4 h-4 mr-1 -mt-0.5 fill-current"
    //                             viewBox="0 0 16 16"
    //                         >
    //                             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    //                         </svg>
    //                         Github
    //                     </button>
    //                 </a>
    //                 <a
    //                     href="http://instagram.com/thingscoledoes"
    //                     target="_blank"
    //                 >
    //                     <button className="inline-block px-[18px] py-[14px] shadow-[0_4px_6px_rgba(50,50,93,.11),0_1px_3px_rgba(0,0,0,.08)] bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] rounded text-xs font-semibold uppercase tracking-wide text-white border-none cursor-pointer transition-all duration-150 hover:-translate-y-px hover:shadow-[0_7px_14px_rgba(50,50,93,.1),0_3px_6px_rgba(0,0,0,.08)] max-md:text-[11px] max-md:w-[150px]">
    //                         <svg
    //                             className="inline-block w-4 h-4 mr-1 -mt-0.5 fill-current"
    //                             viewBox="0 0 24 24"
    //                         >
    //                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    //                         </svg>
    //                         Instagram
    //                     </button>
    //                 </a>
    //                 <a href="http://linkedin.com/in/colehjohn" target="_blank">
    //                     <button className="inline-block px-[18px] py-[14px] shadow-[0_4px_6px_rgba(50,50,93,.11),0_1px_3px_rgba(0,0,0,.08)] bg-[#0077B5] rounded text-xs font-semibold uppercase tracking-wide text-white border-none cursor-pointer transition-all duration-150 hover:-translate-y-px hover:shadow-[0_7px_14px_rgba(50,50,93,.1),0_3px_6px_rgba(0,0,0,.08)] max-md:text-[11px] max-md:w-[150px]">
    //                         <svg
    //                             className="inline-block w-4 h-4 mr-1 -mt-0.5 fill-current"
    //                             viewBox="0 0 24 24"
    //                         >
    //                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    //                         </svg>
    //                         Linkedin
    //                     </button>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // );
}
