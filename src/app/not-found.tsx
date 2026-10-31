'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вас буде перенаправлено на головну сторінку через кілька секунд...</p>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
