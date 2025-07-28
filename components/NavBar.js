import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold hover:text-indigo-300">
          ふうたろうのスプラサイト
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-indigo-300">
            ホーム
          </Link>
          <Link href="/blog" className="hover:text-indigo-300">
            ブログ
          </Link>
          <Link href="/app" className="hover:text-indigo-300">
            アプリ
          </Link>
        </div>
      </div>
    </nav>
  );
}
