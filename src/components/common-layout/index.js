import Header from "@/components/header";
import { currentUser } from "@clerk/nextjs/server";
import { fetchProfile } from "@/actions";
async function CommonLayout({ children }) {
    const user = await currentUser();
    const profileInfo = await fetchProfile(user?.id);
    return (
        <div className="min-h-screen min-w-screen">
            {/* Header */}
            <Header profileInfo={profileInfo} user={JSON.parse(JSON.stringify(user))}/>
            {/* Header */}
            {/* Main */}
            <main className="">{children}</main>
            {/* Main */}
            {/* Footer */}
            </div>
    );
}   

export default CommonLayout;