export const getMessages = async (room) => {
  const data = await fetch(`http://localhost:3001/messages/${room}`);
  return data.json();
};

export const makeMessages = async (message, room) => {
  const data = await fetch(`http://localhost:3001/messages/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message, room),
  });
  if (data) {
    return true;
  }
  return false;
};
