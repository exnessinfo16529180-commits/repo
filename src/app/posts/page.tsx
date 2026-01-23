"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";

// Sample posts data
const posts = [
  {
    id: 1,
    title: "Digital TAU: Vision and Mission",
    description: "Learn about our vision for digital education and innovation at TAU University.",
    date: "2024-01-15",
    category: "Education",
    tags: ["university", "education", "innovation"],
  },
  {
    id: 2,
    title: "Modern Web Technologies Course",
    description: "Exploring React, Next.js, and modern web development practices.",
    date: "2024-01-20",
    category: "Technology",
    tags: ["web", "react", "nextjs"],
  },
  {
    id: 3,
    title: "Student Projects Showcase",
    description: "Highlighting exceptional student projects from the current semester.",
    date: "2024-01-25",
    category: "Projects",
    tags: ["students", "projects", "showcase"],
  },
];

export default function PostsPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">
            {getTranslation(language, "nav.projects")}
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto animate-fadeInUp">
            Explore our latest articles, insights, and educational content
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-card border-tau-burgundy/20 hover:border-tau-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-tau-burgundy/10 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-tau-burgundy text-white">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-foreground/40">{post.date}</span>
                </div>
                <CardTitle className="text-xl text-foreground hover:text-tau-gold transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-foreground/60">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-tau-burgundy/30 text-tau-gold"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
