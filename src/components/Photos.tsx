import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { createUseStyles } from 'react-jss';
import LazyLoad from 'react-lazy-load';
import Gallery from 'react-photo-gallery';

import Image from './Image';

const useStyles = createUseStyles((theme) => ({
  container: {
    margin: 2,
  },
}));

const photos = [
  {
    src: "apple-picking.jpg",
    width: 2,
    height: 3,
    alt: "My younger sister picking apples in Central MA",
  },
  {
    src: "clue-beach.jpg",
    width: 8,
    height: 10,
    alt: "Clue at the beach in Winthrop, MA",
  },
  {
    src: "mei-mv.jpg",
    width: 7,
    height: 5,
    alt: "Mei at the golden hour on Menemsha Beach, Martha's Vineyard",
  },
  {
    src: "pr-beach.jpg",
    width: 3,
    height: 2,
    alt: "A sunny day at the beach in San Juan, Puerto Rico",
  },
  {
    src: "bacardi.jpg",
    width: 3,
    height: 2,
    alt: "Casa Bacardí in Puerto Rico",
  },
  {
    src: "la-jolla.jpg",
    width: 16,
    height: 9,
    alt: "Seals and birds bask in the sun at the La Jolla Cove",
  },
  {
    src: "ships.jpg",
    width: 3,
    height: 2,
    alt: "Ships docked at sunset along the Embarcadero in San Diego",
  },
  {
    src: "embarcadero.jpg",
    width: 16,
    height: 9,
    alt:
      "A single boat drifts across the frame, at the Embarcadero in San Francisco",
  },
  {
    src: "farm.jpg",
    width: 4,
    height: 3,
    alt: "Fall in Vermont at a relative's farm",
  },
  {
    src: "lake-tahoe.jpg",
    width: 3,
    height: 2,
    alt: "Dramatic clouds over Lake Tahoe, Nevada side",
  },
  {
    src: "golden-gate.jpg",
    width: 16,
    height: 9,
    alt: "The golden hour at the Golden Gate Bridge in San Francisco",
  },
  {
    src: "sausalito.jpg",
    width: 3,
    height: 2,
    alt: "The fog rolling over the hills in Sausalito",
  },
  {
    src: "fishermans-wharf.jpg",
    width: 7,
    height: 5,
    alt: "The San Francisco sunset reflects off a ferry at Fisherman's Wharf",
  },
  {
    src: "light-string.jpg",
    width: 7,
    height: 5,
    alt: "A string of lights hanging in my backyard",
  },
  {
    src: "palm-tree.jpg",
    width: 1,
    height: 1,
    alt: "Clouds lazily drift by a palm tree in Barcelona",
  },
  {
    src: "cruise-sunset.jpg",
    width: 4,
    height: 3,
    alt: "The sun sets over the Mediterranean Sea",
  },
  {
    src: "mei-pisa.jpg",
    width: 3,
    height: 2,
    alt: "The Leaning Tower of Pisa reflected in Mei's glasses",
  },
  {
    src: "scrooser.jpg",
    width: 3,
    height: 2,
    alt: "Cruising along the seaside in Marseille",
  },
  {
    src: "venice-bar.jpg",
    width: 2,
    height: 3,
    alt: "Dusk at a rooftop bar in Venice",
  },
  {
    src: "louvre-outside.jpg",
    width: 3,
    height: 2,
    alt: "The Louvre in Paris",
  },
  {
    src: "mei-rodin.jpg",
    width: 4,
    height: 3,
    alt: "Mei at the Rodin Museum in Paris",
  },
  {
    src: "sacre-coeur.jpg",
    width: 3,
    height: 2,
    alt: "Sacre-Coeur peaking out from the trees in Paris",
  },
  {
    src: "mei-brunch.jpg",
    width: 7,
    height: 5,
    alt: "Mei at brunch at Sarabeth's in New York City",
  },
  {
    src: "winston-fire.jpg",
    width: 4,
    height: 3,
    alt: "Winston hanging out in front of the fire around Christmas time",
  },
  {
    src: "wadi-rum.jpg",
    width: 7,
    height: 5,
    alt: "Morning in the Wadi Rum desert in Jordan",
  },
  {
    src: "big-dipper.jpg",
    width: 3,
    height: 2,
    alt: "The Big Dipper rising over the Wadi Rum desert in Jordan",
  },
  {
    src: "desert.jpg",
    width: 8,
    height: 10,
    alt: "Driving through the Wadi Rum desert in Jordan",
  },
  {
    src: "palm-tree-sunset.jpg",
    width: 16,
    height: 9,
    alt: "The sun sets behind a palm tree in Tel Aviv",
  },
];

// credit to http://neptunian.github.io/react-photo-gallery/examples/lightbox.html
const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Gallery
        photos={photos}
        onClick={openLightbox}
        targetRowHeight={400}
        renderImage={(props) => (
          <div key={props.photo.src} style={{ margin: props.margin }}>
            <LazyLoad
              width={props.photo.width}
              height={props.photo.height}
              offsetVertical={800}
              debounce={false}
            >
              <Image
                src={require(`../imgs/scaled/${props.photo.src}`)}
                overlaySrc={require(`../imgs/thumbnails/${props.photo.src}`)}
                alt={props.photo.alt || ""}
                style={{
                  width: props.photo.width,
                  height: props.photo.height,
                  cursor: "pointer",
                }}
                onClick={(event: any) =>
                  props.onClick && props.onClick(event, { index: props.index })
                }
              />
            </LazyLoad>
          </div>
        )}
      />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox} allowFullscreen={false}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                source: require(`../imgs/scaled/${x.src}`),
                caption: x.alt,
              }))}
              styles={{
                view: (base) => ({
                  ...base,
                  "& > img": {
                    maxHeight: "100vh",
                  },
                }),
              }}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};

export default Photos;
