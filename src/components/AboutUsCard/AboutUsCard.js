import React from "react";
import PropTypes from "prop-types";
import "./AboutUsCard.css";

const AboutUsCard = ({ ...props }) => {
  const data = props.data;

  console.log(data);

  return (
    <>
      <h3 className={`color-${data.colour}`}>{data.title}</h3>
      <p>{data.description}</p>
    </>
  );
};

export default AboutUsCard;

AboutUsCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    media: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        })
      ),
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
    }),
  }),
};
