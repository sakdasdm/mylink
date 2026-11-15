export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="w-full max-w-sm flex flex-col items-center text-center p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200/80 dark:border-zinc-800">
        {/* 프로필 이미지 / 아바타 */}
        <div className="w-20 h-20 mb-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold shadow-sm">
          김
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight mb-3">김경원</h1>

        {/* 소개글 */}
        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed break-keep">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>
      </div>
    </main>
  );
}
