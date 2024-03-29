// Video: https://www.youtube.com/watch?v=ML743nrkMHw&ab_channel=TraversyMedia

const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'production';

// Create the main window
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Image Resizer',
    width: isDev ? 1000 : 500,
    height: 600,
  });

  // Open DevTools if in Dev environment
  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.join(__dirname, './src/index.html'));
}

// Create About window
function createAboutWindow() {
  const aboutWindow = new BrowserWindow({
    title: 'Image Resizer',
    width: 300,
    height: 300,
  });

  aboutWindow.loadFile(path.join(__dirname, './src/about.html'));

}

// App is ready
app.whenReady().then(() => {
  createMainWindow();

  // Implement menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  });

});

// Menu template
const menu = [
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { label: 'Sobre', createAboutWindow }
    ]
  }] : []),
  {
    role: 'fileMenu'
  },
  ...(!isMac ? [{
    label: 'Ajuda',
    submenu: [{ label: 'Sobre', click: createAboutWindow }]
  }] : [])
]

app.on('window-all-closed', () => {
  if (!isMac) app.quit();
})