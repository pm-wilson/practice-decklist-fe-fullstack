export const getDecks = async() => {
  const res = await fetch('http://localhost:7890/decks');
  const decks = await res.json();

  return decks;
};

export async function getDeckDetails(id) {
  const res = await fetch(`http://localhost:7890/decks/${id}`);
  const details = await res.json();

  return details;
}

export async function updateDeckDetails(id, data) {
  const res = await fetch(`http://localhost:7890/decks/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  const newDeck = await res.json();

  return newDeck;
}

export async function addNewDeck(data) {
  const res = await fetch('http://localhost:7890/decks/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  const newDeck = await res.json();

  return newDeck;
}
