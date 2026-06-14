document.getElementById('save-vcard').addEventListener('click', function() {
    // 1. Format the official vCard string
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:KalashDevv
TITLE:Full Stack Developer & Hair Stylist
EMAIL:your-real-email@example.com
TEL:+2340000000000
URL:https://kalashdevv.github.io/kalash-studio/
END:VCARD`;

    // 2. Turn the string into a raw data file (Blob)
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    // 3. Create a temporary invisible link to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'KalashDevv_Contact.vcf';
    
    // 4. Force the click and clean up
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
});