const CountryCardSkeleton = () => {
  return (
    <div className="relative w-[280px] mx-auto overflow-hidden rounded-md bg-white dark:bg-blue-dark-400 shadow-md before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 dark:before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.2s_infinite]">
      <div className="h-[160px] w-full bg-gray-400 dark:bg-blue-dark-500"></div>
      <div className="p-6 pb-12 flex flex-col gap-4">
        <div className="h-[26px] w-full bg-gray-400 dark:bg-blue-dark-500 rounded-sm"></div>
        <div className="flex flex-col gap-1">
          <div className="h-[19px] w-full bg-gray-400 dark:bg-blue-dark-500 rounded-sm"></div>
          <div className="h-[19px] w-[80%] bg-gray-400 dark:bg-blue-dark-500 rounded-sm"></div>
          <div className="h-[19px] w-[65%] bg-gray-400 dark:bg-blue-dark-500 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default CountryCardSkeleton;
