'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useMemo } from 'react';

export default function BreadCrumbs() {
  const segments = useSelectedLayoutSegments();

  const crumbs = useMemo(() => {
    let curPath = '/';

    return [
      {
        name: 'Home',
        href: curPath,
        current: segments.length === 0,
      },
      ...segments
        .filter(
          (segment) => !segment.startsWith('(') && !segment.startsWith('[')
        )
        .map((segment, index) => {
          curPath += segment;

          return {
            name: segment,
            href: curPath,
            current: index === segments.length - 1,
          };
        }),
    ];
  }, [segments]);

  console.log(segments);

  return (
    <nav className="flex mb-8 justify-end" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {crumbs.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <Link
                href={page.href}
                className={`ml-4 text-sm font-medium ${
                  page.current
                    ? 'text-sky-700 hover:text-sky-800 drop-shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
