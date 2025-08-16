import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export const ClientSignUp = () => {
  return (
    <div className="bg-[#252525] h-screen flex justify-center items-center">
      <div className="w-[50%]">
        <h1>hello</h1>
      </div>
      <div className="w-[50%] bg-[#1b1b1b] h-[100%]">
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="password" />
          <Button>Register</Button>
        </form>
      </div>
    </div>
  );
};
