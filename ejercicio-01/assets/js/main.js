const countVotes = (votes) => {
    let result = [];
    votes.forEach(vote => {
      result[vote.candidate] = (result[vote.candidate] || 0) + 1;
    });
    return result;
}

const showResults = (result) => {
    alert("Resultados de la votación ->");
    for (let candidate in result) {
      alert(`${candidate}: ${result[candidate]} votos`);
    }
}

const main = () => {
    console.log("Hola");
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    const result = countVotes(votes);
    showResults(result);
}

main();

// Hacer ejs 7, 8 y 4
