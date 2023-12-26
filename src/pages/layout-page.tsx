import Menu from '@/components/menu'
import CustomLink from '@/components/ui/custom-link'
import * as React from 'react'
import { useEffect } from 'react'
import { Link, Outlet, NavLink, useLoaderData } from 'react-router-dom'
const LayoutPage = (): React.ReactElement => {
    let data = useLoaderData()
    console.log(data)
    return (
        <body>
            <header>
                <div className="mx-auto">
                    <Menu />
                </div>
            </header>
            <main>
                <div className="mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer></footer>
        </body>
    )
}

export default LayoutPage
