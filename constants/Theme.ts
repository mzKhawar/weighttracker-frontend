// constants/Theme.ts

import { TextStyle } from "react-native";

const COLORS = {
  // 🔵 Brand / identity
  primary: "#5499C9", // App title, key headers, primary actions
  accent: "#1A4A8F", // Highlights, charts, progress indicators

  // 📝 Text
  textMain: "#F8F8F8", // Main text (H2, H3, body on dark background)
  textSecondary: "#A1A1AA", // Labels, secondary text, small UI copy

  // 🧱 Surfaces
  background: "#000100", // App background
  card: "#1C1F22", // Cards, panels, list items

  // ➖ Dividers / borders
  divider: "#2C2F33", // Separators, subtle lines

  // ✅ Status
  success: "#10B981", // Positive change, goal reached
  danger: "#EF4444", // Negative change, error states
};

export const Theme = {
  colors: COLORS,
  typography: {
    // 2. H2: Section headers like "Weight Progress", "Recent Entries"
    h2: {
      fontSize: 24, // Slightly smaller than H1
      fontWeight: "600" as TextStyle["fontWeight"],
      color: COLORS.textMain,
      lineHeight: 32,
      marginBottom: 8, // Built-in spacing for headers
    },

    // 4. H3: Card numbers like "160", "15.2"
    h3: {
      fontSize: 20, // Smaller than H2 but still prominent
      fontWeight: "700" as TextStyle["fontWeight"],
      color: COLORS.textMain,
      lineHeight: 28,
    },

    // 5. Label: Card labels like "Goal Weight", "Current Weight"
    label: {
      fontSize: 16,
      fontWeight: "500" as TextStyle["fontWeight"],
      color: "#F8F8F8",
      lineHeight: 20,
    },

    // 6. Body: List items like dates "Apr 24"
    body: {
      fontSize: 16,
      fontWeight: "400" as TextStyle["fontWeight"],
      color: COLORS.textSecondary,
      lineHeight: 22,
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
};
