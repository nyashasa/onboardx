import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Download,
  FileText
} from "lucide-react"

// Sample workflows data
const workflows = [
  {
    id: "wf1",
    name: "Client Onboarding - Financial Services",
    category: "Finance",
    steps: 12,
    active: 8,
    completed: 24,
    lastModified: "2 days ago",
  },
  {
    id: "wf2",
    name: "KYC Verification Process",
    category: "Compliance",
    steps: 8,
    active: 15,
    completed: 42,
    lastModified: "5 days ago",
  },
  {
    id: "wf3",
    name: "Document Verification & Approval",
    category: "Legal",
    steps: 6,
    active: 4,
    completed: 18,
    lastModified: "1 week ago",
  },
  {
    id: "wf4",
    name: "New Employee Onboarding",
    category: "HR",
    steps: 15,
    active: 7,
    completed: 31,
    lastModified: "2 weeks ago",
  },
]

// Sample templates data
const templates = [
  {
    id: "tmp1",
    name: "Standard Client Onboarding",
    category: "Finance",
    steps: 10,
    industry: "General",
    lastModified: "3 weeks ago",
  },
  {
    id: "tmp2",
    name: "Financial Services KYC",
    category: "Compliance",
    steps: 8,
    industry: "Banking",
    lastModified: "1 month ago",
  },
  {
    id: "tmp3",
    name: "Healthcare Provider Setup",
    category: "Healthcare",
    steps: 12,
    industry: "Medical",
    lastModified: "2 months ago",
  },
]

export default function WorkflowsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Workflows</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Workflow
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Active Workflows</CardTitle>
                <div className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search workflows..."
                    className="w-[200px]"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted text-left">
                      <th className="p-3">Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Steps</th>
                      <th className="p-3">Active Uses</th>
                      <th className="p-3">Completed</th>
                      <th className="p-3">Last Modified</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workflows.map((workflow) => (
                      <tr key={workflow.id} className="border-t">
                        <td className="p-3 font-medium">{workflow.name}</td>
                        <td className="p-3">{workflow.category}</td>
                        <td className="p-3">{workflow.steps}</td>
                        <td className="p-3">{workflow.active}</td>
                        <td className="p-3">{workflow.completed}</td>
                        <td className="p-3">{workflow.lastModified}</td>
                        <td className="p-3 text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Workflow Templates</CardTitle>
                <Input
                  type="search"
                  placeholder="Search templates..."
                  className="w-[200px]"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted text-left">
                      <th className="p-3">Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Steps</th>
                      <th className="p-3">Industry</th>
                      <th className="p-3">Last Modified</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates.map((template) => (
                      <tr key={template.id} className="border-t">
                        <td className="p-3 font-medium">{template.name}</td>
                        <td className="p-3">{template.category}</td>
                        <td className="p-3">{template.steps}</td>
                        <td className="p-3">{template.industry}</td>
                        <td className="p-3">{template.lastModified}</td>
                        <td className="p-3 text-right">
                          <Button size="sm">Use Template</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle>Archived Workflows</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-12">
              <FileText className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No Archived Workflows</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                You haven't archived any workflows yet.
              </p>
              <Button variant="outline">View Active Workflows</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 