import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <h1 className='sm:hidden'>Mobile Sidebar</h1>
        <aside className='w-full max-w-[270px] hidden lg:block'>Desktop sidebar</aside>
        <aside>
            <Outlet/>
        </aside>
    </div>
  )
}

export default AdminLayout