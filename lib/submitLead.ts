import { site } from "./site";

export type LeadResult = "sent" | "mailto";

export async function submitLead(subject: string, data: Record<string, string>): Promise<LeadResult> {
  if (!site.formEndpoint) {
    const body = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return "mailto";
  }

  const response = await fetch(site.formEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, ...data }),
  });
  if (!response.ok) throw new Error("Submission failed");
  return "sent";
}
