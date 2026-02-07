import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/locale";
import { locales, type Locale } from "@/types";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: Omit<Props, "children">): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const baseUrl = "https://example.com";
  const title = dictionary.metadata.title;
  const description = dictionary.metadata.description;
  const url = `${baseUrl}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        es: `${baseUrl}/es`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: dictionary.metadata.siteName,
      locale,
      type: "profile",
      images: [
        {
          url: `${baseUrl}/images/profile-placeholder.jpg`,
          width: 1200,
          height: 630,
          alt: `${dictionary.hero.firstName} ${dictionary.hero.lastName}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/profile-placeholder.jpg`]
    }
  };
}

export default function LocaleLayout({ children, params }: Props) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <>{children}</>;
}
