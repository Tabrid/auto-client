import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="pt-[75px]">
        <div>
          <figure className="relative">
            <img className="min-w-[100vw] object-cover max-h-[60vh]  filter brightness-[0.6]" src="https://i.postimg.cc/Y9T9bzgX/contactus.png" alt="" />
            <h3 className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl z-30">Contact</h3>
          </figure>
        </div>
        
        <main className="max-w-[1350px] px-10 2xl:px-0 mx-auto">
          <div className="my-[84px] flex md:flex-row flex-col gap-10 ">
            <div className="flex-[0.6]">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <div>
                <div className="space-y-5 [&>div>h3]:text-2xl [&>div>p]:text-lg [&>div>h3]:font-semibold my-10 ">
                  <div className="border-l-4 border-[#3B82F6] pl-5 py-10">
                    <h3>Rangpur</h3>
                    <p>Andharijhar, Bhurungamari, Kurigram</p>
                    <p>Post Code: 5670</p>
                  </div>
                  <div className="pl-5">
                    <Link to="#">View Map</Link>
                  </div>
                  <div className="pl-5">
                    <h3>Email</h3>
                    <p>contact@odommo.xyz</p>
                  </div>
                  <div className="pl-5">
                    <h3>Phone</h3>
                    <p>09606060000</p>
                    <p>Whatsapp: 01929777729</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="w-full flex-1">
              <div className="grid grid-cols-12 gap-5 [&>label>p]:py-2">
                <label htmlFor="firstName" className="col-span-6">
                  <p className="capitalize font-semibold">First Name</p>
                  <input className="border-[2px] border-black rounded p-3 w-full" type="text" name="firstName" id="firstName" />
                </label>
                <label htmlFor="lastName" className="col-span-6">
                  <p className="capitalize font-semibold">last Name</p>
                  <input className="border-[2px] border-black rounded p-3 w-full" type="text" name="lastName" id="lastName" />
                </label>
                <label htmlFor="email" className="col-span-6">
                  <p className="capitalize font-semibold">Email</p>
                  <input className="border-[2px] border-black rounded p-3 w-full" type="text" name="email" id="email" />
                </label>
                <label htmlFor="phone" className="col-span-6">
                  <p className="capitalize font-semibold">Phone</p>
                  <input className="border-[2px] border-black rounded p-3 w-full" type="tel" name="phone" id="phone" />
                </label>
                
                <label htmlFor="message" className="col-span-12">
                  <p className="capitalize font-semibold">Message</p>
                  <textarea className="border-[2px] border-black rounded p-3 w-full" name="message" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                </label>
              </div>
              <div>
                <label htmlFor="agree" className="block">
                  <input type="checkbox" id="agree" />
                  <span className="ml-2">I agree to the</span>{" "}
                </label>
  
                <button className="w-48 bg-[#0198FE] text-white px-3 py-3 sm:px-5 my-5 mx-5 sm:py-4 rounded-[36px] flex justify-center gap-2" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    );
};

export default Contact;