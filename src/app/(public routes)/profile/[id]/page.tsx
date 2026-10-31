import { notFound } from 'next/navigation';

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user) {
    notFound(); //показує /profile/not-found.tsx
  }

  return <div>{user.name}</div>;
}
