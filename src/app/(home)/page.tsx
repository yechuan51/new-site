const getCurrentDate = () => {
  return new Date();
};

const MainHomePage: () => JSX.Element = () => {
  const currentDate = getCurrentDate().toLocaleDateString();
  return (
      <div>
        <main>
          <p>Today&apos;s date is {currentDate}</p>
        </main>
      </div>
  );
};

export default MainHomePage;
