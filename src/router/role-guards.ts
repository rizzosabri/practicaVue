import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  console.log(to, from, next);

  const token = localStorage.getItem("token");

  if (token) {
    // queremos navegar!
    next();
  } else {
    alert("Ha fallado el token! No puedes pasar!");
    next({ name: "login" });
  }
};

export default haveRoleGuard;
