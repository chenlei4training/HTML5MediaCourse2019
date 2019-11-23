class PlayerCanvas {

    constructor(width, height) {
        this._canvas = document.createElement("canvas");
        this._canvas.width = width;
        this._canvas.height = height;
        this._canvasWidth = width;
        this._canvasHeight = height;
        this._CAMERA_VIDEO_WIDTH = 200;
        this._CAMERA_VIDEO_HEIGHT = 150;

        this._context2d = this._canvas.getContext("2d");
        requestAnimationFrame(this._animationFrameHandler.bind(this));
    }

    /**
     * @param video {HTMLVideoElement}
     */
    setScreenVideo(video) {
        this._screenVideo = video;
    }

    setCameraVideo(video) {
        this._cameraVideo = video;
    }

    _animationFrameHandler() {
        if (this._screenVideo) {
            this._context2d.drawImage(this._screenVideo, 0, 0, this._canvasWidth, this._canvasHeight);
        }

        if (this._cameraVideo) {
            this._context2d.drawImage(
                this._cameraVideo,
                this._canvasWidth - this._CAMERA_VIDEO_WIDTH,
                this._canvasHeight - this._CAMERA_VIDEO_HEIGHT,
                this._CAMERA_VIDEO_WIDTH,
                this._CAMERA_VIDEO_HEIGHT
            )
        }

        requestAnimationFrame(this._animationFrameHandler.bind(this));
    }


    /**
     * @returns {HTMLCanvasElement}
     */
    get canvas() {
        return this._canvas;
    }
}

module.exports = PlayerCanvas;