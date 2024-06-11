// Parallax scrolling effect
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.background');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Music playback
let isMusicPlaying = false;
const backgroundMusic = document.getElementById('backgroundMusic');

function toggleMusic() {
  if (isMusicPlaying) {
    backgroundMusic.pause();
    isMusicPlaying = false;
  } else {
    backgroundMusic.play();
    isMusicPlaying = true;
  }
}
