import styles from './layout.module.css';
import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';
import { TbHelpOctagon } from 'react-icons/tb';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={styles.container}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div>
          <nav className={styles.navbar}>
            <div className={styles.navFlex}>
              <div className={styles.navItemLeft}>
                <Link aria-label="Home" href="/">
                  <GoHomeFill className={`${styles.iconWhite} ${styles.iconLarge}`} />
                </Link>
              </div>
              <div className={styles.navItemRight}>
                <Link aria-label="about" href="/about" className={styles.noTextDecoration}>
                  <div className={styles.iconWhite}>
                    <TbHelpOctagon className={styles.iconLarge} />
                  </div>
                </Link>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}