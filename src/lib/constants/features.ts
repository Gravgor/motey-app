import { UploadCloud, MessageSquare, Shield, Users, Zap, Settings } from 'lucide-react';
import type { Feature } from '@/types';

export const features: Feature[] = [
  {
    title: "Easy Emote Upload",
    description: "Upload and manage custom emotes with just a few clicks",
    icon: UploadCloud
  },
  {
    title: "Discord Integration",
    description: "Seamlessly integrates with your Discord servers",
    icon: MessageSquare
  },
  {
    title: "Admin Controls",
    description: "Full control over emote usage and permissions",
    icon: Shield
  },
  {
    title: "Community Pool",
    description: "Access thousands of community-created emotes",
    icon: Users
  },
  {
    title: "Quick Response",
    description: "Lightning-fast emote replacement system",
    icon: Zap
  },
  {
    title: "Custom Settings",
    description: "Personalize your emote experience",
    icon: Settings
  }
]; 