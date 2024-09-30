import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "react-query"
const client = new QueryClient()
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
)
