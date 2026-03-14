import React, {useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

interface Photo {
  src: string;
  alt: string;
}

const defaultPhotoPaths: Photo[] = [
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

export default function PhotoGallery({photos: photoProp}: PhotoGalleryProps): React.ReactElement {
  const rawPhotos = photoProp ?? defaultPhotoPaths;
  const photos = rawPhotos.map((p) => ({...p, src: useBaseUrl(p.src)}));
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const goPrev = () => setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  const goNext = () => setActiveIndex((activeIndex + 1) % photos.length);

  return (
    <>
      <div className={styles.wrapper}>
        {/* Main featured image */}
        <div className={styles.featured}>
          <button
            className={styles.featuredBtn}
            onClick={() => setLightbox(true)}
            type="button"
          >
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              className={styles.featuredImage}
            />
            <div className={styles.featuredOverlay}>
              <span className={styles.hint}>
                <Translate id="photoGallery.clickToEnlarge">Click to enlarge</Translate>
              </span>
            </div>
          </button>
          {photos.length > 1 && (
            <>
              <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goPrev} type="button">
                &lsaquo;
              </button>
              <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={goNext} type="button">
                &rsaquo;
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {photos.length > 1 && (
          <div className={styles.thumbStrip}>
            {photos.map((photo, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ''}`}
                onClick={() => setActiveIndex(i)}
                type="button"
              >
                <img src={photo.src} alt={photo.alt} className={styles.thumbImage} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
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
            <div className={styles.lightboxNav} onClick={(e) => e.stopPropagation()}>
              <button className={styles.navBtn} type="button" onClick={goPrev}>&lsaquo;</button>
              <span className={styles.counter}>{activeIndex + 1} / {photos.length}</span>
              <button className={styles.navBtn} type="button" onClick={goNext}>&rsaquo;</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
