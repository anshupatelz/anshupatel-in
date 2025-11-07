import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {

    return (
        <header className=" mx-auto border-b-1 border-[#e0e1ea]">
            <div className="max-w-[1024px] border-x-1 border-[#e0e1ea] px-3 py-4 flex items-center justify-between mx-auto">
                {/* Left side - Profile */}
                <div className="flex items-center space-x-3">
                    {/* <Avatar className="h-12 w-12">
                        <AvatarImage
                            src="/api/placeholder/48/48"
                            alt="Anshu Patel"
                        />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                            AP
                        </AvatarFallback>
                    </Avatar> */}
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 text-lg">Anshu Patel</span>
                    </div>
                </div>

                <div>
                    {/* Right side - CTA Button */}
                    <Link href={"mailto:hello@anshupatel.in"}>
                        <Button variant={"default"} className="cursor-pointer">
                            Contact Me
                        </Button>
                    </Link>
                </div>

            </div>
        </header >
    )
}