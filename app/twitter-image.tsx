import { ImageResponse } from "next/og";
import { defaultTitle, siteName } from "@/lib/seo";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: "0.2em", opacity: 0.8 }}>
          {siteName.toUpperCase()}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, marginTop: 20 }}>
          {defaultTitle}
        </div>
        <div style={{ fontSize: 22, marginTop: 16, opacity: 0.8 }}>
          Traditional Newari sets, snacks, and specials
        </div>
      </div>
    ),
    size
  );
}

