import { useState } from 'react';
import Link from 'next/link';

export default function WorkflowBuilderPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workflow Builder</h1>
          <p className="mt-2 text-sm text-gray-700">
            Design your onboarding workflow with drag-and-drop steps
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href={`/workflows/${params.id}`}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Workflow
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sidebar with available step types */}
        <div className="space-y-6 lg:col-span-1">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Available Steps</h3>
              <p className="mt-1 text-sm text-gray-500">Drag these steps to the workflow canvas</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                <div className="cursor-grab rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Form Step</h4>
                      <p className="text-xs text-gray-500">Collect information from users</p>
                    </div>
                  </div>
                </div>

                <div className="cursor-grab rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-100 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Document Upload</h4>
                      <p className="text-xs text-gray-500">Request file uploads</p>
                    </div>
                  </div>
                </div>

                <div className="cursor-grab rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-100 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Approval Step</h4>
                      <p className="text-xs text-gray-500">Require manual approval</p>
                    </div>
                  </div>
                </div>

                <div className="cursor-grab rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">API Integration</h4>
                      <p className="text-xs text-gray-500">Connect to external services</p>
                    </div>
                  </div>
                </div>

                <div className="cursor-grab rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-100 text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Conditional Logic</h4>
                      <p className="text-xs text-gray-500">Branch based on conditions</p>
                    </div>
                  </div>
                </div>

                <div className="cursor-grab rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-indigo-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Messaging</h4>
                      <p className="text-xs text-gray-500">Send notifications or messages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Canvas */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Workflow Canvas</h3>
              <p className="mt-1 text-sm text-gray-500">Drop steps here to build your workflow</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-medium text-gray-900">Start</div>
                <div className="mt-1 h-16 w-0.5 bg-gray-300"></div>

                {/* Example workflow steps */}
                <div className="w-full max-w-md rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Personal Information</h4>
                        <p className="text-xs text-gray-500">Basic details form</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button type="button" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button type="button" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-1 h-16 w-0.5 bg-gray-300"></div>

                <div className="w-full max-w-md rounded-md border border-gray-300 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-green-100 text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Upload ID Document</h4>
                        <p className="text-xs text-gray-500">For verification</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button type="button" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button type="button" className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-1 h-16 w-0.5 bg-gray-300"></div>

                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-medium text-gray-900">Complete</div>
              </div>

              {/* Empty state for workflow canvas */}
              <div className="mt-6 hidden items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-12">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No steps added</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by dragging a step from the sidebar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Configuration Panel */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Configure Step: Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500">Customize this step's settings</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="step-title" className="block text-sm font-medium text-gray-700">Step Title</label>
              <input
                type="text"
                name="step-title"
                id="step-title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="Personal Information"
              />
            </div>
            <div>
              <label htmlFor="step-description" className="block text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                name="step-description"
                id="step-description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                defaultValue="Basic details form"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fields" className="block text-sm font-medium text-gray-700">Form Fields</label>
              <div className="mt-1 space-y-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    name="field-1"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    defaultValue="Full Name"
                    placeholder="Field name"
                  />
                  <select
                    name="field-1-type"
                    className="ml-3 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option>Text</option>
                    <option>Email</option>
                    <option>Number</option>
                    <option>Date</option>
                    <option>Select</option>
                  </select>
                  <button
                    type="button"
                    className="ml-3 rounded-md border border-gray-300 bg-white p-1 text-gray-400 hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="field-2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    defaultValue="Email Address"
                    placeholder="Field name"
                  />
                  <select
                    name="field-2-type"
                    className="ml-3 block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option>Text</option>
                    <option selected>Email</option>
                    <option>Number</option>
                    <option>Date</option>
                    <option>Select</option>
                  </select>
                  <button
                    type="button"
                    className="ml-3 rounded-md border border-gray-300 bg-white p-1 text-gray-400 hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Field
                </button>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="required" className="block text-sm font-medium text-gray-700">Options</label>
              <div className="mt-2 space-y-4">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="required"
                      name="required"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="required" className="font-medium text-gray-700">Required</label>
                    <p className="text-gray-500">This step must be completed to proceed</p>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="skippable"
                      name="skippable"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="skippable" className="font-medium text-gray-700">Skippable</label>
                    <p className="text-gray-500">Allow users to skip this step</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 