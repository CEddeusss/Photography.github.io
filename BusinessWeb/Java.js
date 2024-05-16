document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Thank you for your feedback!');
    document.getElementById('feedback-form').reset(); 
});