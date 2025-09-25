import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Circle, Monitor, TrendingUp, Link2, Compass, Home, CheckCircle, DollarSign, Rocket, Handshake, Gem, Clock, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function LandingPage() {
    return (
        // <div className="min-h-screen bg-background border-l border-r  border-red p-16">
        <div>
            {/* Header */}
            <header className="mx-auto border-b border-border">
                <div className="max-w-[1024px] mx-auto border-l border-r border-border px-3 py-4 flex items-center justify-between">
                    {/* Left side - Profile */}
                    <div className="flex items-center space-x-3">
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

            <div className="max-w-[1024px] mx-auto border-l border-r  border-border">
                {/* Hero Section */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container mx-auto max-w-5xl px-6">
                        <div className="text-center space-y-10">
                            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium shadow-soft">
                                <Circle className="w-3 h-3 mr-2 fill-primary text-primary" />
                                Currently Available
                            </Badge>

                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
                                    I handle the tech
                                    <br />
                                    You handle the <span className="text-gradient-primary">growth</span>
                                </h1>

                                <p className="text-lead max-w-3xl mx-auto leading-relaxed">
                                    Goodbye to tech headaches and hire one developer to handle it all who understands your education/travel business
                                </p>
                            </div>

                            <div className="pt-8">
                                <Link href={"mailto:hello@anshupatel.in"}>
                                    <Button size="lg" className="btn-gradient text-lg px-10 py-6 rounded-2xl font-semibold">
                                        Get FREE from Headaches
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Subtle background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl -z-10"></div>
                </section>

                {/* Client Trust Section */}
                <section className="py-20 border-t border-border/50">
                    <div className="container mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <p className="text-sm text-muted-foreground font-medium">Trusted by startups and growing businesses</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                            <div className="w-28 h-14 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft">
                                <span className="text-xs text-muted-foreground font-medium">Client 1</span>
                            </div>
                            <div className="w-28 h-14 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft">
                                <span className="text-xs text-muted-foreground font-medium">Client 2</span>
                            </div>
                            <div className="w-28 h-14 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft">
                                <span className="text-xs text-muted-foreground font-medium">Client 3</span>
                            </div>
                            <div className="w-28 h-14 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft">
                                <span className="text-xs text-muted-foreground font-medium">Client 4</span>
                            </div>
                            <div className="w-28 h-14 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-soft">
                                <span className="text-xs text-muted-foreground font-medium">Client 5</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-32 border-t">
                    <div className="container mx-auto max-w-7xl px-6">
                        <div className="text-center mb-20">
                            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-soft">Projects</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                See how I helped businesses scale <br /> with <span className="text-gradient-primary">tech + SEO</span>
                            </h2>
                            <p className="text-lead max-w-2xl mx-auto">
                                Real results from real projects that drove growth and improved user experience
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {/* BacklinkCRM */}
                            <Card className="group border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft-lg">
                                            <Link2 className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    {/* Mockup overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-soft transform transition-transform group-hover:translate-y-0 translate-y-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="w-full h-2 bg-muted rounded"></div>
                                            <div className="w-3/4 h-2 bg-muted rounded"></div>
                                            <div className="w-1/2 h-2 bg-primary/20 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-bold text-foreground">BacklinkCRM</h3>
                                            <Badge variant="outline" className="text-xs">SaaS</Badge>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            A SaaS tool built for link-building agencies to manage backlinks, partners, and exchanges with ease.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <Badge variant="secondary" className="text-xs">React</Badge>
                                            <Badge variant="secondary" className="text-xs">Node.js</Badge>
                                            <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* CareerCompass */}
                            <Card className="group border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-soft-lg">
                                            <Compass className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-soft transform transition-transform group-hover:translate-y-0 translate-y-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="w-full h-2 bg-muted rounded"></div>
                                            <div className="w-4/5 h-2 bg-muted rounded"></div>
                                            <div className="w-2/3 h-2 bg-accent/20 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-bold text-foreground">CareerCompass</h3>
                                            <Badge variant="outline" className="text-xs">AI Tool</Badge>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            An AI-powered career quiz & recommendation system for students and job seekers.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <Badge variant="secondary" className="text-xs">Next.js</Badge>
                                            <Badge variant="secondary" className="text-xs">OpenAI</Badge>
                                            <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* RoofWalla */}
                            <Card className="group border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                <div className="aspect-[4/3] bg-gradient-to-br from-secondary/10 to-secondary/5 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-soft-lg">
                                            <Home className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-soft transform transition-transform group-hover:translate-y-0 translate-y-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="w-full h-2 bg-muted rounded"></div>
                                            <div className="w-5/6 h-2 bg-muted rounded"></div>
                                            <div className="w-3/5 h-2 bg-secondary/20 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-bold text-foreground">RoofWalla</h3>
                                            <Badge variant="outline" className="text-xs">WordPress</Badge>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            SEO-optimized WordPress site for a UK roofing company to generate more leads.
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <Badge variant="secondary" className="text-xs">WordPress</Badge>
                                            <Badge variant="secondary" className="text-xs">SEO</Badge>
                                            <Badge variant="secondary" className="text-xs">Custom Theme</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="text-center">
                            <Link href={"mailto:hello@anshupatel.in"}>
                                <Button size="lg" className="btn-gradient px-10 py-6 rounded-2xl font-semibold">
                                    Book your free review
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-32 bg-gradient-to-br from-muted/30 to-muted/10">
                    <div className="container mx-auto max-w-5xl px-6">
                        <div className="text-center mb-16">
                            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-soft">
                                Client Success Stories
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                What clients say about <br />
                                <span className="text-gradient-primary">working together</span>
                            </h2>
                        </div>

                        <Card className="border-0 shadow-soft-lg bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                            <CardContent className="p-12 md:p-16 text-center relative">
                                {/* Quote marks decoration */}
                                <div className="absolute top-8 left-8 text-6xl text-primary/20 font-serif">"</div>
                                <div className="absolute bottom-8 right-8 text-6xl text-primary/20 font-serif rotate-180">"</div>

                                {/* Profile Section */}
                                <div className="relative inline-block mb-12">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-soft-lg">
                                        <span className="text-3xl md:text-4xl">👨‍�</span>
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-soft">
                                        <CheckCircle className="w-4 h-4 text-primary-foreground" />
                                    </div>
                                </div>

                                {/* Testimonial Quote */}
                                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-12 font-medium max-w-4xl mx-auto">
                                    "Working with Anshu was a turning point for our business. From building a solid backend to optimizing SEO for growth, his work was <span className="text-gradient-primary font-semibold">reliable, fast, and impactful</span>. Highly recommended for any startup or agency that wants results."
                                </blockquote>

                                {/* Client Info */}
                                <div className="text-center mb-8">
                                    <div className="font-bold text-foreground text-xl mb-2">Anonymous Client</div>
                                    <div className="text-muted-foreground text-lg">Startup Founder</div>
                                    <div className="flex justify-center mt-3">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Client Avatars */}
                                <div className="flex justify-center items-center gap-4">
                                    <div className="text-sm text-muted-foreground mr-4">Join 50+ happy clients:</div>
                                    <div className="flex -space-x-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-3 border-background shadow-soft">
                                            <span className="text-sm text-white">👨</span>
                                        </div>
                                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center border-3 border-background shadow-soft">
                                            <span className="text-sm text-white">👩</span>
                                        </div>
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-3 border-background shadow-soft">
                                            <span className="text-sm text-white">�</span>
                                        </div>
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center border-3 border-background shadow-soft">
                                            <span className="text-sm text-white">�</span>
                                        </div>
                                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center border-3 border-background shadow-soft">
                                            <span className="text-xs text-muted-foreground font-semibold">+45</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Idea CTA */}
                <section className="py-32 border-t">
                    <div className="container mx-auto max-w-5xl px-6">
                        <div className="text-center space-y-10">
                            {/* Collaborate Badge */}
                            <Badge variant="outline" className="px-6 py-3 border-primary/30 text-primary shadow-soft">
                                <Handshake className="w-4 h-4 mr-2" />
                                Collaborate
                            </Badge>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                                    Have an idea?
                                </h2>
                                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                    Let's make it <span className="text-gradient-primary">fire!</span>
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-lead max-w-3xl mx-auto leading-relaxed">
                                Transform your idea with stellar design and user experience.
                                Ready to innovate?
                            </p>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <Link href={"mailto:hello@anshupatel.in"}>
                                    <Button size="lg" className="btn-gradient px-10 py-6 text-lg font-semibold rounded-2xl">
                                        Book your free review
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing / Offers Section */}
                <section className="py-32 border-t">
                    <div className="container mx-auto max-w-7xl px-6">

                        {/* Header */}
                        <div className="text-center mb-20">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <DollarSign className="w-6 h-6 text-primary" />
                                <span className="font-medium text-muted-foreground">Affordable solutions that scale with your business</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Start your project <span className="text-gradient-primary">here</span>
                            </h2>
                            <p className="text-lead max-w-3xl mx-auto">
                                Choose from flexible packages designed for startups and growing businesses. All prices include free consultation and scope review.
                            </p>
                        </div>

                        {/* Main Starter Sprint Package - Featured */}
                        <div className="flex justify-center mb-20">
                            <div className="w-full max-w-lg relative">
                                {/* Popular Badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-semibold shadow-soft-lg">
                                        ⭐ Most Popular
                                    </Badge>
                                </div>

                                <Card className="border-2 border-primary/20 shadow-soft-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl overflow-hidden relative">
                                    {/* Gradient border effect */}
                                    <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>

                                    <CardHeader className="text-center pb-8 bg-gradient-to-br from-muted/30 to-muted/10 relative">
                                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                                            <Badge variant="outline" className="border-primary/30 text-primary">2-4 weeks</Badge>
                                            <Badge variant="outline" className="border-primary/30 text-primary">Fixed scope</Badge>
                                            <Badge variant="outline" className="border-primary/30 text-primary">Fixed price after review</Badge>
                                        </div>

                                        <CardTitle className="text-3xl font-bold text-foreground mb-6">Starter Sprint</CardTitle>

                                        <div className="mb-6">
                                            <span className="text-sm font-medium text-muted-foreground">Great for: </span>
                                            <span className="text-sm text-foreground font-semibold">Build MVPs, SaaS dashboards, or marketing sites</span>
                                        </div>

                                        <div className="mb-8">
                                            <p className="text-sm text-muted-foreground mb-3">Typical investment*</p>
                                            <div className="text-4xl font-bold text-gradient-primary">$1,200 – $4,000</div>
                                        </div>

                                        <Link href={"mailto:hello@anshupatel.in"}>
                                            <Button className="w-full mb-6 btn-gradient py-4 text-lg font-semibold rounded-2xl">
                                                Book your free review
                                            </Button>
                                        </Link>

                                        <p className="text-xs text-center text-muted-foreground">
                                            Free consultation to define scope and finalize pricing
                                        </p>
                                    </CardHeader>

                                    <CardContent className="px-8 pb-8">
                                        {/* Features List */}
                                        <div className="space-y-6 text-sm mb-8">
                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-foreground text-base">Landing page or MVP build</div>
                                                    <div className="text-sm text-muted-foreground">Individual design proposal made for your requirements</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-foreground font-medium">SEO setup for growth</span>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-foreground font-medium">API integrations + Database</span>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-foreground font-medium">Clean UI with React/Next.js</span>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-foreground font-medium">Mobile-responsive design</div>
                                                    <div className="text-sm text-muted-foreground">If applicable to your project</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-foreground font-medium">2 rounds of revisions included</span>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center mt-0.5 shadow-soft">
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-foreground font-medium">1-week post-launch support</span>
                                            </div>
                                        </div>

                                        <div className="border-t pt-8">
                                            <h4 className="font-bold text-foreground mb-6">Plus, included:</h4>
                                            <div className="space-y-4 text-sm text-muted-foreground">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                        <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                    </div>
                                                    <span>Modern frameworks (React, Next.js, Node.js)</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                        <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                    </div>
                                                    <span>Database setup (MongoDB, PostgreSQL, or Firebase)</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                                                        <CheckCircle className="w-3 h-3 text-muted-foreground" />
                                                    </div>
                                                    <span>Deployment & hosting configuration</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
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
                        <div className="w-full max-w-6xl mx-auto mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Smaller Needs?</h3>
                                <p className="text-muted-foreground text-lg">Quick solutions for specific requirements. Perfect for testing ideas or enhancing existing projects.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Simple Landing Page */}
                                <Card className="border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                    <CardHeader className="pb-6">
                                        <CardTitle className="text-xl font-bold text-foreground mb-3">Simple Landing Page</CardTitle>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Great for: product launches • lead generation • marketing campaigns
                                        </p>
                                        <div className="text-2xl font-bold text-gradient-primary">$399 – $999</div>
                                    </CardHeader>
                                    <CardContent>
                                        <Link href={"mailto:hello@anshupatel.in"}>
                                            <Button className="w-full mb-6 btn-gradient py-3 rounded-2xl font-semibold">
                                                Book your free review
                                            </Button>
                                        </Link>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Single-page responsive design</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Contact forms & CTA optimization</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Basic SEO setup</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Fast loading & mobile-optimized</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* SEO Audit & Optimization */}
                                <Card className="border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                    <CardHeader className="pb-6">
                                        <CardTitle className="text-xl font-bold text-foreground mb-3">SEO Audit & Optimization</CardTitle>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Great for: existing websites • traffic boost • search ranking improvement
                                        </p>
                                        <div className="text-2xl font-bold text-gradient-primary">$299 – $799</div>
                                    </CardHeader>
                                    <CardContent>
                                        <Link href={"mailto:hello@anshupatel.in"}>
                                            <Button className="w-full mb-6 btn-gradient py-3 rounded-2xl font-semibold">
                                                Book your free review
                                            </Button>
                                        </Link>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Complete SEO audit report</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Keyword research & strategy</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Technical SEO fixes</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Content optimization recommendations</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Additional Services */}
                        <div className="w-full max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* WordPress Business Website */}
                                <Card className="border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                    <CardHeader className="pb-6">
                                        <CardTitle className="text-xl font-bold text-foreground mb-3">WordPress Business Website</CardTitle>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Great for: small businesses • agencies • content-heavy sites
                                        </p>
                                        <div className="text-2xl font-bold text-gradient-primary">$699 – $1,500</div>
                                    </CardHeader>
                                    <CardContent>
                                        <Link href={"mailto:hello@anshupatel.in"}>
                                            <Button className="w-full mb-6 btn-gradient py-3 rounded-2xl font-semibold">
                                                Book your free review
                                            </Button>
                                        </Link>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Custom WordPress theme development</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Content management system setup</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">SEO-optimized structure</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Security & backup configuration</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Custom Web App Module */}
                                <Card className="border-0 shadow-soft card-hover bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                                    <CardHeader className="pb-6">
                                        <CardTitle className="text-xl font-bold text-foreground mb-3">Custom Web App Module</CardTitle>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Great for: adding features • integrations • custom functionality
                                        </p>
                                        <div className="text-2xl font-bold text-gradient-primary">$500 – $2,000</div>
                                    </CardHeader>
                                    <CardContent>
                                        <Link href={"mailto:hello@anshupatel.in"}>
                                            <Button className="w-full mb-6 btn-gradient py-3 rounded-2xl font-semibold">
                                                Book your free review
                                            </Button>
                                        </Link>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Custom feature development</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Third-party API integrations</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                                <span className="text-foreground">Database design & optimization</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
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
                <section className="py-32 border-t bg-gradient-to-br from-muted/30 to-muted/10">
                    <div className="container mx-auto max-w-5xl px-6">

                        {/* Header */}
                        <div className="text-center mb-20">
                            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-soft">
                                Frequently Asked Questions
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Your <span className="text-destructive">?</span> questions <br />
                                answered <span className="text-gradient-primary">✓</span>
                            </h2>
                            <p className="text-lead max-w-2xl mx-auto">
                                Common questions about working together and project details
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <Card className="border-0 shadow-soft-lg bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-12">
                            <CardContent className="p-8 md:p-12">
                                <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-6">
                                    <AccordionItem value="item-1" className="border-0 bg-muted/30 rounded-2xl px-6 py-2">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                            How do I know if my idea is possible?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                            I'll review your idea for free and suggest the right tech stack + roadmap. Whether it's a simple landing page, app design, UX research, social media assets, pitch decks, interactive prototypes, quick interface demos, micro-interactions (Lottie/Rive), and more. It's always a good idea to double-check with me if you're unsure. If it's not related to logo or branding, there's a good chance I can help!
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2" className="border-0 bg-muted/30 rounded-2xl px-6 py-2">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                            Do you also handle SEO/marketing?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                            Yes! I handle both technical SEO (site speed, structure, meta tags) and basic content optimization. For education/travel businesses, I understand what search terms your customers use and how to rank for them. However, for advanced marketing campaigns or paid ads, I can recommend specialists while I focus on the technical foundation.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3" className="border-0 bg-muted/30 rounded-2xl px-6 py-2">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                            What's the timeline?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                            Most projects are completed within 2-4 weeks depending on scope. Simple landing pages take 1-2 weeks, while full web apps or SaaS platforms take 3-4 weeks. I provide weekly updates and you can track progress throughout. Rush projects can be accommodated with a 25% urgency fee.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4" className="border-0 bg-muted/30 rounded-2xl px-6 py-2">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                            How will our collaboration happen?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                            We start with a free consultation call to understand your needs. Then I provide a detailed proposal with timeline and pricing. During development, you'll get weekly progress updates via email/Slack, with live previews to review. I'm available for quick questions throughout the project.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5" className="border-0 bg-muted/30 rounded-2xl px-6 py-2">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                            How will I know the final investment size?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                            After our free consultation, I'll provide a detailed fixed-price quote with no hidden fees. The price includes all development, revisions, and 1-week post-launch support. You'll know the exact cost upfront before any work begins. Payment is typically 50% upfront, 50% on completion.
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-6" className="border-0 bg-muted/30 rounded-2xl px-6 py-2">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                                            How can I pay?
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                            I accept bank transfers, PayPal, and Stripe (credit/debit cards). For international clients, PayPal and Stripe work best. Payment is split into milestones: 50% to start the project and 50% upon completion. For larger projects over $3000, we can arrange additional milestone payments.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>

                        {/* Bottom CTA */}
                        <div className="text-center">
                            <p className="text-muted-foreground mb-8 text-lg">
                                Still have questions? Let's talk about your project!
                            </p>
                            <Link href={"mailto:hello@anshupatel.in"}>
                                <Button size="lg" className="btn-gradient px-10 py-6 text-lg font-semibold rounded-2xl">
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
        </div >
    )
}