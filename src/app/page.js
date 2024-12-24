import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { fetchProfile } from '@/actions';


async function Home() {

  const user = await currentUser();

  const userProfile = await fetchProfile(user?.id);
  
  if (user && !userProfile?._id) {
    redirect('/onboard');
  }

  return (<section className="p-10 text-slate-200">
    Main Content
  </section>);
}

export default Home;
