import styles from "./Section.module.css";

export default function Section({
  children,
  height = "auto",
  className = "",
  ...props
}) {
  return (
    <section
      className={[styles.section, className]
        .filter(Boolean)
        .join(" ")}
      style={{ "--section-height": height }}
      {...props}
    >
      {children}
    </section>
  );
}