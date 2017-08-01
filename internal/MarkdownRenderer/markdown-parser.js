import markdownit from 'markdown-it';
import superscript from 'markdown-it-sup';
import PropTypes from 'prop-types';
import React from 'react';

const linkOpen = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'bx--link']);
    return self.renderToken(tokens, idx, options);
};

const renderEm = (tokens, idx, opts, env, self, openTag) => {
    const token = tokens[idx];

    if (token.markup === '_') {
        token.tag = 'span';

        if (openTag) {
            token.attrPush(['class', 'underline-text']);
        }
    }

    return self.renderToken(tokens, idx, opts);
};

const emOpen = (...args) => renderEm(...args, true);
const emClose = (...args) => renderEm(...args, false);

const setRules = (rules) => {
    rules.underline_open = () => '<span class="underline-text">';
    rules.underline_close = () => '</span>';
    rules.link_open = linkOpen;
    rules.em_open = emOpen;
    rules.em_close = emClose;
};

const parser = markdownit().use(superscript);
setRules(parser.renderer.rules);

const renderMarkdown = (markdown) => {
    return parser.render(markdown);    
}

export default renderMarkdown;