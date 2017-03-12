function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}
ver = iOSversion();
if (ver[0] >= 8) {
	document.getElementById('version').innerHTML='<p><align=left>😊 you can install this package on your device</p>';
}
if (ver[0] >10) {
	document.getElementById('version').innerHTML='<p><align=left>😕 your iOS version is not yet supported</p>';
}
else {
	document.getElementById('version').innerHTML='<p><align=left>😔 your iOS version is not and will not be supported </p>';
}
