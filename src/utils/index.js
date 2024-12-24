
export const recruiterOnboardFormControls = [
    {
        name: "name", 
        label: "Name",
        placeholder: "Enter Your Name",
        componentType: "input",
    },
    {
        name: "companyName",
        label: "Company Name",
        placeholder: "Enter Your Company Name",
        componentType: "input",
    },
    {
        name: "companyRole",
        label: "Company Role",
        placeholder: "Enter Your Role",
        componentType: "input",
    },
];


export const initialRecruiterOnboardFormData = {
    name : "",
    companyName : "",
    companyRole : "",
}

export const candidateOnboardFormControls = [
    {
        name: "resume",
        label: "Resume",
        placeholder: "Upload Your Resume",
        componentType: "file",
    },
    {
        name: "name", 
        label: "Name",
        placeholder: "Enter Your Name",
        componentType: "input",
    },
    {
        name: "currentCompany",
        label: "Current Company",
        placeholder: "Enter Your Current Company",
        componentType: "input",
    },
    {
        name: "currentJobLocation",
        label: "Current Job Location",
        placeholder: "Enter Your Current Job Location",
        componentType: "input",
    },
    {
        name: "currentSalary",
        label: "Current Salary",
        placeholder: "Enter Your Current Salary",
        componentType: "input",
    },
    {
        name: "noticePeriod",
        label: "Notice Period",
        placeholder: "Enter Your Notice Period",
        componentType: "input",
    },
    {
        name: "skills",
        label: "Skills",
        placeholder: "Enter Your Skills",
        componentType: "input",
    },
    {
        name: "previousCompanies",
        label: "Previous Companies",
        placeholder: "Enter Your Previous Companies",
        componentType: "input",
    },
    {
        name: "totalExperience",
        label: "Total Experience",
        placeholder: "Enter Your Total Experience",
        componentType: "input",
    },
    {
        name: "collageLocation",
        label: "Collage Location",
        placeholder: "Enter Your Collage Location",
        componentType: "input",
    },
    {
        name: "graduateYear",
        label: "Graduate Year",
        placeholder: "Enter Your Graduate Year",
        componentType: "input",
    },
    {
        name: "linkendinProfile",
        label: "Linkendin Profile",
        placeholder: "Enter Your Linkendin Profile",
        componentType: "input",
    },
    {
        name: "githubProfile",
        label: "Github Profile",
        placeholder: "Enter Your Github Profile",
        componentType: "input",
    }
];

export const initialCandidateOnboardFormData = {    
    resume : "",
    name : "",
    currentCompany : "",
    currentJobLocation : "",
    currentSalary : "",
    noticePeriod : "",
    skills : "",
    previousCompanies : "",
    totalExperience : "",
    collageLocation : "",
    graduateYear : "",
    linkendinProfile : "",
    githubProfile : "",
}

export const postNewJobFormControls = [
    {
        name: "companyName",
        label: "Company Name",
        placeholder: "Company Name",
        componentType: "input",
        disabled: true
    },
    {
        name: "title",
        label: "Title",
        placeholder: "Enter Title",
        componentType: "input",
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Enter Description",
        componentType: "input",
    },
    {
        name: "jobType",
        label: "Job Type",
        placeholder: "Enter Job Type",
        componentType: "input",
    },
    {
        name: "location",
        label: "Location",
        placeholder: "Enter Location",
        componentType: "input",
    },
    {
        name: "skills",
        label: "Skills",
        placeholder: "Enter Skills",
        componentType: "input",
    },
    {
        name: "experience",
        label: "Experience",
        placeholder: "Enter Experience",
        componentType: "input",
    },
    

]

export const initialPostNewJobFormData = {
    title : "",
    description : "",
    jobType : "",
    location : "",
    skills : "",
    experience : "",
    companyName : "",
    
}