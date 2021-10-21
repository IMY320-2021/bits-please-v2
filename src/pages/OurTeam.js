import React from "react";

import TeamCard from "../components/TeamCard/TeamCard";

const TeamData = [
  {
    name: "Christoff Linde",
    bio: "Hard-working full-stack developer. My curiosity and dedication drive me to expand my skill set by exploring new technologies and concepts. By combining my strength in solving problems and my love for being creative, I create one-of-a-kind software experiences.",
    skills: {
      skillsPrimary: ["Java", "JavaScript"],
      skillsSecondary: ["React Native", "C++"],
      skillsPrimaryValues: [90, 80],
      skillsSecondaryValues: [70, 60],
    },
    social: {
      linkedin: "https://www.linkedin.com/in/christoff-linde/",
      github: "https://github.com/christoff-linde",
      email: "christoff.linde@gmail.com",
    },
    leftPosition: true,
  },
  {
    name: "Chanel Mulder",
    bio: "I enjoy UI/UX design, game design/development, programming, web design/development and design. I am a cheerleader and have represented South Africa at the cheerleading worlds championship in America in 2017.",
    skills: {
      skillsPrimary: ["Java", "JavaScript"],
      skillsSecondary: ["React Native", "C++"],
      skillsPrimaryValues: [90, 80],
      skillsSecondaryValues: [70, 60],
    },

    social: {
      linkedin: "https://www.linkedin.com/in/chanel-mulder-7273a31bb/",
      github: "https://github.com/ChanelMulder",
      email: "https://github.com/ChanelMulder",
    },
    leftPosition: false,
  },
  {
    name: "Jd Perumal",
    bio: `I have a passion for software development. I have always had a creative side but never a medium of expression. Software development, more specifically frontend development is the outlet that I've found which allows me to express and showcase my creativity and passion. Some of my interests and hobbies include powerlifting, fitness and nutrition.`,
    skills: {
      skillsPrimary: ["Java", "JavaScript"],
      skillsSecondary: ["React Native", "C++"],
      skillsPrimaryValues: [90, 80],
      skillsSecondaryValues: [70, 60],
    },

    social: {
      linkedin: "https://www.linkedin.com/in/jd-perumal/",
      github: "https://github.com/JdPerumal",
      email: "https://www.jdperumal.tech/",
    },
    leftPosition: true,
  },
  {
    name: "Gerard Nagura",
    bio: "I am hard-working and energetic with a never-ending need to know more. I enjoy software development and have a passion for expressing my creativity through it. My ability to work well with others helps to contribute to a positive working-environment.",
    skills: {
      skillsPrimary: ["Java", "JavaScript"],
      skillsSecondary: ["React Native", "C++"],
      skillsPrimaryValues: [90, 80],
      skillsSecondaryValues: [70, 60],
    },

    social: {
      linkedin: "https://www.linkedin.com/in/gerard-nagura-5308a217a/",
      github: "https://github.com/MaverickGDN0403",
      email: "https://imy320-2021.github.io/Bits-Please/OurTeam#",
    },
    leftPosition: false,
  },
];

export default function OurTeam() {
  console.log(TeamData);
  return (
    <div className="App">
      <div className="nes-container with-title is-dark">
        <h1
          style={{ "text-align": "center", paddingBottom: 10 }}
          className="color-yellow"
        >
          Our Team
        </h1>
        {TeamData.map((member) => {
          return <TeamCard key={member.name} data={member} />;
        })}
      </div>
    </div>
  );
}
