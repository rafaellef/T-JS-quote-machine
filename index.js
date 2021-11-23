const QUOTES = [
    {
        quote: "Um nome, eis tudo quanto nos fica de um ser, não só depois de morto, mas em vida",
        author: "Marcel Proust"
    },
    {
        quote: "Talvez a morte tenha mais segredos para nos revelar que a vida.",
        author: "Gustave Flaubert"
    },
    {
        quote: "Pelos mesmos caminhos não se chega sempre aos mesmos fins.",
        author: "Jean-Jacques Rousseau"
    },
    {
        quote: "É tão natural destruir o que não se pode possuir, negar o que não se compreende, insultar o que se inveja.",
        author: "Honoré de Balzac"
    },
    {
        quote: "O segredo da liberdade é de educar os homens, assim como o da tirania é conservá-los na ignorância.",
        author: "Maximilien de Robespierre"
    }

]

window.onload = init;

function init() {
    generateQuote();
}
    

function generateQuote() {
    let quoteSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTES[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="

    let quoteApi = randomQuoteData.quote.replace(/ /g, "%20");
    let authorApi = randomQuoteData.author.replace(/ /g, "%20");

    twitterLink += quoteApi
    twitterLink += " " + authorApi

    document.getElementById('tweet-quote').href = twitterLink;
    document.getElementById('text').innerText = randomQuoteData.quote;
    document.getElementById('author').innerText = randomQuoteData.author;
}