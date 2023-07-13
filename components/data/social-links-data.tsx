import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IconButtonProps } from "../icon-button";
import { BiLogoDevTo, BiLogoGmail } from "react-icons/bi";
import { SiHashnode } from "react-icons/si";

const social_links_data: IconButtonProps[] = [
  {
    title: "Github",
    href: "https://github.com/samyabrata-maji",
    children: <BsGithub size={24} />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/sammaji15",
    className: "bg-[#1DA1F2] hover:bg-[#1DA1F2]",
    children: <BsTwitter size={24} />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/samyabrata-maji",
    className: "bg-[#0e76a8] hover:bg-[#0e76a8]",
    children: <BsLinkedin size={24} />,
  },
  {
    title: "Mail",
    href: "mailto://samyabrata-maji334@gmail.com?subject=Hello%20👋",
    className: "bg-[#EA4335] hover:bg-[#EA4335]",
    children: <BiLogoGmail size={24} />,
  },
  {
    title: "Dev.to",
    href: "https://dev.to/sammaji15",
    className: "bg-[#000000] hover:bg-[#000000]",
    children: <BiLogoDevTo size={24} />,
  },
  {
    title: "Hashnode",
    href: "https://sammaji.hashnode.dev/",
    className: "bg-[#1877F2] hover:bg-[#1877F2]",
    children: <SiHashnode size={24} />,
  },
];

export default social_links_data;
