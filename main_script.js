window.addEventListener('message', function(event) {
    const dealData = event.data;
    const apiToken = '09d9b23eca2ac3da7748674c4b09fb18d1ae47e4';
    const url = `https://companydomain.pipedrive.com/api/v1/deals?api_token=${apiToken}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dealData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Sucsess');
        } else {
            console.error('Here is an error:', data.error);
        }
    })
    .catch(error => console.error('Error:', error));
}, false);