import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { HeroSlider } from './components/HeroSlider';
import { TrustMetricsBar } from './components/TrustMetricsBar';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CheckoutPage } from './components/CheckoutPage';
import { BloggerXmlStudioModal } from './components/BloggerXmlStudioModal';
import { ProfileModal } from './components/ProfileModal';
import { SmartSearchOverlayModal } from './components/SmartSearchOverlayModal';
import { UserProfilePage } from './components/UserProfilePage';
import { LoginPage } from './components/LoginPage';
import { MyProductsPage } from './components/MyProductsPage';
import { AiSeoGeneratorModal } from './components/AiSeoGeneratorModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { Footer } from './components/Footer';
import { SlideDrawer } from './components/SlideDrawer';
import { PRODUCTS_DATA, CATEGORIES } from './data/products';
import { Product, Currency } from './types';
import { useAppRouter, getProductSlug, navigateTo } from './router';

export default function App() {
  // Initialize Client-Side SPA Router
  const { route, navigate } = useAppRouter(PRODUCTS_DATA);

  // Dark mode state: default to dark (Night Mode #0B0F19)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('filemarket_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Night mode is default
  });

  // Currency state: default to BDT (৳ Taka), with USD ($ Dollar) support
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('filemarket_currency');
    return saved === 'USD' ? 'USD' : 'BDT';
  });

  // Real-Time Geo-Location Currency Detection (BDT for BD visitors, USD for international)
  useEffect(() => {
    const saved = localStorage.getItem('filemarket_currency');
    if (!saved) {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz.includes('Dhaka') || tz.includes('Asia/Dhaka')) {
        setCurrency('BDT');
        localStorage.setItem('filemarket_currency', 'BDT');
      } else {
        fetch('https://ipapi.co/json/')
          .then(res => res.json())
          .then(data => {
            if (data && data.country_code === 'BD') {
              setCurrency('BDT');
              localStorage.setItem('filemarket_currency', 'BDT');
            } else if (data && data.country_code) {
              setCurrency('USD');
              localStorage.setItem('filemarket_currency', 'USD');
            }
          })
          .catch(() => {});
      }
    }
  }, []);

  // Handle Google OAuth 2.0 Access Token Callback on Page Load
  useEffect(() => {
    const checkOAuthHash = async () => {
      const hash = window.location.hash;
      if (!hash || !hash.includes('access_token')) return;

      try {
        const params = new URLSearchParams(hash.startsWith('#') ? hash.substring(1) : hash);
        const accessToken = params.get('access_token');
        if (accessToken) {
          const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
              'Authorization': 'Bearer ' + accessToken
            }
          });

          if (res.ok) {
            const data = await res.json();
            const userData = {
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

            window.dispatchEvent(new Event('storage'));
          }
        }
      } catch (err) {
        console.error('Failed to parse Google OAuth token:', err);
      }
    };

    checkOAuthHash();
  }, []);

  // Save currency preference
  useEffect(() => {
    localStorage.setItem('filemarket_currency', currency);
  }, [currency]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);
  const [isXmlStudioOpen, setIsXmlStudioOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isUserProfilePageOpen, setIsUserProfilePageOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isMyProductsPageOpen, setIsMyProductsPageOpen] = useState<boolean>(false);
  const [isAiSeoOpen, setIsAiSeoOpen] = useState<boolean>(false);
  const [policyModalTab, setPolicyModalTab] = useState<PolicyType | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  // Synchronize route state with active modals and views
  useEffect(() => {
    switch (route.name) {
      case 'home':
        setDetailProduct(null);
        setCheckoutProduct(null);
        setIsUserProfilePageOpen(false);
        setIsLoginOpen(false);
        setIsMyProductsPageOpen(false);
        setIsDrawerOpen(false);
        setIsAiSeoOpen(false);
        setIsXmlStudioOpen(false);
        setPolicyModalTab(null);
        document.title = 'FileMarket — Premium Digital Assets Marketplace in Bangladesh';
        break;

      case 'product':
        if (route.product) {
          setDetailProduct(route.product);
          setCheckoutProduct(null);
          document.title = `${route.product.title} — FileMarket`;
        } else {
          setDetailProduct(PRODUCTS_DATA[0]);
          setCheckoutProduct(null);
        }
        break;

      case 'checkout':
        if (route.product) {
          setCheckoutProduct(route.product);
          setDetailProduct(null);
          document.title = `Checkout ${route.product.title} — FileMarket`;
        } else {
          setCheckoutProduct(PRODUCTS_DATA[0]);
          setDetailProduct(null);
          document.title = 'Secure Payment & Checkout — FileMarket';
        }
        break;

      case 'profile':
        setIsUserProfilePageOpen(true);
        setIsLoginOpen(false);
        document.title = 'User Profile & Dashboard — FileMarket';
        break;

      case 'auth':
        setIsLoginOpen(true);
        setIsUserProfilePageOpen(false);
        document.title = 'Sign In & Sign Up — FileMarket';
        break;

      case 'locker':
        setIsMyProductsPageOpen(true);
        document.title = 'Digital Locker & Downloads — FileMarket';
        break;

      case 'cart':
        setIsDrawerOpen(true);
        document.title = 'Cart & Navigation — FileMarket';
        break;

      case 'ai-seo':
        setIsAiSeoOpen(true);
        document.title = 'AI SEO Generator — FileMarket';
        break;

      case 'xml-studio':
        setIsXmlStudioOpen(true);
        document.title = 'Blogger XML Studio & Theme Exporter — FileMarket';
        break;

      case 'policy':
        setPolicyModalTab((route.params.tab as PolicyType) || 'privacy');
        document.title = 'Policies & Trust Guarantees — FileMarket';
        break;
    }
  }, [route]);

  // Smart Auto-Hide Header and Category Filter on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near top of the page
      if (currentScrollY < 40) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling Down -> Hide
      if (currentScrollY > lastScrollY.current + 10) {
        setIsHeaderVisible(false);
      } 
      // Scrolling Up -> Show
      else if (currentScrollY < lastScrollY.current - 10) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync currency preference to localStorage
  useEffect(() => {
    localStorage.setItem('filemarket_currency', currency);
  }, [currency]);

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('filemarket_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('filemarket_theme', 'light');
    }
  }, [darkMode]);

  // Category counts calculation
  const productsCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Products': PRODUCTS_DATA.length,
    };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All Products') {
        counts[cat] = PRODUCTS_DATA.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleScrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCategories = () => {
    const el = document.getElementById('categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route-Aware Navigation Handlers
  const handleOpenProductDetail = (p: Product) => {
    navigate(`/product/${getProductSlug(p)}`, { title: `${p.title} — FileMarket` });
  };

  const handleOpenCheckout = (p: Product) => {
    navigate(`/checkout/${getProductSlug(p)}`, { title: `Checkout ${p.title} — FileMarket` });
  };

  const handleBackToHome = () => {
    navigate('/', { title: 'FileMarket — Premium Digital Assets Marketplace in Bangladesh' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased">
      
      {checkoutProduct ? (
        <CheckoutPage
          product={checkoutProduct}
          currency={currency}
          onBack={handleBackToHome}
          onExploreStore={() => {
            handleBackToHome();
            setSelectedCategory('All Products');
            handleScrollToProducts();
          }}
          onOpenXmlStudio={() => navigate('/studio')}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setCurrency={setCurrency}
          onOpenProfile={() => navigate('/profile')}
          onOpenDrawer={() => navigate('/cart')}
          onOpenAiSeo={() => navigate('/ai-seo')}
          onOpenSearch={() => setIsSearchOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isHeaderVisible={isHeaderVisible}
        />
      ) : (
        <>
          {/* Smart Animated Sticky Header (Auto-hides on scroll down, shows on scroll up) */}
          <div
            className={`sticky top-0 z-40 w-full transition-transform duration-300 ease-in-out will-change-transform ${
              isHeaderVisible ? 'translate-y-0 shadow-md' : '-translate-y-full shadow-none'
            }`}
          >
            <Header
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              currency={currency}
              setCurrency={setCurrency}
              onOpenXmlStudio={() => navigate('/studio')}
              onOpenProfile={() => navigate('/auth')}
              onOpenDrawer={() => navigate('/cart')}
              onOpenAiSeo={() => navigate('/ai-seo')}
              onOpenSearch={() => setIsSearchOpen(true)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

           {/* Main Content Area */}
          <main id="products-section" className="flex-1 max-w-[1750px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 w-full">
            {detailProduct ? (
              <ProductDetailModal
                product={detailProduct}
                currency={currency}
                onBack={handleBackToHome}
                onInstantBuy={handleOpenCheckout}
                onSelectProduct={handleOpenProductDetail}
                isCheckoutOpen={false}
              />
            ) : (
              <>
                {/* 16:9 Auto-Scrolling Featured Products Hero Slider */}
                {selectedCategory === 'All Products' && !searchQuery && (
                  <HeroSlider
                    currency={currency}
                    onInstantBuy={handleOpenCheckout}
                    onViewDetails={handleOpenProductDetail}
                  />
                )}

                {/* 9 Product Categories Filter Bar - Positioned Below Hero Section */}
                <div className="mb-6">
                  <CategoryFilter
                    selectedCategory={selectedCategory}
                    onSelectCategory={(cat) => setSelectedCategory(cat)}
                    productsCounts={productsCounts}
                  />
                </div>

                <ProductGrid
                  products={filteredProducts}
                  currency={currency}
                  selectedCategory={selectedCategory}
                  searchQuery={searchQuery}
                  onInstantBuy={handleOpenCheckout}
                  onViewDetails={handleOpenProductDetail}
                />

                {/* High-Converting Bangladeshi Trust Metrics Bar (Positioned Above Founder Section) */}
                <div className="mt-8 mb-2">
                  <TrustMetricsBar />
                </div>
              </>
            )}
          </main>

          {/* Footer (with attached Founder Trust Section & Legal Strip) */}
          <Footer
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              handleScrollToProducts();
            }}
            onOpenXmlStudio={() => navigate('/studio')}
            onOpenPolicy={(tab) => navigate(`/policy/${tab}`)}
          />
        </>
      )}

      {/* Legal & Policy Modal Overlay */}
      <PolicyModal
        isOpen={policyModalTab !== null}
        initialTab={policyModalTab || 'privacy'}
        onClose={handleBackToHome}
      />

      {/* Slide-Out Navigation Drawer */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={handleBackToHome}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currency={currency}
        setCurrency={setCurrency}
        onOpenProfilePage={() => navigate('/profile')}
        onOpenMyProductsPage={() => navigate('/locker')}
        onOpenAiSeoGenerator={() => navigate('/ai-seo')}
        onOpenLogin={() => navigate('/auth')}
      />

      {/* Dedicated User Authentication Login Page */}
      <LoginPage
        isOpen={isLoginOpen}
        onClose={handleBackToHome}
      />

      {/* Dedicated User Profile Page Modal */}
      <UserProfilePage
        isOpen={isUserProfilePageOpen}
        onClose={handleBackToHome}
        currency={currency}
        setCurrency={setCurrency}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Dedicated My Products / Downloads Page Modal */}
      <MyProductsPage
        isOpen={isMyProductsPageOpen}
        onClose={handleBackToHome}
        currency={currency}
        onExploreStore={() => {
          handleBackToHome();
          setSelectedCategory('All Products');
          handleScrollToProducts();
        }}
      />

      {/* FileMarket AI SEO Generator Modal */}
      <AiSeoGeneratorModal
        isOpen={isAiSeoOpen}
        onClose={handleBackToHome}
      />

      {/* Smart AI-Powered Search Overlay Modal */}
      <SmartSearchOverlayModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleOpenProductDetail}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          handleScrollToProducts();
        }}
      />

      {/* User Profile & Account Settings Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        currency={currency}
        setCurrency={setCurrency}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Full Blogger XML Code Studio & Export Modal */}
      <BloggerXmlStudioModal
        isOpen={isXmlStudioOpen}
        onClose={handleBackToHome}
      />

    </div>
  );
}

