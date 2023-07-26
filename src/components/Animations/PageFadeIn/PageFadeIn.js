import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as styles from './PageFadeIn.module.css';

const PageFadeIn = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`${styles.pageFadeWrapper} ${isLoaded ? styles.loaded : ''}`}
    >
      {children}
    </div>
  );
};

PageFadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageFadeIn;
