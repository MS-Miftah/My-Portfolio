"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Business Website",
    description:
      "Business websites provide an online presence for organizations, offering essential information about products, services, and contact details. They help build credibility, attract clients, and grow your brand.",
    href: "",
  },
  {
    num: "02",
    title: "Landing Page",
    description:
      "Landing pages are tailored for specific marketing campaigns, focusing on a clear call-to-action like signing up, purchasing, or downloading. Landing page simplify user journeys and boost conversions.",
    href: "",
  },
  {
    num: "03",
    title: "E-commerce Website",
    description:
      "E-commerce websites enable businesses to showcase their products, accept payments, and manage transactions. They provide a seamless shopping experience for customers and help businesses scale globally.",
    href: "",
  },
  {
    num: "04",
    title: "Web Application",
    description:
      "Web apps go beyond static websites, offering dynamic features like account management, data processing, and real-time updates. They’re ideal for creating user-centric platforms like productivity tools or booking systems.",
    href: "",
  },
  {
    num: "05",
    title: "Portfolio",
    description:
      "Portfolio websites highlight projects, achievements, and skills, making them perfect for creative professionals and developers to display their expertise and attract opportunities",
    href: "",
  },
  {
    num: "06",
    title: "Blog",
    description:
      "Blogs are content-focused websites where individuals or groups publish articles regularly. They are great for building audiences, sharing knowledge, and connecting with readers.",
    href: "",
  },
];

import { motion } from "framer-motion";
import { SectionIcon } from "lucide-react";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline
                                text-transparent group-hover:text-hover hover:text-accent transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
