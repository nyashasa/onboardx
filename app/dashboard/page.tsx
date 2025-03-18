import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  FileCheck,
  ScrollText,
  CircleCheck,
  Download,
  Plus
} from "lucide-react"

// Sample data
const stats = [
  {
    title: "Total Onboardings",
    value: "156",
    change: "+12%",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Active Workflows",
    value: "23",
    change: "+5%",
    icon: <FileCheck className="h-4 w-4" />,
  },
  {
    title: "Documents Processed",
    value: "432",
    change: "-3%",
    icon: <ScrollText className="h-4 w-4" />,
  },
  {
    title: "Completion Rate",
    value: "78%",
    change: "+2%",
    icon: <CircleCheck className="h-4 w-4" />,
  },
]

const recentActivities = [
  {
    id: "act1",
    title: "KYC verification completed",
    client: "Acme Corporation",
    time: "2 hours ago",
  },
  {
    id: "act2",
    title: "Document review request",
    client: "TechStart Inc.",
    time: "5 hours ago",
  },
  {
    id: "act3",
    title: "Workflow approval needed",
    client: "Global Finance Ltd.",
    time: "1 day ago",
  },
]

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Onboarding
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{activity.title}</h3>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Client: {activity.client}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-3">
                <h3 className="font-medium">Document review</h3>
                <p className="text-sm text-muted-foreground">
                  Review compliance documents for TechStart Inc.
                </p>
              </div>
              
              <div className="border rounded-md p-3">
                <h3 className="font-medium">Client onboarding call</h3>
                <p className="text-sm text-muted-foreground">
                  Introductory call with Acme Corporation
                </p>
              </div>
              
              <div className="border rounded-md p-3">
                <h3 className="font-medium">Workflow approval</h3>
                <p className="text-sm text-muted-foreground">
                  Approve new workflow for Global Finance Ltd.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Onboardings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Onboardings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="p-3">Client</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Progress</th>
                  <th className="p-3">Created</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Acme Corporation</td>
                  <td className="p-3">Active</td>
                  <td className="p-3">75%</td>
                  <td className="p-3">2 days ago</td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">TechStart Inc.</td>
                  <td className="p-3">In Progress</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">1 week ago</td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Global Finance Ltd.</td>
                  <td className="p-3">Pending</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">2 weeks ago</td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 