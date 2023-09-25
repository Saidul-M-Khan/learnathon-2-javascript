async function fetchUsers() {
  let response = await fetch("./users.json");
  let data = await response.json();
  return data;
}
fetchUsers();
