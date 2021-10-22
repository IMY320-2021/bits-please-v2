import React from "react";

import Layout from "../components/Layout/Layout";
import TeamCard from "../components/TeamCard/TeamCard";
import Title from "../components/Title/Title";
import JdProfilePic from "../assets/images/profilepic/JdProfilePic.jpg";
import ChanelProfilePic from "../assets/images/profilepic/ChanelProfilePic.jpg";

const TeamData = [
  {
    name: "Jd Perumal",
    bio: `I have a passion for software development. I have always had a creative side but never a medium of expression. Software development, more specifically frontend development is the outlet that I've found which allows me to express and showcase my creativity and passion. Some of my interests and hobbies include powerlifting, fitness and nutrition.`,
    skillsPrimary: [
      { key: "Java", value: 90, colour: "nes-progress is-success" },
      { key: "JavaScript", value: 80, colour: "nes-progress is-primary" },
    ],
    skillsSecondary: [
      { key: "C++", value: 70, colour: "nes-progress is-warning" },
      { key: "React native", value: 60, colour: "nes-progress is-error" },
    ],
    social: [
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/jd-perumal/",
      },
      { name: "GitHub", icon: "github", link: "https://github.com/JdPerumal" },
      { name: "Email", icon: "gmail", link: "https://www.jdperumal.tech/" },
    ],
    leftPosition: true,
    image: [`${JdProfilePic}`],
  },
  {
    name: "Christoff Linde",
    bio: "Hard-working full-stack developer. My curiosity and dedication drive me to expand my skill set by exploring new technologies and concepts. By combining my strength in solving problems and my love for being creative, I create one-of-a-kind software experiences.",
    skillsPrimary: [
      { key: "HTML & CSS", value: 85, colour: "nes-progress is-success" },
      { key: " C++", value: 65, colour: "nes-progress is-primary" },
    ],
    skillsSecondary: [
      { key: " Javascript", value: 85, colour: "nes-progress is-warning" },
      { key: "Unreal Engine", value: 67, colour: "nes-progress is-error" },
    ],
    social: [
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/christoff-linde/",
      },
      {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/christoff-linde",
      },
      { name: "Email", icon: "gmail", link: "christoff.linde@gmail.com" },
    ],
    leftPosition: false,
    image: [`${JdProfilePic}`],
  },
  {
    name: "Chanel Mulder",
    bio: "I enjoy UI/UX design, game design/development, programming, web design/development and design. I am a cheerleader and have represented South Africa at the cheerleading worlds championship in America in 2017.",
    skillsPrimary: [
      { key: "Web design", value: 90, colour: "nes-progress is-success" },
      { key: "Java", value: 80, colour: "nes-progress is-primary" },
    ],
    skillsSecondary: [
      { key: "HTML", value: 70, colour: "nes-progress is-warning" },
      { key: "Afrikaans", value: 60, colour: "nes-progress is-error" },
    ],
    social: [
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/chanel-mulder-7273a31bb/",
      },
      {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/ChanelMulder",
      },
      { name: "Email", icon: "gmail", link: "https://github.com/ChanelMulder" },
    ],
    leftPosition: true,
    image: [`${ChanelProfilePic}`],
  },

  {
    name: "Gerard Nagura",
    bio: "I am hard-working and energetic with a never-ending need to know more. I enjoy software development and have a passion for expressing my creativity through it. My ability to work well with others helps to contribute to a positive working-environment.",
    skillsPrimary: [
      { key: "HTML", value: 90, colour: "nes-progress is-success" },
      { key: " C++", value: 80, colour: "nes-progress is-primary" },
    ],
    skillsSecondary: [
      { key: " Javascript", value: 70, colour: "nes-progress is-warning" },
      { key: "English", value: 60, colour: "nes-progress is-error" },
    ],
    social: [
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/gerard-nagura-5308a217a/",
      },
      {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/MaverickGDN0403",
      },
      {
        name: "Email",
        icon: "gmail",
        link: "https://imy320-2021.github.io/Bits-Please/OurTeam#",
      },
    ],
    leftPosition: false,
    image: [`${JdProfilePic}`],
  },
];

export default function OurTeam() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "Our team", colour: "color-yellow" }} />
        {TeamData.map((member) => {
          return <TeamCard key={member.name} data={member} />;
        })}
      </Layout>
    </div>
  );
}
