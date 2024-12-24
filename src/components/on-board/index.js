'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import CommonForm from "../common-form";
import { initialCandidateOnboardFormData, initialRecruiterOnboardFormData } from "../../utils";
import { recruiterOnboardFormControls } from "../../utils";
import { candidateOnboardFormControls } from "../../utils";
import { useUser } from "@clerk/nextjs";
import { createProfile } from "@/actions";

function OnBoard() {

    const [currentTab, setCurrentTab] = useState("candidate");
    const [recruiterFormData, setRecruiterFormData] = useState(initialRecruiterOnboardFormData);
    const [candidateFormData, setCandidateFormData] = useState(initialCandidateOnboardFormData);

    const isValid =
        currentTab === "candidate"
            ? Object.values(candidateFormData).every((item) => item !== null && item !== "")
            : Object.values(recruiterFormData).every((item) => item !== null && item !== "");

    function isBtnDisabled() {
        return !isValid;
    }

    const currentAuthUser = useUser();
    const {user} = currentAuthUser;

    function handleTabChange(value) {
        setCurrentTab(value);
    }
    
    async function createProfileAction() {
        const data = {
            recrutierInfo : {
                name: recruiterFormData.name,
                companyName: recruiterFormData.companyName,
                companyRole: recruiterFormData.companyRole
            },
            role: 'recruiter',
            isPremiumUser: false,
            userID: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
        };
        await createProfile(data, "/onboard");
    }

    return (
        <div className="p-10 ">
            <Tabs value={currentTab} onValueChange={handleTabChange}>
                <div className="m-12">
                    <div className="flex items-baseline justify-between border-b pb-6 pt-6">
                        <h2 className="text-3xl font-bold text-slate-200 tracking-tight">Welcome to OnBoarding</h2>
                        <TabsList>
                            <TabsTrigger value="candidate">Candidate</TabsTrigger>
                            <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <TabsContent value="candidate" className="px-16">
                    <CommonForm
                        isBtnDisabled={isBtnDisabled()}
                        formControls={candidateOnboardFormControls}
                        buttonText={'Onboard as Candidate'}
                        formData={candidateFormData}
                        setFormData={setCandidateFormData}
                    />
                </TabsContent>
                <TabsContent value="recruiter" className="px-16">
                    <CommonForm
                        isBtnDisabled={isBtnDisabled()}
                        formControls={recruiterOnboardFormControls}
                        buttonText={'Onboard as Recruiter'}
                        formData={recruiterFormData}
                        setFormData={setRecruiterFormData}
                        action={createProfileAction}
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default OnBoard;