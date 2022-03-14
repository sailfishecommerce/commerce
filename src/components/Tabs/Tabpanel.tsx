export default function Tabpanel({ id, children }) {
  return (
    <div
      className="tab-pane fade"
      id={id}
      role="tabpanel"
      aria-labelledby={`tabs-${id}`}
    >
      {children}
    </div>
  );
}
