import React from 'react';
import { action, storiesOf } from '@storybook/react';
import DetailPageSidebar from './DetailPageSidebar';
import { Notification } from 'carbon-components-react';


const detailPageSidebarProps = {
    artifact: {
        name: 'name',
        id: 'id',
        tag: 'ibm_created',
        tagName: 'IBM',
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
        viewDocs: 'Docs',
        viewTerms: 'Terms',
        author: 'Author',
        version: 'Version',
        createdDate: 'Created date',
        publishDate: 'Publish date',
        type: 'Type',
        service: 'Service',
        location: 'Location',
        region: 'Region',
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
