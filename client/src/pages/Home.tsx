import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsGrid from "@/components/ToolsGrid";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ToolsGrid />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}