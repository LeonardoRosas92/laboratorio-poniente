import { createRouter } from "van-router";
// import { home } from "../components/home";
// import { nosotros } from "../components/nosotros";
// import { contacto } from "../components/contacto";
// import { estudios } from "../components/estudios";

const router = createRouter({
  render: (elem) => {
    document.getElementById("content").innerHTML = elem;
  },
});
// Produccion
// router.add("/", () => home);
// router.add("/nosotros", () => nosotros);
// router.add("/contactanos", () => contacto);
// router.add("/estudios", () => estudios);
// Pruebas
router.add("/", () => {
  const resource = fetch("/pages/home.html")
    .then((response) => response.text())
    .then((text) => text);
  return resource;
});

router.add("/nosotros", () => {
  const resource = fetch("/pages/about.html")
    .then((response) => response.text())
    .then((text) => text);
  return resource;
});

router.add("/contactanos", () => {
  const resource = fetch("/pages/contact.html")
    .then((response) => response.text())
    .then((text) => text);
  return resource;
});

router.add("/estudios", () => {
  const resource = fetch("/pages/estudios.html")
    .then((response) => response.text())
    .then((text) => text);
  return resource;
});

addEventListener("load", () => {
  router.resolve();
});

export { router };
