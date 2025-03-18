"use client"

import { useState } from "react"
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogTitle, 
  DialogDescription,
  DialogHeader,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ModalExamplePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    // In a real app, you would send the data to your API
    console.log("Submitted:", { name, email })
    setIsOpen(false)
    // Reset form
    setName("")
    setEmail("")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-foreground mb-6">Modal Example</h1>
      <p className="text-muted-foreground mb-8">
        This page demonstrates how to use the Dialog component from shadcn/ui to create modal dialogs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Basic Dialog</h2>
          <p className="text-muted-foreground">
            A simple dialog with a title, description, and close button.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Basic Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Basic Dialog</DialogTitle>
                <DialogDescription>
                  This is a basic dialog with a title and description.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-foreground">
                  Modal dialogs are used to display important information that requires 
                  user attention or interaction before they can continue.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Form Dialog</h2>
          <p className="text-muted-foreground">
            A dialog with a form that can be submitted.
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>Open Form Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Subscribe to Newsletter</DialogTitle>
                <DialogDescription>
                  Fill out the form below to subscribe to our newsletter.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="col-span-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Your email"
                    className="col-span-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>Subscribe</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-12 space-y-4 p-6 border border-border rounded-lg bg-card">
        <h2 className="text-xl font-semibold text-foreground">Implementing Dialogs</h2>
        <p className="text-muted-foreground">
          To implement a dialog in your application:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Import the Dialog components from <code className="bg-muted text-foreground p-1 rounded">@/components/ui/dialog</code></li>
          <li>Use the Dialog component as a wrapper for your modal content</li>
          <li>Use DialogTrigger to create a button that opens the dialog</li>
          <li>Use DialogContent to contain the dialog's contents</li>
          <li>Add DialogHeader, DialogTitle, and DialogDescription for structure</li>
          <li>Optionally add DialogFooter for action buttons</li>
        </ol>
        <div className="mt-4 bg-muted p-4 rounded-md">
          <pre className="text-sm text-foreground">
{`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <div>Your content here</div>
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          </pre>
        </div>
      </div>
    </div>
  )
} 