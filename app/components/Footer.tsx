import Toolbar from "@mui/material/Toolbar";

export default function Footer() {
  return (
    <Toolbar
      style={{
        justifyContent: "space-between",
        height: "10vh",
        bottom: "0",
        width: "100%",
        backgroundColor: "darkgrey",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <p>© Träningsschema</p>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Undvika så mycket inline-styling, kan brytas ner i separat css-fil */}
        
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>Privacy</li>
        <li style={{ cursor: "pointer" }}>Help Center</li>
        <li style={{ cursor: "pointer" }}>Terms Of Use</li>
        <li style={{ cursor: "pointer" }}>Contact Us</li>
      </ul>
    </Toolbar>
  );
}
