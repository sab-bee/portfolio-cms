<script>
  import {onMount} from 'svelte'
  export let blok = ''
  export let renderPost = ''

  onMount(() => {
    const projects = document.querySelectorAll(".project");
    const modals = document.querySelectorAll(".modal-wraper");
    const closeBtnsAlt = document.querySelectorAll('.modal-close-opt')

    projects.forEach((project, i) => {
      project.addEventListener("click", (e) => {
        modals.forEach((modal) => {
          modal.classList.add("hide");
        });
        modals[i].classList.remove("hide");

        closeBtnsAlt.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            modals[i].classList.add("hide");
          });
        });
      });
    });

  })
</script>

<div class="project grid justify-center  cursor-pointer p-6 transition-colors select-none bg-colBg"
>
  <div >
    <div class="grid grid-cols-4">
      <h2 class="col-span-3 text-xl font-medium m-0">{blok.name}</h2>
      <button class="col-span-1 justify-self-end text-lg w-8 h-8 border border-colBorder text-primary rounded-full">i</button>
    </div>
    <p class="m-0 mt-2 ">{blok.details}</p>
  </div>

  <div class="modal-wraper hide">
    <div class="modal border border-colBorder">
      <div class="inner select-text cursor-text">
        <img class="lg:h-[200px] h-[150px] w-full object-cover" src={blok.banner.filename} alt="project banner">
        {@html renderPost}
      </div>
      <button class="modal-close-opt text-primary bg-primary bg-opacity-40 px-8 py-2 mt-2 rounded w-full font-medium">close</button>
    </div>
  </div>
</div>

<style>
  .modal-wraper {
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.337);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    left: 0;
    animation: animateWraper 0.2s ease-out;
  }

  @keyframes animateWraper {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal {
    width: 65%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--colorBg);
    border-radius: 15px;
    padding: 2rem;
    animation: animateModal 0.3s ease-out;
    transform-origin: 0% 0%;
  }

  .modal .inner {
    width: 100%;
    height: 80vh;
    overflow-y: auto;
    padding: 0 .5rem;
    margin-bottom: 1rem;
    overscroll-behavior: contain;
  }

  @keyframes animateModal {
    from {
      transform: scale(0.5) translate(-50%, -50%);
    }
    to {
      transform: scale(1) translate(-50%, -50%);
    }
  }

  .hide {
    display: none;
  }

  .inner::-webkit-scrollbar {
    width: 5px;
  }

  .inner::-webkit-scrollbar-thumb {
    background-color: #5f5fa2;
    border-radius: 100px;
  }

  @media only screen and (max-width: 768px) {

    .modal {
      width: 95%;
      padding: 4rem 1rem 1rem 1rem;
      transform: translate(-50%, -53%);
    }

    .modal .inner {
      width: 100%;
      height: 75vh;
      overflow-y: auto;
      overscroll-behavior: contain;
    }

    @keyframes animateModal {
      from {
        transform: scale(0.5) translate(-50%, -53%);
      }
      to {
        transform: scale(1) translate(-50%, -53%);
      }
    }
  }
</style>

