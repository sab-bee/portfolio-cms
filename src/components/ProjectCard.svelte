<script>
  import {onMount} from 'svelte'
  export let blok = ''
  export let renderPost = ''

  onMount(() => {
    const projects = document.querySelectorAll(".project");
    const modals = document.querySelectorAll(".modal-wraper");
    const closeBtns = document.querySelectorAll(".modal-close");

    projects.forEach((project, i) => {
      project.addEventListener("click", (e) => {
        console.log("hello world");
        modals.forEach((modal) => {
          modal.classList.add("hide");
        });
        modals[i].classList.remove("hide");
        closeBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            modals[i].classList.add("hide");
          });
        });
      });
    });

  })
</script>

<div class="project grid justify-center  cursor-pointer hover:bg-shade p-6 transition-colors select-none"
>
  <!-- <img
    class="h-[200px] w-[300px] object-cover rounded-xl mx-auto"
    src={blok?.banner?.filename}
    alt=""
  /> -->
  <div>
    <h2 class="text-xl font-medium m-0">{blok.name}</h2>
    <p class="m-0 mt-2">{blok.details}</p>
  </div>

  <div class="modal-wraper hide">
    <div class="modal">
      <div class="inner">
        {@html renderPost}
      </div>
      <button class="modal-close text-2xl">+</button>
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
    background-color: var(--colorPrimary);
    border: 1px solid black;
    border-radius: 15px;
    padding: 5rem 2rem 2rem 2rem;
    animation: animateModal 0.3s ease-out;
    transform-origin: 0% 0%;
  }

  .modal .inner {
    width: 100%;
    height: 80vh;
    overflow-y: auto;
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

  .modal button {
    transform: rotate(45deg);
    background: rgb(0, 0, 0);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .inner::-webkit-scrollbar {
    width: 6px;
  }

  .inner::-webkit-scrollbar-thumb {
    background-color: rgb(199, 180, 164);
    border-radius: 100px;
  }

  @media only screen and (max-width: 768px) {
    .modal {
      width: 90%;
    }
  }
</style>

