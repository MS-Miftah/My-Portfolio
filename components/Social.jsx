import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MS-Miftah" },
  {
    icon: <FaLinkedin />,
    path: "https://linkedin.com/in/m-s-miftah-a179a9202",
  },
  { icon: <FaTwitter />, path: "https://x.com/ms_miftah__" },
  { icon: <FaFacebookF />, path: "https://facebook.com/ms.m1ftah" },
];

const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((items, index) => {
        return (
          <Link key={index} href={items.path} className={iconStyles}>
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
