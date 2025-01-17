import "./globals.css";
import { Suspense } from "react";
import CommonLayout from "@/components/common-layout";
import Loading from "./loading";
import { ClerkProvider } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <body>
        <ClerkProvider afterSignOutUrl="/">
          <SignedOut onSignedOut={() =>  redirect('/')}>  
          </SignedOut>
          <Suspense fallback={<Loading />}>
            <CommonLayout children={children} />
          </Suspense>
          </ClerkProvider>
        </body>
      </html>
    
  );
}
