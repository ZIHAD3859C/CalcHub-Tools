import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { calculators } from "@shared/calculators";
import { 
  Calendar, 
  Heart, 
  DollarSign, 
  Percent, 
  PiggyBank,
  FileText,
  Clock,
  Ruler,
  ShoppingBag,
  Baby,
  Apple,
  Activity,
  Scale,
  TrendingUp,
  Receipt,
  Banknote,
  Briefcase,
  GraduationCap,
  BookOpen,
  Trophy,
  Calculator,
  Key,
  HelpCircle
} from "lucide-react";

// Map icon names to components with fallback
const iconMap: Record<string, any> = {
  Calendar,
  Heart,
  DollarSign,
  Percent,
  PiggyBank,
  FileText,
  Clock,
  Ruler,
  ShoppingBag,
  Baby,
  Apple,
  Activity,
  Scale,
  TrendingUp,
  Receipt,
  Banknote,
  Briefcase,
  GraduationCap,
  BookOpen,
  Trophy,
  Calculator,
  Key
};

// Fallback icon for missing mappings
const getFallbackIcon = () => HelpCircle;

interface ToolsGridProps {
  showAll?: boolean;
  limit?: number;
}

import { Link } from "wouter";

export default function ToolsGrid({ showAll = false, limit = 12 }: ToolsGridProps) {
  const toolsToShow = showAll ? calculators : calculators.slice(0, limit);

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="tools-section-title">
            {showAll ? "All Calculator Tools" : "Featured Calculators"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive collection of professional calculators designed for accuracy and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toolsToShow.map((tool) => {
            const IconComponent = iconMap[tool.icon] || getFallbackIcon();
            
            return (
              <Link key={tool.id} href={`/calculator/${tool.slug}`}>
                <Card 
                  className="hover-elevate cursor-pointer transition-all duration-200 h-full"
                  data-testid={`tool-card-${tool.id}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex flex-col gap-1">
                          {tool.popular && (
                            <Badge variant="secondary" className="w-fit text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight" data-testid={`tool-title-${tool.id}`}>
                      {tool.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3" data-testid={`tool-description-${tool.id}`}>
                      {tool.description}
                    </p>
                    <Badge variant="outline" className="text-xs" data-testid={`tool-category-${tool.id}`}>
                      {tool.category}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link href="/tools" className="text-primary hover:text-primary/80 font-medium" data-testid="view-all-tools">
              View All 50+ Tools →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}