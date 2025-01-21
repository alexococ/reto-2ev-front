<template class="movies">
  <h1 class="movies__title">Próximos Estrenos</h1>

  <div class="movies__list">
    <div class="movie">
      <div class="movie__image-container">
        <img src="../assets/img/redOne.jpg" alt="RedOne" class="movie__image" />
      </div>
      <div class="movie__content">
        <h3 class="movie__content-title">Red One</h3>
        <a href="menu.html" class="movie__content-link">
          <button class="movie__button">Ver más</button>
        </a>
      </div>
    </div>

    <div class="movie">
      <div class="movie__image-container">
        <img src="../assets/img/Venom.jpg" alt="Venom" class="movie__image" />
      </div>
      <div class="movie__content">
        <h3 class="movie__content-title">Venom 3</h3>
        <a href="menu.html" class="movie__content-link">
          <button class="movie__button">Ver más</button>
        </a>
      </div>
    </div>

    <div class="movie">
      <div class="movie__image-container">
        <img src="../assets/img/terrifier3.jpg" alt="Terrifier" class="movie__image" />
      </div>
      <div class="movie__content">
        <h3 class="movie__content-title">Terrifier 3</h3>
        <a href="menu.html" class="movie__content-link">
          <button class="movie__button">Ver más</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --text-color: #333;
  --dark-color: #444;
  --btn-color: #555;
}

.movies {
  padding: 1rem;
}

.movies__title {
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.movies__list {
  display: grid;
  gap: 1.5rem;
}

.movie {
  background-color: var(--text-color);
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
}

.movie__image-container {
  position: relative;
}

.movie__image {
  width: 100%;
  display: block;
}

.movie__content {
  text-align: center;
  padding: 0.8rem;
}

.movie__content-title {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.movie__button {
  background-color: var(--dark-color);
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

.movie__button:hover {
  background-color: var(--btn-color);
  color: #ffffff;
}

@media (min-width: 768px) {
  .movies {
    padding: 2rem 4rem;
  }

  .movies__title {
    font-size: 3rem;
    margin-bottom: 55px;
  }

  .movies__list {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0 2rem;
  }

  .movie {
    width: 20%;
  }

  .movie__content {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 1rem;
  }

  .movie__content-title {
    grid-row: 1/1;
    grid-column: 1/-1;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .movie__button {
    grid-row: 1/1;
    grid-column: 1/-1;
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
  }
}
</style>
