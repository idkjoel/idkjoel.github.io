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
	document.getElementById('version').innerHTML='<br><p>This version of iOS is supported!</p><br>';
}
if (ver[0] >= 11) {
	document.getElementById('version').innerHTML='<br><p>This version of iOS is not yet supported.</p><br>';
}
else {
	document.getElementById('version').innerHTML='<br><p>There are no plans to support this version of iOS.</p><br>';
}
