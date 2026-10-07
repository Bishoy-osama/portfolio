import { ImageResponse } from "next/og";

export const alt = "Bishoy Osama Fawzy | Junior Penetration Tester";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0F14",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          border: "12px solid #111720",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#2DD4BF",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#F1F5F9",
              letterSpacing: "-0.5px",
            }}
          >
            Bishoy Osama Fawzy
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "18px",
              fontFamily: "monospace",
              color: "#2DD4BF",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Junior Penetration Tester · Web Security Focus
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#F1F5F9",
              lineHeight: 1.15,
              maxWidth: "960px",
            }}
          >
            I find the weak spots in your website before attackers do.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1E293B",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ fontSize: "16px", color: "#94A3B8" }}>
              OWASP Top 10 Testing
            </span>
            <span style={{ fontSize: "16px", color: "#94A3B8" }}>·</span>
            <span style={{ fontSize: "16px", color: "#94A3B8" }}>
              API Security
            </span>
            <span style={{ fontSize: "16px", color: "#94A3B8" }}>·</span>
            <span style={{ fontSize: "16px", color: "#94A3B8" }}>
              Custom Python Tooling
            </span>
          </div>
          <span
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#2DD4BF",
            }}
          >
            Authorized Testing Only
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
