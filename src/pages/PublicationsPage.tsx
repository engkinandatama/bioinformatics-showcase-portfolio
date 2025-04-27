import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, Search, Filter, ChevronDown, ExternalLink, FileText, BookOpen, Newspaper } from 'lucide-react';
import { publications } from '../content/publications';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

// Dynamically extract unique types and years from publications
const allTypes = Array.from(new Set(publications.map(pub => pub.type)));
const allYears = Array.from(
  new Set(
    publications.map(pub => new Date(pub.date).getFullYear())
  )
).sort((a, b) => b - a);

const PublicationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPublications = useMemo(() => {
    return publications
      .filter(pub => {
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pub.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTypes = selectedTypes.length === 0 || 
                           selectedTypes.includes(pub.type);
        const matchesYears = selectedYears.length === 0 || 
                           selectedYears.includes(new Date(pub.date).getFullYear());
        
        return matchesSearch && matchesTypes && matchesYears;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'newest' ? 
          dateB.getTime() - dateA.getTime() : 
          dateA.getTime() - dateB.getTime();
      });
  }, [searchQuery, selectedTypes, selectedYears, sortOrder]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? 
        prev.filter(t => t !== type) : 
        [...prev, type]
    );
  };

  const toggleYear = (year: number) => {
    setSelectedYears(prev => 
      prev.includes(year) ? 
        prev.filter(y => y !== year) : 
        [...prev, year]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <BookOpen size={24} />;
      case 'patent':
        return <FileText size={24} />;
      case 'conference':
        return <Newspaper size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Publications</h1>
          <p className="text-text-secondary text-lg">
            My research publications, patents, and conference papers.
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
                  placeholder="Search publications..."
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
                Filter by Type
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTypes.includes(type)
                        ? 'bg-secondary text-white'
                        : 'bg-background text-text-secondary hover:bg-secondary/10'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Calendar size={16} />
                Filter by Year
              </h3>
              <div className="flex flex-wrap gap-2">
                {allYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => toggleYear(year)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedYears.includes(year)
                        ? 'bg-accent text-white'
                        : 'bg-background text-text-secondary hover:bg-accent/10'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <Card key={index} delay={index * 100}>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-lg text-secondary">
                    {getTypeIcon(pub.type)}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-lg font-bold">{pub.title}</h3>
                    <div className="flex items-center text-text-secondary md:ml-4 md:flex-shrink-0">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{pub.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-accent text-sm mt-1">{pub.publisher}</p>
                  {pub.authors && (
                    <p className="text-text-secondary text-sm mt-1">
                      {pub.authors.join(', ')}
                    </p>
                  )}
                  <p className="text-text-secondary text-sm mt-2 mb-3">{pub.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <Button
                      variant="primary"
                      size="small"
                      href={pub.link}
                      icon={<ExternalLink size={16} />}
                    >
                      View {pub.type === 'journal' ? 'Paper' : pub.type === 'patent' ? 'Patent' : 'Publication'}
                    </Button>
                    {pub.doi && (
                      <span className="text-text-secondary text-sm">
                        DOI: {pub.doi}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;