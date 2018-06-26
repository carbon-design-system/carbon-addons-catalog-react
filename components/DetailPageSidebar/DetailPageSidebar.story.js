import React from 'react';
import { action, storiesOf } from '@storybook/react';
import DetailPageSidebar from './DetailPageSidebar';
import { Notification } from 'carbon-components-react';

const detailPageSidebarProps = {
  displayDetails: true,
  detailsHeader: 'Microservice Name',
  details: [
     { key: 'author', label: 'Author', value: 'IBM' },
     { key: 'version', label: 'Version', value: '3.1' },
     { key: 'createdDate', label: 'Created Date', value: '1/1/2017' },
     { key: 'publishedDate', label: 'Published Date', value: '2/1/2018' },
     { key: 'type', label: 'Type', value: 'Service' },
     { key: 'location', label: 'Location', value: 'Dallas' },
     { key: 'region', label: 'Region', value: 'US-South' },
  ],
  sidebarSections: [ {header: 'Locations', content: 'US-South, US-East' }, {header: 'Helpful Links', content: <a href="www.google.com">Link 1</a> }],
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
