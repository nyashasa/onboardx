"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Chat } from '@/components/ai/chat';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, FileText } from "lucide-react"

export default function AICopilotPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Copilot</h1>
      </div>

      <Tabs defaultValue="assistant" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="assistant">Assistant</TabsTrigger>
          <TabsTrigger value="document">Document Analysis</TabsTrigger>
          <TabsTrigger value="workflow">Workflow Builder</TabsTrigger>
        </TabsList>
        
        <TabsContent value="assistant">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <Chat />
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <p className="font-medium">Create an onboarding workflow</p>
                      <p className="text-sm text-muted-foreground">Help me create a workflow for new client onboarding</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <p className="font-medium">Help with documents</p>
                      <p className="text-sm text-muted-foreground">What documents do I need for financial services KYC?</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <p className="font-medium">Automate steps</p>
                      <p className="text-sm text-muted-foreground">How can I automate document approval steps?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="document">
          <Card>
            <CardHeader>
              <CardTitle>Document Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-dashed rounded-md p-6 text-center">
                <FileUp className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload a Document</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop a document, or click to browse your files
                </p>
                <Button>Browse Files</Button>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Recent Documents</h3>
                <div className="space-y-3">
                  <div className="border rounded-md p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3" />
                      <div>
                        <p className="font-medium">client-agreement.pdf</p>
                        <p className="text-sm text-muted-foreground">Uploaded 2 days ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Analyze</Button>
                  </div>
                  <div className="border rounded-md p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3" />
                      <div>
                        <p className="font-medium">financial-statement.pdf</p>
                        <p className="text-sm text-muted-foreground">Uploaded 5 days ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Analyze</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workflow">
          <Card>
            <CardHeader>
              <CardTitle>AI Workflow Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-md p-6">
                  <h3 className="text-lg font-medium mb-2">Generate Workflow</h3>
                  <p className="text-muted-foreground mb-4">
                    Let AI create a workflow based on your requirements
                  </p>
                  <Link href="/workflows/ai-generate">
                    <Button className="w-full">Generate New Workflow</Button>
                  </Link>
                </div>
                
                <div className="border rounded-md p-6">
                  <h3 className="text-lg font-medium mb-2">Optimize Existing</h3>
                  <p className="text-muted-foreground mb-4">
                    Improve your existing workflows with AI
                  </p>
                  <Link href="/workflows/ai-optimize">
                    <Button variant="outline" className="w-full">Optimize Workflow</Button>
                  </Link>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-4">AI Generated Workflows</h3>
              <div className="space-y-3">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">Financial Services Onboarding</h4>
                  <p className="text-sm text-muted-foreground mb-3">15 steps • Generated 3 days ago</p>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">View</Button>
                    <Button size="sm">Use Template</Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">Healthcare Provider Setup</h4>
                  <p className="text-sm text-muted-foreground mb-3">12 steps • Generated 1 week ago</p>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">View</Button>
                    <Button size="sm">Use Template</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 