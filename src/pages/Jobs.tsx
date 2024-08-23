/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import { supabase } from '@/lib/supabaseClient';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  // TableHeader,
  TableRow,
} from '@/components/ui/table';
import Skeleton from '@/components/Skeleton';
import { Database } from '@/types/supabase';

const Jobs = () => {
  const [jobs, setJobs] = useState<
    Database['public']['Tables']['jobs']['Row'][] | null
  >([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      setLoading(true);
      const { data } = await supabase.from('jobs').select();
      setJobs(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setErrorMsg(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const displayLoading = loading;
  const displayError = Boolean(!loading && errorMsg);
  const displayUnavailable = Boolean(!loading && !errorMsg && !jobs?.length);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center mb-10 border-dark-gray border">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs?.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {displayUnavailable && <p>Jobs not available</p>}
        {displayLoading && <Skeleton />}
        {displayError && <p>{errorMsg}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
