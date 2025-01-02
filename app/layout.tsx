'use client'

import localFont from "next/font/local";
import "./globals.css";
import { useToast } from "@/hooks/use-toast"

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import { Navbar } from "@/components/custom/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "KSA Associates",
//   description: "Your trusted Chartered Accountants",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { toast } = useToast()

  async function handleSubmit(event:React.ChangeEvent<HTMLFormElement>) {

    event.preventDefault();
    const formData = new FormData(event.target)
    try {
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });

        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
    } catch (err) {
        console.error(err);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please try resubmitting the form",
        })
    }
};

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <footer
          id="contact"
          className="row-start-3 flex gap-6 pb-10 flex-wrap items-center justify-center"
        >
        <div className="">
          <div className="">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
              <div>
                <h1 className="text-[2.5rem] text-center font-bold">
                  Let&apos;s Talk
                </h1>
                <p className="text-sm text-gray-400 mt-3">
                  Let’s Work Together to Grow Your Business. Ready to transform
                  your financial operations and achieve compliance? Reach out to
                  us today!
                </p>
                <div className="mt-12">
                  <h2 className="text-lg font-extrabold">Contact us</h2>
                  <ul className="mt-3">
                    <li className="flex items-center">
                      <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 479.058 479.058"
                        >
                          <path
                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>
                      <a
                        target="blank"
                        href="info@ksafirm.in"
                        className="text-[#153b55] text-sm ml-3"
                      >
                        <small className="block">Mail</small>
                        <strong>info@ksafirm.in</strong>
                      </a>
                    </li>
                    
                    <br/>


                    <li className="flex items-center">
                      <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                         width="20px"
                         height="20px"
                         fill="#007bff"
                          viewBox="0 0 24 24">
                            <path 
                             d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"
                             />
                        </svg>  
                      </div>
                      <a
                        target="blank"
                        href="info@ksafirm.in"
                        className="text-[#153b55] text-sm ml-3"
                      >
                        <small className="block">Phone</small>
                        <strong>+91 82378 57853</strong>
                      </a>
                    </li>

                    <li className="flex items-center mt-4">
                      <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#007bff" className="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <a
                        target="blank"
                        href="info@ksafirm.in"
                        className="text-[#153b55] text-sm ml-3"
                      >
                        <small className="block">Offices</small>
                        <strong className="">Corporate Office: </strong><p className=""> 103, Mayfair Tower - II, Wakdewadi, Shivajinagar - 411 005</p>
                        <strong  className="">Registered Office: </strong> <p className="">G-1103, Prakriti Building, Balewadi Phata, Baner, Pune - 411 045</p>
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="mt-12">
                  <h2 className="text-lg font-extrabold">Socials</h2>
                  <ul className="flex mt-3 space-x-4">
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <a href="https://www.linkedin.com/company/ksa-associates-in/?originalSubdomain=in" target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="#007bff"
                          viewBox="0 0 511 512"
                        >
                          <path
                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                            data-original="#000000"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="ml-auo space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
    
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#153b55]"
                />
                <input
                  type="email"
                  name="email"
                 
                  placeholder="Email"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#153b55]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#153b55]"
                />
                <textarea
                  placeholder="Message"
                  name="message"
            
                  rows={6}
                  className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#153b55]"
                ></textarea>
                <button
                 type="submit"
                  className="text-white bg-[#153b55] hover:bg-indigo-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
