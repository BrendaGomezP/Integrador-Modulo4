# Vamos al Museo
***
Con esta app podras organizar una salida al museo, esta misma nos ofrece en una extensa lista con varios museos argentinos ubicados en las ditintas provincias del país, podras encontrar el que mas te guste o se dapate a tus planes, podes consultar si en la provincia que estas se encuentra alguno de los museos y hasta obtener una descripcion de alguno en particular que forme parte de la lista, para obtener informacion de este mismo.
***
## Funcionamiento

Para utilizar la app de deben abrir dos terminales al unisono, split terminal (ctrl+shift+5) una vez esten ambas terminales abiertas pondremos en escucha al servidor en una de estas con el comando *npm run server*, y luego ejecutamos el archivo client con el comando *npm run client*.
las acciones estaran en el archivo clientn ubicadas en cliente.on seguido por el evento "connect", dentro de la callback estara la constante mensaje donde se realizan las llamadas a las acciones de la app, se deben destipar segun lo que querramos obtener.

**Destipamos:**
* Para obetener la lista completa de museo:
```
const mensaje = { path: "museum" };
```
* Para buscar en que provincias se encuentran los museos, inserte en **province:** entre las comillas la provincia a buscar
```
const mensaje = { path: "province", province: "" };
```
 **(Atencion si la provincia tiene acento en su nombre, debera escribirla con dicho acento)**

* Para buscar un museo por su id, inserte el número al lado de **id:**
```
const mensaje = { path: "id", id:  };
```

* Para buscar un museo por el nombre, colocamos al lado de **name:** entre comillas el nombre del museo o una parte del nombre.
```
const mensaje = { path: "name", name: "" };
```
* Para obtener información del museo, colocamos al lado de **nameForDesc:** entre comillas el nombre del museo o una parte del nombre.
```
const mensaje = { path: "description", nameForDesc: "" };
```
Una vez elegida la acción procedemos a levantar el servidor y el cliente con los comando especifícado arriba, en ese orden primero el servidor, luego el cliente.

### Instalación

```
> git clone https://github.com/BrendaGomezP/Integrador-Modulo4.git
> cd ./integrador-M4
> npm i
```
### Autor:
-Brenda Gomez.

![images](https://github.com/user-attachments/assets/c7b1b44f-babf-4d50-8e31-313dcada1070)

Y si esta app fue programada escuchando musica de Luis miguel y de mas cantantes.
![9a747072-9e08-4f08-a95e-6f48cfdaf703](https://github.com/user-attachments/assets/82ac8100-7b33-481d-8f23-abbe8b68d2e5)
