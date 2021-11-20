console.log('Retrieving device list');

const usb = require('usb');
const devices = usb.getDeviceList();

console.log(devices);
