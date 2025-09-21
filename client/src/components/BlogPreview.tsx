import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding BMI: A Complete Guide to Body Mass Index",
    excerpt: "Learn how to calculate and interpret your BMI, what the numbers mean for your health, and when BMI might not be the best indicator.",
    category: "Health",
    readTime: "5 min read",
    publishDate: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Smart Investment Strategies: Making Compound Interest Work for You",
    excerpt: "Discover the power of compound interest and learn practical strategies to maximize your investment returns over time.",
    category: "Finance",
    readTime: "8 min read",
    publishDate: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Home Loan EMI Calculation: Everything You Need to Know",
    excerpt: "Master the art of EMI calculation, understand the factors that affect your monthly payments, and make informed borrowing decisions.",
    category: "Finance",
    readTime: "6 min read",
    publishDate: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop"
  }
];

export default function BlogPreview() {
  const handlePostClick = (postTitle: string) => {
    console.log(`Opening blog post: ${postTitle}`);
    // TODO: Navigate to blog post
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="blog-section-title">
            Latest Insights & Guides
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles on finance, health, and productivity tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="hover-elevate cursor-pointer transition-all duration-200 overflow-hidden"
              onClick={() => handlePostClick(post.title)}
              data-testid={`blog-post-${post.id}`}
            >
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  data-testid={`blog-image-${post.id}`}
                />
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <Badge variant="outline" data-testid={`blog-category-${post.id}`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors" data-testid={`blog-title-${post.id}`}>
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4" data-testid={`blog-excerpt-${post.id}`}>
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group">
                  <span>Read More</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="text-primary hover:text-primary/80 font-medium"
            onClick={() => console.log('View all blog posts')}
            data-testid="view-all-blog-posts"
          >
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
}