<script setup lang="ts">
</script>

<template>
  <div class="header">
    <a href="" class="header__logo">
      <img src="@/assets/img/LogoSinFondo.png" class="header__logo-image" />
    </a>
    <ul class="header__navbar">
      <li>
        <a href="" class="header__nav-item header__nav-item--active">Inicio</a>
      </li>
      <li>
        <a href="" class="header__nav-item">Cartelera</a>
      </li>
      <li>
        <a href="" class="header__nav-item">Contacto</a>
      </li>
    </ul>

    <div class="header__main">
      <a href="#" class="header__ticket">
        <i class="ri-coupon-3-fill"></i>Entradas
      </a>
      <a href="#" class="header__user">
        <i class="ri-user-line"></i>Account
      </a>
      <div class="header__menu-icon" id="menu-icon"></div>
    </div>
  </div>
</template>

<style>
:root {
  --text-color: #fff;
  --bg-color: #000;
  --main-color: #1e90ff;
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-color);
  padding: 1rem 5%;
  transition: all 0.5s ease;
  font-size: 1.3rem;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-image {
  width: 20%;
}

.header__navbar {
  display: flex;
  list-style: none;
}

.header__nav-item {
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0 30px;
  transition: all 0.5s ease;
}

.header__nav-item:hover {
  color: var(--main-color);
  font-weight: bold;
}

.header__nav-item--active {
  color: var(--main-color);
}

.header__main {
  display: flex;
  align-items: center;
}

.header__ticket,
.header__user {
  margin-right: 25px;
  margin-left: 10px;
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.5s ease;
}

.header__user i {
  color: var(--main-color);
  font-size: 28px;
  margin-right: 7px;
}

.header__main a:hover {
  color: var(--main-color);
  font-weight: bold;
}

.header__menu-icon {
  font-size: 35px;
  color: var(--text-color);
  cursor: pointer;
  z-index: 10001;
  display: none;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem 2%;
    font-size: 1.1rem;
  }

  .header__navbar {
    display: none;
    position: absolute;
    top: 100%;
    right: -100%;
    width: 100%;
    height: 30vh;
    background: var(--text-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.5s ease;
  }

  .header__nav-item {
    margin: 12px 0;
    padding: 0px 25px;
    color: var(--bg-color);
  }

  .header__nav-item--active {
    color: var(--bg-color);
  }

  .header__nav-item:hover {
    color: var(--bg-color);
    transform: translateY(5px);
  }

  .header__navbar.open {
    right: 0;
  }

  .header__menu-icon {
    display: block;
  }
}
</style>
