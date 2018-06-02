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
	document.getElementById('version').innerHTML='<p><align=left>This package is supported for your version of iOS.</p>';
}
if (ver[0] >12) {
	document.getElementById('version').innerHTML='<p><align=left>This package is not yet supported for your version of iOS.</p>';
}
else {
	document.getElementById('version').innerHTML='<p><align=left>There are currently no plans to support this version of iOS.</p>';
}
