import React, { Component } from 'react';

class Thumbnail extends Component {
    constructor(props) {
        super(props);

        const { media } = this.props;
        if (media) {
            switch (media.type) {
            case 'youtube':
            case 'vimeo':
            case 'embedvideo':
            case 'video':
                this.state = {
                    canPlay: true,
                };
                break;
            default:
                this.state = {
                    canPlay: false,
                };
                break;
            }
        }
    }

    imageLoaded = (e) => {
        const { onLoad } = this.props;

        if (onLoad) {
            onLoad(e);
        }
    };

    onErrorHandler = () => {
        const { media } = this.props;

        switch (media.type) {
        case 'youtube':
        case 'vimeo':
        case 'embedvideo':
        case 'video':
            this.setState({
                canPlay: false,
            });
            break;
        default:
            break;
        }
    }

    handleKeyUp = (e) => {
        if (e.which === 13) {
            this.props.onClick(e);
        }
    };

    getWidth() {
        return this.imageContainer.clientWidth;
    }

    getAlt() {
        const { media } = this.props;

        let url = media.thumbnailUrl;
        const index = media.thumbnailUrl.lastIndexOf('/');
        if (index > -1) {
            url = url.substring(index + 1);
        }
        return media.caption || url;
    }

    render() {
        const { media, onClick } = this.props;

        if (!media) {
            return null;
        }

        return (
            <div className="imageContainer" ref={(node) => { this.imageContainer = node; }}
                onClick={onClick} onKeyUp={this.handleKeyUp}>
                <img src={media.thumbnailUrl} alt={this.getAlt()} className="thumbnailImage"
                    tabIndex="0" onLoad={this.imageLoaded} onError={this.onErrorHandler}></img>
                { this.state.canPlay &&
                    <div className="icon-play-grey-large"></div>
                }
            </div>
        );
    }
}

export default Thumbnail;
