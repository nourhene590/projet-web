document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Validation simple des champs
    if (!name || !email || !checkin || !checkout) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return; // Arrête l'exécution si un champ est vide
    }

    // Afficher un message de confirmation dans la page
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');

    // Réinitialiser le formulaire
    document.getElementById('reservationForm').reset();

    // Optionnel : Afficher les détails de la réservation dans la console
    console.log("Réservation confirmée pour :");
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Date d'arrivée :", checkin);
    console.log("Date de départ :", checkout);
});