import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "url('/nature-background.png') center center / cover no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        inset: 0,
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Website Name */}
      <h1
        style={{
          position: "relative",
          color: "#fff",
          fontSize: "56px",
          fontWeight: 300,
          fontFamily: "Arial, sans-serif",
          margin: 0,
          zIndex: 1,
        }}
      >
        OPTARIX RESEARCH
      </h1>

      {/* Bottom Text */}
      <p
        style={{
          position: "absolute",
          bottom: "40px",
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: "32px",
          fontFamily: "Arial, sans-serif",
          margin: 0,
          zIndex: 1,
        }}
      >
        We're under construction. Please check back for an update soon.
      </p>
    </div>
  </React.StrictMode>
);