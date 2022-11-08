import * as Icons from "@iconscout/react-unicons";
import { buses } from "assets/img/bus";
import { Btn, FormBtn } from "components/widgets/btn";
import Input from "components/widgets/input";
import PasswordInput from "components/widgets/password_input";
import { show_auth_modal } from "hooks/redux/modal_reducer";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Register from "./register";

export default function LoginComponent() {
  const dispatch = useDispatch();


  return (
    <div className="w-full mx-auto grid gap-5 pb-8">
      <Input name="email" label="Email address" className="w-full" />

      <PasswordInput name="password" label="Password" />

      <p className="text-sm flex items-center">
        Dont&apos;t have an account?
        <Btn
          content="Register here"
          className="text-primary hover:bg-transparent ml-1 p-0.5 px-3"
          click={() =>
            dispatch(
              show_auth_modal({
                url: "/register",
                title: "Register",
                content: Register,
                values: {
                  firstname: "",
                  lastname: "",
                  phone: "",
                  email: "",
                  password: "",
                },
                validation: "",
                width: "w-[500px]",
              })
            )
          }
        />
      </p>

      
    </div>
  );
}
