# React Product App

Este proyecto es una aplicación en React que permite gestionar productos mediante un formulario. Incluye funcionalidades como un contador, el manejo de estados con `useState` y efectos con `useEffect`, y componentes reutilizables con TypeScript.

## Tabla de Contenidos
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Características
- **Formulario Dinámico**: Permite agregar productos con nombre, imagen y precio.
- **Validaciones**: Comprueba campos obligatorios y formatos válidos para URLs de imágenes.
- **Gestión de Estados**: Uso de `useState` para manejar la lista de productos.
- **Componentes Reutilizables**: Incluye un hook genérico para formularios (`useForm`) y varios componentes independientes.
- **Interactividad**: Contador y ejemplo de uso de efectos para aprendizaje de `useEffect`.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/repo.git

Navega al directorio del proyecto:
- cd repo

Instala las dependencias:
- npm install

Inicia el servidor de desarrollo:
- npm start

## Componentes Principales
- AppProduct: Maneja la lista de productos, integrando el formulario y la visualización de los productos.
- FormProduct: Formulario para agregar productos con validación.
- ListProducts: Lista de productos que muestra tarjetas con los detalles de cada producto.
- ComponentCounter: Contador interactivo.
- ComponentUseEffect: Demostración de uso de useEffect.


## Tecnologías Utilizadas
- React con TypeScript
- React Bootstrap para estilos
- Hooks personalizados (useForm) para manejo de formularios
