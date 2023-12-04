import { App } from "@/components/App"
import { createBrowserRouter } from "react-router-dom"
import { Shop } from "@/pages/shop"
import { Suspense } from "react"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/shop",
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>,
            },
        ]
    },
]

export const router = createBrowserRouter(routes)

export default routes