import { useForm } from "react-hook-form";
import Footer from "../components/navigation/Footer"
import Navbar from "../components/navigation/Navbar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username is too short"
  }),
  password: z.string()
})

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })
  // const handleSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // }
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Card>
        <CardHeader>Login</CardHeader>
        <CardContent>
          <Form {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
      </Card>
      <Footer />

    </div>
  )
}

export default Login