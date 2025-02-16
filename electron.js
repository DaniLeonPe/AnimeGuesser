// Importamos los módulos necesarios
import { app, BrowserWindow } from 'electron';

// Variable para almacenar la ventana principal
let mainWindow;

// Función para crear la ventana de la aplicación
function createWindow() {
  // Creamos la ventana principal con sus características
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Permite el uso de Node.js dentro del renderizado
      contextIsolation: false, // Habilitamos acceso al contexto del navegador
    },
  });

  // Cargar el contenido de la aplicación (en este caso desde el servidor de desarrollo de Vue)
  mainWindow.loadURL('http://localhost:3000'); 

  // Abrir las herramientas de desarrollo (opcional)
  //mainWindow.webContents.openDevTools();

  // Cerrar la ventana correctamente
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Cuando la aplicación esté lista, creamos la ventana
app.whenReady().then(() => {
  createWindow();

  // En macOS, si no hay ventanas abiertas, reiniciamos la aplicación
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Salir de la aplicación cuando todas las ventanas estén cerradas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
