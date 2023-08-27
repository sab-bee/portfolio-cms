

<script>
  import {onMount} from 'svelte'
  export let blok = ''
  export let renderTask = ''
  let css = false

  onMount(() => {
    const tabs = document.querySelectorAll(".tab");
    const descs = document.querySelectorAll(".desc");
    const toggles = document.querySelectorAll(".toggle");

    descs.forEach((des) => {
      des.classList.add('hide')
    })
    tabs.forEach((tab, i) => {
      let reference = -1;
      tab.addEventListener("click", () => {
        if (reference !== i) {
          descs[i].classList.remove("hide");
          reference = i;
          toggles[i].classList.add("rotate");
          toggles[i].classList.remove("rotateBack");
        }
         else {
          reference = -1
          descs[i].classList.add("hide");
          toggles[i].classList.remove("rotate");
          toggles[i].classList.add("rotateBack");
        }
      });
    });
    })
</script>

<div class:expand={css} class="bg-colBg border-2 box border-dashed border-colBorder rounded-2xl overflow-hidden mt-2 hover:bg-shade">
  <div
    class="tab select-none grid grid-cols-4 items-center transition-colors p-8"
  >
    <div class="col-span-3">
      <a class="block w-fit relative border-b border-colBorder" href={blok.website} target="_blank">
        <h2 class="text-2xl m-0 font-normal">{blok.organization}
        </h2>
        <span class="absolute text-xl bottom-0 -right-5 ">↗</span>
      </a>
      <h3 class="text-lg m-0 font-normal">{blok.title}</h3>
      <p class="m-0">{blok.duration}</p>
    </div>
    <button class:rotate={css} class:rotateBack={css} class="toggle justify-self-end  w-10 h-10 rounded-full border border-colBorder text-3xl col-span-1 text-primary">+</button>
  </div>
  <div class="desc mt-2 px-4" class:hide={false}>
    {@html renderTask}
  </div>
</div>

<style>
  .hide {
    display: none;
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
      transform: rotate(135deg);
    }
  }

  @keyframes rotationBack {
    from {
      transform: rotate(135deg);
    }
    to {
      transform: rotate(0);
    }
  }
</style>


