import React, {useState} from 'react';
import styles from './styles.module.css';

interface Photo {
  src: string;
  alt: string;
}

const defaultPhotos: Photo[] = [
  {src: '/img/photo_1.jpeg', alt: 'Portrait 1'},
  {src: '/img/photo_2.jpeg', alt: 'Portrait 2'},
  {src: '/img/photo_3.jpeg', alt: 'Portrait 3'},
  {src: '/img/photo_4.jpeg', alt: 'Portrait 4'},
  {src: '/img/photo_5.jpeg', alt: 'Portrait 5'},
  {src: '/img/photo_6.jpeg', alt: 'Portrait 6'},
  {src: '/img/photo_7.jpeg', alt: 'Portrait 7'},
  {src: '/img/photo_8.jpeg', alt: 'Portrait 8'},
];

interface PhotoGalleryProps {
  photos?: Photo[];
}

export default function PhotoGallery({photos = defaultPhotos}: PhotoGalleryProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className={styles.gallery}>
        {photos.map((photo, i) => (
          <button
            key={i}
            className={`${styles.card} ${i === activeIndex ? styles.active : ''}`}
            onClick={() => {
              setActiveIndex(i);
              setLightbox(true);
            }}
            type="button"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.hint}>Click to enlarge</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(false)}>
          <button className={styles.close} onClick={() => setLightbox(false)} type="button">
            &times;
          </button>
          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          {photos.length > 1 && (
            <div className={styles.nav} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.navBtn}
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)}
              >
                &lsaquo;
              </button>
              <span className={styles.counter}>
                {activeIndex + 1} / {photos.length}
              </span>
              <button
                className={styles.navBtn}
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % photos.length)}
              >
                &rsaquo;
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
