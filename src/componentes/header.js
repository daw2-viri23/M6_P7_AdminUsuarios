

export const header = {
    template: `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup d-flex justify-content-center">
        <div class="navbar-nav d-flex justify-content-center">
          <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
          <a class="nav-link" href="#" id="about">about</a>
          <a class="nav-link" href="#" id="admin"> Admin</a>
        </div>
      </div>
    </div>
  </nav>`,
    script: ()=>{
        document.querySelector('header').addEventListener('click', (event)=>{
            console.log('esto es el header');
        });
    }
}