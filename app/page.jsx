import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
  <section className="h-full ">
    <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24 ">
        {/* personal info Starts */}
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h2 mb-6">Hello I&apos;m <br /> <span className="text-accent">RanjithKrishna Acharya</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          {/* Turning complex ideas into scalable solutions with a focus on innovation and efficiency. I excel at transforming challenges into opportunities through impactful software engineering. */}
          Turning complex ideas into scalable, innovative solutions with efficient software engineering.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/assets/resume/RanjithKrishna_Acharya - Resume.pdf" download>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
            </a>
            <div className="mb-8 xl:mb-0 ">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* personal info ends */}

        {/* photo section start */}
        <div className="order-1 lg:order-none mb-8 lg:mb-0 ">
          <Photo />
        </div>
        {/* photo section ends */}
      </div>
    </div>
  </section>
  )
}

export default Home