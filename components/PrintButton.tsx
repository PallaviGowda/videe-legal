"use client";

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-primary no-print">
      Download / Print PDF
    </button>
  );
}
