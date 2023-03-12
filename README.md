
# Practica Typescript

Aplicacion web para guardar imagenes con su propia API.

## Instalación
Este proyecto cuenta con dos carpetas: backend(Donde esta programada la API) y client (donde esta programado el fronend)
Descargue el proyecto o clone este respositorio

`
git clone https://github.com/PabloSan1997/PracticaTypescript
`

En ambas carpetas tienes que aplicar `npm install` por separado

## Funcionamiento

- Primero activa el servidor, en la consola digite en la carpeta backend el siguiente codigo `npm run dev` el cual activa un nodemon

- Desde otra consola en la carpeta client digite el siguiente codigo para activar la pagina en el modo desarrollador `npm run dev`  y para generar los archivos estaticos de la pagina digite el siguiente codigo `npm run build` 

- Una vez instalada que ambos servidores este funcionande desde el fronend puedes ver las imagenes guardadas y mandar las tuyas propias


## Variables ambientales

Para que tengas todas las acciones activadas en la carpeta backend es importante generar un archivo `.env` para poder tener un usuario registrado y poder borrar elementos

```
USUARIO='{"usuario":"Pablo","contra":"micontra"}
```

## Tech Stack

**Backend:**  NodeJS, Express, @Hapi/boom, joi, Javascipt

**Client:** React, Typescript, Vite, Javascript, Axios, NodeJS

## API Referencia

#### Get todas las imagenes

`
  GET api/v1/imagenes
`
|Datos|Tipo|
|-----|-----|
|id|number|
|titulo|string|
|descripcion|string|
|url|string|

#### Get una sola imagenes

`
  GET api/v1/imagenes/:id
`
### POST imagen

`
  POST api/v1/imagenes/
`
|Datos|Tipo|
|-----|-----|
|titulo|string|
|descripcion|string|
|url|string|

El id lo agrega automaticamente el programa


### PATCH imagen

`
  PATCH api/v1/imagenes/:id
`

|Datos|Tipo|
|-----|-----|
|titulo|string|
|descripcion|string|
|url|string|

### DELETE Todas las imagenes

`
  DELETE  api/v1/imagenes/borrarTodo
`

### DELETE una sola imagen

`
  DELETE  api/v1/imagenes/:id
`

## Captura
[![Captura](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTTXxNAqm30msM6lnQ9IWKdPPFl7EvkAy2lffXlYdsruuhJzTtg3MeClYgreN479KkYEao9PZHC0R6xq4ljMcabsAM2uA=w926-h643 "Captura")](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTTXxNAqm30msM6lnQ9IWKdPPFl7EvkAy2lffXlYdsruuhJzTtg3MeClYgreN479KkYEao9PZHC0R6xq4ljMcabsAM2uA=w926-h643 "Captura")
## Authors

- [Pablo Santillana](https://github.com/PabloSan1997)