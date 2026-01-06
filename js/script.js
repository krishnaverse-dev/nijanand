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
    const siteUrl = "https://krishnaverse-dev.github.io/nijanand/";

    if (navigator.share) {
        navigator.share({
            title: 'Krishna Pranami',
            text: 'Nijanand Sampraday',
            url: siteUrl
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(siteUrl)
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
