#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { platform, cwd } from 'node:process'

// Determine mode from first arg: mock | backend | prod
const modeArg = process.argv[2]
const mode = ['mock', 'backend', 'prod'].includes(modeArg) ? modeArg : 'mock'

// 1) Fast type-check (no emit)
const check = spawnSync('npm', ['run', 'check'], { stdio: 'inherit', shell: true })
if (check.status !== 0) {
  process.exit(check.status ?? 1)
}

// 2) Full build to catch bundling issues (respect mode)
const buildArgs = ['run', 'build']
if (mode !== 'prod') buildArgs.push('--', '--mode', mode)
const build = spawnSync('npm', buildArgs, { stdio: 'inherit', shell: true })
if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

// 3) Launch dev or preview in a new iTerm window (macOS), fallback otherwise
if (platform === 'darwin') {
  const projectDir = cwd()
  const runCmd = mode === 'prod'
    ? `cd ${JSON.stringify(projectDir)} && npm run preview`
    : `cd ${JSON.stringify(projectDir)} && npm run dev -- --mode ${mode}`

  // Ensure iTerm is launched first
  spawnSync('open', ['-a', 'iTerm'], { stdio: 'ignore' })

  // Simple, more compatible AppleScript for iTerm
  const iTermScript = [
    'tell application "iTerm"',
    '  activate',
    '  if (count of windows) = 0 then',
    '    create window with default profile',
    '  else',
    '    tell current window to create tab with default profile',
    '  end if',
    '  delay 0.2',
    '  tell current session of current window',
    `    write text ${JSON.stringify(runCmd)}`,
    '  end tell',
    'end tell'
  ]

  let r = spawnSync('osascript', iTermScript.flatMap(s => ['-e', s]), { stdio: 'pipe' })
  if (r.status !== 0) {
    // Fallback to Terminal if iTerm unavailable or scripting disabled
    const termScript = [
      `tell application "Terminal" to do script ${JSON.stringify(runCmd)}`,
      'tell application "Terminal" to activate'
    ]
    r = spawnSync('osascript', termScript.flatMap(s => ['-e', s]), { stdio: 'inherit' })
  }
  process.exit(r.status ?? 0)
} else {
  console.log('[dev:term] Non-macOS detected. Starting dev in current terminal...')
  const r = spawnSync('npm', mode === 'prod' ? ['run', 'preview'] : ['run', 'dev', '--', '--mode', mode], { stdio: 'inherit', shell: true })
  process.exit(r.status ?? 0)
}
