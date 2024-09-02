/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import { supabase } from '@/lib/supabaseClient';
import Skeleton from '@/components/Skeleton';
import { Database } from '@/types/supabase';
import { Card } from '@/components/ui/card';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/ui/data-table';

const columns: ColumnDef<Database['public']['Tables']['jobs']['Row']>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState<
    Database['public']['Tables']['jobs']['Row'][] | []
  >([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 2,
  });
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getJobs(pagination.pageIndex, pagination.pageSize);
  }, [pagination]);

  const getJobs = async (pageIndex: number, pageSize: number) => {
    setLoading(true);
    try {
      const { data, count } = await supabase
        .from('jobs')
        .select('*', { count: 'exact' })
        .range(pageIndex * pageSize, (pageIndex + 1) * pageSize - 1);
      console.log('jobs', data, count);
      setJobs(data || []);
      setPageCount(count || 0);
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
      <div className="w-full flex flex-col mb-10 h-full px-3 sm:px-20">
        <p className="my-4 font-bold">Jobs</p>
        <Card className="border-dark-gray border w-full h-full">
          <DataTable
            data={jobs}
            columns={columns}
            pagination={pagination}
            rowCount={pageCount}
            setPagination={setPagination}
          />
          {displayUnavailable && <p>Jobs not available</p>}
          {displayLoading && <Skeleton />}
          {displayError && <p>{errorMsg}</p>}
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
