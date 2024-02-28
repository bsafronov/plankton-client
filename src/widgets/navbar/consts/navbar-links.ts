import {
  LucideIcon,
  MessageSquare,
  Paperclip,
  Settings,
  User2,
} from "lucide-react";

type NavbarLink = {
  href: string;
  title: string;
  icon: LucideIcon;
  unread?: boolean;
};

export const navbarLinks: NavbarLink[] = [
  {
    href: "/profile",
    title: "Профиль",
    icon: User2,
  },
  {
    href: "/processes",
    title: "Процессы",
    icon: Paperclip,
    unread: true,
  },
  {
    href: "/messages",
    title: "Сообщения",
    icon: MessageSquare,
  },
  {
    href: "/settings",
    title: "Настройки",
    icon: Settings,
  },
];
