import { useForm } from 'react-hook-form';
import Footer from '../components/navigation/Footer';
import Navbar from '../components/navigation/Navbar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const registerSchema = z
  .object({
    username: z.string().min(1, { message: 'Username is required' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    userType: z.string().min(2, 'User Type is required'),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  );

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      userType: '',
    },
  });
  // function onSubmit(values: z.infer<typeof registerSchema>) {
  //   try {
  //     console.log('values', values);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center mb-10">
        <Card className="border-dark-gray w-1/2">
          <CardHeader>
            <CardTitle>Register</CardTitle>
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
                      <Input {...field} className="border-dark-gray" />
                    </FormControl>
                    <FormMessage className="text-error" />
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
                      <Input
                        {...field}
                        className="border-dark-gray"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage className="text-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-dark-gray"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage className="text-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>User Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-dark-gray">
                          <SelectValue placeholder="Select user type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-dark-gray">
                        <SelectItem
                          value="jobSeeker"
                          className="hover:bg-light-gray cursor-pointer"
                        >
                          Job Seeker
                        </SelectItem>
                        <SelectItem
                          value="employer"
                          className="hover:bg-light-gray cursor-pointer"
                        >
                          Employer
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-error" />
                  </FormItem>
                )}
              />
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              // onClick={form.handleSubmit(onSubmit)}
              className="bg-primary text-white hover:bg-primary-dark"
            >
              Register
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
