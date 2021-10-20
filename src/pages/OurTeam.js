import React from "react";
import character1 from "../assets/images/character1.gif"; // Tell webpack this JS file uses this image
const TeamData = [
  {
    name: "Christoff Linde",
    bio: "Hard-working full-stack developer. My curiosity and dedication drive me to expand my skill set by exploring new technologies and concepts. By combining my strength in solving problems and my love for being creative, I create one-of-a-kind software experiences.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "C++",
      "Git",
      "Unreal Engine",
      "DevOps",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/christoff-linde/",
      github: "https://github.com/christoff-linde",
      email: "christoff.linde@gmail.com",
    },
  },
  // {
  //   name: "Chanel Mulder",
  //   bio: "I enjoy UI/UX design, game design/development, programming, web design/development and design. I am a cheerleader and have represented South Africa at the cheerleading worlds championship in America in 2017.",
  //   skills: ["Web Design", "Java", "HTML"],
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/chanel-mulder-7273a31bb/",
  //     github: "https://github.com/ChanelMulder",
  //     email: "https://github.com/ChanelMulder",
  //   },
  // },
  // {
  //   name: "Jd Perumal",
  //   bio: `I have a passion for software development. I have always had a creative side but never a medium of expression. Software development, more specifically frontend development is the outlet that I've found which allows me to express and showcase my creativity and passion. Some of my interests and hobbies include powerlifting, fitness and nutrition.`,
  //   skills: ["Java", "C++", "JavaScript & React Native"],
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/jd-perumal/",
  //     github: "https://github.com/JdPerumal",
  //     email: "https://www.jdperumal.tech/",
  //   },
  // },
  // {
  //   name: "Gerard Nagura",
  //   bio: "I am hard-working and energetic with a never-ending need to know more. I enjoy software development and have a passion for expressing my creativity through it. My ability to work well with others helps to contribute to a positive working-environment.",
  //   skills: ["Java", "HTML", "C++"],
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/gerard-nagura-5308a217a/",
  //     github: "https://github.com/MaverickGDN0403",
  //     email: "https://imy320-2021.github.io/Bits-Please/OurTeam#",
  //   },
  // },
];

export default function OurTeam() {
  console.log(TeamData);
  return (
    <div className="App">
      <div className="nes-container with-title is-dark">
        <h1 style={{ "text-align": "center", paddingBottom: 10 }}>Our Team</h1>
        <div
          className="nes-container is-dark with-title"
          style={{ paddingTop: 10 }}
        >
          <p className="title">Jd Perumal</p>

          <div style={{ display: "flex" }}>
            <img
              src={character1}
              alt="character1"
              style={{ width: 500, height: 200 }}
            />
            <div
              className="nes-balloon from-left is-dark"
              style={{ marginLeft: 30, marginBottom: 90 }}
            >
              <p>
                Software development is the outlet that I&apos;ve found which
                allows me to express and showcase my creativity and passion.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: 200,
              paddingTop: 10,
            }}
          >
            <i className="nes-icon gmail is-medium"></i>
            <i className="nes-icon linkedin is-medium"></i>
            <i className="nes-icon github is-medium"></i>
          </div>
          <div
            style={{
              width: 600,
              marginLeft: 250,
              marginTop: -100,
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  paddingTop: 15,
                  width: 250,
                }}
              >
                {" "}
                Java{" "}
              </p>
              <progress
                className="nes-progress is-success"
                value="80"
                max="100"
              ></progress>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  paddingTop: 15,
                  width: 250,
                }}
              >
                {" "}
                JavaScript{" "}
              </p>
              <progress
                className="nes-progress is-warning"
                value="60"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
