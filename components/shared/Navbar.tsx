import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  return (
    <header
      className={cn(
        'w-full py-4 px-4 sm:px-6 lg:px-8',
        transparent ? 'absolute top-0 z-10' : 'bg-white border-b'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            OnboardX
          </Link>
        </div>

        <nav className="hidden md:flex space-x-10">
          <Link href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Features
          </Link>
          <Link href="#pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/auth/login"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Log in
          </Link>
          <Link
            href="/auth/signup"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
} 