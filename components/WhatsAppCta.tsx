import { whatsappUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppCta({
  label = "Chat on WhatsApp",
  message,
  className = "",
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  const href = whatsappUrl(message);
  if (!href) return null;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-whatsapp ${className}`}>
      <WhatsAppIcon />
      {label}
    </a>
  );
}
