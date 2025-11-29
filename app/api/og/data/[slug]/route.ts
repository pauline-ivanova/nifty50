import { NextRequest, NextResponse } from 'next/server';
import { getGuideData } from '@/lib/guides';

export const runtime = 'nodejs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    const resolvedParams = params instanceof Promise ? await params : params;
    const slug = resolvedParams.slug;
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
    
    const guide = getGuideData(slug);
    
    if (!guide) {
      return NextResponse.json({ error: 'Guide not found' }, { status: 404 });
    }
    
    return NextResponse.json({
      slug: guide.slug,
      title: guide.frontmatter.title,
      excerpt: guide.frontmatter.excerpt,
      category: guide.frontmatter.category,
    });
  } catch (e: any) {
    console.error('Error getting guide data:', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

