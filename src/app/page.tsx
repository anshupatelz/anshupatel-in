import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/Header"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="mx-auto">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-20 flex flex-col items-center justify-between mx-auto">
                    <Badge variant="secondary" className="mb-6">🟢 Currently Available</Badge>

                    <h1 className="text-4xl md:text-6xl text-gray-900 text-center font-bold leading-tight mb-6">
                        I handle the tech 💻 <br />
                        You handle the 📈 <span className="text-primary">growth</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-8">
                        Goodbye to tech headaches and hire one developer to handle it all who understands your education/travel business
                    </p>

                    <div className="pt-2">
                        <Link href={"mailto:hello@anshupatel.in"}>
                            <Button size="lg" className="px-10 py-4 text-lg font-semibold">
                                Get FREE from Headaches
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Client Logo Carousel */}
            <section className="mx-auto">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-12 mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-sm text-gray-500 font-medium">Trusted by startups and growing businesses</p>
                    </div>
                    <div className="flex items-center justify-center gap-12 opacity-60 overflow-hidden">
                        <div className="flex items-center gap-12 animate-pulse">
                            {/* Placeholder logos */}
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">Logo 1</span>
                            </div>
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">Logo 2</span>
                            </div>
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">Logo 3</span>
                            </div>
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">Logo 4</span>
                            </div>
                            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">Logo 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="mx-auto ">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="mb-4">Projects</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                            See how I helped businesses scale <br /> with tech + SEO.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16 w-full">
                        {/* BacklinkCRM */}
                        <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-white py-0">
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-lg flex items-center justify-center">
                                <div className="text-4xl">🔗</div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">BacklinkCRM</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A SaaS tool built for link-building agencies to manage backlinks, partners, and exchanges with ease.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CareerCompass */}
                        <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-white py-0">
                            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-t-lg flex items-center justify-center">
                                <div className="text-4xl">🧭</div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">CareerCompass</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    An AI-powered career quiz & recommendation system for students and job seekers.
                                </p>
                            </CardContent>
                        </Card>

                        {/* RoofWalla */}
                        <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-white py-0">
                            <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-t-lg flex items-center justify-center">
                                <div className="text-4xl">🏠</div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">RoofWalla</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    SEO-optimized WordPress site for a UK roofing company to generate more leads.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center">
                        <Link href={"mailto:hello@anshupatel.in"}>
                            <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                                Book your free review
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="mx-auto ">
                <div className="max-w-[1024px] border-x-1  border-b-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">

                    <div className="max-w-4xl mx-auto">
                        <div className="border-0 p-0 shadow-lg relative overflow-hidden">
                            <div className="p-8 md:p-12 text-center">
                                {/* Profile Image with Badge */}
                                <div className="relative inline-block mb-8">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-2xl md:text-3xl">👤</span>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                </div>

                                {/* Testimonial Quote */}
                                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                                    "Working with Anshu was a turning point for our business. From building a solid backend to optimizing SEO for growth, his work was reliable, fast, and impactful. Highly recommended for any startup or agency that wants results."
                                </blockquote>

                                {/* Client Info */}
                                <div className="text-center">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Anonymous Client</div>
                                    <div className="text-gray-500">Startup Founder</div>
                                </div>

                                {/* Additional Client Avatars */}
                                <div className="flex justify-center items-center mt-8 space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                                        <span className="text-sm">👨</span>
                                    </div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center">
                                        <span className="text-sm">👩</span>
                                    </div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center">
                                        <span className="text-sm">👨</span>
                                    </div>
                                    <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                                        <span className="text-sm">👩</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Idea CTA */}
            <section className="mx-auto">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">

                    {/* Collaborate Badge */}
                    <div className="mb-8">
                        <Badge variant="outline" className="px-6 py-2 text-sm font-medium border-gray-300 text-gray-600 bg-white shadow-sm">
                            🤝 Collaborate
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-4">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Have an <span className="inline-block">💡</span> idea?
                        </h2>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Let's make it <span className="inline-block">🚀</span> fire!
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
                        Transform your idea with stellar design and user experience. <br />
                        Ready to innovate?
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-center gap-4">
                        <Link href={"mailto:hello@anshupatel.in"}>
                            <Button size="lg">
                                Book your free review
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            {/* Pricing / Offers Section */}
            <section className="mx-auto">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="text-blue-500">💰</div>
                            <span className="font-medium text-gray-700">Affordable solutions that scale with your business.</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Start your project here.</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from flexible packages designed for startups and growing businesses. All prices include free consultation and scope review.
                        </p>
                    </div>

                    {/* Main Starter Sprint Package */}
                    <div className="w-full max-w-md mb-8">
                        <Card className="border border-gray-200 shadow-lg">
                            <CardHeader className="text-center pb-4">
                                <Badge variant="secondary" className="mb-2 mx-auto w-fit">🚀 Most Popular</Badge>
                                <CardTitle className="text-2xl font-bold text-gray-900">Starter Sprint</CardTitle>
                                <div className="flex justify-center gap-2 text-sm text-gray-500 mb-4">
                                    <span>2-4 weeks</span>
                                    <span>•</span>
                                    <span>Fixed price</span>
                                    <span>•</span>
                                    <span>Full-stack solution</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    Perfect for startups → Build MVPs, SaaS dashboards, or marketing sites.
                                </p>
                                <div className="text-3xl font-bold text-gray-900">$1,200 – $4,000</div>
                            </CardHeader>
                            <CardContent>
                                <Link href={"mailto:hello@anshupatel.in"}>
                                    <Button className="w-full mb-4">
                                        Book your free review
                                    </Button>
                                </Link>
                                <p className="text-xs text-center text-gray-500 mb-6">
                                    Free consultation to define scope and finalize pricing
                                </p>

                                {/* Features List */}
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">Landing page or MVP build</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">SEO setup for growth</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">API integrations + Database</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">Clean UI with React/Next.js</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">Mobile-responsive design</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">2 rounds of revisions included</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✅</span>
                                        <span className="text-gray-700">1-week post-launch support</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="font-medium text-gray-900 mb-2">Technical stack included:</p>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-0.5">⚡</span>
                                            <span>Modern frameworks (React, Next.js, Node.js)</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-0.5">⚡</span>
                                            <span>Database setup (MongoDB, PostgreSQL, or Firebase)</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-0.5">⚡</span>
                                            <span>Deployment & hosting configuration</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-0.5">⚡</span>
                                            <span>Performance optimization & security</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Smaller Needs Section */}
                    <div className="w-full max-w-4xl mb-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Smaller Needs?</h3>
                            <p className="text-gray-600">Quick solutions for specific requirements. Perfect for testing ideas or enhancing existing projects.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Simple Landing Page */}
                            <Card className="border border-gray-200">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">Simple Landing Page</CardTitle>
                                    <p className="text-sm text-gray-600">
                                        Great for: product launches • lead generation • marketing campaigns
                                    </p>
                                    <div className="text-xl font-bold text-gray-900">$399 – $999</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Single-page responsive design</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Contact forms & CTA optimization</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Basic SEO setup</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Fast loading & mobile-optimized</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* SEO Audit & Optimization */}
                            <Card className="border border-gray-200">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">SEO Audit & Optimization</CardTitle>
                                    <p className="text-sm text-gray-600">
                                        Great for: existing websites • traffic boost • search ranking improvement
                                    </p>
                                    <div className="text-xl font-bold text-gray-900">$299 – $799</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Complete SEO audit report</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Keyword research & strategy</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Technical SEO fixes</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Content optimization recommendations</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Additional Services */}
                    <div className="w-full max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* WordPress Business Website */}
                            <Card className="border border-gray-200">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">WordPress Business Website</CardTitle>
                                    <p className="text-sm text-gray-600">
                                        Great for: small businesses • agencies • content-heavy sites
                                    </p>
                                    <div className="text-xl font-bold text-gray-900">$699 – $1,500</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Custom WordPress theme development</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Content management system setup</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">SEO-optimized structure</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Security & backup configuration</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Custom Web App Module */}
                            <Card className="border border-gray-200">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">Custom Web App Module</CardTitle>
                                    <p className="text-sm text-gray-600">
                                        Great for: adding features • integrations • custom functionality
                                    </p>
                                    <div className="text-xl font-bold text-gray-900">$500 – $2,000</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Custom feature development</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Third-party API integrations</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Database design & optimization</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            <span className="text-gray-700">Testing & quality assurance</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQs Section */}
            <section className="mx-auto ">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your <span className="text-red-500">?</span> questions <br />
                            answered <span className="text-green-500">✓</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about working together and project details
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="w-full max-w-3xl">
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left">
                                    How do I know if my idea is possible?
                                </AccordionTrigger>
                                <AccordionContent>
                                    I'll review your idea for free and suggest the right tech stack + roadmap. Whether it's a simple landing page, app design, UX research, social media assets, pitch decks, interactive prototypes, quick interface demos, micro-interactions (Lottie/Rive), and more. It's always a good idea to double-check with me if you're unsure. If it's not related to logo or branding, there's a good chance I can help!
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left">
                                    Do you also handle SEO/marketing?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes! I handle both technical SEO (site speed, structure, meta tags) and basic content optimization. For education/travel businesses, I understand what search terms your customers use and how to rank for them. However, for advanced marketing campaigns or paid ads, I can recommend specialists while I focus on the technical foundation.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left">
                                    What's the timeline?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Most projects are completed within 2-4 weeks depending on scope. Simple landing pages take 1-2 weeks, while full web apps or SaaS platforms take 3-4 weeks. I provide weekly updates and you can track progress throughout. Rush projects can be accommodated with a 25% urgency fee.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left">
                                    How will our collaboration happen?
                                </AccordionTrigger>
                                <AccordionContent>
                                    We start with a free consultation call to understand your needs. Then I provide a detailed proposal with timeline and pricing. During development, you'll get weekly progress updates via email/Slack, with live previews to review. I'm available for quick questions throughout the project.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-left">
                                    How will I know the final investment size?
                                </AccordionTrigger>
                                <AccordionContent>
                                    After our free consultation, I'll provide a detailed fixed-price quote with no hidden fees. The price includes all development, revisions, and 1-week post-launch support. You'll know the exact cost upfront before any work begins. Payment is typically 50% upfront, 50% on completion.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-left">
                                    How can I pay?
                                </AccordionTrigger>
                                <AccordionContent>
                                    I accept bank transfers, PayPal, and Stripe (credit/debit cards). For international clients, PayPal and Stripe work best. Payment is split into milestones: 50% to start the project and 50% upon completion. For larger projects over $3000, we can arrange additional milestone payments.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12">
                        <p className="text-muted-foreground mb-6">
                            Still have questions? Let's talk about your project!
                        </p>
                        <Link href={"mailto:hello@anshupatel.in"}>
                            <Button size="lg" className="px-8 py-3">
                                Book your free review
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            {/* Final CTA Section */}
            <section className="mx-auto">
                <div className="max-w-[1024px] border-x-1 border-b-1 border-[#e0e1ea] px-3 py-16 flex flex-col items-center justify-between mx-auto">

                    {/* Collaborate Badge */}
                    <div className="mb-8">
                        <Badge variant="outline" className="px-6 py-2 text-sm font-medium border-gray-300 text-gray-600 bg-white shadow-sm">
                            🤝 Collaborate
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            Get a free <span className="text-blue-500">💎</span> project review <br />
                            within 48 hours <span className="text-red-500">⏰</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Fill out the form → I'll audit your idea/website/app and suggest improvements.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full max-w-lg">
                        <Card className="border-0 shadow-lg bg-white">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    Tell me about your project
                                </h3>

                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-blue-600 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-blue-600 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-blue-600 mb-2">
                                            Project Type
                                        </label>
                                        <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                            <option value="">Select project type</option>
                                            <option value="landing-page">Landing Page</option>
                                            <option value="web-app">Web Application</option>
                                            <option value="mobile-app">Mobile App</option>
                                            <option value="seo-audit">SEO Audit</option>
                                            <option value="wordpress">WordPress Site</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-blue-600 mb-2">
                                            Tell me about your project
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Describe your project, goals, and what you need help with..."
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full py-4"
                                    >
                                        Submit form
                                    </Button>
                                </form>

                                <p className="text-sm text-gray-500 text-center mt-4">
                                    I'll get back to you within 48 hours with actionable insights
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                            <span className="text-gray-600">𝕏</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                            <span className="text-gray-600">in</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                            <span className="text-gray-600">@</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                            <span className="text-gray-600">📧</span>
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            © 2025 Anshu Patel. Built with passion for startups and growing businesses.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}