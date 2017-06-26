import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from './Example';

const additionalProps = {
  onClick: () => {
    console.log('Clicked!');
  }, // eslint-disable-line no-console
  className: 'some-class',
};

storiesOf('Breadcrumb', module).addWithInfo(
  'Default',
  `
    Example usage of said component
  `,
  () => <Example />
);
