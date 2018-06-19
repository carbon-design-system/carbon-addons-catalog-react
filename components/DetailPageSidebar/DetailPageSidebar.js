import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MarkdownRenderer from '../../internal/MarkdownRenderer/MarkdownRenderer';
import { Tag, Link } from '../carbon';

class DetailPageSidebar extends Component {
  static propTypes = {
    displayDetails: PropTypes.bool,
    details: {
      header: PropTypes.string,
      author: PropTypes.string,
      version: PropTypes.string,
      createdDate: PropTypes.string,
      publishDate: PropTypes.string,
      locationName: PropTypes.string,
      regionName: PropTypes.string,
      lastUpdated: PropTypes.string,
      type: PropTypes.string,
    },
    sidebarSections: PropTypes.object, // in the form { [header: xxxx, content: xxxx, links: [] ]}
    children: PropTypes.node
  };
    
  generateSideBarBlock(obj) {
    return (
      <div className="bx--detail-page-sidebar-artifact">
        <h2 className="bx--detail-page-sidebar-artifact-name">{obj.header}<hr/></h2>
        <div className="bx--detail-page-sidebar-artifact-details-container">
          <MarkdownRenderer content={obj.content} />
        </div>
      </div>
    )
  }

  generateSideBarBlocks(opts) {
    return opts.map(obj => {
      return this.generateSideBarBlock(obj);
    });
  }

  generateDetailBlock(obj) {
    return (
      <div className={`bx--detail-page-sidebar-artifact-prop ${ obj.type }-container`} key={ obj.value }>
        <span className={ `bx--detail-page-sidebar-artifact-label ${ obj.type }-label` }>{ obj.label }</span>
        <span className={ `bx--detail-page-sidebar-artifact-value ${ obj.type }-value` }>{ obj.value }</span>
      </div>
    )
  }

  generateDetailsBlocks(opts) {
    return opts.map(obj => {
      if (this.props.displayDetails) {
        return this.generateDetailBlock(obj);
      }
    });
  }

  render() {
    const {
      children,
      displayDetails,
      details,
      sidebarSections,
    } = this.props;

    return (
      <div className="bx--detail-page-sidebar">
        <div className="bx--detail-page-sidebar-artifact">
          { (displayDetails && details) && (
              <h2 className="bx--detail-page-sidebar-artifact-name">{details.header}<hr/></h2>
          )}
          <div className="bx--detail-page-sidebar-artifact-details-container">
            {displayDetails &&
              this.generateDetailsBlocks([
                { type: 'author', label: details.author, value: details.author },
                { type: 'version', label: details.version, value: details.version },
                { type: 'createdDate', label: details.createdDate, value: details.createdDate },
                { type: 'publishedDate', label: details.publishDate, value: details.publishDate },
                { type: 'type', label: details.type, value: details.type },
                { type: 'location', label: details.location, value: details.locationName },
                { type: 'region', label: details.region, value: details.regionName }
              ])
            }
          </div>
        </div>
        { sidebarSections &&
          this.generateSideBarBlocks(sidebarSections)
        }
        {children}
      </div>
    );
  }
}

export default DetailPageSidebar;