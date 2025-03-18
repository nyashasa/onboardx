import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

type OnboardingStatus = "pending" | "in-progress" | "completed" | "rejected";

// Sample data for onboardings
const onboardings = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    workflow: "Employee Onboarding",
    status: "in-progress" as OnboardingStatus,
    progress: 65,
    startDate: "2023-05-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    workflow: "New Client Setup",
    status: "pending" as OnboardingStatus,
    progress: 0,
    startDate: "2023-05-18"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    workflow: "Merchant Verification",
    status: "completed" as OnboardingStatus,
    progress: 100,
    startDate: "2023-05-10"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    workflow: "Employee Onboarding",
    status: "in-progress" as OnboardingStatus,
    progress: 45,
    startDate: "2023-05-16"
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    workflow: "Merchant Verification",
    status: "rejected" as OnboardingStatus,
    progress: 30,
    startDate: "2023-05-12"
  }
]

// Helper function to get the badge styles for status
function getStatusStyles(status: string) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300";
    case "in-progress":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300";
    case "completed":
      return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300";
    case "rejected":
      return "";
    default:
      return "";
  }
}

export default function OnboardingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Onboardings</h1>
          <p className="text-muted-foreground">
            Manage ongoing onboarding processes.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create onboarding
        </Button>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-4">
          A list of all onboarding processes with status and progress.
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead className="w-[250px]">Email</TableHead>
              <TableHead>Workflow</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {onboardings.map((onboarding) => (
              <TableRow key={onboarding.id}>
                <TableCell className="font-medium">{onboarding.name}</TableCell>
                <TableCell>{onboarding.email}</TableCell>
                <TableCell>{onboarding.workflow}</TableCell>
                <TableCell>
                  <Badge 
                    variant={onboarding.status === "rejected" ? "destructive" : "outline"}
                    className={getStatusStyles(onboarding.status)}
                  >
                    {onboarding.status.replace("-", " ")}
                  </Badge>
                </TableCell>
                <TableCell>{onboarding.progress}%</TableCell>
                <TableCell>{new Date(onboarding.startDate).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="link" className="text-primary">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 