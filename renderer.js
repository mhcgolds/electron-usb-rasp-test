console.log('Retrieving device list');

const usb = require('usb');
const div = document.querySelector('#device-list');
const devices = usb.getDeviceList();

if (devices)
{
	let html = '';
	devices.forEach(device => html+= `idProduct: ${device.deviceDescriptor.idProduct} idVendor: ${device.deviceDescriptor.idVendor}<br/>`);
	div.innerHTML = html;
}
else 
{
	div.innerText = 'Devices not found';
}

