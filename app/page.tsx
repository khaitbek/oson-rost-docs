import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        Assalomu alaykum. O'zbek tilidagi soddalashtirilgan Rust documentationga xush kelibsiz!
      </h1>
      <p className="text-muted-foreground">
        Quyidagi link orqali, documentationni o'qishni boshlashingiz mumkin{' '}
        <Link href="/docs" className="text-foreground font-semibold underline">
          /docs
        </Link>{' '}
      </p>
    </main>
  );
}
