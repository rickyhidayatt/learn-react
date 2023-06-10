// Disini tempat dari kumpulan beberapa element yang sudah digabung dan sudah jadi misal ini buat login

import InputForm from "../elements/input/index";
import Button from "../elements/Button/index";

const LoginForm = () => {
  return (
    <form action="" className="py-2">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />

      <Button variant="bg-blue-600 w-full">SIGN</Button>
    </form>
  );
};
export default LoginForm;
