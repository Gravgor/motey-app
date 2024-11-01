import { apiClient } from "./client";

export interface Emote {
  id: string;
  name: string;
  animated: boolean;
  guild_id?: string;
  added_by: string;
  created_at: string;
  updated_at: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface EmoteCreateData {
  name: string;
  file: File;
  guild_id?: string;
}

// Get emotes for a specific server
export async function getServerEmotes(serverId: string): Promise<Emote[]> {
  const { data } = await apiClient.get(`/api/servers/${serverId}/emotes`);
  return data;
}

// Get global emotes
export async function getGlobalEmotes(): Promise<Emote[]> {
  try {
    const { data } = await apiClient.get<Emote[]>("/api/emotes/global");
    return data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new ApiError(
        error.response.data.message || "Failed to fetch global emotes",
        error.response.status,
        error.response.data.code
      );
    } else if (error.request) {
      // The request was made but no response was received
      throw new ApiError("No response from server");
    } else {
      // Something happened in setting up the request
      throw new ApiError("Failed to make request");
    }
  }
}

// Add emote to server
export async function addEmote(emoteData: EmoteCreateData): Promise<Emote> {
  try {
    const formData = new FormData();
    formData.append("name", emoteData.name);
    formData.append("file", emoteData.file);
    if (emoteData.guild_id) {
      formData.append("guild_id", emoteData.guild_id);
    }

    const { data } = await apiClient.post<Emote>("/api/emotes", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    if (error.response?.status === 413) {
      throw new ApiError("File size too large");
    }
    throw new ApiError(
      error.response?.data?.message || "Failed to upload emote"
    );
  }
}

// Delete emote
export async function deleteEmote(emoteId: string): Promise<void> {
  try {
    await apiClient.delete(`/api/emotes/${emoteId}`);
  } catch (error: any) {
    throw new ApiError(
      error.response?.data?.message || "Failed to delete emote"
    );
  }
} 