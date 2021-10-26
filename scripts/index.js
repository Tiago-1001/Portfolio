const goToTop = () => window.scrollTo(0, 0);

function scrollListener() {
  const goToTop = document.querySelector('.goToTop');
  if(window.scrollY > 300) {
    goToTop.style.opacity = '1';
    goToTop.style.transform = 'translateY(0)';
  } else {
    goToTop.style.opacity = '0';
    goToTop.style.transform = 'translateY(200%)';
  }
}

window.addEventListener('scroll', scrollListener);