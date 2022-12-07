# Consultar el valor de divisas
## Consultabcv

Este paquete desarrollado en node.js realiza una consulta del valor de las divisas publicadas en el sitio web del Banco Central de Venezuela 

### dependencias
* [axios: "1.2.1"]
* [cheerio: "1.0.0-rc.12"]
* [jsdoc: "4.0.0"]

### Instalación 
```
npm i bcv-divisas
```
### :scroll: Ejemplos 

```
/**
* Esta función no recibe ningún parámetro 
*
* Al ser una funcion asincrona al hacer el llamado se debe hacer como se muestra en el ejemplo
* Retorna un JSON de la siguiente estructura:
{
  _dolar: 11.86,
  _euro: 12.46,
  _yuan: 1.70,
  _lira: 0.64,
  _rublo: 0.19
} .
*/

bcvdolar().then(data=>{/** codigo a ejecutar */})
```

### Reciente integracion
* Integracion de api de dolar today
* Retorna valor del dolar, euro y peso colombiano

* Documentacion realizada con jsdoc

#### ✒️ Autores 
* [StolenLeaf](https://github.com/stolenLeaf)