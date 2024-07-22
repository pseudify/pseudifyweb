document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'r') {
        document.getElementById('easterEgg').style.display = 'block';
    }
});

document.getElementById('easterEggInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (this.value.toLowerCase() === 'timmi') {
            document.getElementById('easterEggAudio').play();
            document.getElementById('image').src = '/assets/timmy.jpg';
            document.getElementById('name').textContent = 'Timmi';
            document.getElementById('title').textContent = 'Timmothy Timmons';
            document.getElementById('description').textContent = 'This is Timmi, the coolest car in town.';
            
            this.value = ''; 
            document.getElementById('easterEgg').style.display = 'none'; 
            this.value = ''; 
        }
    }
});
