const doc = document;
const myButton = doc.getElementById("btn");
const myParagraph = doc.getElementById("txtJoke");



myButton.addEventListener("click", function () {
    function randomJoke() {
        return fetch('https://apicarambar-vcrp.onrender.com/blagues/random/')
        .then((httpResponse) => {
            console.log('fetch effectué');
            if (!httpResponse.ok) {
                throw new Error("Erreur lors de la récupération de la blague");
            }
            return httpResponse.json();
        });
    }

    randomJoke()
    .then((data) => {
        myParagraph.textContent = data.joke
    })
    .catch((error) => {
        console.error("Erreur :", error);
        myParagraph.textContent = "Erreur lors de la récupération de la blague.";
    });
})