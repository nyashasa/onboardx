import { Search, Plus, FileText, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample document data
const documents = [
  {
    id: "doc1",
    name: "Employment Contract - John Smith",
    type: "Contract",
    created: "2023-05-15",
    status: "final",
    author: "AI Assistant",
    size: "245 KB",
  },
  {
    id: "doc2",
    name: "NDA Agreement - Acme Corp",
    type: "Legal",
    created: "2023-05-16",
    status: "draft",
    author: "Sarah Johnson",
    size: "198 KB",
  },
  {
    id: "doc3",
    name: "Project Proposal - New Website",
    type: "Proposal",
    created: "2023-05-18",
    status: "final",
    author: "AI Assistant",
    size: "1.2 MB",
  },
  {
    id: "doc4",
    name: "Equipment Request Form - Engineering",
    type: "Form",
    created: "2023-05-20",
    status: "draft",
    author: "AI Assistant",
    size: "87 KB",
  },
  {
    id: "doc5",
    name: "Onboarding Checklist - New Hire",
    type: "Checklist",
    created: "2023-05-22",
    status: "final",
    author: "HR Department",
    size: "125 KB",
  },
  {
    id: "doc6",
    name: "Project Timeline - Q3 Goals",
    type: "Planning",
    created: "2023-05-25",
    status: "draft",
    author: "AI Assistant",
    size: "310 KB",
  },
  {
    id: "doc7",
    name: "Client Onboarding - TechSolutions Inc",
    type: "Workflow",
    created: "2023-05-27",
    status: "final",
    author: "Sales Team",
    size: "420 KB",
  },
]

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

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Documents</h1>
          <p className="text-muted-foreground">Manage AI-generated documents and templates</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">All Documents</CardTitle>
            <CardDescription>Total documents in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{documents.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">AI Generated</CardTitle>
            <CardDescription>Documents created by AI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {documents.filter(doc => doc.author === "AI Assistant").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Finalized</CardTitle>
            <CardDescription>Documents marked as final</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {documents.filter(doc => doc.status === "final").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Draft</CardTitle>
            <CardDescription>Documents in draft state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {documents.filter(doc => doc.status === "draft").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="w-full pl-8"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
              <SelectItem value="form">Form</SelectItem>
              <SelectItem value="checklist">Checklist</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                      {doc.name}
                    </div>
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.created}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={doc.status === "draft" ? "outline" : "default"}
                      className={getStatusStyles(doc.status)}
                    >
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{doc.author}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 