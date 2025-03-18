import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Calendar, 
  Users, 
  FileText, 
  CheckCircle2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track onboarding metrics and performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard
          title="Total Onboardings"
          value="156"
          change="+12.3%"
          trend="up"
          icon={<Users className="h-4 w-4" />}
          description="vs. previous period"
        />
        <MetricCard
          title="Completion Rate"
          value="87.5%"
          change="+5.2%"
          trend="up"
          icon={<CheckCircle2 className="h-4 w-4" />}
          description="vs. previous period"
        />
        <MetricCard
          title="Avg. Completion Time"
          value="14.2 days"
          change="-2.5 days"
          trend="up"
          icon={<Calendar className="h-4 w-4" />}
          description="vs. previous period"
        />
        <MetricCard
          title="Documents Processed"
          value="428"
          change="-3.1%"
          trend="down"
          icon={<FileText className="h-4 w-4" />}
          description="vs. previous period"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="onboardings">Onboardings</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-base">Onboarding Activity</CardTitle>
                  <CardDescription>
                    Onboarding starts vs completions
                  </CardDescription>
                </div>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                    <div>Chart visualization</div>
                    <div className="text-xs">(This is a placeholder)</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center justify-between px-2 py-1 rounded-md bg-muted/50">
                    <span>Started</span>
                    <span className="font-medium">156</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 rounded-md bg-muted/50">
                    <span>Completed</span>
                    <span className="font-medium">124</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 rounded-md bg-muted/50">
                    <span>In Progress</span>
                    <span className="font-medium">28</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1 rounded-md bg-muted/50">
                    <span>Delayed</span>
                    <span className="font-medium">4</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-base">Onboarding by Department</CardTitle>
                  <CardDescription>
                    Distribution across departments
                  </CardDescription>
                </div>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <PieChart className="h-8 w-8 mx-auto mb-2" />
                    <div>Chart visualization</div>
                    <div className="text-xs">(This is a placeholder)</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="grid grid-cols-3 text-sm">
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <span>Engineering</span>
                    </div>
                    <div className="text-right font-medium">42%</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                      <span>Sales</span>
                    </div>
                    <div className="text-right font-medium">28%</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span>Marketing</span>
                    </div>
                    <div className="text-right font-medium">18%</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <span>Other</span>
                    </div>
                    <div className="text-right font-medium">12%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-base">Monthly Onboarding Trend</CardTitle>
                <CardDescription>
                  Onboarding activity over time
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-3 w-3 mr-1" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <LineChart className="h-8 w-8 mx-auto mb-2" />
                  <div>Chart visualization</div>
                  <div className="text-xs">(This is a placeholder)</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Monthly trends show a consistent increase in onboarding activity, with peak periods in Q1 and Q3. The average completion time has decreased by 2.5 days compared to the previous period.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="onboardings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Onboarding Metrics</CardTitle>
              <CardDescription>
                Detailed analytics for onboarding processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground text-center py-8">
                This is a placeholder for the Onboardings tab content.
                In a real implementation, this would show detailed analytics about onboarding processes.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workflows" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Analytics</CardTitle>
              <CardDescription>
                Performance metrics for different workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground text-center py-8">
                This is a placeholder for the Workflows tab content.
                In a real implementation, this would show analytics about workflow performance.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Statistics</CardTitle>
              <CardDescription>
                Analytics for document processing and completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground text-center py-8">
                This is a placeholder for the Documents tab content.
                In a real implementation, this would show analytics about document processing.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: React.ReactNode
  description: string
}

function MetricCard({ title, value, change, trend, icon, description }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          <span className={`inline-flex items-center font-medium ${
            trend === "up" 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400"
          }`}>
            {trend === "up" ? (
              <ArrowUpRight className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDownRight className="h-3 w-3 mr-1" />
            )}
            {change}
          </span>
          {" "}
          <span>{description}</span>
        </p>
      </CardContent>
    </Card>
  )
} 