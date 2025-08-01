import Head from 'next/head';
import Header from '../components/Header'; // ← これを追加！
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>スプラマップツール</title>
        <meta name="description" content="スプラトゥーン向けの便利ツール紹介サイト" />
        <meta name="robots" content="index, follow" />
  <meta property="og:title" content="スプラマップツール" />
  <meta property="og:description" content="スプラトゥーン3のマップ分析や勝率記録ができる便利ツールです。" />
  <meta property="og:url" content="https://map-mark-ui-qs57.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/splatoon-stats.png" />
      </Head>


      <main className="max-w-3xl mx-auto px-4 py-8 space-y-12">
        {/* Heroセクション */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-sky-700 text-outline">
            ふうたろうのスプラの世界へようこそ！
          </h1>
          <p>スプラトゥーン3の攻略や分析に役立つツールを公開中。</p>
        </section>

        {/* 動画セクション */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-sky-600">🎥 最新の実況動画</h2>
          <div className="mx-auto px-4">
            <div
              className="relative"
              style={{ width: '100%', maxWidth: '448px', aspectRatio: '16 / 9', margin: '0 auto' }}
            >
              <iframe
                src="https://www.youtube.com/embed/gxEbVB3o5ME"
                style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="実況動画"
              ></iframe>
            </div>
          </div>
        </section>

        {/* アプリ紹介セクション */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-sky-600">🛠 アプリ紹介</h2>
          <p>
    ステージごとのキル・デス・注意マークをつけられるマップ分析アプリなどを公開中です。
    詳しくは
    <Link href="/app" legacyBehavior>
      <a className="text-blue-400 underline hover:text-yellow-300 mx-1">アプリ紹介</a>
    </Link>
    ページをご覧ください。
  </p>
        </section>

        {/* ブログリンクセクション */}
        <section>
    <h2 className="text-3xl font-bold text-splaPink mb-4">📘 スプラトゥーン攻略ブログ</h2>
    <p className="mb-4">
      スプラの戦術・索敵・立ち回りに関する解説記事を掲載予定です。
    </p>

    <div className="space-x-4">
      <a href="/blog" className="text-blue-500 underline">ブログ一覧はこちら</a>

      <a href="/blog">
        <button className="bg-splaYellow text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-300">
          投稿を読む
        </button>
      </a>
    </div>
  </section>

      </main>
    </>
  );
}
