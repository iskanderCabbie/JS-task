document.getElementById('dealForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dealData = {
        title: document.getElementById('title').value,
        person_id: document.getElementById('contact_person').value,
        value: document.getElementById('value').value,
        currency: document.getElementById('currency').value,
        expected_close_date: document.getElementById('expected_close_date').value
    };
    parent.postMessage(dealData, '*');
});
