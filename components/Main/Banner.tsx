const Banner = () => {
  return (
    <>
      <div
        className={` hidden h-[36px] items-center justify-center bg-black text-[0.875rem] font-semibold text-white md:flex`}
      >
        Hey dear ETHBogotá friends, this is dapp is super alpha, please handle it with care ;)
      </div>

      <div
        className={`flex h-[36px] items-center justify-center bg-black text-[0.875rem] font-semibold text-white md:hidden `}
      >
        alpha advice, handle us with care ;) #ETHBogotá
      </div>
    </>
  );
};

export default Banner;
