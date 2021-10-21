import React from "react";
import PropTypes from "prop-types";

import "./TeamCard.css";
import JdProfilePic from "../../assets/images/profilepic/JdProfilePic.jpg"; // Tell webpack this JS file uses this image
import SocialIcons from "../SocialIcons/SocialIcons";

class TeamCard extends React.Component {
  render() {
    const data = this.props.data;

    console.log(data);
    return (
      <React.Fragment>
        <div style={{ paddingTop: 40 }}>
          {data.leftPosition && (
            <div
              className="nes-container is-dark with-title"
              style={{ paddingTop: 10 }}
            >
              <p className="title">{data.name}</p>

              <div style={{ display: "flex" }}>
                <img
                  src={JdProfilePic}
                  alt={data.name}
                  style={{ width: "20%", height: "20%", borderRadius: "50%" }}
                />
                <div
                  className="nes-balloon from-left is-dark"
                  style={{ marginLeft: 30, marginBottom: 90 }}
                >
                  <p>{data.bio}</p>
                </div>
              </div>

              <SocialIcons marginLeft={"0%"} />
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    marginLeft: "25%",
                    marginTop: "-6%",
                  }}
                >
                  {data.skills.skillsPrimary.map((skill) => (
                    <div key={skill} className="skill">
                      <p
                        style={{
                          paddingTop: 15,
                          width: "40%",
                        }}
                      >
                        {skill}
                      </p>
                      <progress
                        className="nes-progress is-success"
                        value="80"
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    width: "35%",
                    marginLeft: "5%",
                    marginTop: "-6%",
                  }}
                >
                  {data.skills.skillsSecondary.map((skill) => (
                    <div key={skill} className="skill">
                      <p
                        style={{
                          paddingTop: 15,
                          width: "40%",
                        }}
                      >
                        {skill}
                      </p>
                      <progress
                        className="nes-progress is-success"
                        value="80"
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!data.leftPosition && (
            <div
              className="nes-container is-dark with-title is-right"
              style={{ paddingTop: 10 }}
            >
              <p className="title">{data.name}</p>
              <div style={{ display: "flex" }}>
                <div
                  className="nes-balloon from-right is-dark"
                  style={{ marginLeft: 30, marginBottom: 90 }}
                >
                  <p>{data.bio}</p>
                </div>
                <img
                  src={JdProfilePic}
                  alt="Jd Perumal"
                  style={{ width: "20%", height: "20%", borderRadius: "50%" }}
                />
              </div>
              <SocialIcons marginLeft={"80%"} />
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    marginLeft: "0%",
                    marginTop: "-6%",
                  }}
                >
                  {data.skills.skillsPrimary.map((skill) => (
                    <div key={skill} className="skill">
                      <p
                        style={{
                          paddingTop: 15,
                          width: "40%",
                        }}
                      >
                        {skill}
                      </p>
                      <progress
                        className="nes-progress is-success"
                        value="80"
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    width: "35%",
                    marginLeft: "5%",
                    marginTop: "-6%",
                  }}
                >
                  {data.skills.skillsSecondary.map((skill) => (
                    <div key={skill} className="skill">
                      <p
                        style={{
                          paddingTop: 15,
                          width: "40%",
                        }}
                      >
                        {skill}
                      </p>
                      <progress
                        className="nes-progress is-success"
                        value="80"
                        max="100"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

TeamCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    skills: PropTypes.shape({
      skillsPrimary: PropTypes.arrayOf(PropTypes.string),
      skillsSecondary: PropTypes.arrayOf(PropTypes.string),
      skillsPrimaryValues: PropTypes.arrayOf(PropTypes.number),
      skillsSecondaryValues: PropTypes.arrayOf(PropTypes.number),
    }),
    leftPosition: PropTypes.bool,
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      github: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};

export default TeamCard;
