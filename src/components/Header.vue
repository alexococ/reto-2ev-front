<script setup lang="ts">
</script>
<template>
  <div class="header">
    <a href="" class="header-logo"
      ><img src="@/assets/img/LogoSinFondo.png" class="header-logo-image"
    /></a>
    <ul class="header-navbar">
      <li>
        <a
          href=""
          class="header-nav-item header-nav-item--active"
          id="sectionHead"
          >Inicio</a
        >
      </li>
      <li>
        <a href="" class="header-nav-item" id="sectionHead"
          >Cartelera</a
        >
      </li>
      <li>
        <a href="" class="header-nav-item" id="sectionHead"
          >Contacto</a
        >
      </li>
    </ul>

    <div class="header-main">
      <a href="#" class="header-ticket" id="sectionHead"
        ><i class="ri-coupon-3-fill"></i>Entradas</a
      >
      <a href="#" class="header-user" id="sectionHead"
        ><i class="ri-user-line"></i>Account</a
      >
      <div class="bx bx-menu" id="menu-icon"></div>
    </div>
  </div>
</template>

<style>

.header-logo-image {
  width: 20%;
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
  padding: 10px 12%;
  transition: all 0.5s ease;
  font-size: 1.3rem;
}


.header-logo {
  display: flex;
  align-items: center;
}

.header-logo-icon-image {
  display: none;
}

.header-navbar {
  display: flex;
}

.header-nav-item {
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0 30px;
  transition: all 0.5s ease;
}
.header-nav-item:hover {
  color: var(--main-color);
  font-weight: bold;
}

.header-nav-item--active {
  color: var(--main-color);
}


.header-main {
  display: flex;
  align-items: center;
}
.header-main a {
  margin-right: 25px;
  margin-left: 10px;
  font-size: 1.2rem;
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.5s ease;
}

.header-user {
  display: flex;
  align-items: center;
}
.header-user i {
  color: var(--main-color);
  font-size: 28px;
  margin-right: 7px;
}

.header-main a:hover {
  color: var(--main-color);
  font-weight: bold;
}

#menu-icon {
  font-size: 35px;
  color: var(--text-color);
  cursor: pointer;
  z-index: 10001;
  display: none;
}

.scroll {
  height: 100px;
}

.landing {
  width: 100%;
  z-index: 1;
}


@media (max-width: 1280px) {
  .header {
    padding: 14px 2%;
    transition: 0.2s;
  }
  .header-nav-item {
    padding: 5px 0;
    margin: 0px 20px;
  }
}
@media (max-width: 1090px) {
  #menu-icon {
    display: block;
  }
  .header-navbar {
    position: absolute;
    top: 100%;
    right: -100%;
    width: 270px;
    height: 29vh;
    background: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    transition: all 0.5s ease;
  }
  .header-nav-item {
    display: block;
    margin: 12px 0;
    padding: 0px 25px;
    transition: all 0.5s ease;
    color: var(--bg-color);
  }
  .header-nav-item--active {
    color: var(--bg-color);
  }
  .header-nav-item:hover {
    color: var(--bg-color);
    transform: translateY(5px);
  }
  .header-nav-item:active {
    color: var(--bg-color);
  }
  .header-navbar.open {
    right: 2%;
  }
  .reservar-asientos__imagen img {
    height: 100%;
  }
}
@media (min-width: 0) {
  .reservar-asientos__imagen {
    height: 100%;
  }
}
@media (max-width: 1591) {
  .reservar-asientos__imagen {
    height: 100%;
  }
}
@media (max-width: 950px) {
  .reservar-asientos__imagen {
    display: none;
    display: none;
  }
  .header__logo-image {
    display: none;
  }
  .header__logo-icon-image {
    display: flex;
    width: 30%;
  }
}

</style>