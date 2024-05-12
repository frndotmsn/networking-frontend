import { Component, JSX } from "solid-js";

interface HostEditorProps {
    hostname: string,
    setHostname: (hostname: string) => void,
}

const HostEditor: Component = (props: HostEditorProps) => {
    const onInput = (e: Event) => {
        const inputElement = e.target as HTMLInputElement;
        if (!inputElement.checkValidity()) return;
        const new_hostname = inputElement.value;
        props.setHostname(new_hostname)
    }

    return (
        <>
            <input type="text" minLength={1} onInput={onInput} value={props.hostname}/>
        </>
    )
}

export default HostEditor;