
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Settings,
  Bell,
  FileDown,
  Trash2,
  LogOut,
  User,
  Database,
  Shield,
  HelpCircle,
  Brain,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockResumes = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    position: "Senior Software Engineer",
    experience: "5 years",
    skills: ["React", "Node.js", "Python", "AWS"],
    education: "Master's in Computer Science",
    uploadDate: "2024-01-15",
    status: "processed",
    matchScore: 95
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 987-6543",
    position: "Product Manager",
    experience: "7 years",
    skills: ["Agile", "Scrum", "Product Strategy", "Analytics"],
    education: "MBA in Business Administration",
    uploadDate: "2024-01-14",
    status: "processed",
    matchScore: 88
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 456-7890",
    position: "Data Scientist",
    experience: "4 years",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    education: "PhD in Data Science",
    uploadDate: "2024-01-13",
    status: "processing",
    matchScore: null
  }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResume, setSelectedResume] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            toast({
              title: "Upload Complete!",
              description: `${files.length} resume(s) uploaded successfully and are being processed.`
            });
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const filteredResumes = mockResumes.filter(resume =>
    resume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resume.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resume.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-primary-foreground flex flex-col sticky top-0 h-screen">
        {/* Logo */}
        <div className="p-6 border-b border-primary-foreground/10">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold">C-Resume</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
              <BarChart3 className="w-4 h-4 mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <FileText className="w-4 h-4 mr-3" />
              All Resumes
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Upload className="w-4 h-4 mr-3" />
              Upload
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <TrendingUp className="w-4 h-4 mr-3" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Database className="w-4 h-4 mr-3" />
              Data Export
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Shield className="w-4 h-4 mr-3" />
              Security
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Bell className="w-4 h-4 mr-3" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Users className="w-4 h-4 mr-3" />
              Team
            </Button>
          </div>
        </nav>

        {/* Bottom Nav */}
        <div className="p-4 border-t border-primary-foreground/10 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Settings className="w-4 h-4 mr-3" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <HelpCircle className="w-4 h-4 mr-3" />
            Help Center
          </Button>
          <Link to="/auth">
            <Button variant="ghost" className="w-full justify-start text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Resume Parser Overview</h1>
              <p className="text-muted-foreground">Welcome back, Floyd Miles</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Top Row - Main Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Resume Processing Overview */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-lg">Resume overview</CardTitle>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="text-3xl font-bold">1,247</div>
                  <div className="text-sm opacity-90">Total processed</div>
                </div>
                <div className="flex items-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">99% Success rate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">23 Today</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Parsing Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Parsing Statistics</span>
                  <Button variant="ghost" size="sm">⋯</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Successful</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Pending</span>
                      <span className="text-sm font-medium">1.5%</span>
                    </div>
                    <Progress value={1.5} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Failed</span>
                      <span className="text-sm font-medium">0.5%</span>
                    </div>
                    <Progress value={0.5} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Efficiency */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Processing Efficiency</span>
                  <Button variant="ghost" size="sm">⋯</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">2.3s</div>
                    <div className="text-xs text-muted-foreground">Avg Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24%</div>
                    <div className="text-xs text-muted-foreground">Faster</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12%</div>
                    <div className="text-xs text-muted-foreground">Error Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - Detailed Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Processing Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Processing Analytics</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Monthly</Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockResumes.slice(0, 3).map((resume, index) => (
                    <div key={resume.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{["All Names", "All Names", "All Names"][index]}</div>
                          <div className="text-sm text-muted-foreground">{["F.O.C.A #930", "F.O.C.A #934", "Y.O.C.A #930"][index]}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{["245k", "558k", "412k"][index]}</div>
                        <div className="text-sm text-muted-foreground">Resumes parsed</div>
                      </div>
                      <div className="w-16 h-8 bg-primary/20 rounded"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upload & Processing */}
            <Card>
              <CardHeader>
                <CardTitle>Upload & Process</CardTitle>
                <CardDescription>Upload resumes for AI-powered parsing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <div className="text-sm font-medium mb-1">Drop your resume files here</div>
                  <div className="text-xs text-muted-foreground mb-3">or click to browse</div>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button size="sm" className="cursor-pointer">
                      Choose Files
                    </Button>
                  </label>
                  <div className="text-xs text-muted-foreground mt-2">
                    Supports PDF, DOC, DOCX, TXT files
                  </div>
                </div>

                {isUploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Third Row - Resume Management */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Resumes */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Resumes</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredResumes.map((resume) => (
                    <div key={resume.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{resume.name}</div>
                          <div className="text-sm text-muted-foreground">{resume.position}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{resume.matchScore}% Match</div>
                          <div className="text-xs text-muted-foreground">{resume.uploadDate}</div>
                        </div>
                        <Badge variant={resume.status === 'processed' ? 'default' : 'secondary'}>
                          {resume.status === 'processed' ? 'Processed' : 'Processing'}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileDown className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Bulk Upload
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export All Data
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Parser Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
