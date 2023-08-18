

<script>
  import {onMount} from 'svelte'
  export let blok = ''
  export let renderTask = ''
  let css = false

  onMount(() => {
    const tabs = document.querySelectorAll(".tab");
    const descs = document.querySelectorAll(".desc");
    const toggles = document.querySelectorAll(".toggle");

    let reference = -1;

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        descs.forEach((desc) => {
          desc.classList.add("collapse");
        });
        toggles.forEach((toggle) => {
          toggle.classList.remove("rotate");
        });
        if (reference !== i) {
          descs[i].classList.remove("collapse");
          reference = i;
          toggles[i].classList.add("rotate");
        } else {
          descs[i].classList.add("collapse");
          reference = -1;
          toggles[i].classList.remove("rotate");
        }
      });
    });
    })
</script>

<div class="border-b border-black last:border-none " class:shadow={css}>
  <div
    class="tab select-none py-9 grid grid-cols-4 items-center cursor-pointer hover:bg-shade transition-colors px-8"
  >
    <div class="col-span-3">
      <h2 class="text-2xl m-0 font-normal">{blok.organization}</h2>
      <h3 class="text-lg m-0 font-normal">{blok.title}</h3>
      <p class="m-0">{blok.duration}</p>
    </div>
    <button class:rotate={css} class="toggle justify-self-end bg-black w-8 h-8 rounded-full text-white text-2xl col-span-1">+</button>
  </div>
  <div class="desc mt-2 collapse mb-8 px-8">
    {@html renderTask}
  </div>
</div>

<style>
  .collapse {
    display: none;
  }

  .desc {
    animation: dropdown 0.2s;
  }

  .shadow {
    background: var(--colorShade);
  }

  @keyframes dropdown {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .rotate {
    animation: rotation 0.2s forwards;
  }

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(45deg);
      background: transparent;
      border: 1px solid black;
      color: black;
    }
  }
</style>


