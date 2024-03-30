"use client";

import Button from "@/components/Button/Button";

const SiginIn = () => {
  const signIn = () => {};

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-5 gap-20 bg-purple">
      <div className="flex flex-col items-center justify-center gap-34 w-full px-20">
        <h2 className="text-white font-bold text-24">Picademy</h2>
        <Button
          label="Connect to wallet"
          onClick={signIn}
          style={{ backgroundColor: "white", color: "#A752E0" }}
        />
      </div>
    </div>
  );
};

export default SiginIn;
