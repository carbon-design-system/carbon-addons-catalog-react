import React from 'react';
import { storiesOf, action } from '@storybook/react';
import DetailPageHighlights from './DetailPageHighlights';

const MarkDown = 'Get local disk performance with SAN persistence and durability. Increase storage capacity available to your Bluemix Virtual and Bare Metal Servers with a maximum of *48k IOPs*. Deploy flash-backed block storage in granular increments–from 1000GB to 12000GB–and customize it all with a variety of capabilities. Choose Endurance tiers for simple, predefined, per-GB pricing—ideal for most general purpose workloads. Or, build a fine-tuned environment with allocated IOPS with Performance options—ideal for well-understood workload requirements.'

const additionalProps = {
  artifact: {
    longDescription: 'Get local disk performance with SAN persistence and durability. Increase storage capacity available to your Bluemix Virtual and Bare Metal Servers with a maximum of 48k IOPs.* Deploy flash-backed* block storage in granular increments–from 1000GB to 12000GB–and customize it all with a variety of capabilities. Choose Endurance tiers for simple, predefined, per-GB pricing—ideal for most general purpose workloads. Or, build a fine-tuned environment with allocated IOPS with Performance options—ideal for well-understood workload requirements.',
    mediaData: [
                  { thumbnailUrl: 'http://via.placeholder.com/350x150',
                    url: 'http://via.placeholder.com/350x150',
                    type: 'image',
                    caption: 'Block List Page'
                  },
                  { thumbnailUrl: 'http://via.placeholder.com/351x150',
                    url: 'http://via.placeholder.com/351x150',
                    type: 'image',
                    caption: 'Block storage details page'
                  },
                  { thumbnailUrl: 'http://via.placeholder.com/352x150',
                    url: 'http://via.placeholder.com/352x150',
                    type: 'image',
                    caption: 'Ordering block storage modal'
                  },
                ],
    mediaDesc: 'Click an image to enlarge and view screen captures, slides, or videos. Screen caps show the user interface for the service after it has been provisioned.',
  },
  t: str => str,
  i18n: {
    'topHeader': 'Overview',
    'middleHeader': 'Features',
    'bottomHeader': 'Images',
    'notification': {
                      onCloseButtonClick: action('onCloseButtonClick'),
                      className: 'some-class',
                      title: 'this is a title',
                      subtitle: 'subtitle',
                      iconDescription: 'describes the close button'
                    },
    'kindOfNotification': 'info',
  },
  bullets: [
              { 'title': 'Flexible customization',
                 'description': 'Customize your storage capacity and number of IOPs based on your workload demands with Performance and Endurance provisioning options for Bluemix Block Storage.'
              },
              { 'title': 'Customizable allocated IOPS',
                'description': 'Meet unique storage needs and stripe volumes for top performance.'
              },
              { 'title': 'Concurrent access and highly available',
                'description': 'Redundant multipath I/O (MPIO) connections'
              },
              { 'title': 'Granular volume sizes',
                'description': 'Help ensure lower costs with TB increments when increasing storage.'
              },
              { 'title': 'Global footprint',
                'description': 'Block volumes provisioned alongside of your cloud servers on data centers around the world.'
              },
            ],
  markdown: MarkDown,
}

storiesOf('DetailPageHighlights', module)
  .addWithInfo(
    'Default',
    `
      DetailPageHighlights is used to display page information.
    `,
    () => <DetailPageHighlights {...additionalProps} />,
  )
  .addWithInfo('with children', () => (
    <DetailPageHighlights {...additionalProps}>
      <p>More information on Block Storage: Get local disk performance with SAN persistence and durability. Increase storage capacity available to your Bluemix Virtual and Bare Metal Servers with a maximum of *48k IOPs*. Deploy flash-backed block storage in granular increments–from 1000GB to 12000GB–and customize it all with a variety of capabilities. Choose Endurance tiers for simple, predefined, per-GB pricing—ideal for most general purpose workloads. Or, build a fine-tuned environment with allocated IOPS with Performance options—ideal for well-understood workload requirements.</p>
      <p>Perhaps next time you will add some images too</p>
    </DetailPageHighlights>
  ));
