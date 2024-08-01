import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const term = useRef(null);
  const fitAddon = useRef(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    term.current = new Terminal();
    fitAddon.current = new FitAddon();
    term.current.loadAddon(fitAddon.current);
    term.current.open(terminalRef.current);
    fitAddon.current.fit();

    // WebSocket setup to communicate with the backend
    const socket = new WebSocket('ws://localhost:8080');
    socket.onmessage = (event) => {
      term.current.write(event.data);
    };

    term.current.onData((data) => {
      socket.send(data);
    });

    return () => {
      term.current.dispose();
      socket.close();
    };
  }, []);

  return <div ref={terminalRef} style={{ height: '100%', width: '100%' }} />;
};

export default TerminalComponent;
