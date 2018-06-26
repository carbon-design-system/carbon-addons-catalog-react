import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MarkdownRenderer from '../../internal/MarkdownRenderer/MarkdownRenderer';
import { Tag, Link } from '../carbon';

class DetailPageSidebar extends Component {
  static propTypes = {
    displayDetails: PropTypes.bool,
    detailsHeader: PropTypes.string,
    details: PropTypes.array, // in the form { [label: xxxx, value: xxxx, key: xxxx] }
    sidebarSections: PropTypes.array, // in the form { [header: xxxx, content: xxxx (markdown) ]}
    children: PropTypes.node
  };
    
  generateSideBarBlock(obj) {
    return (
      <div className="bx--detail-page-sidebar-artifact" key={ obj.header }>
        <h2 className="bx--detail-page-sidebar-artifact-name">{obj.header}<hr/></h2>
        <div className="bx--detail-page-sidebar-artifact-details-container">
          {obj.content}
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
      <div className={`bx--detail-page-sidebar-artifact-prop ${ obj.key }-container`} key={ obj.key }>
        <span className={ `bx--detail-page-sidebar-artifact-label ${ obj.key }-label` }>{ obj.label }</span>
        <span className={ `bx--detail-page-sidebar-artifact-value ${ obj.key }-value` }>{ obj.value }</span>
      </div>
    )
  }

  generateDetailsBlocks(opts) {
    return opts.map(obj => {
      return this.generateDetailBlock(obj);
    });
  }

  render() {
    const {
      children,
      displayDetails,
      detailsHeader,
      details,
      sidebarSections,
    } = this.props;

    return (
      <div className="bx--detail-page-sidebar">
        { displayDetails &&
          <div className="bx--detail-page-sidebar-artifact" key="details">
            { detailsHeader &&
              <h2 className="bx--detail-page-sidebar-artifact-name">{detailsHeader}<hr/></h2>
            }
            { details &&
              <div className="bx--detail-page-sidebar-artifact-details-container">
                { this.generateDetailsBlocks(details) }
              </div>
            }
          </div>
        }
        { sidebarSections &&
          this.generateSideBarBlocks(sidebarSections)
        }
        {children}
      </div>
    );
  }
}

export default DetailPageSidebar;