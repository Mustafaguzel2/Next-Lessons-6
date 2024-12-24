'use client';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header({user, profileInfo}) {

    const menuItems = [
        {
            label: 'Home',
            path: '/',
            show: true
        },
        {
            label: 'Login',
            path: '/sign-in',
            show: !user 
        },
        {
            label: 'Register',
            path: '/sign-up',
            show: !user 
        },
        {
            label: 'Jobs',
            path: '/jobs',
            show: user
        },
        {
            label: 'Activity',
            path: '/activity',
            show: profileInfo?.role === 'candidate'
        },
        {
            label: 'Membership',
            path: '/membership',
            show: user
        },
        {
            label: 'Account',
            path: '/account',
            show: user
        }
    ]

    return (
        <div>
            <header className="flex h-16 w-screen shrink-0 items-center mb-3">
                <Sheet>
                    <SheetTitle className="hidden">S</SheetTitle>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden">
                            <AlignJustify />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" position="bottom" size="content" className="linear-gradient bg-gradient-to-b from-black to-red-200">
                        <Link className="mr-6 flex text-slate-200 " href={'/'}>
                            JOBSCO
                        </Link>
                        <div className="grid gap-4 py-6">
                            {
                                menuItems.map((item) => {
                                    return item.show && (
                                        <Link href={item.path} key={item.label}
                                            className="text-lg font-semibold text-slate-200 flex flex-col">
                                            {item.label}
                                        </Link>
                                    );
                                })
                                
                            }
                            
                        </div>
                        <UserButton  />
                    </SheetContent>
                </Sheet>
                <div className="w-full flex items-center justify-between  p-4">
                    <Link href={'/'} className="hidden lg:flex items-center text-slate-200">
                        JOBSCO
                    </Link>
                    <nav className="hidden lg:flex gap-8 text-slate-200 text-md ml-auto">
                        {
                            menuItems.map((item) => {
                                return item.show && (
                                    <Link href={item.path} key={item.label}
                                        className="text-lg flex px-5 mr-10">
                                        {item.label}
                                    </Link>
                                );
                            })
                        }
                        <UserButton />
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
