import { runCommand } from 'bash.js';

const terminal = document.getElementById('terminal');
const prompt = '> ' + new Bash();

terminal.addEventListener('click', () => {
  bash.focus();
})
terminal.innerHTML += prompt;

terminal.addEventListener('keydown', async event => {
  if (event.key === 'Enter') {
    const command = terminal.textContent.trim().slice(prompt.length);
    const output = await runCommand(command);
    terminal.innerHTML += `<div>${output}</div>${prompt}`;
    terminal.scrollTop = terminal.scrollHeight;
    event.preventDefault();
  } else if (event.key === 'Backspace' && terminal.textContent.length <= prompt.length) {
    event.preventDefault();
  }
});

terminal.focus();
