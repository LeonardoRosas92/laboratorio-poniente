import { createRouter } from "van-router";

const router = createRouter({
  render: (elem) => {
    document.getElementById("content").innerHTML = elem;
  }
});

router.add("/", () => {
  const resource = fetch("./../pages/home.html")
    .then(response => response.text())
    .then(text => text);
  return resource;
});

router.add("/nosotros", () => {
  const resource = fetch("./../pages/about.html")
    .then(response => response.text())
    .then(text => text);
  return resource;
});

router.add("/contactanos", () => {
  const resource = fetch("./../pages/contact.html")
    .then(response => response.text())
    .then(text => text);
  return resource;
});

router.add("/estudios", () => {
  const resource = fetch("./../pages/estudios.html")
    .then(response => response.text())
    .then(text => text);
  return resource;
});

addEventListener("load", () => {
  router.resolve();
});

export { router };
