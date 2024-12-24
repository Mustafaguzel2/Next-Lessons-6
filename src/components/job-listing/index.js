'use client';

import PostNewJob from "../post-new-job";

function JobListing({user, profileInfo}) {
    console.log(user, profileInfo);
    return (
        <div className="text-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
                    <h1 className="text-4xl font-bold tracking-tight">
                        {
                            profileInfo?.role === 'candidate' ?
                            "Explore All Jobs" : "Jobs Dashboard"
                        }
                    </h1>
                    <div>
                        {
                            profileInfo?.role === 'candidate' ?
                            <p>Filter</p> : <PostNewJob profileInfo={profileInfo}/>
                        }
                    </div>
                </div>
                <div>Job Listing</div>
            </div>
        </div>
    )
}

export default JobListing;