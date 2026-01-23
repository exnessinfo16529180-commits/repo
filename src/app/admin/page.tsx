import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Card, CardBody, CardHeader, Badge } from '@/components/ui';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Stats data (placeholder)
  const stats = [
    { label: 'Total Posts', value: '12', color: 'primary' },
    { label: 'Total News', value: '8', color: 'success' },
    { label: 'Total Projects', value: '5', color: 'warning' },
    { label: 'Total Users', value: '3', color: 'danger' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Welcome back, {session?.user.name || session?.user.email}!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <Badge variant={stat.color as any} className="text-lg px-3 py-1">
                  {stat.color === 'primary' && '📝'}
                  {stat.color === 'success' && '📰'}
                  {stat.color === 'warning' && '🚀'}
                  {stat.color === 'danger' && '👥'}
                </Badge>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Recent Activity
          </h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Badge variant="primary">Post</Badge>
              <div className="flex-1">
                <p className="text-slate-900 dark:text-white font-medium">
                  New post published: "Getting Started with Next.js"
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  2 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Badge variant="success">News</Badge>
              <div className="flex-1">
                <p className="text-slate-900 dark:text-white font-medium">
                  News item created: "Platform Update"
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  5 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Badge variant="warning">Project</Badge>
              <div className="flex-1">
                <p className="text-slate-900 dark:text-white font-medium">
                  Project updated: "Digital TAU Showcase"
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  1 day ago
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
