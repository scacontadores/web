import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Firm</h1>
            <p className="text-xl text-slate-200">
              Trusted financial partners with over two decades of experience helping businesses succeed
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2003, our accounting firm has been dedicated to providing exceptional financial services to
                businesses of all sizes. What started as a small practice has grown into a trusted partner for hundreds
                of companies across various industries.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our commitment to excellence, integrity, and personalized service has been the cornerstone of our
                success. We believe that every business deserves access to professional financial guidance that helps
                them achieve their goals.
              </p>
              <p className="text-lg text-slate-600">
                Today, we continue to evolve with the changing business landscape, incorporating the latest technology
                and best practices to deliver superior results for our clients.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-slate-600">Expert Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-slate-600">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in every service we provide, ensuring the highest quality results for our
                  clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Honesty and transparency are at the heart of our client relationships and business practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our clients can count on us to deliver consistent, dependable service when they need it most.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We embrace new technologies and methodologies to provide cutting-edge financial solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Sarah Johnson, CPA</CardTitle>
                <CardDescription className="text-blue-600">Managing Partner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  With over 15 years of experience, Sarah leads our team with expertise in tax planning and business
                  consulting.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Michael Chen, CPA</CardTitle>
                <CardDescription className="text-blue-600">Senior Partner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Michael specializes in audit and assurance services, bringing 12 years of experience to our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Emily Rodriguez, CPA</CardTitle>
                <CardDescription className="text-blue-600">Tax Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Emily leads our tax department with extensive knowledge in corporate and individual tax preparation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help your business achieve its financial goals.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
