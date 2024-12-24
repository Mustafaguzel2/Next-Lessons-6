
import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userID: String,
    role: String,
    email: String,
    isPremiumUser: Boolean,
    membershipType: String,
    memberShipStartDate: String,
    memberShipEndDate: String,
    recrutierInfo : {
        name: String,
        companyName: String,
        companyRole: String
    },
    candidateInfo : {
        resume: String,
        name: String,
        currentCompany: String,
        currentJobLocation: String,
        preferedJobLocation: String,
        currentSalary: String,
        noticePeriod: String,
        skills: String,
        previousCompanies: String,
        totalExperience: String,
        collage: String,
        collageLocation: String,
        graduateYear: String,
        linkendinProfile: String,
        githubProfile: String,
    }
})

const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
export default Profile;