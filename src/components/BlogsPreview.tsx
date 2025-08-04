import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import omSymbol from "@/assets/om-symbol.png";

const BlogsPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lord Krishna – Birth of knowledge, love and mischief",
      excerpt: "Explore the divine qualities of Lord Krishna and how his teachings continue to guide us in modern times.",
      author: "Sri Sri Ravi Shankar",
      readTime: "4 min read",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png"
    },
    {
      id: 2,
      title: "The Path of Dharma in Modern Times",
      excerpt: "Understanding how ancient principles can guide our decisions in today's complex world.",
      author: "Sri Sri Ravi Shankar",
      readTime: "6 min read",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png"
    },
    {
      id: 3,
      title: "Meditation: The Gateway to Inner Peace",
      excerpt: "Discover the transformative power of meditation and its role in spiritual growth.",
      author: "Sri Sri Ravi Shankar",
      readTime: "5 min read",
      image: "https://srisrigurukul.subhanustaging.com/lovable-uploads/0c906289-ba42-4d8f-8bc8-e1514b32e7a7.png"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-sacred">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-primary/60"></div>
            <img src={omSymbol} alt="Om" className="w-8 h-8 mx-4 opacity-60" />
            <div className="w-16 h-0.5 bg-primary/60"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-sacred font-bold text-foreground mb-4">
            Blogs on Wisdom
          </h2>
          
          <p className="text-xl text-muted-foreground font-sacred italic">
            Insights and teachings from ancient wisdom
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-sacred font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/blogs">
            <Button className="btn-sacred text-lg px-8 py-4 rounded-full group">
              View All Blogs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsPreview;