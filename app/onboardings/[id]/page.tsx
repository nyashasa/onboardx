import { notFound } from "next/navigation"
import { 
  ChevronLeft, 
  ClipboardCheck, 
  Clock, 
  User2, 
  Building, 
  MailCheck,
  FileText,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

// Mock data for specific onboarding
const onboardingData = {
  id: "1",
  name: "John Smith",
  email: "john.smith@example.com",
  workflow: "Employee Onboarding",
  status: "in-progress",
  progress: 65,
  startDate: "2023-05-15",
  company: "Acme Inc.",
  department: "Engineering",
  position: "Senior Developer",
  manager: "Sarah Johnson",
  documents: [
    { id: "doc1", name: "Employment Contract", status: "completed", date: "2023-05-15" },
    { id: "doc2", name: "NDA Agreement", status: "completed", date: "2023-05-16" },
    { id: "doc3", name: "Equipment Request", status: "pending", date: "-" },
    { id: "doc4", name: "Tax Forms", status: "in-progress", date: "2023-05-18" }
  ],
  tasks: [
    { id: "task1", name: "IT Equipment Setup", assignee: "IT Department", status: "completed", date: "2023-05-16" },
    { id: "task2", name: "Email Account Creation", assignee: "IT Department", status: "completed", date: "2023-05-16" },
    { id: "task3", name: "Access Card Issuance", assignee: "Security", status: "in-progress", date: "2023-05-19" },
    { id: "task4", name: "Payroll Setup", assignee: "Finance", status: "pending", date: "-" },
    { id: "task5", name: "Training Schedule", assignee: "HR", status: "pending", date: "-" }
  ],
  timeline: [
    { id: "event1", action: "Onboarding started", date: "2023-05-15 09:00 AM", user: "Sarah Johnson" },
    { id: "event2", action: "Welcome email sent", date: "2023-05-15 09:15 AM", user: "System" },
    { id: "event3", action: "Documents shared", date: "2023-05-15 10:30 AM", user: "Sarah Johnson" },
    { id: "event4", action: "Employment Contract signed", date: "2023-05-15 02:45 PM", user: "John Smith" },
    { id: "event5", action: "NDA Agreement signed", date: "2023-05-16 11:20 AM", user: "John Smith" },
    { id: "event6", action: "IT Equipment request approved", date: "2023-05-16 03:30 PM", user: "IT Manager" }
  ]
}

// Helper function to get the badge styles for status
function getStatusStyles(status: string) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300";
    case "in-progress":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300";
    case "completed":
      return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300";
    default:
      return "";
  }
}

export default function OnboardingPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the onboarding data based on the ID
  // For this example, we'll use our mock data
  const onboarding = onboardingData;
  
  if (!onboarding) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link href="/onboardings">
          <Button variant="outline" size="icon" className="mr-2">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Onboarding Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Main Info Card */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center justify-between">
              <div className="flex items-center">
                <User2 className="h-5 w-5 mr-2" /> 
                {onboarding.name}
              </div>
              <Badge 
                variant={onboarding.status === "rejected" ? "destructive" : "outline"}
                className={getStatusStyles(onboarding.status)}
              >
                {onboarding.status.replace("-", " ")}
              </Badge>
            </CardTitle>
            <CardDescription>{onboarding.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">{onboarding.progress}%</span>
                </div>
                <Progress value={onboarding.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Workflow</p>
                  <p className="font-medium">{onboarding.workflow}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                  <p className="font-medium">{new Date(onboarding.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Company</p>
                  <p className="font-medium">{onboarding.company}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Department</p>
                  <p className="font-medium">{onboarding.department}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Position</p>
                  <p className="font-medium">{onboarding.position}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Manager</p>
                  <p className="font-medium">{onboarding.manager}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions Card */}
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">Send Email</Button>
            <Button variant="outline" className="w-full">Edit Details</Button>
            <Button variant="outline" className="w-full">Manage Tasks</Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        
        {/* Documents Tab */}
        <TabsContent value="documents" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Documents
              </CardTitle>
              <CardDescription>Documents required for the onboarding process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3 text-left">Document Name</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Completion Date</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onboarding.documents.map((doc) => (
                      <tr key={doc.id} className="border-t">
                        <td className="p-3">{doc.name}</td>
                        <td className="p-3">
                          <Badge 
                            variant={doc.status === "rejected" ? "destructive" : "outline"}
                            className={getStatusStyles(doc.status)}
                          >
                            {doc.status.replace("-", " ")}
                          </Badge>
                        </td>
                        <td className="p-3">{doc.date}</td>
                        <td className="p-3 text-right">
                          <Button variant="link" className="text-primary">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Tasks Tab */}
        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardCheck className="h-5 w-5 mr-2" />
                Tasks
              </CardTitle>
              <CardDescription>Assigned tasks for the onboarding workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3 text-left">Task Name</th>
                      <th className="p-3 text-left">Assignee</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Due Date</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {onboarding.tasks.map((task) => (
                      <tr key={task.id} className="border-t">
                        <td className="p-3">{task.name}</td>
                        <td className="p-3">{task.assignee}</td>
                        <td className="p-3">
                          <Badge 
                            variant={task.status === "rejected" ? "destructive" : "outline"}
                            className={getStatusStyles(task.status)}
                          >
                            {task.status.replace("-", " ")}
                          </Badge>
                        </td>
                        <td className="p-3">{task.date}</td>
                        <td className="p-3 text-right">
                          <Button variant="link" className="text-primary">Manage</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Timeline Tab */}
        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Timeline
              </CardTitle>
              <CardDescription>Chronological history of the onboarding process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {onboarding.timeline.map((event, index) => (
                  <div key={event.id} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {index + 1}
                      </div>
                      {index < onboarding.timeline.length - 1 && (
                        <div className="h-full w-0.5 bg-border" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="text-sm font-medium">{event.action}</div>
                      <div className="text-sm text-muted-foreground">{event.date}</div>
                      <div className="text-sm text-muted-foreground">By: {event.user}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 