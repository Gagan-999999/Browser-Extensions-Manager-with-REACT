import ExtensionListItem from "./ExtensionListItem";
import styles from "./ExtensionList.module.css";
import { useExtensions } from "../hooks/useExtensions";

function ExtensionList() {
  const { activeTab, extensions } = useExtensions();

  let filteredExtensions;

  if (activeTab === "all") filteredExtensions = extensions;
  if (activeTab === "active")
    filteredExtensions = extensions.filter((ext) => ext.isActive);
  if (activeTab === "inactive")
    filteredExtensions = extensions.filter((ext) => !ext.isActive);

  if (filteredExtensions.length === 0)
    return (
      <p className={styles.message} aria-live="polite">
        No extensions found. 🥲
      </p>
    );

  return (
    <>
      <p className="sr-only" role="status">
        Showing {activeTab} extensions, {filteredExtensions.length} found
      </p>

      <ul className={styles.extensionList}>
        {filteredExtensions.map((ext) => (
          <ExtensionListItem extension={ext} key={ext.name} />
        ))}
      </ul>
    </>
  );
}

export default ExtensionList;
