'use client';

import { useState } from 'react';

export default function Button() {
  const [isSpun, setIsSpun] = useState(false);

  return (
    <button
      onClick={() => {
        setIsSpun((spun) => !spun);
      }}
      className={`
      ${isSpun ? 'rotate-180' : ''}
      transition-transform
      rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      `}
    >
      Spin me!
    </button>
  );
}
