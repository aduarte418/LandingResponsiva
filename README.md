# Apothecaria — Landing Page con Sass

## Descripción

Este proyecto consiste en la adaptación de una landing page responsive de Apothecaria, utilizando Sass para organizar y mejorar los estilos CSS.

## Funcionalidades y características

- Diseño responsive adaptable a distintos dispositivos.
- Organización de estilos mediante Sass.
- Uso de variables para colores y otros valores reutilizables.
- Uso de mixins para reutilizar bloques de estilos.
- Función personalizada de Sass.
- Uso de funciones nativas de Sass para trabajar con los estilos.
- Anidamiento de selectores SCSS.
- Estilos para los modos claro y oscuro.

## Compilar Sass

Para compilar el archivo SCSS y generar el CSS, es necesario tener Node.js instalado.

1. Abrir una terminal en la carpeta raíz del proyecto.
2. Ejecutar:

   
   npx sass scss/styles.scss css/styles.css
   

Para mantener la compilación automática mientras se modifican los estilos, ejecutar:


  npx sass --watch scss/styles.scss:css/styles.css


Si se utiliza una ruta de salida diferente en el proyecto, debe ajustarse el comando para que coincida con la ruta enlazada desde `index.html`.

## Publicación

La página se publica mediante GitHub Pages.

- **Repositorio:** https://github.com/dariorumi5/LandingResponsiva
- **Rama de la práctica:** `sass`
- **Página web:** https://dariorumi5.github.io/LandingResponsiva/

