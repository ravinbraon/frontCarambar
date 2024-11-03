const doc = document;
const myButton = doc.getElementById("btn");
const myParagraph = doc.getElementById("txtJoke");

myButton.addEventListener("click", function () {
    this.classList.add("zoom");
    myParagraph.textContent = "Chargement de la blague...";

    setTimeout(() => {
        this.classList.remove("zoom");
    }, 300);
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