import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Notification } from 'carbon-components';

class DetailPageSidebar extends Component {
    static propTypes = { 
        notification: PropTypes.shape({
            kind: PropTypes.string,
            title: PropTypes.string,
            message: PropTypes.string,
        }), 
        creditNotification: PropTypes.shape({
            kind: PropTypes.string,
            title: PropTypes.string,
            message: PropTypes.string,
        }),
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
        children: PropTypes.node };
    
 
    render() {
        const {
            children,
            notification,
            creditNotification,
            i18n,
            artifact,
            ...other
        } = this.props;
        const isStandardAccount = false;// (accountType === 'STANDARD');

        return (
            <div className="bx--detail-page-sidebar__container">
                { (creditNotification || notification) &&
                    <div className="inline-notification-container">
                        { creditNotification &&
                            <Notification className="inline" title={creditNotification.message} kind={creditNotification.kind}
                            />
                        }
                        { notification &&
                            <Notification className="inline" title={notification.message} kind={notification.kind}
                                />
                        }
                    </div>
                }
                <div className={`bx--artifact-details-sidebar-container${artifact.tag ?
                    ` ${artifact.tag}` : ''}${artifact.stageTag ? ` ${artifact.stageTag}` : ''}`}>
                    { (artifact.type === 'runtime' || artifact.type === 'boilerplate') && (
                        <h2 className="description-label">{artifact.name}</h2>
                    )}
                    { artifact.deprecationUrl && artifact.stageTag === 'ibm_deprecated' && (
                        <p className="tag-description stage-tag-description" dangerouslySetInnerHTML={{ __html: i18n.deprecationWarning }}/>
                    )}
                    { artifact.tag === 'ibm_experimental' && (
                        <div className="tag-container">
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
                        <p className="tag-description" dangerouslySetInnerHTML={{ __html: i18n.experimentalDesc }}/>
                    )}

                    <p className="details-description">{artifact.description}</p>

                    { artifact.tag !== 'ibm_experimental' &&
                        <div className="artifact-margin-addition"></div>
                    }
                    { artifact.tag !== 'ibm_experimental' &&
                        <div className="tag-container">
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
                    <div className="description-tag-container">
                        { artifact.docURL &&
                            <a className="description-tag-docs-link" href={artifact.docURL} target="_new">
                                {i18n.viewDocs}
                            </a>
                        }
                        { artifact.type === 'softlayer' && artifact.termsUrl &&
                            <a className="description-tag-terms-link" href={artifact.termsUrl} target="_new">
                                {i18n.viewTerms}
                            </a>
                        }
                    </div>
                    <div className="details-container">
                        { artifact.author &&
                            <div className="inset-container author-container">
                                <span className="label author-label">{i18n.author}</span>
                                <span className="value author-value">{artifact.author}</span>
                            </div>
                        }
                        { artifact.version &&
                            <div className="inset-container version-container">
                                <span className="label version-label">{i18n.version}</span>
                                <span className="value version-value">{artifact.version}</span>
                            </div>
                        }
                        { artifact.createdDate &&
                            <div className="inset-container created-date-container">
                                <span className="label created-date-label">{i18n.createdDate}</span>
                                <span className="value created-date-value">{artifact.createdDate}</span>
                            </div>
                        }
                        { artifact.publishDate &&
                            <div className="inset-container publish-date-container">
                                <span className="label publish-date-label">{i18n.publishDate}</span>
                                <span className="value publish-date-value">{artifact.publishDate}</span>
                            </div>
                        }
                        { artifact.type !== 'softlayer' &&
                            <div className="inset-container type-container">
                                <span className="label type-label">{i18n.type}</span>
                                { artifact.type === 'boilerplate' &&
                                    <span className="value type-value">{i18n.boilerplate}</span>
                                }
                                { artifact.type === 'runtime' &&
                                    <span className="value type-value">{i18n.runtime}</span>
                                }
                                { artifact.type === 'service' &&
                                    <span className="value type-value">{i18n.service}</span>
                                }
                            </div>
                        }
                        { artifact.locationName &&
                            <div className="inset-container location-container">
                                <span className="label location-label">{i18n.location}</span>
                                <span className="value location-value">{artifact.locationName}</span>
                            </div>
                        }
                        { artifact.regionName &&
                            <div className="inset-container region-container">
                                <span className="label region-label">{i18n.region}</span>
                                <span className="value region-value">{artifact.regionName}</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPageSidebar;
    