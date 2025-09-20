import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import { CalendarCheck } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className=" mx-auto border-b-1 border-[#e0e1ea]">
                <div className="max-w-[1024px] border-x-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">
                    <Badge variant="secondary" className="mb-4">Currently Available</Badge>

                    <h1 className="text-3xl md:text-5xl text-gray-900  text-center">
                        I handle the tech <br />
                        You handle the <span className="text-primary">business</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center pb-6">
                        Goodbye to tech headaches and hire one developer to handle it all who understands your education/travel business
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pb-6">
                        <CalendarCheck className="w-4 h-4" />
                        <span>Last Updated: September 14, 2025</span>
                    </div>

                    <div className="pt-4">
                        <Link href={"mailto:hello@anshupatel.in"}>
                            <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                                Get FREE from Headaches
                            </Button>
                        </Link>
                    </div>
                </div>
            </section >

        </div >
    )
}