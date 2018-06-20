import PropTypes from 'prop-types';
import React from 'react';
import MarkdownRenderer from '../../internal/MarkdownRenderer/MarkdownRenderer';
import { Notification } from '../carbon';
import ThumbnailSlider from '../ThumbnailSlider/ThumbnailSlider';

const propTypes = {
  artifact: PropTypes.object,
  i18n: PropTypes.object,
  bullets: PropTypes.array,
  markdown: PropTypes.string,
  children: PropTypes.node
};

const DetailsPageHighlights = ({ artifact, i18n, t, bullets, markdown, children }) => {

  const sliderProps = {
    mediaData: artifact.mediaData,
    t: str => str,
  }

  return (
    <div className="bx--artifact-details-highlight-container">
      {i18n.notification &&
        <Notification {...i18n.notification} kind={i18n.kindOfNotification} />
      }
      <div className="bx--createArtifactFlexGroupColumn bx--artifact-details-description-content bx--markdown-container">
        <div className="bx--title-label">{i18n.topHeader}</div>
        {markdown &&
          // Description via markdown
          <MarkdownRenderer className="bx--artifact-details-description" content={markdown} />
        }
        {artifact.longDescription &&
          // Description via object
          <div className="bx--artifact-details-description">{artifact.longDescription}</div>
        }
      </div>
      {bullets &&
        // Features
        <div className="bx--createArtifactFlexGroupColumn bx--artifact-details-description-content">
          <div className="bx--title-label">{i18n.middleHeader}</div>
          <ul className="bx--artifact-details-description-bullets">
            {bullets.map((bullet, index) =>
              <li key={index} className="bx--description-bullet-content">
                {bullet.title &&
                  <div className="bx--bullet-title">{bullet.title}</div>
                }
                {bullet.description &&
                  <div className="bx--bullet-description">{bullet.description}</div>
                }
              </li>
            )}
          </ul>
        </div>
      }
      {artifact.mediaData &&
        // Screenshots
        <div className="bx--createArtifactFlexGroupColumn">
          <div className="bx--title-label">{i18n.bottomHeader}</div>
            <ThumbnailSlider {...sliderProps} />
          <div className="bx--description-label">{}</div>
        </div>
      }
      {children}
    </div>
  );
};

DetailsPageHighlights.propTypes = propTypes;

export default DetailsPageHighlights;
