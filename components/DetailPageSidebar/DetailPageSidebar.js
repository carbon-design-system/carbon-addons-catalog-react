import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

class DetailPageSidebar extends Component {
    static propTypes = {
        artifact: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
            tag: PropTypes.string,
            tagName: PropTypes.string,
            description: PropTypes.string,
            stageTag: PropTypes.string,
            stageTagName: PropTypes.string,
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

    render() {
        const {
            children,
            i18n,
            artifact,
        } = this.props;
        const isStandardAccount = false;// (accountType === 'STANDARD');

        return (
            <div className="bx--detail-page-sidebar">
                <div className={`bx--detail-page-sidebar-artifact ${artifact.tag || ''} ${artifact.stageTag || ''}`}>
                    { (artifact.type === 'runtime' || artifact.type === 'boilerplate') && (
                        <h2 className="bx--detail-page-sidebar-artifact-name">{artifact.name}</h2>
                    )}
                    { artifact.deprecationUrl && artifact.stageTag === 'ibm_deprecated' && (
                        <p className="bx--detail-page-sidebar-artifact-tag stage-artifact-tag" dangerouslySetInnerHTML={{ __html: i18n.deprecationWarning }} />
                    )}
                    { artifact.tag === 'ibm_experimental' && (
                        <div className="artifact-tag-container">
                            { isStandardAccount && artifact.accountTag &&
                                <div className="account-tag">{artifact.accountTagName}</div>
                            }
                            <div className="provider-tag">{artifact.tagName}</div>
                            { artifact.stageTag &&
                                <div className="stage-tag">{artifact.stageTagName}</div>
                            }
                        </div>
                    )}
                    { artifact.tag === 'ibm_experimental' && (
                        <p className="bx--detail-page-sidebar-artifact-tag" dangerouslySetInnerHTML={{ __html: i18n.experimentalDesc }} />
                    )}

                    <p className="bx--detail-page-sidebar-artifact-description">{artifact.description}</p>

                    { artifact.tag !== 'ibm_experimental' &&
                        <div className="artifact-tag-container">
                            { isStandardAccount && artifact.accountTag &&
                                <div className="account-tag">{artifact.accountTagName}</div>
                            }
                            <div className="provider-tag">{artifact.tagName}</div>
                            { artifact.availabilityTag && artifact.availabilityTag !== 'public' &&
                                <div className="availability-tag">{artifact.availabilityTagName}</div>
                            }
                            { artifact.stageTag &&
                                <div className="stage-tag">{artifact.stageTagName}</div>
                            }
                        </div>
                    }
                    {children}
                    <div className="artifact-tag-container">
                        { artifact.docURL &&
                            <a className="bx--detail-page-sidebar-artifact-docs" href={artifact.docURL} target="_new">{i18n.viewDocs}</a>
                        }
                        { artifact.type === 'softlayer' && artifact.termsUrl &&
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
            </div>
        );
    }
}

export default DetailPageSidebar;