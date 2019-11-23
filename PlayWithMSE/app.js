(function () {

    let mimeType = 'video/mp4; codecs="avc1.64000C, mp4a.40.2"';

    function loadData(url) {
        return new Promise(resolve => {
            let xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.responseType = "arraybuffer";
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.send();
        });
    }

    if (MediaSource.isTypeSupported(mimeType)) {
        let video = document.querySelector("video");

        let mediaSource = new MediaSource();
        video.src = URL.createObjectURL(mediaSource);

        mediaSource.onsourceopen = async function () {
            let data = await loadData("video_fragmented.mp4");
            let sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.64000C, mp4a.40.2"');
            sourceBuffer.appendBuffer(data);
        }

    } else {
        alert('您的浏览器不支持播放该视频');
    }
})();