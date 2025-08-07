import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface SaasPlatformProjectProps {
  onBack: () => void;
}

export function SaasPlatformProject({ onBack }: SaasPlatformProjectProps) {
  return (
    <div className="min-h-screen dark relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 py-6 flex items-center gap-6">
          <Button variant="outline" onClick={onBack} className="px-4 py-2">
            ← Back to Portfolio
          </Button>
          <div className="text-lg text-muted-foreground">Case Study</div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-20 space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Badge className="bg-green-400/20 text-green-300 border-green-400/30">Development</Badge>
            <span className="text-muted-foreground">2021 • 12 months</span>
          </div>
          <h1 className="text-5xl text-foreground">
            SaaS Platform Architecture: Building for 50,000+ Users
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to deployment: architecting a multi-tenant SaaS platform that handles 
            complex data processing and real-time analytics at scale.
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-card/50 border-border backdrop-blur-sm p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-foreground mb-2">Challenge</h3>
              <p className="text-muted-foreground text-sm">
                Build a scalable, multi-tenant analytics platform capable of processing 
                real-time data for thousands of enterprise customers.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2">Solution</h3>
              <p className="text-muted-foreground text-sm">
                Microservices architecture with event-driven processing, comprehensive 
                design system, and automated scaling infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2">Result</h3>
              <p className="text-muted-foreground text-sm">
                50,000+ active users, 99.9% uptime, real-time processing of millions 
                of data points daily with sub-second response times.
              </p>
            </div>
          </div>
        </Card>

        {/* The Challenge */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">The Challenge</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A rapidly growing B2B analytics company needed to transition from their MVP to a 
              production-ready platform capable of serving enterprise customers. The existing system 
              was built as a proof-of-concept and couldn't handle the increasing data volumes or 
              user load.
            </p>
            <p>
              The company was processing over 10 million data points daily across 500+ enterprise 
              customers, but the legacy architecture was causing performance bottlenecks, security 
              concerns, and scaling limitations that threatened their ability to grow.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-400/30 p-6">
            <h3 className="text-lg text-foreground mb-3">Technical Challenges</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Monolithic architecture limiting scalability</li>
                <li>• Database performance degradation</li>
                <li>• Manual deployment processes</li>
                <li>• Inconsistent user interface components</li>
              </ul>
              <ul className="space-y-1">
                <li>• Security vulnerabilities in multi-tenancy</li>
                <li>• Real-time processing bottlenecks</li>
                <li>• Limited monitoring and observability</li>
                <li>• Technical debt accumulation</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Technical Architecture */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Technical Architecture</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Microservices Design</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Event-driven architecture with Apache Kafka</li>
                <li>• Domain-driven service boundaries</li>
                <li>• API Gateway with rate limiting and authentication</li>
                <li>• Service mesh for inter-service communication</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Data Processing Pipeline</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Real-time stream processing with Apache Flink</li>
                <li>• Multi-layered data lake architecture</li>
                <li>• Automated data quality validation</li>
                <li>• Time-series database optimization</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Infrastructure & DevOps</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Kubernetes orchestration on AWS EKS</li>
                <li>• GitOps deployment with ArgoCD</li>
                <li>• Infrastructure as Code with Terraform</li>
                <li>• Comprehensive monitoring with Prometheus</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Frontend Architecture</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• React with TypeScript and Next.js</li>
                <li>• Comprehensive design system</li>
                <li>• Real-time WebSocket connections</li>
                <li>• Progressive Web App capabilities</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Design System */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Design System Development</h2>
          
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-400/30 p-8">
            <h3 className="text-xl text-foreground mb-4">🎨 Component Library & Design Tokens</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Built a comprehensive design system with 50+ reusable components, ensuring 
              consistency across the platform while maintaining flexibility for customization.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Foundation</strong>
                <ul className="space-y-1 mt-2">
                  <li>• Color system with accessibility compliance</li>
                  <li>• Typography scale and spacing tokens</li>
                  <li>• Icon library with 200+ SVG icons</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground">Components</strong>
                <ul className="space-y-1 mt-2">
                  <li>• Form elements and validation</li>
                  <li>• Data visualization components</li>
                  <li>• Navigation and layout systems</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground">Patterns</strong>
                <ul className="space-y-1 mt-2">
                  <li>• Dashboard layout templates</li>
                  <li>• Data table configurations</li>
                  <li>• Modal and notification patterns</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Security & Performance */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Security & Performance</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-green-400/30 p-6">
              <h3 className="text-xl text-foreground mb-4">🔒 Security Implementation</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Multi-tenant data isolation architecture</li>
                <li>• JWT-based authentication with refresh tokens</li>
                <li>• Role-based access control (RBAC) system</li>
                <li>• End-to-end encryption for sensitive data</li>
                <li>• Regular penetration testing and audits</li>
                <li>• GDPR and SOC 2 compliance implementation</li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/30 p-6">
              <h3 className="text-xl text-foreground mb-4">⚡ Performance Optimization</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Database query optimization and indexing</li>
                <li>• Redis caching layer for frequently accessed data</li>
                <li>• CDN implementation for global performance</li>
                <li>• Code splitting and lazy loading</li>
                <li>• Horizontal auto-scaling based on metrics</li>
                <li>• Performance monitoring and alerting</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Development Process */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Development Process & Team</h2>
          
          <Card className="bg-card/50 border-border backdrop-blur-sm p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg text-foreground mb-4">Agile Methodology</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• 2-week sprint cycles with clear deliverables</li>
                  <li>• Daily standups and retrospectives</li>
                  <li>• Continuous integration and deployment</li>
                  <li>• Feature flag-driven development</li>
                  <li>• A/B testing for UX improvements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-foreground mb-4">Quality Assurance</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• 90%+ code coverage with unit tests</li>
                  <li>• End-to-end testing with Cypress</li>
                  <li>• Load testing for scalability validation</li>
                  <li>• Code review process with automated checks</li>
                  <li>• Security scanning in CI/CD pipeline</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">50K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Achieved</div>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">&lt;500ms</div>
                <div className="text-muted-foreground">API Response Time</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl text-foreground">Technical Achievements</h3>
              <ul className="text-muted-foreground space-y-3">
                <li>• <strong className="text-foreground">10M+</strong> data points processed daily</li>
                <li>• <strong className="text-foreground">99.9%</strong> uptime with automated scaling</li>
                <li>• <strong className="text-foreground">80%</strong> reduction in deployment time</li>
                <li>• <strong className="text-foreground">50+</strong> reusable design system components</li>
                <li>• <strong className="text-foreground">5x</strong> improvement in query performance</li>
                <li>• <strong className="text-foreground">Zero</strong> major security incidents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Lessons Learned</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Building a scalable SaaS platform taught me the critical importance of making 
              architectural decisions with future growth in mind. The microservices approach, 
              while more complex initially, provided the flexibility needed to scale individual 
              components based on demand.
            </p>
            <p>
              The design system proved to be one of the most valuable investments, not just for 
              consistency but for development velocity. Having a shared component library reduced 
              feature development time by approximately 40% and significantly improved the user experience.
            </p>
          </div>
        </div>

        {/* Technologies & Methods */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Technologies & Tools</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg text-foreground mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">WebSockets</Badge>
                <Badge variant="secondary">PWA</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg text-foreground mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">GraphQL</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Redis</Badge>
                <Badge variant="secondary">Apache Kafka</Badge>
                <Badge variant="secondary">Apache Flink</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg text-foreground mb-3">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Terraform</Badge>
                <Badge variant="secondary">ArgoCD</Badge>
                <Badge variant="secondary">Prometheus</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-12 border-t border-border flex justify-center">
          <Button onClick={onBack} className="px-8 py-3">
            ← Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}