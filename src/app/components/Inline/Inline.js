import styles from "./Inline.module.css";

const gapValues = {
  none: "0",
  xs: "var(--spacing-xs)",
  sm: "var(--spacing-sm)",
  md: "var(--spacing-md)",
  lg: "var(--spacing-lg)",
  xl: "var(--spacing-xl)",
};

export default function Inline({
  children,
  gap = "md",
  align = "center",
  justify = "flex-start",
  wrap = false,
  className = "",
  ...props
}) {
  const inlineStyle = {
    "--inline-gap": gapValues[gap] ?? gapValues.md,
    "--inline-align": align,
    "--inline-justify": justify,
  };

  return (
    <div
      className={[
        styles.inline,
        wrap ? styles.wrap : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={inlineStyle}
      {...props}
    >
      {children}
    </div>
  );
}