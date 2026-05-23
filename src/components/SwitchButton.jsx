import styles from "./SwitchButton.module.css";
function SwitchButton({ label, isActive, onToggle }) {
  return (
    <label className={styles.switchBtn}>
      <span className="sr-only">{`Enable or disable ${label}`}</span>
      <input
        type="checkbox"
        role="switch"
        className="sr-only"
        checked={isActive}
        onChange={() => onToggle(label)}
      />
    </label>
  );
}

export default SwitchButton;
