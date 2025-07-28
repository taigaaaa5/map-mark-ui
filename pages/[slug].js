import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Slug page</h1>
      <p>パラメータ: {slug}</p>
    </div>
  );
}
