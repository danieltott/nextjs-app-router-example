'use client';
import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container p-4 mx-auto">
          <header className="md:flex md:items-center md:justify-between mb-8">
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Something went wrong!
              </h1>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              {new Date().toLocaleTimeString()}
            </div>
          </header>

          <div className="p-8 bg-red-200 border border-red-600 text-red-700 font-semibold">
            Error: {error.message}
          </div>

          <footer className="mt-8 border-t border-t-sky-500 pt-8">
            <nav className="prose">
              <h3>Links!</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
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
                          <Link href="/awesome/mix/vol/1">Volume 1</Link>
                        </li>
                        <li>
                          <Link href="/awesome/mix/vol/2">Volume 2</Link>
                        </li>
                        <li>
                          <Link href="/awesome/mix/vol/2">Volume 2345</Link>
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
