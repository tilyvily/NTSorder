document.getElementById('skapaOrder')?.addEventListener('click', function() {
    const orderName = document.getElementById('orderName').value;
    const orderDescription = document.getElementById('orderDescription').value;
    const orderStart = document.getElementById('orderStart').value;
    const orderStartTid = document.getElementById('orderStartTid').value;
    const orderEnd = document.getElementById('orderEnd').value;
    const orderEndTid = document.getElementById('orderEndTid').value;
    const orderOmrade = document.getElementById('orderOmrade').value;
    const orderAddress = document.getElementById('orderAddress').value;

    // Spara till localStorage
    localStorage.setItem('orderName', orderName);
    localStorage.setItem('orderDescription', orderDescription);
    localStorage.setItem('orderStart', orderStart);
    localStorage.setItem('orderStartTid', orderStartTid);
    localStorage.setItem('orderEnd', orderEnd);
    localStorage.setItem('orderEndTid', orderEndTid);
    localStorage.setItem('orderOmrade', orderOmrade);
    localStorage.setItem('orderAddress', orderAddress);

    window.location.href = 'arbetsorder.html';
});

window.addEventListener('DOMContentLoaded', function() {
    // Kolla om vi är på arbetsorder.html
    if (window.location.pathname.endsWith('arbetsorder.html')) {
        document.getElementById('orderNameText').textContent = localStorage.getItem('orderName') || '';
        document.getElementById('orderDescriptionText').textContent = localStorage.getItem('orderDescription') || '';
        document.getElementById('orderOmradeText').textContent = localStorage.getItem('orderOmrade') || '';
        document.getElementById('orderStartDatumText').textContent = localStorage.getItem('orderStart') || '';
        document.getElementById('orderStartTidText').textContent = localStorage.getItem('orderStartTid') || '';
        document.getElementById('orderSlutDatumText').textContent = localStorage.getItem('orderEnd') || '';
        document.getElementById('orderSlutTidText').textContent = localStorage.getItem('orderEndTid') || '';
        document.getElementById('addressText').textContent = localStorage.getItem('orderAddress') || '';
    }
});