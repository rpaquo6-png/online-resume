import { en } from "@/i18n/dictionaries/en";
import { es } from "@/i18n/dictionaries/es";
import { fr } from "@/i18n/dictionaries/fr";
import type { Locale, TranslationDictionary } from "@/types";

const dictionaries: Record<Locale, TranslationDictionary> = {
  en,
  fr,
  es
};

export function getDictionary(locale: Locale): TranslationDictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
