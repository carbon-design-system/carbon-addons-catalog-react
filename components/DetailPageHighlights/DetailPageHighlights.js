import PropTypes from 'prop-types';
import React from 'react';
import MarkdownRenderer from '../../internal/MarkdownRenderer/MarkdownRenderer';
import { Notification } from 'carbon-components-react';

const propTypes = {
  artifact: PropTypes.object,
  i18n: PropTypes.object,
  bullets: PropTypes.array,
  markdown: PropTypes.string,
  children: PropTypes.node
};

const DetailsPageHighlights = ({ artifact, i18n, bullets, markdown, children }) => {
  return (
    <div className="bx--artifact-details-highlight-container">
      {i18n.notification &&
        <Notification {...i18n.notification} kind={i18n.kindOfNotification} />
      }
      {markdown &&
        <div className="bx--createArtifactFlexGroupColumn bx--artifact-details-description-content bx--markdown-container">
          <MarkdownRenderer content={markdown} />
        </div>
      }
      {artifact.type === 'softlayer' &&
        <div
          className="bx--createArtifactFlexGroupColumn bx--artifact-details-description-content"
        >
          <div className="bx--artifact-details-description">{artifact.longDescription}</div>
        </div>
      }
      {bullets &&
        // Features
        <div className="bx--createArtifactFlexGroupColumn bx--artifact-details-description-content">
          <div className="bx--title-label">{i18n.feature}</div>
          <div className="bx--artifact-details-description-bullets">
            {bullets.map((bullet, index) =>
              <div key={index} className="bx--description-bullet-content">
                {bullet.title &&
                  <div className="bx--bullet-title">{bullet.title}</div>
                }
                {bullet.description &&
                  <div className="bx--bullet-description">{bullet.description}</div>
                }
              </div>
            )}
          </div>
        </div>
      }
      {artifact.mediaData &&
        // Screenshots
        <div className="bx--createArtifactFlexGroupColumn">
          <div className="bx--title-label">{i18n.screenshots}</div>
          <div className="bx--description-label">{artifact.mediaDesc}</div>
        </div>
      }
      {children}
    </div>
  );
};

DetailsPageHighlights.propTypes = propTypes;

export default DetailsPageHighlights;
