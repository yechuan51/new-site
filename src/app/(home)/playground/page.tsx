import styles from "./page.module.css";

const PlaygroundPage: () => JSX.Element = () => {
  return (
    <button className={styles.dropdownButton}>
      Hover me
      <div className={styles.dropdownContent}>
        <p>Menu item 1</p>
        <p>Menu item 2</p>
        <p>Menu item 3</p>
      </div>
    </button>
  );
};

export default PlaygroundPage;
