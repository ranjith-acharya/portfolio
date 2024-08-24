"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "fullstack (web app)",
    title: "college management system",
    description: "An automated university portal where students access detailed academic results and apply for jobs by uploading resumes matching their averages. Professors monitor student progress effortlessly, while companies post job criteria and receive applications from eligible candidates. This streamlined system benefits students, faculty, and employers alike.",
    stack: [
      {name: "Laravel"}, {name: "Bootstrap 4"}, {name: "MySQL"}, {name: "JavaScript"}
    ],
    image: "/assets/work/cms-login-page.png",
    live: "",
    github: "https://github.com/ranjith-acharya/CMS",
  },
  {
    num: "02",
    category: "fullstack (machine learning)",
    title: "facial sketch app",
    description: "A facial recognition system is a technology capable of matching a human face from a digital image against a database of faces. Here, in this project we manually train the images for face recognition and than we provide an unknown image to recognize against the data present in the database. If found it will show Match Found and the name of the person and if not than it will output as no match found! It uses SQLite for database.",
    stack: [
      {name: "Python"}, {name: "Html 5"}, {name: "JavaScript"}, {name: "SQLite"}, {name: "Bootstrap 4"}
    ],
    image: "/assets/work/facial-sketch-app.png",
    live: "",
    github: "https://github.com/ranjith-acharya/Face-Recognition-App",
  },
  {
    num: "03",
    category: "frontend (theme)",
    title: "paradise shopping",
    description: "Just an E-commerce Shopping theme.",
    stack: [
      {name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}, {name: "Php"}, {name: "Bootstrap 4"}
    ],
    image: "/assets/work/onlineshop-landing-page.png",
    live: "",
    github: "https://github.com/ranjith-acharya/onlineshop",
  },
  {
    num: "04",
    category: "fullstack (web app)",
    title: "genesis design",
    description: "Admin Module for Task Allocation, Services and Management for Customers and Engineers.",
    stack: [
      {name: "Html 5"}, {name: "Laravel"}, {name: "JavaScript"}, {name: "Php"}, {name: "Materialize css"}, {name: "MySQL"},
    ],
    image: "/assets/work/genesis-design.png",
    live: "",
    github: "https://github.com/ranjith-acharya/genesis_design",
  },
  {
    num: "05",
    category: "fullstack (web app)",
    title: "canteen management system",
    description: "Canteen Management System for College Level.",
    stack: [
      {name: "Html 5"}, {name: "Laravel"}, {name: "JavaScript"}, {name: "Php"}, {name: "Bootstrap 4"}, {name: "MySQL"},
    ],
    image: "/assets/work/canteen-manag-system-login.png",
    live: "",
    github: "https://github.com/ranjith-acharya/canteen-manag-system",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn"}}} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline-hover">{project.num}</div>
            <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index)=>{
                return (
                  <li key={index} className="text-lg text-accent">{item.name}{index !== project.stack.length - 1 && ","}</li>
                )
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4 mb-2">
              {/* <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"  />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link> */}
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"  />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-cover" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            })}
            <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
          </Swiper>
        </div>
      </div>
    </div>
    </motion.section>
  )
}

export default Work