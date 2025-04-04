'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        padding: '0.4rem 0.8rem',
        fontSize: '1rem',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      Back
    </button>
  );
}
