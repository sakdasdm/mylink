export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: "instagram" | "youtube" | "blog" | string;
  description: string;
  badge: string;
  badgeColor?: string;
  cardBg?: string;
  orderIndex: number;
}

export const sampleLinks: LinkItem[] = [
  {
    id: "link-1",
    title: "인스타그램",
    url: "https://instagram.com/sakdasdm",
    icon: "instagram",
    description: "일상 사진과 개발 일지 스토리 모아보기",
    badge: "SNS",
    badgeColor: "bg-pink-300 text-black",
    cardBg: "bg-white hover:bg-pink-50",
    orderIndex: 0,
  },
  {
    id: "link-2",
    title: "유튜브 채널",
    url: "https://youtube.com/@sakdasdm",
    icon: "youtube",
    description: "코딩 브이로그와 웹 개발 튜토리얼 영상",
    badge: "Video",
    badgeColor: "bg-red-300 text-black",
    cardBg: "bg-white hover:bg-red-50",
    orderIndex: 1,
  },
  {
    id: "link-3",
    title: "기술 블로그 & 기록",
    url: "https://velog.io/@sakdasdm",
    icon: "blog",
    description: "배운 점과 트러블슈팅을 정리하는 공간",
    badge: "Blog",
    badgeColor: "bg-emerald-300 text-black",
    cardBg: "bg-white hover:bg-emerald-50",
    orderIndex: 2,
  },
];
