

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
          toggle.classList.add("rotateBack");
        });
        if (reference !== i) {
          descs[i].classList.remove("collapse");
          reference = i;
          toggles[i].classList.add("rotate");
          toggles[i].classList.remove("rotateBack");
        } else {
          descs[i].classList.add("collapse");
          reference = -1;
          toggles[i].classList.remove("rotate");
          toggles[i].classList.add("rotateBack");
        }
      });
    });
    })
</script>

<div>
  <div
    class="tab select-none py-9 grid grid-cols-4 items-center cursor-pointer hover:bg-shade transition-colors px-8"
  >
    <div class="col-span-3">
      <h2 class="text-2xl m-0 font-normal">{blok.organization}</h2>
      <h3 class="text-lg m-0 font-normal">{blok.title}</h3>
      <p class="m-0">{blok.duration}</p>
    </div>
    <button class:rotate={css} class:rotateBack={css} class="toggle justify-self-end  w-10 h-10 rounded-full border border-black text-3xl col-span-1 text-neutral-700">+</button>
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

  .rotateBack {
    animation: rotationBack 0.2s forwards;
  }

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(45deg);
    }
  }

  @keyframes rotationBack {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(0);
    }
  }
</style>


