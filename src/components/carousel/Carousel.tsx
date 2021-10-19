import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton } from './CarouselButtons';
import { Slide } from './CarouselSlide';
import config from '../../lib/config';

const Carousel = ({ slides }) => {
  const [slidesInView, setSlidesInView] = useState([]);
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const media = config.feature_images;
  const mediaByIndex = (index) => media[index % media.length];

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const findSlidesInView = useCallback(() => {
    if (!embla) return;

    setSlidesInView((slidesInView) => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off('select', findSlidesInView);
      }
      const inView = embla
        .slidesInView(true)
        .filter((index) => slidesInView.indexOf(index) === -1);
      return slidesInView.concat(inView);
    });
  }, [embla, setSlidesInView]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    findSlidesInView();
    embla.on('select', onSelect);
    embla.on('select', findSlidesInView);
  }, [embla, onSelect, findSlidesInView]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {Array.isArray(slides) &&
            slides.map((index) => (
              <Slide
                key={index}
                imgSrc={mediaByIndex(index)}
                inView={slidesInView.indexOf(index) > -1}
              />
            ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default Carousel;
