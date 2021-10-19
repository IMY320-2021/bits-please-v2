import React from "react";
import PropTypes from "prop-types";

import "./TeamCard.css";

class TeamCard extends React.Component {
  render() {
    const data = this.props.data;

    console.log(data);
    return (
      <React.Fragment>
        <h3>{data.name}</h3>
        <div className="team-image">img</div>
        <div className="social-links">
          <div className="social-link">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.69637 20.9352C8.69637 21.0427 8.57581 21.1287 8.42379 21.1287C8.25081 21.1448 8.13024 21.0588 8.13024 20.9352C8.13024 20.8276 8.25081 20.7416 8.40282 20.7416C8.56008 20.7255 8.69637 20.8115 8.69637 20.9352ZM7.06613 20.6932C7.02944 20.8008 7.13427 20.9244 7.29153 20.9567C7.42782 21.0104 7.58508 20.9567 7.61653 20.8491C7.64798 20.7416 7.54839 20.618 7.39113 20.5696C7.25484 20.5319 7.10282 20.5857 7.06613 20.6932ZM9.38306 20.6018C9.23105 20.6395 9.12621 20.7416 9.14194 20.8653C9.15766 20.9728 9.29395 21.0427 9.45121 21.0051C9.60323 20.9674 9.70806 20.8653 9.69234 20.7577C9.67661 20.6556 9.53508 20.5857 9.38306 20.6018ZM12.8323 0C5.56169 0 0 5.6612 0 13.1181C0 19.0804 3.65887 24.1824 8.88508 25.9781C9.55605 26.1017 9.79193 25.677 9.79193 25.3276C9.79193 24.9942 9.77621 23.1556 9.77621 22.0265C9.77621 22.0265 6.10685 22.833 5.33629 20.4244C5.33629 20.4244 4.73871 18.8599 3.87903 18.4567C3.87903 18.4567 2.67863 17.6126 3.9629 17.6288C3.9629 17.6288 5.26815 17.7363 5.98629 19.0158C7.13427 21.0911 9.05806 20.4943 9.80766 20.1395C9.92823 19.2793 10.269 18.6825 10.6464 18.3277C7.71613 17.9943 4.75968 17.5589 4.75968 12.3869C4.75968 10.9084 5.15806 10.1665 5.99677 9.22029C5.86048 8.87083 5.41492 7.42999 6.13306 5.56981C7.22863 5.22035 9.75 7.0214 9.75 7.0214C10.7984 6.72033 11.9254 6.56441 13.0419 6.56441C14.1585 6.56441 15.2855 6.72033 16.3339 7.0214C16.3339 7.0214 18.8552 5.21497 19.9508 5.56981C20.669 7.43537 20.2234 8.87083 20.0871 9.22029C20.9258 10.1719 21.4395 10.9138 21.4395 12.3869C21.4395 17.575 18.352 17.989 15.4218 18.3277C15.904 18.7524 16.3129 19.5588 16.3129 20.8223C16.3129 22.6341 16.2972 24.876 16.2972 25.3168C16.2972 25.6663 16.5383 26.091 17.204 25.9673C22.446 24.1824 26 19.0804 26 13.1181C26 5.6612 20.1028 0 12.8323 0ZM5.09516 18.5427C5.02702 18.5965 5.04274 18.7201 5.13185 18.8223C5.21573 18.9083 5.33629 18.9459 5.40444 18.8761C5.47258 18.8223 5.45685 18.6986 5.36774 18.5965C5.28387 18.5105 5.16331 18.4728 5.09516 18.5427ZM4.52903 18.1072C4.49234 18.1771 4.54476 18.2632 4.6496 18.3169C4.73347 18.3707 4.83831 18.3546 4.875 18.2793C4.91169 18.2094 4.85927 18.1234 4.75444 18.0696C4.6496 18.0374 4.56573 18.0535 4.52903 18.1072ZM6.22742 20.0212C6.14355 20.0911 6.175 20.2524 6.29556 20.3545C6.41613 20.4782 6.56814 20.4943 6.63629 20.4083C6.70444 20.3384 6.67298 20.1771 6.56815 20.075C6.45282 19.9513 6.29556 19.9352 6.22742 20.0212ZM5.62984 19.2309C5.54597 19.2846 5.54597 19.4244 5.62984 19.5481C5.71371 19.6717 5.85524 19.7255 5.92339 19.6717C6.00726 19.6018 6.00726 19.4621 5.92339 19.3384C5.85 19.2148 5.71371 19.161 5.62984 19.2309Z"
                fill="#C415FE"
              />
            </svg>
          </div>
          <div className="social-link">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.69637 20.9352C8.69637 21.0427 8.57581 21.1287 8.42379 21.1287C8.25081 21.1448 8.13024 21.0588 8.13024 20.9352C8.13024 20.8276 8.25081 20.7416 8.40282 20.7416C8.56008 20.7255 8.69637 20.8115 8.69637 20.9352ZM7.06613 20.6932C7.02944 20.8008 7.13427 20.9244 7.29153 20.9567C7.42782 21.0104 7.58508 20.9567 7.61653 20.8491C7.64798 20.7416 7.54839 20.618 7.39113 20.5696C7.25484 20.5319 7.10282 20.5857 7.06613 20.6932ZM9.38306 20.6018C9.23105 20.6395 9.12621 20.7416 9.14194 20.8653C9.15766 20.9728 9.29395 21.0427 9.45121 21.0051C9.60323 20.9674 9.70806 20.8653 9.69234 20.7577C9.67661 20.6556 9.53508 20.5857 9.38306 20.6018ZM12.8323 0C5.56169 0 0 5.6612 0 13.1181C0 19.0804 3.65887 24.1824 8.88508 25.9781C9.55605 26.1017 9.79193 25.677 9.79193 25.3276C9.79193 24.9942 9.77621 23.1556 9.77621 22.0265C9.77621 22.0265 6.10685 22.833 5.33629 20.4244C5.33629 20.4244 4.73871 18.8599 3.87903 18.4567C3.87903 18.4567 2.67863 17.6126 3.9629 17.6288C3.9629 17.6288 5.26815 17.7363 5.98629 19.0158C7.13427 21.0911 9.05806 20.4943 9.80766 20.1395C9.92823 19.2793 10.269 18.6825 10.6464 18.3277C7.71613 17.9943 4.75968 17.5589 4.75968 12.3869C4.75968 10.9084 5.15806 10.1665 5.99677 9.22029C5.86048 8.87083 5.41492 7.42999 6.13306 5.56981C7.22863 5.22035 9.75 7.0214 9.75 7.0214C10.7984 6.72033 11.9254 6.56441 13.0419 6.56441C14.1585 6.56441 15.2855 6.72033 16.3339 7.0214C16.3339 7.0214 18.8552 5.21497 19.9508 5.56981C20.669 7.43537 20.2234 8.87083 20.0871 9.22029C20.9258 10.1719 21.4395 10.9138 21.4395 12.3869C21.4395 17.575 18.352 17.989 15.4218 18.3277C15.904 18.7524 16.3129 19.5588 16.3129 20.8223C16.3129 22.6341 16.2972 24.876 16.2972 25.3168C16.2972 25.6663 16.5383 26.091 17.204 25.9673C22.446 24.1824 26 19.0804 26 13.1181C26 5.6612 20.1028 0 12.8323 0ZM5.09516 18.5427C5.02702 18.5965 5.04274 18.7201 5.13185 18.8223C5.21573 18.9083 5.33629 18.9459 5.40444 18.8761C5.47258 18.8223 5.45685 18.6986 5.36774 18.5965C5.28387 18.5105 5.16331 18.4728 5.09516 18.5427ZM4.52903 18.1072C4.49234 18.1771 4.54476 18.2632 4.6496 18.3169C4.73347 18.3707 4.83831 18.3546 4.875 18.2793C4.91169 18.2094 4.85927 18.1234 4.75444 18.0696C4.6496 18.0374 4.56573 18.0535 4.52903 18.1072ZM6.22742 20.0212C6.14355 20.0911 6.175 20.2524 6.29556 20.3545C6.41613 20.4782 6.56814 20.4943 6.63629 20.4083C6.70444 20.3384 6.67298 20.1771 6.56815 20.075C6.45282 19.9513 6.29556 19.9352 6.22742 20.0212ZM5.62984 19.2309C5.54597 19.2846 5.54597 19.4244 5.62984 19.5481C5.71371 19.6717 5.85524 19.7255 5.92339 19.6717C6.00726 19.6018 6.00726 19.4621 5.92339 19.3384C5.85 19.2148 5.71371 19.161 5.62984 19.2309Z"
                fill="#C415FE"
              />
            </svg>
          </div>
          <div className="social-link">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.69637 20.9352C8.69637 21.0427 8.57581 21.1287 8.42379 21.1287C8.25081 21.1448 8.13024 21.0588 8.13024 20.9352C8.13024 20.8276 8.25081 20.7416 8.40282 20.7416C8.56008 20.7255 8.69637 20.8115 8.69637 20.9352ZM7.06613 20.6932C7.02944 20.8008 7.13427 20.9244 7.29153 20.9567C7.42782 21.0104 7.58508 20.9567 7.61653 20.8491C7.64798 20.7416 7.54839 20.618 7.39113 20.5696C7.25484 20.5319 7.10282 20.5857 7.06613 20.6932ZM9.38306 20.6018C9.23105 20.6395 9.12621 20.7416 9.14194 20.8653C9.15766 20.9728 9.29395 21.0427 9.45121 21.0051C9.60323 20.9674 9.70806 20.8653 9.69234 20.7577C9.67661 20.6556 9.53508 20.5857 9.38306 20.6018ZM12.8323 0C5.56169 0 0 5.6612 0 13.1181C0 19.0804 3.65887 24.1824 8.88508 25.9781C9.55605 26.1017 9.79193 25.677 9.79193 25.3276C9.79193 24.9942 9.77621 23.1556 9.77621 22.0265C9.77621 22.0265 6.10685 22.833 5.33629 20.4244C5.33629 20.4244 4.73871 18.8599 3.87903 18.4567C3.87903 18.4567 2.67863 17.6126 3.9629 17.6288C3.9629 17.6288 5.26815 17.7363 5.98629 19.0158C7.13427 21.0911 9.05806 20.4943 9.80766 20.1395C9.92823 19.2793 10.269 18.6825 10.6464 18.3277C7.71613 17.9943 4.75968 17.5589 4.75968 12.3869C4.75968 10.9084 5.15806 10.1665 5.99677 9.22029C5.86048 8.87083 5.41492 7.42999 6.13306 5.56981C7.22863 5.22035 9.75 7.0214 9.75 7.0214C10.7984 6.72033 11.9254 6.56441 13.0419 6.56441C14.1585 6.56441 15.2855 6.72033 16.3339 7.0214C16.3339 7.0214 18.8552 5.21497 19.9508 5.56981C20.669 7.43537 20.2234 8.87083 20.0871 9.22029C20.9258 10.1719 21.4395 10.9138 21.4395 12.3869C21.4395 17.575 18.352 17.989 15.4218 18.3277C15.904 18.7524 16.3129 19.5588 16.3129 20.8223C16.3129 22.6341 16.2972 24.876 16.2972 25.3168C16.2972 25.6663 16.5383 26.091 17.204 25.9673C22.446 24.1824 26 19.0804 26 13.1181C26 5.6612 20.1028 0 12.8323 0ZM5.09516 18.5427C5.02702 18.5965 5.04274 18.7201 5.13185 18.8223C5.21573 18.9083 5.33629 18.9459 5.40444 18.8761C5.47258 18.8223 5.45685 18.6986 5.36774 18.5965C5.28387 18.5105 5.16331 18.4728 5.09516 18.5427ZM4.52903 18.1072C4.49234 18.1771 4.54476 18.2632 4.6496 18.3169C4.73347 18.3707 4.83831 18.3546 4.875 18.2793C4.91169 18.2094 4.85927 18.1234 4.75444 18.0696C4.6496 18.0374 4.56573 18.0535 4.52903 18.1072ZM6.22742 20.0212C6.14355 20.0911 6.175 20.2524 6.29556 20.3545C6.41613 20.4782 6.56814 20.4943 6.63629 20.4083C6.70444 20.3384 6.67298 20.1771 6.56815 20.075C6.45282 19.9513 6.29556 19.9352 6.22742 20.0212ZM5.62984 19.2309C5.54597 19.2846 5.54597 19.4244 5.62984 19.5481C5.71371 19.6717 5.85524 19.7255 5.92339 19.6717C6.00726 19.6018 6.00726 19.4621 5.92339 19.3384C5.85 19.2148 5.71371 19.161 5.62984 19.2309Z"
                fill="#C415FE"
              />
            </svg>
          </div>
        </div>
        <div className="bio">
          <p>{data.bio}</p>
        </div>
        <div className="skills-list">
          {data.skills.map((skill) => {
            return (
              <div key={skill} className="skill">
                <h5>{skill}</h5>
              </div>
            );
          })}
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
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      github: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};

export default TeamCard;