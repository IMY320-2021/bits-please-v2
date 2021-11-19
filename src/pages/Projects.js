import React, { useState } from "react";

import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard/ProjectPreviewCard";

import LostConnection from "../assets/images/project-images/lost-connection/lost-connection.png";
import Light from "../assets/images/project-images/light/light.png";
import Blob from "../assets/images/project-images/blob/game-project-1.png";
import HarmonyOne from "../assets/images/project-images/harmony/harmony-1.png";
import GamingNation from "../assets/images/project-images/gaming-nation/gaming-nation.png";
import AppImage from "../assets/images/project-images/app/app.png";

const tagTypes = {
  game: {
    title: "Game Project",
    type: "is-primary",
  },
  shortfilm: {
    title: "Video",
    type: "is-success",
  },
  web: {
    title: "Web Project",
    type: "is-warning",
  },
  UiUx: {
    title: "UI/UX",
    type: "is-error",
  },
  threeD: {
    title: "3D",
    type: "is-warning",
  },
};

const Projects = () => {
  const [state, setState] = useState("start");

  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "Our Projects", colour: "color-blue" }} />
        {/* <Carousel data={ProjectsData.data} /> */}
        {state === "start" && (
          <React.Fragment>
            <div className="project-container">
              {ProjectsData.data.map((project, index) => {
                return (
                  <ProjectPreviewCard
                    viewProject={() => setState(`show-project-${index}`)}
                    key={project.id}
                    // title={project.title}
                    // summary={project.summary}
                    // image_url={project.image_url}
                    data={project}
                  />
                );
              })}
            </div>
          </React.Fragment>
        )}

        {state === "show-project-0" && (
          <React.Fragment>
            <ProjectCard
              viewProject={() => setState(`start`)}
              data={ProjectDataZero}
            />
          </React.Fragment>
        )}
        {state === "show-project-1" && (
          <ProjectCard
            viewProject={() => setState(`start`)}
            data={ProjectDataOne}
          />
        )}
        {state === "show-project-2" && (
          <ProjectCard
            viewProject={() => setState(`start`)}
            data={ProjectDataTwo}
          />
        )}
        {state === "show-project-3" && (
          <ProjectCard
            viewProject={() => setState(`start`)}
            data={ProjectDataThree}
          />
        )}
        {state === "show-project-4" && (
          <ProjectCard
            viewProject={() => setState(`start`)}
            data={ProjectDataFour}
          />
        )}
        {state === "show-project-5" && (
          <ProjectCard
            viewProject={() => setState(`start`)}
            data={ProjectDataFive}
          />
        )}
      </Layout>
    </div>
  );
};

export default Projects;

const ProjectsData = {
  data: [
    {
      id: "app-01",
      title: "Power Plant",
      tags: [tagTypes.UiUx],
      summary: "Mobile App UI/UX Development",
      description: `A modern and clean app, keeping users informed with the latest loadshedding updates. `,
      image_url: `${AppImage}`,
      tech: [
        {
          name: "Adobe XD",
          description:
            "All design, prototyping and User Testing was done with a digital prototype made in Adobe XD. This includes wireframing, low-fidelity, and high-fidelity prototyping.",
        },
      ],
    },
    {
      id: "mov-01",
      title: "Lost Connection",
      tags: [tagTypes.shortfilm],
      summary: "Horror Film",
      description: ``,
      image_url: `${LostConnection}`,
      tech: [
        {
          name: "Adobe Premiere Pro",
          description: "Video editing and composition",
        },
        {
          name: "Adobe Audition",
          description:
            "Audio editing, composition, including adding the soundtrack and sound effects",
        },
      ],
    },
    {
      id: "gp-02",
      title: "Light",
      tags: [tagTypes.game, tagTypes.threeD],
      summary: "Game Project",
      description: `Horror game, works with sound instead of visuals. The player navigates through a haunted forest in the middle of the night and cannot see the difference between the monsters lurking in the woods and the trees, players try to find their sibling during the game who ran away into the forest and get mind tricked by moving trees and/or monsters as well as the use of sound. They make use of a compass on their phone which acts as their only source of light but the battery needs to be used sparingly since this is also the only way to stay on the path and keep your character's mental health good, the use of the character's heartbeat, breathing and phone helps the player know if they are on the right path to find their sibling and exit the forest, when dwelling off of the path you risk your characters mentality and increase the risk of running into a monster and getting killed.`,
      image_url: `${Light}`,
      tech: [
        {
          name: "Unreal Engine",
          description: "Game made using Unreal Engine 5.0 and Blueprints",
        },
        {
          name: "Blender 3D",
          description: "All 3D modelling, texturing and animations",
        },
        {
          name: "Quixel Bridge",
          description:
            "Foliage was found on Quixel Bridge and imported to Unreal Engine 4.27",
        },
        {
          name: "Adobe Audition",
          description:
            "All audio was downloaded along with the appropriate licenses and edited using Adobe Audition 2021.",
        },
      ],
    },
    {
      id: "gp-01",
      title: "Blob",
      tags: [tagTypes.game, tagTypes.threeD],
      summary: "Game Project",
      description: `You are a Blob, a species of liquid organisms. Stranded in a desert, you must change the
                    environment around you to guide you safely back to the ocean. On your path, you will encounter
                    different biomes and dangers that will wear you down. It is a cruel world; hence you need to keep
                    your weight in check, otherwise you might not be able to pass the gates.
                    `,
      image_url: `${Blob}`,
      tech: [
        {
          name: "Unreal Engine",
          description: "Game made using Unreal Engine 5.0 and Blueprints",
        },
        {
          name: "Blender 3D",
          description: "All 3D modelling, texturing and animations",
        },
        {
          name: "Reaper DAW",
          description: "Reaper was used for all audio editing and authoring",
        },
      ],
    },
    {
      id: "cs-01",
      tags: [tagTypes.web, tagTypes.UiUx],
      title: "Harmony",
      summary: "Software Engineering Project",
      description: `Visiting South Africa a tourist would not know what South African foods are, let alone what it pairs well with, Harmony solves this by allowing you to pull out your phone, take a picture of the food and its drink pairings will be presented to you, but it doesn't stop there, using continuous AI Harmony will provide the best possible pairings as it learns and develops over time.
                    Harmony is more than just an AI to identify food, we also have a social media aspect, allowing users to view pairings feed style, upvote, downvote or favourite them and also create pairings of their own. We also cater to businesses, they can use our recommendations system to view what pairings and tags are most likely to gain popularity and leverage this to create custom adverts that also appear to users within a custom radius of their shop.`,
      image_url: `${HarmonyOne}`,
      tech: [
        {
          name: "React Native",
          description: "",
        },
        {
          name: "AWS lamda",
          description: "",
        },
        {
          name: "ReactJS",
          description: "",
        },
        {
          name: "DynamoBD",
          description: "",
        },
      ],
    },
    {
      id: "cs-02",
      title: "Gaming Nation",
      tags: [tagTypes.web, tagTypes.UiUx],
      summary: "Web App Project",
      description: `Gaming Nation aims to provide gaming enthusiasts with a platform to gain knowledge regarding the latest gaming trends. Gaming Nation is aimed both at casual and avid gamers and hopes to connect like minded gamers via an integrated social networking platform.
      Gaming Nation has multiple streams of information (e.g. Trending, Featured) to help inform users about new developments and projects in the gaming world. Gaming Nation has an integrated calender that informs users about upcoming release dates regarding new Games and related software.`,
      image_url: `${GamingNation}`,
      tech: [
        {
          name: "HTML & CSS",
          description: "Base website code",
        },
        {
          name: "PHP",
          description: "API scripting language",
        },
        {
          name: "Java",
          description: "Android App",
        },
        {
          name: "MySQL",
          description: "Database",
        },
      ],
    },
  ],
};

const ProjectDataZero = ProjectsData.data[0];
const ProjectDataOne = ProjectsData.data[1];
const ProjectDataTwo = ProjectsData.data[2];
const ProjectDataThree = ProjectsData.data[3];
const ProjectDataFour = ProjectsData.data[4];
const ProjectDataFive = ProjectsData.data[5];
