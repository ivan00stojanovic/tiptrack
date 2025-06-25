import fs from 'fs';
import path from 'path';

const STATE_FILE = path.resolve('./data/state.json');

function loadState() {
  try {
    const data = fs.readFileSync(STATE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { processedFileIds: [] };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function hasProcessed(fileId, state) {
  return state.processedFileIds.includes(fileId);
}

function markProcessed(fileId, state) {
  if (!state.processedFileIds.includes(fileId)) {
    state.processedFileIds.push(fileId);
  }
}

export { loadState, saveState, hasProcessed, markProcessed };
