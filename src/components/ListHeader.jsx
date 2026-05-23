import { useExtensions } from "../hooks/useExtensions";
import FilterButton from "./FilterButton";
import styles from "./ListHeader.module.css";

function ListHeader() {
  const { activeTab, handleTabChange } = useExtensions();
  return (
    <header className={styles.header}>
      <h1 id="extension-heading">Extension List</h1>
      <nav aria-label="Filter extensions">
        <FilterButton
          ariaPressed={activeTab === "all"}
          onClick={handleTabChange}
        >
          All
        </FilterButton>
        <FilterButton
          ariaPressed={activeTab === "active"}
          onClick={handleTabChange}
        >
          Active
        </FilterButton>
        <FilterButton
          ariaPressed={activeTab === "inactive"}
          onClick={handleTabChange}
        >
          Inactive
        </FilterButton>
      </nav>
    </header>
  );
}

export default ListHeader;
