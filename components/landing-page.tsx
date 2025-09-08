import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1">
              <Icon icon="fa7-solid:zap" className="h-8 w-8 text-[#55b7e2]" />
              <span className="font-bold text-xl">EasyExams</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium justify-center">
              <a
                href="#features"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Testimonials
              </a>
              <a href="#faq" className="text-foreground/60 hover:text-foreground transition-colors">
                FAQ
              </a>
              <a className="transition-colors text-foreground/60 hover:text-foreground">
                Discord Community
              </a>
            </nav>
            <div className="flex items-center space-x-2 flex-1 justify-end">
              <Button size="sm">Get Key</Button>
            </div>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden py-20 md:py-32 pl-0 mb--75">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t to-transparent blur-3xl rounded-t-full from-primary/50 translate-y-1/2 w-[80%] h-96" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge
              variant="outline"
              className="px-4 py-1 bg-gradient-to-r from-primary/20 to-secondary/10 border-primary/30 hover:from-primary/30 hover:to-secondary/20 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Icon icon="lucide:sparkles" className="w-3 h-3 mr-1 text-primary" />
              Powered by Advanced AI
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Overlay AI Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Transform you exam taking experience, get the answers to all your questions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="outline" className="px-8">
                Watch Demo
                <Icon icon="lucide:play" className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" className="px-8">
                Pricing
                <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-10">
              <p className="text-sm text-muted-foreground">
                Never get caught. Completely undetected even through screenshare sessions. Our
                stealth AI-Assistant is craftly designed to assist students during proctoring exams.
              </p>
              <div className="flex items-center space-x-8 opacity-60 flex-wrap justify-center gap-y-4 gap-x-[10px] mt-4">
                <div className="text-lg font-semibold">Stripe</div>
                <div className="text-lg font-semibold">Crypto</div>
                <div className="text-lg font-semibold">Cashapp</div>
                <div className="text-lg font-semibold">Zelle</div>
                <div className="text-lg font-semibold">Apple Pay</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-muted/50 md:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">How it works.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              During proctoring exams. You don't need to touch you keyboard! Configure your
              AI-Assistant anyway you'd like. You can get direct answers, or use it for study help.
              Fast, easy, compatible.
            </p>
          </div>
          <div className="grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2 lg:col-span-3 md:row-span-2">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="lucide:brain" className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Intelligent Automation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI-powered workflows that learn from your business patterns and optimize
                    processes automatically. Experience the future of business automation with
                    machine learning capabilities that adapt to your unique needs.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:puzzle" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">1000+ Integrations</h3>
                <p className="text-muted-foreground">
                  Connect with all your favorite tools and platforms through our extensive
                  integration library.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 md:col-span-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:shield" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade security with end-to-end encryption, compliance certifications, and
                  audit trails.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl">💎</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">EasyExams Elite</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock the full potential of AI-powered exam assistance with our premium plans
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="relative border-2 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-center">1 Day</h3>
                  <p className="text-muted-foreground text-center text-sm">Quick trial access</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">$30</div>
                  <div className="text-muted-foreground">for 24 hours</div>
                </div>
                <div className="mb-6">
                  <Button className="w-full">Get Started</Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">50 questions limit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">10 screenshots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Basic support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">AI assistance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative border-2 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-center">7 Day</h3>
                  <p className="text-muted-foreground text-center text-sm">Perfect for exams</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">$75</div>
                  <div className="text-muted-foreground">for 7 days</div>
                </div>
                <div className="mb-6">
                  <Button className="w-full">Get Started</Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">200 questions limit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">50 screenshots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Advanced AI features</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative border-2 border-primary shadow-xl scale-105 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                <Icon icon="ic:baseline-star" />
                Most Popular
              </Badge>
              <CardContent className="p-6">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-center">30 Day</h3>
                  <p className="text-muted-foreground text-center text-sm">Semester coverage</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">$125</div>
                  <div className="text-muted-foreground">for 30 days</div>
                </div>
                <div className="mb-6">
                  <Button className="w-full">Get Started</Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">1000 questions limit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">200 screenshots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">24/7 premium support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">All AI features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Study mode</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative border-2 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-center">1 Year</h3>
                  <p className="text-muted-foreground text-center text-sm">Ultimate value</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">$500</div>
                  <div className="text-muted-foreground">for 365 days</div>
                  <div className="text-sm text-primary font-medium">Save 67%</div>
                </div>
                <div className="mb-6">
                  <Button variant="default" className="w-full">
                    Get Started
                  </Button>
                </div>
                <Separator className="mb-6" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Unlimited questions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Unlimited screenshots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">VIP support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">All premium features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Custom AI training</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 bg-muted/50 md:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground mx-auto">
              Join thousands of satisfied customers who have transformed their businesses with
              FlowAI
            </p>
          </div>
          <div className="grid gap-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "We've saved over 40 hours per week on manual data entry tasks. The ROI was
                    evident within the first month of implementation."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                        className="object-cover"
                      />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-muted-foreground">
                        Finance Director, GrowthCo
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "FlowAI's integration capabilities are outstanding. We connected all our tools
                    seamlessly and now have a unified workflow across departments."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="object-cover"
                      />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Michael Kim</div>
                      <div className="text-sm text-muted-foreground">CTO, InnovateLab</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "The AI-powered insights have transformed how we make business decisions. We're
                    now proactive instead of reactive in our approach."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                        className="object-cover"
                      />
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="object-cover"
                      />
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Lee</div>
                      <div className="text-sm text-muted-foreground">
                        VP of Strategy, DataDriven Inc
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="gap-8 grid md:grid-cols-2">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "Implementation was smooth and the support team is exceptional. FlowAI has
                    become an essential part of our daily operations."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        className="object-cover"
                      />
                      <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Robert Thompson</div>
                      <div className="text-sm text-muted-foreground">Operations Manager</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                    <Icon icon="ph:star-fill" className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "This platform has revolutionized our workflow efficiency. The seamless
                    integration and intuitive design make complex tasks feel effortless."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                        className="object-cover"
                      />
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                        className="object-cover"
                      />
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Lee</div>
                      <div className="text-sm text-muted-foreground">
                        VP of Strategy, DataDriven Inc
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid lg:grid-cols-3 gap-8" />
          </div>
        </div>
      </section>
      <section className="pt-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about EasyExams and how it can help passing your exams
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" className="space-y-4" collapsible>
              <AccordionItem value="installation" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How do I install and set up EasyExams?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <div className="space-y-4">
                    <p>Follow these detailed steps to install BrightPal:</p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Badge
                          variant="outline"
                          className="mt-1 min-w-[24px] h-6 flex items-center justify-center text-xs"
                        >
                          1
                        </Badge>
                        <div>
                          <p className="font-medium">Download the installer</p>
                          <p className="text-sm text-muted-foreground">
                            Visit our website and download the appropriate installer for your
                            operating system (Windows, macOS, or Linux).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge
                          variant="outline"
                          className="mt-1 min-w-[24px] h-6 flex items-center justify-center text-xs"
                        >
                          2
                        </Badge>
                        <div>
                          <p className="font-medium">Run the installation</p>
                          <p className="text-sm text-muted-foreground">
                            Double-click the installer and follow the on-screen instructions. The
                            process typically takes 2-3 minutes.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge
                          variant="outline"
                          className="mt-1 min-w-[24px] h-6 flex items-center justify-center text-xs"
                        >
                          3
                        </Badge>
                        <div>
                          <p className="font-medium">Create your account</p>
                          <p className="text-sm text-muted-foreground">
                            Launch EasyExams and create your account using your email address or
                            sign in with existing credentials.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge
                          variant="outline"
                          className="mt-1 min-w-[24px] h-6 flex items-center justify-center text-xs"
                        >
                          4
                        </Badge>
                        <div>
                          <p className="font-medium">Configure settings</p>
                          <p className="text-sm text-muted-foreground">
                            Set up your preferences, including hotkeys, response modes, and privacy
                            settings to customize your experience.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Badge
                          variant="outline"
                          className="mt-1 min-w-[24px] h-6 flex items-center justify-center text-xs"
                        >
                          5
                        </Badge>
                        <div>
                          <p className="font-medium">Test the system</p>
                          <p className="text-sm text-muted-foreground">
                            Run a quick test to ensure everything is working properly before your
                            first exam session.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm">
                        <strong>Note:</strong> Make sure to disable any antivirus software
                        temporarily during installation, as some security programs may flag the
                        overlay features.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="compatibility" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Is EasyExams compatible with all exam platforms?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  EasyExams works with most major exam platforms including Proctorio, ExamSoft,
                  Respondus LockDown Browser, and many others. Our stealth technology is designed to
                  be undetectable by standard proctoring software.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="detection" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can proctoring software detect EasyExams?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our advanced stealth technology operates at a system level that makes it virtually
                  undetectable by standard proctoring software. We continuously update our methods
                  to stay ahead of detection algorithms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What support is available if I have issues?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer 24/7 support through Discord and Telegram. Our team provides real-time
                  assistance, troubleshooting guides, and regular updates to ensure optimal
                  performance during your exams.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <footer className="py-16 border-t">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="md:grid-cols-2 lg:grid-cols-5 gap-8 flex">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon icon="lucide:zap" className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">EasyExams</span>
              </div>
              <div className="space-x-4">
                <Button size="icon" variant="ghost" className="w-[60px] h-[60px]">
                  <Icon icon="ic:baseline-discord" className="" />
                </Button>
                <Button size="sm" variant="ghost" className="w-[60px] h-[60px]">
                  <Icon icon="ic:baseline-telegram" className="w-5/1 h-12" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 EasyExams. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-muted-foreground">Use responsibly.</div>
        </div>
      </footer>
    </div>
  );
}
