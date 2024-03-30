"use client";
import { Icon } from "@/components/icon";
import Navigation from "@/components/layout/Navigation";
import Title from "@/components/layout/Title";
import CardButton from "@/components/Button/CardButton";
import { useRouter } from "next/navigation";

const StudentHome = () => {
  const router = useRouter();
  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    router.replace("/student/study");
    // const { name } = event.currentTarget;
    // console.log(name);
  }
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
      <main className="w-full flex flex-col gap-20 mt-40">
        <CardButton
          name="Kpop"
          src="/images/test.jpeg"
          alt="Kpop"
          label="Kpop"
          onClick={onClickHandler}
        />
        <CardButton src="/images/test.jpeg" alt="Animal" label="Animal" />
        <CardButton src="/images/test.jpeg" alt="Load" label="Load" />
        <CardButton src="/images/test.jpeg" alt="Kpop" label="Kpop" />
      </main>
    </div>
  );
};

export default StudentHome;
