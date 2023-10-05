import { useState } from "react";
import styles from "./addProduct.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

function AddProduct() {
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [descount, setDescount] = useState(0);
  const [monthly, setMonthly] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      productType,
      name,
      description,
      price,
      stock,
      descount,
      monthly,
      image,
    };
    let newProduct = collection(db, "products");
    addDoc(newProduct, data).then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <ul className={styles.ul}>
        <li>
          <h1>CREAR NUEVO ITEM</h1>
        </li>
        <li className={`${styles.typography}, ${styles.div}`}>
          <div>
            Categoría:
            <select
              required
              name="productType"
              className={styles.select}
              onChange={(event) => {
                setProductType(event.target.value);
              }}>
              <option value="Electrodomésticos" defaultValue>
                Electrodomésticos
              </option>
              <option value="Muebles">Muebles</option>
              <option value="Herramientas">Herramientas</option>
              <option value="Celulares">Celulares</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Moda">Moda</option>
              <option value="Salud">Salud</option>
              <option value="Juguetes y Juegos">Juguetes y Juegos</option>
              <option value="Cuidado Personal">Cuidado Personal</option>
            </select>
          </div>
        </li>
        <li className={styles.typography}>
          <label htmlFor="productData">Nombre del producto: </label>
          <input
            required
            type="text"
            name="name"
            placeholder=" Heladera..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </li>
        <li className={styles.typography}>
          <textarea
            required
            name="productData"
            rows={10}
            cols={91}
            placeholder=" Descripción del producto"
            onChange={(event) => {
              setDescription(event.target.value);
            }}></textarea>
        </li>
        <li className={`${styles.typography}, ${styles.div2}`}>
          <div>
            <label htmlFor="precio">Precio:</label>
            <input
              required
              size={9}
              type="number"
              name="price"
              placeholder=" $0.000,00"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="stock">Stock:</label>
            <input
              required
              size={11}
              type="text"
              name="stock"
              placeholder="0"
              onChange={(event) => {
                setStock(event.target.value);
              }}
            />
          </div>
        </li>
        <li className={`${styles.typography}, ${styles.div}`}>
          <div>
            <label htmlFor="descount">Descuento:</label>
            <input
              required
              size={16}
              type="per"
              name="descount"
              min="0"
              max="100"
              placeholder="valor del 0 al 100"
              onChange={(event) => {
                setDescount(`${event.target.value}%`);
              }}
            />
          </div>
          <div>
            Cuotas:
            <select
              name="monthly"
              className={styles.select}
              onChange={(event) => {
                setMonthly(event.target.value);
              }}>
              <option value="0" defaultValue>
                Ninguna
              </option>
              <option value="3">3 cuotas sin interés</option>
              <option value="6">6 cuotas sin interés</option>
              <option value="12">12 cuotas sin interés</option>
            </select>
          </div>
        </li>
        <li className={styles.typography}>
          <label htmlFor="image">Imágenes:</label>
          <input
            required
            size={45}
            type="url"
            name="image"
            placeholder=" Ingresar la URL de la imagen"
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </li>
      </ul>
      <button className={`${styles.gap}, ${styles.btn}`} type="submit">
        Agregar Producto
      </button>
      <button className={`${styles.gap}, ${styles.btn}`} type="reset">
        Limpiar
      </button>
    </form>
  );
}
export default AddProduct;
