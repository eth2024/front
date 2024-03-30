"use client";

const SiginIn = () => {
  const signIn = () => {};

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-5 gap-20 bg-purple">
      <div className="flex flex-col items-center justify-center gap-34s">
        <h2 className="text-white font-bold text-24">Picademy</h2>
        <button onClick={signIn}>Connect to wallet</button>
      </div>
    </div>
  );
};

export default SiginIn;
