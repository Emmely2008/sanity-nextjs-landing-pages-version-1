import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./ImageSection.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

const builder = imageUrlBuilder(client);

function ImageSection(props) {
  const { heading, label, text, image, cta } = props;
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  if (!image) {
    return null;
  }

  return (
    <div className={styles.root} ref={ref} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <figure className={styles.content}>
        <img
          src={builder.image(image).auto("format").width(2000).url()}
          className={`${styles.image} ${hovered ? styles.scaleImage : ""}`}
        />

        <div className={styles.captionBox}>
          <h2 className={`${styles.title} ${inView ? styles.fadeInText : ""}`}>{heading}</h2>

          <span className={styles.text}>{text && <SimpleBlockContent blocks={text} />}</span>
          {cta && cta.route && <Cta {...cta} />}
          <div className={styles.label}>{label}</div>
        </div>
      </figure>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
