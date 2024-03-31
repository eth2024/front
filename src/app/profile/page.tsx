"use client";
import { Icon } from "@/components/icon";
import Navigation from "@/components/layout/Navigation";
import AccountCard from "./AccountCard";
import RewardCard from "./RewardCard";
import AnswerCard from "./AnswerCard";
import ScoreCard from "./ScoreCard";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  return (
    <div className="px-20 w-full h-full bg-gray-100">
      <Navigation
        leftItem={
          <button className="w-24 h-24" onClick={() => router.back()}>
            <Icon name="ChevronLeft" className="text-24" />
          </button>
        }
        rightItem={
          <button className="w-24 h-24">
            <Icon name="Settings" className="text-24" />
          </button>
        }
      />
      <main className="flex flex-col gap-20 w-full mt-20 mb-20">
        <AccountCard />
        <RewardCard />
        <AnswerCard />
        <ScoreCard />
      </main>
    </div>
  );
};

export default ProfilePage;
