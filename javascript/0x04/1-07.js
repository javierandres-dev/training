export default function checkLocalStorage() {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (error) {
    console.error(error);
    return alert(
      "Sorry, your browser does not support Web storage. Try again with a better one"
    );
  }
}
