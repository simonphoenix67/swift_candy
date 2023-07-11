// import { Route, Routes, Router } from 'react-router-dom';
// import { lazy } from 'react';

// const Home = lazy(() => import('./pages/Home'));

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Router>
//         <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       </Router>
//       React homework template
//     </div>
//   );
// };

import { Route, Routes, Router, BrowserRouter, NavLink, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from "styled-components";
// import Layout from './Layout/Layout';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Home = lazy(() => import('../pages/Home/Home'));
const Main = lazy(() => import('../pages/Main/Main'));
const Page_not_found = lazy(() => import('../pages/Page_not_found/Page_not_found'));
const Layout = lazy(() => import('./Layout/Layout'));
const Registration = lazy(() => import('../pages/Registration/Registration'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home/>}/>
              <Route path="/main" element={<Main />} />
              <Route path="/registration" element={<Registration/>}/>
            </Route>
            <Route path="*" element={<Page_not_found />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

