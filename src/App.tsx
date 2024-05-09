import { useState } from "react";
import { AudioSphere } from "./components/AudioSphere";
import { XMas } from "./components/XMas";

const App = () => {
  const [renderView, setRenderView] = useState("xmas");

  return (
    <div className="h-screen w-screen overflow-y-auto overflow-x-hidden bg-slate-900">
      <div className="fixed left-1/2 top-12 z-50 flex h-20 w-1/2 -translate-x-1/2 items-center justify-center">
        {renderView !== "xmas" ? (
          <button className="view-switcher" onClick={() => setRenderView("xmas")}>
            Xmas
          </button>
        ) : (
          <button className="view-switcher" onClick={() => setRenderView("default")}>
            Audio Sphere
          </button>
        )}
      </div>

      {renderView === "xmas" ? <XMas /> : <AudioSphere />}
    </div>
  );
};

export default App;
