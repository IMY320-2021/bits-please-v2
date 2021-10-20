import React from "react";
import PropTypes from "prop-types";

import "./TeamCard.css";
import JdChar from "../../assets/images/characters/JdChar.gif"; // Tell webpack this JS file uses this image
import JdProfilePic from "../../assets/images/profilepic/JdProfilePic.jpg"; // Tell webpack this JS file uses this image
class TeamCard extends React.Component {
  render() {
    const data = this.props.data;

    console.log(data);
    return (
      <React.Fragment>
        <div style={{ paddingTop: 20 }}>
          <div
            className="nes-container is-dark with-title"
            style={{ paddingTop: 10 }}
          >
            <p className="title">{data.name}</p>

            {data.leftPosition && (
              <div>
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

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "20%",
                    paddingTop: 10,
                  }}
                >
                  <i className="nes-icon gmail is-medium"></i>
                  <i className="nes-icon linkedin is-medium"></i>
                  <i className="nes-icon github is-medium"></i>
                </div>
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
                    <p
                      style={{
                        paddingTop: 15,
                        width: "40%",
                      }}
                    >
                      {data.skills[0]}
                    </p>
                    <progress
                      className="nes-progress is-success"
                      value="80"
                      max="100"
                    ></progress>

                    <p
                      style={{
                        paddingTop: 15,
                        width: "40%",
                      }}
                    >
                      {data.skills[2]}
                    </p>
                    <progress
                      className="nes-progress is-warning"
                      value="60"
                      max="100"
                    ></progress>
                  </div>
                  <div
                    style={{
                      width: "35%",
                      marginLeft: "5%",
                      marginTop: "-6%",
                    }}
                  >
                    <p
                      style={{
                        paddingTop: 15,
                        width: "40%",
                      }}
                    >
                      {data.skills[0]}
                    </p>
                    <progress
                      className="nes-progress is-success"
                      value="80"
                      max="100"
                    ></progress>

                    <p
                      style={{
                        paddingTop: 15,
                        width: "40%",
                      }}
                    >
                      {data.skills[2]}
                    </p>
                    <progress
                      className="nes-progress is-warning"
                      value="60"
                      max="100"
                    ></progress>
                  </div>
                </div>
              </div>
            )}

            {!data.leftPosition && (
              <div>
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

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "20%",
                    paddingTop: 10,
                    marginLeft: "80%",
                  }}
                >
                  <i className="nes-icon gmail is-medium"></i>
                  <i className="nes-icon linkedin is-medium"></i>
                  <i className="nes-icon github is-medium"></i>
                </div>
                <div
                  style={{
                    width: "60%",
                    marginLeft: "20%",
                    marginTop: "-6%",
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
                        width: "30%",
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
                        width: "30%",
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
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

TeamCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    leftPosition: PropTypes.bool,
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      github: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};

export default TeamCard;
