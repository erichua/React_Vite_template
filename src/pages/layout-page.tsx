import Menu from '@/components/menu'
import CustomLink from '@/components/ui/custom-link'
import * as React from 'react'
import { useEffect } from 'react'
import { Link, Outlet, NavLink, useLoaderData } from 'react-router-dom'
import SiderBar from './sider-bar'
import HeaderBar from './header-bar'
const LayoutPage = (): React.ReactElement => {
    let data = useLoaderData()
    console.log(data)
    return (
        <>
            <div className="mx-auto">
                <div>
                    <HeaderBar />
                </div>
                <div className="flex">
                    <SiderBar storedSidebarExpanded={false} />
                    <div className="w-5/6">
                        <Outlet></Outlet>
                    </div>
                </div>
                <footer>sdsdsd</footer>
            </div>
            {/* <div className="float-right items-stretch">
                <header>
                    <div>
                        <Menu />
                    </div>
                </header>
                <main>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </main>
                <footer></footer>
            </div> */}
        </>
    )
}

export default LayoutPage
