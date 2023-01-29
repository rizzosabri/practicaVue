import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
 
  const token = localStorage.getItem("token");
  if (token) {
  
    next();
  } else {
    alert("Ha fallado el token! No puedes pasar!");
    next({ path: '/login' });
  }
};

export default haveRoleGuard;
