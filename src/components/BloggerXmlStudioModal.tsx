import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, BookOpen, CheckCircle, FileText, Sparkles } from 'lucide-react';
import { BLOGGER_XML_TEMPLATE } from '../data/bloggerXmlTemplate';

interface BloggerXmlStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BloggerXmlStudioModal: React.FC<BloggerXmlStudioModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'guide' | 'post-format'>('code');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(BLOGGER_XML_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadXml = () => {
    const blob = new Blob([BLOGGER_XML_TEMPLATE], { type: 'text/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'FileMarket-Blogger-Layout-v3.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-hidden">
      <div className="w-full max-w-5xl h-[92vh] rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Modal Topbar Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-lg font-bold text-white">
                  Blogger XML Architecture Studio
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Layout Version 3
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  100% Valid XML
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Production-ready Google Blogspot theme engineered for FileMarket.site
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied 100% XML!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Full Code</span>
                  <span className="inline sm:hidden">Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadXml}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download .XML File</span>
              <span className="inline sm:hidden">Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2.5 bg-slate-950 border-b border-slate-800/80 flex items-center gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition ${
              activeTab === 'code'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Complete XML Template ({BLOGGER_XML_TEMPLATE.length.toLocaleString()} chars)</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition ${
              activeTab === 'guide'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Installation Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('post-format')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition ${
              activeTab === 'post-format'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>How to Post Products</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-hidden bg-slate-950 relative">
          
          {activeTab === 'code' && (
            <div className="h-full overflow-auto p-4 sm:p-6 font-mono text-xs text-slate-300 select-all leading-relaxed no-scrollbar">
              <pre className="whitespace-pre-wrap">{BLOGGER_XML_TEMPLATE}</pre>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="h-full overflow-auto p-6 sm:p-8 space-y-6 max-w-3xl">
              <div className="space-y-2">
                <h4 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span>How to Install FileMarket XML on Google Blogger</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Follow these 3 simple steps to transform your Blogger blog into a high-converting digital marketplace.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">1</span>
                    <span>Open Blogger Theme Editor</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-8">
                    Go to <strong>Blogger.com</strong> &gt; Select your blog &gt; Click <strong>Theme</strong> in the left sidebar &gt; Click the dropdown arrow next to the orange &apos;Customize&apos; button &gt; Click <strong>Edit HTML</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-cyan-400">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs">2</span>
                    <span>Paste XML Code</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-8">
                    In the code editor, select everything (<kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">Ctrl+A</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono">Cmd+A</kbd>) and delete it. Then paste the complete XML code copied from this studio.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-amber-400">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">3</span>
                    <span>Save Theme</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-8">
                    Click the <strong>Save</strong> disk icon in the top right. Your blog is now running FileMarket Pro with bKash/Nagad checkout and WhatsApp support!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-pink-400">
                    <span className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-xs">4</span>
                    <span>Set 9 Posts Per Page (Recommended 3x3 Grid)</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-8">
                    Go to <strong>Settings</strong> &gt; <strong>Posts</strong> &gt; Set <strong>Max posts shown on main page</strong> to <strong>9</strong> to display 9 products per page.
                  </p>
                </div>

                {/* Founder Profile Embedded Notice */}
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                    <img
                      src="https://lh3.googleusercontent.com/d/1XORisly52YSBcNc4Iukz60y9ho9GrEuE"
                      alt="Joy Barmon"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-1.5">
                      <strong className="text-white font-bold">Joy Barmon</strong>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px] border border-emerald-500/30">Verified</span>
                    </div>
                    <p className="text-emerald-300 text-[11px]">Founder &amp; Lead Digital Architect (FileMarket.site)</p>
                    <p className="text-slate-400 text-[10px] pt-0.5">Profile image, address &amp; WhatsApp (+8801673833783) are directly baked into the XML footer.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'post-format' && (
            <div className="h-full overflow-auto p-6 sm:p-8 space-y-6 max-w-3xl">
              <div className="space-y-2">
                <h4 className="font-heading text-lg font-bold text-white">
                  Publishing Products on Blogger
                </h4>
                <p className="text-xs text-slate-400">
                  How to categorize and structure your Blogger posts so they appear properly in the marketplace.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <strong className="text-white font-heading text-sm">1. Setting Labels (Categories)</strong>
                  <p>In Blogger Post Settings (right sidebar), assign one or more of the 9 official category labels:</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Video Bundles', 'Online Courses', 'E-Books', 'Premium Apps', 'Premium PC Software', 'AI Prompts', 'PHP Scripts', 'Blogger Templates', 'Others'].map((l) => (
                      <span key={l} className="px-2 py-1 rounded bg-slate-800 text-emerald-400 font-bold border border-slate-700">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <strong className="text-white font-heading text-sm">2. Featured Image (Thumbnail)</strong>
                  <p>
                    Simply upload an image inside the post body or set the first image. Blogger will automatically detect it via <code>data:post.featuredImage</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <strong className="text-white font-heading text-sm">3. Automatic Payment &amp; WhatsApp</strong>
                  <p>
                    The template includes built-in bKash &amp; Nagad personal accounts (<code>01673833783</code>) with 1-click copy, automated TrxID submission, and direct WhatsApp customer payloads to <code>+8801673833783</code>.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Strictly conforms to Blogger Layout v3 &amp; Widget v2 DTD</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="font-bold text-emerald-400 hover:text-emerald-300 underline"
            >
              {copied ? 'Copied to clipboard' : 'Copy XML'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
