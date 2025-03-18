import { useState } from 'react';
import Link from 'next/link';

export default function CollaborationPage() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Collaboration</h1>
          <p className="mt-2 text-sm text-gray-700">
            Work together with your team and clients in real-time
          </p>
        </div>
        <div className="mt-4 flex sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Create Workspace
          </button>
        </div>
      </div>

      {/* Active Workspaces */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Active Workspaces</h3>
          <p className="mt-1 text-sm text-gray-500">
            Collaborative spaces for onboarding projects
          </p>
        </div>
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Workspace 1 */}
            <div className="relative rounded-lg border border-gray-300 bg-white p-6 shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Enterprise Onboarding</h4>
                  <div className="mt-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Active Now
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Collaborative workspace for Acme Corp enterprise client onboarding</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>5 Participants</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Last active: Today at 2:30 PM</span>
                </div>
              </div>
              <div className="mt-4 flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
                  <span className="text-xs font-medium text-gray-500">+1</span>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>

            {/* Workspace 2 */}
            <div className="relative rounded-lg border border-gray-300 bg-white p-6 shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Legal Documents Review</h4>
                  <div className="mt-1 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    In Progress
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Collaboration for contract review and document signing</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>3 Participants</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Last active: Yesterday at 4:15 PM</span>
                </div>
              </div>
              <div className="mt-4 flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <span className="pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>

            {/* Workspace 3 */}
            <div className="relative rounded-lg border border-gray-300 bg-white p-6 shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Project Planning</h4>
                  <div className="mt-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    Active Now
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Team workspace for project kickoff and timeline planning</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>4 Participants</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Last active: Today at 10:45 AM</span>
                </div>
              </div>
              <div className="mt-4 flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <span className="pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Collaboration Demo */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Real-Time Collaboration</h3>
          <p className="mt-1 text-sm text-gray-500">
            Preview of live document editing with real-time cursor tracking
          </p>
        </div>
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="rounded-lg border border-gray-300 p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h4 className="text-sm font-medium text-gray-900">Client Onboarding Agreement.docx</h4>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <span className="text-xs text-gray-500">2 editing now</span>
              </div>
            </div>
            
            <div className="mt-4 p-4 relative">
              <h2 className="text-xl font-bold text-gray-900">Client Onboarding Agreement</h2>
              <p className="mt-4 text-sm text-gray-700">
                This agreement ("Agreement") is entered into as of [Date] by and between OnboardX, Inc. ("Company") and [Client Name] ("Client").
              </p>
              <p className="mt-4 text-sm text-gray-700">
                <strong>1. Services.</strong> Company will provide Client with access to its onboarding platform and professional services as outlined in the attached Statement of Work.
              </p>
              <p className="mt-4 text-sm text-gray-700">
                <strong>2. Term.</strong> This Agreement will commence on the Effective Date and will continue for an initial term of one (1) year, unless terminated earlier in accordance with the provisions herein.
              </p>
              <p className="mt-4 text-sm text-gray-700">
                <strong>3. Fees and Payment.</strong> Client agrees to pay Company the fees as specified in the attached pricing schedule. All fees are due within thirty (30) days of invoice date.
              </p>
              <div className="mt-4 h-6">
                {/* Fake real-time cursors */}
                <div className="absolute left-[120px] top-[140px]">
                  <div className="relative">
                    <div className="absolute h-5 w-0.5 bg-blue-600" />
                    <div className="absolute -top-6 left-0 whitespace-nowrap rounded bg-blue-600 px-2 py-1 text-xs text-white">
                      John Smith
                    </div>
                  </div>
                </div>
                <div className="absolute left-[320px] top-[210px]">
                  <div className="relative">
                    <div className="absolute h-5 w-0.5 bg-purple-600" />
                    <div className="absolute -top-6 left-0 whitespace-nowrap rounded bg-purple-600 px-2 py-1 text-xs text-white">
                      Sarah Robinson
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span>Last edit 5 seconds ago</span>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Team Chat</h3>
          <p className="mt-1 text-sm text-gray-500">
            Real-time messaging with your team and clients
          </p>
        </div>
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="h-80 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 p-4">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">
                      Hi team, I've uploaded the completed documents for review.
                    </span>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full order-1" />
              </div>
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                      Thanks! I'll take a look at them shortly.
                    </span>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full order-2" />
              </div>
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">
                      Can we schedule a quick call to go over the remaining requirements?
                    </span>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full order-1" />
              </div>
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                      Sure, how about tomorrow at 2pm?
                    </span>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full order-2" />
              </div>
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">
                      Sounds good, I'll send a calendar invite.
                    </span>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full order-1" />
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 pt-4 mb-2">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 pr-16 bg-gray-100 rounded-full py-2"
                />
                <div className="absolute right-2 items-center inset-y-0 flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-gray-500 hover:bg-blue-50 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 