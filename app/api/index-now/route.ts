import { NextResponse } from 'next/server';

// IndexNow API for instant indexing with search engines
// Supports Bing, Yandex, Seznam.cz, and others
export async function POST(request: Request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'URLs array required' }, { status: 400 });
    }

    const host = 'www.lookatmyprofile.org';
    const key = process.env.INDEXNOW_KEY || 'default-key-replace-in-production';
    const keyLocation = `https://${host}/${key}.txt`;

    // Submit to IndexNow API (Bing, Yandex, etc.)
    const indexNowUrl = 'https://api.indexnow.org/indexnow';

    const payload = {
      host,
      key,
      keyLocation,
      urlList: urls.map((url: string) => {
        // Ensure URLs are absolute
        if (url.startsWith('http')) return url;
        return `https://${host}${url.startsWith('/') ? url : `/${url}`}`;
      })
    };

    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('IndexNow error:', errorText);
      return NextResponse.json({
        success: false,
        error: `IndexNow API error: ${response.status}`,
        details: errorText
      }, { status: response.status });
    }

    return NextResponse.json({
      success: true,
      submitted: urls.length,
      message: 'URLs submitted to IndexNow successfully'
    });
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to submit to IndexNow'
    }, { status: 500 });
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    status: 'ready',
    usage: 'POST with { urls: ["/page1", "/page2"] }'
  });
}
