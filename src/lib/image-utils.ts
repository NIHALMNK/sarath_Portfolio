/**
 * Normalizes a founder image path:
 * - Removes accidental "public/" prefixes
 * - Ensures it starts with "/"
 * - Warns in development if the path is missing/empty
 */
export function normalizeImagePath(path: string | undefined, type: "profile" | "cover", name?: string): string {
  if (!path) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Missing founder ${type} image for: ${name || "unknown founder"}`);
    }
    return "";
  }

  let normalized = path.trim();

  // Remove leading/trailing slashes for processing
  // e.g. "public/founders/muhsin.jpeg" -> "founders/muhsin.jpeg"
  if (normalized.startsWith("public/")) {
    normalized = normalized.slice(7);
  } else if (normalized.startsWith("/public/")) {
    normalized = normalized.slice(8);
  }

  // Ensure it starts with "/"
  if (!normalized.startsWith("/")) {
    normalized = "/" + normalized;
  }

  return normalized;
}

export function getFounderImage(path: string | undefined, name: string): string {
  const normalized = normalizeImagePath(path, "profile", name);
  if (!normalized) {
    // Return Dicebear Initials SVG as default fallback URL
    return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=d4af37&textColor=000000`;
  }
  return normalized;
}

export function getFounderCover(path: string | undefined, name: string): string {
  return normalizeImagePath(path, "cover", name);
}
