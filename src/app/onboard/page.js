import OnBoard from "@/components/on-board";
import { currentUser } from '@clerk/nextjs/server'
import { fetchProfile } from "@/actions";
import { redirect } from "next/navigation";

async function OnboardPage() {

  const user = await currentUser();

  const profileInfo = await fetchProfile(user?.id);

  if (profileInfo?._id) {

    if (profileInfo?.role === 'recruiter' && !profileInfo.isPremiumUser) {
      redirect("/membership");
    }
    else {
      redirect('/');
    }
  } 
  return (
    <OnBoard />
  );
}

export default OnboardPage;