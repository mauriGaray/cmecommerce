import styles from "./pageNotFound.module.css";
const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/404.gif" alt="gif" />;
    </div>
  );
};

export default PageNotFound;
