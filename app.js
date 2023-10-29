import axios from 'axios'

const apiUrl = 'http://localhost:5555';

const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get(`${apiUrl}/productos/`);
    console.log('Lista de productos:', respuesta.data)
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error);
  }
}

obtenerProductos();

const nuevoProducto = {
  "id": 5,
  "nombre": "Agua Cristal",
  "precio": 2500
}

const crearProducto = async (producto) => {
  try {
    const respuesta = await axios.post(`${apiUrl}/productos`, producto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Producto creado:', respuesta.data);
  } catch (error) {
    console.error('Error al crear el producto:', error);
  }
}

// crearProducto(nuevoProducto);