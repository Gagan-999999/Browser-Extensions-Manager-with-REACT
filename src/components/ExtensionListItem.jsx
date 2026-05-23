import SwitchButton from "./SwitchButton";
import styles from "./ExtensionListItem.module.css";
import { useExtensions } from "../hooks/useExtensions";

function ExtensionListItem({ extension }) {
  const { name, logo, description, isActive } = extension;
  const { handleToggleExtension, handleRemoveExtension } = useExtensions();

  return (
    <li>
      <article className={styles.extensionListItem}>
        <header>
          <img src={logo} alt="" width={60} height={60} />
          <div className={styles.description}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </header>
        <footer className={styles.footer}>
          <button type="button" onClick={() => handleRemoveExtension(name)}>
            Remove <span className="sr-only">{`${name} extension`}</span>
          </button>
          <SwitchButton
            label={name}
            isActive={isActive}
            onToggle={handleToggleExtension}
          />
        </footer>
      </article>
    </li>
  );
}

export default ExtensionListItem;
