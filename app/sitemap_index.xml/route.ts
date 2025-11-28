import { NextRequest, NextResponse } from 'next/server';

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const tzOffset = -date.getTimezoneOffset();
  const tzHours = String(Math.floor(Math.abs(tzOffset) / 60)).padStart(2, '0');
  const tzMinutes = String(Math.abs(tzOffset) % 60).padStart(2, '0');
  const tzSign = tzOffset >= 0 ? '+' : '-';
  return `${year}-${month}-${day} ${hours}:${minutes} ${tzSign}${tzHours}:${tzMinutes}`;
}

export async function GET(request: NextRequest) {
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const host = request.headers.get('host') || 'localhost:3000';
  const baseUrl = `${protocol}://${host}`;
  const now = new Date();
  
  // List of all sitemaps
  const sitemaps = [
    {
      loc: `${baseUrl}/post-sitemap.xml`,
      lastmod: now,
      name: 'Posts (Guides & Articles)',
    },
    {
      loc: `${baseUrl}/broker-sitemap.xml`,
      lastmod: now,
      name: 'Brokers',
    },
    {
      loc: `${baseUrl}/page-sitemap.xml`,
      lastmod: now,
      name: 'Pages',
    },
  ];

  // Check if request wants XML (for search engines)
  const acceptHeader = request.headers.get('accept') || '';
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchEngine = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver/i.test(userAgent);
  const explicitlyWantsXML = request.nextUrl.searchParams.get('format') === 'xml' ||
                             (acceptHeader.includes('application/xml') && !acceptHeader.includes('text/html')) ||
                             (acceptHeader.includes('text/xml') && !acceptHeader.includes('text/html'));
  const wantsXML = isSearchEngine || explicitlyWantsXML;

  if (wantsXML) {
    // Return XML format
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod.toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }

  // Return HTML format (for browsers)
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XML Sitemap Index - ${baseUrl.replace('https://', '').replace('http://', '')}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }
    .header {
      background: linear-gradient(135deg, #1A2A4F 0%, #111A32 100%);
      color: white;
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .header p {
      font-size: 16px;
      opacity: 0.95;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .header a {
      color: #fff;
      text-decoration: underline;
    }
    .header a:hover {
      opacity: 0.9;
    }
    .nav-breadcrumb {
      max-width: 1200px;
      margin: 0 auto;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .info {
      margin-bottom: 25px;
      font-size: 15px;
      color: #555;
    }
    .info strong {
      color: #1A2A4F;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: white;
    }
    thead {
      background: #1A2A4F;
      color: white;
    }
    th {
      padding: 12px 15px;
      text-align: left;
      font-weight: 600;
      font-size: 14px;
    }
    tbody tr {
      border-bottom: 1px solid #e5e5e5;
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    tbody tr:hover {
      background-color: #f5f5f5;
    }
    td {
      padding: 12px 15px;
      font-size: 14px;
    }
    td a {
      color: #C04A0F;
      text-decoration: none;
    }
    td a:hover {
      text-decoration: underline;
    }
    .nav-breadcrumb {
      padding: 15px 20px;
      background: #f9f9f9;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
    }
    .nav-breadcrumb a {
      color: #C04A0F;
      text-decoration: none;
    }
    .nav-breadcrumb a:hover {
      text-decoration: underline;
    }
    .nav-breadcrumb span {
      color: #999;
      margin: 0 8px;
    }
    .quick-links {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
    }
    .quick-link {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background: #1A2A4F;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.2s;
    }
    .quick-link:hover {
      background: #111A32;
      color: white;
    }
    @media (max-width: 768px) {
      .header { padding: 30px 15px; }
      .header h1 { font-size: 24px; }
      .container { padding: 20px 15px; }
      table { font-size: 13px; }
      th, td { padding: 10px 8px; }
      .quick-links { flex-direction: column; }
      .quick-link { width: 100%; justify-content: center; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>XML Sitemap Index</h1>
    <p>
      This XML Sitemap helps search engines like Google crawl and index all pages on this website. 
      It contains links to posts, pages, and other content that search engines use to discover and recrawl the site.
    </p>
  </div>
  
  <div class="nav-breadcrumb">
    <a href="${baseUrl}">Home</a>
    <span>›</span>
    <span>XML Sitemap Index</span>
  </div>
  
  <div class="container">
    <div class="info">
      This XML Sitemap Index file contains <strong>${sitemaps.length}</strong> sitemaps.
    </div>
    
    <table>
      <thead>
        <tr>
          <th>Sitemap</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        ${sitemaps.map(sitemap => `
        <tr>
          <td><a href="${sitemap.loc}">${sitemap.name}</a></td>
          <td>${formatDate(sitemap.lastmod)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    
    <div class="quick-links">
      <a href="${baseUrl}" class="quick-link">← Back to Homepage</a>
    </div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

