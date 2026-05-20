import { ImageResponse } from "next/og";
import { defaultTitle, siteName } from "@/lib/seo";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          backgroundColor: "#111827",
          color: "#ffffff",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: "0.2em", opacity: 0.8 }}>
          {siteName.toUpperCase()}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24 }}>
          {defaultTitle}
        </div>
        <div style={{ fontSize: 24, marginTop: 18, opacity: 0.8 }}>
          Authentic Newari cuisine in Lalitpur
        </div>
      </div>
    ),
    size
  );
}

