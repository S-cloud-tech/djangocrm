// const { app, BrowserWindow } = require("electron");

// function ElectronMainMethod() {
//   const launchWindow = new BrowserWindow({
//     title: "DjangoCRM",
//     width: 800,
//     height: 600,
//   });

//   const appURL = "http://localhost:8000";

//   launchWindow.loadURL(appURL);
// }

// app.whenReady().then((ElectronMainMethod) => {
//   createWindow();
// });
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const appURL = "http://localhost:8000";

  win.loadURL(appURL);
};

app.whenReady().then(() => {
  createWindow();
});
