import axios from "axios";
import { getSession } from "next-auth/react";

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