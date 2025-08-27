import { Outlet } from 'react-router'
import {SidebarComponent} from '@syncfusion/ej2-react-navigations'
import { NavItems } from 'components'
const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <h1 className='sm:hidden'>Mobile Sidebar</h1>
        <aside className='w-full max-w-[270px] hidden lg:block'>
            <SidebarComponent width={270} enableGestures={false}>
                <NavItems/>
            </SidebarComponent>
        </aside>
        <aside>
            <Outlet/>
        </aside>
    </div>
  )
}

export default AdminLayout