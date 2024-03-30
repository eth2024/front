import { Icon } from "@/components/icon";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";

const StudentHome = () => {
  return (
    <div className="px-20 w-full h-full">
      <Navigation
        rightItem={
          <button className="w-24 h-24">
            <Icon name="User" className="text-24" />
          </button>
        }
      />
      <Title label="Please choose a category you want to study!" />
      <main className="w-full">student home page</main>
    </div>
  );
};

export default StudentHome;
