# prueba-tcit

## Pasos a seguir para levantar el ambiente de desarrollo

En primer lugar debe crear en la raíz de la carpeta backend un archivo .env con los siguientes valores:

```
DB_USERNAME=user-name //nombre de usuario postgres
DB_PASSWORD=password //contraseña
DB_NAME=database-name //nombre de la base de datos de postgres
```

Luego en cada carpeta debe instalar las dependencias correspondientes con

```
npm install
```

Finalmente, debe iniciar postgres con

```
sudo service postgresql start
```

hacer correr el backend con 

```
node index.js
```

y hacer correr el frontend con 

```
npm start
```

Una vez realizados los pasos anteriores se visualizará el proyecto.
