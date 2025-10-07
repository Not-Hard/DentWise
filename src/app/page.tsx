import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* If user is not signed in, show sign up button */}
      <SignedOut>
        <SignUpButton>Sign up</SignUpButton>
      </SignedOut>
      {/* If user is signed in, show their sign out button */}
      <SignedIn>
        <SignOutButton>Sign out</SignOutButton>
      </SignedIn>
    </div>
  );
}
