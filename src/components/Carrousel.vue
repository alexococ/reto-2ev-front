<script setup lang="ts">
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider'); 
    const slides = document.querySelectorAll('.slider__slide'); 
    const prevButton = document.querySelector('.slider__control--prev'); 
    const nextButton = document.querySelector('.slider__control--next'); 
    const navDots = document.querySelectorAll('.slider__nav-dot'); 
    let currentIndex = 0; 

    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        navDots.forEach(dot => dot.classList.remove('slider__nav-dot--active')); 
        navDots[currentIndex].classList.add('slider__nav-dot--active'); 
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

<template>
  <div class="slider">
    <div class="slider__wrapper">
      <div class="slider__track">
        <div class="slider__slide" id="slide-1">
          <img src="../assets/img/slider1.jpg" alt="Gladiator II" class="slider__image" />
          <div class="slider__content">
            <h2 class="slider__content-title">VENOM 3</h2>
            <a href="#" class="slider__buy-button">¡Compra ya tus entradas!</a>
          </div>
        </div>
        <div class="slider__slide" id="slide-2">
          <img src="../assets/img/slider2.jpg" alt="Movie 2" class="slider__image" />
          <div class="slider__content">
            <h2 class="slider__content-title">ROBOT SALVAJE</h2>
            <a href="#" class="slider__buy-button">¡Compra ya tus entradas!</a>
          </div>
        </div>
        <div class="slider__slide" id="slide-3">
          <img src="../assets/img/slider3.jpg" alt="Movie 3" class="slider__image" />
          <div class="slider__content">
            <h2 class="slider__content-title">RED ONE</h2>
            <a href="#" class="slider__buy-button">¡Compra ya tus entradas!</a>
          </div>
        </div>
      </div>
      <button class="slider__control slider__control--prev">&#8249;</button>
      <button class="slider__control slider__control--next">&#8250;</button>
      <div class="slider__nav">
        <a href="#slide-1" class="slider__nav-dot slider__nav-dot--active"></a>
        <a href="#slide-2" class="slider__nav-dot"></a>
        <a href="#slide-3" class="slider__nav-dot"></a>
      </div>
    </div>
  </div>
</template>

<style>

.slider {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: var(--primary-color);
  border-radius: 10px;
  overflow: hidden;
}

.slider__wrapper {
  position: relative;
  overflow: hidden;
}

.slider__track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider__slide {
  min-width: 100%;
  position: relative;
}

.slider__image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.slider__content {
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: var(--text-color);
}

.slider__content-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
}

.slider__buy-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.slider__buy-button:hover {
  background-color: var(--button-hover-bg);
  color: var(--button-hover-color);
}

.slider__control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: var(--text-color);
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  transition: background-color 0.3s;
}

.slider__control:hover {
  background-color: rgba(255, 255, 255, 0.5);
  color: var(--button-hover-color);
}

.slider__control--prev {
  left: 10px;
}

.slider__control--next {
  right: 10px;
}

.slider__nav {
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
}

.slider__nav-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--text-color);
  opacity: 0.75;
  transition: opacity ease 250ms;
}

.slider__nav-dot--active,
.slider__nav-dot:hover {
  opacity: 1;
}

@media (min-width: 768px) {
  .slider {
    max-width: 80rem;
  }

  .slider__content-title {
    font-size: 2rem;
  }

  .slider__buy-button {
    padding: 15px 30px;
    font-size: 1rem;
  }

  .slider__control {
    font-size: 2.5rem;
    padding: 15px;
  }

  .slider__nav-dot {
    width: 1rem;
    height: 1rem;
  }
}
</style>
