import { useEffect, useState } from "react";
import styles from "./productDetail.module.css";
import { useParams } from "react-router-dom";
import products from "../../../products-data";

export default function ProductDetail() {
  let [productSelected, setProductSelected] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    let item = {};
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === pid) {
        item = products[i];
      }
    }

    return () => {};
  }, [pid]);
  return (
    <>
      <h1>{console.log(productSelected)}</h1>
    </>
  );
}
