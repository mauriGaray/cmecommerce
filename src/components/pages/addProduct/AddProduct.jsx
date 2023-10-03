import styles from "./addProduct.module.css";

function AddProduct() {
  return (
    <form action="submit" className={styles.form}>
      <ul className={styles.ul}>
        <li>
          <h1>CREAR NUEVO ITEM</h1>
        </li>
        <li className={`${styles.typography}, ${styles.div}`}>
          <div>
            Categoría:
            <select name="select" className={styles.select}>
              <option value="General" selected>
                General
              </option>
              <option value="Electrodomesticos">Electrodomésticos</option>
              <option value="Muebles">Muebles</option>
              <option value="Herramientas">Herramientas</option>
              <option value="Celulares">Celulares</option>
              <option value="Tecnologia">Tecnología</option>
              <option value="Moda">Moda</option>
              <option value="Salud">Salud</option>
              <option value="Juguetes y Juegos">Juguetes y Juegos</option>
              <option value="Cuidado Personal">Cuidado Personal</option>
            </select>
          </div>
        </li>
        <li className={styles.typography}>
          <label htmlFor="productData">Nombre del producto: </label>
          <input type="text" name="productData" placeholder=" Heladera..." />
        </li>
        <li className={styles.typography}>
          <textarea
            name="productData"
            rows={10}
            cols={91}
            placeholder=" Descripción del producto"></textarea>
        </li>
        <li className={`${styles.typography}, ${styles.div2}`}>
          <div>
            <label htmlFor="precio">Precio:</label>
            <input
              size={9}
              type="text"
              name="precio"
              placeholder=" $0.000,00"
            />
          </div>
          <div>
            <label htmlFor="stock">Stock:</label>
            <input size={11} type="text" name="stock" placeholder="0" />
          </div>
        </li>
        <li className={`${styles.typography}, ${styles.div}`}>
          <div>
            <label htmlFor="descount">Descuento:</label>
            <input
              size={1}
              type="number"
              id="descount"
              name="descount"
              min="0"
              max="100"
              placeholder="0%"
            />
          </div>
          <div>
            Cuotas:
            <select name="cuotas" className={styles.select}>
              <option value="3">3 cuotas sin interés</option>
              <option value="6" selected>
                6 cuotas sin interés
              </option>
              <option value="12">12 cuotas sin interés</option>
            </select>
          </div>
        </li>
        <li className={styles.typography}>
          <label htmlFor="image">Imágenes:</label> <input type="file" />
        </li>
      </ul>
      <button
        className={`${styles.gap}, ${styles.btn}`}
        type="submit"
        value="addProduct">
        Agregar Producto
      </button>
      <button
        className={`${styles.gap}, ${styles.btn}`}
        type="reset"
        value="clean">
        Limpiar
      </button>
    </form>
  );
}
export default AddProduct;
