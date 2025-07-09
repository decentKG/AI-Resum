
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Zap, Users, BarChart3, Shield, Clock, Target, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              C-Resume
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/lovable-uploads/2d6936c1-2edf-4b17-830b-3d5776525725.png)' }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        
        {/* Falling Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Bright twinkling stars */}
          <div className="star star-large w-2 h-2" style={{ left: '15%', top: '20%', animationName: 'twinkleBright', animationDuration: '3s', animationDelay: '0s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1.5 h-1.5" style={{ left: '25%', top: '35%', animationName: 'twinkleBright', animationDuration: '2.5s', animationDelay: '1s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star star-large w-2 h-2" style={{ left: '45%', top: '15%', animationName: 'twinkleBright', animationDuration: '4s', animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1.5 h-1.5" style={{ left: '65%', top: '40%', animationName: 'twinkleBright', animationDuration: '3.5s', animationDelay: '0.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star star-large w-2 h-2" style={{ left: '85%', top: '25%', animationName: 'twinkleBright', animationDuration: '2.8s', animationDelay: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          
          {/* Medium twinkling stars */}
          <div className="star w-1 h-1" style={{ left: '8%', top: '45%', animationName: 'twinkle', animationDuration: '4s', animationDelay: '0s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1.5 h-1.5" style={{ left: '18%', top: '60%', animationName: 'twinkle', animationDuration: '5s', animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '32%', top: '55%', animationName: 'twinkle', animationDuration: '3.5s', animationDelay: '1s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1.5 h-1.5" style={{ left: '52%', top: '65%', animationName: 'twinkle', animationDuration: '4.5s', animationDelay: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '72%', top: '58%', animationName: 'twinkle', animationDuration: '3.8s', animationDelay: '0.8s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1.5 h-1.5" style={{ left: '88%', top: '50%', animationName: 'twinkle', animationDuration: '4.2s', animationDelay: '2.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          
          {/* Subtle background stars */}
          <div className="star w-1 h-1" style={{ left: '12%', top: '75%', animationName: 'twinkleSubtle', animationDuration: '6s', animationDelay: '0s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '28%', top: '80%', animationName: 'twinkleSubtle', animationDuration: '7s', animationDelay: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '38%', top: '70%', animationName: 'twinkleSubtle', animationDuration: '5.5s', animationDelay: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '58%', top: '85%', animationName: 'twinkleSubtle', animationDuration: '6.5s', animationDelay: '4s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '78%', top: '78%', animationName: 'twinkleSubtle', animationDuration: '5.8s', animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '92%', top: '72%', animationName: 'twinkleSubtle', animationDuration: '6.2s', animationDelay: '0.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          
          {/* Additional scattered stars for depth */}
          <div className="star w-1 h-1" style={{ left: '5%', top: '30%', animationName: 'twinkleSubtle', animationDuration: '8s', animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '35%', top: '25%', animationName: 'twinkle', animationDuration: '4.8s', animationDelay: '1.2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '55%', top: '30%', animationName: 'twinkleSubtle', animationDuration: '7.5s', animationDelay: '3.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '75%', top: '18%', animationName: 'twinkle', animationDuration: '5.2s', animationDelay: '0.8s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
          <div className="star w-1 h-1" style={{ left: '95%', top: '35%', animationName: 'twinkleSubtle', animationDuration: '6.8s', animationDelay: '4.2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 border-blue-200 text-blue-200 bg-blue-900/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Resume Parsing
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Welcome to Changed Technologies
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your hiring process with our <span className="text-blue-300 font-semibold">AI-powered Resume Parser.</span>
            {' '}Instantly transform unstructured resumes into actionable, categorized data,
            empowering recruiters to efficiently identify top talent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="text-blue-200 text-lg font-medium">
            Trusted by 500+ companies worldwide
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                The Challenge Companies Face
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Manual resume screening takes hours per candidate</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Inconsistent data extraction leads to missed opportunities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Human bias affects candidate evaluation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Difficulty managing large volumes of applications</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our AI-Driven Solution
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Automated parsing processes 100+ resumes in minutes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>99.5% accuracy in data extraction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Objective, data-driven candidate insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Seamless integration with your existing workflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Powerful Features for Modern Hiring
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your recruitment process and make better hiring decisions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Automated Data Extraction</CardTitle>
                <CardDescription className="text-gray-600">
                  Extract contact info, work experience, education, and skills with 99.5% accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Skill Matching</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced keyword analysis and skill matching to find perfect candidates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Analytics & Insights</CardTitle>
                <CardDescription className="text-gray-600">
                  Visual skill clouds, experience distribution, and talent pool analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Time-Saving Efficiency</CardTitle>
                <CardDescription className="text-gray-600">
                  Process 100+ resumes in minutes, reducing screening time by 90%
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Batch Processing</CardTitle>
                <CardDescription className="text-gray-600">
                  Upload and process multiple resumes simultaneously with progress tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Secure & Compliant</CardTitle>
                <CardDescription className="text-gray-600">
                  Enterprise-grade security with GDPR compliance and data protection
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Powered by Changed Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-indigo-200 text-indigo-700 bg-indigo-50">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Powered by Changed Technologies
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              C-Resume leverages the cutting-edge AI expertise of Changed Technologies to deliver 
              unparalleled accuracy and reliability in resume parsing. Our advanced machine learning 
              algorithms continuously learn and improve, ensuring you always get the best results.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
                <div className="text-gray-600">Parsing Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10x</div>
                <div className="text-gray-600">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Companies Trust Us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of companies that have transformed their hiring process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "C-Resume reduced our screening time by 85%. The accuracy is incredible and the insights help us make better hiring decisions."
                </p>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">HR Director, TechCorp</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The batch processing feature is a game-changer. We can now handle hundreds of applications effortlessly."
                </p>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-500">Talent Acquisition Lead, InnovateCo</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The skill analytics give us incredible insights into our talent pool. It's like having a data scientist for HR."
                </p>
                <div className="font-semibold text-gray-900">Emma Rodriguez</div>
                <div className="text-sm text-gray-500">Recruitment Manager, GlobalTech</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about C-Resume
            </p>
          </div>
          <div className="space-y-8">
            <Card className="border border-gray-200">
              <CardHeader className="cursor-pointer">
                <CardTitle className="flex items-center justify-between text-lg">
                  What file formats does C-Resume support?
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardTitle>
                <CardDescription className="text-left pt-2">
                  C-Resume supports all major resume formats including PDF, DOCX, DOC, and TXT files. Our AI parser is optimized for these formats to ensure maximum accuracy.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="cursor-pointer">
                <CardTitle className="flex items-center justify-between text-lg">
                  How accurate is the AI parsing?
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardTitle>
                <CardDescription className="text-left pt-2">
                  Our AI parser achieves 99.5% accuracy in data extraction, continuously improving through machine learning and regular updates from Changed Technologies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="cursor-pointer">
                <CardTitle className="flex items-center justify-between text-lg">
                  Can I integrate C-Resume with my existing HR systems?
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardTitle>
                <CardDescription className="text-left pt-2">
                  Yes! C-Resume offers export capabilities in CSV and JSON formats, making it easy to integrate with your existing HR management systems and workflows.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="cursor-pointer">
                <CardTitle className="flex items-center justify-between text-lg">
                  Is my data secure with C-Resume?
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardTitle>
                <CardDescription className="text-left pt-2">
                  Absolutely. We implement enterprise-grade security measures, including data encryption, secure cloud storage, and full GDPR compliance to protect your sensitive information.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using C-Resume to streamline their recruitment and make better hiring decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">C-Resume</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered resume parsing for modern businesses. Powered by Changed Technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Changed Technologies. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
