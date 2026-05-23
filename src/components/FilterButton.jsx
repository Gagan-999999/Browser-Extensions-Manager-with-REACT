import styles from "./FilterButton.module.css";
function FilterButton({ children, ariaPressed, onClick }) {
  return (
    <button
      className={`${styles.filterBtn} ${ariaPressed ? "active" : ""}`}
      type="button"
      aria-pressed={ariaPressed}
      onClick={() => onClick(children.toLowerCase())}
    >
      {children}
    </button>
  );
}

export default FilterButton;
