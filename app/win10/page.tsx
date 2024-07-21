import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-20 bg-white max-md:px-5">
        <div className="flex gap-5 items-center self-start mt-16 text-black leading-[100%] max-md:flex-wrap max-md:mt-10">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2341b1339006301d347cee5dd1de6093352addd79a085fcc02fb1b70dd2e1426?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&"
            className="shrink-0 self-stretch max-w-full aspect-square w-[101px]"
          />
          <div className="flex-auto self-stretch my-auto text-6xl font-bold max-md:text-4xl">
            Windows 10
          </div>
          <div className="justify-center self-stretch px-7 py-3.5 my-auto text-2xl font-semibold text-center bg-zinc-300 rounded-[55px] max-md:px-5">
            Operating System
          </div>
        </div>
        <div className="mt-14 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="justify-center px-8 py-9 text-2xl leading-8 text-black rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:mt-7 max-md:max-w-full">
                <span className="font-semibold">Overview</span>
                <br />
                Windows 10, released in July 2015, is a major operating system
                developed by Microsoft. It succeeded Windows 8.1 and aimed to
                address user interface criticisms while offering a unified
                experience across PCs, tablets, and other devices. Windows 10 has
                seen ongoing development through feature updates and is designed
                to adapt to different form factors and input methods.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
                <div className="flex flex-col items-start py-7 pr-20 pl-6 rounded-xl border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
                  <div className="text-2xl font-semibold leading-8 text-black">
                    Developer
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="flex justify-center items-center px-0.5 w-11 h-11 rounded-lg border border-gray-200 border-solid bg-zinc-100">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd380487171e6fd073fc89443ff3374488355b193fe60f8829b17db893148bec?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&"
                        className="w-10 aspect-square"
                      />
                    </div>
                    <div className="flex-auto my-auto text-2xl font-medium leading-8 text-black">
                      Microsoft
                    </div>
                  </div>
                </div>
                <div className="justify-center p-6 mt-6 text-2xl font-semibold leading-8 rounded-xl border border-solid border-zinc-300 text-neutral-400 max-md:px-5 max-md:max-w-full">
                  Support status
                  <br />
                  <span className=""> Ending soon</span>
                  <br />
                  <span className="text-base  text-neutral-400">
                    Microsoft will end support for Windows 10 on October 14, 2025.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
