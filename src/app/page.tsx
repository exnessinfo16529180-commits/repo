import Link from 'next/link';
import { Button } from '@/components/ui';
import { Card, CardBody, CardHeader } from '@/components/ui';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Welcome to <span className="text-primary-600 dark:text-primary-400">Digital TAU</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              An educational showcase project built with modern web technologies.
              Explore our posts, news, and projects to learn more.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/posts">
                <Button size="lg">Explore Posts</Button>
              </Link>
              <Link href="/news">
                <Button variant="outline" size="lg">Latest News</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Featured Content
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <CardHeader>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Educational Posts
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Discover in-depth articles and tutorials covering various topics in web development,
                  programming, and technology.
                </p>
                <Link href="/posts">
                  <Button variant="ghost" size="sm">Browse Posts →</Button>
                </Link>
              </CardBody>
            </Card>

            <Card hover>
              <CardHeader>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Latest News
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Stay updated with the latest announcements, updates, and news from the
                  Digital TAU community.
                </p>
                <Link href="/news">
                  <Button variant="ghost" size="sm">Read News →</Button>
                </Link>
              </CardBody>
            </Card>

            <Card hover>
              <CardHeader>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Projects Showcase
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Explore real-world projects and examples demonstrating best practices and
                  modern development techniques.
                </p>
                <Link href="/admin">
                  <Button variant="ghost" size="sm">View Projects →</Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Next.js 16', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'NextAuth', 'React 19', 'Docker'].map((tech) => (
              <div key={tech} className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <p className="font-semibold text-slate-900 dark:text-white">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
