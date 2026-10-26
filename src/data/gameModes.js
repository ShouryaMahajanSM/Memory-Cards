export const SYMBOLS = ['🐉','🎋','🏮','🏯','🌸','⛩️','🍃','🐲','🏺','☯','🐅','🌙','🪷','🧧','🪭','🦚','🎍','⭐','🍀','🌊','🔥','❄️','☀️','🦋'];
export const MODE_CONFIG = { relaxed:{ rows:2, cols:4, label:'Relaxed', timer:null }, easy:{ rows:3, cols:4, label:'Easy', timer:null }, normal:{ rows:4, cols:4, label:'Normal', timer:null }, timed60:{ rows:4, cols:4, label:'60 Seconds', timer:60 }, timed90:{ rows:5, cols:4, label:'90 Seconds', timer:90 }, timed120:{ rows:6, cols:6, label:'2 Minutes', timer:120 }, limitedMoves:{ rows:4, cols:4, label:'Limited Moves', timer:null, moveLimit:20 } };
export const DIFFICULTY_GROUP = {
  'Relaxed':    'Easy',
  'Easy':       'Easy',
  'Normal':     'Medium',
  '60 Seconds': 'Hard',
  '90 Seconds': 'Hard',
  '2 Minutes':  'Hard',
  'Limited Moves': 'Medium',
  'relaxed':    'Easy',
  'easy':       'Easy',
  'normal':     'Medium',
  'timed60':    'Hard',
  'timed90':    'Hard',
  'timed120':   'Hard',
  'limitedMoves': 'Medium',
};
export function formatTime(seconds) { const safe=Math.max(0,Math.floor(seconds||0)); return `${String(Math.floor(safe/60)).padStart(2,'0')}:${String(safe%60).padStart(2,'0')}`; }
