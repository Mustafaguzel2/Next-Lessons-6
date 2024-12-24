'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import CommonForm from "../common-form";
import { postNewJobFormControls, initialPostNewJobFormData } from "@/utils";
function PostNewJob({profileInfo}) {

    const [showJobDialog, setShowJobDialog] = useState(false);
    const [jobFormData, setJobFormData] = useState({
        ...initialPostNewJobFormData,
        companyName: profileInfo?.recrutierInfo.companyName,
    });

    return (
        <div>
            <Button onClick={() => setShowJobDialog(true)}>
                Post New Job
            </Button>
            <Dialog open={showJobDialog} onOpenChange={() => setShowJobDialog(false)}>
                <DialogContent className="sm:max-w-[425px] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Post New Job</DialogTitle>
                        <div className="grid gap-4 py-4">
                            <CommonForm
                                formData={jobFormData}
                                setFormData={setJobFormData}
                                formControls={postNewJobFormControls}
                                buttonText="Post Job"
                            />
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PostNewJob;