# Proyecto Final React Coderhouse

## Descripción
Este es un proyecto para el curso de React de Coderhouse en el que, utilizando Vite, se pidió desarrollar un e-commerce. Utiliza Firebase como base de datos para almacenar los productos utilizados en el proyecto y enviar las órdenes de compra.

## Cómo utilizar el repositorio
Para poder utilizar el proyecto, una vez clonado, se deben ejecutar los siguientes comandos:
```
npm i
npm run dev
```

Para utilizarlo sin problemas con la base de datos de Firebase, es necesario tener las siguientes variables de entorno configuradas en el archivo `.env`:

- `VITE_API_KEY`: la API key de Firebase.
- `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.
- `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
- `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.
- `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.
- `VITE_APP_ID`: el ID de la aplicación de Firebase.

## Demo


https://github.com/Bryan-Riegler/Curso-React/assets/139500953/0228c050-9c57-4f61-9b72-607342490089


## Componentes
### Navbar
El navbar es un componente en el que se encuentran los enlaces de filtrado de los productos por categoría, el nombre del e-commerce que al hacer clic te redirige al inicio y un CartWidget, que muestra la cantidad de ítems en el carrito y al hacer clic te lleva al carrito.

### ItemListContainer
Este componente utiliza una función importada del archivo `services.js` para traer desde Firebase una lista de ítems para mostrar en la página principal y filtrar por categoría con los enlaces del navbar utilizando la categoría. Renderiza el componente ItemList.

### ItemList
ItemList renderiza la lista de ítems proporcionada por el ItemListContainer en la página principal. Donde cada ítem redirige a su respectivo ItemDetail.

### ItemDetailContainer
Importa la lógica desde `services.js` para traer cada ítem y poder renderizarlo en el ItemDetail. Renderiza el ItemDetail.

### ItemDetail
El ItemDetail permite renderizar la información detallada de cada ítem, contando con un botón para agregar ese ítem al carrito y un select para elegir la cantidad de ítems a agregar al carrito.

### Cart
Este componente permite mostrar los ítems que hay en el carrito (producto, precio, cantidad y precio total), obteniendo la información mediante el CartProvider que cuenta con las funciones utilizadas por el Cart para agregar, quitar, vaciar, sumar o disminuir la cantidad de los ítems en el carrito. Si el carrito no posee ítems, se muestra un mensaje de que el carrito está vacío. También cuenta con dos botones, "Seguir comprando", que redirige a la página principal, y "Finalizar compra", que lleva al Checkout.

### Checkout
En este se muestran los detalles de la compra y se piden unos datos de contacto. Los detalles de la compra se obtienen del contexto del CartProvider, mostrando los productos, cantidad, precio por unidad, subtotal y total. Los datos de contacto son requeridos para poder utilizar el botón de "Finalizar compra", el cual envía la orden de compra a la base de datos de Firebase.

### Form
El componente Form se utiliza en el Checkout para crear los campos de entrada de datos.

### LoadingAnimation
Es un componente con una animación de carga que se muestra mientras se llama a Firebase.
