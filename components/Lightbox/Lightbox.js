import React, { Component } from 'react';

class Lightbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: this.props.currentIndex,
        };
    }

    componentDidMount() {
        if (this.dialog) {
            this.dialog.focus();
        }
    }

    selectMedia = (index) => {
        return () => {
            this.setState({
                currentIndex: index,
            });
        };
    };

    switchMedia = (e) => {
        switch (e.which) {
        case 27: { // escape
            this.props.onClose();
            break;
        }
        case 37: { // left
            e.preventDefault();
            this.back();
            break;
        }
        case 39: {
            e.preventDefault();
            this.next();
            break;
        }
        default:
            break;
        }
    };

    back = () => {
        const { currentIndex } = this.state;
        if (currentIndex <= 0) {
            return;
        }

        this.setState({
            currentIndex: currentIndex - 1,
        });
    };

    next = () => {
        const { currentIndex } = this.state;
        if (currentIndex >= this.props.mediaData.length - 1) {
            return;
        }

        this.setState({
            currentIndex: currentIndex + 1,
        });
    };

    render() {
        const { mediaData, i18n, onClose } = this.props;

        if (!mediaData || !mediaData[this.state.currentIndex]) {
            return null;
        }

        const item = mediaData[this.state.currentIndex];
        const { type } = item;

        const sources = item.source || [];
        const hasSources = sources.length > 0 && sources.some(source => source.url && source.type);

        const { t } = i18n;

        return (
            <div className="cloudOELightbox dialogModal dialogOpen" tabIndex="0" onKeyDown={this.switchMedia}
                ref={(node) => { this.dialog = node; }}>
                <div className="dialogContainer cloudOELightboxContainer" role="dialog" aria-label="Screenshots">
                    <div className="cloudOELightBoxContentArea">
                        <div className="cloudOELightboxHeader">
                            <div className="cloudOELightboxFooter">
                                <div className="cloudOELightboxText">
                                    <div id='lightBoxText' className="lightBoxText cloudOELightboxTextNode">
                                        {item.caption || ''}
                                    </div>
                                    { type === 'image' && !item.url &&
                                        <div id='lightBoxMissingImage' className="lightBoxText cloudOELightboxTextNode">{t('missingImage')}</div>
                                    }
                                    { (type === 'youtube' || type === 'vimeo' || type === 'embedvideo') && !item.url &&
                                        <div id='lightBoxMissingYouTube' className="lightBoxText cloudOELightboxTextNode">{t('missingYouTube')}</div>
                                    }
                                    { type === 'video' && !hasSources &&
                                        <div id='lightBoxMissingVideo' className="lightBoxText cloudOELightboxTextNode">{t('missingVideo')}</div>
                                    }
                                </div>
                                <div className="LightboxClose" aria-label='close' tabIndex="0" onClick={onClose}>&times;</div>
                            </div>
                        </div>
                        <div className="LightboxHR"></div>
                        <div className="cloudOELightboxDisplayArea">
                            { this.state.currentIndex > 0 &&
                                <div className="LightboxNavPrev">
                                    <div className="LightboxNavWidth">
                                        <div className="LightboxPrev icon-arrow-big prev" tabIndex="0" onClick={this.back}>
                                          <svg viewBox="0 0 7 12"><path d="M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="cloudOELightBoxContentAreaImageContainer">
                                { type === 'image' && item.url &&
                                    <img className="lightBoxImage" src={item.url}></img>
                                }
                                { (type === 'youtube' || type === 'vimeo' || type === 'embedvideo') && item.url &&
                                    <iframe className="lightBoxFrame" src={item.url} frameBorder="0" allowFullScreen></iframe>
                                }
                                { type === 'video' &&
                                    <div controls className='lightBoxVideoContainer cloudOELightBoxContentAreaVideoContainer'>
                                        <video id='lightBoxVideo' controls>
                                            { sources.map(source =>
                                                <source key={source.url} src={source.url} type={source.type}/>
                                            )}
                                        </video>
                                    </div>
                                }
                            </div>
                            { this.state.currentIndex < mediaData.length - 1 &&
                                <div className="LightboxNavNext">
                                    <div className="LightboxNavWidth">
                                        <div className="LightboxNext icon-arrow-big next" tabIndex="0" onClick={this.next}>
                                          <svg viewBox="0 0 7 12"><path d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="cloudOELightboxGroup">
                            <div id='lightBoxGroupCount' className="cloudOELightboxGroupCount">
                                { mediaData.map((media, index) =>
                                    <div key={index} onClick={this.selectMedia(index)}
                                        className={index === this.state.currentIndex ? 'selected' : ''}>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lightbox;
