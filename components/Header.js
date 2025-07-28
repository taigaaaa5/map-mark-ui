import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black bg-opacity-80 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* ロゴ + ホーム */}
      <Link href="/" className="flex items-center space-x-3 group">
        <Image
          src="/images/logo-spla.png"
          alt="サイトロゴ"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-splaPink group-hover:text-white transition-colors">
          ホーム
        </span>
      </Link>

      {/* ナビゲーションリンク */}
      <nav className="space-x-6 text-base" aria-label="メインナビゲーション">
        <Link
          href="/app"
          className="hover:underline hover:text-splaYellow transition-colors"
        >
          アプリ紹介
        </Link>
        <Link
          href="/blog"
          className="hover:underline hover:text-splaYellow transition-colors"
        >
          ブログ
        </Link>
        <a
          href="https://twitter.com/kiraaaa555"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-splaYellow transition-colors"
        >
          Ｘ（旧Twitter）
        </a>
      </nav>
    </header>
  );
}
