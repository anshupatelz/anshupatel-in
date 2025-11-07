import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative mx-auto border-b-1 border-[#e0e1ea] overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e1ea_1px,transparent_1px),linear-gradient(to_bottom,#e0e1ea_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="relative max-w-[1024px] border-x-1 border-[#e0e1ea] px-6 py-20 md:py-32 mx-auto">
                    {/* Status Badge */}
                    <div className="flex justify-center mb-6 animate-fade-in">
                        <Badge
                            variant="secondary"
                            className="px-4 py-1.5 text-sm font-medium flex items-center gap-2 border border-primary/20"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for new projects
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-6 mb-8">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 tracking-tight animate-fade-in-up">
                            Building Digital
                            <br />
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Experiences
                                </span>
                                <Sparkles className="absolute -top-4 -right-8 w-6 h-6 text-primary animate-pulse" />
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Full-stack developer specializing in modern web applications.
                            I transform ideas into scalable, user-centric digital solutions.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                className="px-3 py-1 text-xs font-medium border-muted-foreground/20 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">5+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">50+</div>
                            <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">30+</div>
                            <div className="text-sm text-muted-foreground">Happy Clients</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Link href="mailto:hello@anshupatel.in">
                            <Button
                                size="lg"
                                className="group px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Let's Work Together
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="#projects">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 py-6 text-base font-semibold border-2 hover:bg-muted/50"
                            >
                                <Code2 className="mr-2 w-4 h-4" />
                                View My Work
                            </Button>
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <Link
                            href="https://github.com/yourusername"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/yourusername"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="mailto:hello@anshupatel.in"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
