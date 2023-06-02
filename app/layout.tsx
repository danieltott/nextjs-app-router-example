import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import BreadCrumbs from './breadcrumbs';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Next.js App Router Example',
    default: 'Home Page',
  },
  description: `We're doing things!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container p-4 mx-auto">
          <header className="md:flex md:items-center md:justify-between mb-2">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Next.js App Router Example
              </h1>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              {new Date().toLocaleTimeString()}
            </div>
          </header>
          <BreadCrumbs />
          {children}
          <footer className="mt-8 border-t border-t-sky-500 pt-8">
            <nav className="prose">
              <h3>Links!</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/interactive">Interactive</Link>
                </li>
                <li>
                  <Link href="/awesome">Awesome</Link>
                  <ul>
                    <li>
                      <Link href="/awesome/sauce">Sauce</Link>
                    </li>
                    <li>
                      <Link href="/awesome/totally">Totally</Link>
                    </li>

                    <li>
                      <Link href="/awesome/mix">Mix</Link>
                      <ul>
                        <li>
                          <Link href="/awesome/mix/vol-1">Volume 1</Link>
                        </li>
                        <li>
                          <Link href="/awesome/mix/vol-2">Volume 2</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
