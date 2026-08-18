import React, { useState, useEffect } from 'react';
import { ArrowLeft, Eye, EyeOff, ShieldCheck, Lock, Mail, User, CheckCircle2, KeyRound } from 'lucide-react';

interface LoginPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ isOpen, onClose }) => {
  const [authView, setAuthView] = useState<'login' | 'signup' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [agreedTerms, setAgreedTerms] = useState<boolean>(true);
  const [recoveryIdentifier, setRecoveryIdentifier] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const GOOGLE_CLIENT_ID = '778447249303-rrq60h8a5k4t48gtqlcjnuv49bm4bufb.apps.googleusercontent.com';

    const timer = setTimeout(() => {
      if ((window as any).google && (window as any).google.accounts && (window as any).google.accounts.id) {
        try {
          (window as any).google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: (response: any) => {
              if (response && response.credential) {
                try {
                  const base64Url = response.credential.split('.')[1];
                  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                  }).join(''));
                  const payload = JSON.parse(jsonPayload);

                  const userData = {
                    name: payload.name || 'Google User',
                    email: payload.email || '',
                    picture: payload.picture || '',
                    sub: payload.sub || ''
                  };

                  localStorage.setItem('filemarket_user', JSON.stringify(userData));
                  localStorage.setItem('isLoggedIn', 'true');
                  localStorage.setItem('fm_user_name', userData.name);
                  localStorage.setItem('fm_user_email', userData.email);
                  localStorage.setItem('fm_user_photo', userData.picture);
                  localStorage.setItem('fm_user_uid', userData.sub);

                  window.dispatchEvent(new Event('storage'));
                  setToastMessage(`Authenticated with Google: ${userData.name || userData.email}`);
                  setTimeout(() => {
                    setToastMessage(null);
                    onClose();
                  }, 1500);
                  return;
                } catch (err) {
                  console.error('JWT parse error:', err);
                }
              }
              handleGoogleLogin();
            },
            auto_select: false,
            cancel_on_tap_outside: true
          });

          const btnContainer = document.getElementById("google-btn-container");
          if (btnContainer) {
            btnContainer.innerHTML = '';
            (window as any).google.accounts.id.renderButton(
              btnContainer,
              { theme: "filled_blue", size: "large", width: "100%", shape: "rectangular", text: "continue_with" }
            );
          }

          (window as any).google.accounts.id.prompt();
        } catch (e) {
          console.warn("GIS React init error:", e);
        }
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [isOpen, authView]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (authView === 'forgot') {
      if (!recoveryIdentifier) {
        setToastMessage('Please enter your Email or Mobile Number.');
        setTimeout(() => setToastMessage(null), 3000);
        return;
      }
      setToastMessage('Recovery instructions sent to your WhatsApp/Email!');
      setTimeout(() => {
        setToastMessage(null);
        setAuthView('login');
      }, 2000);
      return;
    }

    if (!identifier || !password) {
      setToastMessage('Please fill in all required fields.');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    // Save mock session to localStorage
    const userData = {
      name: fullName || identifier.split('@')[0] || 'FileMarket User',
      email: identifier,
      picture: '',
      sub: 'local_' + Date.now()
    };
    localStorage.setItem('filemarket_user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('fm_user_email', identifier);
    localStorage.setItem('fm_user_name', userData.name);

    // Notify window for storage event listeners
    window.dispatchEvent(new Event('storage'));

    const msg = authView === 'signup'
      ? 'Account created successfully! Welcome to FileMarket.'
      : 'Signed in successfully! Instant Drive Sync activated.';
    
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
      onClose();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    const GOOGLE_CLIENT_ID = '778447249303-rrq60h8a5k4t48gtqlcjnuv49bm4bufb.apps.googleusercontent.com';
    const redirectUri = window.location.hostname.includes('filemarket.site') 
      ? 'https://www.filemarket.site' 
      : window.location.origin;

    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
      + '?client_id=' + encodeURIComponent(GOOGLE_CLIENT_ID)
      + '&redirect_uri=' + encodeURIComponent(redirectUri)
      + '&response_type=token'
      + '&scope=' + encodeURIComponent('email profile')
      + '&prompt=select_account'
      + '&include_granted_scopes=true';

    window.location.href = authUrl;
  };

  return (
    <div id="login-view" className="fixed inset-0 z-[99999] bg-slate-950/90 dark:bg-[#0B0F19]/95 backdrop-blur-2xl flex flex-col overflow-y-auto text-slate-900 dark:text-white animate-in fade-in zoom-in-95 duration-200">
      
      {/* Sub-Nav Bar with minimal Back navigation link */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={onClose}
          type="button"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-500 transition cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-500" />
          <span>← Back to Store</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-xs shadow-xs">
            FM
          </div>
          <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
            FileMarket <span className="text-emerald-400">Auth Center</span>
          </span>
        </div>
      </div>

      {/* Main Center Container */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 my-auto">
        <div className="max-w-md w-full mx-auto p-7 rounded-3xl bg-slate-900/60 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 dark:border-slate-700/60 shadow-2xl backdrop-blur-2xl space-y-6 relative overflow-hidden">
          
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Toast Notification */}
          {toastMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-2 shadow-lg animate-in fade-in duration-200 relative z-20">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* VIEW MODE 1: FORGOT PASSWORD RECOVERY */}
          {authView === 'forgot' ? (
            <div className="space-y-6 relative z-10">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                  <KeyRound className="w-8 h-8" />
                </div>
                <h1 className="font-heading font-black text-xl text-slate-900 dark:text-white tracking-tight">
                  🔑 Reset Your Access PIN / Password
                </h1>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed font-medium">
                  Enter your registered Email or Mobile Number to receive an instant verification reset link or WhatsApp recovery code.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    Email or Mobile Number
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="name@example.com or +8801..."
                      value={recoveryIdentifier}
                      onChange={(e) => setRecoveryIdentifier(e.target.value)}
                      required
                      className="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl btn-glow-red text-white font-heading font-extrabold text-sm sm:text-base hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Send Recovery Link / Code →</span>
                </button>
              </form>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setAuthView('login')}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-bold hover:underline transition cursor-pointer"
                >
                  ← Back to Sign In
                </button>
              </div>
            </div>
          ) : (
            /* VIEW MODE 2 & 3: LOGIN / SIGNUP FORM */
            <>
              {/* Header & Branding */}
              <div className="text-center space-y-2 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.25)] animate-shield">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h1 className="font-heading font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                  {authView === 'signup' ? 'Create Free Account' : 'Welcome to FileMarket'}
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed font-medium">
                  Access your purchased digital assets, instant downloads &amp; lifetime licenses.
                </p>
              </div>

              {/* Official Google Identity Button Container */}
              <div className="space-y-3 relative z-10">
                <div id="google-btn-container" className="w-full min-h-[44px] flex items-center justify-center overflow-hidden rounded-xl">
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="w-full py-3 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
                  <span className="bg-slate-900 dark:bg-slate-900 px-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest shrink-0">
                    OR CONTINUE WITH EMAIL / PHONE
                  </span>
                </div>
              </div>

              {/* Credential Form with Left Icons */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {authView === 'signup' && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Joy Barmon"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    Email or Mobile Number
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="name@example.com or +8801..."
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required
                      className="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    Password / Access PIN
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-11 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 focus:outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Help Row */}
                <div className="flex items-center justify-between text-xs pt-1">
                  {authView === 'login' ? (
                    <>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 font-medium">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                        />
                        <span>Remember Me</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setAuthView('forgot')}
                        className="text-emerald-500 hover:text-emerald-400 font-bold hover:underline cursor-pointer"
                      >
                        Forgot Password?
                      </button>
                    </>
                  ) : (
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 font-medium">
                      <input
                        type="checkbox"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500"
                      />
                      <span>I agree to Terms &amp; Privacy Policy</span>
                    </label>
                  )}
                </div>

                {/* Primary Action Button (Rose-Crimson Gradient with btn-glow-red) */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl btn-glow-red text-white font-heading font-extrabold text-sm sm:text-base hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 shadow-lg"
                >
                  <span>{authView === 'signup' ? 'Create Free Account →' : 'Sign In to Locker →'}</span>
                </button>
              </form>

              {/* Smooth Switcher */}
              <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium relative z-10">
                <span>{authView === 'signup' ? 'Already have an account?' : "Don't have an account?"}</span>{' '}
                <button
                  type="button"
                  onClick={() => setAuthView(authView === 'signup' ? 'login' : 'signup')}
                  className="text-emerald-500 hover:text-emerald-400 font-extrabold hover:underline cursor-pointer ml-1"
                >
                  {authView === 'signup' ? 'Sign In' : 'Create Free Account'}
                </button>
              </div>
            </>
          )}

          {/* Micro Typography Trust Line */}
          <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 text-center text-[11px] text-slate-400 dark:text-slate-500 font-medium relative z-10 flex items-center justify-center gap-2">
            <span>🔒 256-Bit SSL</span>
            <span>•</span>
            <span>⚡ Instant Cloud Delivery</span>
          </div>

        </div>
      </div>

    </div>
  );
};

