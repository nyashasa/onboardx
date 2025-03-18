import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-foreground mb-6">shadcn/ui Examples</h1>
      <p className="text-muted-foreground mb-8">
        This page showcases different examples of shadcn/ui components used throughout the application.
        Click on any card to explore the specific example.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Forms Example */}
        <Card>
          <CardHeader>
            <CardTitle>Forms</CardTitle>
            <CardDescription>
              Examples of form components with validation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Demonstrates form fields, validation, and submission using
              shadcn/ui Form components and react-hook-form.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button className="w-full">View Form Example</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Modals Example */}
        <Card>
          <CardHeader>
            <CardTitle>Modals</CardTitle>
            <CardDescription>
              Dialog and modal component examples
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Shows different types of modals and dialogs for various use cases
              using the shadcn/ui Dialog component.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/examples/modal-example" className="w-full">
              <Button className="w-full">View Modal Examples</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Tables Example */}
        <Card>
          <CardHeader>
            <CardTitle>Data Tables</CardTitle>
            <CardDescription>
              Table components for displaying data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Shows how to build data tables with filtering, actions, and
              styling using shadcn/ui Table components.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/examples/data-table" className="w-full">
              <Button className="w-full">View Table Examples</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Navigation Example */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation</CardTitle>
            <CardDescription>
              Navigation menu components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The header at the top of each page demonstrates the NavigationMenu 
              component from shadcn/ui.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              See Header Above
            </Button>
          </CardFooter>
        </Card>

        {/* AI Chat Example */}
        <Card>
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
            <CardDescription>
              AI chat interface with shadcn/ui styling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The AI Copilot page features a chat interface styled with shadcn/ui
              components for a consistent look and feel.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/ai-copilot" className="w-full">
              <Button className="w-full">View AI Chat</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Dashboard Example */}
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>
              Dashboard interface with shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The dashboard page showcases cards, charts, and other components 
              from shadcn/ui in a practical application.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">View Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 space-y-4 p-6 border border-border rounded-lg bg-card">
        <h2 className="text-xl font-semibold text-foreground">About shadcn/ui</h2>
        <p className="text-muted-foreground">
          shadcn/ui is a collection of reusable components built with Radix UI and Tailwind CSS.
          It provides a set of accessible, customizable components that you can use in your projects.
        </p>
        <p className="text-muted-foreground">
          Key features:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
          <li>Built with Radix UI and Tailwind CSS</li>
          <li>Fully accessible components</li>
          <li>Dark mode support</li>
          <li>Customizable components</li>
          <li>Copy and paste into your project</li>
        </ul>
        <div className="mt-4">
          <a 
            href="https://ui.shadcn.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Learn more about shadcn/ui →
          </a>
        </div>
      </div>
    </div>
  )
} 