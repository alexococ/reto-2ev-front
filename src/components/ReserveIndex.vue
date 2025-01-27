<template class="reservar">
  <div class="reservar__heading">
    <h1 class="reservar__title">Haz tu reserva</h1>
    <br />
    <div class="reservar__container">
      <section class="reservar__section">
        <div class="reservar__imagen">
          <img src="../assets/img/cine.jpg" alt="" />
        </div>
        <div class="reservar__content">
          <p class="reservar__info">
            ¿Ya has comprado tu asiento?
            <br />
            Pincha en el botón para buscar la película que deseas!
            <br />
          </p>
          <a href="menu.html">
            <button class="reservar__button">Reservar</button>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.reservar__heading {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
}

.reservar__title {
  font-size: 10px;
  color: var(--text-color);
  margin-bottom: 25px;
  position: relative;
}

.reservar__title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  display: block;
  margin: 0 auto;
  background-color: var(--btn-color);
}

.reservar__info {
  font-size: 1.125rem;
  color: var(--dark-color);
  font-weight: 500;
  margin-bottom: 35px;
}

.reservar__container {
  width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
}

.reservar__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.reservar__imagen {
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
  background-color: #fff;
  height: 350px;
  border: 3px solid var(--text-color);
}

.reservar__imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.reservar__content {
  flex: 1;
  margin-top: 0px;
  padding-left: 2%;
  padding-top: 2%;
  justify-content: flex-start;
  text-align: left;
}

.reservar__button {
  background-color: var(--dark-color);
  border: none;
  border-radius: 30px;
  padding: 14px 35px;
  color: var(--text-color);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
}

.reservar__button:hover {
  background-color: var(--btn-color);
  color: #ffffff;
}

/* Mobile-first styles */
@media (min-width: 768px) {
  .reservar__title {
    font-size: 3rem;
  }

  .reservar__info {
    font-size: 1.25rem;
  }

  .reservar__section {
    flex-direction: row;
    justify-content: space-between;
  }

  .reservar__imagen {
    flex: 1;
    margin-right: 2rem;
  }

  .reservar__content {
    flex: 1;
  }

  .reservar__button {
    font-size: 1.5rem;
    padding: 15px 30px;
  }
}

@media (max-width: 768px) {
  .reservar__imagen {
    height: 200px; 
  }

  .reservar__section {
    flex-direction: column; 
    align-items: center;
  }

  .reservar__content {
    text-align: center;
    padding: 0; 
  }

  .reservar__button {
    font-size: 1rem;
    padding: 12px 30px; 
  }
}
</style>
