import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./style/classes.css";
// @ts-ignore
import "./style/index.css";
// @ts-ignore
import "./App.css";
import "./style/applies.css";

// @ts-ignore
import {
  qiankunWindow,
  renderWithQiankun,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App";

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  const root = ReactDOM.createRoot(
    document.getElementById("langflow-root") as HTMLElement,
  );

  root.render(
    <App />
  );
  reportWebVitals();
} else {
  let root: ReactDOM.Root;
  renderWithQiankun({
    mount(props) {
      root = ReactDOM.createRoot(
        (props.container
          ? props.container.querySelector("#langflow-root")
          : document.getElementById("langflow-root")) as HTMLElement,
      );
      root.render(
        <App />
      );
    },
    bootstrap() {
      console.log("bootstrap");
    },
    unmount(props: any) {
      root.unmount();
    },
    update(props) {
      console.log("update props", props);
    },
  });
}
