import ListHeader from "./ListHeader";
import ExtensionList from "./ExtensionList";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <section aria-labelledby="extension-heading">
        <ListHeader />
        <ExtensionList />
      </section>
    </main>
  );
}

export default Main;
