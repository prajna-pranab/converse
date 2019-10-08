const {app, BrowserWindow} = require('electron');

// open main window
function createWindow() {
	window = new BrowserWindow({
		width: 1024, height: 768,
		autoHideMenuBar: true,
		icon: __dirname + '/assets/icons/png/Icon-256.png',
		backgroundColor: 'Window',
		show: false,	// hide window until ready-to-show
		webPreferences: { nodeIntegration: true }
	});
	window.on('ready-to-show', function() { 
		window.show(); 
		window.focus(); 
	});
	window.loadFile('index.html');
}

/* for bluetooth
app.commandLine.appendSwitch('enable-experimental-web-platform-features', true);
app.commandLine.appendSwitch('enable-web-bluetooth', true);
*/

app.on('ready', createWindow)
