// =====================================================
// DIGITAL LOVE LETTER - INTERACTIVE SCRIPT
// =====================================================

// ===== DOM Elements =====
const noBtnElement = document.getElementById('no-btn');
const yesBtnElement = document.getElementById('yes-btn');
const bujukanElement = document.getElementById('bujukan');
const navbar = document.getElementById('navbar');
const landingSection = document.getElementById('landing');

// ===== State Management =====
let noButtonClicked = 0;
const noMessages = [
  'Yakin tidak? 🥺',
  'Ayolah... jangan begini... 😢',
  'Lihat aja dulu hadiahnya, please? 🥺💔',
  'Okay, aku bersikeras... Yes Please itu pilihan terbaik! 💕'
];

// ===== Event Listeners =====

// Handle "No Thanks" Button
noBtnElement.addEventListener('click', () => {
  noButtonClicked++;
  
  // Show bujukan message
  bujukanElement.classList.remove('hidden');
  
  // Update message
  if (noButtonClicked <= noMessages.length) {
    const messageIndex = Math.min(noButtonClicked - 1, noMessages.length - 1);
    bujukanElement.innerHTML = `
      <p class="text-pink-700 font-bold text-lg mb-3">${noMessages[messageIndex]}</p>
      <div class="flex justify-center gap-2">
        <span class="text-2xl animate-bounce">💕</span>
        <span class="text-2xl animate-bounce" style="animation-delay: 0.2s;">💕</span>
        <span class="text-2xl animate-bounce" style="animation-delay: 0.4s;">💕</span>
      </div>
    `;
  }
  
  // Disable "No Thanks" button after certain clicks
  if (noButtonClicked >= 3) {
    noBtnElement.disabled = true;
    noBtnElement.style.opacity = '0.5';
    noBtnElement.style.cursor = 'not-allowed';
  }
  
  // Disable and focus "Yes Please" button
  yesBtnElement.focus();
  yesBtnElement.classList.add('animate-bounce');
});

// Handle "Yes Please" Button
yesBtnElement.addEventListener('click', () => {
  // Hide landing page with animation
  landingSection.style.animation = 'fadeOut 0.8s ease forwards';
  
  setTimeout(() => {
    landingSection.classList.add('hidden');
    landingSection.style.animation = 'fadeIn 0.8s ease forwards';
    
    // Show navbar
    navbar.classList.remove('hidden');
    
    // Show gallery
    showSection('gallery');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 600);
});

// ===== Navigation Functions =====

/**
 * Show specific section and hide others
 * @param {string} sectionId - ID of section to show
 */
function goToSection(sectionId) {
  // Hide all sections
  const allSections = document.querySelectorAll('section');
  allSections.forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show specific section
  showSection(sectionId);
  
  // Scroll to top with smooth behavior
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Show section without hiding others (internal use)
 * @param {string} sectionId - ID of section to show
 */
function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.remove('hidden');
  }
}

// ===== Animations =====

/**
 * Add fade-out animation
 */
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(styleSheet);

// ===== Interactive Features =====

/**
 * Add click animation to polaroid cards
 */
document.addEventListener('DOMContentLoaded', () => {
  const polaroidCards = document.querySelectorAll('.polaroid-card');
  
  polaroidCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Add click event
    card.addEventListener('click', function() {
      this.style.transform = 'scale(1.1) rotate(0deg)';
      
      setTimeout(() => {
        this.style.transform = '';
      }, 500);
    });
  });
});

/**
 * Play button interaction
 */
const playBtn = document.getElementById('play-btn');
if (playBtn) {
  playBtn.addEventListener('click', function() {
    this.textContent = this.textContent === '▶️' ? '⏸️' : '▶️';
    this.classList.toggle('animate-pulse');
  });
}

// ===== Smooth Scroll for Links =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Scroll Detection for Navbar =====

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Show navbar when scrolling down
  if (scrollTop > 300 && !navbar.classList.contains('hidden')) {
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== Preload Animation =====

window.addEventListener('load', () => {
  // Add animation classes to elements on page load
  const elementsToAnimate = document.querySelectorAll('[class*="animate-"]');
  elementsToAnimate.forEach(el => {
    el.style.opacity = '1';
  });
});

// ===== Keyboard Navigation =====

document.addEventListener('keydown', (e) => {
  // Press 'Y' to go to Yes
  if (e.key === 'y' || e.key === 'Y') {
    yesBtnElement.click();
  }
  
  // Press 'N' to go to No
  if (e.key === 'n' || e.key === 'N') {
    noBtnElement.click();
  }
  
  // Press 'Escape' to go back to landing
  if (e.key === 'Escape') {
    goToSection('landing');
    navbar.classList.add('hidden');
  }
});

// ===== Love Message Easter Egg =====

let clickCount = 0;
const heartEmoji = document.querySelector('h1');

if (heartEmoji) {
  heartEmoji.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 5) {
      showEasterEgg();
      clickCount = 0;
    }
  });
}

function showEasterEgg() {
  const easterEgg = document.createElement('div');
  easterEgg.innerHTML = `
    <div style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      z-index: 9999;
      text-align: center;
      max-width: 400px;
      animation: popIn 0.5s ease;
    ">
      <div style="font-size: 4rem; margin-bottom: 1rem;">💖</div>
      <h2 style="color: #dc2626; font-size: 1.5rem; margin-bottom: 1rem;">Easter Egg!</h2>
      <p style="color: #666; font-size: 1rem; margin-bottom: 1rem;">Kamu ketahuan klik-klik heading aku! 😄</p>
      <p style="color: #ec4899; font-weight: bold;">Terima kasih sudah mengeksplorasi website cinta aku 💕</p>
    </div>
  `;
  
  document.body.appendChild(easterEgg);
  
  setTimeout(() => {
    easterEgg.remove();
  }, 3000);
}

// Add animation for easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes popIn {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// ===== Console Easter Egg =====

console.log('%c💌 DIGITAL LOVE LETTER 💌', 'font-size: 24px; color: #dc2626; font-weight: bold;');
console.log('%cWebsite ini dibuat dengan penuh cinta dan perhatian...', 'font-size: 14px; color: #ec4899;');
console.log('%cSemoga orang yang kamu cintai tersenyum membacanya! 💕', 'font-size: 14px; color: #dc2626; font-style: italic;');
