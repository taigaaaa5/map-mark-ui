export default function Post({ content }) {
  return (
    <>
      <Head>
        <title>ブログ記事</title>
      </Head>

      <Header />

      <main className="max-w-3xl mx-auto px-4 py-8 prose prose-invert">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}
