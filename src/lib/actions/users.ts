// it means this file is a server action
"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
    
    try {
        const user = await currentUser();  
        if (!user) return;
        
        const existingUser = await prisma.user.findUnique({
            where: { clerkId: user.id },
        });

        if(existingUser) return existingUser;

        const newDBUser = await prisma.user.create({
            data: {
                clerkId: user.id,
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.emailAddresses[0]?.emailAddress || "",
                phone: user.phoneNumbers[0]?.phoneNumber || "",
            },
        });

        return newDBUser;

    } catch (error) {
        console.error("Error syncing user:", error);
    }
}