import { Icon } from "@/components/icon";
import Navigation from "@/components/layout/Navigation";

const ProfilePage = () => {
  return (
    <div className="px-20 w-full h-full bg-gray-100">
      <Navigation
        leftItem={
          <button className="w-24 h-24">
            <Icon name="ChevronLeft" className="text-24" />
          </button>
        }
        rightItem={
          <button className="w-24 h-24">
            <Icon name="Settings" className="text-24" />
          </button>
        }
      />
      <main className="w-full">profile page</main>
    </div>
  );
};

export default ProfilePage;
