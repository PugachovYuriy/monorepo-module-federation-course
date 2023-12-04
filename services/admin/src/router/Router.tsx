import { App } from "@/components/App"
import { createBrowserRouter } from "react-router-dom"
import { About } from "@/pages/about"
import { Suspense } from "react"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={'Loading...'}><About /></Suspense>,
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes