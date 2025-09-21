import { useParams } from "wouter";
import { calculators } from "@shared/calculators";
import { getCalculatorFunction } from "@shared/calculatorLogic";
import Calculator from "@/components/Calculator";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Share2, Copy, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CalculatorPage() {
  const { slug } = useParams<{ slug: string }>();
  const calculator = calculators.find(calc => calc.slug === slug);

  if (!calculator) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Calculator Not Found</h1>
          <p className="text-muted-foreground mb-8">The calculator you're looking for doesn't exist.</p>
          <Link href="/" className="text-primary hover:text-primary/80">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCalculation = (values: Record<string, string>) => {
    const calculatorFunction = getCalculatorFunction(calculator.id);
    if (calculatorFunction) {
      return calculatorFunction(values);
    }
    return "Calculation not yet implemented";
  };


  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: calculator.name,
          text: calculator.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      console.log('URL copied to clipboard');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    console.log('Link copied to clipboard');
  };

  const currentUrl = `https://calchubtools.com/calculator/${calculator.slug}`;
  
  return (
    <div className="min-h-screen bg-background">
      <Head
        title={calculator.metaTitle}
        description={calculator.metaDescription}
        keywords={calculator.keywords}
        ogTitle={calculator.name}
        ogDescription={calculator.description}
        ogUrl={currentUrl}
        canonical={currentUrl}
      />
      
      <Header />
      
      <main className="container px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-primary hover:text-primary/80 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2" data-testid="calculator-page-title">
                    {calculator.name}
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {calculator.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{calculator.category}</Badge>
                  {calculator.popular && <Badge>Popular</Badge>}
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  data-testid="share-button"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyLink}
                  data-testid="copy-link-button"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </div>

            {/* AdSense Banner */}
            <div className="flex justify-center py-4">
              <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground">AdSense Banner 728x90</p>
              </div>
            </div>

            {/* Calculator Tool */}
            <Calculator
              title={calculator.name}
              description={calculator.description}
              fields={calculator.fields}
              onCalculate={handleCalculation}
              resultLabel={calculator.resultLabel}
            />

            {/* Article Content */}
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>{calculator.article.title}</h2>
              <p className="lead">{calculator.article.introduction}</p>
              
              {calculator.article.sections.map((section, index) => (
                <div key={index}>
                  <h3>{section.heading}</h3>
                  <p>{section.content}</p>
                </div>
              ))}
              
              <h3>Conclusion</h3>
              <p>{calculator.article.conclusion}</p>
            </article>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {calculator.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AdSense Sidebar */}
            <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">AdSense 300x250</p>
            </div>

            {/* Related Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Related Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {calculator.relatedTools.map((toolId) => {
                  const relatedCalc = calculators.find(c => c.id === toolId);
                  if (!relatedCalc) return null;
                  
                  return (
                    <Link
                      key={toolId}
                      href={`/calculator/${relatedCalc.slug}`}
                      className="block p-3 rounded-lg border hover-elevate transition-all"
                    >
                      <h4 className="font-medium">{relatedCalc.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {relatedCalc.description}
                      </p>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>

            {/* Popular Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {calculators
                  .filter(calc => calc.popular && calc.id !== calculator.id)
                  .slice(0, 5)
                  .map((calc) => (
                    <Link
                      key={calc.id}
                      href={`/calculator/${calc.slug}`}
                      className="block p-3 rounded-lg border hover-elevate transition-all"
                    >
                      <h4 className="font-medium">{calc.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {calc.description}
                      </p>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}