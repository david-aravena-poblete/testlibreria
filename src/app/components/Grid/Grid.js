import styles from "./Grid.module.css";

const gapValues = {
  none: "0",
  xs: "var(--spacing-xs)",
  sm: "var(--spacing-sm)",
  md: "var(--spacing-md)",
  lg: "var(--spacing-lg)",
  xl: "var(--spacing-xl)",
};

const breakpoints = ["mobile", "tablet", "desktop"];

function getColumnsValue(columns) {
  if (columns === "auto") {
    return "repeat(auto-fit, minmax(min(100%, var(--grid-min-item-width)), 1fr))";
  }

  return `repeat(${columns}, minmax(0, 1fr))`;
}

function getRowsValue(rows) {
  if (rows === "auto") {
    return "auto";
  }

  if (typeof rows === "number") {
    return `repeat(${rows}, minmax(0, 1fr))`;
  }

  return rows;
}

function isResponsive(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function getResponsiveValues(value, fallback, formatter) {
  if (!isResponsive(value)) {
    return {
      base: formatter(value ?? fallback),
      responsive: false,
    };
  }

  const base = value.mobile ?? value.tablet ?? value.desktop ?? fallback;

  return {
    base: formatter(base),
    responsive: true,
    values: Object.fromEntries(
      breakpoints.map((breakpoint) => [
        breakpoint,
        formatter(value[breakpoint] ?? base),
      ])
    ),
  };
}

export default function Grid({
  children,
  columns = "auto",
  rows = "auto",
  gap = "md",
  minItemWidth = "260px",
  height = "auto",
  alignItems = "stretch",
  justifyItems = "stretch",
  className = "",
  ...props
}) {
  const columnConfig = getResponsiveValues(
    columns,
    "auto",
    getColumnsValue
  );

  const rowConfig = getResponsiveValues(
    rows,
    "auto",
    getRowsValue
  );

  const gapConfig = getResponsiveValues(
    gap,
    "md",
    (value) => gapValues[value] ?? value
  );

  const gridStyle = {
    "--grid-gap": gapConfig.base,
    "--grid-min-item-width": minItemWidth,
    "--grid-columns": columnConfig.base,
    "--grid-rows": rowConfig.base,
    "--grid-height": height,
    "--grid-align-items": alignItems,
    "--grid-justify-items": justifyItems,
  };

  if (columnConfig.responsive) {
    for (const breakpoint of breakpoints) {
      gridStyle[`--grid-columns-${breakpoint}`] =
        columnConfig.values[breakpoint];
    }
  }

  if (rowConfig.responsive) {
    for (const breakpoint of breakpoints) {
      gridStyle[`--grid-rows-${breakpoint}`] =
        rowConfig.values[breakpoint];
    }
  }

  if (gapConfig.responsive) {
    for (const breakpoint of breakpoints) {
      gridStyle[`--grid-gap-${breakpoint}`] =
        gapConfig.values[breakpoint];
    }
  }

  return (
    <div
      className={[
        styles.grid,
        columnConfig.responsive ||
        rowConfig.responsive ||
        gapConfig.responsive
          ? styles.responsive
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
}