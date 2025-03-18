import { notFound } from "next/navigation"
import { 
  ChevronLeft, 
  Download, 
  Share2, 
  Edit, 
  Trash, 
  Clock, 
  FileText,
  User,
  History,
  Eye,
  CheckCircle2,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

// Sample document data
const documentData = {
  id: "doc1",
  name: "Employment Contract - John Smith",
  type: "Contract",
  created: "2023-05-15",
  updated: "2023-05-16",
  status: "final",
  author: "AI Assistant",
  size: "245 KB",
  description: "Standard employment contract for full-time employees with customizations for the Engineering department.",
  metadata: {
    company: "Acme Inc.",
    department: "Engineering",
    position: "Senior Developer",
    employeeName: "John Smith",
    startDate: "2023-06-01"
  },
  versions: [
    { id: "v3", name: "Final version", date: "2023-05-16 14:30", user: "Sarah Johnson" },
    { id: "v2", name: "Revised draft", date: "2023-05-16 10:15", user: "AI Assistant" },
    { id: "v1", name: "Initial draft", date: "2023-05-15 15:45", user: "AI Assistant" }
  ],
  comments: [
    { id: "c1", user: "Sarah Johnson", date: "2023-05-16 11:20", text: "Please update the compensation section as discussed." },
    { id: "c2", user: "AI Assistant", date: "2023-05-16 11:35", text: "Updated the compensation section with the revised figures." },
    { id: "c3", user: "HR Department", date: "2023-05-16 13:45", text: "Approved. Ready for signatures." }
  ],
  content: `
EMPLOYMENT CONTRACT

BETWEEN:
Acme Inc., a corporation incorporated under the laws of [State/Province],
having its principal place of business at [Address]
(hereinafter referred to as the "Employer")

AND:
John Smith, of [Address]
(hereinafter referred to as the "Employee")

WHEREAS the Employer wishes to employ the Employee on the terms and conditions set out in this Agreement;
AND WHEREAS the Employee wishes to accept employment with the Employer on such terms and conditions;

NOW THEREFORE THIS AGREEMENT WITNESSES that in consideration of the mutual covenants and agreements herein contained, and for other good and valuable consideration, the parties agree as follows:

1. POSITION AND DUTIES

1.1 Position: The Employer agrees to employ the Employee as a Senior Developer, and the Employee agrees to be employed in such position.

1.2 Duties: The Employee shall perform the duties and responsibilities of a Senior Developer, including but not limited to:
   (a) Designing, developing, and maintaining software applications;
   (b) Collaborating with cross-functional teams;
   (c) Mentoring junior developers;
   (d) Other duties as may be assigned from time to time.

2. TERM

2.1 Commencement: This employment shall commence on June 1, 2023.
2.2 Term: This Agreement shall be for an indefinite period, subject to termination as provided herein.

3. COMPENSATION AND BENEFITS

3.1 Salary: The Employer shall pay the Employee a base salary of $XXX,XXX per annum, payable in equal installments according to the Employer's regular payroll practices.

3.2 Benefits: The Employee shall be entitled to participate in all benefit plans offered by the Employer to its employees in similar positions, in accordance with the terms of such plans.

3.3 Vacation: The Employee shall be entitled to X weeks of paid vacation per year, to be taken at times mutually agreed upon by the Employer and Employee.

4. CONFIDENTIALITY AND INTELLECTUAL PROPERTY

4.1 Confidential Information: The Employee acknowledges that, in the course of employment with the Employer, the Employee will have access to confidential information relating to the Employer and its business.

4.2 Intellectual Property: All intellectual property developed by the Employee in the course of employment shall be the exclusive property of the Employer.

5. TERMINATION

5.1 Termination by Employee: The Employee may terminate this Agreement by providing the Employer with at least two weeks' written notice.

5.2 Termination by Employer: The Employer may terminate this Agreement:
   (a) Without cause, by providing the Employee with notice or pay in lieu of notice in accordance with applicable employment standards legislation;
   (b) For cause, without notice or pay in lieu of notice.

6. GENERAL PROVISIONS

6.1 Governing Law: This Agreement shall be governed by the laws of [State/Province].
6.2 Entire Agreement: This Agreement constitutes the entire agreement between the parties concerning the employment relationship.

IN WITNESS WHEREOF the parties have executed this Agreement as of the date first above written.

ACME INC.

Per: _________________________
     [Name], [Title]

_________________________
John Smith
`
}

// Helper function to get status badge styling
function getStatusStyles(status: string) {
  switch (status) {
    case "draft":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300";
    case "final":
      return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300";
    default:
      return "";
  }
}

export default function DocumentPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the document data based on the ID
  // For this example, we'll use our mock data
  const document = documentData;
  
  if (!document) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link href="/documents">
          <Button variant="outline" size="icon" className="mr-2">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{document.name}</h1>
          <p className="text-muted-foreground">{document.type} • {document.size}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Document Preview</CardTitle>
                <Badge 
                  variant={document.status === "draft" ? "outline" : "default"}
                  className={getStatusStyles(document.status)}
                >
                  {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                </Badge>
              </div>
              <CardDescription>Last updated on {document.updated}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-md p-6 min-h-[600px] font-mono text-sm whitespace-pre-wrap overflow-auto">
                {document.content}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="comments">
            <TabsList className="grid grid-cols-2 w-full md:w-[400px]">
              <TabsTrigger value="comments">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comments
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="h-4 w-4 mr-2" />
                Version History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="comments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comments</CardTitle>
                  <CardDescription>Discussion and feedback about this document</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {document.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                        <Avatar>
                          <AvatarFallback>{comment.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.user}</span>
                            <span className="text-xs text-muted-foreground">{comment.date}</span>
                          </div>
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Version History</CardTitle>
                  <CardDescription>Track changes and revisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {document.versions.map((version, index) => (
                      <div key={version.id} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {index === 0 ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                          </div>
                          {index < document.versions.length - 1 && (
                            <div className="h-full w-0.5 bg-border" />
                          )}
                        </div>
                        <div className="pb-8">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium">{version.name}</div>
                            {index === 0 && (
                              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{version.date}</div>
                          <div className="text-sm text-muted-foreground">By: {version.user}</div>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Document Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium">Description</div>
                <p className="text-sm text-muted-foreground">{document.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Created</div>
                  <p className="text-sm text-muted-foreground">{document.created}</p>
                </div>
                <div>
                  <div className="text-sm font-medium">Last Modified</div>
                  <p className="text-sm text-muted-foreground">{document.updated}</p>
                </div>
                <div>
                  <div className="text-sm font-medium">Status</div>
                  <Badge 
                    variant={document.status === "draft" ? "outline" : "default"}
                    className={getStatusStyles(document.status)}
                  >
                    {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm font-medium">Author</div>
                  <p className="text-sm text-muted-foreground">{document.author}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Metadata</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(document.metadata).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-sm text-muted-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                Edit Document
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="destructive" className="w-full">
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 