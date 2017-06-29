import PropTypes from 'prop-types';
import React from 'react';
import renderMarkdown from './markdown-parser';

const defaultProps = {
    content: '',
};

const propTypes = {
    content: PropTypes.string,
};

const MarkdownRenderer = ({ content }) => {
    return <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />;	
}

MarkdownRenderer.defaultProps = defaultProps;
MarkdownRenderer.propTypes = propTypes;

export default MarkdownRenderer;

