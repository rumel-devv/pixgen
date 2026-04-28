"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {

    const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
    });
    if(error){
        alert(error.message)
    }
    if(data){
        alert('Signup Successfull')
        router.push('/')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h1>

        <Form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <TextField name="name" type="text" isRequired>
            <Label className="text-gray-300">Name</Label>
            <Input placeholder="Your name" />
            <FieldError />
          </TextField>

          <TextField name="image" type="text" isRequired>
            <Label className="text-gray-300">Image URL</Label>
            <Input placeholder="Your image URL" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters";
              if (!/[A-Z]/.test(value)) return "1 uppercase required";
              if (!/[0-9]/.test(value)) return "1 number required";
              return null;
            }}
          >
            <Label className="text-gray-300">Password</Label>
            <Input placeholder="Enter password" />
            <FieldError />
          </TextField>

          <div className="flex gap-3 mt-2">
            <Button type="submit" className="w-full bg-purple-600 text-white">
              Submit
            </Button>

            <Button type="reset" variant="secondary" className="w-full">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
