import React from 'react';
import { action, storiesOf } from '@storybook/react';
import ThumbnailSlider from './ThumbnailSlider';


const thumbnailSliderProps = {
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

storiesOf('ThumbnailSlider', module)
  .addDecorator(story => <div style={{ minWidth: '100%' }}>{story()}</div>)
  .addWithInfo('default', () => (
    <ThumbnailSlider {...thumbnailSliderProps} />
  ));
