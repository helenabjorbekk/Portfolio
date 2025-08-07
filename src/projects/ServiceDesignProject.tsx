import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface ServiceDesignProjectProps {
  onBack: () => void;
}

export function ServiceDesignProject({ onBack }: ServiceDesignProjectProps) {
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
            <Badge className="bg-purple-400/20 text-purple-300 border-purple-400/30">Service Design</Badge>
            <span className="text-muted-foreground">2022 • 8 months</span>
          </div>
          <h1 className="text-5xl text-foreground">
            Enterprise Service Redesign: Transforming Customer Experience at Scale
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How we redesigned a Fortune 500 company's customer service experience, 
            achieving 40% efficiency improvements while enhancing customer satisfaction.
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-card/50 border-border backdrop-blur-sm p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-foreground mb-2">Challenge</h3>
              <p className="text-muted-foreground text-sm">
                Fragmented customer service experience across 12 touchpoints with 
                inconsistent quality and lengthy resolution times.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2">Solution</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive service redesign integrating AI-powered support with 
                human expertise through omnichannel platform.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2">Result</h3>
              <p className="text-muted-foreground text-sm">
                40% efficiency increase, 60% faster resolution times, and 
                improved customer satisfaction scores across all channels.
              </p>
            </div>
          </div>
        </Card>

        {/* The Problem */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">The Problem</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This Fortune 500 financial services company was struggling with a fragmented customer 
              service experience that spanned phone, email, chat, mobile app, and in-person locations. 
              Each channel operated independently, leading to inconsistent information and frustrated customers.
            </p>
            <p>
              The company was receiving over 2 million customer inquiries annually, with average 
              resolution times of 3.5 days and customer satisfaction scores declining by 15% year-over-year. 
              Internal teams were working in silos, and there was no unified view of the customer journey.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-400/30 p-6">
            <h3 className="text-lg text-foreground mb-3">Pain Points Identified</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Customers repeating information across channels</li>
                <li>• Inconsistent service quality and knowledge</li>
                <li>• No visibility into case status or progress</li>
                <li>• 3.5-day average resolution time</li>
              </ul>
              <ul className="space-y-1">
                <li>• Agent burnout from repetitive inquiries</li>
                <li>• Siloed systems and data</li>
                <li>• Limited self-service options</li>
                <li>• Rising operational costs</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Discovery Process */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Discovery & Research</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Customer Journey Mapping</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• 50+ customer interviews across segments</li>
                <li>• Journey mapping for 8 primary use cases</li>
                <li>• Pain point identification and prioritization</li>
                <li>• Emotional journey mapping at each touchpoint</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Internal Process Analysis</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Shadowed 200+ customer service representatives</li>
                <li>• Workflow analysis across all departments</li>
                <li>• System integration assessment</li>
                <li>• Knowledge management audit</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Data Analytics</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Analysis of 2M+ customer interactions</li>
                <li>• Channel preference and success rate mapping</li>
                <li>• Resolution time analysis by issue type</li>
                <li>• Cost-per-interaction benchmarking</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Competitive Benchmarking</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Best practice analysis across industries</li>
                <li>• Technology stack evaluation</li>
                <li>• Service standard comparison</li>
                <li>• Innovation opportunity identification</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* The Solution */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">The Solution: Integrated Service Ecosystem</h2>
          
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/30 p-8">
              <h3 className="text-xl text-foreground mb-4">🤖 AI-Powered Support Layer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implemented intelligent routing and automated response system capable of handling 
                70% of routine inquiries without human intervention.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• Natural language processing for intent recognition</li>
                  <li>• Automated account lookups and status updates</li>
                  <li>• Predictive issue resolution suggestions</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Dynamic FAQ generation based on trends</li>
                  <li>• Seamless handoff to human agents</li>
                  <li>• Multi-language support capabilities</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/30 p-8">
              <h3 className="text-xl text-foreground mb-4">📱 Omnichannel Integration Platform</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Created unified customer view accessible across all touchpoints, ensuring 
                consistent experience regardless of channel.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• Real-time customer context sharing</li>
                  <li>• Cross-channel conversation continuity</li>
                  <li>• Unified case management system</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Preference-based channel routing</li>
                  <li>• Proactive communication triggers</li>
                  <li>• Mobile-first design principles</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border-green-400/30 p-8">
              <h3 className="text-xl text-foreground mb-4">🎯 Personalized Experience Engine</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed data-driven personalization system that adapts service delivery 
                based on customer history, preferences, and behavior patterns.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• Customer segment-based service flows</li>
                  <li>• Predictive issue prevention alerts</li>
                  <li>• Customized communication preferences</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Dynamic priority scoring</li>
                  <li>• Personalized self-service recommendations</li>
                  <li>• Contextual help content delivery</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Implementation */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Implementation Strategy</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 border-border backdrop-blur-sm p-6 text-center">
                <div className="text-2xl text-foreground mb-2">Phase 1</div>
                <div className="text-lg text-foreground mb-3">Foundation</div>
                <p className="text-sm text-muted-foreground">System integration and data unification</p>
              </Card>
              <Card className="bg-card/50 border-border backdrop-blur-sm p-6 text-center">
                <div className="text-2xl text-foreground mb-2">Phase 2</div>
                <div className="text-lg text-foreground mb-3">Intelligence</div>
                <p className="text-sm text-muted-foreground">AI implementation and automation</p>
              </Card>
              <Card className="bg-card/50 border-border backdrop-blur-sm p-6 text-center">
                <div className="text-2xl text-foreground mb-2">Phase 3</div>
                <div className="text-lg text-foreground mb-3">Optimization</div>
                <p className="text-sm text-muted-foreground">Personalization and continuous improvement</p>
              </Card>
            </div>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-lg text-foreground mb-4">Change Management & Training</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Comprehensive training program for 200+ service representatives, focusing on new tools, 
                processes, and enhanced customer interaction skills.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• 40-hour comprehensive training program</li>
                  <li>• Role-specific workflow certification</li>
                  <li>• AI collaboration best practices</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Ongoing coaching and feedback loops</li>
                  <li>• Performance dashboard training</li>
                  <li>• Customer empathy workshops</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">40%</div>
                <div className="text-muted-foreground">Efficiency Increase</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">60%</div>
                <div className="text-muted-foreground">Faster Resolution</div>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">85%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl text-foreground">Measurable Outcomes</h3>
              <ul className="text-muted-foreground space-y-3">
                <li>• <strong className="text-foreground">1.4 days</strong> average resolution time (down from 3.5)</li>
                <li>• <strong className="text-foreground">70%</strong> of inquiries resolved automatically</li>
                <li>• <strong className="text-foreground">85%</strong> customer satisfaction score</li>
                <li>• <strong className="text-foreground">$2.1M</strong> annual operational cost savings</li>
                <li>• <strong className="text-foreground">25%</strong> reduction in customer effort score</li>
                <li>• <strong className="text-foreground">200+</strong> agents successfully trained</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies & Methods */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Technologies & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Service Design</Badge>
            <Badge variant="secondary">Journey Mapping</Badge>
            <Badge variant="secondary">AI/ML Integration</Badge>
            <Badge variant="secondary">Omnichannel Platform</Badge>
            <Badge variant="secondary">Change Management</Badge>
            <Badge variant="secondary">Data Analytics</Badge>
            <Badge variant="secondary">Process Optimization</Badge>
            <Badge variant="secondary">Training & Development</Badge>
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