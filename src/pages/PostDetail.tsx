import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { usePost } from "@/hooks/usePosts";
import { siteSettings } from "@/data/siteSettings";

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
const { data: post, isLoading } = usePost(slug ?? "");

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "";

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } else {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };
  if (isLoading) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-custom text-center">
            <p className="text-muted-foreground">Loading article…</p>
          </div>
        </div>
      </Layout>
    );
  }
  if (!post) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/posts">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM dd, yyyy")
    : "";
  const canonical = `${siteSettings.siteUrl}/posts/${post.slug}`;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | Credo Migration`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.publishedAt,
            articleSection: post.category,

          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/posts"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>

            <div className="flex items-center gap-4 text-sm text-primary-foreground/70 mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-primary-foreground/80">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              <article
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <aside className="space-y-8">
                <div className="card-elevated p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Share This Article
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                      aria-label="Copy link"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>



                <div className="card-elevated p-6 gradient-hero">
                  <h3 className="font-semibold text-primary-foreground mb-2">
                    Need Help?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Get personalised advice for your immigration journey.
                  </p>
                  <Link to="/contact-us">
                    <Button className="w-full btn-gold">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}