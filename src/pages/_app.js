import "@/styles/globals.css";
import "../styles/utilities.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./nav";
import { library } from "@fortawesome/fontawesome-svg-core";
// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
export default App;
library.add(fab, fas, far);
