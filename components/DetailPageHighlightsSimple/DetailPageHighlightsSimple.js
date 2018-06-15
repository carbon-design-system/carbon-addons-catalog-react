import PropTypes from 'prop-types';
import React from 'react';
import { Notification } from '../carbon';

const propTypes = {
  artifact: PropTypes.object,
  i18n: PropTypes.object,
  bullets: PropTypes.array,
  children: PropTypes.node
};

const DetailsPageHighlightsSimple = ({ artifact, i18n, bullets, children }) => {
  return (
    <div className="bx--artifact-details-highlight-container">
      {i18n.notification &&
        <Notification {...i18n.notification} kind={i18n.kindOfNotification} />
      }
      <div className="bx--title-label">{i18n.topHeader}</div>
      {artifact.longDescription &&
        <div className="bx--artifact-details-description">{artifact.longDescription}</div>
      }
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
          <div className="bx--description-label">{artifact.mediaDesc}</div>
        </div>
      }
      {children}
    </div>
  );
};

DetailsPageHighlightsSimple.propTypes = propTypes;

export default DetailsPageHighlightsSimple;
