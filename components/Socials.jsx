import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedinIn, FaKaggle } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path:"https://github.com/ranjith-acharya" },
    { icon: <FaInstagram />, path:"https://instagram.com/_ranjithacharya_" },
    { icon: <FaLinkedinIn />, path:"https://linkedin.com/in/ranjith-acharya" },
    { icon: <FaKaggle />, path:"https://kaggle.com/ranjithkacharya" },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link 
                href={item.path} 
                key={index} 
                className={iconStyles}
                target="_blank">
                    {item.icon}
                </Link>
    })}
  </div>
}

export default Socials