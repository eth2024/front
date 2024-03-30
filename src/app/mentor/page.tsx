import { Icon } from "@/components/icon";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";

const MentorPage = () => {
  return (
    <div className="px-20 w-full h-full">
      <Navigation
        rightItem={
          <button className="w-24 h-24">
            <Icon name="User" className="text-24" />
          </button>
        }
      />
      <main className="w-full">mentor home page</main>
    </div>
  );
};

export default MentorPage;
