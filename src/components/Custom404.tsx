

const Custom404 = () => {
  return (
    <div className="grid max-w-[1440px] w-full mx-auto font-nunito py-24 text-blue-dark-900 dark:text-white md:grid-cols-2 items-start">
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl sm:text-[56px] font-extrabold leading-tight">Ooops...</h2>
          <h3 className="text-xl sm:text-2xl font-light pl-1">Country Not Found</h3>
        </div>
        <p className="text-sm xxs:text-base sm:text-lg">
          Sorry, the country you're looking for doesn't exist.
          <br />
          Try checking your spelling 🤷🏽‍♂️
        </p>
      </div>
    </div>
  );
};

export default Custom404;
