import WorkDetailClient from "./WorkDetailClient";

// Generate static params for all projects
export function generateStaticParams() {
  return [{ slug: "barbershop-pos-system" }, { slug: "minibox-barbershop" }, { slug: "core-initiative-frontend" }, { slug: "schizocheck-expert-system" }, { slug: "dewamotor-inventory-catalog" }, { slug: "fti-umby-website-remake" }];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <WorkDetailClient slug={slug} />;
}
