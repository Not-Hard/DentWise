import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";


async function AdminPage() {

    const user = await currentUser();

    // If no user is logged in, redirect to home
    if(!user) redirect('/');

    const adminEmail = process.env.ADMIN_EMAIL;

    const userEmail = user.emailAddresses[0]?.emailAddress;

    // If the logged in user is not the admin, redirect to dashboard
    if(userEmail !== adminEmail || !adminEmail) redirect('/dashboard');

    return <AdminDashboardClient />
}

export default AdminPage