import type { TranslationDictionary } from "@/types";

type Props = {
  dictionary: TranslationDictionary;
};

export function Footer({ dictionary }: Props) {
  return (
    <footer className="border-t py-8">
      <div className="section-shell text-sm text-foreground/70">
        <p>
          {new Date().getFullYear()} {dictionary.hero.firstName} {dictionary.hero.lastName}. {dictionary.footer.rights}
        </p>
      </div>
    </footer>
  );
}
