import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyle,  iconStyles }) => {
    return (
        <div className={containerStyle}>
            {socials.map((items, index) => {
                return (
                    <Link key={index} href={items.path} className={iconStyles}>
                    {items.icon}
                    </Link>
                )
            })}
            
        </div>
    );
};

export default Social;