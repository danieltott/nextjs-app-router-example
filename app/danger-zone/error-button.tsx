'use client';
import { useState } from 'react';

export default function ErrorButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error('This is why the call it the Danger Zone.');
  }

  return (
    <button
      onClick={() => {
        setClicked(true);
      }}
      type="button"
      className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      Throw an error!
    </button>
  );
}
