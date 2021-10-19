import React, { useState, useCallback } from 'react';

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

export const Slide = ({ imgSrc, inView }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className={`embla__slide ${hasLoaded ? 'has-loaded' : ''}`}>
      <div className="embla__slide__inner">
        <img
          className="embla__slide__img"
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          onLoad={setLoaded}
          alt="A cool cat."
        />
      </div>
    </div>
  );
};
