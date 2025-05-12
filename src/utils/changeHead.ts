import { Metadata, Viewport } from "next";

export type Metatags = Omit<Metadata, "viewport"> & {
  path?: string;
};

export const changeHead = (header: Metatags): Metadata => {
  return {
    ...header,
    openGraph: {
      type: "website",
      countryName: "Brazil",
      images: "/assets/logo.svg",
      title: "Scala",
      url: "/assets/logo.svg",
      siteName: "Samuel - Portfólio",
    },
    other: {
      "og:image": "/assets/logo.svg",
      icon: "/assets/logo.svg",
    },
  };
};

export const viewportPage: Viewport = {
  initialScale: 1,
  width: "width=device-width",
  maximumScale: 1,
  minimumScale: 1,
};
