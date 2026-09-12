
import {motion} from "framer-motion";

import m11 from "../assets/m11.PNG"
import m22 from "../assets/m22.PNG"
import w11 from "../assets/w11.PNG"
import w22 from "../assets/w22.PNG"


const testimonials = [
  {
    name: "Anurag Kumar",
    role: "Classmate / Developer",
    review:
      "Great to work with. He focuses on clean UI and always tries to improve performance in his projects.",
    image: m11,
  },
  {
    name: "Veerprakash Kumar Gupta",
    role: "Project Partner",
    review:
      "Very dedicated developer. He completes projects on time and pays attention to small details.",
    image: w11,
  },
  {
    name: "Vicky Kumar",
    role: "Peer Developer",
    review:
      "Passionate about learning and building. His projects show strong fundamentals in web development.",
    image: m22,
  },
  {
    name: "Bittu Kumar Sah",
    role: "Developer Friend",
    review:
      "Hardworking and consistent. He is always eager to learn new technologies and improve his skills.",
    image: w22,
  },
];



export default function Testimonials(){
  return(
    <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
  <motion.h2 className="text-4xl font-bold mb-16"
  initial={{opacity: 0 , y: -50}}
  animate={{opacity:1 , y:0}}
  transition={{duration: 0.6}}
  >
    What People Say
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
    {testimonials.map((t,i) => (
      <motion.div
      key={t.name +1}
      initial={{opacity: 1 ,y:0}}
      whileInView={{opacity: 1 , y:0}}
      transition={{duration: 0.5 , delay : i*0.2}}
      viewport={{once:true}}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:-rotate-1">

        <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
        loading="lazy"
        />
        <p className="text-gray-200 italic mb-4">
          {t.review}
        </p>
        <h3 className="text-lg font-semibold">
          {t.name}
        </h3>
        <p className="text-sm text-gray-400">
          {t.role}
        </p>



      </motion.div>
    ))}

  </div>
    </section>
  )
}
