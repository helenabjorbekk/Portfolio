import { useState } from "react";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { imgSmil2 } from "./imports/svg-7ufa0";
import CvAug2025 from "./imports/CvAug2025";
//import imgSmil1 from "figma:asset/f922b50609fb4bdd8f99d9fa57e62ead2d501164.png";
//mport { imgSmil2 } from "./imports/svg-k4moh";
//import CvAug2025 from "./imports/CvAug2025";

type ViewType = 'portfolio' | 'cv' | 'project';
type ProjectType = 'aize' | 'sintef' | 'strawberry' | 'uka-brand' | 'uka-website' | 'sensor';

interface Project {
  id: ProjectType;
  title: string;
  subtitle: string;
  type: 'Professional' | 'Study' | 'Volunteer';
  year: string;
  description: string;
  role: string;
  tools: string[];
  impact: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 'aize',
    title: 'Aize Platform Onboarding',
    subtitle: 'UX Design for Enterprise Software',
    type: 'Professional',
    year: '2025',
    description: 'Led the design of in-app onboarding experience for Aize platform version 3, focusing on user experience optimization and seamless interface introduction for enterprise users.',
    role: 'UX Design Intern',
    tools: ['Figma', 'User Research', 'Prototyping', 'Interface Design'],
    impact: [
      'Designed comprehensive onboarding flow for complex enterprise platform',
      'Conducted user research to understand pain points in current experience',
      'Created interactive prototypes for testing and validation'
    ],
    category: 'UX Design'
  },
  {
    id: 'sintef',
    title: 'Strategy for SINTEF',
    subtitle: 'Strategic Analysis & Research',
    type: 'Study',
    year: '2024',
    description: 'Developed strategic recommendations for SINTEF research institute, analyzing market positioning, innovation opportunities, and organizational efficiency improvements.',
    role: 'Strategic Analyst',
    tools: ['Strategic Planning', 'Market Research', 'Data Analysis', 'Stakeholder Interviews'],
    impact: [
      'Identified key growth opportunities in emerging technology sectors',
      'Analyzed competitive landscape and positioning strategies',
      'Delivered actionable recommendations for organizational development'
    ],
    category: 'Strategy'
  },
  {
    id: 'strawberry',
    title: 'Strawberry HR Portal',
    subtitle: 'Full-Stack Development',
    type: 'Professional',
    year: '2023',
    description: 'Developed internal HR portal using modern web technologies, streamlining employee processes and improving internal workflow efficiency.',
    role: 'System Developer Intern',
    tools: ['React', 'Node.js', 'MongoDB', 'API Development'],
    impact: [
      'Built scalable HR management system from concept to deployment',
      'Improved internal process efficiency by 35%',
      'Created intuitive user interface for non-technical users'
    ],
    category: 'Development'
  },
  {
    id: 'uka-brand',
    title: 'UKA Brand Identity',
    subtitle: 'Creative Direction & Team Leadership',
    type: 'Volunteer',
    year: '2021',
    description: 'Led a team of 40+ voluntary students in creating comprehensive brand identity for UKA, Norway\'s largest student cultural festival.',
    role: 'Art Director',
    tools: ['Adobe Creative Suite', 'Brand Strategy', 'Team Management', 'Visual Identity'],
    impact: [
      'Managed creative team of 40+ voluntary students',
      'Developed complete visual identity system',
      'Coordinated branding across multiple event touchpoints'
    ],
    category: 'Creative Direction'
  },
  {
    id: 'sensor',
    title: 'Sensor Innovation Project',
    subtitle: 'Product Design & Innovation',
    type: 'Study',
    year: '2024',
    description: 'Designed innovative sensor solution focusing on user needs analysis, technical feasibility, and market validation for emerging IoT applications.',
    role: 'Product Designer',
    tools: ['Industrial Design', 'Prototyping', 'User Testing', 'Technical Analysis'],
    impact: [
      'Conducted comprehensive user needs analysis',
      'Developed functional prototype with technical validation',
      'Created go-to-market strategy and business case'
    ],
    category: 'Product Design'
  },
  {
    id: 'uka-website',
    title: 'UKA Digital Platform',
    subtitle: 'Web Development & UX',
    type: 'Volunteer',
    year: '2021',
    description: 'Developed and designed digital platform for UKA festival, handling ticket sales, event information, and user engagement for thousands of visitors.',
    role: 'Web Developer & Designer',
    tools: ['React', 'Design Systems', 'E-commerce', 'Performance Optimization'],
    impact: [
      'Built platform handling thousands of concurrent users',
      'Designed seamless ticket purchasing experience',
      'Optimized performance for high-traffic festival period'
    ],
    category: 'Web Development'
  }
];

function LandingSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex items-start gap-12">
        <div className="flex-shrink-0">
          <div
            className="w-32 h-32 bg-center bg-cover bg-no-repeat rounded-2xl"
            style={{
              backgroundImage: `url('${imgSmil2}')`,
              maskImage: `url('${imgSmil2}')`,
              WebkitMaskImage: `url('${imgSmil2}')`,
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          />
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-medium text-foreground">
              Helena Løvdal Bjørbekk
            </h1>
            <p className="text-xl text-muted-foreground">
              Designer & Strategist
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Turning strategy into value through design.
            </p>
          </div>
          
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            I bridge creative design with strategic thinking and technical implementation. 
            Currently pursuing M.Sc. Industrial Design at NTNU, with experience from Aize, 
            Strawberry, and leading creative teams. I thrive in complex problem-solving 
            and cross-functional collaboration.
          </p>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = 'mailto:helenabjorbekk@hotmail.com'}
            >
              Get in touch
            </Button>
            <Button 
              variant="ghost"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <h2 className="text-2xl font-medium text-foreground">About</h2>
        
        <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
          <p>
            Hi – I'm Helena, a strategic designer with a background in industrial design, 
            experience from Aker, Aize and SINTEF, and a drive to solve complex problems 
            through insight, structure and creativity.
          </p>
          
          <p>
            Whether I'm leading a summer project, mapping a supply chain, or shaping a 
            visual identity, I care about creating solutions that are useful, meaningful 
            and scalable. I thrive in cross-functional teams, and I bring a mix of 
            big-picture thinking and hands-on execution.
          </p>
          
          <p>
            This portfolio is a collection of selected projects that show how I work – 
            and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <div>
            <h3 className="font-medium text-foreground mb-3">Approach</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I start with understanding the problem deeply, then explore solutions 
              that balance user needs, business goals, and technical feasibility.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-3">Values</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curiosity-driven, human-centered, and focused on creating meaningful 
              impact through thoughtful design and strategic thinking.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-3">Tools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Figma, React, Adobe Creative Suite, strategic frameworks, user research 
              methods, and collaborative design processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-sm transition-all duration-200 border-border"
      onClick={onClick}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-medium text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {project.type}
            </Badge>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {project.tools.slice(0, 3).map((tool) => (
            <Badge key={tool} variant="outline" className="text-xs">
              {tool}
            </Badge>
          ))}
          {project.tools.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tools.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProjectsSection({ onProjectSelect }: { onProjectSelect: (id: ProjectType) => void }) {
  const [filter, setFilter] = useState<'All' | 'Professional' | 'Study' | 'Volunteer'>('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">Selected Work</h2>
          <p className="text-base text-muted-foreground">
            Projects spanning strategy, design, and development that demonstrate 
            my multidisciplinary approach to problem-solving.
          </p>
        </div>

        <div className="flex gap-2">
          {(['All', 'Professional', 'Study', 'Volunteer'] as const).map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectSelect(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <h2 className="text-2xl font-medium text-foreground">How I Work</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-foreground mb-3">Discovery & Research</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I start every project by understanding the problem space deeply. This involves 
                stakeholder interviews, user research, competitive analysis, and technical 
                constraints assessment.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-3">Strategic Thinking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I map out the big picture before diving into details. This includes identifying 
                key opportunities, defining success metrics, and creating frameworks that guide 
                decision-making throughout the project.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-foreground mb-3">Iterative Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in rapid prototyping and testing. Whether it's sketches, wireframes, 
                or working prototypes, I validate ideas early and often to ensure we're building 
                the right solution.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-3">Implementation & Impact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I work closely with development teams to ensure design integrity during 
                implementation. I also establish metrics to measure success and continuously 
                improve the solution post-launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ onViewCV }: { onViewCV: () => void }) {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <h2 className="text-2xl font-medium text-foreground">Let's Work Together</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm currently pursuing my M.Sc. in Industrial Design at NTNU and available 
              for internships, freelance projects, and collaborations. Whether you're 
              building innovative user experiences or need strategic design thinking, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-2">
              <Button 
                variant="outline"
                onClick={() => window.location.href = 'mailto:helenabjorbekk@hotmail.com'}
              >
                helenabjorbekk@hotmail.com
              </Button>
              <Button 
                variant="ghost"
                onClick={() => window.location.href = 'tel:+4790848969'}
              >
                +47 90 84 89 69
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-3">Download CV</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete overview of my education, experience, and skills.
              </p>
              <Button onClick={onViewCV}>
                View Full CV
              </Button>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Based in Trondheim, Norway • Available for remote work • 
                Expected graduation: June 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectDetailView({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="p-2">
            ← Back
          </Button>
          <span className="text-sm text-muted-foreground">Case Study</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">{project.category}</Badge>
            <span className="text-sm text-muted-foreground">{project.year}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{project.type}</span>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-medium text-foreground">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
          
          <p className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-foreground mb-3">Role</h3>
            <p className="text-sm text-muted-foreground">
              {project.role}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-3">Tools & Methods</h3>
            <div className="flex flex-wrap gap-1">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-3">Timeline</h3>
            <p className="text-sm text-muted-foreground">
              {project.year}
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">Key Impact</h2>
          <ul className="space-y-2">
            {project.impact.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Process Details - Customized per project */}
        {project.id === 'aize' && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-foreground">Design Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Research & Discovery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I conducted user interviews with existing Aize platform users to understand 
                  their current onboarding experience and identify pain points. The research 
                  revealed that users found the initial setup overwhelming and lacked clear 
                  guidance on how to maximize platform value.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Design & Prototyping</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I designed a progressive onboarding flow that introduces features gradually, 
                  with clear value propositions at each step. The solution includes interactive 
                  tutorials, contextual help, and personalized setup paths based on user roles.
                </p>
              </div>
            </div>
          </div>
        )}

        {project.id === 'strawberry' && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-foreground">Technical Implementation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Architecture & Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I built the HR portal using React for the frontend and Node.js with MongoDB 
                  for the backend. The system handles employee data management, leave requests, 
                  performance tracking, and internal communications in a single, integrated platform.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">User Experience Focus</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Despite being an internal tool, I prioritized user experience by conducting 
                  interviews with HR staff and employees to understand their daily workflows. 
                  This led to an intuitive interface that reduced training time and improved adoption.
                </p>
              </div>
            </div>
          </div>
        )}

        {project.id === 'uka-brand' && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-foreground">Creative Leadership</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-3">Team Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Managing a team of 40+ voluntary students required clear communication, 
                  structured workflows, and creative motivation. I established design guidelines, 
                  organized regular workshops, and created a collaborative environment that 
                  maintained quality while accommodating diverse skill levels.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-3">Brand Strategy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The brand needed to appeal to students while maintaining institutional 
                  credibility. I developed a visual identity that balanced playful energy 
                  with professional execution, ensuring consistency across digital platforms, 
                  print materials, and environmental graphics.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Learning & Reflection */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">Reflection</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            {project.id === 'aize' && (
              <p>
                This project reinforced the importance of user research in enterprise software design. 
                Complex platforms require careful attention to cognitive load and progressive disclosure. 
                Working at Aize taught me how to balance comprehensive functionality with accessible 
                user experience.
              </p>
            )}
            {project.id === 'strawberry' && (
              <p>
                Building an HR portal from scratch taught me the value of understanding business 
                processes before designing technical solutions. The project highlighted how good 
                UX design can transform internal tools from necessary evils into productivity enablers.
              </p>
            )}
            {project.id === 'uka-brand' && (
              <p>
                Leading a large creative team taught me that creative direction is as much about 
                people management as it is about design. Clear vision, consistent communication, 
                and respect for individual contributions are essential for successful creative collaboration.
              </p>
            )}
            {project.id === 'sintef' && (
              <p>
                This strategic project taught me how to balance analytical rigor with creative 
                thinking. Working with a research institution required understanding complex 
                organizational dynamics and translating insights into actionable recommendations.
              </p>
            )}
            {project.id === 'sensor' && (
              <p>
                This project demonstrated the importance of technical feasibility in product design. 
                Balancing user needs with technological constraints required constant iteration 
                and close collaboration with engineering teams.
              </p>
            )}
            {project.id === 'uka-website' && (
              <p>
                Building a platform for thousands of users taught me about performance optimization 
                and scalable architecture. The project reinforced the importance of planning for 
                peak usage and designing systems that can handle unexpected loads.
              </p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <Button onClick={onBack}>
            ← Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}

function CVView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="p-2">
            ← Back
          </Button>
          <span className="text-sm text-muted-foreground">Curriculum Vitae</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-border">
          <div className="scale-90 origin-top">
            <CvAug2025 />
          </div>
        </div>
        
        <div className="pt-8 flex justify-center">
          <Button onClick={onBack}>
            ← Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}

function PortfolioView({ 
  onProjectSelect, 
  onViewCV 
}: { 
  onProjectSelect: (id: ProjectType) => void; 
  onViewCV: () => void; 
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground">Helena Løvdal Bjørbekk</span>
            <div className="flex gap-6 text-sm">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <LandingSection />
      <AboutSection />
      <ProjectsSection onProjectSelect={onProjectSelect} />
      <ProcessSection />
      <ContactSection onViewCV={onViewCV} />
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('portfolio');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    setSelectedProject(null);
  };

  const handleProjectSelect = (id: ProjectType) => {
    setSelectedProject(id);
    setCurrentView('project');
  };

  const handleViewCV = () => {
    setCurrentView('cv');
  };

  if (currentView === 'cv') {
    return <CVView onBack={handleBackToPortfolio} />;
  }

  if (currentView === 'project' && selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      return <ProjectDetailView project={project} onBack={handleBackToPortfolio} />;
    }
  }

  return (
    <PortfolioView 
      onProjectSelect={handleProjectSelect} 
      onViewCV={handleViewCV} 
    />
  );
}