import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { createUseStyles } from 'react-jss';
import Gallery from 'react-photo-gallery';

const useStyles = createUseStyles((theme) => ({
  container: {},
}));

const photos = [
  {
    src: require("../imgs/scaled/apple-picking.jpg") as string,
    width: 2,
    height: 3,
    title: "My younger sister picking apples in Central MA",
  },
  {
    src: require("../imgs/scaled/clue-beach.jpg") as string,
    width: 8,
    height: 10,
    title: "Clue at the beach in Winthrop, MA",
  },
  {
    src: require("../imgs/scaled/mei-mv.jpg") as string,
    width: 7,
    height: 5,
    title: "Mei at the golden hour on Menemsha Beach, Martha's Vineyard",
  },
  {
    src: require("../imgs/scaled/bacardi.jpg") as string,
    width: 3,
    height: 2,
    title: "Casa Bacardí in Puerto Rico",
  },
  {
    src: require("../imgs/scaled/la-jolla.jpg") as string,
    width: 16,
    height: 9,
    title: "Seals and birds bask in the sun at the La Jolla Cove",
  },
  {
    src: require("../imgs/scaled/ships.jpg") as string,
    width: 3,
    height: 2,
    title: "Ships docked at sunset along the Embarcadero in San Diego",
  },
  {
    src: require("../imgs/scaled/embarcadero.jpg") as string,
    width: 16,
    height: 9,
    title:
      "A single boat drifts across the frame, at the Embarcadero in San Francisco",
  },
  {
    src: require("../imgs/scaled/farm.jpg") as string,
    width: 4,
    height: 3,
    title: "Fall in Vermont at a relative's farm",
  },
  {
    src: require("../imgs/scaled/lake-tahoe.jpg") as string,
    width: 3,
    height: 2,
    title: "Dramatic clouds over Lake Tahoe, Nevada side",
  },
  {
    src: require("../imgs/scaled/golden-gate.jpg") as string,
    width: 16,
    height: 9,
    title: "The golden hour at the Golden Gate Bridge in San Francisco",
  },
  {
    src: require("../imgs/scaled/sausalito.jpg") as string,
    width: 3,
    height: 2,
    title: "The fog rolling over the hills in Sausalito",
  },
  {
    src: require("../imgs/scaled/light-string.jpg") as string,
    width: 7,
    height: 5,
    title: "A string of lights hanging in my backyard",
  },
  {
    src: require("../imgs/scaled/palm-tree.jpg") as string,
    width: 1,
    height: 1,
    title: "Clouds lazily drift by a palm tree in Barcelona",
  },
  {
    src: require("../imgs/scaled/mei-pisa.jpg") as string,
    width: 3,
    height: 2,
    title: "The Leaning Tower of Pisa reflected in Mei's glasses",
  },
  {
    src: require("../imgs/scaled/venice-bar.jpg") as string,
    width: 2,
    height: 3,
    title: "Dusk at a rooftop bar in Venice",
  },
  {
    src: require("../imgs/scaled/louvre-outside.jpg") as string,
    width: 3,
    height: 2,
    title: "The Louvre in Paris",
  },
  {
    src: require("../imgs/scaled/mei-rodin.jpg") as string,
    width: 4,
    height: 3,
    title: "Mei at the Rodin Museum in Paris",
  },
  {
    src: require("../imgs/scaled/desert.jpg") as string,
    width: 8,
    height: 10,
    title: "Driving through the Wadi Rum desert in Jordan",
  },
  {
    src: require("../imgs/scaled/palm-tree-sunset.jpg") as string,
    width: 16,
    height: 9,
    title: "The sun sets behind a palm tree in Tel Aviv",
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
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox} allowFullscreen={false}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                source: x.src,
                caption: x.title,
              }))}
              // frameProps={{ autoSize: "width" }}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};

export default Photos;
