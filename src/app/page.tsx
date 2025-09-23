import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Circle, Monitor, TrendingUp, Link2, Compass, Home, CheckCircle, DollarSign, Rocket, Handshake, Gem, Clock, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react"
import Header from "@/components/Header"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-center space-y-8">
                        <Badge variant="secondary" className="mb-2">
                            <Circle className="w-3 h-3 mr-2 fill-primary text-primary" />
                            Currently Available
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                            I handle the tech
                            <br />
                            You handle the <span className="text-primary">growth</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Goodbye to tech headaches and hire one developer to handle it all who understands your education/travel business
                        </p>

                        <div className="pt-4">
                            <Link href={"mailto:hello@anshupatel.in"}>
                                <Button size="lg" className="text-lg px-8 py-6">
                                    Get FREE from Headaches
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Trust Section */}
            <section className="py-16 border-t">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-center mb-12">
                        <p className="text-sm text-muted-foreground font-medium">Trusted by startups and growing businesses</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
                        <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Client 1</span>
                        </div>
                        <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Client 2</span>
                        </div>
                        <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Client 3</span>
                        </div>
                        <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Client 4</span>
                        </div>
                        <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Client 5</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-24 border-t">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Projects</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            See how I helped businesses scale <br /> with tech + SEO
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* BacklinkCRM */}
                        <Card className="border hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                                <Link2 className="w-16 h-16 text-primary" />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-3">BacklinkCRM</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    A SaaS tool built for link-building agencies to manage backlinks, partners, and exchanges with ease.
                                </p>
                            </CardContent>
                        </Card>

                        {/* CareerCompass */}
                        <Card className="border hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                                <Compass className="w-16 h-16 text-primary" />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-3">CareerCompass</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    An AI-powered career quiz & recommendation system for students and job seekers.
                                </p>
                            </CardContent>
                        </Card>

                        {/* RoofWalla */}
                        <Card className="border hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                                <Home className="w-16 h-16 text-primary" />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-3">RoofWalla</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    SEO-optimized WordPress site for a UK roofing company to generate more leads.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center">
                        <Link href={"mailto:hello@anshupatel.in"}>
                            <Button size="lg" className="px-8 py-3">
                                Book your free review
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto max-w-4xl px-6">
                    <Card className="border-0 shadow-lg">
                        <CardContent className="p-8 md:p-12 text-center">
                            {/* Profile Image with Badge */}
                            <div className="relative inline-block mb-8">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-2xl md:text-3xl">👤</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                                </div>
                            </div>

                            {/* Testimonial Quote */}
                            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                                "Working with Anshu was a turning point for our business. From building a solid backend to optimizing SEO for growth, his work was reliable, fast, and impactful. Highly recommended for any startup or agency that wants results."
                            </blockquote>

                            {/* Client Info */}
                            <div className="text-center">
                                <div className="font-bold text-foreground text-lg mb-1">Anonymous Client</div>
                                <div className="text-muted-foreground">Startup Founder</div>
                            </div>

                            {/* Additional Client Avatars */}
                            <div className="flex justify-center items-center mt-8 space-x-3">
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm">👨</span>
                                </div>
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm">👩</span>
                                </div>
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm">👨</span>
                                </div>
                                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                    <span className="text-sm">👩</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Idea CTA */}
            <section className="py-24 border-t">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-center space-y-8">
                        {/* Collaborate Badge */}
                        <Badge variant="outline" className="px-6 py-2">
                            <Handshake className="w-4 h-4 mr-2" />
                            Collaborate
                        </Badge>

                        {/* Main Heading */}
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold text-foreground leading-tight">
                                Have an idea?
                            </h2>
                            <h2 className="text-4xl font-bold text-foreground leading-tight">
                                Let's make it fire!
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Transform your idea with stellar design and user experience.
                            Ready to innovate?
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link href={"mailto:hello@anshupatel.in"}>
                                <Button size="lg" className="px-8 py-6">
                                    Book your free review
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / Offers Section */}
            <section className="py-24 border-t">
                <div className="container mx-auto max-w-6xl px-6">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <DollarSign className="w-6 h-6 text-primary" />
                            <span className="font-medium text-muted-foreground">Affordable solutions that scale with your business</span>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">Start your project here</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose from flexible packages designed for startups and growing businesses. All prices include free consultation and scope review.
                        </p>
                    </div>

                    {/* Main Starter Sprint Package */}
                    <div className="flex justify-center mb-12">
                        <div className="w-full max-w-md">
                            <Card className="border shadow-lg rounded-2xl overflow-hidden">
                                <CardHeader className="text-center pb-6 bg-muted/30">
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        <Badge variant="outline">2-4 weeks</Badge>
                                        <Badge variant="outline">Fixed scope</Badge>
                                        <Badge variant="outline">Fixed price after review</Badge>
                                    </div>

                                    <CardTitle className="text-2xl font-bold text-foreground mb-4">Starter Sprint</CardTitle>

                                    <div className="mb-4">
                                        <span className="text-sm font-medium text-muted-foreground">Great for: </span>
                                        <span className="text-sm text-foreground">Build MVPs, SaaS dashboards, or marketing sites</span>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-sm text-muted-foreground mb-2">Typical investment*</p>
                                        <div className="text-3xl font-bold text-foreground">$1,200 – $4,000</div>
                                    </div>

                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>

                                    <p className="text-xs text-center text-muted-foreground">
                                        Free consultation to define scope and finalize pricing
                                    </p>
                                </CardHeader>

                                <CardContent className="px-6 pb-6">
                                    {/* Features List */}
                                    <div className="space-y-4 text-sm mb-6">
                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-foreground">Landing page or MVP build</div>
                                                <div className="text-xs text-muted-foreground">Individual design proposal made for your requirements</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-foreground">SEO setup for growth</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-foreground">API integrations + Database</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-foreground">Clean UI with React/Next.js</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-foreground">Mobile-responsive design</div>
                                                <div className="text-xs text-muted-foreground">If applicable to your project</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-foreground">2 rounds of revisions included</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-foreground">1-week post-launch support</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h4 className="font-semibold text-foreground mb-4">Plus, included:</h4>
                                        <div className="space-y-3 text-sm text-muted-foreground">
                                            <div className="flex items-start gap-3">
                                                <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                    <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                </div>
                                                <span>Modern frameworks (React, Next.js, Node.js)</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                    <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                </div>
                                                <span>Database setup (MongoDB, PostgreSQL, or Firebase)</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                    <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                </div>
                                                <span>Deployment & hosting configuration</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                    <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                </div>
                                                <span>Performance optimization & security</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Smaller Needs Section */}
                    <div className="w-full max-w-4xl mx-auto mb-12">
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-foreground mb-2">Smaller Needs?</h3>
                            <p className="text-muted-foreground">Quick solutions for specific requirements. Perfect for testing ideas or enhancing existing projects.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Simple Landing Page */}
                            <Card className="border">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-foreground">Simple Landing Page</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Great for: product launches • lead generation • marketing campaigns
                                    </p>
                                    <div className="text-xl font-bold text-foreground">$399 – $999</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Single-page responsive design</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Contact forms & CTA optimization</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Basic SEO setup</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Fast loading & mobile-optimized</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* SEO Audit & Optimization */}
                            <Card className="border">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-foreground">SEO Audit & Optimization</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Great for: existing websites • traffic boost • search ranking improvement
                                    </p>
                                    <div className="text-xl font-bold text-foreground">$299 – $799</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Complete SEO audit report</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Keyword research & strategy</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Technical SEO fixes</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Content optimization recommendations</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Additional Services */}
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* WordPress Business Website */}
                            <Card className="border">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-foreground">WordPress Business Website</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Great for: small businesses • agencies • content-heavy sites
                                    </p>
                                    <div className="text-xl font-bold text-foreground">$699 – $1,500</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Custom WordPress theme development</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Content management system setup</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">SEO-optimized structure</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Security & backup configuration</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Custom Web App Module */}
                            <Card className="border">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-foreground">Custom Web App Module</CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Great for: adding features • integrations • custom functionality
                                    </p>
                                    <div className="text-xl font-bold text-foreground">$500 – $2,000</div>
                                </CardHeader>
                                <CardContent>
                                    <Link href={"mailto:hello@anshupatel.in"}>
                                        <Button className="w-full mb-4">
                                            Book your free review
                                        </Button>
                                    </Link>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Custom feature development</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Third-party API integrations</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Database design & optimization</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-foreground">Testing & quality assurance</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 border-t">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Your <span className="text-destructive">?</span> questions <br />
                            answered <span className="text-primary">✓</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about working together and project details
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="w-full max-w-3xl mx-auto">
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
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-center space-y-8">
                        {/* Collaborate Badge */}
                        <Badge variant="outline">
                            <Handshake className="w-4 h-4 mr-2" />
                            Collaborate
                        </Badge>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                Get a free project review <br />
                                within 48 hours
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Fill out the form → I'll audit your idea/website/app and suggest improvements.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <Card className="shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-semibold text-foreground mb-6">
                                    Tell me about your project
                                </h3>

                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Project Type
                                        </label>
                                        <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                            <option value="">Select project type</option>
                                            <option value="landing-page">Landing Page</option>
                                            <option value="web-app">Web Application</option>
                                            <option value="mobile-app">Mobile App</option>
                                            <option value="seo-audit">SEO Audit</option>
                                            <option value="wordpress">WordPress Site</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full py-4"
                                    >
                                        Submit form
                                    </Button>
                                </form>

                                <p className="text-sm text-muted-foreground text-center mt-4">
                                    I'll get back to you within 48 hours with actionable insights
                                </p>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <div className="flex items-center justify-center gap-4">
                            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
                                <Twitter className="w-4 h-4 text-muted-foreground" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
                                <Linkedin className="w-4 h-4 text-muted-foreground" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
                                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="text-center pt-8 border-t">
                            <p className="text-sm text-muted-foreground">
                                © 2025 Anshu Patel. Built with passion for startups and growing businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}