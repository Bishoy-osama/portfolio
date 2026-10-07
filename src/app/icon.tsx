import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0F14",
          borderRadius: "8px",
          border: "1px solid #1E293B",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            backgroundColor: "#2DD4BF",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
