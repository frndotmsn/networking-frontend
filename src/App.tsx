import { createSignal, type Component } from 'solid-js';
import HostSidebarPreview from './HostSidebarPreview';
import BlankEditor from './BlankEditor';
import HostEditor from './HostEditor';

type State = "hostname" | "blank"

const App: Component = () => {
  const [hostname, setHostname] = createSignal("Testhost")
  const [state, setState] = createSignal<State>("blank")


  return (
    <>
      <div class="flex flex-row h-full w-full">
        <div className="sidebar w-2/12">
          <HostSidebarPreview hostname={hostname} setHostname={setHostname} edit={() => setState("hostname")} />
        </div>
        <div className="editor">
          {
            (state() === "hostname") ?
            <HostEditor hostname={hostname()} setHostname={setHostname} /> :
              (state() === "blank") ?
              <BlankEditor /> :
              <p>Goofy state: {state()}</p>
          }
        </div>
      </div>
    </>
  );
};

export default App;
