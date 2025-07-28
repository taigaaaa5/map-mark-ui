import Head from 'next/head';
import Header from '../../components/Header';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>ブログ一覧 - スプラマップツール</title>
      </Head>

      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-3xl font-bold text-splaPink mb-4">📘 ブログ一覧</h1>
        <p>スプラトゥーンに関する攻略記事を掲載予定です！</p>

        {/* ここにブログ記事リストなど追加 */}
        <div className="space-y-4">
          <article className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold text-sky-600">【索敵術】初心者でもわかる！索敵の基本</h2>
            <p className="text-sm text-gray-600">2025年7月28日</p>
            <p>この記事では索敵の基本テクニックを紹介します。</p>
          </article>

          {/* 他の記事もここに追加 */}
        </div>
      </main>
    </>
  );
}
