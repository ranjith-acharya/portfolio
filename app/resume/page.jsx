"use client"
import { FaHtml5, FaCss3, FaJs, FaDatabase, FaFigma, FaLaravel, FaPhp } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiBootstrap } from 'react-icons/si'

const about = {
  title: "about me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, vitae facilisis orci risus id nisi.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ranjith",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 99301 16450",
    },
    {
      fieldName: "Experience",
      fieldValue: "2.1 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "ranjithacharya997@gmail.com",
    },
  ]
};

const experience = {
  icon: '/assets/resume/badges.svg',
  title: 'my experience',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, vitae facilisis orci risus id nisi.",
  items: [
    {
      company: "TeamLease Edtech Ltd.",
      position: "Jr. Software Engineer",
      duration: "2023 - Present",
    },
    {
      company: "TuringMinds.AI",
      position: "Data Science Trainee",
      duration: "2022 - 2023",
    },
    {
      company: "SITH - Solutions for IT",
      position: "Laravel Developer",
      duration: "2021 - 2022",
    },
  ]
}

const skills = {
  title: 'my Skills',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum, vitae facilisis orci risus id nisi.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaDatabase />,
      name: "mysql, postgresql",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap 5",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from "framer-motion";

const Resume = () => {
  return <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition:{
                delay: 2.4, duration: 0.4, ease: "easeIn"
            },
          }}

          className="min-h-[55vh] flex items-center justify-center mt-5 py-12 lg:py-0"
        >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
              <TabsTrigger value="experience">experience</TabsTrigger>
              <TabsTrigger value="skills">skills</TabsTrigger>
              <TabsTrigger value="about">about me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p> */}
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return <li key={index} className="bg-[#232329] h-[170px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left ">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <h3>{skills.title}</h3>
                    <p>{skills.description}</p>
                  </div>
                  
                </div>
              </TabsContent>
              <TabsContent value="about" className="w-full">
                about
              </TabsContent>
            </div>
          </Tabs>
        </div>
  </motion.div>
}

export default Resume