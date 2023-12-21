import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './tailwind.css';
import '@/styles/reset.css'
import reportWebVitals from './report-web-vitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from 'react-router-dom'

import LoadingOrError from '@components/ui/loading-error'
import router from './routers/global-router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient()

console.log(router)
root.render(
    <React.StrictMode>
        <React.Suspense fallback={<LoadingOrError />}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider
                    router={router}
                    fallbackElement={<p> Initial Load...</p>}
                />
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </React.Suspense>
    </React.StrictMode>,
)

reportWebVitals()
