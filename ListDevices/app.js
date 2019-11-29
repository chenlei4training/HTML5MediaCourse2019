const cp = require("child_process");


let p = cp.spawn('ffmpeg', ["-f", "avfoundation", "-list_devices", "true", "-i", ""]);

let str = "";
p.stderr.on("data", data => {
    str += data.toString();
});
p.on("close", code => {
    console.log(str);

    let re = /\[[^\]]+] ([^\n]+)\n/g;
    let devices = {videoDevices: [], audioDevices: []};
    let currentArray = devices.videoDevices;
    while (true) {
        let r = re.exec(str);
        if (r) {
            let line = r[1].trim().toLowerCase();
            if (line == "avfoundation video devices:") {
                currentArray = devices.videoDevices;
            } else if (line == "avfoundation audio devices:") {
                currentArray = devices.audioDevices;
            } else {
                let info = /\[(\d+)] (.+)/.exec(line);
                currentArray.push({id: info[1], name: info[2]})
            }
        } else {
            break;
        }
    }
    console.log(devices);
});