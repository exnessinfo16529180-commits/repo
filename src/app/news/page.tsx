"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";
import { getTranslation } from "@/lib/i18n";
import { Calendar, User } from "lucide-react";

// Sample news data
const news = [
  {
    id: 1,
    title: "TAU University Opens New Digital Lab",
    description: "State-of-the-art digital laboratory equipped with latest technology opens for student use.",
    date: "2024-01-28",
    author: "TAU News Team",
    category: "Campus News",
    featured: true,
  },
  {
    id: 2,
    title: "International Conference on Digital Education",
    description: "TAU to host international conference bringing together educators and tech leaders.",
    date: "2024-01-26",
    author: "Events Department",
    category: "Events",
    featured: true,
  },
  {
    id: 3,
    title: "Student Team Wins National Hackathon",
    description: "TAU students secure first place in national coding competition with innovative solution.",
    date: "2024-01-24",
    author: "Student Affairs",
    category: "Achievements",
    featured: false,
  },
  {
    id: 4,
    title: "New Partnership with Tech Industry Leaders",
    description: "TAU announces strategic partnerships to enhance student career opportunities.",
    date: "2024-01-22",
    author: "Partnership Office",
    category: "Partnership",
    featured: false,
  },
];

export default function NewsPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp">
            Latest News
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto animate-fadeInUp">
            Stay updated with the latest news and announcements from TAU University
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-tau-gold mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news
              .filter((item) => item.featured)
              .map((item, index) => (
                <Card
                  key={item.id}
                  className="bg-card border-tau-burgundy/20 hover:border-tau-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-tau-burgundy/10 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <Badge className="bg-tau-burgundy text-white w-fit mb-2">
                      {item.category}
                    </Badge>
                    <CardTitle className="text-2xl text-foreground hover:text-tau-gold transition-colors cursor-pointer">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/60 text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-foreground/40">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {item.author}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Recent News */}
        <div>
          <h2 className="text-2xl font-bold text-tau-gold mb-6">Recent Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news
              .filter((item) => !item.featured)
              .map((item, index) => (
                <Card
                  key={item.id}
                  className="bg-card border-tau-burgundy/20 hover:border-tau-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-tau-burgundy/10 animate-fadeInUp"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <CardHeader>
                    <Badge className="bg-tau-burgundy/80 text-white w-fit mb-2">
                      {item.category}
                    </Badge>
                    <CardTitle className="text-xl text-foreground hover:text-tau-gold transition-colors cursor-pointer">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/60">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2 text-sm text-foreground/40">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {item.author}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
