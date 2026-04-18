import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { buildMetadata } from "@/lib/seo";
import { fraunces, geist, jetbrainsMono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    other: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${geist.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        {/* Speculative Rules API — prerender work pages on hover */}
        <script
          type="speculationrules"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: speculative rules require inline script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [{ where: { href_matches: "/work/*" }, eagerness: "moderate" }],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
