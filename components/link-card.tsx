import React from "react";
import { ExternalLink, Globe } from "lucide-react";
import { LinkItem } from "@/data/links";
import { cn } from "@/lib/utils";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface LinkCardProps {
  link: LinkItem;
  className?: string;
}

export function LinkCard({ link, className }: LinkCardProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return <InstagramIcon className="w-5 h-5 text-black" />;
      case "youtube":
        return <YoutubeIcon className="w-5 h-5 text-black" />;
      case "blog":
        return <Globe className="w-5 h-5 text-black" />;
      default:
        return <Globe className="w-5 h-5 text-black" />;
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center p-3 sm:p-3.5 rounded-2xl border-[3px] border-black",
        "shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000]",
        "hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000]",
        "transition-all duration-150 cursor-pointer select-none",
        link.cardBg || "bg-white hover:bg-zinc-50",
        className
      )}
    >
      {/* 좌측 아이콘 박스 */}
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] group-hover:rotate-6 transition-transform">
        {renderIcon(link.icon)}
      </div>

      {/* 텍스트 컨텐츠 (제목, 배지, 설명) */}
      <div className="ml-3 flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-black text-black truncate">
            {link.title}
          </span>
          {link.badge && (
            <span
              className={cn(
                "px-1.5 py-0.5 text-[10px] font-black rounded border border-black shadow-[1px_1px_0px_0px_#000]",
                link.badgeColor || "bg-zinc-200 text-black"
              )}
            >
              {link.badge}
            </span>
          )}
        </div>
        <p className="text-[11px] sm:text-xs font-semibold text-zinc-600 truncate mt-0.5">
          {link.description}
        </p>
      </div>

      {/* 외부 링크 새 탭 아이콘 (↗) */}
      <div className="flex-shrink-0 ml-1 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
        <ExternalLink className="w-4 h-4 stroke-[2.5]" />
      </div>
    </a>
  );
}
