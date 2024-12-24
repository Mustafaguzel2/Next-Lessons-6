'use server';
import { revalidatePath } from 'next/cache';
import connectToDB from '@/database';
import Profile from '@/models/profile';


export async function createProfile(formData, pathToRevalidate) {
    await connectToDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
}

export async function fetchProfile(id) {
    await connectToDB();
    const result = await Profile.findOne({ userID: id });
    return JSON.parse(JSON.stringify(result));
}