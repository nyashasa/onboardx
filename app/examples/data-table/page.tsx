"use client"

import { useState } from "react"
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type User = {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
  dateJoined: string
}

const initialUsers: User[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    dateJoined: "2023-01-15"
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
    dateJoined: "2023-02-20"
  },
  {
    id: "u3",
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "Manager",
    status: "active",
    dateJoined: "2023-03-10"
  },
  {
    id: "u4",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "User",
    status: "inactive",
    dateJoined: "2023-04-05"
  },
  {
    id: "u5",
    name: "Michael Wilson",
    email: "michael@example.com",
    role: "Developer",
    status: "active",
    dateJoined: "2023-05-18"
  },
  {
    id: "u6",
    name: "Sarah Brown",
    email: "sarah@example.com",
    role: "Designer",
    status: "active",
    dateJoined: "2023-06-22"
  },
  {
    id: "u7",
    name: "David Lee",
    email: "david@example.com",
    role: "User",
    status: "inactive",
    dateJoined: "2023-07-14"
  }
]

export default function DataTablePage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-foreground mb-6">Data Table Example</h1>
      <p className="text-muted-foreground mb-8">
        This page demonstrates how to use the Table component from shadcn/ui to create data tables.
      </p>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            id="search"
            placeholder="Search users..."
            className="w-[250px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>Add User</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableCaption>A list of users in the system.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(user.dateJoined).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-12 space-y-4 p-6 border border-border rounded-lg bg-card">
        <h2 className="text-xl font-semibold text-foreground">Implementing Tables</h2>
        <p className="text-muted-foreground">
          To implement a table in your application:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Import the Table components from <code className="bg-muted text-foreground p-1 rounded">@/components/ui/table</code></li>
          <li>Use the Table component as a wrapper for your table</li>
          <li>Use TableHeader, TableRow, and TableHead for the table header</li>
          <li>Use TableBody and TableRow for the table body</li>
          <li>Use TableCell for table cells</li>
          <li>Optionally add TableCaption for a description of the table</li>
        </ol>
        <div className="mt-4 bg-muted p-4 rounded-md">
          <pre className="text-sm text-foreground">
{`<Table>
  <TableCaption>Table Caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          </pre>
        </div>
      </div>
    </div>
  )
} 