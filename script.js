// Photo Upload Functionality
document.getElementById('photoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('polaroidImage').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Smooth scrolling for links
document.querySelectorAll('a[href^="letters/"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add a slight delay for visual feedback
        const href = this.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 100);
    });
});

// Add some page load animations
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});
