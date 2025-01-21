<script setup lang ="ts">
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider'); 
    const slides = document.querySelectorAll('.slide'); 
    const prevButton = document.querySelector('.slider-control.prev'); 
    const nextButton = document.querySelector('.slider-control.next'); 
    const navDots = document.querySelectorAll('.nav-dot'); 
    let currentIndex = 0; 

    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;


        navDots.forEach(dot => dot.classList.remove('active')); 
        navDots[currentIndex].classList.add('active'); 
    };

 
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1; 
        updateSlider(); 
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1; 
        updateSlider(); 
    });


    navDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault(); 
            currentIndex = index; 
            updateSlider(); 
        });
    });


    setInterval(() => {
        nextButton.click(); 
    }, 5000);
});
</script>
<template >
  <div class="container-slider">
    <div class="slider-wrapper">
      <div class="slider">
        <div class="slide" id="slide-1">
          <img src="../assets/img/slider1.jpg" alt="Gladiator II" />
          <div class="slide-content">
            <h2>VENOM 3</h2>
            <a href="#" class="buy-button">¡Compra ya tus entradas!</a>
          </div>
        </div>
        <div class="slide" id="slide-2">
          <img src="../assets/img/slider2.jpg" alt="Movie 2" />
          <div class="slide-content">
            <h2>ROBOT SALVAJE</h2>
            <a href="#" class="buy-button">¡Compra ya tus entradas!</a>
          </div>
        </div>
        <div class="slide" id="slide-3">
          <img src="../assets/img/slider3.jpg" alt="Movie 3" />
          <div class="slide-content">
            <h2>RED ONE</h2>
            <a href="#" class="buy-button">¡Compra ya tus entradas!</a>
          </div>
        </div>
      </div>
      <button class="slider-control prev">&#8249;</button>
      <button class="slider-control next">&#8250;</button>
      <div class="slider-nav">
        <a href="#slide-1" class="nav-dot active"></a>
        <a href="#slide-2" class="nav-dot"></a>
        <a href="#slide-3" class="nav-dot"></a>
      </div>
    </div>
  </div>
</template>

<style>
.container-slider {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  background-color: #0d1b2a;
  border-radius: 10px;
  overflow: hidden;
}

.slider-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: #fff;
}

.slide-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
}
.buy-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: none;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.buy-button:hover {
  background-color: #fff;
  color: #000;
}

.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  transition: background-color 0.3s;
}

.slider-control:hover {
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
}

.slider-control.prev {
  left: 10px;
}

.slider-control.next {
  right: 10px;
}

.slider-nav {
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.nav-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.75;
  transition: opacity ease 250ms;
}

.nav-dot.active,
.nav-dot:hover {
  opacity: 1;
}
</style>