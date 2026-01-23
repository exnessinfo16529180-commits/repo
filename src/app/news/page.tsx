'use client';

import { useState } from 'react';
import { Input, Button, Card, CardBody, CardHeader, Badge } from '@/components/ui';

// Mock data for demonstration
const mockNews = [
  {
    id: '1',
    title: 'Digital TAU Platform Launch Announcement',
    excerpt: 'We are excited to announce the official launch of the Digital TAU educational platform with new features and content.',
    published: true,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'New Course Materials Available',
    excerpt: 'Check out our newly released course materials covering advanced topics in web development and programming.',
    published: true,
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Community Meetup - January 2024',
    excerpt: 'Join us for our monthly community meetup to discuss latest trends and share knowledge with fellow developers.',
    published: true,
    createdAt: '2024-01-13',
  },
];

type ViewMode = 'grid' | 'list';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isLoading, setIsLoading] = useState(false);

  const filteredNews = mockNews.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            News
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Stay updated with the latest announcements and updates
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search news by title or content..."
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

          {/* Filter Categories (Placeholder) */}
          <div className="flex gap-2 flex-wrap">
            <Badge variant="primary">All News</Badge>
            <Badge variant="default">Announcements</Badge>
            <Badge variant="default">Updates</Badge>
            <Badge variant="default">Events</Badge>
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

        {/* News Grid/List */}
        {!isLoading && filteredNews.length > 0 && (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredNews.map((item) => (
              <Card key={item.id} hover>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="success">News</Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" size="sm">Read More →</Button>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredNews.length === 0 && (
          <div className="text-center py-12">
            <Card className="max-w-md mx-auto">
              <CardBody>
                <svg className="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No news found
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Try adjusting your search criteria
                </p>
                <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Pagination Placeholder */}
        {!isLoading && filteredNews.length > 0 && (
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
