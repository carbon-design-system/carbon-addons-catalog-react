import React from 'react';
import { action, storiesOf } from '@storybook/react';
import DetailPageSidebar from './DetailPageSidebar';
import { Notification } from 'carbon-components-react';


const detailPageSidebarProps = {
    artifact: {
        name: 'Microservice Name',
        displayName: true,
        id: 'id',
        tags: ['IBM', 'Deprecated', 'Private', 'Beta'],
        tagName: 'IBM',
        deprecationUrl: '#',
        description: 'This is a sample description of the service',
        accountType: 'Standard',
        type: 'type',
        docURL: 'www.google.com',
        termsUrl: 'www.google.com',
        version: '1.0',
        author: 'author',
        createdDate: '1/1/2017',
        locationName: 'Dallas',
        regionName: 'US-south',
    },
    i18n: {
        viewDocs: 'View Docs',
        viewTerms: 'View Terms',
        author: 'Author',
        version: 'Version',
        createdDate: 'Created date',
        publishDate: 'Publish date',
        type: 'Type',
        service: 'Service',
        location: 'Location',
        region: 'Region',
        deprecationWarning: 'Deprecated',
    }
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
