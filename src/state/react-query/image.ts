import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ImageCategory, ImageData } from "@/types";

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
