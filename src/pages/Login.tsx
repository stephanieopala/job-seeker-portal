import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
 } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2, { message: "Username is too short" }),
  password: z.string().min(8, { message: "Password is too short"})
})

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })
  function onSubmit (values: z.infer<typeof formSchema>) {
    try {
      console.log('values', values);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Card className="border-dark-gray w-1/2">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-dark-gray"/>
                      </FormControl>
                      <FormMessage className="text-error"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-dark-gray" type="password"/>
                      </FormControl>
                      <FormMessage className="text-error"/>
                    </FormItem>
                  )}
                />
              </Form>
              <p className="mt-4">Don&apos;t have an account?
                <RouterLink to="/register" className="text-primary hover:underline"> Register</RouterLink>
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <Button onClick={form.handleSubmit(onSubmit)} className="bg-primary text-white hover:bg-primary-dark">Login</Button>
            </CardFooter>
          </Card>
        </div>
      <Footer />

    </div>
  )
}

export default Login