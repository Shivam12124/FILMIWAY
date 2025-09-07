export default function Footer() {
  return (
    <footer style={{
      background: "#181b2f",
      padding: "2.3rem 0 1.5rem 0",
      color: "#bfc9d2",
      fontSize: "1rem",
      marginTop: "48px",
      borderTop: "1px solid #23243d"
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}>
        <div style={{ flexBasis: "350px", marginBottom: "2.5rem" }}>
          <div style={{
            background: "#FFC107",
            borderRadius: "50%",
            color: "#23243d",
            fontWeight: 700,
            fontSize: "1.12rem",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: 30, height: 30,
            marginBottom: 6
          }}>F</div>
          <span style={{
            fontWeight: 600,
            fontSize: "1.1rem",
            marginLeft: "12px"
          }}>Filmiway</span>
          <p style={{ margin: "1em 0", fontSize: "0.98rem", color: "#a8adb8", lineHeight: "1.6" }}>
            Discover extraordinary cinema from around the world.<br />
            Your gateway to the most captivating films and series.
          </p>
          <div style={{ marginTop: 3, fontSize: "0.98rem", color: "#6e7c99" }}>
            Powered by<br /><span style={{
              background: "#2163f9",
              borderRadius: "6px",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "2px 7px",
              marginRight: "8px"
            }}>T</span>
            The Movie Database
          </div>
        </div>
        <div style={{ display: "flex", gap: 64 }}>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 7 }}>Discover</div>
            <div style={{ color: "#8d93ae", fontSize: "0.98rem" }}>
              Movies<br />TV Series<br />Documentaries<br />Genres
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 7 }}>Company</div>
            <div style={{ color: "#8d93ae", fontSize: "0.98rem" }}>
              About<br />Press<br />Contact<br />Privacy
            </div>
          </div>
        </div>
      </div>
      <div style={{
        color: "#636880",
        fontSize: "0.93rem",
        marginTop: "34px",
        textAlign: "center"
      }}>
        &copy; 2025 Filmiway. All rights reserved.<br />Made with <span style={{ color: "#ffc107" }}>♥</span> for cinema lovers worldwide.
      </div>
    </footer>
  );
}
