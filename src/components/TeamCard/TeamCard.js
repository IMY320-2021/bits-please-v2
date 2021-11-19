import React from "react";
import PropTypes from "prop-types";

import "./TeamCard.css";
import SocialIcon from "../SocialIcon/SocialIcon";
import BadgeContainer from "../BadgeContainer/BadgeContainer";

const TeamCard = ({ ...props }) => {
  const data = props.data;
  return (
    <React.Fragment>
      <div className="team-card">
        {data.leftPosition && (
          <div className="">
            <h3 className="title">{data.name}</h3>
            <BadgeContainer data={data.tags} />
            <div className="team-member-info-container-left">
              <div className="team-image-container">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="nes-balloon from-left is-dark">
                <p>{data.bio}</p>
              </div>
            </div>
            <div className="social-link-container">
              {data.social.map((socialLink) => {
                return (
                  <SocialIcon
                    key={socialLink.name}
                    data={socialLink}
                    margin={"0%"}
                  />
                );
              })}
            </div>
            <div className="skill-list-container">
              {data.skillsPrimary.map((skill) => {
                return (
                  <div key={skill} className="skill">
                    <span>{skill.key}</span>
                    <progress
                      className={skill.colour}
                      value={skill.value}
                      max="100"
                    ></progress>
                  </div>
                );
              })}
              {data.skillsSecondary.map((skill) => (
                <div key={skill} className="skill">
                  <span>{skill.key}</span>
                  <progress
                    className={skill.colour}
                    value={skill.value}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        )}
        {!data.leftPosition && (
          <div className="">
            <h5 className="title">{data.name}</h5>
            <BadgeContainer data={data.tags} />
            <div className="team-member-info-container-right">
              <div className="nes-balloon from-right is-dark">
                <p>{data.bio}</p>
              </div>
              <div className="team-image-container">
                <img src={data.image} alt={data.name} />
              </div>
            </div>
            <div className="social-link-container right">
              {data.social.map((socialLink) => {
                return <SocialIcon key={socialLink.name} data={socialLink} />;
              })}
            </div>
            <div className="skill-list-container">
              {data.skillsPrimary.map((skill) => {
                return (
                  <div key={skill} className="skill">
                    <span>{skill.key}</span>
                    <progress
                      className={skill.colour}
                      value={skill.value}
                      max="100"
                    ></progress>
                  </div>
                );
              })}
              {data.skillsSecondary.map((skill) => (
                <div key={skill} className="skill">
                  <span>{skill.key}</span>
                  <progress
                    className={skill.colour}
                    value={skill.value}
                    max="100"
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default TeamCard;

TeamCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    skillsPrimary: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
      })
    ),
    skillsSecondary: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
      })
    ),
    social: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
    leftPosition: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
