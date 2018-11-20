import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const context = require.context('../stories', true, /.stories.js$/);

function loadStories() {
    context.keys().map(context);
}

addDecorator(story => <div style={{ margin: '8px' }}>{story()}</div>);
configure(loadStories, module);
