import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, Search, Filter, ChevronDown } from 'lucide-react';
import { blogPosts } from '../content/publications';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

// Dynamically extract unique tags and platforms
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
const allPlatforms = Array.from(new Set(blogPosts.map(post => post.platform)));

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTags = selectedTags.length === 0 || 
                           post.tags.some(tag => selectedTags.includes(tag));
        const matchesPlatform = selectedPlatforms.length === 0 || 
                               selectedPlatforms.includes(post.platform);
        
        return matchesSearch && matchesTags && matchesPlatform;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'newest' ? 
          dateB.getTime() - dateA.getTime() : 
          dateA.getTime() - dateB.getTime();
      });
  }, [searchQuery, selectedTags, selectedPlatforms, sortOrder]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? 
        prev.filter(t => t !== tag) : 
        [...prev, tag]
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) ? 
        prev.filter(p => p !== platform) : 
        [...prev, platform]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Blog Posts</h1>
          <p className="text-text-secondary text-lg">
            Explore my articles on bioinformatics, programming, and technology.
          </p>
        </div>

        {/* Search and Sort */}
        <div className="bg-container border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" size={20} />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            {/* Sort Order */}
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-text-secondary" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                className="px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Filters Toggle Button */}
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2 mt-6 text-text-secondary hover:text-text transition-colors"
          >
            <Filter size={20} />
            <span className="font-medium">Filters</span>
            <ChevronDown
              size={20}
              className={`transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Collapsible Filters */}
          <div
            className={`space-y-4 overflow-hidden transition-all duration-300 ${
              isFiltersOpen ? 'mt-6 max-h-96' : 'max-h-0'
            }`}
          >
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Filter size={16} />
                Filter by Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-secondary text-white'
                        : 'bg-background text-text-secondary hover:bg-secondary/10'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Filter size={16} />
                Filter by Platform
              </h3>
              <div className="flex flex-wrap gap-2">
                {allPlatforms.map((platform) => (
                  <button
                    key={platform}
                    onClick={() => togglePlatform(platform)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedPlatforms.includes(platform)
                        ? 'bg-accent text-white'
                        : 'bg-background text-text-secondary hover:bg-accent/10'
                    }`}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <Card key={index} delay={index * 100}>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <span className="text-accent font-medium">{post.platform}</span>
                    <span className="mx-2 text-text-secondary">•</span>
                    <span className="text-text-secondary text-sm">{post.readingTime}</span>
                  </div>
                  <div className="flex items-center text-text-secondary text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">
                  {post.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-container/50 rounded-full border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    size="small"
                    href={post.link}
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;