const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	const devMode = process.env.NODE_ENV === 'development';
	const startURL = devMode
		? 'http://localhost:3000'
		: url.format({
				pathname: path.join(__dirname, './build/index.html'),
				protocol: 'file:',
				slashes: true,
		  });

	mainWindow.loadURL(startURL);
	devMode && mainWindow.webContents.openDevTools();
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
