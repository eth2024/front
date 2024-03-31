import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const useGetUser = (address?: string) =>
  useQuery({
    queryKey: ["get_user", address],
    queryFn: async () => {
      const { data } = await axios(`${SERVER_URL}/user/${address}`);

      return data.data;
    },
  });

export const useRegisterUser = (enabled?: boolean) =>
  useMutation({
    mutationFn: async (address: string) => {
      if (!enabled) return;
      const { data } = await axios.post(`${SERVER_URL}/user/register`, {
        address,
      });

      return data.data;
    },
  });

export const useGetUserReward = (address: string) =>
  useQuery({
    queryKey: ["get_user_reward", address],
    queryFn: async () => {
      const { data } = await axios(`${SERVER_URL}/user/reward/${address}`);

      return data.data;
    },
  });
