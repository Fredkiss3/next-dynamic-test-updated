'use client';

import { useRouter } from 'next/navigation';

export function ManualPush({ path }: { path: string }) {
  const router = useRouter();
  return <button onClick={() => router.push(path)}>Push to {path}</button>;
}
