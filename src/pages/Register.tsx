import { useForm } from 'react-hook-form';
import useAuth from '@/hooks/use-auth';
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
    fullName: z.string().min(1, { message: 'Name is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email(),
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
  const { register } = useAuth();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: '',
    },
    mode: 'all',
  });
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      console.log('values', values);
      const avatar_url = null;
      await register(
        values.email,
        values.password,
        values.fullName,
        values.userType,
        avatar_url
      );
      // const { data, error } = await supabase.auth.signUp({
      //   email: values.email,
      //   password: values.password,
      //   options: {
      //     data: {
      //       full_name: values.fullName,
      //       role: values.userType,
      //       avatar_url: null,
      //     },
      //   },
      // });
      // console.log(error, data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="w-full h-auto flex flex-col justify-center items-center mb-10">
        <Card className="border-dark-gray w-1/2">
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-dark-gray" />
                    </FormControl>
                    {form.formState.errors.fullName && (
                      <FormMessage className="text-error">
                        {form.formState.errors.fullName.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-dark-gray"
                        type="email"
                      />
                    </FormControl>
                    {form.formState.errors.email && (
                      <FormMessage className="text-error">
                        {form.formState.errors.email.message}
                      </FormMessage>
                    )}
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
                    {form.formState.errors.password && (
                      <FormMessage className="text-error">
                        {form.formState.errors.password.message}
                      </FormMessage>
                    )}
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
                    {form.formState.errors.confirmPassword && (
                      <FormMessage className="text-error">
                        {form.formState.errors.confirmPassword.message}
                      </FormMessage>
                    )}
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
                          value="jobseeker"
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
                    {form.formState.errors.userType && (
                      <FormMessage className="text-error">
                        {form.formState.errors.userType.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={form.handleSubmit(onSubmit)}
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
