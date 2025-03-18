import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-6">OnboardX Platform</h1>
        <p className="text-xl mb-8">
          A simple, efficient onboarding platform for businesses
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
          <Link href="/workflows">
            <Button variant="outline" size="lg">View Workflows</Button>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-md p-6">
            <h3 className="text-lg font-medium mb-3">Workflow Automation</h3>
            <p>Create and automate your onboarding processes with customizable workflows</p>
          </div>
          <div className="border rounded-md p-6">
            <h3 className="text-lg font-medium mb-3">Document Management</h3>
            <p>Securely store and manage all your onboarding documents in one place</p>
          </div>
          <div className="border rounded-md p-6">
            <h3 className="text-lg font-medium mb-3">AI Integration</h3>
            <p>Use AI to streamline and optimize your onboarding processes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
