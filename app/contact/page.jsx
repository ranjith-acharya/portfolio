"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaEnvelope, FaGithub, FaInstagram, FaKaggle, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+91) 99301 16450",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "ranjithacharya997@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "from",
    description: "mumbai, india",
  },
]

const socials = [
  { icon: <FaGithub />, username:"@ranjith-acharya", title: 'GitHub', path:"https://github.com/ranjith-acharya" },
  // { icon: <FaInstagram />, username:"@_ranjithacharya_", title: 'Instagram', path:"https://instagram.com/_ranjithacharya_" },
  { icon: <FaLinkedinIn />, username:"@ranjith-acharya", title: 'LinkedIn', path:"https://linkedin.com/in/ranjith-acharya" },
  { icon: <FaKaggle />, username:"@ranjithkacharya", title: 'Kaggle', path:"https://kaggle.com/ranjithkacharya" },
];

const Contact = () => {
  return (
    <motion.section
            initial={{opacity:0}}
            animate={{
              opacity:1,
              transition:{delay:2.4, duration:0.4, ease: "easeIn"}
            }}
            className="py-6"
          >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="flex flex-1 items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex flex-1 items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 xl:mt-0">
            <ul className="flex flex-col gap-10">
            {socials.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <a href={item.path} target="_blank"><h3 className="text-xl hover:text-accent">{item.username}</h3></a>
                  </div>
                </li>
              )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact