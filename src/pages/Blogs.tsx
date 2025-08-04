import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Search, User, Calendar } from "lucide-react";
import omSymbol from "@/assets/om-symbol.png";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Lord Krishna – Birth of knowledge, love and mischief",
      excerpt: "Explore the divine qualities of Lord Krishna and how his teachings continue to guide us in modern times through ancient wisdom.",
      author: "Sri Sri Ravi Shankar",
      date: "2024-08-01",
      readTime: "4 min read",
      category: "Spirituality",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      featured: true
    },
    {
      id: 2,
      title: "The Path of Dharma in Modern Times",
      excerpt: "Understanding how ancient principles of Dharma can guide our decisions and actions in today's complex world.",
      author: "Sri Sri Ravi Shankar",
      date: "2024-07-28",
      readTime: "6 min read",
      category: "Philosophy",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      featured: false
    },
    {
      id: 3,
      title: "Meditation: The Gateway to Inner Peace",
      excerpt: "Discover the transformative power of meditation and how it creates a bridge between the ancient and modern world.",
      author: "Sri Sri Ravi Shankar",
      date: "2024-07-25",
      readTime: "5 min read",
      category: "Meditation",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      featured: true
    },
    {
      id: 4,
      title: "Vedic Education: Building Character and Knowledge",
      excerpt: "How traditional Vedic education methods create well-rounded individuals with strong moral foundations.",
      author: "Gurukul Faculty",
      date: "2024-07-20",
      readTime: "7 min read",
      category: "Education",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      featured: false
    },
    {
      id: 5,
      title: "The Science Behind Sanskrit Chanting",
      excerpt: "Modern research reveals the profound effects of Sanskrit mantras on brain function and overall well-being.",
      author: "Dr. Vedic Sciences",
      date: "2024-07-15",
      readTime: "8 min read",
      category: "Science",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      featured: false
    },
    {
      id: 6,
      title: "Preserving Ancient Wisdom for Future Generations",
      excerpt: "The importance of maintaining traditional knowledge systems while adapting to contemporary needs.",
      author: "Heritage Council",
      date: "2024-07-10",
      readTime: "6 min read",
      category: "Culture",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png",
      featured: true
    }
  ];

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-sacred">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-0.5 bg-primary/60"></div>
              <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
              <div className="w-16 h-0.5 bg-primary/60"></div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-sacred font-bold text-foreground mb-6">
              Blogs on Wisdom
            </h1>
            
            <p className="text-xl text-muted-foreground font-sacred italic mb-8">
              Insights and teachings from ancient wisdom
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore our collection of articles, teachings, and insights that bridge the 
              gap between ancient Vedic wisdom and modern life. Discover timeless truths 
              that continue to guide and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-border rounded-md px-3 py-2 bg-background text-foreground"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-8 text-center">
              Featured Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="card-sacred group cursor-pointer overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-lg font-sacred font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gradient-sacred">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-8 text-center">
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="card-sacred group cursor-pointer overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>

                      <h3 className="text-lg font-sacred font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredPosts.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
            <Button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-sacred rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-sacred font-bold text-foreground mb-4">
              Stay Connected with Wisdom
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest insights, teachings, and updates from our Gurukuls 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="btn-sacred">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;