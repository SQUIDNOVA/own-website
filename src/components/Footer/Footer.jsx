import logo from "../../assets/images/squidnovaLogo-croped-removebg-preview.png";

export default function Footer() {

  return (
    <footer className=' bg-darkblue text-white/80 '>
        <div className=' flex flex-col lg:flex-row p-4 sm:p-6 lg:p-[1%] gap-6 lg:gap-0  '>
            <div className=' w-full lg:w-1/2 '>
                <div className=" flex items-center ">
                    <img
                        src={logo}
                        alt="Logo"
                        className=" size-10 sm:size-14 lg:size-16 "
                    />
                    <h1 className=" text-xl sm:text-2xl lg:text-3xl font-bold ">SquidNova</h1>
                </div>
                <p className=" text-sm sm:text-base lg:text-lg ml-[2%] mt-2 ">We are Squidnova,Our mission is to provide the best services to our clients.</p>
                <p className=" text-sm sm:text-base lg:text-lg ml-[2%] mt-2 ">"Smart Solutions. Real Impact.”</p>
            </div>
            <div className=' w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 '>
                <div className=" flex flex-col gap-2 sm:gap-3 ">
                    <h1 className=' text-lg sm:text-xl lg:text-2xl font-bold '>Company</h1>
                    <ol className=" flex flex-col gap-1 text-sm sm:text-base ">
                        <li>About</li>
                        <li>Service</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ol>
                </div>
                <div className=" flex flex-col gap-2 sm:gap-3 ">
                    <h1 className=' text-lg sm:text-xl lg:text-2xl font-bold '>Services</h1>
                    <ol className=" flex flex-col gap-1 text-sm sm:text-base ">
                        <li>Web Developement</li>
                        <li>Logo Creation</li>
                        <li>Business Ideas</li>
                        <li>Cloud Support</li>
                    </ol>
                </div>
                <div className=" col-span-2 sm:col-span-1 flex flex-col gap-2 sm:gap-3 ">
                    <h1 className=' text-lg sm:text-xl lg:text-2xl font-bold '>Contact</h1>
                    <ol className=" flex flex-col gap-1 text-sm sm:text-base ">
                        <li>
                            <a href="mailto:squidnova04@gmail.com" className="break-all">squidnova04@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://wa.me/918903500842" target="_blank">+91 8903500842</a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/o93rbZ18nouKibdY9" target="_blank">coimbatore - 641021</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div className=' flex flex-col sm:flex-row justify-between items-center gap-3 p-4 sm:p-6 lg:p-[3%] lg:py-[1%] border-t-2 border-dotted white/80 text-sm sm:text-base '>
            <p>© 2025 SquidNova. All Rights Reserved</p>
            <div className=' flex flex-col sm:flex-row gap-2 sm:gap-4 text-center '>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}
