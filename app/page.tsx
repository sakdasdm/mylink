"use client";

import { useState } from "react";
import {
  Share2,
  Check,
  Code2,
  Sparkles,
  MapPin,
} from "lucide-react";
import { sampleLinks } from "@/data/links";
import { LinkCard } from "@/components/link-card";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("복사 실패:", err);
      }
    }
  };

  // orderIndex 기준 오름차순 정렬
  const sortedLinks = [...sampleLinks].sort((a, b) => a.orderIndex - b.orderIndex);

  const techBadges = [
    { name: "Next.js", bg: "bg-violet-200" },
    { name: "React", bg: "bg-cyan-200" },
    { name: "TypeScript", bg: "bg-blue-200" },
    { name: "Tailwind CSS", bg: "bg-teal-200" },
    { name: "Vibe Coding", bg: "bg-pink-200" },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-3 sm:p-6 bg-[#FEF08A] text-black selection:bg-black selection:text-white">
      {/* 프로필 카드 컨테이너 */}
      <div className="w-full max-w-[420px] mx-auto my-6 p-5 sm:p-7 rounded-3xl bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        
        {/* 상단 액션 바: 태그 & 공유 버튼 */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A7F3D0] border-2 border-black text-xs font-black shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-black fill-black" />
            <span>PROFILE</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-full bg-white hover:bg-yellow-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
            title="프로필 링크 복사"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span className="text-emerald-700">복사 완료!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>공유</span>
              </>
            )}
          </button>
        </div>

        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center text-center mt-5">
          {/* 아바타 (원형 유지, 3px 검은 테두리 및 그림자) */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#60A5FA] border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
              <span className="text-3xl font-black text-white select-none">
                김
              </span>
            </div>
            {/* 활동 상태 표시 점 */}
            <div
              className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#4ADE80] border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_0px_#000]"
              title="활동 중"
            >
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          {/* 이름 */}
          <h1 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-black break-words">
            김경원
          </h1>

          {/* 상태 / 역할 태그 */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-yellow-200 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <Code2 className="w-3.5 h-3.5 stroke-[2.5]" /> 개발자
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-zinc-100 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <MapPin className="w-3.5 h-3.5 stroke-[2.5]" /> Seoul, KR
            </span>
          </div>

          {/* 소개글 */}
          <p className="mt-4 text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed break-keep px-1 sm:px-2">
            새로운 기술을 탐구하고 지속적으로 성장하는 개발자입니다. 사용자 중심의 가치 있는 서비스를 만들어갑니다.
          </p>

          {/* 기술 스택 칩스 */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] ${badge.bg}`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>

        {/* 링크 목록 (orderIndex 순서대로 렌더링) */}
        <div className="mt-6 flex flex-col gap-3">
          {sortedLinks.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* 하단 푸터 */}
        <div className="mt-7 pt-4 border-t-2 border-black text-center text-[11px] sm:text-xs font-bold text-zinc-700">
          © 2026 Kyungwon Kim. All rights reserved.
        </div>
      </div>
    </main>
  );
}
