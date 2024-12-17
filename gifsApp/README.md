# GIF Searcher Project

Este proyecto es una aplicación para buscar GIFs utilizando la API de Giphy. La aplicación está desarrollada con Angular y está dividida en dos módulos principales: `shared` y `gifs`, que gestionan la lógica y la interfaz de usuario.

---

## 📂 Estructura del Proyecto

### 1. **Shared**

Este módulo contiene componentes que son reutilizables en toda la aplicación:

- **Componente Sidebar**
  - Guarda y muestra el historial de las últimas búsquedas realizadas.
  - Permite al usuario seleccionar un término del historial para realizar una búsqueda nuevamente.

### 2. **Gifs**

Este módulo maneja toda la lógica relacionada con la búsqueda y renderización de los GIFs.

- **Servicios**  
  Contiene el servicio `GifsService`, que interactúa con la API de Giphy para obtener los resultados de búsqueda.
- **Componentes**
  - **Search Box**  
    Este componente lee el término ingresado por el usuario en el campo de búsqueda (usando el decorador `@ViewChild`) y envía este término al servicio para realizar la consulta.
  - **Card List**  
    Recibe los resultados obtenidos del servicio mediante el decorador `@Input` y los renderiza utilizando la directiva `*ngFor`.

---

## 🚀 Funcionalidad

### Flujo de Datos

1. El usuario ingresa un término de búsqueda en el **Search Box**.
2. El término se envía al servicio `GifsService`, que realiza una solicitud HTTP a la API de Giphy.
3. La respuesta de la API se procesa y se almacena en la propiedad `gifList`.
4. Los resultados se pasan al componente **Card List** a través de un `@Input`, donde se renderizan.

---

## 🛠️ Servicio `GifsService`

El servicio es responsable de realizar las solicitudes a la API de Giphy y gestionar el historial de búsquedas.

### Propiedades Principales

- **`_tagHistory`**  
  Un array privado que guarda los últimos 10 términos de búsqueda.
- **`_api_key`**  
  La clave de la API de Giphy.

- **`_base_url`**  
  URL base para las solicitudes HTTP.

- **`gifList`**  
  Almacena los GIFs obtenidos de la API y se utiliza para renderizar los resultados.

### Métodos

1. **`get tagsHistory(): string[]`**  
   Devuelve el historial de términos de búsqueda.

2. **`private organizeData(tag: string): void`**

   - Convierte el término a minúsculas.
   - Si el término ya existe en el historial, lo elimina y lo agrega al principio.
   - Se asegura de que el historial no supere los 10 términos.
   - Guarda el historial en `localStorage`.

3. **`private saveLocalStorage(): void`**  
   Guarda el historial de búsqueda en `localStorage`.

4. **`private loadLocalStorage(): void`**

   - Carga el historial de búsqueda desde `localStorage`.
   - Si hay un historial previo, realiza una búsqueda automática del término más reciente.

5. **`public async searchTag(tag: string): Promise<void>`**
   - Realiza una validación para ignorar términos vacíos.
   - Organiza el término en el historial.
   - Construye los parámetros de la solicitud HTTP.
   - Envía la solicitud a la API de Giphy y almacena los resultados en `gifList`.

### Ejemplo de Uso del Servicio

```typescript
constructor(private gifsService: GifsService) {}

// Realizar una búsqueda
this.gifsService.searchTag('cats');

// Obtener el historial
console.log(this.gifsService.tagsHistory);

// Acceder a los GIFs obtenidos
console.log(this.gifsService.gifList);
```
