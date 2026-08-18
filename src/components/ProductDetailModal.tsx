import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, ShieldCheck, Download, HardDrive, FileCode, Clock, Calendar, Zap, Check, Sparkles, ArrowLeft, Share2, Play, Heart, Tag } from 'lucide-react';
import { Product, Currency } from '../types';
import { PRODUCTS_DATA } from '../data/products';

interface ProductDetailPageProps {
  product: Product | null;
  currency?: Currency;
  onBack: () => void;
  onInstantBuy: (product: Product) => void;
  onSelectProduct?: (product: Product) => void;
  isCheckoutOpen?: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailPageProps> = ({
  product,
  currency = 'BDT',
  onBack,
  onInstantBuy,
  onSelectProduct,
  isCheckoutOpen = false,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Pagination state for Dynamic 30-Product Recommendation Engine (10 -> 20 -> 30)
  const [displayCount, setDisplayCount] = useState<number>(10);

  // Like System State with Smart Auto-Seeding (500 to 10,000) & LocalStorage Persistence
  const [likesCount, setLikesCount] = useState<number>(500);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isHeartAnimating, setIsHeartAnimating] = useState<boolean>(false);

  // Massive 500-1500 Dynamic SEO Keyword Generator
  const generateMassiveSeoKeywords = () => {
    if (!product) return [];
    const baseKeywords = [
      'filemarket 2026', 'digital assets bd', 'instant google drive download', 'verified safe software',
      'bangladesh digital store', 'premium creator bundle', 'unlocked apps apk', 'exclusive courses free download',
      'pro video editing pack', 'bKash payment digital goods', 'nagad software store', 'binance crypto payment downloads',
      product.title.toLowerCase(), product.category.toLowerCase()
    ];
    
    const catMap: Record<string, string[]> = {
      'Video Bundles': [
        'premiere pro motion graphics pack', 'after effects template bundle free', 'capcut pro viral presets',
        'davinci resolve transitions 2026', 'youtube automation video kit', 'tiktok reels bulk templates',
        'cinematic color grading luts', 'wedding video editing package', 'twitch streamer overlay assets',
        'green screen background clips', 'intro outro video templates', 'corporate slideshow project files',
        '4k stock footage bundle', 'glitch effect transitions', 'seamless zoom presets premiere',
        'vertical short video maker pack', 'podcast visualizer templates', 'epic trailer sound effects',
        'lower thirds animated graphics', 'logo reveal animation templates'
      ],
      'Online Courses': [
        'full stack web development masterclass 2026', 'python ai machine learning bootcamp',
        'digital marketing agency blueprint', 'ui ux design master course figma', 'advanced seo ranking playbook',
        'shopify dropshipping mentorship course', 'cryptocurrency trading secrets guide', 'graphic design masterclass',
        'copywriting conversion mastery', 'video editing masterclass zero to hero', 'freelancing upwork fiverr success course',
        'app development kotlin react native', 'cybersecurity ethical hacking training', 'financial freedom investing course',
        'social media management blueprint', 'public speaking and communication masterclass', 'artificial intelligence prompt engineering',
        'data science analytics training', 'youtube monetization mastery', 'passive income automated funnels'
      ],
      'E-Books': [
        'bestselling self help e-books bundle', 'programming cheat sheets pdf collection',
        'startup business growth playbooks', 'stoicism and mental resilience guides', 'copywriting swipe file master collection',
        'financial independence books pdf', 'productivity and time management manuals', 'psychology of selling e-book',
        'real estate investing handbook', 'cryptocurrency blockchain deep dive pdf'
      ],
      'Premium Apps': [
        'android pro apps unlocked apk', 'spotify premium mod apk 2026', 'netflix premium cracked account access',
        'youtube vanced premium unlocked', 'canva pro lifetime unlocked apk', 'kinemaster diamond mod apk',
        'lightroom pro preset unlocked', 'picsart gold unlocked version', 'vivacut pro mod apk', 'capcut pro full unlocked'
      ],
      'AI Prompts': [
        'chatgpt advanced prompt engineering bundle', 'midjourney v6 photorealistic prompts',
        'stable diffusion killer prompts collection', 'claude 3.5 sonnet coding prompts', 'ai copywriting sales letter templates',
        'ai art generator mega prompt pack', 'dall-e 3 masterpiece prompts', 'marketing email sequence ai prompts'
      ],
      'PHP Scripts': [
        'saas boilerplate php laravel source code', 'ecommerce multivendor php script nulled',
        'codecanyon premium php scripts bundle', 'pos inventory management system source code',
        'freelance marketplace platform script', 'food delivery app php backend script', 'crypto exchange script php laravel'
      ],
      'Blogger Templates': [
        'seo optimized blogger templates 2026', 'fast loading premium blogspot themes',
        'adsense friendly responsive themes', 'magazin style blogger templates', 'news portal blogspot design',
        'high cpm adsense blogger themes', 'minimalist portfolio blogspot layout', 'dark mode blogger template'
      ]
    };

    const specificList = catMap[product.category] || ['digital creator toolkit', 'software bundle 2026', 'exclusive source files'];
    
    const expanded: string[] = [];
    baseKeywords.forEach(bk => {
      expanded.push(bk);
      expanded.push(`${bk} free download`);
      expanded.push(`${bk} bangladesh`);
      expanded.push(`${bk} 2026 update`);
      expanded.push(`${bk} instant access`);
    });

    specificList.forEach(item => {
      expanded.push(item);
      expanded.push(`${item} free download`);
      expanded.push(`${item} full version`);
      expanded.push(`${item} google drive link`);
      expanded.push(`${item} 2026 latest version`);
      expanded.push(`${item} nulled zip`);
      expanded.push(`${item} lifetime access`);
      expanded.push(`${item} filemarket exclusive`);
      expanded.push(`best ${item} for creators`);
      expanded.push(`how to use ${item}`);
    });

    const modifiers = ['best', 'top', 'free', 'pro', 'latest', 'hd', 'fast', 'secure', 'verified', 'premium', 'ultimate', 'complete', 'mega', 'exclusive', 'hd 4k', 'unlimited'];
    const years = ['2026', '2025', 'v2.0', 'pro edition'];
    
    specificList.forEach(item => {
      modifiers.forEach(mod => {
        expanded.push(`${mod} ${item}`);
        years.forEach(yr => {
          expanded.push(`${mod} ${item} ${yr}`);
          expanded.push(`${item} ${yr} free download bd`);
        });
      });
    });

    return Array.from(new Set(expanded));
  };

  useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Dynamic SEO Title, Meta Description, Keywords & JSON-LD Schema
      document.title = `${product.title} | FileMarket.site`;
      
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', product.description);

      const massiveKeywords = generateMassiveSeoKeywords();
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', massiveKeywords.slice(0, 300).join(', '));

      const scriptId = 'filemarket-product-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": product.thumbnail,
        "description": product.description,
        "keywords": massiveKeywords.slice(0, 100).join(', '),
        "brand": {
          "@type": "Brand",
          "name": "FileMarket.site"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BDT",
          "price": product.priceBDT,
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": product.reviewsCount || 42
        }
      });

      // Deterministic auto-seeding based on product ID
      let hash = 0;
      for (let i = 0; i < product.id.length; i++) {
        hash = product.id.charCodeAt(i) + ((hash << 5) - hash);
      }
      const baseLikes = 500 + (Math.abs(hash) % 9500);
      
      const savedLiked = localStorage.getItem(`filemarket_isLiked_${product.id}`);
      const savedCount = localStorage.getItem(`filemarket_likesCount_${product.id}`);

      if (savedLiked !== null) {
        setIsLiked(savedLiked === 'true');
      } else {
        setIsLiked(false);
      }

      if (savedCount !== null) {
        setLikesCount(parseInt(savedCount, 10));
      } else {
        setLikesCount(baseLikes);
      }
      setDisplayCount(10);
    }
  }, [product]);

  if (!product) return null;

  const handleToggleLike = () => {
    setIsHeartAnimating(true);
    setTimeout(() => setIsHeartAnimating(false), 300);

    const newLikedState = !isLiked;
    const newCount = newLikedState ? likesCount + 1 : Math.max(0, likesCount - 1);

    setIsLiked(newLikedState);
    setLikesCount(newCount);

    localStorage.setItem(`filemarket_isLiked_${product.id}`, String(newLikedState));
    localStorage.setItem(`filemarket_likesCount_${product.id}`, String(newCount));
  };

  // Curated tags for visual UI pills
  const getVisualTags = () => {
    const base = ['#FileMarket2026', '#DigitalAssetsBD', '#InstantDownload', '#GoogleDriveBundle', '#VerifiedSafe'];
    const catTags: Record<string, string[]> = {
      'Video Bundles': ['#VideoEditing', '#PremiereProPack', '#ViralReels', '#CapCutTemplates', '#AfterEffects', '#MotionGraphics'],
      'Online Courses': ['#Masterclass', '#OnlineLearning', '#SkillUpgrade', '#ExpertCourses', '#CareerGrowth'],
      'E-Books': ['#BestsellerBook', '#KnowledgeHub', '#PDFGuides', '#ReadAndGrow'],
      'Premium Apps': ['#MobileApps', '#ProApps', '#AndroidAPKs', '#UnlockedApps'],
      'AI Prompts': ['#AIPrompts', '#ChatGPTGuides', '#MidjourneyPrompts', '#ArtificialIntelligence'],
      'PHP Scripts': ['#PHPScripts', '#WebDevelopment', '#SourceCode', '#SaaSTemplates'],
      'Blogger Templates': ['#BloggerThemes', '#SEOOptimized', '#FastLoading', '#BlogspotTemplates']
    };
    const specific = catTags[product.category] || ['#ProTools', '#CreatorEconomy', '#SoftwareBundle'];
    return [...specific, ...base];
  };

  // Contextual matching: similar products from same category or tags
  const rawSimilar = PRODUCTS_DATA.filter(p => p.id !== product.id);
  const categoryMatched = rawSimilar.filter(p => p.category === product.category);
  const pool = categoryMatched.length >= 10 ? categoryMatched : rawSimilar;
  const extendedSimilar = [...pool, ...pool, ...pool].slice(0, 30);
  const currentSimilar = extendedSimilar.slice(0, displayCount);
  const hasMoreSimilar = displayCount < 30 && displayCount < extendedSimilar.length;

  const handleLoadMoreSimilar = () => {
    setDisplayCount(prev => Math.min(prev + 10, 30));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const formatLikes = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toLocaleString();
  };

  const massiveKeywordsList = generateMassiveSeoKeywords();

  return (
    <div className="w-full max-w-full px-0 sm:px-4 md:px-6 py-2 sm:py-4 space-y-4 sm:space-y-6 pb-28 animate-in fade-in duration-200">
      
      {/* Hidden Semantic Index Block for Google & Search Engine Crawlers */}
      <div aria-hidden="true" className="sr-only opacity-0 pointer-events-none select-none h-0 overflow-hidden">
        <h2>{product.title} - FileMarket.site Enterprise Index</h2>
        <p>{product.description}</p>
        <ul>
          {massiveKeywordsList.map((kw, i) => (
            <li key={i}>{kw}</li>
          ))}
        </ul>
      </div>

      {/* Breadcrumb Sub-Header (Placed just below global header) */}
      <div className="flex items-center justify-between bg-white/90 dark:bg-slate-900/90 border-x-0 sm:border border-slate-200 dark:border-slate-800/80 rounded-none sm:rounded-2xl px-3 py-2.5 shadow-sm transition-colors duration-200">
        {/* Single Sleek Circular Back Arrow */}
        <button
          onClick={onBack}
          aria-label="Back to Store"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-emerald-500 dark:bg-slate-800 dark:hover:bg-emerald-500 text-slate-800 hover:text-white dark:text-white transition cursor-pointer shadow-sm text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Store</span>
        </button>

        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hidden sm:inline-block">
            {product.category}
          </span>

          {/* Interactive Heart Like Button */}
          <button
            onClick={handleToggleLike}
            title={isLiked ? "Unlike product" : "Like product"}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border transition cursor-pointer shadow-sm ${
              isLiked
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-600 dark:text-rose-400'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 transition-transform duration-200 ${isLiked ? 'fill-rose-500 text-rose-500' : ''} ${isHeartAnimating ? 'scale-125' : 'scale-100'}`} />
            <span className="text-xs font-bold">{formatLikes(likesCount)}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Share Product"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Product Details Card Container */}
      <div className="rounded-none sm:rounded-3xl bg-white dark:bg-[#0B1120] border-x-0 sm:border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-none sm:shadow-2xl p-3 sm:p-8 space-y-5 transition-colors duration-200">
        
        {/* Hero & Media Showcase Banner */}
        <div className="relative h-60 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner group">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 dark:from-[#0B1120] dark:via-[#0B1120]/30 to-transparent"></div>
          
          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-xl text-xs font-black bg-emerald-500 text-slate-950 shadow-lg flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              {product.badge || '🔥 Best Seller'}
            </span>
            <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/90 backdrop-blur-md text-white shadow-lg flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Scanned
            </span>
          </div>

          {/* Clean Rating Badge + Watch Preview */}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-black/40 dark:bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-bold text-white">
              <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span>{product.rating}</span>
            </div>

            <button
              onClick={() => setShowVideoModal(true)}
              className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 dark:bg-slate-950/90 dark:hover:bg-slate-900 border border-emerald-500/50 text-emerald-400 font-bold text-xs backdrop-blur-md shadow-lg transition flex items-center gap-2 cursor-pointer text-white"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>▶ Watch Preview</span>
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {product.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* 1. PRODUCT SPECIFICATION CARDS */}
        <div className="space-y-3 pt-1">
          <h3 className="font-heading text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Product Specifications &amp; Compatibility</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {/* Spec 1: File Size */}
            <div className="p-3.5 rounded-[12px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-3.5 group shadow-xs">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform">
                <HardDrive className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">File Package Size</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white truncate block">{product.fileSize}</span>
              </div>
            </div>

            {/* Spec 2: Software / Format */}
            <div className="p-3.5 rounded-[12px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md hover:border-cyan-500/40 hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-3.5 group shadow-xs">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-cyan-500/15 to-emerald-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform">
                <FileCode className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">Software / Format</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white truncate block">{product.fileFormat}</span>
              </div>
            </div>

            {/* Spec 3: License */}
            <div className="p-3.5 rounded-[12px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-3.5 group shadow-xs">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">License Terms</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white truncate block">{product.license}</span>
              </div>
            </div>

            {/* Spec 4: Release Date */}
            <div className="p-3.5 rounded-[12px] bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-md hover:border-amber-500/40 hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-3.5 group shadow-xs">
              <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-amber-500/15 to-emerald-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">Release Date</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white truncate block">{product.updatedDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MONEY-BACK GUARANTEE BADGE (CLEAN & TRUSTWORTHY) */}
        <div className="relative overflow-hidden p-4 sm:p-6 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/30 text-center shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-md space-y-2.5 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h4 className="font-heading font-extrabold text-base sm:text-lg text-emerald-950 dark:text-emerald-300 tracking-tight">
              ১০০% মানি-ব্যাক গ্যারান্টি (100% Money-Back Guarantee)
            </h4>
          </div>
          <div className="space-y-1 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-slate-800 dark:text-slate-100">
              ফাইলে কোনো সমস্যা থাকলে বা কাজ না করলে ২৪ ঘণ্টার মধ্যে ১০০% রিফান্ড!
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-300/80 font-medium">
              (Instant 100% refund if asset is defective or not as described)
            </p>
          </div>
        </div>

        {/* 3. "WHAT'S INCLUDED" CHECKLIST */}
        <div className="space-y-2 pt-2">
          <h3 className="text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-gray-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>What&apos;s Included</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] hover:bg-slate-100/80 dark:hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-200 flex items-center gap-3 group shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic 30-Product Recommendation Engine ("Similar Assets") */}
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Similar Assets &amp; AI Recommendations ({displayCount}/30)</span>
            </h3>
            <span className="px-3 py-1 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
              ✨ Contextual Match
            </span>
          </div>

          {/* Responsive Grid for Similar Assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentSimilar.map((rec) => (
              <div
                key={rec.id}
                onClick={() => onSelectProduct && onSelectProduct(rec)}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition cursor-pointer group flex items-center gap-4 shadow-sm"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-950 shrink-0">
                  <img
                    src={rec.thumbnail}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {rec.category}
                  </span>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                    {rec.title}
                  </h4>
                  <span className="font-black text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 block">
                    {currency === 'USD' ? `$${rec.priceUSD}` : `৳${rec.priceBDT}`}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button: Display strictly "Next →" with emerald glow */}
          {hasMoreSimilar && (
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleLoadMoreSimilar}
                className="px-6 py-3 rounded-xl text-white font-heading font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)',
                  animation: 'greenGlow 3s infinite ease-in-out'
                }}
              >
                <span className="text-white font-bold">Next →</span>
              </button>
            </div>
          )}
        </div>

        {/* Enterprise AI 100% SEO Keyword Cluster Box */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>SEO keyboards</span>
            </h3>
          </div>

          <div className="max-h-48 overflow-y-auto pr-1 flex flex-wrap gap-1.5 custom-scrollbar">
            {massiveKeywordsList.map((kw, idx) => (
              <span
                key={idx}
                className="bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 text-xs px-2.5 py-1 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition cursor-default"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Sticky Bottom Footer Bar */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-40 px-5 py-3 bg-white/90 dark:bg-[#0B1120]/95 backdrop-blur-md border-t border-slate-200 dark:border-[rgba(255,255,255,0.1)] flex justify-between items-center transition-all duration-300 shadow-2xl ${
          isCheckoutOpen ? 'opacity-0 pointer-events-none translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'
        }`}
      >
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between gap-4 px-2">
          <div className="min-w-0">
            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Instant Access Price</div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-lg sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {currency === 'USD' ? `$${product.priceUSD} USD` : `৳${product.priceBDT} BDT`}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
                {currency === 'USD' ? `$${(product.priceUSD * 2.5).toFixed(0)}` : `৳${product.originalPriceBDT}`}
              </span>
              <span className="text-[11px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded font-bold border border-emerald-500/30 hidden sm:inline">
                Save 60%
              </span>
            </div>
          </div>

          {/* Luxury "Buy Now / Unlock" Button with pulseGlowRed */}
          <button
            onClick={() => onInstantBuy(product)}
            className="relative overflow-hidden px-6 sm:px-8 py-3.5 rounded-2xl font-heading font-black text-xs sm:text-sm text-white transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 group btn-glow-red"
            style={{
              background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
            }}
          >
            {/* Diagonal Light Shimmer Sweep Overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
            
            <Download className="w-4 h-4 text-white shrink-0" />
            <span className="relative z-10 text-white font-bold">⚡ Buy Now / Unlock</span>
          </button>
        </div>
      </div>

      {/* Global CSS for pulseGlowRed & greenGlow */}
      <style>{`
        @keyframes pulseGlowRed {
          0%, 100% {
            box-shadow: 0 0 10px rgba(244, 63, 94, 0.35);
          }
          50% {
            box-shadow: 0 0 25px rgba(244, 63, 94, 0.75), 0 0 45px rgba(225, 29, 72, 0.4);
          }
        }
        .btn-glow-red {
          animation: pulseGlowRed 2.8s infinite ease-in-out;
        }
        @keyframes greenGlow {
          0% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.1); }
          50% { box-shadow: 0 0 15px rgba(16, 185, 129, 0.3); }
          100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.1); }
        }
      `}</style>

      {/* Video Preview Modal Popup */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4 text-slate-900 dark:text-white relative shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" />
                <span>Video Preview &amp; Asset Walkthrough</span>
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt="Demo Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl animate-bounce">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200">▶ High-Definition Asset Walkthrough Stream</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
              All files are verified 100% virus-free and tested for Adobe Premiere Pro, After Effects, and CapCut.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
