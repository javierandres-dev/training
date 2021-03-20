// Use json-server as database
const endpoint = "http://localhost:5000/clientes";
// Create a new client in database
export const newClient = async (client) => {
  try {
    await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.warn(error);
  }
};
// Read all clients from database
export const getClients = async () => {
  try {
    const resp = await fetch(endpoint);
    const clients = await resp.json();
    return clients;
  } catch (error) {
    console.warn(error);
  }
};
// Delete a specific client from database
export const deleteClient = async (id) => {
  try {
    await fetch(`${endpoint}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.warn(error);
  }
};
// Read a specific client from database
export const getClient = async (id) => {
  try {
    const resp = await fetch(`${endpoint}/${id}`);
    const client = await resp.json();
    return client;
  } catch (error) {
    console.warn(error);
  }
};
// Update a specific client from database
export const updateClient = async (client) => {
  try {
    await fetch(`${endpoint}/${client.id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.warn(error);
  }
};
