const electron = (window as any).require('electron');
const { ipcRenderer, remote } = electron;
const { getGlobal, shell } = remote;

export {
  shell,
  remote,
  electron,
  getGlobal,
  ipcRenderer,
};
