import React from "react";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

const App = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* Header */}
        <Header />

        {/* swipe cards */}

        <TinderCards />

        {/* buttons */}

        <SwipeButtons />
      </div>
    </div>
  );
};

export default App;

const styles = {
  container: `m-0`,
};
