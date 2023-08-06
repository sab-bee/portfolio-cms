import { createSignal, onMount } from "solid-js";
import style from "./reviewCard.module.css";

function ReviewCard({ blok, counter }) {
  const [cards, setCards] = createSignal([...document.querySelectorAll(".card")]);

  const handleCardMouseover = (event) => {
    const index = Array.from(cards).indexOf(event.target);
    const otherCards = Array.from(cards).filter((c, i) => i !== index);
    otherCards.forEach((c) => c.classList.add("arrange"));
  };

  const handleCardMouseleave = (event) => {
    const index = Array.from(cards).indexOf(event.target);
    const otherCards = Array.from(cards).filter((c, i) => i !== index);
    otherCards.forEach((c) => c.classList.remove("arrange"));
  };

  return (
    // <div
    //   class={`${style.card} ${counter !== 0 && style.cardMarginTop} ${
    //     move() && style.arrange
    //   } card w-fit mx-auto rounded-2xl`}
    // >
    //   <div class="border-2 border-dashed border-black p-8 pr-14 rounded-2xl cursor-pointer transition-colors w-[100%] md:w-[450px]">
    //     <p class="italic m-0 font-normal text-base">{blok.testimoni}</p>
    //     <h2 class="m-0 text-lg mt-2 font-medium">{blok.reviewer}</h2>
    //     <h2 class="m-0 font-medium text-neutral-500 text-base">{blok.title}</h2>
    //   </div>
    // </div>
    <div></div>
  );
}

export default ReviewCard;
