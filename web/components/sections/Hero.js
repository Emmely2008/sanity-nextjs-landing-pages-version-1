import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import Canvas from "../Canvas";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heroType, heading, backgroundImage, tagline, ctas } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
      }
    : {};



  if (heroType == "three") {
    var str = heading;
var words = str.split(" ");
    return (
      <div className={`${styles.root3} ${styles[heroType]}`} >
        <div className={styles.text3} >
        <h1 className={styles.title3}>{words.map((w,idx)=>{return(<span className={styles.span3} key={idx}>{`${w} `}</span>)})}</h1>
        <div className={styles.tagline3}>

          {tagline && <SimpleBlockContent blocks={tagline} />}
        </div>
        </div>
        <div className={styles.canvas}>
          <Canvas/>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.gradient}></div>

      <div className={`${styles.root} ${styles[heroType]}`} style={style}>
        <div className={styles.content}>
          <h1 className={styles.title}>{heading}</h1>
          <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
          {ctas && (
            <div className={styles.ctas}>
              {ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  heroType: PropTypes.string,
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
