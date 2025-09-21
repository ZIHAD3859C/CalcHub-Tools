import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Heart, 
  DollarSign, 
  Percent, 
  PiggyBank,
  FileText,
  Clock,
  Ruler,
  Calendar,
  ShoppingBag,
  Baby,
  Apple,
  Activity,
  Scale,
  TrendingUp,
  Receipt,
  Banknote,
  Briefcase,
  Users,
  GraduationCap,
  BookOpen,
  Trophy,
  Zap,
  Key,
  Globe,
  Timer,
  Target,
  Calculator as Calc2
} from "lucide-react";

const calculatorData = [
  { id: 1, name: "Age Calculator", description: "Calculate your exact age in years, months, and days", icon: Calendar, category: "General", popular: true },
  { id: 2, name: "BMI Calculator", description: "Body Mass Index calculator for health assessment", icon: Heart, category: "Health", popular: true },
  { id: 3, name: "Loan/EMI Calculator", description: "Calculate loan payments and interest", icon: DollarSign, category: "Finance", popular: true },
  { id: 4, name: "Percentage Calculator", description: "Calculate percentages, increases, and decreases", icon: Percent, category: "Math", popular: true },
  { id: 5, name: "Compound Interest Calculator", description: "Calculate compound interest and investment growth", icon: PiggyBank, category: "Finance", popular: true },
  { id: 6, name: "Word Counter", description: "Count words, characters, and paragraphs", icon: FileText, category: "Productivity", popular: true },
  { id: 7, name: "Typing Speed Test", description: "Test your typing speed and accuracy", icon: Clock, category: "Productivity", popular: false },
  { id: 8, name: "Unit Converter", description: "Convert between different units of measurement", icon: Ruler, category: "General", popular: false },
  { id: 9, name: "Date Difference Calculator", description: "Calculate the difference between two dates", icon: Calendar, category: "General", popular: false },
  { id: 10, name: "Discount Calculator", description: "Calculate discounts and sale prices", icon: ShoppingBag, category: "Finance", popular: false },
  { id: 11, name: "Pregnancy Calculator", description: "Calculate due date and pregnancy timeline", icon: Baby, category: "Health", popular: false },
  { id: 12, name: "Calorie Calculator", description: "Calculate daily calorie needs", icon: Apple, category: "Health", popular: false },
  { id: 13, name: "BMR Calculator", description: "Basal Metabolic Rate calculator", icon: Activity, category: "Health", popular: false },
  { id: 14, name: "Ideal Weight Calculator", description: "Calculate your ideal body weight", icon: Scale, category: "Health", popular: false },
  { id: 15, name: "SIP Calculator", description: "Systematic Investment Plan calculator", icon: TrendingUp, category: "Finance", popular: false },
  { id: 16, name: "GST Calculator", description: "Calculate GST and tax amounts", icon: Receipt, category: "Finance", popular: false },
  { id: 17, name: "Simple Interest Calculator", description: "Calculate simple interest on investments", icon: Banknote, category: "Finance", popular: false },
  { id: 18, name: "ROI Calculator", description: "Return on Investment calculator", icon: TrendingUp, category: "Finance", popular: false },
  { id: 19, name: "Salary Calculator", description: "Calculate net salary after deductions", icon: Briefcase, category: "Finance", popular: false },
  { id: 20, name: "Overtime Calculator", description: "Calculate overtime pay and hours", icon: Clock, category: "Finance", popular: false },
  { id: 21, name: "GPA Calculator", description: "Grade Point Average calculator", icon: GraduationCap, category: "Education", popular: false },
  { id: 22, name: "CGPA Calculator", description: "Cumulative Grade Point Average calculator", icon: BookOpen, category: "Education", popular: false },
  { id: 23, name: "Grade Calculator", description: "Calculate final grades and scores", icon: Trophy, category: "Education", popular: false },
  { id: 24, name: "Scientific Calculator", description: "Advanced scientific calculations", icon: Calculator, category: "Math", popular: false },
  { id: 25, name: "Password Generator", description: "Generate secure random passwords", icon: Key, category: "Security", popular: false }
];

interface ToolsGridProps {
  showAll?: boolean;
  limit?: number;
}

export default function ToolsGrid({ showAll = false, limit = 12 }: ToolsGridProps) {
  const toolsToShow = showAll ? calculatorData : calculatorData.slice(0, limit);

  const handleToolClick = (toolName: string) => {
    console.log(`Navigating to ${toolName}`);
    // TODO: Navigate to tool page
  };

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
            const IconComponent = tool.icon;
            
            return (
              <Card 
                key={tool.id} 
                className="hover-elevate cursor-pointer transition-all duration-200"
                onClick={() => handleToolClick(tool.name)}
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
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button 
              className="text-primary hover:text-primary/80 font-medium"
              onClick={() => console.log('View all tools')}
              data-testid="view-all-tools"
            >
              View All 50+ Tools →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}