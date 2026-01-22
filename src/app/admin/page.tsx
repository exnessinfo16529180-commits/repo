import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/login');
  }

  // Deny access if not admin
  if (session.user.role !== 'ADMIN') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
        <main className="text-center p-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
              Access Denied
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You do not have permission to access this page.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This page is restricted to administrators only.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Show admin page for admin users
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Welcome, {session.user.name || session.user.email}!
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              You have successfully accessed the admin area.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Role: <span className="font-semibold text-green-600 dark:text-green-400">{session.user.role}</span>
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/api/auth/signout"
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
