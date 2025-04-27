import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { BookOpen, Calendar, ExternalLink, FileText, Newspaper, ArrowRight } from 'lucide-react';
import { publications, blogPosts } from '../../content/publications';
import { publicationsSectionContent } from '../../content/publications-section';

type Tab = 'publications' | 'blog';

const MAX_VISIBLE_ITEMS = 4;

const PublicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('blog');
  const { title, subtitle, tabs, buttons, labels } = publicationsSectionContent;

  return (
    <Section 
      id="publications" 
      title={title}
      subtitle={subtitle}
      className="bg-primary"
    >
      <div className="flex justify-center mb-12">
        <div className="inline-flex space-x-8">
          <button
            onClick={() => setActiveTab('blog')}
            className={`relative pb-2 text-xl font-bold transition-colors duration-300 ${
              activeTab === 'blog' ? 'text-text' : 'text-text-secondary hover:text-text/80'
            }`}
          >
            {tabs.blog}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'blog' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
          <button
            onClick={() => setActiveTab('publications')}
            className={`relative pb-2 text-xl font-bold transition-colors duration-300 ${
              activeTab === 'publications' ? 'text-text' : 'text-text-secondary hover:text-text/80'
            }`}
          >
            {tabs.publications}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'publications' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {activeTab === 'publications' && (
          <>
            {publications.slice(0, MAX_VISIBLE_ITEMS).map((pub, index) => (
              <Card key={index} delay={index * 150}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-lg text-secondary">
                      {pub.type === 'journal' ? (
                        <BookOpen size={24} />
                      ) : pub.type === 'patent' ? (
                        <FileText size={24} />
                      ) : (
                        <Newspaper size={24} />
                      )}
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
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:underline text-sm"
                      >
                        View {pub.type === 'journal' ? labels.viewPaper : pub.type === 'patent' ? labels.viewPatent : labels.viewPublication}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
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
            {publications.length > MAX_VISIBLE_ITEMS && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  href="/publications"
                  icon={<ArrowRight size={16} />}
                >
                  {buttons.viewAllPublications} ({publications.length})
                </Button>
              </div>
            )}
          </>
        )}

        {activeTab === 'blog' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(0, MAX_VISIBLE_ITEMS).map((post, index) => (
                <Card key={index} delay={index * 150}>
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
                    <p className="text-text-secondary text-sm mb-4 flex-grow">{post.description}</p>

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

                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:underline text-sm"
                      >
                        {labels.readArticle}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {blogPosts.length > MAX_VISIBLE_ITEMS && (
              <div className="text-center mt-8">
                <Link to="/blog" className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent/10 rounded-lg transition-colors">
                  <span>{buttons.viewAllPosts} ({blogPosts.length})</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </Section>
  );
};

export default PublicationsSection;