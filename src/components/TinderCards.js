import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  const swipped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomerg-via-getty-images.jpg",
    },
  ]);

  const [LastDirection, setLastDirection] = useState();
  return (
    <div className={styles.tinderCards}>
      <div className={styles.container}>
        {people.map((person, index) => (
          <TinderCard
            key={person.name}
            className={styles.swipe}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className={styles.card}
            >
              <h3 className={styles.title}>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

const styles = {
  tinderCards: `w-full h-full`,
  container: `flex justify-center mt-[10vh]`,
  card: `relative bg-[#fff] w-[600px] max-w-[85vw] h-[600px] p-[20px] shadow-2xl shadow-slate-900 rounded-2xl bg-cover bg-center`,
  swipe: `absolute`,
  title: `absolute bottom-0 m-[10px] font-semibold text-lg text-[#fff]`,
};
