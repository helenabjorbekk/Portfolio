import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface FinTechProjectProps {
  onBack: () => void;
}

export function FinTechProject({ onBack }: FinTechProjectProps) {
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
            <Badge className="bg-blue-400/20 text-blue-300 border-blue-400/30">Strategy</Badge>
            <span className="text-muted-foreground">2023 • 6 months</span>
          </div>
          <h1 className="text-5xl text-foreground">
            FinTech Venture Analysis: From Market Research to $15M Series A
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive case study of how strategic analysis, technical due diligence, 
            and business model innovation led to a successful Series A funding round.
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-card/50 border-border backdrop-blur-sm p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-foreground mb-2">Challenge</h3>
              <p className="text-muted-foreground text-sm">
                Early-stage fintech startup needed comprehensive market analysis 
                and technical evaluation for Series A funding.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2">Solution</h3>
              <p className="text-muted-foreground text-sm">
                Conducted 360-degree due diligence covering market positioning, 
                technical architecture, and scalable business model design.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2">Result</h3>
              <p className="text-muted-foreground text-sm">
                $15M Series A funding secured with improved technical strategy 
                and international expansion roadmap.
              </p>
            </div>
          </div>
        </Card>

        {/* The Challenge */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">The Challenge</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When I was brought in to evaluate this fintech startup, they were at a critical juncture. 
              The company had demonstrated initial product-market fit with their consumer lending platform, 
              but investors were asking tough questions about scalability, competitive positioning, and technical debt.
            </p>
            <p>
              The founding team had strong domain expertise but needed strategic guidance to articulate 
              their vision for institutional investors. They were competing in a crowded market with 
              well-funded competitors and needed to differentiate their approach.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">My Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Market Analysis</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Competitive landscape mapping of 50+ fintech players</li>
                <li>• Total addressable market (TAM) calculation and segmentation</li>
                <li>• Regulatory environment analysis across target markets</li>
                <li>• Customer acquisition cost (CAC) benchmarking</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Technical Due Diligence</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Architecture review and scalability assessment</li>
                <li>• Security audit and compliance gap analysis</li>
                <li>• Performance optimization opportunities identification</li>
                <li>• Technical debt quantification and remediation roadmap</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Business Model Innovation</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Revenue stream diversification strategy</li>
                <li>• Unit economics optimization and LTV:CAC improvement</li>
                <li>• Pricing model refinement and value proposition enhancement</li>
                <li>• Partnership and distribution channel analysis</li>
              </ul>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm p-6">
              <h3 className="text-xl text-foreground mb-4">Financial Modeling</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• 5-year financial projections with multiple scenarios</li>
                <li>• Cash flow modeling and burn rate optimization</li>
                <li>• Valuation framework and comparable analysis</li>
                <li>• Capital efficiency metrics and funding requirements</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Key Insights */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Key Insights & Discoveries</h2>
          
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-400/30 p-8">
            <h3 className="text-xl text-foreground mb-4">🎯 Market Positioning Opportunity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Through competitive analysis, I identified a significant gap in serving the "emerging affluent" 
              segment—consumers with household incomes of $75K-$150K who were underserved by both traditional 
              banks and existing fintech solutions. This insight became central to their Series A pitch.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-green-400/30 p-8">
            <h3 className="text-xl text-foreground mb-4">⚡ Technical Architecture Optimization</h3>
            <p className="text-muted-foreground leading-relaxed">
              The technical audit revealed $2M in potential cost savings through infrastructure optimization. 
              By migrating to a microservices architecture and implementing automated scaling, they could 
              reduce operational costs by 60% while improving performance.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-400/30 p-8">
            <h3 className="text-xl text-foreground mb-4">🌍 International Expansion Framework</h3>
            <p className="text-muted-foreground leading-relaxed">
              Created a data-driven framework for international expansion, identifying Canada and the UK 
              as the most viable initial markets based on regulatory environment, competitive landscape, 
              and customer acquisition potential.
            </p>
          </Card>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Results & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">$15M</div>
                <div className="text-muted-foreground">Series A Funding Raised</div>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl">
                <div className="text-4xl text-foreground mb-2">18mo</div>
                <div className="text-muted-foreground">Product Roadmap Created</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl text-foreground">Quantifiable Outcomes</h3>
              <ul className="text-muted-foreground space-y-3">
                <li>• <strong className="text-foreground">$2M</strong> in identified cost optimization opportunities</li>
                <li>• <strong className="text-foreground">3x</strong> improvement in investor meeting conversion rate</li>
                <li>• <strong className="text-foreground">40%</strong> reduction in technical due diligence timeline</li>
                <li>• <strong className="text-foreground">85%</strong> of strategic recommendations implemented</li>
                <li>• <strong className="text-foreground">2 countries</strong> expansion roadmap with regulatory framework</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Lessons Learned</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This project reinforced the importance of taking a holistic approach to venture analysis. 
              While technical due diligence is crucial, the market positioning and business model innovation 
              often have the greatest impact on investor confidence and long-term success.
            </p>
            <p>
              The key to successful Series A preparation isn't just about having great numbers—it's about 
              telling a compelling story backed by data. By identifying the unique market opportunity and 
              creating a clear path to capture it, we were able to differentiate this startup from the competition.
            </p>
          </div>
        </div>

        {/* Technologies & Methods */}
        <div className="space-y-6">
          <h2 className="text-3xl text-foreground">Technologies & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Financial Modeling</Badge>
            <Badge variant="secondary">Market Research</Badge>
            <Badge variant="secondary">Technical Architecture Review</Badge>
            <Badge variant="secondary">Competitive Analysis</Badge>
            <Badge variant="secondary">Due Diligence</Badge>
            <Badge variant="secondary">Business Strategy</Badge>
            <Badge variant="secondary">Regulatory Analysis</Badge>
            <Badge variant="secondary">International Expansion</Badge>
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