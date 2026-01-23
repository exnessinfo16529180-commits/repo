'use client';

import { useState } from 'react';
import { Input, Button, Card, CardBody, CardHeader, Badge } from '@/components/ui';

// Mock data for demonstration
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 16',
    excerpt: 'Learn the fundamentals of Next.js and build your first application with the App Router.',
    tags: ['Next.js', 'React', 'Tutorial'],
    published: true,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    excerpt: 'Discover essential TypeScript patterns and practices for building robust applications.',
    tags: ['TypeScript', 'Best Practices'],
    published: true,
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to styling modern web applications with Tailwind CSS.',
    tags: ['CSS', 'Tailwind', 'Design'],
    published: true,
    createdAt: '2024-01-13',
  },
];

type ViewMode = 'grid' | 'list';

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isLoading, setIsLoading] = useState(false);

  const filteredPosts = mockPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Posts
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore our collection of educational articles and tutorials
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search posts by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'outline'}
                onClick={() => setViewMode('grid')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'outline'}
                onClick={() => setViewMode('list')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Filter Tags (Placeholder) */}
          <div className="flex gap-2 flex-wrap">
            <Badge variant="primary">All Posts</Badge>
            <Badge variant="default">Next.js</Badge>
            <Badge variant="default">TypeScript</Badge>
            <Badge variant="default">Tutorial</Badge>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <Card>
                  <CardHeader>
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Posts Grid/List */}
        {!isLoading && filteredPosts.length > 0 && (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredPosts.map((post) => (
              <Card key={post.id} hover>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {post.title}
                  </h3>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="primary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Button variant="ghost" size="sm">Read More →</Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Card className="max-w-md mx-auto">
              <CardBody>
                <svg className="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No posts found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Pagination Placeholder */}
        {!isLoading && filteredPosts.length > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="primary">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        )}
      </div>
    </div>
  );
}
