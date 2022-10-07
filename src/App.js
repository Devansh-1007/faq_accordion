import './App.css';
import mobile from './images/illustration-woman-online-mobile.svg'
import desktop from './images/illustration-woman-online-desktop.svg'
import box from './images/illustration-box-desktop.svg'
import SingleQuestion from './SingleQuestion';
import { useState } from "react";
import { questions } from './questions'



function App() {
  const [quests] = useState(questions);
  return (
    <>
      <div className="container">
        <picture>
          <source media="(min-width:768px)" srcSet={desktop} />

          <img src={mobile} alt="rendering" />
        </picture>
        <article>
          <h1>FAQ</h1>
          {quests.map((quest, index) => {
            return (
              < SingleQuestion key={index} question={quest.question} answer={quest.answer} />
            )
          })}
        </article>
      </div>
    </>
  );
}

export default App;
