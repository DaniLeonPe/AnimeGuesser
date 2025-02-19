# AnimeGuesser

<img src="./caratula.png">



AnimeGuesser es una aplicación interactiva de adivinanza de anime, donde los usuarios intentan adivinar el nombre de un anime a partir de una imagen y una pista. La aplicación se conecta a una API de anime para obtener información aleatoria de animes y verifica las respuestas del usuario, mostrando mensajes de éxito o error.

## Características

- Adivina el nombre de un anime a partir de su imagen.
- Recibe pistas sobre el anime.
- Verifica si la respuesta es correcta o incorrecta.
- Soporta la generación aleatoria de animes.
- Excluye contenido con clasificación +18, películas y OVA.

## Tecnologías utilizadas

- **Vue 3** - Framework de JavaScript para construir la interfaz de usuario.
- **Vite** - Herramienta de construcción de proyectos modernos y rápidos.
- **TailwindCSS** - Framework de CSS para un diseño personalizado y responsivo.
- **Vuetify** - Librería de componentes de interfaz de usuario de Material Design para Vue.js.
- **VueDocGen** - Generación de documentación para componentes Vue.

## Instalación

Para ejecutar esta aplicación en tu máquina local, sigue los pasos a continuación:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/AnimeGuesser.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
    cd AnimeGuesser
   ```

3. Instala las dependencias del proyecto:
    ```bash	
    npm install
    ```

4. Ejecuta el servidor de desarrollo:
    ```bash	
    npm run dev
    ```

Esto abrirá la aplicación en http://localhost:3000 o la dirección que se te indique en la consola.



## Documentación Generada
Este proyecto incluye documentación de los componentes Vue generada automáticamente con VueDocGen. Para generar la documentación, ejecuta el siguiente comando:


npm run docs
La documentación generada estará disponible en la carpeta docs/ dentro del proyecto.

### Scripts
El archivo package.json contiene los siguientes scripts para facilitar el desarrollo:

-**dev**: Inicia el servidor de desarrollo usando Vite.

-**build**: Compila la aplicación para producción.

-**preview**: Inicia el servidor para ver la versión de producción.

-**lint**: Ejecuta ESLint para verificar el estilo y calidad del código.

-**docs**: Genera la documentación de los componentes Vue con VueDocGen.

-**newGame**: Inicia un nuevo juego de adivinanza de anime.

-**checkAnswer**: Verifica la respuesta del usuario.

## creacion de ejecutable

### Para Windows:
```bash	
npm run make
```
Esto generará un instalador .exe y .squirrel-windows en la carpeta out/make/.

### Para Linux:
```bash	
npm run make -- --platform=linux
```
Esto generará archivos .deb y .rpm en out/make/.

### Para macOS:
```bash	
npm run make -- --platform=darwin
```
Esto generará un .dmg y un .zip en out/make/.
