import axios from 'axios'

const apiUrl = 'http://localhost:5555';

//Método GET

const obtenerObjetos = async () => {
  try {
    const respuesta = await axios.get(`${apiUrl}/personajes/`);
    console.log('Lista de personajes:', respuesta.data)
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error);
  }
}

obtenerObjetos();

const objeto1 = {
  "id": 5,
  "nombre": "Beth",
  "profesion": "Cirujana de caballos"
}

//Método POST
const crearObjeto = async (objeto) => {
  try {
    const respuesta = await axios.post(`${apiUrl}/personajes`, objeto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Producto creado:', respuesta.data);
  } catch (error) {
    console.error('Error al crear el producto:', error);
  }
}

// crearObjeto(objeto1);

const objeto2 = {
    "id": 3,
    "nombre": "Jerry",
    "profesion": "Desempleado",
    "genero": "Masculino"
}

// Método PUT
const actualizarObjeto = async (objeto) => {
  try {
    const respuesta = await axios.put(`${apiUrl}/personajes/${objeto.id}`, objeto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Producto actualizado:', respuesta.data);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
  }
}

// actualizarObjeto(objeto2);


//Método DELETE

const eliminarObjeto = async (id) => {
  try {
    const respuesta = await axios.delete(`${apiUrl}/personajes/${id}`);
    console.log('Recurso eliminado con éxito:', respuesta.data);
  } catch (error) {
    console.error('Error al eliminar el recurso:', error);
  }
}

eliminarObjeto(4);