import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
  FileText,
  PieChart,
  Building,
  CreditCard,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services for individuals and businesses",
      features: [
        "Individual tax returns",
        "Corporate tax preparation",
        "Tax planning strategies",
        "IRS representation",
        "Quarterly tax estimates",
        "Multi-state tax filing",
      ],
      popular: true,
    },
    {
      icon: TrendingUp,
      title: "Financial Planning & Analysis",
      description: "Strategic financial guidance to help your business grow",
      features: [
        "Cash flow analysis",
        "Budget planning & forecasting",
        "Financial statement analysis",
        "Investment planning",
        "Retirement planning",
        "Risk assessment",
      ],
    },
    {
      icon: Shield,
      title: "Audit & Assurance Services",
      description: "Independent verification of your financial statements",
      features: [
        "Financial statement audits",
        "Internal control reviews",
        "Compliance audits",
        "Agreed-upon procedures",
        "Review engagements",
        "Fraud investigation",
      ],
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Expert advice to optimize your business operations",
      features: [
        "Business valuation",
        "Merger & acquisition support",
        "Strategic planning",
        "Process improvement",
        "Technology consulting",
        "Succession planning",
      ],
    },
    {
      icon: FileText,
      title: "Bookkeeping Services",
      description: "Accurate record-keeping for your business transactions",
      features: [
        "Monthly bookkeeping",
        "Accounts payable/receivable",
        "Bank reconciliation",
        "Financial reporting",
        "Payroll processing",
        "QuickBooks setup & training",
      ],
    },
    {
      icon: PieChart,
      title: "Management Reporting",
      description: "Detailed insights into your business performance",
      features: [
        "Monthly financial statements",
        "Key performance indicators",
        "Dashboard creation",
        "Variance analysis",
        "Profitability analysis",
        "Custom reporting solutions",
      ],
    },
  ]

  const industries = [
    { name: "Healthcare", icon: Building },
    { name: "Real Estate", icon: Building },
    { name: "Technology", icon: Target },
    { name: "Manufacturing", icon: Building },
    { name: "Retail", icon: CreditCard },
    { name: "Professional Services", icon: Users },
    { name: "Non-Profit", icon: BookOpen },
    { name: "Construction", icon: Building },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-200 mb-8">
              Comprehensive accounting and financial services tailored to your business needs
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From tax preparation to strategic planning, we provide the full spectrum of accounting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow h-full">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">Most Popular</Badge>
                )}
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              How we work with you to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Initial Consultation</h3>
              <p className="text-slate-600">
                We meet to understand your needs, goals, and current financial situation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Custom Proposal</h3>
              <p className="text-slate-600">
                We create a tailored service plan with transparent pricing and timelines.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Implementation</h3>
              <p className="text-slate-600">
                Our expert team executes the plan with regular updates and communication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ongoing Support</h3>
              <p className="text-slate-600">
                We provide continuous support and strategic advice as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We have extensive experience working with businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <industry.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
