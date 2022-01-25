import Link from "next/link"
import Layout from "../components/Layout"

export default function() {
    return <Layout>
        <h3>About Page</h3>
        <Link href="/">Back to home page</Link>

        <style jsx>
            {`
            
            `}
        </style>
    </Layout>
}