<<<<<<< HEAD
import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ imageInfo, largeImg }) => {
  return (
    <li className="ImageGalleryItem" onClick={largeImg}>
      <img
        src={imageInfo.webformatURL}
        alt={imageInfo.tags}
        data-large={imageInfo.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

=======
import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ imageInfo, largeImg }) => {
  return (
    <li className="ImageGalleryItem" onClick={largeImg}>
      <img
        src={imageInfo.webformatURL}
        alt={imageInfo.tags}
        data-large={imageInfo.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

>>>>>>> e032552d71e3a59588ddf32d9a6561dc6ae9c4a6
export default ImageGalleryItem;