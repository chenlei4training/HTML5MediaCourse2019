const stun = require('stun');

// stun.request('stun.l.google.com:19302', (err, res) => {
stun.request('127.0.0.1', (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});