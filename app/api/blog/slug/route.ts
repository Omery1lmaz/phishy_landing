import { NextRequest, NextResponse } from 'next/server';
import { getCorrespondingBlogSlug } from '@/lib/blog';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const currentSlug = searchParams.get('slug');
  const currentLocale = searchParams.get('currentLocale');
  const targetLocale = searchParams.get('targetLocale');

  if (!currentSlug || !currentLocale || !targetLocale) {
    return NextResponse.json(
      { error: 'Missing required parameters: slug, currentLocale, targetLocale' },
      { status: 400 }
    );
  }

  try {
    const correspondingSlug = getCorrespondingBlogSlug(
      currentSlug,
      currentLocale,
      targetLocale
    );

    if (!correspondingSlug) {
      return NextResponse.json(
        { error: 'Corresponding blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ slug: correspondingSlug });
  } catch (error) {
    console.error('Error finding corresponding blog slug:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

