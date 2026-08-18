export const BLOGGER_XML_TEMPLATE = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='utf-8'/>
  <!-- Anti-Mobile Desktop Override & High-Performance Viewport -->
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' name='viewport'/>
  <meta content='ie=edge' http-equiv='x-ua-compatible'/>
  <b:include data='blog' name='all-head-content'/>

  <!-- Dynamic SEO Title -->
  <b:if cond='data:view.isHomepage'>
    <title><data:blog.title/> - Elite Digital Assets, Courses &amp; Tools | bKash &amp; Nagad Instant Delivery</title>
  <b:elseif cond='data:view.isPost'/>
    <title><data:view.title.escaped/> | <data:blog.title/></title>
  <b:elseif cond='data:view.isLabelSearch'/>
    <title><data:blog.pageName/> Category - <data:blog.title/></title>
  <b:else/>
    <title><data:blog.pageName/> - <data:blog.title/></title>
  </b:if>

  <!-- OpenGraph and Twitter Meta Tags -->
  <meta content='FileMarket.site' property='og:site_name'/>
  <meta expr:content='data:view.isPost ? data:view.title.escaped : data:blog.title' property='og:title'/>
  <meta expr:content='data:view.description ? data:view.description : "Unlock 1,000+ verified digital assets, video bundles, courses, e-books, scripts and software with instant bKash &amp; Nagad checkout."' property='og:description'/>
  <meta expr:content='data:view.featuredImage ? data:view.featuredImage : "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"' property='og:image'/>
  <meta expr:content='data:view.url.canonical' property='og:url'/>
  <meta content='summary_large_image' name='twitter:card'/>

  <!-- Schema.org JSON-LD Structured Data -->
  <script type='application/ld+json'>
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FileMarket",
    "url": "https://filemarket.site",
    "description": "Digital marketplace for video bundles, online courses, software, scripts and ebooks in Bangladesh.",
    "founder": {
      "@type": "Person",
      "name": "Joy Barmon",
      "jobTitle": "Founder &amp; Lead Digital Architect",
      "image": "https://lh3.googleusercontent.com/d/1XORisly52YSBcNc4Iukz60y9ho9GrEuE",
      "telephone": "+8801673833783",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangladesh Chittagong bayzid 4214",
        "addressLocality": "Chittagong",
        "postalCode": "4214",
        "addressCountry": "BD"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://filemarket.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>

  <b:if cond='data:view.isPost'>
    <script type='application/ld+json'>
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "<data:view.title.escaped/>",
      "image": ["<data:view.featuredImage/>"],
      "description": "<data:view.description/>",
      "brand": {
        "@type": "Brand",
        "name": "FileMarket"
      },
      "offers": {
        "@type": "Offer",
        "url": "<data:view.url.canonical/>",
        "priceCurrency": "BDT",
        "price": "499",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "FileMarket",
          "telephone": "+8801673833783",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bayzid",
            "addressLocality": "Chittagong",
            "postalCode": "4214",
            "addressCountry": "BD"
          }
        }
      }
    }
    </script>
  </b:if>

  <!-- Google Identity Services (GIS) SDK -->
  <script async='async' defer='defer' src='https://accounts.google.com/gsi/client'></script>

  <!-- Google Fonts and Tailwind CSS CDN -->
  <link href='https://fonts.googleapis.com' rel='preconnect'/>
  <link crossorigin='' href='https://fonts.gstatic.com' rel='preconnect'/>
  <link href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Outfit:wght@500;600;700;800;900&amp;display=swap' rel='stylesheet'/>
  <script src='https://cdn.tailwindcss.com'></script>
  <script>
  //<![CDATA[
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              emerald: '#10B981',
              emeraldDark: '#059669',
              cyan: '#38BDF8',
              cyanDark: '#0284C7',
              darkBg: '#0B0F19',
              darkCard: '#1E293B',
              darkBorder: '#334155'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['Outfit', 'sans-serif']
          }
        }
      }
    }
  //]]>
  </script>

  <!-- Core Blogger Skin Styles -->
  <b:skin><![CDATA[
    /* Reset & Base Variables */
    :root {
      --fm-emerald: #10B981;
      --fm-cyan: #38BDF8;
      --fm-bg-dark: #0B0F19;
      --fm-card-dark: #1E293B;
      --fm-border-dark: #334155;
    }
    
    html {
      scroll-behavior: smooth;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    body {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    /* Dark Mode Defaults */
    html.dark body {
      background-color: #0B0F19;
      color: #F1F5F9;
    }
    
    html:not(.dark) body {
      background-color: #F8FAFC;
      color: #0F172A;
    }

    /* Stacking Context & Navbar/Modal Fixes */
    .fm-navbar {
      z-index: 9999 !important;
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
    }
    .fm-modal {
      z-index: 8000 !important;
      height: calc(100vh - 75px) !important;
      max-height: calc(100vh - 75px) !important;
      top: 0 !important;
      bottom: 75px !important;
      position: fixed !important;
      left: 0 !important;
      right: 0 !important;
    }

    /* Ambient Glow FX */
    .neon-glow-emerald {
      box-shadow: 0 0 35px -5px rgba(16, 185, 129, 0.35);
    }
    .neon-glow-cyan {
      box-shadow: 0 0 35px -5px rgba(56, 189, 248, 0.35);
    }
    .glass-card {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }

    @keyframes luxuryBoxPulse {
      0%, 100% {
        box-shadow: 0 0 14px rgba(16, 185, 129, 0.3), 0 0 4px rgba(6, 182, 212, 0.2);
        border-color: rgba(16, 185, 129, 0.4);
      }
      50% {
        box-shadow: 0 0 24px rgba(16, 185, 129, 0.65), 0 0 10px rgba(6, 182, 212, 0.4);
        border-color: rgba(16, 185, 129, 0.75);
      }
    }
    @keyframes luxuryTextPulse {
      0%, 100% {
        text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
      }
      50% {
        text-shadow: 0 0 20px rgba(16, 185, 129, 0.65), 0 0 30px rgba(0, 210, 147, 0.4);
      }
    }
    @keyframes luxuryDotPulse {
      0%, 100% {
        box-shadow: 0 0 8px rgba(16, 185, 129, 0.7);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 0 16px rgba(16, 185, 129, 1), 0 0 6px rgba(56, 189, 248, 0.8);
        transform: scale(1.15);
      }
    }
    .fm-luxury-box {
      animation: luxuryBoxPulse 3s ease-in-out infinite;
    }
    .fm-luxury-text {
      animation: luxuryTextPulse 3s ease-in-out infinite;
    }
    .fm-luxury-dot {
      animation: luxuryDotPulse 3s ease-in-out infinite;
    }

    /* Blogger Post Body Styling */
    .post-body {
      line-height: 1.8;
      font-size: 1.05rem;
    }
    .post-body h2, .post-body h3 {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: inherit;
    }
    .post-body p {
      margin-bottom: 1.25rem;
    }
    .post-body img {
      border-radius: 0.75rem;
      max-width: 100%;
      height: auto;
      margin: 1.25rem 0;
    }

    /* Hide default Blogger clutter */
    .feed-links, .blog-pager-older-link, .blog-pager-newer-link {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-weight: 600;
      background: #1E293B;
      color: #38BDF8;
      border: 1px solid #334155;
    }
    .status-msg-wrap {
      display: none !important;
    }
  ]]></b:skin>
</head>

<body class='min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white'>

  <!-- STICKY TOP HEADER -->
  <header class='sticky top-0 z-50 backdrop-blur-xl bg-white/95 dark:bg-[#0B0F19]/95 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-300'>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-16 py-2.5 flex items-center justify-between gap-3'>
      
      <!-- Brand Logo -->
      <a class='flex items-center gap-3 sm:gap-3.5 group shrink-0 select-none transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]' href='/' aria-label='FileMarket Home'>
        <!-- Scaled Logo Box: 46px x 46px squircle container with luxury glowing border and dark glassmorphic backdrop -->
        <div class='fm-luxury-box relative w-[46px] h-[46px] rounded-2xl overflow-hidden bg-slate-900/95 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 border border-emerald-500/40 group-hover:border-emerald-400' style='border-radius: 14px;'>
          <img alt='FileMarket Logo' class='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' src='https://lh3.googleusercontent.com/d/1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10' referrerpolicy='no-referrer' onerror="this.onerror=null;this.src='https://drive.google.com/uc?export=view&amp;id=1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10';"/>
          <div class='absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-cyan-400/15 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        
        <!-- Scaled Brand Typography: FileMarket (24px Desktop / 22px Mobile, 800 Bold, Synchronized Luxury Glow) -->
        <div class='flex items-center'>
          <span class='inline-flex items-center tracking-[-0.5px] transition-all duration-300 text-[22px] sm:text-[24px]' style="font-family: 'Inter', sans-serif; font-weight: 800;">
            <span class='text-slate-900 dark:text-white'>File</span>
            <span class='fm-luxury-text group-hover:brightness-110 transition-all' style='color: #00D293; font-weight: 900;'>Market</span>
          </span>
        </div>
      </a>

      <!-- Right Side Header Actions: 3 distinct horizontal icons -->
      <div class='flex items-center gap-2 sm:gap-3 shrink-0'>
        
        <!-- 1. Search Icon Button -->
        <button aria-label='Open Search' class='w-[40px] h-[40px] rounded-xl bg-slate-100 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-emerald-400 hover:text-emerald-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center shadow-sm shrink-0' onclick='openSearchModal()'>
          <svg class='w-5 h-5 stroke-[2.2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/>
          </svg>
        </button>

        <!-- 2. WhatsApp Icon Button -->
        <a aria-label='Chat on WhatsApp' class='relative w-[40px] h-[40px] rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-400 hover:text-white transition cursor-pointer flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse shrink-0' href='https://wa.me/8801673833783?text=Hello%20FileMarket%2C%20I%20need%20support.' rel='noopener noreferrer' target='_blank'>
          <svg class='w-5 h-5 fill-current' viewBox='0 0 24 24'>
            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/>
          </svg>
        </a>

        <!-- 3. Hamburger Menu (3-Line Icon ☰) -->
        <button id='menu-btn' data-drawer-toggle='mobile-drawer' aria-label='Open Navigation Menu' class='w-[40px] h-[40px] rounded-xl bg-slate-100 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-emerald-400 hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center shadow-md shrink-0' onclick='openMobileDrawer()'>
          <svg class='w-5 h-5 stroke-[2.2]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h16'/>
          </svg>
        </button>

      </div>
    </div>
  </header>

  <!-- MAIN BLOGGER POSTS FEED and ITEM VIEW -->
  <main class='flex-1 max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full'>
    <b:section class='main' id='main' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
        <b:includable id='main' var='top'>
          
          <!-- HOMEPAGE / SEARCH ARCHIVE GRID -->
          <b:if cond='data:view.isMultipleItems'>
            
            <!-- 16:9 FEATURED PRODUCTS HERO SLIDER (HOMEPAGE) -->
            <b:if cond='data:view.isHomepage'>
              <section aria-label='Featured Products Hero Slider' class='w-full mb-6 select-none' id='hero-slider-section'>
                <!-- 16:9 Aspect Ratio Container -->
                <div class='relative w-full aspect-video max-h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-[0_15px_40px_rgba(0,0,0,0.4)] group'>
                  
                  <!-- Slides Track -->
                  <div class='w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform' id='hero-slider-track'>
                    
                    <!-- Slide 1: Video Bundle -->
                    <div class='relative w-full h-full shrink-0 overflow-hidden'>
                      <img alt='Ultra 4K Cinematic Reel &amp; Motion Graphics Mega Bundle' class='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000' src='https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'/>
                      
                      <!-- Bottom gradient overlay -->
                      <div class='absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none'></div>

                      <!-- Semi-Transparent Top Badges -->
                      <div class='absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none'>
                        <div class='flex items-center gap-1.5'>
                          <span class='inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-emerald-400 font-heading font-bold text-[10px] sm:text-xs border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]'>🔥 Video Bundles</span>
                          <span class='hidden xs:inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50'>5,000+ Assets</span>
                        </div>
                        <div class='flex items-center gap-1.5'>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]'>★ 4.9</span>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md'>67% OFF</span>
                        </div>
                      </div>

                      <!-- Sleek 2-Line Floating Bottom Strip -->
                      <div class='absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10'>
                        <div class='w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5'>
                          <!-- Line 1: Title -->
                          <h2 class='font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-emerald-300 transition-colors cursor-pointer'>
                            Ultra 4K Cinematic Reel &amp; Motion Graphics Mega Bundle (5,000+ Assets)
                          </h2>
                          <!-- Line 2: Price and Buy -->
                          <div class='flex items-center justify-between gap-2 pt-0.5'>
                            <div class='flex items-center gap-1.5 sm:gap-2'>
                              <span class='font-heading text-sm sm:text-lg font-black text-emerald-400'>৳499</span>
                              <span class='text-[10px] sm:text-xs text-slate-400 line-through font-medium'>৳1500</span>
                            </div>
                            <div class='flex items-center gap-1.5'>
                              <button class='hidden xs:inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-900/80 hover:bg-slate-800 text-emerald-400 font-heading font-bold text-[10px] sm:text-xs border border-emerald-500/30 hover:border-emerald-400 transition-all cursor-pointer whitespace-nowrap' onclick='alert("Free sample preview unlocked!")' type='button'>
                                Free Preview
                              </button>
                              <button class='inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0' onclick='openPaymentModal("Ultra 4K Cinematic Reel &amp; Motion Graphics Mega Bundle", 499)' type='button'>
                                ⚡ Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Slide 2: Online Course -->
                    <div class='relative w-full h-full shrink-0 overflow-hidden'>
                      <img alt='Full-Stack MERN Mastery 2026' class='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000' src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'/>
                      <div class='absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none'></div>
                      
                      <div class='absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none'>
                        <div class='flex items-center gap-1.5'>
                          <span class='inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-cyan-400 font-heading font-bold text-[10px] sm:text-xs border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]'>🎓 Online Courses</span>
                          <span class='hidden xs:inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50'>85+ Hrs</span>
                        </div>
                        <div class='flex items-center gap-1.5'>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30'>★ 4.95</span>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md'>75% OFF</span>
                        </div>
                      </div>

                      <div class='absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10'>
                        <div class='w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5'>
                          <h2 class='font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-cyan-300 transition-colors cursor-pointer'>
                            Full-Stack MERN Mastery 2026: Zero to Production &amp; AI Integration
                          </h2>
                          <div class='flex items-center justify-between gap-2 pt-0.5'>
                            <div class='flex items-center gap-1.5 sm:gap-2'>
                              <span class='font-heading text-sm sm:text-lg font-black text-emerald-400'>৳750</span>
                              <span class='text-[10px] sm:text-xs text-slate-400 line-through font-medium'>৳3000</span>
                            </div>
                            <button class='inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0' onclick='openPaymentModal("Full-Stack MERN Mastery 2026", 750)' type='button'>
                              ⚡ Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Slide 3: AI Prompts -->
                    <div class='relative w-full h-full shrink-0 overflow-hidden'>
                      <img alt='10,000+ Supercharged Midjourney &amp; ChatGPT Prompts' class='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000' src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'/>
                      <div class='absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none'></div>
                      
                      <div class='absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none'>
                        <div class='flex items-center gap-1.5'>
                          <span class='inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-purple-400 font-heading font-bold text-[10px] sm:text-xs border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]'>🤖 AI Prompts</span>
                          <span class='hidden xs:inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50'>Midjourney v6</span>
                        </div>
                        <div class='flex items-center gap-1.5'>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30'>★ 4.9</span>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md'>68% OFF</span>
                        </div>
                      </div>

                      <div class='absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10'>
                        <div class='w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5'>
                          <h2 class='font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-purple-300 transition-colors cursor-pointer'>
                            10,000+ Supercharged Midjourney v6 &amp; ChatGPT-4o Master Prompts
                          </h2>
                          <div class='flex items-center justify-between gap-2 pt-0.5'>
                            <div class='flex items-center gap-1.5 sm:gap-2'>
                              <span class='font-heading text-sm sm:text-lg font-black text-emerald-400'>৳299</span>
                              <span class='text-[10px] sm:text-xs text-slate-400 line-through font-medium'>৳950</span>
                            </div>
                            <button class='inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0' onclick='openPaymentModal("10,000+ Midjourney &amp; ChatGPT Prompts", 299)' type='button'>
                              ⚡ Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Slide 4: PC Software -->
                    <div class='relative w-full h-full shrink-0 overflow-hidden'>
                      <img alt='Windows 11 Pro &amp; Office 2024 Master Suite' class='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000' src='https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'/>
                      <div class='absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none'></div>
                      
                      <div class='absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none'>
                        <div class='flex items-center gap-1.5'>
                          <span class='inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-blue-400 font-heading font-bold text-[10px] sm:text-xs border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.15)]'>💻 PC Software</span>
                          <span class='hidden xs:inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50'>Lifetime</span>
                        </div>
                        <div class='flex items-center gap-1.5'>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30'>★ 4.96</span>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md'>63% OFF</span>
                        </div>
                      </div>

                      <div class='absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10'>
                        <div class='w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5'>
                          <h2 class='font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-blue-300 transition-colors cursor-pointer'>
                            Windows 11 Pro 64-Bit &amp; Microsoft Office 2024 Lifetime License Suite
                          </h2>
                          <div class='flex items-center justify-between gap-2 pt-0.5'>
                            <div class='flex items-center gap-1.5 sm:gap-2'>
                              <span class='font-heading text-sm sm:text-lg font-black text-emerald-400'>৳550</span>
                              <span class='text-[10px] sm:text-xs text-slate-400 line-through font-medium'>৳1500</span>
                            </div>
                            <button class='inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0' onclick='openPaymentModal("Windows 11 Pro &amp; Office 2024 Suite", 550)' type='button'>
                              ⚡ Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Slide 5: PHP Script -->
                    <div class='relative w-full h-full shrink-0 overflow-hidden'>
                      <img alt='Multi-Vendor Marketplace PHP Script &amp; Flutter Apps' class='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000' src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'/>
                      <div class='absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none'></div>
                      
                      <div class='absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none'>
                        <div class='flex items-center gap-1.5'>
                          <span class='inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-400 font-heading font-bold text-[10px] sm:text-xs border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]'>⚡ PHP Scripts</span>
                          <span class='hidden xs:inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50'>Laravel 11</span>
                        </div>
                        <div class='flex items-center gap-1.5'>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30'>★ 4.92</span>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md'>69% OFF</span>
                        </div>
                      </div>

                      <div class='absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10'>
                        <div class='w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5'>
                          <h2 class='font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-amber-300 transition-colors cursor-pointer'>
                            Multi-Vendor Marketplace PHP Script &amp; iOS/Android Flutter Mobile Apps
                          </h2>
                          <div class='flex items-center justify-between gap-2 pt-0.5'>
                            <div class='flex items-center gap-1.5 sm:gap-2'>
                              <span class='font-heading text-sm sm:text-lg font-black text-emerald-400'>৳1250</span>
                              <span class='text-[10px] sm:text-xs text-slate-400 line-through font-medium'>৳4000</span>
                            </div>
                            <button class='inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0' onclick='openPaymentModal("Multi-Vendor Marketplace PHP Script", 1250)' type='button'>
                              ⚡ Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Slide 6: Blogger Template -->
                    <div class='relative w-full h-full shrink-0 overflow-hidden'>
                      <img alt='Ultra Fast Responsive E-Commerce Blogger Template' class='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000' src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'/>
                      <div class='absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none'></div>
                      
                      <div class='absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none'>
                        <div class='flex items-center gap-1.5'>
                          <span class='inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-emerald-400 font-heading font-bold text-[10px] sm:text-xs border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]'>💎 Blogger</span>
                          <span class='hidden xs:inline-flex px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50'>Speed 99</span>
                        </div>
                        <div class='flex items-center gap-1.5'>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30'>★ 4.98</span>
                          <span class='px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md'>63% OFF</span>
                        </div>
                      </div>

                      <div class='absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10'>
                        <div class='w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5'>
                          <h2 class='font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-emerald-300 transition-colors cursor-pointer'>
                            FileMarket Ultra Fast SEO &amp; E-Commerce Premium Blogger Theme (2026 Edition)
                          </h2>
                          <div class='flex items-center justify-between gap-2 pt-0.5'>
                            <div class='flex items-center gap-1.5 sm:gap-2'>
                              <span class='font-heading text-sm sm:text-lg font-black text-emerald-400'>৳650</span>
                              <span class='text-[10px] sm:text-xs text-slate-400 line-through font-medium'>৳1800</span>
                            </div>
                            <button class='inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0' onclick='openPaymentModal("FileMarket Premium Blogger Theme", 650)' type='button'>
                              ⚡ Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <!-- Navigation Arrows -->
                  <button aria-label='Previous Slide' class='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-950/60 hover:bg-emerald-500 text-white hover:text-slate-950 backdrop-blur-md border border-slate-700/60 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg cursor-pointer hover:scale-110 active:scale-90' onclick='prevHeroSlide()' type='button'>
                    <svg class='w-5 h-5 fill-none stroke-current stroke-2' viewBox='0 0 24 24'><path d='M15 19l-7-7 7-7'/></svg>
                  </button>
                  <button aria-label='Next Slide' class='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-950/60 hover:bg-emerald-500 text-white hover:text-slate-950 backdrop-blur-md border border-slate-700/60 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg cursor-pointer hover:scale-110 active:scale-90' onclick='nextHeroSlide()' type='button'>
                    <svg class='w-5 h-5 fill-none stroke-current stroke-2' viewBox='0 0 24 24'><path d='M9 5l7 7-7 7'/></svg>
                  </button>

                </div>

                <!-- Separate Pagination Dots Centered Below Banner (Zero Overlapping) -->
                <div class='flex items-center justify-center gap-1.5 sm:gap-2 mt-3 select-none' id='hero-pagination-dots'>
                  <button class='h-1.5 sm:h-2 rounded-full transition-all duration-300 w-6 sm:w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' onclick='goToHeroSlide(0)' type='button'></button>
                  <button class='h-1.5 sm:h-2 rounded-full transition-all duration-300 w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500' onclick='goToHeroSlide(1)' type='button'></button>
                  <button class='h-1.5 sm:h-2 rounded-full transition-all duration-300 w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500' onclick='goToHeroSlide(2)' type='button'></button>
                  <button class='h-1.5 sm:h-2 rounded-full transition-all duration-300 w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500' onclick='goToHeroSlide(3)' type='button'></button>
                  <button class='h-1.5 sm:h-2 rounded-full transition-all duration-300 w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500' onclick='goToHeroSlide(4)' type='button'></button>
                  <button class='h-1.5 sm:h-2 rounded-full transition-all duration-300 w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500' onclick='goToHeroSlide(5)' type='button'></button>
                </div>
              </section>
            </b:if>

            <!-- CATEGORY PILLS BAR (Below Hero Slider) -->
            <section class='w-full mb-6' id='categories-grid'>
              <div id='cat-scroll-container' class='flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs font-bold scroll-smooth w-full'>
                <a class='px-4 py-2 rounded-full bg-emerald-500 text-white shrink-0 shadow-sm' href='/'>🔥 All Products</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/Video%20Bundles'>🎬 Video Bundles</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/Online%20Courses'>🎓 Online Courses</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/E-Books'>📚 E-Books</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/Premium%20Apps'>📱 Premium Apps</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/Premium%20PC%20Software'>💻 PC Software</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/AI%20Prompts'>🤖 AI Prompts</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/PHP%20Scripts'>⚡ PHP Scripts</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/Blogger%20Templates'>💎 Blogger Templates</a>
                <a class='px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700' href='/search/label/Others'>📦 Others</a>
              </div>
            </section>

            <div class='mb-6 flex items-center justify-between'>
              <div>
                <h2 class='font-heading text-xl md:text-2xl font-black text-slate-900 dark:text-white'>
                  <b:if cond='data:view.isLabelSearch'>
                    Category: <span class='text-emerald-500'><data:blog.pageName/></span>
                  <b:elseif cond='data:view.isSearch'/>
                    Search Results for &quot;<data:blog.pageName/>&quot;
                  <b:else/>
                    Latest Premium Digital Products
                  </b:if>
                </h2>
                <p class='text-xs text-slate-500 dark:text-slate-400 mt-0.5'>Verified instant downloads via Google Drive &amp; direct locker.</p>
              </div>
            </div>

            <!-- PRODUCT CARDS GRID (6 per row on desktop) -->
            <div class='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5'>
              <b:loop values='data:posts' var='post'>
                <article class='group flex flex-col rounded-xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300'>
                  
                  <!-- Thumbnail Container -->
                  <div class='relative aspect-video overflow-hidden bg-slate-800'>
                    <b:if cond='data:post.featuredImage'>
                      <img expr:alt='data:post.title' expr:src='data:post.featuredImage' loading='lazy' class='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>
                    <b:else/>
                      <img alt='FileMarket Product' class='w-full h-full object-cover' src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;w=800&amp;q=80'/>
                    </b:if>

                    <div class='absolute top-1.5 left-1.5'>
                      <b:if cond='data:post.labels'>
                        <span class='px-1.5 py-0.5 rounded text-[8px] sm:text-[8.5px] font-bold bg-slate-900/90 text-emerald-400 border border-slate-700/80 backdrop-blur-md'>
                          <data:post.labels.first.name/>
                        </span>
                      <b:else/>
                        <span class='px-1.5 py-0.5 rounded text-[8px] sm:text-[8.5px] font-bold bg-emerald-500 text-white'>Digital Asset</span>
                      </b:if>
                    </div>

                    <div class='absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-slate-900/80 text-amber-400 text-[8px] font-bold flex items-center gap-0.5'>
                      ★ 4.9
                    </div>
                  </div>

                  <!-- Card Body -->
                  <div class='p-3 sm:p-3.5 flex-1 flex flex-col justify-between space-y-2.5'>
                    <div>
                      <h3 class='font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug min-h-[2.2rem]'>
                        <a expr:href='data:post.url'><data:post.title/></a>
                      </h3>
                      <p class='text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-tight'>
                        <data:post.snippet/>
                      </p>
                    </div>

                    <div class='pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-1.5'>
                      <div>
                        <div class='text-[9px] text-slate-400 font-semibold uppercase'>Instant</div>
                        <div class='text-sm sm:text-base font-black text-emerald-500 dark:text-emerald-400'>৳499</div>
                      </div>

                      <div class='flex items-center gap-1 shrink-0'>
                        <a expr:href='data:post.url' class='p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-700 transition' title='Details'>
                          <svg class='w-3.5 h-3.5 fill-none stroke-current stroke-2' viewBox='0 0 24 24'><path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/><circle cx='12' cy='12' r='3'/></svg>
                        </a>
                        <button class='px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition whitespace-nowrap' expr:onclick='&quot;openPaymentModal(\&quot;&quot; + data:post.title + &quot;\&quot;, 499)&quot;'>
                          Buy
                        </button>
                      </div>
                    </div>

                  </div>
                </article>
              </b:loop>
            </div>

            <!-- SLEEK ENTERPRISE LOAD MORE / EXPLORE ALL BUTTON -->
            <div class='mt-10 mb-6 flex flex-col items-center justify-center'>
              <b:if cond='data:newerPageUrl'>
                <!-- Standard Older/Newer Controls if available -->
                <div class='flex items-center gap-3'>
                  <a class='px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 hover:border-emerald-500/50 text-white font-heading font-bold text-xs shadow-md transition-all duration-300' expr:href='data:newerPageUrl'>
                    ← Newer Products
                  </a>
                  <b:if cond='data:olderPageUrl'>
                    <a class='group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400 text-white font-heading font-bold text-sm shadow-lg shadow-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300' expr:href='data:olderPageUrl'>
                      <svg class='w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform duration-300' fill='none' stroke='currentColor' stroke-width='2.2' viewBox='0 0 24 24'><path d='M19 9l-7 7-7-7' stroke-linecap='round' stroke-linejoin='round'/></svg>
                      <span>Explore All Products</span>
                      <span class='px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30'>50+ More</span>
                    </a>
                  </b:if>
                </div>
              <b:else/>
                <b:if cond='data:olderPageUrl'>
                  <a class='group inline-flex items-center justify-center gap-2.5 max-w-[300px] w-full px-6 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400 text-white font-heading font-bold text-sm shadow-lg shadow-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300' expr:href='data:olderPageUrl'>
                    <svg class='w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform duration-300' fill='none' stroke='currentColor' stroke-width='2.2' viewBox='0 0 24 24'><path d='M19 9l-7 7-7-7' stroke-linecap='round' stroke-linejoin='round'/></svg>
                    <span>Explore All Products</span>
                    <span class='px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30'>50+ More</span>
                  </a>
                <b:else/>
                  <a class='group inline-flex items-center justify-center gap-2.5 max-w-[300px] w-full px-6 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400 text-white font-heading font-bold text-sm shadow-lg shadow-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300' href='/search/label/All%20Products'>
                    <svg class='w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform duration-300' fill='none' stroke='currentColor' stroke-width='2.2' viewBox='0 0 24 24'><path d='M19 9l-7 7-7-7' stroke-linecap='round' stroke-linejoin='round'/></svg>
                    <span>Explore All Products</span>
                    <span class='px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30'>50+ More</span>
                  </a>
                </b:if>
              </b:if>
            </div>

            <!-- SLEEK BANGLADESHI TRUST METRICS BAR (BELOW EXPLORE ALL and DIRECTLY ABOVE FOUNDER CARD) -->
            <section class='w-full mt-6 mb-2'>
              <div class='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-lg text-white'>
                
                <!-- Metric 1: Happy Creators -->
                <div class='flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-emerald-500/30 transition-all group'>
                  <div class='w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform'>
                    <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'/></svg>
                  </div>
                  <div>
                    <div class='flex items-center gap-1.5'>
                      <span class='font-heading font-black text-sm sm:text-base text-white'>1,500+</span>
                      <span class='text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20'>Verified</span>
                    </div>
                    <p class='text-[11px] text-slate-400 font-medium leading-tight'>Happy Bangladeshi Creators</p>
                  </div>
                </div>

                <!-- Metric 2: Virus Free Scanned -->
                <div class='flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/30 transition-all group'>
                  <div class='w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform'>
                    <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/></svg>
                  </div>
                  <div>
                    <div class='flex items-center gap-1.5'>
                      <span class='font-heading font-black text-sm sm:text-base text-white'>100% Virus-Free</span>
                    </div>
                    <p class='text-[11px] text-slate-400 font-medium leading-tight'>Tested &amp; Malware Scanned</p>
                  </div>
                </div>

                <!-- Metric 3: Instant Delivery -->
                <div class='flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-amber-500/30 transition-all group'>
                  <div class='w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-transform'>
                    <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>
                  </div>
                  <div>
                    <div class='flex items-center gap-1.5'>
                      <span class='font-heading font-black text-sm sm:text-base text-white'>Instant Delivery</span>
                      <span class='text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20'>Auto Unlock</span>
                    </div>
                    <p class='text-[11px] text-slate-400 font-medium leading-tight'>bKash • Nagad • Google Drive</p>
                  </div>
                </div>

              </div>
            </section>

          </b:if>

          <!-- SINGLE POST (PRODUCT DETAIL VIEW) -->
          <b:if cond='data:view.isPost'>
            <b:loop values='data:posts' var='post'>
              <article class='space-y-8'>
                
                <!-- Breadcrumbs -->
                <nav class='flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400'>
                  <a class='hover:text-emerald-400' href='/'>Home</a>
                  <span>/</span>
                  <b:if cond='data:post.labels'>
                    <a class='hover:text-emerald-400' expr:href='data:post.labels.first.url'><data:post.labels.first.name/></a>
                    <span>/</span>
                  </b:if>
                  <span class='text-slate-900 dark:text-slate-200 line-clamp-1'><data:post.title/></span>
                </nav>

                <div class='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                  
                  <!-- Left: Media and Description Content -->
                  <div class='lg:col-span-8 space-y-6'>
                    <div class='rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-900'>
                      <b:if cond='data:post.featuredImage'>
                        <img expr:alt='data:post.title' expr:src='data:post.featuredImage' class='w-full max-h-96 object-cover'/>
                      </b:if>
                    </div>

                    <div class='bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4'>
                      <h1 class='font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight'>
                        <data:post.title/>
                      </h1>

                      <div class='flex flex-wrap items-center gap-3 text-xs'>
                        <span class='px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20'>
                          Verified Safe Download
                        </span>
                        <span class='text-amber-400 font-bold'>★ 4.9 Rating (Verified Buyers)</span>
                        <span class='text-slate-500 dark:text-slate-400'>• Lifetime Updates</span>
                      </div>

                      <div class='post-body prose dark:prose-invert max-w-none pt-4 border-t border-slate-200 dark:border-slate-800'>
                        <data:post.body/>
                      </div>
                    </div>
                  </div>

                  <!-- Right: Purchase Sidebar and Specifications -->
                  <div class='lg:col-span-4 space-y-6'>
                    
                    <!-- Pricing and Buy Box -->
                    <div class='sticky top-20 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6'>
                      
                      <div>
                        <div class='text-xs font-semibold text-slate-400 uppercase tracking-wider'>Instant Access Price</div>
                        <div class='flex items-baseline gap-2 mt-1'>
                          <span class='font-heading text-3xl font-black text-emerald-500 dark:text-emerald-400'>৳499 BDT</span>
                          <span class='text-sm text-slate-400 line-through'>৳1,500</span>
                        </div>
                      </div>

                      <div class='space-y-2.5'>
                        <button class='w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 transition flex items-center justify-center gap-2 cursor-pointer' expr:onclick='&quot;openPaymentModal(\&quot;&quot; + data:post.title + &quot;\&quot;, 499)&quot;'>
                          <svg class='w-4 h-4' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'>
                            <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'/>
                          </svg>
                          <span>Pay with bKash / Nagad</span>
                        </button>

                        <div class='grid grid-cols-2 gap-2'>
                          <button class='py-2.5 px-3 rounded-xl font-heading font-bold text-xs bg-slate-800/80 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 transition flex items-center justify-center gap-1.5 cursor-pointer' onclick='alert("Free sample preview unlocked! You can test the quality before buying.")' type='button'>
                            <svg class='w-3.5 h-3.5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'/><path d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'/></svg>
                            <span>Free Preview</span>
                          </button>

                          <a class='py-2.5 px-3 rounded-xl font-heading font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition flex items-center justify-center gap-1.5' expr:href='&quot;https://wa.me/8801673833783?text=Hello%20FileMarket,%20I%20want%20to%20buy%20&quot; + data:post.title' target='_blank'>
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>

                      <!-- MONEY-BACK GUARANTEE BADGE (CLEAN and TRUSTWORTHY) -->
                      <div class='relative overflow-hidden p-4 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/30 text-center shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-md space-y-2'>
                        <div class='flex items-center justify-center gap-2'>
                          <div class='w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0'>
                            <svg class='w-4 h-4 text-emerald-400' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/></svg>
                          </div>
                          <h4 class='font-heading font-extrabold text-sm sm:text-base text-emerald-300 tracking-tight'>
                            ১০০% মানি-ব্যাক গ্যারান্টি (100% Money-Back Guarantee)
                          </h4>
                        </div>
                        <div class='space-y-1 text-xs leading-relaxed'>
                          <p class='font-semibold text-slate-100'>ফাইলে কোনো সমস্যা থাকলে বা কাজ না করলে ২৪ ঘণ্টার মধ্যে ১০০% রিফান্ড!</p>
                          <p class='text-[11px] text-emerald-300/80 font-medium'>(Instant 100% refund if asset is defective or not as described)</p>
                        </div>
                      </div>

                      <!-- PRODUCT SPECIFICATION CARDS (Gumroad / UI8 Soft Glass Style) -->
                      <div class='pt-2 space-y-2'>
                        <h4 class='text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-2 flex items-center gap-1.5'>
                          <span class='w-1.5 h-1.5 rounded-full bg-emerald-400'></span>
                          <span>Product Specifications</span>
                        </h4>
                        <div class='grid grid-cols-2 gap-2 text-xs'>
                          <div class='p-3 rounded-[12px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center gap-2.5'>
                            <div class='w-[34px] h-[34px] rounded-[8px] bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0'>
                              <svg class='w-3.5 h-3.5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><rect height='16' rx='2' width='20' x='2' y='4'/><path d='M6 8h.01M10 8h.01'/></svg>
                            </div>
                            <div class='min-w-0'>
                              <span class='block text-[10px] font-semibold uppercase tracking-wider text-gray-400'>Delivery</span>
                              <span class='text-xs font-medium text-white truncate block'>Instant Download</span>
                            </div>
                          </div>

                          <div class='p-3 rounded-[12px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center gap-2.5'>
                            <div class='w-[34px] h-[34px] rounded-[8px] bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0'>
                              <svg class='w-3.5 h-3.5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/></svg>
                            </div>
                            <div class='min-w-0'>
                              <span class='block text-[10px] font-semibold uppercase tracking-wider text-gray-400'>Access</span>
                              <span class='text-xs font-medium text-white truncate block'>Lifetime Drive</span>
                            </div>
                          </div>

                          <div class='p-3 rounded-[12px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center gap-2.5'>
                            <div class='w-[34px] h-[34px] rounded-[8px] bg-gradient-to-br from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0'>
                              <svg class='w-3.5 h-3.5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/></svg>
                            </div>
                            <div class='min-w-0'>
                              <span class='block text-[10px] font-semibold uppercase tracking-wider text-gray-400'>License</span>
                              <span class='text-xs font-medium text-white truncate block'>Commercial Use</span>
                            </div>
                          </div>

                          <div class='p-3 rounded-[12px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center gap-2.5'>
                            <div class='w-[34px] h-[34px] rounded-[8px] bg-gradient-to-br from-amber-500/15 to-emerald-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0'>
                              <svg class='w-3.5 h-3.5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><rect height='18' rx='2' width='18' x='3' y='4'/><line x1='16' x2='16' y1='2' y2='6'/><line x1='8' x2='8' y1='2' y2='6'/><line x1='3' x2='21' y1='10' y2='10'/></svg>
                            </div>
                            <div class='min-w-0'>
                              <span class='block text-[10px] font-semibold uppercase tracking-wider text-gray-400'>Version</span>
                              <span class='text-xs font-medium text-white truncate block'>2026 Latest</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- WHAT'S INCLUDED CHECKLIST -->
                      <div class='pt-2 space-y-2'>
                        <h4 class='text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-2 flex items-center gap-1.5'>
                          <span class='w-1.5 h-1.5 rounded-full bg-emerald-400'></span>
                          <span>What&apos;s Included</span>
                        </h4>
                        <div class='space-y-1.5'>
                          <div class='p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5'>
                            <div class='w-4.5 h-4.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0'>✓</div>
                            <span class='text-xs font-medium text-gray-200'>Full Source Files &amp; Assets Included</span>
                          </div>
                          <div class='p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5'>
                            <div class='w-4.5 h-4.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0'>✓</div>
                            <span class='text-xs font-medium text-gray-200'>100% Virus-Free &amp; Malware Tested</span>
                          </div>
                          <div class='p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5'>
                            <div class='w-4.5 h-4.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0'>✓</div>
                            <span class='text-xs font-medium text-gray-200'>Direct WhatsApp Priority Support</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </article>
            </b:loop>
          </b:if>

        </b:includable>
      </b:widget>
    </b:section>
  </main>

  <!-- BKASH and NAGAD PAYMENT CHECKOUT MODAL -->
  <div class='fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md' id='payment-modal'>
    <div class='w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-2xl p-6 sm:p-8 space-y-6 relative'>
      
      <!-- Close Button -->
      <button class='absolute top-4 right-4 text-slate-400 hover:text-white text-xl p-1' onclick='closePaymentModal()'>✕</button>

      <div class='flex items-center gap-3'>
        <div class='w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold'>💳</div>
        <div>
          <h3 class='font-heading text-lg font-bold'>Instant Payment Verification</h3>
          <p class='text-xs text-slate-400' id='modal-product-title'>Order Product</p>
        </div>
      </div>

      <!-- Payment Method Selector -->
      <div class='grid grid-cols-2 gap-3'>
        <label class='flex items-center justify-between p-3 rounded-xl border border-pink-500/40 bg-pink-500/10 cursor-pointer'>
          <div class='flex items-center gap-2'>
            <span class='w-3 h-3 rounded-full bg-pink-500'></span>
            <span class='font-bold text-xs text-pink-400'>bKash (Send Money)</span>
          </div>
        </label>
        <label class='flex items-center justify-between p-3 rounded-xl border border-orange-500/40 bg-orange-500/10 cursor-pointer'>
          <div class='flex items-center gap-2'>
            <span class='w-3 h-3 rounded-full bg-orange-500'></span>
            <span class='font-bold text-xs text-orange-400'>Nagad (Send Money)</span>
          </div>
        </label>
      </div>

      <!-- Copy Number Card -->
      <div class='p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between'>
        <div>
          <div class='text-[10px] text-slate-400 uppercase font-bold'>Personal Number</div>
          <div class='text-lg font-mono font-bold text-emerald-400' id='payment-number'>01673833783</div>
        </div>
        <button class='px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-bold transition' onclick='copyPaymentNumber()'>
          Copy Number
        </button>
      </div>

      <!-- Risk-Free Guarantee Badge -->
      <div class='rounded-xl bg-emerald-500/10 border border-emerald-500/25 px-3 py-2 text-emerald-300 text-xs flex items-center gap-2'>
        <span class='font-bold text-white shrink-0'>⚡ ১০০% গ্যারান্টি:</span>
        <span class='truncate text-[11px] text-slate-200'>ওয়ার্কিং ফাইল | ইনস্ট্যান্ট ড্রাইভ লিঙ্ক | কোনো সমস্যা হলে সাপোর্ট বা রিফান্ড</span>
      </div>

      <!-- Verification Input Form -->
      <form class='space-y-4' onsubmit='handleOrderSubmit(event)'>
        <div>
          <label class='block text-xs font-semibold text-slate-300 mb-1'>Your Sender Phone Number</label>
          <input class='w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400' id='sender-phone' placeholder='017xxxxxxxx' required='required' type='text'/>
        </div>
        <div>
          <label class='block text-xs font-semibold text-slate-300 mb-1'>Transaction ID (TrxID)</label>
          <input class='w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-400 uppercase' id='trx-id' placeholder='e.g. BL92A4KF9' required='required' type='text'/>
        </div>

        <button class='w-full py-3 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20 hover:opacity-95 transition' type='submit'>
          Submit &amp; Unlock Instant Download
        </button>
      </form>

      <!-- Direct WhatsApp Fallback -->
      <div class='pt-3 border-t border-slate-800 text-center'>
        <button class='text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold' onclick='sendOrderToWhatsApp()'>
          💬 Send TrxID directly to WhatsApp (01673833783)
        </button>
      </div>

    </div>
  </div>

  <!-- FOOTER SECTION (WITH ATTACHED FOUNDER TRUST CARD) -->
  <footer class='mt-auto bg-[#0B0F19] text-slate-400 border-t border-slate-800/80 transition-colors'>
    
    <!-- Top Attached Founder Trust Card -->
    <div class='border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8' id='founder-section'>
      <div class='max-w-7xl mx-auto'>
        <div class='relative rounded-3xl bg-[#0B0F19] border border-slate-800/80 p-6 sm:p-8 shadow-[0_0_35px_rgba(16,185,129,0.12)] overflow-hidden'>
          
          <!-- Ambient Glow Decorators -->
          <div class='absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none'></div>
          <div class='absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none'></div>

          <div class='relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8'>
            
            <!-- Founder Squircle Image Container (160px × 160px with Lightbox and Anti-Theft Shield) -->
            <div class='relative shrink-0 group'>
              <button
                class='relative block w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] ring-4 ring-emerald-500/25 hover:scale-[1.02] transition-transform cursor-zoom-in focus:outline-none'
                onclick='openFounderModal()'
                title='Click to view full high-resolution verified photo'
                type='button'
              >
                <div class='relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900'>
                  <img
                    alt='Joy Barmon - Founder &amp; Lead Digital Architect'
                    class='w-full h-full object-cover select-none'
                    oncontextmenu='return false;'
                    ondragstart='return false;'
                    onerror="this.onerror=null;this.src='https://drive.google.com/uc?export=view&amp;id=1XORisly52YSBcNc4Iukz60y9ho9GrEuE';"
                    referrerpolicy='no-referrer'
                    src='https://lh3.googleusercontent.com/d/1XORisly52YSBcNc4Iukz60y9ho9GrEuE'
                    style='pointer-events: auto; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;'
                  />
                  <!-- Anti-Theft Shield Overlay -->
                  <div class='absolute inset-0 z-10 bg-transparent' oncontextmenu='return false;' ondragstart='return false;'></div>
                  
                  <!-- Hover Zoom Icon Hint -->
                  <div class='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-20'>
                    <svg class='w-6 h-6 text-emerald-400 drop-shadow' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7'/></svg>
                  </div>
                </div>
              </button>

              <div class='absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 flex items-center gap-1 font-black text-xs shadow-lg shadow-emerald-500/50 border-2 border-slate-900 pointer-events-none z-20'>
                <span class='text-xs'>✓</span>
                <span class='text-[9px] tracking-wider uppercase'>Verified</span>
              </div>
            </div>

            <!-- Founder Details and Bilingual Trust Message -->
            <div class='flex-1 text-center md:text-left space-y-3.5'>
              <div class='space-y-1'>
                <div class='flex flex-wrap items-center justify-center md:justify-start gap-2.5'>
                  <h3 class='font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight'>
                    Joy Barmon
                  </h3>
                  <span class='px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40 inline-flex items-center gap-1'>
                    <svg class='w-3.5 h-3.5' fill='currentColor' viewBox='0 0 20 20'><path clip-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' fill-rule='evenodd'></path></svg>
                    Verified Architect
                  </span>
                </div>

                <p class='text-sm font-semibold text-emerald-400'>
                  Founder &amp; Lead Digital Architect | FileMarket.site
                </p>
              </div>

              <!-- Bilingual Trust Text (English and Bangla) -->
              <div class='space-y-2 max-w-3xl'>
                <p class='text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80'>
                  &#8220;Every asset on FileMarket is 100% verified, virus-free, and tested before upload. Direct personal WhatsApp assistance for any download or usage issue.&#8221;
                </p>
                
                <p class='text-xs sm:text-[13px] text-emerald-300/90 leading-relaxed font-sans bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20'>
                  &#8220;FileMarket-এর প্রতিটি ফাইল, সফটওয়্যার ও কোর্স আপলোড করার আগে সম্পূর্ণ ভাইরাস-মুক্ত ও কোয়ালিটি যাচাই করা হয়। যেকোনো ডাউনলোড বা ফাইল ব্যবহারের সমস্যায় সরাসরি আমার সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারবেন।&#8221;
                </p>
              </div>

              <!-- Direct WhatsApp Action Button -->
              <div class='pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3'>
                <a class='inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-heading font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all transform hover:-translate-y-0.5' href='https://wa.me/8801673833783' target='_blank'>
                  <img alt='WhatsApp Icon' class='w-5 h-5 object-contain shrink-0' referrerpolicy='no-referrer' src='https://lh3.googleusercontent.com/d/1941nw0eU_JIhKT_4QLuglzwuyDieb-jW'/>
                  <span>Chat Directly with Joy on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Directory and Links -->
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8'>
      
      <!-- Brand and Address -->
      <div class='md:col-span-5 space-y-4'>
        <a class='flex items-center gap-3 group select-none transition-transform duration-300 hover:scale-[1.01]' href='/' aria-label='FileMarket Home'>
          <div class='fm-luxury-box relative w-10 h-10 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 border border-emerald-500/40 group-hover:border-emerald-400' style='border-radius: 12px;'>
            <img alt='FileMarket Logo' class='w-full h-full object-cover' src='https://lh3.googleusercontent.com/d/1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10' referrerpolicy='no-referrer' onerror="this.onerror=null;this.src='https://drive.google.com/uc?export=view&amp;id=1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10';"/>
          </div>
          <span class='inline-flex items-center tracking-[-0.5px] text-[22px]' style="font-family: 'Inter', sans-serif; font-weight: 800;">
            <span style='color: #FFFFFF;'>File</span>
            <span class='fm-luxury-text' style='color: #00D293; font-weight: 900;'>Market</span>
            <span class='text-slate-400 text-xs font-mono font-normal ml-1 opacity-80'>.site</span>
          </span>
        </a>
        <p class='text-xs leading-relaxed max-w-sm'>
          Bangladesh&apos;s premier digital asset marketplace. Verified courses, premium scripts, AI tools, and creative video bundles with instant delivery.
        </p>
        <div class='text-xs space-y-1.5 pt-2'>
          <p><strong class='text-slate-200'>Address:</strong> Bayzid, Chittagong - 4214, Bangladesh</p>
          <p class='flex items-center gap-1.5'><img alt='WhatsApp' class='w-3.5 h-3.5 object-contain' referrerpolicy='no-referrer' src='https://lh3.googleusercontent.com/d/1941nw0eU_JIhKT_4QLuglzwuyDieb-jW'/><strong class='text-slate-200'>Founder WhatsApp:</strong> <a class='text-slate-300 hover:text-white' href='https://wa.me/8801673833783' target='_blank'>+8801673833783</a></p>
        </div>
      </div>

      <!-- Quick Categories -->
      <div class='md:col-span-3 space-y-3'>
        <h4 class='font-heading text-sm font-bold text-white uppercase tracking-wider'>Product Categories</h4>
        <ul class='text-xs space-y-2'>
          <li><a class='hover:text-emerald-400' href='/search/label/Video%20Bundles'>Video Bundles</a></li>
          <li><a class='hover:text-emerald-400' href='/search/label/Online%20Courses'>Online Courses</a></li>
          <li><a class='hover:text-emerald-400' href='/search/label/E-Books'>E-Books</a></li>
          <li><a class='hover:text-emerald-400' href='/search/label/Premium%20PC%20Software'>PC Software</a></li>
          <li><a class='hover:text-emerald-400' href='/search/label/PHP%20Scripts'>PHP Scripts</a></li>
        </ul>
      </div>

      <!-- Payment and Security Guarantees -->
      <div class='md:col-span-4 space-y-3.5'>
        <div class='flex items-center justify-between'>
          <h4 class='font-heading text-xs font-bold text-slate-200 uppercase tracking-wider'>Payments &amp; Security</h4>
          <span class='inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20'>
            <svg class='w-3 h-3 fill-none stroke-current stroke-2' viewBox='0 0 24 24'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/><path d='m9 12 2 2 4-4'/></svg>
            <span>100% Secure</span>
          </span>
        </div>

        <p class='text-xs text-slate-400 leading-relaxed'>
          Instant automated verification with official payment gateway channels.
        </p>

        <!-- Ultra-Modern Glassmorphism Payment Pills -->
        <div class='flex flex-wrap items-center gap-2.5 pt-1'>
          
          <!-- bKash Pill -->
          <div class='group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-pink-500/30 hover:border-pink-500/80 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(209,32,83,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-default'>
            <div class='w-6 h-6 rounded-full flex items-center justify-center shadow-sm shrink-0 overflow-hidden'>
              <svg class='w-full h-full' fill='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='50' cy='50' fill='#E2136E' r='50'/>
                <polygon fill='#FFFFFF' points='43.7,48.7 21.8,20.3 51.1,23.7'/>
                <polygon fill='#FFFFFF' points='21.8,20.3 20.8,25.1 33.5,36.2'/>
                <polygon fill='#FFFFFF' points='43.7,48.7 51.1,23.7 65.2,41.2'/>
                <polygon fill='#FFFFFF' points='65.2,41.2 84.8,44.2 78.0,44.5'/>
                <polygon fill='#FFFFFF' points='65.2,41.2 78.0,44.5 72.6,52.8 43.7,48.7'/>
                <polygon fill='#FFFFFF' points='43.7,48.7 72.6,52.8 47.9,65.0'/>
                <polygon fill='#FFFFFF' points='43.7,48.7 47.9,65.0 34.9,79.6'/>
                <polyline fill='none' points='43.7,48.7 51.1,23.7' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <polyline fill='none' points='43.7,48.7 65.2,41.2' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <polyline fill='none' points='43.7,48.7 72.6,52.8' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <polyline fill='none' points='43.7,48.7 47.9,65.0' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <polyline fill='none' points='65.2,41.2 72.6,52.8' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <polyline fill='none' points='78.0,44.5 72.6,52.8' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <polyline fill='none' points='21.8,20.3 43.7,48.7' stroke='#E2136E' stroke-linecap='round' stroke-linejoin='round' stroke-width='0.9'/>
                <line stroke='#E2136E' stroke-linecap='round' stroke-width='0.8' x1='51.5' x2='70.5' y1='64.5' y2='54.5'/>
                <line stroke='#E2136E' stroke-linecap='round' stroke-width='0.8' x1='22.5' x2='33.0' y1='25.5' y2='36.0'/>
              </svg>
            </div>
            <span class='text-xs font-extrabold text-pink-200 group-hover:text-pink-100 tracking-tight'>bKash</span>
          </div>

          <!-- Nagad Pill -->
          <div class='group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-orange-500/30 hover:border-orange-500/80 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(247,147,30,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-default'>
            <div class='w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm shrink-0'>
              <img alt='Nagad' class='w-full h-full object-contain' referrerpolicy='no-referrer' src='https://lh3.googleusercontent.com/d/1B-mR6Tc-KaZGWejKJap3gjN_YrPKPfYm'/>
            </div>
            <span class='text-xs font-extrabold text-orange-200 group-hover:text-orange-100 tracking-tight'>Nagad</span>
          </div>

          <!-- Binance Pay Pill -->
          <div class='group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/80 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(240,185,11,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-default'>
            <div class='w-6 h-6 rounded-full bg-[#181A20] flex items-center justify-center p-0.5 shadow-sm shrink-0'>
              <img alt='Binance Pay' class='w-full h-full object-contain' referrerpolicy='no-referrer' src='https://lh3.googleusercontent.com/d/1oriM4R9YRo9TSb6btdS3v4gRioeTCBL7'/>
            </div>
            <span class='text-xs font-extrabold text-amber-200 group-hover:text-amber-100 tracking-tight'>Binance Pay</span>
          </div>

        </div>

      </div>
    </div>

    <!-- START: Refined Clean Footer Bottom -->
      <div class='mt-8 pt-6 border-t border-slate-800/80 flex flex-col items-center justify-center text-center space-y-3 w-full max-w-4xl mx-auto px-4 pb-8'>
        
        <!-- Security Engine Line -->
        <div class='inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium'>
          <span>🔒</span>
          <span>Powered by <strong class='text-slate-200'>FileMarket.site Engine</strong></span>
          <span class='text-slate-600'>•</span>
          <span class='text-emerald-400'>256-Bit SSL Encrypted</span>
        </div>

        <!-- Interactive Policy Links (Grid/Flex Row) -->
        <div class='flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-medium text-slate-300'>
          <button onclick="openPolicyModal('privacy')" class='hover:text-emerald-400 transition cursor-pointer'>🔒 Privacy Policy</button>
          <span class='text-slate-700 hidden sm:inline'>•</span>
          <button onclick="openPolicyModal('refund')" class='hover:text-emerald-400 transition cursor-pointer'>🛡️ 100% Refund Policy</button>
          <span class='text-slate-700 hidden sm:inline'>•</span>
          <button onclick="openPolicyModal('terms')" class='hover:text-emerald-400 transition cursor-pointer'>📜 Terms of Service</button>
          <span class='text-slate-700 hidden sm:inline'>•</span>
          <button onclick="openPolicyModal('about')" class='hover:text-emerald-400 transition cursor-pointer'>📞 About &amp; Contact</button>
        </div>

        <!-- Trust Highlights -->
        <div class='flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-400'>
          <span>⚡ Instant Access</span>
          <span>•</span>
          <span>💬 24/7 WhatsApp Support</span>
          <span>•</span>
          <span>🛡️ Genuine Licenses</span>
        </div>

        <!-- Copyright -->
        <p class='text-[11px] text-slate-400 pt-1'>
          © 2026 <span class='text-slate-300 font-semibold'>FileMarket.site</span>. Designed for Speed, SEO &amp; Conversions.
        </p>

      </div>
      <!-- END: Refined Clean Footer Bottom -->
  </footer>

  <!-- MOBILE SLIDE-OVER DRAWER MENU (Auth-Aware) -->
  <div id='mobile-drawer-overlay' class='fixed inset-0 z-[99998] bg-black/70 backdrop-blur-sm hidden transition-opacity duration-300 opacity-0' onclick='closeMobileDrawer()'></div>
  <div id='mobile-drawer' class='fixed top-0 right-0 bottom-0 z-[99999] w-full max-w-xs bg-slate-900/95 dark:bg-[#0B0F19]/95 backdrop-blur-[20px] border-l border-slate-800 text-white shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'>
    
    <!-- Drawer Header -->
    <div class='flex items-center justify-between p-5 border-b border-slate-800/80'>
      
      <!-- Guest Header View -->
      <div id='drawer-header-guest' class='flex items-center gap-3'>
        <div class='w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-emerald-400 font-bold'>
          🔒
        </div>
        <div>
          <h3 class='font-bold text-sm text-white'>Guest User</h3>
          <p class='text-[11px] text-slate-400'>FileMarket.site Auth Center</p>
        </div>
      </div>

      <!-- Authenticated User Header View -->
      <div id='drawer-header-user' class='hidden items-center gap-3'>
        <div id='drawer-user-avatar-box' class='w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold overflow-hidden shrink-0 shadow-sm'>
          <img id='drawer-user-photo' src='' alt='Profile' class='w-full h-full object-cover hidden'/>
          <span id='drawer-user-initials'>FM</span>
        </div>
        <div class='min-w-0 flex-1'>
          <h3 id='drawer-user-name' class='font-bold text-sm text-white truncate'>Joy Barmon</h3>
          <p id='drawer-user-email' class='text-[11px] text-emerald-400 flex items-center gap-1 truncate'>
            <span>✓ Verified Member</span>
          </p>
        </div>
      </div>

      <button onclick='closeMobileDrawer()' class='p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer' aria-label='Close menu'>
        <svg class='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path d='M6 18L18 6M6 6l12 12'/></svg>
      </button>
    </div>

    <!-- Drawer Body Content -->
    <div class='flex-1 overflow-y-auto p-5 space-y-6'>
      
      <!-- 1. GUEST AUTH SECTION (Not Logged In) -->
      <div id='guest-auth-section' class='space-y-3 bg-slate-800/30 p-4 rounded-2xl border border-slate-800/80'>
        <div class='text-xs font-bold text-slate-400 uppercase tracking-wider mb-1'>
          Account Access
        </div>
        <p class='text-xs text-slate-400 leading-relaxed mb-3'>
          Log in or sign up to access your purchased files, licenses and Google Drive lockers.
        </p>
        
        <!-- Login Button (Secondary style: text-slate-300 hover:text-white) -->
        <button onclick='closeMobileDrawer(); openLoginView();' type='button' class='w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-sm'>
          <svg class='w-4 h-4 text-slate-300' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'/></svg>
          <span>Log In</span>
        </button>

        <!-- Sign Up Button (Primary Rose-Crimson Gradient: btn-glow-red) -->
        <button onclick='closeMobileDrawer(); openLoginView(); if(!isAuthSignUpMode) toggleAuthMode();' type='button' class='w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 hover:from-rose-400 hover:to-rose-500 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 transition cursor-pointer'>
          <svg class='w-4 h-4' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'/></svg>
          <span>Sign Up Free</span>
        </button>
      </div>

      <!-- 2. AUTHENTICATED USER SECTION (Logged In) -->
      <div id='user-profile-section' class='hidden space-y-2'>
        <a href='/p/profile.html' class='flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition text-sm font-medium'>
          <svg class='w-5 h-5 text-emerald-400' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/></svg>
          <div class='flex-1'>
            <span class='block text-white font-semibold'>User Profile</span>
            <span class='block text-xs text-slate-400'>Manage account &amp; details</span>
          </div>
        </a>

        <a href='/p/my-products.html' class='flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition text-sm font-medium'>
          <svg class='w-5 h-5 text-emerald-400' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'/></svg>
          <div class='flex-1'>
            <span class='block text-white font-semibold'>My Products / Downloads</span>
            <span class='block text-xs text-slate-400'>Access purchased assets</span>
          </div>
        </a>

        <button onclick='closeMobileDrawer(); alert("AI SEO Generator active!");' type='button' class='w-full flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition text-sm font-medium text-left cursor-pointer'>
          <svg class='w-5 h-5 text-emerald-400' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>
          <div class='flex-1'>
            <span class='block text-emerald-300 font-semibold'>AI SEO Generator</span>
            <span class='block text-xs text-slate-400'>Create optimized copy</span>
          </div>
        </button>

        <a href='https://wa.me/8801673833783?text=Hello%20FileMarket%2C%20I%20need%20support.' target='_blank' rel='noopener noreferrer' class='flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition text-sm font-medium text-emerald-400'>
          <div class='w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0'>
            💬
          </div>
          <div class='flex-1'>
            <span class='block text-white font-semibold'>WhatsApp Support</span>
            <span class='block text-xs text-slate-400'>Chat with founder instantly</span>
          </div>
        </a>

        <button onclick='logoutBloggerUser()' type='button' class='w-full flex items-center gap-3 p-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition text-sm font-medium text-left cursor-pointer text-rose-400 mt-2'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'/></svg>
          <span class='font-semibold'>Log Out</span>
        </button>
      </div>

      <!-- 3. FIXED BOTTOM SECTION: Currency and Dual-Pill Theme Switcher -->
      <div class='p-4 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4'>
        <div>
          <span class='text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider'>Currency Switcher</span>
          <div class='flex items-center gap-2'>
            <button onclick='setBloggerCurrency("BDT"); closeMobileDrawer();' class='flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-emerald-500 text-white shadow-sm' id='drawer-curr-bdt'>BDT (৳)</button>
            <button onclick='setBloggerCurrency("USD"); closeMobileDrawer();' class='flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-slate-800 text-slate-300 hover:text-white' id='drawer-curr-usd'>USD ($)</button>
          </div>
        </div>
        <div>
          <span class='text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider'>Theme Mode</span>
          <div class='flex items-center gap-2'>
            <button onclick='setBloggerTheme("light"); closeMobileDrawer();' class='flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-1.5' id='drawer-theme-day'>
              <span>☀️ Day</span>
            </button>
            <button onclick='setBloggerTheme("dark"); closeMobileDrawer();' class='flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-emerald-500 text-white shadow-sm' id='drawer-theme-night'>
              <span>🌙 Night</span>
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- Drawer Footer -->
    <div class='p-4 border-t border-slate-800/80 text-center text-xs text-slate-500'>
      FileMarket.site • Secure Delivery
    </div>
  </div>

  <!-- FOUNDER PHOTO LIGHTBOX MODAL -->
  <div id='founder-photo-modal' class='fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/90 backdrop-blur-md' onclick='closeFounderModal()'>
    <div class='relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden' onclick='event.stopPropagation()'>
      <!-- Close Button -->
      <button
        class='absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition'
        onclick='closeFounderModal()'
        type='button'
      >
        <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M6 18L18 6M6 6l12 12'/></svg>
      </button>

      <div class='space-y-4'>
        <div class='relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)] bg-slate-950 flex items-center justify-center'>
          <img
            alt='Joy Barmon - Full Resolution Official Photo'
            class='w-full max-h-[70vh] object-contain select-none'
            oncontextmenu='return false;'
            ondragstart='return false;'
            onerror="this.onerror=null;this.src='https://drive.google.com/uc?export=view&amp;id=1XORisly52YSBcNc4Iukz60y9ho9GrEuE';"
            referrerpolicy='no-referrer'
            src='https://lh3.googleusercontent.com/d/1XORisly52YSBcNc4Iukz60y9ho9GrEuE'
            style='pointer-events: auto; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;'
          />
          <!-- Anti-Theft Shield Overlay -->
          <div class='absolute inset-0 z-20 bg-transparent' oncontextmenu='return false;' ondragstart='return false;'></div>
        </div>

        <div class='flex items-center justify-between pt-1 text-xs'>
          <div>
            <h4 class='font-heading text-base font-bold text-white'>Joy Barmon</h4>
            <p class='text-emerald-400 font-medium'>Founder &amp; Lead Digital Architect</p>
          </div>
          <span class='px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/40'>
            ✓ Verified Official
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- ENTERPRISE LEGAL and POLICY MODAL -->
  <div id='policy-modal' class='fixed inset-0 z-[99999] hidden items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md' onclick='closePolicyModal()'>
    <div class='relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-200 transition-colors' onclick='event.stopPropagation()'>
      <!-- Modal Top Header -->
      <div class='p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 shrink-0'>
        <div class='flex items-center gap-3'>
          <div id='policy-icon-box' class='w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 font-bold text-lg'>
            🔒
          </div>
          <div>
            <h2 id='policy-modal-title' class='font-heading text-lg sm:text-xl font-extrabold text-white'>
              Privacy Policy (গোপনীয়তা নীতি)
            </h2>
            <p class='text-xs text-slate-400'>
              FileMarket.site Legal &amp; Compliance Center
            </p>
          </div>
        </div>

        <button onclick='closePolicyModal()' type='button' class='p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer' aria-label='Close modal'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M6 18L18 6M6 6l12 12'/></svg>
        </button>
      </div>

      <!-- Tab Selector Nav -->
      <div class='flex items-center gap-1 p-2 bg-slate-950/80 border-b border-slate-800 overflow-x-auto scrollbar-none shrink-0'>
        <button id='policy-tab-privacy' onclick='switchPolicyTab("privacy")' type='button' class='px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'>
          <span>🔒</span>
          <span>Privacy Policy</span>
        </button>
        <button id='policy-tab-refund' onclick='switchPolicyTab("refund")' type='button' class='px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 text-slate-400 hover:text-white hover:bg-slate-800'>
          <span>🛡️</span>
          <span>100% Refund</span>
        </button>
        <button id='policy-tab-terms' onclick='switchPolicyTab("terms")' type='button' class='px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 text-slate-400 hover:text-white hover:bg-slate-800'>
          <span>📜</span>
          <span>Terms of Service</span>
        </button>
        <button id='policy-tab-contact' onclick='switchPolicyTab("contact")' type='button' class='px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 text-slate-400 hover:text-white hover:bg-slate-800'>
          <span>📞</span>
          <span>About &amp; Contact</span>
        </button>
      </div>

      <!-- Modal Content Body -->
      <div class='p-5 sm:p-7 overflow-y-auto max-h-[65vh] leading-relaxed text-sm space-y-5 text-slate-300'>
        
        <!-- PRIVACY CONTENT -->
        <div id='policy-content-privacy' class='space-y-4'>
          <div class='p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-medium leading-relaxed'>
            🔒 <strong>FileMarket.site Privacy Protection:</strong> We are committed to safeguarding your personal data and ensuring transparent digital transactions.
          </div>
          <div class='space-y-3'>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2'>
              <span class='text-emerald-400'>✓</span>
              <span>1. User Data Collection (তথ্য সংগ্রহ)</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              FileMarket.site only collects essential transaction data (bKash/Nagad sender phone number &amp; Transaction ID) required to verify payments and deliver automated Google Drive access links. We do not store sensitive payment passwords or PIN numbers.
            </p>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2 pt-2'>
              <span class='text-emerald-400'>✓</span>
              <span>2. No Third-Party Data Sharing (তৃতীয় পক্ষের সাথে শেয়ার বা বিক্রি নিষিদ্ধ)</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              We guarantee 100% privacy. Your contact information is never sold, shared, or rented to any third-party advertisers, spam networks, or data aggregators.
            </p>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2 pt-2'>
              <span class='text-emerald-400'>✓</span>
              <span>3. Secure Access &amp; Google Drive Locker</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              Digital assets are delivered directly via encrypted lifetime Google Drive locker links. Downloads are virus-free, tested, and secure for immediate usage.
            </p>
          </div>
        </div>

        <!-- REFUND CONTENT -->
        <div id='policy-content-refund' class='hidden space-y-4'>
          <div class='p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-medium leading-relaxed'>
            🛡️ <strong>100% Money-Back Guarantee:</strong> Your satisfaction is fully protected by FileMarket&apos;s 24-Hour Instant Refund Policy.
          </div>
          <div class='space-y-3'>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2'>
              <span class='text-emerald-400'>✓</span>
              <span>1. 24-Hour Refund Guarantee (২৪ ঘণ্টার মধ্যে ফুল রিফান্ড)</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              If any digital course, software, script, video bundle, or preset link is broken, corrupt, incomplete, or missing promised files, we will issue a 100% instant refund back to your bKash/Nagad wallet within 24 hours.
            </p>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2 pt-2'>
              <span class='text-emerald-400'>✓</span>
              <span>2. How to Claim a Refund (কিভাবে রিফান্ড পাবেন)</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              Simply send your order Transaction ID (TrxID) and product name directly to Founder Joy Barmon on WhatsApp (<strong class='text-emerald-400'>+8801673833783</strong>). Our support team will verify and process your cash refund instantly.
            </p>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2 pt-2'>
              <span class='text-emerald-400'>✓</span>
              <span>3. Replacement &amp; Direct Support Option</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              In addition to a cash refund, you can choose a free replacement link or get direct remote assistance from our technical team.
            </p>
          </div>
        </div>

        <!-- TERMS CONTENT -->
        <div id='policy-content-terms' class='hidden space-y-4'>
          <div class='p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium leading-relaxed'>
            📜 <strong>FileMarket.site Terms of Usage:</strong> By placing an order, you agree to these fair usage and digital licensing guidelines.
          </div>
          <div class='space-y-3'>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2'>
              <span class='text-emerald-400'>✓</span>
              <span>1. Lifetime License Rights (লাইফটাইম ব্যবহারের অধিকার)</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              All digital products purchased from FileMarket grant you a lifetime non-exclusive license for personal or commercial projects without recurring subscription fees.
            </p>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2 pt-2'>
              <span class='text-emerald-400'>✓</span>
              <span>2. Redistribution Prohibition (পুনরায় পাবলিকলি শেয়ার সম্পূর্ণ নিষিদ্ধ)</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              Reselling, re-distributing, or publicly sharing raw master Google Drive locker links without prior authorization is strictly prohibited and will result in access revocation.
            </p>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2 pt-2'>
              <span class='text-emerald-400'>✓</span>
              <span>3. Instant Delivery Guarantee</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              Upon bKash/Nagad payment verification, instant Google Drive download access is activated automatically.
            </p>
          </div>
        </div>

        <!-- CONTACT CONTENT -->
        <div id='policy-content-contact' class='hidden space-y-4'>
          <div class='p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium leading-relaxed'>
            📞 <strong>About FileMarket.site &amp; Contact:</strong> Bangladesh&apos;s premier automated digital assets marketplace.
          </div>
          <div class='space-y-3'>
            <h3 class='font-heading text-base font-bold text-white flex items-center gap-2'>
              <span class='text-emerald-400'>✓</span>
              <span>Marketplace Overview</span>
            </h3>
            <p class='text-xs sm:text-sm leading-relaxed text-slate-300'>
              FileMarket.site is founded and operated by Joy Barmon (Lead Digital Architect). We curate, verify, and host top-tier digital assets including 4K video bundles, full-stack programming courses, PC software, PHP scripts, and AI prompt vaults.
            </p>
            <div class='p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs sm:text-sm'>
              <p><strong>📍 Registered Address:</strong> Bayzid, Chittagong - 4214, Bangladesh</p>
              <p><strong>💬 Founder WhatsApp:</strong> <a href='https://wa.me/8801673833783' target='_blank' class='text-emerald-400 font-bold hover:underline'>+8801673833783</a></p>
              <p><strong>⚡ Support Hours:</strong> 24/7 Automated Delivery &amp; Dedicated WhatsApp Assistance</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Bottom Action Bar -->
      <div class='p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between shrink-0'>
        <span class='text-xs text-slate-400 font-medium'>
          FileMarket.site • Official Verified Policy
        </span>
        <button onclick='closePolicyModal()' type='button' class='px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-extrabold text-xs transition cursor-pointer shadow-md'>
          I Understand
        </button>
      </div>

    </div>
  </div>

  <!-- SMART AI-POWERED SEARCH OVERLAY MODAL -->
  <div id='smart-search-modal' class='fm-modal fixed inset-x-0 top-0 bottom-[75px] z-[8000] hidden flex-col bg-slate-950/90 backdrop-blur-[20px] animate-in fade-in zoom-in-95 duration-200 overflow-y-auto'>
    <div class='max-w-4xl w-full mx-auto p-4 sm:p-6 flex items-center justify-between border-b border-slate-800/85'>
      <div class='flex items-center gap-2.5'>
        <div class='w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/></svg>
        </div>
        <div>
          <h2 class='font-heading font-extrabold text-white text-base sm:text-lg'>Smart AI Search &amp; Discovery</h2>
          <p class='text-xs text-slate-400'>Instant access to 1,000+ verified digital products</p>
        </div>
      </div>
      <button onclick='closeSmartSearchModal()' class='p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer' aria-label='Close search'>
        ✕
      </button>
    </div>

    <div class='max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6 flex-1'>
      <div class='relative'>
        <div class='absolute inset-y-0 left-4 flex items-center pointer-events-none text-emerald-400'>
          <svg class='w-5 h-5' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/></svg>
        </div>
        <input id='smart-search-input' type='text' placeholder='Search for video bundles, courses, software, PHP scripts...' class='w-full bg-slate-900/90 text-white placeholder-slate-400 text-base sm:text-lg pl-12 pr-32 py-4 rounded-2xl border border-emerald-500/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all' oninput='handleSmartSearchInput(this.value)'/>
        <div class='absolute right-2.5 top-2.5 bottom-2.5 flex items-center gap-1.5'>
          <button onclick='triggerGeminiAiSearch()' class='px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-xs shadow-md shadow-emerald-500/30 flex items-center gap-1.5 transition-all cursor-pointer'>
            <span>✨ Ask AI</span>
          </button>
        </div>
      </div>

      <div class='p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 flex items-center justify-between gap-3'>
        <div class='flex items-center gap-3'>
          <div class='w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0'>⚡</div>
          <div>
            <div class='font-heading font-bold text-white text-sm'>Gemini AI Project Matcher</div>
            <p class='text-xs text-slate-300'>Ask AI to find specific products for your project or video editing stack.</p>
          </div>
        </div>
      </div>

      <div id='ai-search-response' class='hidden p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm leading-relaxed'></div>

      <div class='space-y-2'>
        <div class='text-xs text-slate-400 font-semibold px-1'>Filter by Category</div>
        <div class='flex items-center gap-2 overflow-x-auto no-scrollbar py-1'>
          <button onclick='filterSmartSearchCategory("Video Bundles")' class='px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-emerald-500'>🎬 Video Bundles</button>
          <button onclick='filterSmartSearchCategory("Online Courses")' class='px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-emerald-500'>🎓 Online Courses</button>
          <button onclick='filterSmartSearchCategory("E-Books")' class='px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-emerald-500'>📚 E-Books</button>
          <button onclick='filterSmartSearchCategory("AI Prompts")' class='px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-emerald-500'>🤖 AI Prompts</button>
          <button onclick='filterSmartSearchCategory("PHP Scripts")' class='px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-emerald-500'>⚡ PHP Scripts</button>
        </div>
      </div>

      <div class='space-y-3 pt-2'>
        <div id='smart-search-feedback' class='hidden p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-center justify-between gap-3'>
          <span id='smart-feedback-text'>No results in selected category. Search in all categories?</span>
          <button onclick='clearSmartSearchCategoryFilter()' class='px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold shrink-0 cursor-pointer'>Search All</button>
        </div>

        <div class='flex items-center justify-between text-xs text-slate-400 px-1'>
          <span id='smart-search-count'>Matching Assets (1,000+)</span>
          <span>Instant bKash / Nagad Checkout</span>
        </div>
        <div id='smart-search-results' class='grid grid-cols-1 sm:grid-cols-2 gap-3 pb-12'>
          <a href='/search/label/Video%20Bundles' class='p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold'>
            <span>🎬 Ultra 4K Cinematic Reel Bundle (৳499)</span>
            <span class='text-emerald-400'>→</span>
          </a>
          <a href='/search/label/Online%20Courses' class='p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold'>
            <span>🎓 Full-Stack MERN Mastery 2026 (৳750)</span>
            <span class='text-emerald-400'>→</span>
          </a>
          <a href='/search/label/AI%20Prompts' class='p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold'>
            <span>🤖 10,000+ ChatGPT &amp; Midjourney Prompts (৳299)</span>
            <span class='text-emerald-400'>→</span>
          </a>
          <a href='/search/label/PHP%20Scripts' class='p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold'>
            <span>⚡ Multi-Vendor Marketplace PHP Script (৳1250)</span>
            <span class='text-emerald-400'>→</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- USER AUTHENTICATION / LOGIN VIEW PAGE (login-view) -->
  <div id='login-view' class='fm-modal fixed inset-0 z-[99999] hidden flex-col bg-slate-950/95 backdrop-blur-2xl overflow-y-auto text-white animate-in fade-in zoom-in-95 duration-200'>
    
    <!-- Sub-Nav Bar with Minimal Back Button -->
    <div class='sticky top-0 z-20 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between'>
      <button onclick='closeLoginView()' type='button' class='flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-500 transition cursor-pointer shadow-xs'>
        <svg class='w-4 h-4 text-emerald-500' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M10 19l-7-7m0 0l7-7m-7 7h18'/></svg>
        <span>← Back to Store</span>
      </button>

      <div class='flex items-center gap-2'>
        <div class='w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-xs shadow-xs'>
          FM
        </div>
        <span class='font-heading font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white'>
          FileMarket <span class='text-emerald-400'>Auth Center</span>
        </span>
      </div>
    </div>

    <!-- Main Auth Card Container -->
    <div class='flex-1 flex items-center justify-center p-4 sm:p-6 my-auto'>
      <div class='max-w-md w-full mx-auto p-7 rounded-3xl bg-slate-900/60 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-700/60 shadow-2xl backdrop-blur-2xl space-y-6 relative overflow-hidden'>
        
        <!-- Subtle Ambient Glow -->
        <div class='absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none'></div>
        <div class='absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl pointer-events-none'></div>

        <!-- Header and Branding -->
        <div class='text-center space-y-2 relative z-10'>
          <div class='w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.25)] animate-shield'>
            <svg class='w-8 h-8 fill-none stroke-current stroke-[2]' viewBox='0 0 24 24'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/></svg>
          </div>
          <h1 id='auth-card-title' class='font-heading font-black text-2xl text-slate-900 dark:text-white tracking-tight'>
            Welcome to FileMarket
          </h1>
          <p class='text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed font-medium'>
            Access your purchased digital assets, instant downloads &amp; lifetime licenses.
          </p>
        </div>

        <!-- Auth Toast Notification -->
        <div id='auth-toast' class='hidden p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-bold items-center gap-2 shadow-lg animate-in fade-in duration-200 relative z-20'>
          <span>✓</span>
          <span id='auth-toast-text'>Authenticated successfully!</span>
        </div>

        <!-- MAIN AUTH SECTION (LOGIN / SIGN UP) -->
        <div id='auth-main-section' class='space-y-6 relative z-10'>
          <!-- One-Click Social Login (Google OAuth 2.0) -->
          <div class='space-y-3 relative z-10'>
            <button onclick='handleGoogleAuthRedirect()' type='button' class='w-full py-3.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer group'>
              <svg class='w-4 h-4 shrink-0' viewBox='0 0 24 24'>
                <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/>
                <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/>
                <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z'/>
                <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z'/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <!-- Divider -->
            <div class='relative flex items-center justify-center my-4'>
              <div class='border-t border-slate-200 dark:border-slate-800 w-full'></div>
              <span class='bg-slate-900 dark:bg-slate-900 px-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest shrink-0'>
                OR CONTINUE WITH EMAIL / PHONE
              </span>
            </div>
          </div>

          <!-- Credential Form with Left Icons -->
          <form onsubmit='submitBloggerAuth(event)' class='space-y-4 relative z-10'>
            
            <div id='auth-name-field' class='hidden space-y-1'>
              <label class='text-[11px] font-bold text-slate-600 dark:text-slate-300'>Full Name</label>
              <div class='relative'>
                <svg class='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/></svg>
                <input id='auth-input-name' type='text' placeholder='Joy Barmon' class='w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition'/>
              </div>
            </div>

            <div class='space-y-1'>
              <label class='text-[11px] font-bold text-slate-600 dark:text-slate-300'>Email or Mobile Number</label>
              <div class='relative'>
                <svg class='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/></svg>
                <input id='auth-input-id' type='text' required='required' placeholder='name@example.com or +8801...' class='w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition'/>
              </div>
            </div>

            <div class='space-y-1'>
              <label class='text-[11px] font-bold text-slate-600 dark:text-slate-300'>Password / Access PIN</label>
              <div class='relative'>
                <svg class='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'/></svg>
                <input id='auth-input-pass' type='password' required='required' placeholder='••••••••' class='w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-11 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition'/>
                <button onclick='toggleAuthPassword()' type='button' class='absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition cursor-pointer' aria-label='Toggle Password Visibility'>
                  👁️
                </button>
              </div>
            </div>

            <!-- Help Row -->
            <div class='flex items-center justify-between text-xs pt-1'>
              <label class='flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 font-medium'>
                <input type='checkbox' checked='checked' class='rounded border-slate-300 text-emerald-500 focus:ring-emerald-500'/>
                <span id='auth-remember-label'>Remember Me</span>
              </label>
              <button id='auth-forgot-btn' onclick='openForgotPasswordView()' type='button' class='text-emerald-500 hover:text-emerald-400 font-bold hover:underline cursor-pointer'>
                Forgot Password?
              </button>
            </div>

            <!-- Primary Action Button (Rose-Crimson Gradient with btn-glow-red) -->
            <button id='auth-submit-btn' type='submit' class='w-full py-3.5 px-6 rounded-xl btn-glow-red text-white font-heading font-extrabold text-sm sm:text-base hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 shadow-lg'>
              <span id='auth-btn-text'>Sign In to Locker →</span>
            </button>
          </form>

          <!-- New User Switcher -->
          <div class='text-center pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium relative z-10'>
            <span id='auth-switch-prompt'>Don't have an account?</span>
            <button onclick='toggleAuthMode()' type='button' id='auth-switch-btn' class='text-emerald-500 hover:text-emerald-400 font-extrabold hover:underline cursor-pointer ml-1'>
              Create Free Account
            </button>
          </div>
        </div>

        <!-- FORGOT PASSWORD RECOVERY SECTION -->
        <div id='auth-forgot-section' class='hidden space-y-6 relative z-10'>
          <div class='text-center space-y-2'>
            <div class='w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.25)]'>
              <svg class='w-8 h-8 fill-none stroke-current stroke-[2]' viewBox='0 0 24 24'><path d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'/></svg>
            </div>
            <h2 class='font-heading font-black text-xl text-slate-900 dark:text-white tracking-tight'>
              🔑 Reset Your Access PIN / Password
            </h2>
            <p class='text-xs text-slate-400 max-w-xs mx-auto leading-relaxed font-medium'>
              Enter your registered Email or Mobile Number to receive an instant verification reset link or WhatsApp recovery code.
            </p>
          </div>

          <form onsubmit='submitForgotPasswordRecovery(event)' class='space-y-4'>
            <div class='space-y-1'>
              <label class='text-[11px] font-bold text-slate-600 dark:text-slate-300'>Email or Mobile Number</label>
              <div class='relative'>
                <svg class='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/></svg>
                <input id='forgot-input-id' type='text' required='required' placeholder='name@example.com or +8801...' class='w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition'/>
              </div>
            </div>

            <button type='submit' class='w-full py-3.5 px-6 rounded-xl btn-glow-red text-white font-heading font-extrabold text-sm sm:text-base hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg'>
              <span>Send Recovery Link / Code →</span>
            </button>
          </form>

          <div class='text-center pt-2'>
            <button onclick='showLoginViewFromForgot()' type='button' class='text-xs text-emerald-400 hover:text-emerald-300 font-bold hover:underline transition cursor-pointer'>
              ← Back to Sign In
            </button>
          </div>
        </div>

        <!-- Micro Typography Trust Line -->
        <div class='border-t border-slate-200 dark:border-slate-800/80 pt-4 text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium relative z-10 flex items-center justify-center gap-2'>
          <span>🔒 256-Bit SSL</span>
          <span>•</span>
          <span>⚡ Instant Cloud Delivery</span>
        </div>

      </div>
    </div>
  </div>

  <!-- JAVASCRIPT CONTROLLERS -->
  <script type="text/javascript">
  //<![CDATA[
    /* ====================================================
       FILEMARKET.SITE JAVASCRIPT ENGINE (SPA & INTERACTIVE)
       ==================================================== */

    // 1. Currency Switcher Controller
    var FM_EXCHANGE_RATE = 120; // 1 USD = 120 BDT
    var currentCurrency = localStorage.getItem('filemarket_currency') || 'BDT';

    function initCurrency() {
      setBloggerCurrency(currentCurrency);
    }

    function setBloggerCurrency(curr) {
      currentCurrency = curr || 'BDT';
      localStorage.setItem('filemarket_currency', currentCurrency);

      // Update Header Currency Buttons
      var btnBdt = document.getElementById('btn-curr-bdt');
      var btnUsd = document.getElementById('btn-curr-usd');
      if (btnBdt && btnUsd) {
        if (currentCurrency === 'BDT') {
          btnBdt.className = 'px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[6px] transition-all cursor-pointer flex items-center gap-0.5 bg-emerald-500 text-white font-black shadow-xs';
          btnUsd.className = 'px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[6px] transition-all cursor-pointer flex items-center gap-0.5 text-slate-400 hover:text-white';
        } else {
          btnUsd.className = 'px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[6px] transition-all cursor-pointer flex items-center gap-0.5 bg-emerald-500 text-white font-black shadow-xs';
          btnBdt.className = 'px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[6px] transition-all cursor-pointer flex items-center gap-0.5 text-slate-400 hover:text-white';
        }
      }

      // Update Drawer Currency Buttons
      var drawerBdt = document.getElementById('drawer-curr-bdt');
      var drawerUsd = document.getElementById('drawer-curr-usd');
      if (drawerBdt && drawerUsd) {
        if (currentCurrency === 'BDT') {
          drawerBdt.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-emerald-500 text-white shadow-sm';
          drawerUsd.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-slate-800 text-slate-300 hover:text-white';
        } else {
          drawerUsd.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-emerald-500 text-white shadow-sm';
          drawerBdt.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-slate-800 text-slate-300 hover:text-white';
        }
      }

      // Dynamically convert pricing displays across the DOM
      var priceElements = document.querySelectorAll('[data-price-bdt]');
      priceElements.forEach(function(el) {
        var bdt = parseFloat(el.getAttribute('data-price-bdt'));
        if (!isNaN(bdt)) {
          if (currentCurrency === 'USD') {
            var usd = Math.max(1, Math.round(bdt / FM_EXCHANGE_RATE));
            el.innerText = '$' + usd;
          } else {
            el.innerText = '৳' + bdt;
          }
        }
      });
    }

    // 2. Theme Switcher Controller
    function initTheme() {
      var savedTheme = localStorage.getItem('fm_theme') || localStorage.getItem('filemarket_theme') || 'dark';
      setBloggerTheme(savedTheme);
    }

    function setBloggerTheme(mode) {
      var theme = mode === 'light' ? 'light' : 'dark';
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('fm_theme', theme);
      localStorage.setItem('filemarket_theme', theme);

      var dayBtn = document.getElementById('drawer-theme-day');
      var nightBtn = document.getElementById('drawer-theme-night');
      if (dayBtn && nightBtn) {
        if (theme === 'light') {
          dayBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-emerald-500 text-white shadow-sm flex items-center justify-center gap-1.5';
          nightBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-1.5';
        } else {
          nightBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-emerald-500 text-white shadow-sm flex items-center justify-center gap-1.5';
          dayBtn.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition border border-slate-700 bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center gap-1.5';
        }
      }
    }

    function toggleTheme() {
      var isDark = document.documentElement.classList.contains('dark');
      setBloggerTheme(isDark ? 'light' : 'dark');
    }

    // 3. Mobile Slide-Over Drawer Controllers
    function openMobileDrawer() {
      updateMenuState();
      var drawer = document.getElementById('mobile-drawer') || document.getElementById('nav-drawer');
      var overlay = document.getElementById('mobile-drawer-overlay');
      if (drawer && overlay) {
        overlay.classList.remove('hidden');
        setTimeout(function() {
          overlay.classList.add('opacity-100');
        }, 10);
        drawer.classList.remove('translate-x-full');
        drawer.classList.add('active');
      }
    }

    function closeMobileDrawer() {
      var drawer = document.getElementById('mobile-drawer') || document.getElementById('nav-drawer');
      var overlay = document.getElementById('mobile-drawer-overlay');
      if (drawer && overlay) {
        drawer.classList.add('translate-x-full');
        drawer.classList.remove('active');
        overlay.classList.remove('opacity-100');
        setTimeout(function() {
          overlay.classList.add('hidden');
        }, 300);
      }
    }

    function toggleMobileDrawer() {
      var drawer = document.getElementById('mobile-drawer') || document.getElementById('nav-drawer');
      if (drawer && drawer.classList.contains('translate-x-full')) {
        openMobileDrawer();
      } else {
        closeMobileDrawer();
      }
    }

    // 4. Category Filtering Engine
    var activeCategoryFilter = 'all';

    function filterBloggerCategory(categoryName) {
      activeCategoryFilter = categoryName || 'all';
      
      // Update Category Pills Active Styles
      var container = document.getElementById('cat-scroll-container');
      if (container) {
        var pills = container.querySelectorAll('a, button');
        pills.forEach(function(pill) {
          var pillText = pill.innerText.trim().toLowerCase();
          var isMatch = (activeCategoryFilter === 'all' && (pillText.indexOf('all') !== -1 || pillText.indexOf('🔥') !== -1)) ||
                        (activeCategoryFilter !== 'all' && pillText.indexOf(activeCategoryFilter.toLowerCase()) !== -1);
          
          if (isMatch) {
            pill.className = 'px-4 py-2 rounded-full bg-emerald-500 text-white shrink-0 shadow-sm transition-all';
          } else {
            pill.className = 'px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 shrink-0 border border-slate-700 transition-all';
          }
        });
      }

      // Filter articles/products in the feed
      var articles = document.querySelectorAll('article.group');
      if (articles.length > 0) {
        articles.forEach(function(art) {
          if (activeCategoryFilter === 'all') {
            art.style.display = '';
          } else {
            var text = art.innerText.toLowerCase();
            if (text.indexOf(activeCategoryFilter.toLowerCase()) !== -1) {
              art.style.display = '';
            } else {
              art.style.display = 'none';
            }
          }
        });
      }
    }

    function initCategoryFilterHandlers() {
      var container = document.getElementById('cat-scroll-container');
      if (container) {
        var links = container.querySelectorAll('a');
        links.forEach(function(link) {
          link.addEventListener('click', function(e) {
            var href = link.getAttribute('href');
            if (href && href.indexOf('/search/label/') !== -1) {
              e.preventDefault();
              var labelPart = decodeURIComponent(href.split('/search/label/')[1].split('?')[0]);
              filterBloggerCategory(labelPart);
            } else if (href === '/' || href === '/home' || href === '#') {
              e.preventDefault();
              filterBloggerCategory('all');
            }
          });
        });
      }
    }

    // 5. Auth / Login Modal View Controllers
    function openLoginView() {
      var view = document.getElementById('login-view');
      if (view) {
        view.classList.remove('hidden');
        view.classList.add('flex');
        showLoginViewFromForgot();
      }
    }

    function closeLoginView() {
      var view = document.getElementById('login-view');
      if (view) {
        view.classList.add('hidden');
        view.classList.remove('flex');
      }
    }

    var isAuthSignUpMode = false;
    function toggleAuthMode() {
      isAuthSignUpMode = !isAuthSignUpMode;
      var title = document.getElementById('auth-card-title');
      var nameField = document.getElementById('auth-name-field');
      var btnText = document.getElementById('auth-btn-text');
      var switchPrompt = document.getElementById('auth-switch-prompt');
      var switchBtn = document.getElementById('auth-switch-btn');
      var forgotBtn = document.getElementById('auth-forgot-btn');
      var rememberLabel = document.getElementById('auth-remember-label');

      showLoginViewFromForgot();

      if (isAuthSignUpMode) {
        if (title) title.innerText = 'Create Free Account';
        if (nameField) nameField.classList.remove('hidden');
        if (btnText) btnText.innerText = 'Create Free Account →';
        if (switchPrompt) switchPrompt.innerText = 'Already have an account?';
        if (switchBtn) switchBtn.innerText = 'Sign In';
        if (forgotBtn) forgotBtn.classList.add('hidden');
        if (rememberLabel) rememberLabel.innerText = 'I agree to Terms & Privacy Policy';
      } else {
        if (title) title.innerText = 'Welcome to FileMarket';
        if (nameField) nameField.classList.add('hidden');
        if (btnText) btnText.innerText = 'Sign In to Locker →';
        if (switchPrompt) switchPrompt.innerText = "Don't have an account?";
        if (switchBtn) switchBtn.innerText = 'Create Free Account';
        if (forgotBtn) forgotBtn.classList.remove('hidden');
        if (rememberLabel) rememberLabel.innerText = 'Remember Me';
      }
    }

    function openForgotPasswordView() {
      var mainSec = document.getElementById('auth-main-section');
      var forgotSec = document.getElementById('auth-forgot-section');
      if (mainSec) mainSec.classList.add('hidden');
      if (forgotSec) forgotSec.classList.remove('hidden');
    }

    function showLoginViewFromForgot() {
      var mainSec = document.getElementById('auth-main-section');
      var forgotSec = document.getElementById('auth-forgot-section');
      if (mainSec) mainSec.classList.remove('hidden');
      if (forgotSec) forgotSec.classList.add('hidden');
    }

    function submitForgotPasswordRecovery(e) {
      e.preventDefault();
      var inputEl = document.getElementById('forgot-input-id');
      var inputVal = inputEl ? inputEl.value : '';
      if (!inputVal) {
        showAuthToast("Please enter your Email or Mobile Number.");
        return;
      }
      showAuthToast("Recovery instructions sent to your WhatsApp/Email!");
      setTimeout(function() {
        showLoginViewFromForgot();
      }, 2000);
    }

    function toggleAuthPassword() {
      var pass = document.getElementById('auth-input-pass');
      if (pass) {
        pass.type = pass.type === 'password' ? 'text' : 'password';
      }
    }

    function showAuthToast(msg) {
      var toast = document.getElementById('auth-toast');
      var toastText = document.getElementById('auth-toast-text');
      if (toast && toastText) {
        toastText.innerText = msg;
        toast.classList.remove('hidden');
        toast.classList.add('flex');
        setTimeout(function() {
          toast.classList.add('hidden');
          toast.classList.remove('flex');
        }, 3000);
      }
    }

    function updateMenuState() {
      var savedUserStr = localStorage.getItem('filemarket_user');
      var savedUser = null;
      if (savedUserStr) {
        try { savedUser = JSON.parse(savedUserStr); } catch (e) {}
      }

      var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || !!savedUser;
      var userName = (savedUser && savedUser.name) || localStorage.getItem('fm_user_name') || 'FileMarket User';
      var userEmail = (savedUser && savedUser.email) || localStorage.getItem('fm_user_email') || 'customer@filemarket.site';
      var userPhoto = (savedUser && savedUser.picture) || localStorage.getItem('fm_user_photo') || '';

      var guestSection = document.getElementById('guest-auth-section');
      var userSection = document.getElementById('user-profile-section');
      var drawerHeaderGuest = document.getElementById('drawer-header-guest');
      var drawerHeaderUser = document.getElementById('drawer-header-user');

      var nameEl = document.getElementById('drawer-user-name');
      var emailEl = document.getElementById('drawer-user-email');
      var photoEl = document.getElementById('drawer-user-photo');
      var initialsEl = document.getElementById('drawer-user-initials');

      if (isLoggedIn) {
        if (guestSection) guestSection.style.display = 'none';
        if (userSection) userSection.style.display = 'block';
        if (drawerHeaderGuest) {
          drawerHeaderGuest.classList.add('hidden');
          drawerHeaderGuest.classList.remove('flex');
        }
        if (drawerHeaderUser) {
          drawerHeaderUser.classList.remove('hidden');
          drawerHeaderUser.classList.add('flex');
        }

        if (nameEl) nameEl.innerText = userName;
        if (emailEl) emailEl.innerHTML = '<span>&#10003; ' + userEmail + '</span>';

        if (photoEl && initialsEl) {
          if (userPhoto) {
            photoEl.src = userPhoto;
            photoEl.classList.remove('hidden');
            initialsEl.classList.add('hidden');
          } else {
            photoEl.classList.add('hidden');
            var initials = userName.split(' ').map(function(n) { return n[0]; }).join('').substring(0, 2).toUpperCase() || 'FM';
            initialsEl.innerText = initials;
            initialsEl.classList.remove('hidden');
          }
        }
      } else {
        if (guestSection) guestSection.style.display = 'block';
        if (userSection) userSection.style.display = 'none';
        if (drawerHeaderGuest) {
          drawerHeaderGuest.classList.remove('hidden');
          drawerHeaderGuest.classList.add('flex');
        }
        if (drawerHeaderUser) {
          drawerHeaderUser.classList.add('hidden');
          drawerHeaderUser.classList.remove('flex');
        }
      }
    }

    function submitBloggerAuth(e) {
      e.preventDefault();
      var idEl = document.getElementById('auth-input-id');
      var idVal = idEl ? idEl.value : '';
      if (idVal) {
        localStorage.setItem('fm_user_email', idVal);
      }
      localStorage.setItem('isLoggedIn', 'true');
      if (!localStorage.getItem('fm_user_name')) {
        localStorage.setItem('fm_user_name', idVal ? idVal.split('@')[0] : 'FileMarket User');
      }
      updateMenuState();
      showAuthToast(isAuthSignUpMode ? "Free Account Created Successfully!" : "Signed In to FileMarket!");
      setTimeout(function() {
        closeLoginView();
      }, 1500);
    }

    // 6. Google OAuth 2.0 Full-Page Redirect & Token Handler
    var GOOGLE_CLIENT_ID = '778447249303-rrq60h8a5k4t48gtqlcjnuv49bm4bufb.apps.googleusercontent.com';

    function handleGoogleAuthRedirect() {
      var redirectUri = window.location.origin || 'https://www.filemarket.site';
      var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
        + '?client_id=' + encodeURIComponent(GOOGLE_CLIENT_ID)
        + '&redirect_uri=' + encodeURIComponent(redirectUri)
        + '&response_type=token'
        + '&scope=' + encodeURIComponent('email profile')
        + '&prompt=select_account'
        + '&include_granted_scopes=true';

      window.location.href = authUrl;
    }

    window.handleGoogleAuth = handleGoogleAuthRedirect;
    window.handleGoogleAuthRedirect = handleGoogleAuthRedirect;

    async function checkGoogleOAuthCallback() {
      var hash = window.location.hash;
      if (!hash || hash.indexOf('access_token') === -1) {
        return;
      }

      try {
        var cleanHash = hash.startsWith('#') ? hash.substring(1) : hash;
        var params = new URLSearchParams(cleanHash);
        var accessToken = params.get('access_token');

        if (accessToken) {
          showAuthToast("Verifying Google Account...");

          var response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
              'Authorization': 'Bearer ' + accessToken
            }
          });

          if (response.ok) {
            var data = await response.json();
            var userData = {
              name: data.name || 'Google User',
              email: data.email || '',
              picture: data.picture || '',
              sub: data.sub || '',
              isLoggedIn: true
            };

            localStorage.setItem('filemarket_user', JSON.stringify(userData));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('fm_user_name', userData.name);
            localStorage.setItem('fm_user_email', userData.email);
            localStorage.setItem('fm_user_photo', userData.picture);
            localStorage.setItem('fm_user_uid', userData.sub);

            if (window.history && window.history.replaceState) {
              window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }

            updateMenuState();
            showAuthToast("Signed in as " + (userData.name || userData.email));
            closeLoginView();
          } else {
            console.error("Google userinfo fetch failed:", response.status);
            showAuthToast("Google sign-in error. Please try again.");
          }
        }
      } catch (err) {
        console.error("Error processing Google OAuth callback:", err);
      }
    }

    function logoutBloggerUser() {
      localStorage.removeItem('filemarket_user');
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('fm_user_name');
      localStorage.removeItem('fm_user_email');
      localStorage.removeItem('fm_user_photo');
      localStorage.removeItem('fm_user_uid');

      updateMenuState();
      showAuthToast("Logged out successfully");
      closeMobileDrawer();
    }
    window.logoutBloggerUser = logoutBloggerUser;

    // 7. Smart AI Search Modal Controllers
    function openSmartSearchModal() {
      var modal = document.getElementById('smart-search-modal');
      var homeTab = document.getElementById('nav-home-tab');
      var searchTab = document.getElementById('nav-search-tab');

      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(function() {
          var inp = document.getElementById('smart-search-input');
          if (inp) inp.focus();
        }, 100);
      }

      if (homeTab) {
        homeTab.className = 'relative flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-2xl text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/40 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
        var homeSvg = homeTab.querySelector('svg');
        if (homeSvg) homeSvg.className = 'w-5 h-5 stroke-[2] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
      }

      if (searchTab) {
        searchTab.className = 'relative flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-2xl text-[11px] font-bold text-[#10b981] bg-emerald-500/10 dark:bg-emerald-500/15 shadow-sm -translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
        var searchSvg = searchTab.querySelector('svg');
        if (searchSvg) searchSvg.className = 'w-5 h-5 stroke-[2.5] scale-110 text-[#10b981] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
      }
    }
    window.openSearchModal = openSmartSearchModal;
    window.closeSearchModal = closeSmartSearchModal;

    function closeSmartSearchModal() {
      var modal = document.getElementById('smart-search-modal');
      var homeTab = document.getElementById('nav-home-tab');
      var searchTab = document.getElementById('nav-search-tab');

      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }

      if (homeTab) {
        homeTab.className = 'relative flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-2xl text-[11px] font-bold text-[#10b981] bg-emerald-500/10 dark:bg-emerald-500/15 shadow-sm -translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
        var homeSvg2 = homeTab.querySelector('svg');
        if (homeSvg2) homeSvg2.className = 'w-5 h-5 stroke-[2.5] scale-110 text-[#10b981] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
      }

      if (searchTab) {
        searchTab.className = 'relative flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-2xl text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/40 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
        var searchSvg2 = searchTab.querySelector('svg');
        if (searchSvg2) searchSvg2.className = 'w-5 h-5 stroke-[2] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
      }
    }

    var activeSmartCategory = null;

    function triggerGeminiAiSearch() {
      var inp = document.getElementById('smart-search-input');
      var val = inp ? inp.value : '';
      var respBox = document.getElementById('ai-search-response');
      if (respBox) {
        respBox.classList.remove('hidden');
        respBox.innerText = '🤖 Gemini AI Matcher: Analyzing 1,000+ verified digital assets for "' + (val || 'all products') + '". All files include instant Google Drive delivery and 100% money-back working guarantee.';
      }
    }

    function filterSmartSearchCategory(cat) {
      activeSmartCategory = (activeSmartCategory === cat) ? null : cat;
      var inp = document.getElementById('smart-search-input');
      handleSmartSearchInput(inp ? inp.value : '');
    }

    function clearSmartSearchCategoryFilter() {
      activeSmartCategory = null;
      var inp = document.getElementById('smart-search-input');
      handleSmartSearchInput(inp ? inp.value : '');
    }

    function handleSmartSearchInput(val) {
      var query = (val || '').toLowerCase().trim();
      var resultsContainer = document.getElementById('smart-search-results');
      var countEl = document.getElementById('smart-search-count');
      var feedbackEl = document.getElementById('smart-search-feedback');
      var feedbackText = document.getElementById('smart-feedback-text');

      if (!resultsContainer) return;

      if (!query) {
        if (feedbackEl) feedbackEl.classList.add('hidden');
        if (countEl) countEl.innerText = 'Matching Assets (1,000+)';
        resultsContainer.innerHTML = 
          '<a href=\'/search/label/Video%20Bundles\' class=\'p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold\'>' +
            '<span>🎬 Ultra 4K Cinematic Reel Bundle (৳499)</span>' +
            '<span class=\'text-emerald-400\'>→</span>' +
          '</a>' +
          '<a href=\'/search/label/Online%20Courses\' class=\'p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold\'>' +
            '<span>🎓 Full-Stack MERN Mastery 2026 (৳750)</span>' +
            '<span class=\'text-emerald-400\'>→</span>' +
          '</a>' +
          '<a href=\'/search/label/AI%20Prompts\' class=\'p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold\'>' +
            '<span>🤖 10,000+ ChatGPT &amp; Midjourney Prompts (৳299)</span>' +
            '<span class=\'text-emerald-400\'>→</span>' +
          '</a>' +
          '<a href=\'/search/label/PHP%20Scripts\' class=\'p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-white text-xs font-bold\'>' +
            '<span>⚡ Multi-Vendor Marketplace PHP Script (৳1250)</span>' +
            '<span class=\'text-emerald-400\'>→</span>' +
          '</a>';
        return;
      }

      var allProducts = [
        { title: 'Ultra 4K Cinematic Reel & Motion Graphics Mega Bundle', category: 'Video Bundles', price: '৳499', url: '/search/label/Video%20Bundles' },
        { title: 'Full-Stack MERN Mastery 2026 Course', category: 'Online Courses', price: '৳750', url: '/search/label/Online%20Courses' },
        { title: '10,000+ ChatGPT & Midjourney Mega Prompts Vault', category: 'AI Prompts', price: '৳299', url: '/search/label/AI%20Prompts' },
        { title: 'Multi-Vendor Marketplace PHP Script & Flutter App', category: 'PHP Scripts', price: '৳1250', url: '/search/label/PHP%20Scripts' },
        { title: 'Advanced E-Commerce React & Node SaaS Boilerplate', category: 'Premium Apps', price: '৳999', url: '/search/label/Premium%20Apps' },
        { title: 'Ultimate Digital Marketing & SEO Masterclass 2026', category: 'Online Courses', price: '৳650', url: '/search/label/Online%20Courses' }
      ];

      var globalMatches = allProducts.filter(function(p) {
        return p.title.toLowerCase().indexOf(query) !== -1 || p.category.toLowerCase().indexOf(query) !== -1;
      });
      
      var categoryMatches = activeSmartCategory 
        ? globalMatches.filter(function(p) { return p.category === activeSmartCategory; })
        : globalMatches;

      if (feedbackEl) {
        if (activeSmartCategory && categoryMatches.length === 0 && globalMatches.length > 0) {
          feedbackEl.classList.remove('hidden');
          if (feedbackText) feedbackText.innerText = 'No results in ' + activeSmartCategory + '. Found ' + globalMatches.length + ' matching products across other categories!';
        } else {
          feedbackEl.classList.add('hidden');
        }
      }

      var displayProducts = (activeSmartCategory && categoryMatches.length > 0) ? categoryMatches : globalMatches;

      if (countEl) countEl.innerText = 'Matching Assets (' + displayProducts.length + ')';

      if (displayProducts.length === 0) {
        resultsContainer.innerHTML = '<div class="col-span-full py-12 text-center text-slate-400 text-xs">No digital products found matching "' + query + '"</div>';
        return;
      }

      resultsContainer.innerHTML = displayProducts.map(function(p) {
        return '<a href=\'' + p.url + '\' class=\'p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between text-white text-xs font-bold transition\'>' +
          '<div>' +
            '<span class=\'text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20\'>' + p.category + '</span>' +
            '<div class=\'mt-1\'>' + p.title + '</div>' +
          '</div>' +
          '<span class=\'text-emerald-400 font-black shrink-0 ml-2\'>' + p.price + '</span>' +
        '</a>';
      }).join('');
    }

    // 8. 16:9 Hero Slider Controller
    var heroCurrentIndex = 0;
    var heroTotalSlides = 6;
    var heroAutoPlayInterval = null;
    var heroIsPaused = false;
    var heroTouchStartX = 0;
    var heroTouchEndX = 0;

    function updateHeroSlider() {
      var track = document.getElementById('hero-slider-track');
      if (track) {
        track.style.transform = 'translateX(-' + (heroCurrentIndex * 100) + '%)';
      }
      var dotsContainer = document.getElementById('hero-pagination-dots');
      if (dotsContainer) {
        var dots = dotsContainer.querySelectorAll('button');
        dots.forEach(function(dot, idx) {
          if (idx === heroCurrentIndex) {
            dot.className = 'h-1.5 sm:h-2 rounded-full transition-all duration-300 w-6 sm:w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]';
          } else {
            dot.className = 'h-1.5 sm:h-2 rounded-full transition-all duration-300 w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500';
          }
        });
      }
    }

    function nextHeroSlide() {
      heroCurrentIndex = (heroCurrentIndex + 1) % heroTotalSlides;
      updateHeroSlider();
    }

    function prevHeroSlide() {
      heroCurrentIndex = (heroCurrentIndex - 1 + heroTotalSlides) % heroTotalSlides;
      updateHeroSlider();
    }

    function goToHeroSlide(index) {
      heroCurrentIndex = index;
      updateHeroSlider();
    }

    function startHeroAutoplay() {
      if (heroAutoPlayInterval) clearInterval(heroAutoPlayInterval);
      heroAutoPlayInterval = setInterval(function() {
        if (!heroIsPaused) {
          nextHeroSlide();
        }
      }, 3500);
    }

    function initHeroSlider() {
      var heroSection = document.getElementById('hero-slider-section');
      if (heroSection) {
        heroSection.addEventListener('mouseenter', function() { heroIsPaused = true; });
        heroSection.addEventListener('mouseleave', function() { heroIsPaused = false; });
        
        heroSection.addEventListener('touchstart', function(e) {
          heroTouchStartX = e.touches[0].clientX;
          heroIsPaused = true;
        }, { passive: true });

        heroSection.addEventListener('touchmove', function(e) {
          heroTouchEndX = e.touches[0].clientX;
        }, { passive: true });

        heroSection.addEventListener('touchend', function() {
          if (heroTouchStartX && heroTouchEndX) {
            var diff = heroTouchStartX - heroTouchEndX;
            if (diff > 40) {
              nextHeroSlide();
            } else if (diff < -40) {
              prevHeroSlide();
            }
          }
          heroTouchStartX = 0;
          heroTouchEndX = 0;
          setTimeout(function() { heroIsPaused = false; }, 2000);
        });

        startHeroAutoplay();
      }
    }

    // 9. Modals (Policy, Founder, Payment)
    function openFounderModal() {
      var modal = document.getElementById('founder-photo-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeFounderModal() {
      var modal = document.getElementById('founder-photo-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function openPolicyModal(tabKey) {
      var modal = document.getElementById('policy-modal');
      if (modal) {
        switchPolicyTab(tabKey || 'privacy');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closePolicyModal() {
      var modal = document.getElementById('policy-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function switchPolicyTab(tabKey) {
      var tabs = ['privacy', 'refund', 'terms', 'contact'];
      var titles = {
        privacy: 'Privacy Policy (গোপনীয়তা নীতি)',
        refund: '100% Refund Policy (টাকা ফেরত নীতি)',
        terms: 'Terms of Service (ব্যবহারের শর্তাবলি)',
        contact: 'About & Contact Support (আমাদের সম্পর্কে)'
      };
      var icons = {
        privacy: '🔒',
        refund: '🛡️',
        terms: '📜',
        contact: '📞'
      };

      var titleEl = document.getElementById('policy-modal-title');
      var iconEl = document.getElementById('policy-icon-box');

      if (titleEl && titles[tabKey]) titleEl.innerText = titles[tabKey];
      if (iconEl && icons[tabKey]) iconEl.innerText = icons[tabKey];

      tabs.forEach(function(t) {
        var btn = document.getElementById('policy-tab-' + t);
        var content = document.getElementById('policy-content-' + t);

        if (t === tabKey) {
          if (btn) btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
          if (content) content.classList.remove('hidden');
        } else {
          if (btn) btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 text-slate-400 hover:text-white hover:bg-slate-800';
          if (content) content.classList.add('hidden');
        }
      });
    }

    var currentOrderProduct = '';
    var currentOrderPrice = 499;

    function openPaymentModal(productTitle, price, imgUrl) {
      currentOrderProduct = (typeof productTitle === 'string') ? productTitle : 'Digital Product';
      currentOrderPrice = price || 499;
      var productImgUrl = imgUrl || (typeof productTitle === 'object' ? (productTitle.image || productTitle.img || productTitle.thumbnail) : '') || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80';
      
      var titleEl = document.getElementById('modal-product-title');
      if (titleEl) titleEl.innerText = currentOrderProduct + ' — ৳' + currentOrderPrice;
      
      var imgEl = document.getElementById('checkout-product-img');
      if (imgEl) {
        imgEl.src = productImgUrl;
      }
      
      var modal = document.getElementById('payment-modal');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closePaymentModal() {
      var modal = document.getElementById('payment-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function copyPaymentNumber() {
      navigator.clipboard.writeText('01673833783');
      alert('Payment Number 01673833783 copied to clipboard!');
    }

    function handleOrderSubmit(e) {
      e.preventDefault();
      var phone = (document.getElementById('sender-phone') || {}).value || '';
      var trx = (document.getElementById('trx-id') || {}).value || '';
      
      var whatsappMsg = encodeURIComponent(
        '🛒 *New Order from FileMarket.site*\\n\\n' +
        '📦 *Product:* ' + currentOrderProduct + '\\n' +
        '💰 *Amount:* ৳' + currentOrderPrice + '\\n' +
        '📱 *Customer Phone:* ' + phone + '\\n' +
        '🔑 *TrxID:* ' + trx + '\\n\\n' +
        'Please send me the instant Google Drive download link.'
      );
      
      window.open('https://wa.me/8801673833783?text=' + whatsappMsg, '_blank');
      closePaymentModal();
    }

    function sendOrderToWhatsApp() {
      var phone = (document.getElementById('sender-phone') || {}).value || 'Not provided';
      var trx = (document.getElementById('trx-id') || {}).value || 'Pending';
      var whatsappMsg = encodeURIComponent(
        '🛒 *Inquiry & Order Confirmation - FileMarket.site*\\n\\n' +
        '📦 *Product:* ' + (currentOrderProduct || 'Digital Asset') + '\\n' +
        '💰 *Price:* ৳' + currentOrderPrice + '\\n' +
        '📱 *Phone:* ' + phone + '\\n' +
        '🔑 *TrxID:* ' + trx
      );
      window.open('https://wa.me/8801673833783?text=' + whatsappMsg, '_blank');
    }

    // 10. Client-Side SPA Router (HTML5 History API)
    function navigateTo(path, options) {
      if (!path) return;
      try {
        if (window.location.pathname + window.location.search === path && (!options || !options.replace)) {
          renderRoute(path);
          return;
        }
        if (options && options.replace) {
          window.history.replaceState({}, '', path);
        } else {
          window.history.pushState({}, '', path);
        }
        renderRoute(path);
      } catch (err) {
        console.warn('SPA Navigation Fallback:', err);
        window.location.href = path;
      }
    }

    function renderRoute(rawPath) {
      var path = (rawPath || window.location.pathname || '/').replace(/\/+$/, '') || '/';

      if (path === '' || path === '/' || path === '/home' || path === '/store') {
        closePaymentModal();
        closeLoginView();
        closeMobileDrawer();
        closePolicyModal();
        closeSmartSearchModal();
        document.title = 'FileMarket.site — Verified Digital Assets in Bangladesh';
        return;
      }

      if (path === '/auth' || path === '/login' || path === '/signin' || path === '/signup') {
        closePaymentModal();
        closeMobileDrawer();
        closePolicyModal();
        openLoginView();
        document.title = 'Sign In & Locker Access — FileMarket.site';
        return;
      }

      if (path === '/profile' || path === '/dashboard' || path === '/account') {
        closePaymentModal();
        closePolicyModal();
        openLoginView();
        document.title = 'User Profile & Dashboard — FileMarket.site';
        return;
      }

      if (path === '/locker' || path === '/orders' || path === '/downloads') {
        closePaymentModal();
        closePolicyModal();
        openLoginView();
        document.title = 'My Orders & Digital Locker — FileMarket.site';
        return;
      }

      if (path === '/cart' || path === '/drawer') {
        openMobileDrawer();
        document.title = 'Your Cart & Menu — FileMarket.site';
        return;
      }

      if (path === '/checkout' || path === '/payment' || path === '/buy') {
        openPaymentModal('Digital Asset Bundle', 499, 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80');
        document.title = 'Instant Checkout & Payment — FileMarket.site';
        return;
      }

      if (path === '/privacy') {
        openPolicyModal('privacy');
        document.title = 'Privacy Policy — FileMarket.site';
        return;
      }

      if (path === '/terms') {
        openPolicyModal('terms');
        document.title = 'Terms of Service — FileMarket.site';
        return;
      }

      if (path === '/refund') {
        openPolicyModal('refund');
        document.title = '100% Refund Policy — FileMarket.site';
        return;
      }

      if (path === '/about' || path === '/contact') {
        openPolicyModal('about');
        document.title = 'About & Contact — FileMarket.site';
        return;
      }

      var policyMatch = path.match(/^\/policy\/([a-zA-Z0-9_-]+)/);
      if (policyMatch) {
        openPolicyModal(policyMatch[1]);
        document.title = 'Policy & Trust Details — FileMarket.site';
        return;
      }

      var productMatch = path.match(/^\/(?:product|p|item)\/([a-zA-Z0-9_-]+)/);
      if (productMatch) {
        document.title = productMatch[1].replace(/-/g, ' ').toUpperCase() + ' — FileMarket.site';
        return;
      }
    }

    // 11. Popstate & Escape Keyboard Listeners
    window.addEventListener('popstate', function() {
      renderRoute(window.location.pathname);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeFounderModal();
        closePaymentModal();
        closePolicyModal();
        closeSmartSearchModal();
        closeMobileDrawer();
      }
    });

    // 12. Global Link Interceptor for Smooth SPA Navigation
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('/') && !href.startsWith('//') && !link.hasAttribute('download') && link.getAttribute('target') !== '_blank') {
        if (href.indexOf('/feeds/') === -1 && href.indexOf('b/post') === -1) {
          e.preventDefault();
          navigateTo(href);
        }
      }
    });

    // 13. Global DOMContentLoaded & Safe Hydration Initializer
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize theme & currency
      initTheme();
      initCurrency();

      // Check OAuth Callback & Menu Auth state
      checkGoogleOAuthCallback();
      updateMenuState();

      // Initialize Hero Slider & Category Filters
      initHeroSlider();
      initCategoryFilterHandlers();

      // Bind Hamburger Menu Button & Drawer Overlay
      var menuBtn = document.getElementById('menu-btn') || document.getElementById('menu-toggle') || document.querySelector('[data-drawer-toggle]');
      var overlay = document.getElementById('mobile-drawer-overlay');
      if (menuBtn) {
        menuBtn.onclick = function(e) {
          e.preventDefault();
          openMobileDrawer();
        };
      }
      if (overlay) {
        overlay.onclick = function() {
          closeMobileDrawer();
        };
      }

      // Render SPA initial route
      renderRoute(window.location.pathname);
    });

    window.addEventListener('load', function() {
      checkGoogleOAuthCallback();
      updateMenuState();
    });
  //]]>
  </script>

</body>
</html>`;
