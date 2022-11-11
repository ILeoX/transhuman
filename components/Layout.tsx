export default function Layout({ children }) {
  return (
    <>
      <div className='mt-0 pb-0 scroll-smooth theapp'>{children}</div>{' '}
      <div className='laptop:hidden text-center flex justify-center items-center h-screen text-2xl mx-10'>
        Switch to a Desktop Browser. Mobile mode is in development.
      </div>
    </>
  );
}
