document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('https://ucgqqwkpgk.execute-api.eu-north-1.amazonaws.com/', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // You can add further handling here, such as showing a success message to the user
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors, such as showing an error message to the user
    });
});
