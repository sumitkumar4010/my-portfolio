// import { motion, useTransform, useScroll } from "framer-motion";
// import { useEffect, useMemo, useRef, useState } from "react";


// const experiences = [
//   {
//     role: "Frontend Developer (Self Projects)",
//     company: "Personal Projects",
//     duration: "2025 - Present",
//     description: "Built responsive and modern UI using React and Tailwind CSS. Focused on performance and smooth user experience.",
//   },
//   {
//     role: "Full Stack Developer (Learning Phase)",
//     company: "Self Learning",
//     duration: "2024 - Present",
//     description: "Developing full stack applications using Node.js, Express, and MongoDB. Practicing REST APIs and backend logic.",
//   },
//   {
//     role: "JavaScript Developer (Practice Projects)",
//     company: "Hands-on Practice",
//     duration: "2024 - Present",
//     description: "Worked on real-world mini projects to strengthen JavaScript fundamentals, DOM manipulation, and problem solving skills.",
//   },
// ];

// function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
//   const scale = useTransform(scrollYProgress, [start, end], [0, 1])
//   const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
//   const y = useTransform(scrollYProgress, [start, end], [idx % 2 === 0 ? 30 : -30, 0])
//   const x = useTransform(scrollYProgress, [start, end], [-24, 0])

//   if (layout === "desktop") {
//     return (
//       <div className="relative flex flex-1 justify-center items-center min-w-0">
//         <motion.div className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
//           style={{ scale, opacity }}
//         >
//         </motion.div>

//         <motion.div className={`absolute ${idx % 2 === 0 ? "-top-8" : "-bottom-8"} w-0.75 bg-white/40`}
//           style={{ height: 40, opacity }}
//         >
//         </motion.div>

//         <motion.article className={`absolute ${idx % 2 === 0 ? "bottom-12" : "top-12"} bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}

//           style={{ opacity, y, maxWidth: "90vw" }}
//           transition={{ duration: 0.4, delay: idx * 0.15 }}
//         >

//           <h3 className="text-xl font-semibold">
//             {exp.role}
//           </h3>
//           <p className="text-md text-gray-400 mb-3">
//             {exp.company} | {exp.duration}
//           </p>
//           <p className="text-md text-gray-300 wrap-break-word">
//             {exp.description}
//           </p>

//         </motion.article>
//       </div>
//     )
//   }
//   return (
//     <div className="relative flex items-start">
//       <motion.div className="absolute -left-3.5 top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
//         style={{ scale, opacity }}
//       >
//       </motion.div>
//       <motion.article className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
//         style={{ opacity, x }}

      
//         transition={{ duration: 0.4, delay: idx * 0.15 }}
//       >
//         <h3 className="text-lg font-semibold wrap-break-word">
//           {exp.role}
//         </h3>
//         <p className="text-sm text-gray-400 mb-2 wrap-break-word">
//           {exp.company} | {exp.duration}
//         </p>
//         <p className="text-sm text-gray-300 wrap-break-word">
//           {exp.description}
//         </p>

//       </motion.article>

//     </div>
//   )
// }



// export default function Experience() {
//   const sceneRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile)
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   const SCENE_HEIGHT_VH = isMobile ? 160 * experiences.length : 120 * experiences.length;
 

//   const { scrollYProgress } = useScroll({
//     target: sceneRef,
//     offset: ["start start", "end end"]
//   })

//   const thresholds = useMemo(() => experiences.map((_, i) => (i + 1) / experiences.length), [])
//   const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`)



//   return (
//     <section id="experience" className="relative bg-black text-white">
//       <div ref={sceneRef}
//         style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
//         className="relative"
//       >

//         <div className="sticky top-0 h-screen flex flex-col">
//           <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
//             Experience
//           </h2>
//           <div className="flex flex-1 items-center justify-center px-6 pb-10">
//             {!isMobile && (
//               <div className="relative w-full max-w-7xl">
//                 <div className="relative h-1.5 bg-white/15 rounded">
//                   <motion.div className="absolute left-0 top-0 h-1.5 bg-white rounded origin-left"
//                     style={{ width: lineSize }}
//                   >

//                   </motion.div>
//                 </div>

//                 <div className="relative flex justify-between mt-0">
//                   {experiences.map((exp, idx) => (
//                     <ExperienceItem
//                       key={idx}
//                       exp={exp}
//                       idx={idx}
//                       start={idx === 0 ? 0 : thresholds[idx - 1]}
//                       end={thresholds[idx]}
//                       scrollYProgress={scrollYProgress}
//                       layout="desktop"
//                     />
//                   ))}

//                 </div>

//               </div>
//             )}

//             {isMobile && (
//               <div className="relative w-full max-w-md">
//                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/15 rounded">
//                   <motion.div className="absolute top-0 left-0 w-1.5 bg-white rounded origin-top"
//                     style={{ height: lineSize }}
//                   >

//                   </motion.div>

//                 </div>

//                 <div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
                
//                   {experiences.map((exp, idx) => (
//                     <ExperienceItem
//                       key={idx}
//                       exp={exp}
//                       idx={idx}
//                       start={idx === 0 ? 0 : thresholds[idx - 1]}
//                       end={thresholds[idx]}
//                       scrollYProgress={scrollYProgress}
//                       layout="mobile"

//                     />
//                   ))}

//                 </div>

//               </div>
//             )}

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }













import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer (Self Projects)",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Built responsive and modern UI using React and Tailwind CSS. Focused on performance and smooth user experience.",
  },
  {
    role: "Full Stack Developer (Learning Phase)",
    company: "Self Learning",
    duration: "2024 - Present",
    description:
      "Developing full stack applications using Node.js, Express, and MongoDB. Practicing REST APIs and backend logic.",
  },
  {
    role: "JavaScript Developer (Practice Projects)",
    company: "Hands-on Practice",
    duration: "2024 - Present",
    description:
      "Worked on real-world mini projects to strengthen JavaScript fundamentals, DOM manipulation, and problem solving skills.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-black text-white py-20 sm:py-24"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-16 sm:mb-20 px-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold">
          Experience
        </h2>

        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          My journey through development and continuous learning
        </p>
      </motion.div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-6">

        <div className="relative">

          {/* Main Timeline */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/15 rounded-full" />

          <motion.div
            className="absolute left-0 right-0 top-1/2 h-1 bg-white rounded-full origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {/* Cards */}
          <div className="relative grid grid-cols-3 gap-8">

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-col items-center min-h-[520px]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  delay: idx * 0.2,
                }}
              >

                {/* Card */}
                <div
                  className={`absolute w-full max-w-[330px] ${
                    idx % 2 === 0
                      ? "bottom-[58%]"
                      : "top-[58%]"
                  }`}
                >
                  <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700/70 rounded-2xl p-6 shadow-xl hover:border-gray-500 transition-colors duration-300">

                    <h3 className="text-xl font-semibold leading-snug">
                      {exp.role}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2 mb-4">
                      {exp.company} | {exp.duration}
                    </p>

                    <p className="text-sm text-gray-300 leading-6">
                      {exp.description}
                    </p>

                  </div>
                </div>

                {/* Connector */}
                <div
                  className={`absolute w-0.5 h-12 bg-white/40 ${
                    idx % 2 === 0
                      ? "bottom-[50%]"
                      : "top-[50%]"
                  }`}
                />

                {/* Timeline Dot */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-4 border-black shadow-[0_0_0_7px_rgba(255,255,255,0.1)] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + idx * 0.2,
                  }}
                />

              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-5">

        <div className="relative max-w-xl mx-auto">

          {/* Vertical Timeline */}
          <motion.div
            className="absolute left-[13px] top-0 bottom-0 w-1 bg-white/15 rounded-full origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-11"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
              >

                {/* Dot */}
                <motion.div
                  className="absolute left-0 top-6 w-7 h-7 rounded-full bg-white border-4 border-black shadow-[0_0_0_7px_rgba(255,255,255,0.1)] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.15,
                  }}
                />

                {/* Card */}
                <article className="w-full bg-gray-900/90 backdrop-blur-md border border-gray-700/70 rounded-2xl p-5 shadow-xl hover:border-gray-500 transition-colors duration-300">

                  <h3 className="text-lg font-semibold leading-snug">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 mb-3">
                    {exp.company} | {exp.duration}
                  </p>

                  <p className="text-sm text-gray-300 leading-6">
                    {exp.description}
                  </p>

                </article>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}