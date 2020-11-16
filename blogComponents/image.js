import { getStrapiMedia } from "../lib/media";
import styles from '../styles/blogStyle.module.css';

const Image = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      className={styles.blogImg}
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default Image;
