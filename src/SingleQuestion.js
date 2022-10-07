import { useState } from 'react';
import arrow from "../src/images/icon-arrow-down.svg"
export default function SingleQuestion({ question, answer }) {
    const [isClicked, setIsClicked] = useState(false);
    const Arrow = <img className='arrow' src={arrow} alt='' />
    return (
        <>
            <div className='singleContainer'>

                <article onClick={() => setIsClicked(!isClicked)} className='make-flex' >
                    {isClicked ? <h2 className='clicked' >{question} </h2> : <h2  >{question} </h2>}
                    {!isClicked && Arrow}
                </article>
                {isClicked && <p>{answer}</p>}

            </div>
        </>
    );
}