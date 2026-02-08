// Digital Love Letter - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const landingPage = document.getElementById('landing-page');
    const mainNav = document.getElementById('main-nav');
    const mainContent = document.getElementById('main-content');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const reallyYesBtn = document.getElementById('really-yes-btn');
    const persuasionText = document.getElementById('persuasion-text');
    const backToTopBtn = document.getElementById('back-to-top');
    const printLetterBtn = document.getElementById('print-letter');
    
    // Music Player Elements
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    
    // Initialize Bootstrap Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Landing Page Interaction
    let noClickCount = 0;
    const persuasiveMessages = [
        "Are you sure? I worked really hard on this...",
        "Please? It would mean so much to me!",
        "Just a quick look, I promise!",
        "You're breaking my digital heart 💔",
        "Okay, last chance! Will you please see your gift?"
    ];
    
    noBtn.addEventListener('click', function() {
        noClickCount++;
        
        if (noClickCount <= persuasiveMessages.length) {
            persuasionText.querySelector('p').textContent = persuasiveMessages[noClickCount - 1];
            persuasionText.classList.remove('d-none');
            
            // Make the "No" button move randomly
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            // Make button smaller each time
            const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
            noBtn.style.fontSize = `${currentSize * 0.9}px`;
            
            // On the last message, hide the no button
            if (noClickCount === persuasiveMessages.length) {
                setTimeout(() => {
                    noBtn.style.display = 'none';
                }, 300);
            }
        }
    });
    
    // Yes button functionality
    yesBtn.addEventListener('click', showMainContent);
    reallyYesBtn.addEventListener('click', showMainContent);
    
    function showMainContent() {
        // Add fade-out animation to landing page
        landingPage.style.opacity = '0';
        
        // After fade out, hide landing page and show main content
        setTimeout(() => {
            landingPage.classList.remove('active-page');
            landingPage.style.display = 'none';
            
            // Show main navigation and content
            mainNav.classList.remove('d-none');
            mainContent.classList.remove('d-none');
            
            // Add fade-in animation
            mainContent.style.opacity = '0';
            mainNav.style.opacity = '0';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainNav.style.opacity = '1';
                mainContent.style.transition = 'opacity 1s ease';
                mainNav.style.transition = 'opacity 1s ease';
            }, 100);
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Play background music softly
            playBackgroundMusic();
        }, 800);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to section
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Music Player Functionality
    function playBackgroundMusic() {
        // This would control background music
        // For now, we'll just show a notification
        console.log("Background music would play now");
    }
    
    // Simulate music player functionality
    let isPlaying = false;
    let currentTime = 0;
    let totalDuration = 270; // 4:30 in seconds
    
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;
        
        const icon = playBtn.querySelector('i');
        if (isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            
            // Start updating progress bar
            simulatePlayback();
            
            // Show secret message after 2:15 (135 seconds)
            setTimeout(() => {
                document.getElementById('secret-text').innerHTML = 
                    '<strong>Secret message at 2:15:</strong> "Every note in this song reminds me of you. I love you more than words can express."';
            }, 135000); // 2:15 in milliseconds
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
    
    function simulatePlayback() {
        if (!isPlaying) return;
        
        if (currentTime < totalDuration) {
            currentTime += 1;
            
            // Update progress bar
            const progressPercent = (currentTime / totalDuration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            
            // Update time display
            const currentMinutes = Math.floor(currentTime / 60);
            const currentSeconds = Math.floor(currentTime % 60);
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
            
            // Continue updating
            setTimeout(simulatePlayback, 1000);
        } else {
            // Song ended
            isPlaying = false;
            const icon = playBtn.querySelector('i');
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            currentTime = 0;
            progressBar.style.width = '0%';
            currentTimeEl.textContent = '0:00';
        }
    }
    
    // Set total duration display
    const totalMinutes = Math.floor(totalDuration / 60);
    const totalSeconds = totalDuration % 60;
    durationEl.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        console.log(`Volume set to ${this.value}%`);
    });
    
    // Previous and Next buttons
    prevBtn.addEventListener('click', function() {
        console.log("Previous song");
        // Reset progress for demo
        currentTime = 0;
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    });
    
    nextBtn.addEventListener('click', function() {
        console.log("Next song");
        // Reset progress for demo
        currentTime = 0;
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    });
    
    // Print letter functionality
    printLetterBtn.addEventListener('click', function() {
        const printContent = document.querySelector('.love-letter').innerHTML;
        const originalContent = document.body.innerHTML;
        
        document.body.innerHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Love Letter - Printed Version</title>
                <style>
                    body { font-family: 'Georgia', serif; padding: 40px; }
                    .dancing-font { font-family: 'Dancing Script', cursive; }
                    .text-dark-red { color: #c44569; }
                    .text-center { text-align: center; }
                    .letter-paragraph { margin-bottom: 20px; line-height: 1.8; }
                    .highlighted-quote { 
                        background-color: #f9f9f9; 
                        padding: 20px; 
                        margin: 30px 0; 
                        border-left: 4px solid #ff6b9d;
                        font-style: italic;
                    }
                    @media print {
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                ${printContent}
                <div class="no-print" style="margin-top: 50px; text-align: center;">
                    <button onclick="window.close()" style="padding: 10px 20px; background: #ff6b9d; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Close Print View
                    </button>
                </div>
            </body>
            </html>
        `;
        
        window.print();
        
        // Restore original content
        document.body.innerHTML = originalContent;
        
        // Re-initialize event listeners
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Re-attach the print button event listener
        document.getElementById('print-letter').addEventListener('click', printLetterBtn.onclick);
    });
    
    // Photo hover effects
    document.querySelectorAll('.photo-frame').forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Flower click effects
    document.querySelectorAll('.flower').forEach(flower => {
        flower.addEventListener('click', function() {
            const tooltip = bootstrap.Tooltip.getInstance(this);
            if (tooltip) {
                tooltip.show();
                
                // Add a little animation
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
    
    // Initialize the page
    console.log("Digital Love Letter loaded successfully!");
    console.log("Made with ❤️ for someone special");
});
