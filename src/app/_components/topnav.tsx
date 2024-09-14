import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between bg-gradient-to-r from-[#2e026d] to-[#15162c] p-4 text-white">
      <div className="text-[hsl(280,100%,70%)]sm:text-[5rem] text-5xl font-extrabold tracking-tight">
        Wonderstruck Creationz
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
