import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import UsersPage from './pages/users/users';
import LazyUsersPage from './pages/users/lazy-users';
import JobsPage from 'pages/jobs/jobs';
import LazyJobsPage from './pages/jobs/lazy-jobs';
import UserDetailsPage from 'pages/users/user-details';
import JobDetailsPage from 'pages/jobs/job-details.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header links={[
            {to: 'users', text: 'Users'},
            {to: 'lazy-users', text: 'Lazy Users'},
            {to: 'jobs', text: 'Jobs'},
            {to: 'lazy-jobs', text: 'Lazy Jobs'}
          ]} />
          <div className='px-5 py-3'>
            <Outlet />
          </div>
        </>
      }>
        <Route path='users' element={<UsersPage />} />
        <Route path='lazy-users' element={<LazyUsersPage />} />
        <Route path='users/:id' element={<UserDetailsPage />} />
        <Route path='jobs' element={<JobsPage />} />
        <Route path='jobs/:id' element={<JobDetailsPage />} />
        <Route path='lazy-jobs' element={<LazyJobsPage />} />

        <Route path='*' element={<>Page not found</>} />
      </Route>
    </Routes>
  );
}

export default App;
