import { loadState, saveState, markProcessed } from './src/state.js';

const state = loadState();

markProcessed("fake_file_id_123", state);
saveState(state);

console.log("Saved a fake file ID to state.json");
