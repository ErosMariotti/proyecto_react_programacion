import { Form, Button } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react"

interface IPropsFormProduct{
  handleAddProduct: Function;
}

export const FormProduct :FC<IPropsFormProduct> = ({handleAddProduct}) => {

  const {handleChange, values, resetForm} = useForm({
    nombre: "",
    imagen: "",
    precio: 0,
  });

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene la recarga del formulario
    // Validar que todos los campos estén completos
    if (!values.nombre || !values.imagen || values.precio <= 0) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }
    handleAddProduct(values);
    resetForm();
  };

  const isImageUrlValid = (url: string) => {
    return /\.(jpeg|jpg|gif|png|webp)$/.test(url);
  };

  return (
    <Form className="p-4 border rounded m-3" onSubmit={handleSubmitForm}>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control type="text" name="nombre" placeholder="Ingrese el nombre del producto" value = {values.nombre} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formNombre">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" name="imagen" placeholder="Ingrese la imagen del producto" value = {values.imagen} onChange={handleChange} />
        {!isImageUrlValid(values.imagen) && values.imagen && (
          <small className="text-danger">
            La URL no parece ser válida. Asegúrate de usar una dirección que termine en .jpg, .png o similar.
          </small>
        )}
      </Form.Group>
      <Form.Group controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" name="precio" placeholder="Ingrese el precio del producto" value = {values.precio} onChange={handleChange} />
      </Form.Group>
      <div className="d-flex justify-content-center mt-4">
        <button type="submit">Enviar Producto</button>
      </div>
    </Form>
  );
};

export const ProductCard = ({ product }: any) => {
  const placeholderImage =
    "https://via.placeholder.com/150?text=Imagen+no+disponible";

  return (
    <div className="card">
      <img
        src={product.imagen || placeholderImage}
        alt={product.nombre}
        onError={(e) => (e.currentTarget.src = placeholderImage)} // Cambiar a imagen por defecto si falla
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">${product.precio}</p>
      </div>
    </div>
  );
};