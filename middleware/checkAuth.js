export default function ({ store, redirect }) {
  const auth = store.getters["auth/checkAuth"];
  if (!auth) {
    redirect("/");
  }
}
