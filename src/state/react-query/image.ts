import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import type { ImageCategory, ImageData } from "@/types";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const useGetImage = (category: ImageCategory) =>
  useQuery({
    queryKey: ["get_image", category],
    queryFn: async () => {
      const { data }: { data: { data: ImageData[] } } = await axios(
        `${SERVER_URL}/image/${category}`
      );

      return data.data.slice(0, 5) as ImageData[];
    },
  });

export const useMatchImage = (userAddress?: string) =>
  useMutation({
    mutationFn: async ({
      imageId,
      word,
    }: {
      imageId: string;
      word: string;
    }) => {
      if (userAddress) return;

      await axios.post(`${SERVER_URL}/image/match`, {
        userAddress,
        imageId,
        word,
      });
    },
  });
