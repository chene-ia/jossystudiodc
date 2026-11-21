// Generador dinámico del código QR vinculado a la dirección web pública definitiva
document.addEventListener("DOMContentLoaded", function() {
    const qrContainer = document.getElementById('qrcode');
    
    // URL pública definitiva de tu negocio (Enlace Puente para tu letrero luminoso)
    const siteUrl = "https://jossystudiodc.com"; 

    if (qrContainer) {
        new QRCode(qrContainer, {
            text: siteUrl,
            width: 150,
            height: 150,
            colorDark: "#0A0A0A",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});

// Función para descargar el QR en PNG o SVG
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
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="#ffffff"/><image href="${imageUrl}" width="320" height="320" x="40" y="40"/></svg>`;
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
