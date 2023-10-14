import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, [navigate]);

  return (
    <>
      <div>
        <h1 className='text-5xl font-bold  mb-4'>Sorry, page not found.</h1>
        <h2 className='text-3xl font-semibold '>redirect to home</h2>
      </div>
    </>
  );
};

export default ErrorPage;
