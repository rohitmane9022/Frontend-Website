import { NavLink } from "react-router"
import k2 from "./Image/K2.jpeg"
import Logo3 from "./Image/Logo3.png"


const Home = () => {
  return (
    <div>
      <img src={k2} className="h-screen w-screen object-cover bg-no-repeat relative z-0 object-center flex justify-center items-center"/>
      <img src={Logo3} className="z-10 absolute sm:left-36 -top-10 sm:-top-20 sm:w-[300px] w-52 left-6" />

<div className="z-20 absolute bottom-6 left-1/2 -translate-x-1/2 ">
<NavLink to="/contact" >
<button className=" px-4 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-400" src="">Contact Us</button>
</NavLink>
</div>
      
    </div>
  )
}

export default Home