import React, { Component } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import Lightbox from '../Lightbox/Lightbox';

class ThumbnailSlider extends Component {
    constructor(props) {
        super(props);

        const { mediaData } = this.props;
        this.thumbnails = [];
        if (mediaData) {
            mediaData.forEach(() => {
                this.thumbnails.push(null);
            });
        }

        this.state = {
            selectedThumbnailIndex: 0,
            showLightbox: false,
            showLeftScroller: false,
            showRightScroller: false,
        };
    }

    componentDidMount() {
        this.leftMostImageIndex = 0;
        if (window.styleHasBeenLoaded) {
            this.enableScroller();
        } else {
            window.addEventListener('styleLoaded', this.enableScroller.bind(this));
        }
        window.addEventListener('resize', this.enableScroller.bind(this));
    }

    enableScroller = () => {
        // enable scrollers
        const thumbnailContainerLeft = this.thumbnailContainer.style.left;
        const left = parseInt(thumbnailContainerLeft, 10) || 0;
        this.updateControls(left);
    };

    updateControls = (left) => {
        const viewPortWidth = this.viewPort.clientWidth;
        const vpWidth = parseInt(viewPortWidth, 10);
        if (vpWidth === 0) {
            // the widget is not visible so return
            return;
        }
        const thumbnailContainerWidth = this.thumbnailContainer.clientWidth;
        const width = parseInt(thumbnailContainerWidth, 10);
        const stop = (width - vpWidth) * -1;
        const showLeftScroller = left < 0;
        const showRightScroller = left > stop;
        this.setState(Object.assign({}, this.state, {
            showLeftScroller,
            showRightScroller,
        }));
    };

    calculateLeft = (i) => {
        let left = 0;
        for (let x = 0; x < i; x++) { // eslint-disable-line no-plusplus
            const width = this.thumbnails[x] ? this.thumbnails[x].getWidth() : 0;
            left += width * -1;
        }
        return left;
    };

    shift = (direction) => {
        return () => {
            if (this.thumbnails.length === 0) {
                return;
            }

            const vpWidth = parseInt(this.viewPort.clientWidth, 10);
            let done = false;
            let shiftVale = 0;
            let i = this.leftMostImageIndex;
            do {
                const nextThumbnail = (direction === 'left') ? this.thumbnails[i + 1] :
                    this.thumbnails[i - 1];
                const width = nextThumbnail ? nextThumbnail.getWidth() : 0;
                if (width !== 0 && (shiftVale + width) < vpWidth) {
                    shiftVale += width;
                    i = (direction === 'left') ? (i + 1) : (i - 1);
                } else {
                    done = true;
                }
            } while (!done);
            if (this.leftMostImageIndex === i) {
                /*
                 * The next image must be wider than the view port, this can happen on phone
                 * devices.
                 */
                i = (direction === 'left') ? (i + 1) : (i - 1); // force jump to next image
                if (i + 1 > this.thumbnails.length) {
                    i = this.thumbnails.length;
                } else if (i < 0) {
                    i = 0;
                }
            }
            this.leftMostImageIndex = i;
            const left = this.calculateLeft(this.leftMostImageIndex);
            this.thumbnailContainer.style.left = `${left}px`;
            this.updateControls(left);
        };
    };

    showLightbox = (index) => {
        return () => {
            this.setState(Object.assign({}, this.state, {
                selectedThumbnailIndex: index,
                showLightbox: true,
            }));
        };
    };

    closeLightBox = () => {
        this.setState(Object.assign({}, this.state, {
            showLightbox: false,
        }));
    };

    render() {
        const { mediaData, t } = this.props;

        if (!mediaData) {
            return null;
        }

        return (
            <div className="thumbnail-container">
                <div className="viewPort" ref={(node) => { this.viewPort = node; }}>
                    <div className={`scrollContainerLeft${this.state.showLeftScroller ? '' : ' hideScroller'}`}
                        onClick={this.shift('right')}>
                        <div className="left-scroll icon-arrow-big"/>
                    </div>
                    <div className="thumbnailContainer" ref={(node) => { this.thumbnailContainer = node; }}>
                        { mediaData.map((media, index) =>
                            <Thumbnail key={media.thumbnailUrl} media={media} onLoad={this.enableScroller}
                                ref={(node) => { this.thumbnails[index] = node; }}
                                onClick={this.showLightbox(index)}/>
                        )}
                    </div>
                    <div className={`scrollContainerRight${this.state.showRightScroller ? '' : ' hideScroller'}`}
                        onClick={this.shift('left')}>
                        <div className="right-scroll icon-arrow-big"/>
                    </div>
                </div>
                { this.state.showLightbox &&
                    <Lightbox mediaData={mediaData} currentIndex={this.state.selectedThumbnailIndex}
                        onClose={this.closeLightBox} t={t}/>
                }
            </div>
        );
    }
}

export default ThumbnailSlider;
