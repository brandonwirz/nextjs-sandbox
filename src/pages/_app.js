import "../styles/globals.css";
import "../styles/utilities.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./nav";
import { library } from "@fortawesome/fontawesome-svg-core";
// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { SSRProvider } from "react-bootstrap";

function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Nav />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
export default App;
library.add(fab, fas, far);
