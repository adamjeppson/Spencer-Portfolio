
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Show the dropdown when hovering over the parent
    dropdown.addEventListener('mouseenter', () => {
        dropdownContent.classList.add('show');
    });

    // Hide the dropdown when the mouse leaves the parent
    dropdown.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const videoWrapper = document.querySelector('.video-wrapper');
    const videoContainer = document.querySelector('.video-page-container');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
    function calculatePerfectSize() {
        const viewportRatio = window.innerWidth / window.innerHeight;
        const navHeight = nav ? nav.offsetHeight : 0;
        const footerHeight = footer ? footer.offsetHeight : 0;
        const availableHeight = window.innerHeight - navHeight - footerHeight;
        
        // Determine if we're width-limited or height-limited
        if (viewportRatio > 16/9) {
            // Wide screen - height is limiting factor
            const videoHeight = availableHeight * 0.95; // 5% margin
            const videoWidth = videoHeight * 16/9;
            videoWrapper.style.width = `${videoWidth}px`;
            videoWrapper.style.height = `${videoHeight}px`;
            videoWrapper.style.paddingBottom = '0';
        } else {
            // Narrow screen - width is limiting factor
            const videoWidth = window.innerWidth * 0.95; // 5% margin
            const videoHeight = videoWidth * 9/16;
            videoWrapper.style.width = `${videoWidth}px`;
            videoWrapper.style.height = `${videoHeight}px`;
            videoWrapper.style.paddingBottom = '0';
        }
        
        // Center the video wrapper
        videoWrapper.style.margin = '0 auto';
    }
    
    // Initial calculation
    calculatePerfectSize();
    
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(calculatePerfectSize, 100);
    });
    
    // Fallback for CSS-only
    videoWrapper.classList.add('js-enabled');
});