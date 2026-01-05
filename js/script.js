function showHome() {
    // Agar index.html same folder me hai
    window.location.href = 'index.html';

    // Agar top-level domain pe redirect karna ho
    // window.location.href = '/';
}

function toggleMenu() {
    const overlay = document.getElementById('navOverlay');
    overlay.classList.toggle('active'); // overlay को show/hide
}

function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'Krishna Pranami',
                text: 'Nijanand Sampraday',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("Link copied to clipboard!"))
                .catch(() => alert("Failed to copy link."));
        }
    }

function sendEmail() {
    const subject = encodeURIComponent("विषय: लिखें");
    const body = encodeURIComponent("प्रणाम, सुंदरसाथ जी");
    const email = "bramhaatma@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
