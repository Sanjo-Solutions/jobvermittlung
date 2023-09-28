import awsConfig from "@/aws-exports"
import "@aws-amplify/ui-react/styles.css"
import { Amplify } from "aws-amplify"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import "../globals.css"

Amplify.configure({ ...awsConfig, ssr: true })

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
