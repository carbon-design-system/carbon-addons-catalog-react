import React from 'react';
import { action, storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail';


const thumbnailProps = {
  media: {
    type: 'image',
    thumbnailUrl: 'http://via.placeholder.com/350x150',
    url: 'http://via.placeholder.com/350x150',
  },
  onClick: action('onClick'),
  onLoad: action('onLoad'),
};

storiesOf('Thumbnail', module)
  .addWithInfo('default', () => (
    <div className="thumbnail-container">
      <Thumbnail {...thumbnailProps} />
    </div>
  ));
