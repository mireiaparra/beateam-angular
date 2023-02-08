# Prueba Beateam

Este proyecto es una prueba técnica para la empresa Beateam, realizado con Angular.

Ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 15.1.3.

## Descripción
Consiste en una página que permite ver y gestionar una lista de pedidos realizados por diferentes clientes.

La información de cada pedido se presenta en una tabla, donde se muestran los siguientes detalles:

* Producto
* Cantidad
* Estado
* Tipo
* Fecha
* Cliente

Además, los pedidos se pueden filtrar por varios criterios, incluyendo:

* Cliente
* Referencia
* Usuario
* Fecha
* Tipo
* Estado

Para una mejor visualización, los resultados se muestran paginados según la altura de la pantalla del dispositivo con el que se está accediendo. De esta forma, se puede ver un número apropiado de resultados en cada página, evitando una sobrecarga visual.

## Requisitos
* Node.js
* Angular CLI

## Instalación
Clone el repositorio en su máquina local:
```bash
git clone https://github.com/mireiaparra/beateam-angular.git
```

Instale las dependencias del proyecto:
```bash
npm install
```
## Ejecución
Para ejecutar el proyecto, utilice el siguiente comando en la raíz del proyecto:

```bash
ng serve
````

Una vez ejecutado, el proyecto estará disponible en http://localhost:4200/.

## Estilos
Para los estilos, se ha usado Bootstrap y Scss.
