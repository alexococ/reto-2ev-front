<template class="container peliculas">
    <h1 class="pelicula-title">Proximos Estrenos</h1>

    <div class="container-peliculas">
      <div class="pelicula">
        <div class="container-img">
          <img src="../assets/img/redOne.jpg" alt="RedOne" class="img-item" />
        </div>
        <div class="content-card-pelicula">
          <h3 class="content-card-pelicula-title">Red One</h3>
          <a href="menu.html"
            ><button class="pelicula-button content-card-pelicula-button">
              Ver mas
            </button></a
          >
        </div>
      </div>

      <div class="pelicula">
        <div class="container-img">
          <img src="../assets/img/Venom.jpg" alt="Venom" class="img-item" />
        </div>
        <div class="content-card-pelicula">
          <h3 class="content-card-pelicula-title">Venom 3</h3>
          <a href="menu.html"
            ><button class="pelicula-button content-card-pelicula-button">
              Ver mas
            </button></a
          >
        </div>
      </div>

      <div class="pelicula">
        <div class="container-img">
          <img src="../assets/img/terrifier3.jpg" alt="Terrifier" class="img-item" />
        </div>
        <div class="content-card-pelicula">
          <h3 class="content-card-pelicula-title">Terrifier 3</h3>
          <a href="menu.html"
            ><button class="pelicula-button content-card-pelicula-button">
              Ver mas
            </button></a
          >
        </div>
      </div>
    </div>
</template>

<style>
.container-peliculas {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
}

.pelicula-title {
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  color: #fff;
  margin-bottom: 55px;
}

.pelicula {
  background-color: var(--text-color);
  border-radius: 0.5rem;
  width: 20%;
}

.container-img {
  position: relative;
}
.container-img img {
  width: 100%;
}

.content-card-pelicula {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, min-content);
  row-gap: 1rem;
}

.content-card-pelicula-title {
  grid-row: 1/1;
  grid-column: 1/-1;
  font-weight: 400;
  font-size: 1.6rem;
}

.pelicula-button,
.content-card-pelicula-button {
  background-color: var(--dark-color);
  border: none;
  border-radius: 30px;
  padding: 14px 35px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  grid-row: 1/1;
  grid-column: 1/-1;
}

.pelicula-button:hover,
.content-card-pelicula-button:hover {
  background-color: var(--btn-color);
  color: #ffffff;
}
</style>