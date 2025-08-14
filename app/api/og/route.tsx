import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Roast a Profile';
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          }}
        >
          {/* Logo/Brand Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
                fontSize: 50,
              }}
            >
              🔥
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              }}
            >
              Roast a Profile
            </div>
          </div>

          {/* Title Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 120px',
              maxWidth: '100%',
            }}
          >
            <div
              style={{
                fontSize: title.length > 60 ? 48 : 56,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.2,
                marginBottom: 20,
                textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                maxWidth: '900px',
              }}
            >
              {title}
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              marginTop: 20,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            AI-Powered Instagram Roast Generator
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              fontSize: 20,
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>🎯</span>
              <span>2M+ Roasts</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>⭐</span>
              <span>4.8/5 Rating</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>🚀</span>
              <span>Free & No Login</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('OG Image generation failed:', e);
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    });
  }
}