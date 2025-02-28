import {useTranslations} from 'next-intl';
import Link from 'next/link';
 
export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <Link href="/about">{t("welcome")}</Link>
    </div>
  );
}