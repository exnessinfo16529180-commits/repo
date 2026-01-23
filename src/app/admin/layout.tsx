import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/login');
  }

  // Redirect to home if not admin
  if (session.user.role !== 'ADMIN') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Admin Panel
            </h2>
            <nav className="space-y-2">
              <Link
                href="/admin"
                className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/posts"
                className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Posts
              </Link>
              <Link
                href="/admin/news"
                className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                News
              </Link>
              <Link
                href="/admin/projects"
                className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/admin/users"
                className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Users
              </Link>
            </nav>
          </div>
          <div className="absolute bottom-0 w-64 p-6 border-t border-slate-200 dark:border-slate-700">
            <div className="mb-4">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Signed in as
              </p>
              <p className="font-medium text-slate-900 dark:text-white truncate">
                {session.user.name || session.user.email}
              </p>
            </div>
            <Link
              href="/"
              className="block text-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
