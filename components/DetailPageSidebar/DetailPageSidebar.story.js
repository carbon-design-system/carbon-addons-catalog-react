import React from 'react';
import { action, storiesOf } from '@storybook/react';
import DetailPageSidebar from './DetailPageSidebar';
import { Notification } from 'carbon-components-react';


const detailPageSidebarProps = {
  displayDetails: true,
  details: {
    header: 'Microservice Name',
    author: 'IBM',
    version: '3.1',
    createdDate: '1/1/2017',
    publishDate: '2/1/2018',
    regionName: 'US',
    lastUpdated: 'Yesterday',
    type: 'Service',
  },
};

storiesOf('DetailPageSidebar', module)
  .addDecorator(story => (
    <div style={{ minWidth: '60em' }}>
      {story()}
    </div>
  ))
  .addWithInfo('without notification', () => (
    <DetailPageSidebar {...detailPageSidebarProps} />
  ))
  .addWithInfo('with notification', () => (   
    <DetailPageSidebar {...detailPageSidebarProps}>
      <Notification title="NotificationMessage" kind="info" />
    </DetailPageSidebar>
  ));
