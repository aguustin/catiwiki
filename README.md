# Catwiki
## Descripcion:
### web app que sirve para subir imagenes bajo una contraseña y ver colecciones de imagenes de otros usuarios

### IMPORTANTE:
### Para pode ejecutar la app una vez bajada de github hay que realizar los siguientes pasos:
- En la terminal dentro de C:rutaDeLaCarpeta/unsplash instalar nodemon ( npm i nodemon -D ) y ejecutar el comando "npm run dev"
- En otra ventana de la terminal dentro de C:rutaDeLaCarpeta/unsplash/client instalar los scripts de react (npm i react-scripts) y ejecutar el comando "npm start"

## Lenguajes utilizados
- HTML
- CSS
- TAILWINDCSS
- REACT JS
- NODE JS
- EXPRESS JS
- MONGODB

## Api: ##
__- Requests.js -__

## Componentes: ##
__- App -__
__- Nav -__
__- Unsplash -__

## Context: ##
__- infoContext -__

## Imgs: ##
__- Imagenes -__

## Utils: ##
__- forms -__

## Server: ##
### Configuracion y funciones del backend
__- Controllers -__
__- models -__
__- routes -__
__- config.js -__
__- db.js -__
__- index.js -__

## Uploads: ##
__- Mantencion temporal de imagenes subidas -__

## .env: ##
__- Variables de entorno -__

## Descripcion de las funcionalidades de cada componente: ##

### __Request__: Conecta las peticiones http del frontend con el backend con axios.

### __App__: Componente principal de la app. Instancia todos los componentes de la web para que todos se ejecuten dentro de este.

### __Nav__: Componente de navegacion, contiene las vistas y los eventos de las funcionalidades para subir imagenes, buscar colecciones de imagenes por el nombre, obtener la propia coleccion de imagenes mediante la contraseña lo cual permite poder eliminar imagenes de la propia coleccion.

### __Unsplash__: Muestra las imagenes subidas a cloudinary y contiene el evento para borrar las imagenes de una coleccion propia.

### __infoContext__: Contiene todas las funcionalidades y estados globales de la web para que sean utilizados por cualquier componente.

### __Imagenes__: Contiene imagenes para la vista de la web.

### __Controllers__: Contiene los controladores del backend donde se ejecutan funciones de requerimientos y respuestas con la base de datos.

### __libs__: Contiene las credenciales de la api cloudinary para subir las imagenes a una carpeta del servicio.

### __models__: Configuracion del esquema de la base de datos.

### __routes__: Configuracion de las rutas con las peticiones http de la web.

### __config.js__: Instancia las variables de entorno.

### __db.js__: Funcion con la configuracion para la conexion a la base de datos.

### __index.js__: Configuracion necesaria del servidor para su correcto funcionamiento e iniciacion de este.

### __.env__: Contiene los datos de las variables de entorno.
