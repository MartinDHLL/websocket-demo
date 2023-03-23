export const getMessages = async (room) => {
  const res = await fetch(`http://localhost:3001/messages/${room}`);
  if (res.status === 200) return res.json();
};

export const makeMessages = async (message) => {
  const res = await fetch(`http://localhost:3001/messages/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  if (res.status === 201) {
    return true;
  }
  return false;
};
