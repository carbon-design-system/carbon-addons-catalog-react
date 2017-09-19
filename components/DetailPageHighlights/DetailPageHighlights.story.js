import React from 'react';
import { storiesOf, action } from '@storybook/react';
import DetailPageHighlights from './DetailPageHighlights';

const MarkDown = '# Block Storage ' + '\nGet local disk performance with SAN persistence and durability. Increase storage capacity available to your Bluemix Virtual and Bare Metal Servers with a maximum of *48k IOPs*. Deploy flash-backed block storage in granular increments–from 1000GB to 12000GB–and customize it all with a variety of capabilities. Choose Endurance tiers for simple, predefined, per-GB pricing—ideal for most general purpose workloads. Or, build a fine-tuned environment with allocated IOPS with Performance options—ideal for well-understood workload requirements.'

const additionalProps = {
  artifact: {
    type: 'softlayer',
    longdescription: 'Get local disk performance with SAN persistence and durability. Increase storage capacity available to your Bluemix Virtual and Bare Metal Servers with a maximum of 48k IOPs.* Deploy flash-backed* block storage in granular increments–from 1000GB to 12000GB–and customize it all with a variety of capabilities. Choose Endurance tiers for simple, predefined, per-GB pricing—ideal for most general purpose workloads. Or, build a fine-tuned environment with allocated IOPS with Performance options—ideal for well-understood workload requirements.',
    mediaData: [
                  { 'thumbnailUrl': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/20b2c-1622630164/assets/screenshots/large/block-storage/01_block_list_page.png',
                    'url': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/20b2c-1622630164/assets/screenshots/large/block-storage/01_block_list_page.png',
                    'type': 'image',
                    'caption': 'Block List Page'
                  },
                  { 'thumbnailUrl': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/16650-181970969/assets/screenshots/large/block-storage/01_details_page.png',
                    'url': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/16650-181970969/assets/screenshots/large/block-storage/01_details_page.png',
                    'type': 'image',
                    'caption': 'Block storage details page'
                  },
                  { 'thumbnailUrl': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/261cf-861567505/assets/screenshots/large/block-storage/04_ordering_block_storage_modal.png',
                    'url': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/261cf-861567505/assets/screenshots/large/block-storage/04_ordering_block_storage_modal.png',
                    'type': 'image',
                    'caption': 'Ordering block storage modal'
                  },
                  { 'thumbnailUrl': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/1bf11-1647039183/assets/screenshots/large/block-storage/04_schedule_snapshot_modal.png',
                    'url': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/1bf11-1647039183/assets/screenshots/large/block-storage/04_schedule_snapshot_modal.png',
                    'type': 'image',
                    'caption': 'Schedule snapshot modal'
                  },
                  { 'thumbnailUrl': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/1c851-1691900368/assets/screenshots/large/block-storage/07_authorize_host_modal.png',
                    'url': 'https://sl-catalogapi-production-red.stage1.ng.bluemix.net/cache/1c851-1691900368/assets/screenshots/large/block-storage/07_authorize_host_modal.png',
                    'type': 'image',
                    'caption': 'Authorize host modal'
                  },
                ],
    mediaDesc: 'Click an image to enlarge and view screen captures, slides, or videos. Screen caps show the user interface for the service after it has been provisioned.',
  },
  i18n: {
    'feature': 'Features',
    'screenshots': 'Images',
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
