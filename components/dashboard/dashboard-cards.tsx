import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
}

export function DashboardCard({ title, value, description, icon }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function DashboardCards() {
  const cards = [
    {
      title: "Active Onboardings",
      value: "12",
      icon: <Users className="h-4 w-4" />,
      description: "5 completed this week"
    },
    {
      title: "Completed This Month",
      value: "24",
      icon: <Activity className="h-4 w-4" />,
      description: "+8% from last month"
    },
    {
      title: "Total Workflows",
      value: "8",
      icon: <CreditCard className="h-4 w-4" />,
      description: "2 recently added"
    },
    {
      title: "Completion Rate",
      value: "92%",
      icon: <DollarSign className="h-4 w-4" />,
      description: "+4% from last quarter"
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          description={card.description}
        />
      ))}
    </div>
  );
} 