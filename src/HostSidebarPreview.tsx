import type { Accessor, Component, Setter } from "solid-js";
import { createEffect, createMemo, createSignal } from "solid-js";
import { FaSolidLock, FaSolidLockOpen, FaSolidPen, FaSolidPencil } from 'solid-icons/fa';

interface HostSidebarPreviewProps {
    hostname: string,
    setHostname: Setter<string>,
    edit: () => void,
}

const HostSidebarPreview: Component = (props: HostSidebarPreviewProps) => {
    const [locked, setLocked] = createSignal(false);
    const toggle_lock = () => { console.log(`Locked should be ${!locked()}`); setLocked(!locked()) }

    createEffect(() => console.log(`Locked: ${locked()}`));

    return (
        <div class="flex flex-row">
            <button onclick={toggle_lock}>
            {
                locked() ? 
                <FaSolidLock size={24} color="#1e3050" /> :
                <FaSolidLockOpen size={24} color='#1e3050' />
            }
            </button>
            <button onclick={props.edit}>
                <FaSolidPencil />
            </button>
            <p>{props.hostname}</p>
        </div>
    );
}

export default HostSidebarPreview;
