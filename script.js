// Parallax scrolling effect
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.background');
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Automatically play background music
document.addEventListener('DOMContentLoaded', function() {
  const backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.play().catch((error) => {
    console.error('Music autoplay was prevented:', error);
  });

  const backgroundImage = new Image();
  backgroundImage.src = 'https://github.com/DamanAhuja/Invite/assets/142963733/a01543d4-c770-4774-9fb1-bd5b52f20264';
  backgroundImage.onload = function() {
    document.querySelector('.background').classList.add('loaded');
  };

  // Heartfelt notes for the timeline
  const notes = [
    "Congratulations on your 25th wedding anniversary!",
    "Wishing you both a lifetime of happiness and love.",
    "Your journey together is truly inspirational.",
    "May your love continue to grow stronger every day.",
    "Cheers to 25 years of togetherness and many more to come!",
    "Your love story is a testament to true love and commitment.",
    "Here's to many more beautiful years together."
  ];

  const timeline = document.getElementById('timeline');

  // Add notes to the timeline
  notes.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('timeline-item');
    noteElement.textContent = note;
    timeline.appendChild(noteElement);
  });
});
