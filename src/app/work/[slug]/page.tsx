import WorkDetailClient from "./WorkDetailClient";

// Generate static params for all projects
export function generateStaticParams() {
  return [{ slug: "barbershop-pos-system" }, { slug: "minibox-barbershop" }, { slug: "core-initiative-frontend" }, { slug: "schizocheck-expert-system" }, { slug: "database-programming" }, { slug: "pkkmb-fti-2024" }];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <WorkDetailClient slug={slug} />;
}
