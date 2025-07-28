// pages/app/index.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function AppPage() {
  return (
    <>
      <Head>
        <title>アプリ紹介 | スプラマップツール</title>
        <meta name="description" content="スプラトゥーン向けの便利ツール紹介ページです" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-10 text-white">
        <h1 className="text-3xl font-bold mb-6">アプリ紹介</h1>

        {/* マップマークアプリ */}
        <section className="mb-10">
          <div className="flex items-center">
            <img src="/map-mark-ui.png" alt="Map Mark App QR" className="w-32 h-32 mr-4 rounded shadow" />
            <div>
              <h2 className="text-xl font-semibold mb-1">マップマークアプリ</h2>
              <p className="text-sm leading-relaxed">
                スプラトゥーン3のステージに「キル・デス・注意」マークを自由に配置できる分析アプリです。<br />
                <span className="text-yellow-400 font-bold">※ Android専用アプリです（iPhoneでは動作しません）</span><br />
                GitHubの
                <a
                  href="https://github.com/taigaaaa5/map-mark-ui/releases"
                  target="_blank"
                  className="text-blue-400 underline mx-1"
                >
                  Releases
                </a>
                の「Assets」から <strong>map-mark-ui.apk</strong> をクリックしてダウンロードしてください。
              </p>
            </div>
          </div>
        </section>

        {/* 勝率カウントアプリ */}
        <section>
          <div className="flex items-center">
            <img src="/splatoon-stats.png" alt="Splatoon Stats QR" className="w-32 h-32 mr-4 rounded shadow" />
            <div>
              <h2 className="text-xl font-semibold mb-1">勝率カウントアプリ</h2>
              <p className="text-sm leading-relaxed">
                各ステージ・ルールごとの勝利数・敗北数を記録し、勝率表示・保存ができるアプリです。<br />
                <span className="text-yellow-400 font-bold">※ Android専用アプリです（iPhoneでは動作しません）</span><br />
                GitHubの
                <a
                  href="https://github.com/taigaaaa5/splatoon-stats/releases"
                  target="_blank"
                  className="text-blue-400 underline mx-1"
                >
                  Releases
                </a>
                の「Assets」から <strong>splatoon-stats.apk</strong> をクリックしてダウンロードしてください。
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
