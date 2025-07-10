import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText, 
  Calendar,
  User,
  Briefcase,
  GraduationCap,
  Star,
  MoreHorizontal,
  Trash2,
  Edit,
  Share,
  Archive
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Enhanced mock data with more realistic resume information
const mockResumes = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    position: "Senior Software Engineer",
    experience: "8 years",
    skills: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
    education: "Master's in Computer Science - Stanford University",
    uploadDate: "2024-01-15",
    status: "processed",
    matchScore: 95,
    location: "San Francisco, CA",
    salary: "$150,000 - $180,000",
    summary: "Experienced full-stack developer with expertise in modern web technologies and cloud infrastructure.",
    workHistory: [
      { company: "Google", position: "Senior Software Engineer", duration: "2020-2024" },
      { company: "Facebook", position: "Software Engineer", duration: "2018-2020" }
    ],
    certifications: ["AWS Solutions Architect", "Certified Kubernetes Administrator"],
    languages: ["English (Native)", "Spanish (Fluent)"],
    projects: ["E-commerce Platform", "Real-time Chat Application", "ML-powered Recommendation System"]
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 987-6543",
    position: "Data Scientist",
    experience: "5 years",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "PyTorch", "R"],
    education: "PhD in Data Science - MIT",
    uploadDate: "2024-01-14",
    status: "processed",
    matchScore: 92,
    location: "Boston, MA",
    salary: "$130,000 - $160,000",
    summary: "Data scientist with strong background in machine learning and statistical analysis.",
    workHistory: [
      { company: "Netflix", position: "Senior Data Scientist", duration: "2021-2024" },
      { company: "Uber", position: "Data Scientist", duration: "2019-2021" }
    ],
    certifications: ["Google Cloud Professional Data Engineer", "AWS Machine Learning Specialty"],
    languages: ["English (Native)", "Mandarin (Native)"],
    projects: ["Recommendation Algorithm", "Fraud Detection System", "Customer Segmentation Model"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 (555) 456-7890",
    position: "Product Manager",
    experience: "6 years",
    skills: ["Product Strategy", "Agile", "Scrum", "Analytics", "User Research", "Roadmapping"],
    education: "MBA in Business Administration - Harvard Business School",
    uploadDate: "2024-01-13",
    status: "processing",
    matchScore: 88,
    location: "New York, NY",
    salary: "$140,000 - $170,000",
    summary: "Strategic product manager with proven track record of launching successful digital products.",
    workHistory: [
      { company: "Amazon", position: "Senior Product Manager", duration: "2020-2024" },
      { company: "Microsoft", position: "Product Manager", duration: "2018-2020" }
    ],
    certifications: ["Certified Scrum Product Owner", "Google Analytics Certified"],
    languages: ["English (Native)", "Spanish (Fluent)"],
    projects: ["Mobile App Launch", "B2B Platform Redesign", "AI-powered Features"]
  }
];

export default function AllResumes() {
  const [resumes, setResumes] = useState(mockResumes);
  const [selectedResume, setSelectedResume] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterExperience, setFilterExperience] = useState("all");
  const [sortBy, setSortBy] = useState("uploadDate");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const { toast } = useToast();

  // Filter and sort resumes
  const filteredResumes = resumes
    .filter(resume => {
      const matchesSearch = resume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resume.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resume.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = filterStatus === "all" || resume.status === filterStatus;
      
      const matchesExperience = filterExperience === "all" || 
                               (filterExperience === "junior" && parseInt(resume.experience) <= 3) ||
                               (filterExperience === "mid" && parseInt(resume.experience) > 3 && parseInt(resume.experience) <= 7) ||
                               (filterExperience === "senior" && parseInt(resume.experience) > 7);
      
      return matchesSearch && matchesStatus && matchesExperience;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "matchScore":
          return (b.matchScore || 0) - (a.matchScore || 0);
        case "uploadDate":
          return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
        default:
          return 0;
      }
    });

  const handleAction = (action: string, resumeId: number) => {
    switch (action) {
      case "archive":
        setResumes(prev => prev.map(r => r.id === resumeId ? { ...r, status: "archived" } : r));
        toast({ title: "Resume archived successfully" });
        break;
      case "delete":
        setResumes(prev => prev.filter(r => r.id !== resumeId));
        toast({ title: "Resume deleted successfully" });
        break;
      case "share":
        navigator.clipboard.writeText(`Resume ID: ${resumeId}`);
        toast({ title: "Resume link copied to clipboard" });
        break;
      default:
        break;
    }
  };

  const exportResumes = () => {
    const csvContent = [
      ["Name", "Email", "Position", "Experience", "Skills", "Match Score", "Status"],
      ...filteredResumes.map(r => [
        r.name, r.email, r.position, r.experience, 
        r.skills.join("; "), r.matchScore, r.status
      ])
    ].map(row => row.join(",")).join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resumes_export.csv";
    a.click();
    URL.revokeObjectURL(url);
    
    toast({ title: "Resumes exported successfully" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">All Resumes</h2>
          <p className="text-muted-foreground">
            Manage and analyze all parsed resumes ({filteredResumes.length} of {resumes.length})
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={exportResumes}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline" onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}>
            {viewMode === "list" ? "Grid View" : "List View"}
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search resumes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterExperience} onValueChange={setFilterExperience}>
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="junior">Junior (0-3 years)</SelectItem>
                <SelectItem value="mid">Mid-level (4-7 years)</SelectItem>
                <SelectItem value="senior">Senior (8+ years)</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uploadDate">Upload Date</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="matchScore">Match Score</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setFilterStatus("all");
              setFilterExperience("all");
              setSortBy("uploadDate");
            }}>
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resume List */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
        {filteredResumes.map((resume) => (
          <Card key={resume.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{resume.name}</h3>
                    <p className="text-sm text-muted-foreground">{resume.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={resume.status === 'processed' ? 'default' : 'secondary'}>
                    {resume.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>{resume.experience} experience</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>{resume.education.split(" - ")[0]}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Uploaded {new Date(resume.uploadDate).toLocaleDateString()}</span>
                </div>

                {resume.matchScore && (
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{resume.matchScore}% Match</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mt-3">
                  {resume.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {resume.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{resume.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex space-x-2 mt-4 pt-4 border-t">
                <Button size="sm" onClick={() => setSelectedResume(resume)}>
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleAction("share", resume.id)}>
                  <Share className="w-4 h-4 mr-1" />
                  Share
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleAction("archive", resume.id)}>
                  <Archive className="w-4 h-4 mr-1" />
                  Archive
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resume Details Modal */}
      <Dialog open={!!selectedResume} onOpenChange={() => setSelectedResume(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Resume Details - {selectedResume?.name}</DialogTitle>
          </DialogHeader>
          {selectedResume && (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills & Education</TabsTrigger>
                <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Email:</strong> {selectedResume.email}</p>
                      <p><strong>Phone:</strong> {selectedResume.phone}</p>
                      <p><strong>Location:</strong> {selectedResume.location}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Summary</h4>
                    <p className="text-sm text-muted-foreground">{selectedResume.summary}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="experience" className="space-y-4">
                <h4 className="font-semibold">Work History</h4>
                {selectedResume.workHistory?.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h5 className="font-medium">{job.position}</h5>
                    <p className="text-sm text-muted-foreground">{job.company} • {job.duration}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="skills" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedResume.skills?.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm">{selectedResume.education}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <ul className="text-sm space-y-1">
                    {selectedResume.certifications?.map((cert, index) => (
                      <li key={index}>• {cert}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="analysis" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">AI Match Score</h4>
                    <div className="text-3xl font-bold text-primary">{selectedResume.matchScore}%</div>
                    <p className="text-sm text-muted-foreground">Based on job requirements analysis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Projects</h4>
                    <ul className="text-sm space-y-1">
                      {selectedResume.projects?.map((project, index) => (
                        <li key={index}>• {project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}