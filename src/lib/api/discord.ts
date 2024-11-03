import axios from "axios";
import { getSession } from "next-auth/react";
import { apiClient } from "./client";

const DISCORD_API = "https://discord.com/api/v10";

export const discordApi = axios.create({
  baseURL: DISCORD_API,
});

discordApi.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return config;
});

export async function getGuilds() {
  const { data } = await discordApi.get("/users/@me/guilds");
  return data;
}

export async function addEmote(guildId: string, formData: FormData) {
  const { data } = await discordApi.post(
    `/guilds/${guildId}/emojis`,
    formData
  );
  return data;
}

export async function deleteEmote(guildId: string, emoteId: string) {
  await discordApi.delete(`/guilds/${guildId}/emojis/${emoteId}`);
}

interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}

interface GuildWithCounts extends Guild {
  approximate_member_count?: number;
  approximate_presence_count?: number;
}

// Get guild with member count
export async function getGuildWithCounts(guildId: string): Promise<GuildWithCounts> {
  try {
    const { data } = await apiClient.get<GuildWithCounts>(
      `/api/discord/guilds/${guildId}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch guild data");
  }
}

// Get multiple guilds with counts
export async function getGuildsWithCounts(guildIds: string[]): Promise<GuildWithCounts[]> {
  try {
    const { data } = await apiClient.post<GuildWithCounts[]>(
      `/api/discord/guilds/counts`,
      { guildIds }
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch guilds data");
  }
} 