import { Link as RouterLink, useNavigate } from 'react-router-dom';
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
import { AuthApiError } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const { error } = await login(values.email, values.password);
      if (error) {
        if (error instanceof AuthApiError) {
          toast.error(error.message);
        }
      } else {
        toast.success('Login successful');
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <Card className="border-dark-gray w-1/2">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-dark-gray" />
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
            </Form>
            <p className="mt-4">
              Don&apos;t have an account?
              <RouterLink
                to="/register"
                className="text-primary hover:underline"
              >
                {' '}
                Register
              </RouterLink>
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={form.handleSubmit(onSubmit)}
              className="bg-primary text-white hover:bg-primary-dark"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
