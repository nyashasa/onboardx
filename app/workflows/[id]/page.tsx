import Link from 'next/link';

export default function WorkflowDetailPage({ params }: { params: { id: string } }) {
  // Mock data for this workflow
  const workflow = {
    id: params.id,
    name: 'Employee Onboarding',
    description: 'Standard onboarding process for new employees',
    active: true,
    steps: [
      {
        id: '1',
        name: 'Personal Information',
        type: 'form',
        description: 'Basic personal details',
        required: true,
      },
      {
        id: '2',
        name: 'Upload ID Document',
        type: 'document',
        description: 'For verification purposes',
        required: true,
      },
      {
        id: '3',
        name: 'HR Approval',
        type: 'approval',
        description: 'HR team needs to approve the application',
        required: true,
      },
    ],
    createdAt: '2023-04-10',
    updatedAt: '2023-05-15',
    activeOnboardings: 12,
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{workflow.name}</h1>
          <p className="mt-2 text-sm text-gray-700">{workflow.description}</p>
        </div>
        <div className="mt-4 flex space-x-3 sm:mt-0">
          <Link
            href={`/workflows/builder/${workflow.id}`}
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Edit Workflow
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            {workflow.active ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      </div>

      {/* Workflow Summary */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Workflow Details</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Overview of this workflow process.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${workflow.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {workflow.active ? 'Active' : 'Inactive'}
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Created</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{workflow.createdAt}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{workflow.updatedAt}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Active Onboardings</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{workflow.activeOnboardings}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Steps</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{workflow.steps.length}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Workflow Steps</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Onboarding process sequence.</p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {workflow.steps.map((step, index) => (
              <li key={step.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{step.name}</p>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      {
                        'form': 'bg-blue-100 text-blue-800',
                        'document': 'bg-green-100 text-green-800',
                        'approval': 'bg-purple-100 text-purple-800',
                      }[step.type]
                    }`}>
                      {step.type.charAt(0).toUpperCase() + step.type.slice(1)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{step.required ? 'Required' : 'Optional'}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3">
        <Link 
          href="/workflows"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Back to Workflows
        </Link>
        <Link
          href={`/onboardings/new?workflow=${workflow.id}`}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start New Onboarding
        </Link>
      </div>
    </div>
  );
} 