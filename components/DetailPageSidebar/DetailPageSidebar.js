import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Tag } from 'carbon-components-react';

class DetailPageSidebar extends Component {
  static propTypes = {
    artifact: PropTypes.shape({
      name: PropTypes.string,
      displayName: PropTypes.bool,
      id: PropTypes.string,
      tags: PropTypes.array,
      description: PropTypes.string,
      accountType: PropTypes.string,
      accountTagName: PropTypes.string,
      availabilityTagName: PropTypes.string,
      type: PropTypes.string,
      docURL: PropTypes.string,
      termsUrl: PropTypes.string,
      version: PropTypes.string,
      author: PropTypes.string,
      createdDate: PropTypes.string,
      publishDate: PropTypes.string,
      locationName: PropTypes.string,
      regionName: PropTypes.string,
      }),
      i18n: PropTypes.shape({
        deprecationWarning: PropTypes.string,
        experimentalDesc: PropTypes.string,
        viewDocs: PropTypes.string,
        viewTerms: PropTypes.string,
        author: PropTypes.string,
        version: PropTypes.string,
        createdDate: PropTypes.string,
        publishDate: PropTypes.string,
        type: PropTypes.string,
        boilerplate: PropTypes.string,
        runtime: PropTypes.string,
        service: PropTypes.string,
        location: PropTypes.string,
        region: PropTypes.string,
      }),
    children: PropTypes.node
  };
    
  generateArtifactBlock(obj) {
    return (
      <div className={`bx--detail-page-sidebar-artifact-prop ${ obj.cssName }-container`}>
        <span className={ `bx--detail-page-sidebar-artifact-label ${ obj.cssName }-label` }>{ obj.label }</span>
        <span className={ `bx--detail-page-sidebar-artifact-value ${ obj.cssName }-value` }>{ obj.value }</span>
      </div>
    )
  }

  generateBlocks(opts) {
    return opts.map(obj => {
      if (this.props.artifact[obj.type]) {
        return this.generateArtifactBlock(obj);
      }
    });
  }

  generateTags(tags, isStandardAccount) {
    const allTags  = [];
    if(tags) {
      tags.map((tag, index) => {
        if (tag.match(/^(IBM|BETA|THIRD-PARTY|LOCAL|DEDICATED|CUSTOM|COMMUNITY|PRIVATE)$/i)) {
            allTags.push(<Tag key={tag.toLowerCase()} className={tag.toLowerCase()} type={tag.toLowerCase()}> {tag} </Tag>);
        } else if (this.props.artifact.deprecationUrl && tag.match(/^(DEPRECATED)$/i)) {
          allTags.push(<Tag key={tag.toLowerCase()} className={tag.toLowerCase()} type={tag.toLowerCase()} dangerouslySetInnerHTML={{ __html: this.props.i18n.deprecationWarning }}/>);
        } else if (tag.match(/^(EXPERIMENTAL)$/i)) {
          allTags.push(<Tag key={tag.toLowerCase()} className={tag.toLowerCase()} type={tag.toLowerCase()}> {tag.toLowerCase()} </Tag>);
        } else {
          allTags.push(<Tag key={tag.toLowerCase()} className='custom ${tag.toLowerCase()}' type={tag.toLowerCase()}> {tag.toLowerCase()} </Tag>);
        }
        if (isStandardAccount && this.props.artifact.accountTag) {
          allTags.push(<Tag key="account-tag" className="custom account-tag" type="account-tag"> {this.props.artifact.accountTagName}</Tag>)
        }
        if (this.props.artifact.availabilityTag && this.props.artifact.availabilityTag !== 'public') {
          allTags.push(<Tag key="availability-tag" className="custom availability-tag" type="availability-tag"> {this.props.artifact.availabilityTagName}</Tag>)
        }
      });
    }
    return allTags;
  }

  render() {
    const {
      children,
      i18n,
      artifact,
    } = this.props;
    const isStandardAccount = false;// (accountType === 'STANDARD');

    return (
      <div className="bx--detail-page-sidebar">
        <div className="bx--detail-page-sidebar-artifact">
          { (artifact.name && artifact.displayName) && (
              <h2 className="bx--detail-page-sidebar-artifact-name">{artifact.name}</h2>
          )}
          <p className="bx--detail-page-sidebar-artifact-description">{artifact.description}</p>
          <div className="artifact-tag-container">
            { this.generateTags(artifact.tags, isStandardAccount) }
          </div>
          <div className="artifact-tag-container">
            { artifact.docURL &&
              <a className="bx--detail-page-sidebar-artifact-docs" href={artifact.docURL} target="_new">{i18n.viewDocs}</a>
            }
            { artifact.termsUrl &&
              <a className="bx--detail-page-sidebar-artifact-terms" href={artifact.termsUrl} target="_new">{i18n.viewTerms}</a>
            }
          </div>
          <div className="bx--detail-page-sidebar-artifact-details-container">
            {
              this.generateBlocks([
                { type: 'author', cssName: 'author', label: i18n.author, value: artifact.author },
                { type: 'version', cssName: 'version', label: i18n.version, value: artifact.version },
                { type: 'createdDate', cssName: 'created-date', label: i18n.createdDate, value: artifact.createdDate },
                { type: 'publishedDate', cssName: 'publish-date', label: i18n.publishDate, value: artifact.publishDate },
                { type: 'type', cssName: 'type', label: i18n.type, value: i18n[artifact.type] },
                { type: 'locationName', cssName: 'location', label: i18n.location, value: artifact.locationName },
                { type: 'regionName', cssName: 'region', label: i18n.region, value: artifact.regionName }
              ])
            }
          </div>
        </div>
          {children}
      </div>
    );
  }
}

export default DetailPageSidebar;