import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ImageCategory } from "@/types";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const useGetImage = (category: ImageCategory) =>
  useQuery({
    queryKey: ["get_image", category],
    queryFn: async () => {
      const { data } = await axios(`${SERVER_URL}/image/${category}`);

      return data.data;
    },
  });
