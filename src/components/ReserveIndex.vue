<template class="reservar">
    <div class="reservar-heading">
      <h1 class="reservar-title">Haz tu reserva</h1>
      <hr class="reservar-hr" />
      <br />
      <div class="reservar-container">
        <section class="reservar-section">
          <div class="reservar-imagen">
            <img src="../assets/img/cine.jpg" alt="" />
          </div>
          <div class="reservar-content">
            <p class="reservar-info">
              ¿Ya has comprado tu asiento?
              <br />
              Pincha en el botón para buscar la pelicula que deseas!
              <br />
            </p>
            <a href="menu.html"
              ><button class="reservar-button">Reservar</button></a
            >
          </div>
        </section>
      </div>
    </div>
</template>




<style>
.reservar-heading {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
}

.reservar-title {
  font-size: 50px;
  color: #fff;
  margin-bottom: 25px;
  position: relative;
}
.reservar-title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  display: block;
  margin: 0 auto;
  background-color: var(--btn-color);
}

.reservar-info {
  font-size: 18px;
  color: var(--dark-color);
  font-weight: 500;
  margin-bottom: 35px;
}

.reservar-container {
  width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
}

.reservar-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.reservar-imagen {
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
  background-color: #fff;
  height: 350px;
  border: 3px solid var(--text-color);
}
.reservar-imagen img {
  width: 100%;
  height: 100%;
}

.reservar-content {
  flex: 1;
  margin-top: 0px;
  padding-left: 2%;
  padding-top: 2%;
  justify-content: flex-start;
  text-align: left;
}

.reservar-button {
  background-color: #333;
  border: none;
  border-radius: 30px;
  padding: 14px 35px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
}
.reservar-button:hover {
  background-color: var(--btn-color);
  color: #ffffff;
}
.reservar-button:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}
</style>