<script>
  import { onMount } from 'svelte';

  export let blok = ''
  let main;
  let isArrange = false
  onMount(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      if (i > 0) {
        card.classList.add('shuffle')
      }
      card.addEventListener("mouseover", () => {
        for (let j = i + 1; j < cards.length; j++) {
          cards[j].classList.add("arrange")
        }
      });

      card.addEventListener("mouseleave", () => {
        for (let j = i + 1; j < cards.length; j++) {
          cards[j].classList.remove("arrange");
        }
      });
    });
  })


</script>

<div bind:this={main} class:arrange={isArrange} class:shuffle={isArrange} class="card select-none">
  <div
    class="bg-primary border-2 border-dashed border-black p-8 pr-14 rounded-2xl cursor-pointer hover:bg-shade transition-colors w-[100%] md:w-[450px]"
  >
    <p class="italic m-0 font-normal text-base">{blok.testimoni}</p>
    <h2 class="m-0 text-lg mt-2 font-medium">{blok.reviewer}</h2>
    <h2 class="m-0 font-medium text-neutral-500 text-base">{blok.title}</h2>
  </div>
</div>

<style>
  .card {
    transition: 0.4s ease-out;
    box-shadow: rgba(0, 0, 0, 0.308) 0 -20px 20px -10px;
  }
  
  .shuffle {
    margin-top: -42%;
  }

  .arrange {
    transform: translateY(75%);
  }

  @media only screen and (max-width: 768px) {
    .shuffle {
      margin-top: -8rem
    }
    .arrange {
      transform: translateY(8rem);
    }
  }
</style>
