
import JobListing from "@/components/job-listing";
import { currentUser } from "@clerk/nextjs/server";
import { fetchProfile } from "@/actions";
async function JobsPage() {
    const user = await currentUser();
    const profileInfo = await fetchProfile(user?.id);
    console.log(profileInfo);
    console.log(user);
    return(
        <JobListing
        user={JSON.parse(JSON.stringify(user))}
        profileInfo={profileInfo}
        />
    );
}

export default JobsPage;