// Funciones para abrir y cerrar el selector de Staff / WhatsApp
function openStaffModal() {
    const staffModal = document.getElementById('staffModal');
    if (staffModal) {
        staffModal.classList.remove('hidden');
        staffModal.classList.add('flex');
    }
}

function closeStaffModal() {
    const staffModal = document.getElementById('staffModal');
    if (staffModal) {
        staffModal.classList.remove('flex');
        staffModal.classList.add('hidden');
    }
}

// Función para cerrar el anuncio de inicio (Pop-up de horarios)
function closeModal() {
    const modal = document.getElementById('promoModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Generador dinámico del código QR y control de la página
document.addEventListener("DOMContentLoaded", function() {
    const qrContainer = document.getElementById('qrcode');
    const siteUrl = window.location.href; 

    if (qrContainer) {
        new QRCode(qrContainer, {
            text: siteUrl,
            width: 160,
            height: 160,
            colorDark: "#120D0F",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});

// Función para descargar el QR en alta resolución PNG o SVG
function downloadQR(format) {
    const qrContainer = document.getElementById('qrcode');
    const img = qrContainer.querySelector('img');
    const canvas = qrContainer.querySelector('canvas');

    if (!img && !canvas) {
        alert('Código QR no disponible.');
        return;
    }

    let imageUrl = canvas ? canvas.toDataURL("image/png") : img.src;

    if (format === 'png') {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'QR-JossyStudioDC.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (format === 'svg') {
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><rect width="100%" height="100%" fill="#ffffff"/><image href="${imageUrl}" width="420" height="420" x="40" y="40"/></svg>`;
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'QR-JossyStudioDC.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}
