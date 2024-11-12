import { DefaultLayout, GlobalStyles } from '#layouts';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <GlobalStyles />

      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
}

export default Root;
