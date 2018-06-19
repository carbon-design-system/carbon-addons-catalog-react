import React from 'react';
import { action, storiesOf } from '@storybook/react';
import Lightbox from './Lightbox';


const lightboxProps = {
  currentIndex: 0,
  onClose: action('onClose'),
  i18n: {
    t: str => str,
  },
  mediaData: [
    {
      type: 'image',
      thumbnailUrl: 'http://via.placeholder.com/350x150',
      url: 'http://via.placeholder.com/350x150',
    },
    {
      type: 'image',
      thumbnailUrl: 'http://via.placeholder.com/351x150',
      url: 'http://via.placeholder.com/351x150',
    },
    {
      type: 'image',
      thumbnailUrl: 'http://via.placeholder.com/352x150',
      url: 'http://via.placeholder.com/352x150',
    }
  ]
};

storiesOf('Lightbox', module)
  .addWithInfo('default', () => (
    <Lightbox {...lightboxProps} />
  ));
