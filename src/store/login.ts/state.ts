import { Login } from "@/models/login";

export interface ILoginState {
  credenciales: Login;
  token: string;
  isLoading: boolean;
  
}


function state(): ILoginState {
  return {
    credenciales: {email:"", password:""  },
    isLoading: false,
    token:"",
  };
}
export default state;