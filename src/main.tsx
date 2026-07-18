import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import "./index.css";
import App from "./App";
import MdxLink from "./components/MdxLink";

// Components MDX content should use in place of default HTML elements.
// Here we route all in-content links through React Router so they respect
// the app's basename and navigate without a full page reload.
const mdxComponents = {
  a: MdxLink,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/vrindavan-wiki">
      <MDXProvider components={mdxComponents}>
        <App />
      </MDXProvider>
    </BrowserRouter>
  </StrictMode>,
);
