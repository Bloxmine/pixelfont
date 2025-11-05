// --- PACXON GAME FOR FLIPDOT DISPLAY ---
// Authors: Hein Dijstelbloem (prototype rendering, conversion to work on the flipdot board, score system, level system, fonts, further gameplay), Mohammed Ali (initial code, initial version of the gameplay), Christ Kastelijn (pixel art animations), Krystiana Petrova (testing).
// Date: 2025-11-05
// Version: 0.2.0
// Description: 
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configuration adapted for flipdot display
const GRID_W = 84;
const GRID_H = 28;
const WIN_PCT = 80;

// high scores file path
const HIGH_SCORES_FILE = path.join(__dirname, '..', 'high-scores.json');

// character font for text rendering
const characters = {
  // these smaller numbers are used for the lives display.
  "0":[[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
  "1":[[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]],
  "2":[[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],
  "3":[[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],
  "4":[[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],
  "5":[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],
  "6":[[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],
  "7":[[1,1,1],[0,0,1],[0,0,1],[0,1,0],[0,1,0]],
  "8":[[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],
  "9":[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]]
};
// these are all the letters in a 5x5 pixel grid.
// drawn by Hein Dijstelbloem.
const lettersBig = {
      "A": [
        [0,1,1,1,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
    ],
    "B": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
    ],
    "C": [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,1,1,1,1],
    ],
    "D": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
    ],
    "E": [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,1],
    ],
    "F": [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
    ],
    "G": [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,0,0,1,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
    ],
    "H": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
    ],
    "I": [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [1,1,1,1,1],
    ],
    "J": [
        [0,0,0,0,1],
        [0,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,1],
    ],
    "K": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
    ],
    "L": [
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
        [1,1,1,1,1],
    ],
    "M": [
        [0,1,1,1,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,0,0,1],
    ],
    "N": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
    ],
    "O": [
        [0,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,0],
    ],
    "P": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,0,0,0,0],
    ],
    "Q": [
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,0,1,0],
        [1,1,1,0,1],
    ],
    "R": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
    ],
    "S": [
        [0,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,1],
        [1,1,1,1,0],
    ],
    "T": [
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
    ],
    "U": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,0],
    ],
    "V": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0],
    ],
    "W": [
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,0,1],
        [1,1,1,1,0],
    ],
    "X": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
    ],
    "Y": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
    ],
    "Z": [
        [1,1,1,1,1],
        [0,0,0,0,1],
        [0,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,1],
    ],
    "?": [
        [1,1,1,1,1],
        [0,0,0,0,1],
        [0,0,1,1,1],
        [0,0,0,0,0],
        [0,0,1,0,0],
    ],
    "!": [
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,1,0,0],
    ],
    "(": [
        [0,0,0,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,0,1,1],
    ],
    ")": [
        [1,1,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [1,1,0,0,0],
    ],
    "[": [
        [0,0,1,1,1],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,1,1],
    ],
    "]": [
        [1,1,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [1,1,1,0,0],
    ],
    "{": [
        [0,0,1,1,1],
        [0,0,1,0,0],
        [0,1,0,0,0],
        [0,0,1,0,0],
        [0,0,1,1,1],
    ],
    "}": [
        [1,1,1,0,0],
        [0,0,1,0,0],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [1,1,1,0,0],
    ],
    ",": [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
    ],
    ".": [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,0,0,0,0],
    ],
    ":": [
        [1,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,0,0,0,0],
    ],
    ";": [
        [1,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,0,0,0,0],
        [1,0,0,0,0],
    ],
    " ": [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ],
    "-": [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ],
    "^": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,1],
    ],
    "~": [
        [1,0,1,1,1],
        [1,0,0,0,1],
        [1,0,1,1,1],
        [0,0,0,0,0],
        [1,0,0,1,0],
    ],
        "0": [
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
    ],
    "1": [
        [1,1,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [1,1,1,1,1],
    ],
    "2": [
        [1,1,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,1],
    ],
    "3": [
        [1,1,1,1,0],
        [0,0,0,0,1],
        [1,1,1,1,1],
        [0,0,0,0,1],
        [1,1,1,1,1],
    ],
    "4": [
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,1],
        [0,0,0,0,1],
        [0,0,0,0,1],
    ],
    "5": [
        [1,1,1,1,1],
        [1,0,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,1],
        [1,1,1,1,0],
    ],
    "6": [
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
    ],
    "7": [
        [1,1,1,1,1],
        [0,0,0,0,1],
        [0,0,0,1,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
    ],
    "8": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [0,1,1,1,1],
    ],
    "9": [
        [1,1,1,1,0],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [0,0,0,0,1],
        [1,1,1,1,1],
    ]
};

export class PacxonGame {
  constructor(width, height, autoPlay = false) {
    this.width = width;
    this.height = height;
    this.tick = 0;
    this.dir = null;
    this.keys = new Set();
    this.autoPlay = autoPlay;
    this.lastDirectionChange = 0;
    this.gameEndTime = 0;
    this.flashState = false; // for flashing START text
    this.lastGamepadState = {}; // track previous gamepad button states
    this.currentLevel = 1; // track current level
    this.baseSpeed = 0.4; // base speed for enemies
    this.transitionStartTime = 0; // track when level transition started
    
    // high score name entry state, three letters
    this.nameEntry = {
      name: ['A', 'A', 'A'],
      cursorPos: 0, // which letter is being edited (0-2)
      lastInputTime: 0,
      showingScores: false,
      startTime: 0,
      scoresDisplayTime: 0,
      scrollOffset: 0,
    };
    this.highScores = this.loadHighScores();
    
    this.gameState = this.getInitialState();
    
    // input handling setup (if in browser environment)
    if (typeof window !== 'undefined') {
      this.setupInputHandlers();
      this.setupGamepadSupport();
    }
  }

  getInitialState(keepScore = false, keepLevel = false, showTransition = false) {
    const initialWalls = this.makeEmpty(GRID_W, GRID_H, false);
    
    // create border walls
    for (let x = 0; x < GRID_W; x++) {
      initialWalls[0][x] = initialWalls[GRID_H - 1][x] = true;
    }
    for (let y = 0; y < GRID_H; y++) {
      initialWalls[y][0] = initialWalls[y][GRID_W - 1] = true;
    }
    
    // calculate speed multiplier based on current level
    const speedMultiplier = 1 + (this.currentLevel - 1) * 0.15; // 15% faster each level
    
    return {
      scene: showTransition ? 'LEVEL_TRANSITION' : (keepScore ? 'PLAYING' : 'TITLE'),
      playing: keepScore && !showTransition ? true : false,
      score: keepScore ? this.gameState.score : 0,
      lives: keepScore ? this.gameState.lives : 3,
      gameOver: false,
      win: false,
      player: { x: 1, y: 1 },
      trail: new Set(),
      walls: initialWalls,
      enemies: [
        { x: GRID_W / 2, y: GRID_H / 2, vx: 0.5 * speedMultiplier, vy: 0.37 * speedMultiplier },
        { x: GRID_W / 3, y: GRID_H / 3, vx: -0.4 * speedMultiplier, vy: 0.45 * speedMultiplier }
      ],
    };
  }

  setupInputHandlers() {
    // for browser environment only
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        this.keys.add(key);
        
        // handle name entry screen
        if (this.gameState.scene === 'NAME_ENTRY') {
          this.handleNameEntryInput(key);
          return;
        }
        
        // start game from title screen on any key press
        if (this.gameState.scene === 'TITLE') {
          this.startGame();
          return;
        }
        
        if (key === 'arrowup' || key === 'w') this.dir = 'UP';
        else if (key === 'arrowdown' || key === 's') this.dir = 'DOWN';
        else if (key === 'arrowleft' || key === 'a') this.dir = 'LEFT';
        else if (key === 'arrowright' || key === 'd') this.dir = 'RIGHT';
        else if (key === 'r') this.restart();
      });

      document.addEventListener('keyup', (e) => {
        this.keys.delete(e.key.toLowerCase());
      });
    }
  }

  setupGamepadSupport() {
    // for browser environment only
    if (typeof window !== 'undefined') {
      // listen for gamepad connection
      window.addEventListener('gamepadconnected', (e) => {
        console.log('🎮 Gamepad connected:', e.gamepad.id);
      });

      window.addEventListener('gamepaddisconnected', (e) => {
        console.log('🎮 Gamepad disconnected:', e.gamepad.id);
      });
    }
  }

  pollGamepad() {
    // only poll if in browser environment
    if (typeof navigator === 'undefined' || !navigator.getGamepads) return;

    const gamepads = navigator.getGamepads();
    if (!gamepads) return;

    for (let i = 0; i < gamepads.length; i++) {
      const gamepad = gamepads[i];
      if (!gamepad) continue;

      const stateKey = `gamepad${i}`;
      const lastState = this.lastGamepadState[stateKey] || {};

      // debug: Log all button presses to help identify button mapping
      if (!lastState.debugLogged) {
        gamepad.buttons.forEach((button, index) => {
          if (button.pressed && !lastState[`btn${index}`]) {
            console.log(`🎮 Button ${index} pressed`);
          }
        });
        gamepad.axes.forEach((value, index) => {
          if (Math.abs(value) > 0.5 && !lastState[`axis${index}`]) {
            console.log(`🎮 Axis ${index}: ${value.toFixed(2)}`);
          }
        });
      }

      // Check multiple possible D-pad mappings:
      // Standard mapping: buttons 12-15
      // Some USB NES controllers: axes 0-1 or axes 9
      // Alternative: buttons 4-7 (some retro controllers)
      
      // Check axes first (most common for NES USB adapters)
      let dpadUp = false;
      let dpadDown = false;
      let dpadLeft = false;
      let dpadRight = false;

      // Check all possible axis configurations
      if (gamepad.axes.length >= 2) {
        dpadUp = gamepad.axes[1] < -0.5 || gamepad.axes[7] < -0.5;
        dpadDown = gamepad.axes[1] > 0.5 || gamepad.axes[7] > 0.5;
        dpadLeft = gamepad.axes[0] < -0.5 || gamepad.axes[6] < -0.5;
        dpadRight = gamepad.axes[0] > 0.5 || gamepad.axes[6] > 0.5;
      }

      // Also check button-based D-pads (standard mapping and alternatives)
      dpadUp = dpadUp || gamepad.buttons[12]?.pressed || gamepad.buttons[4]?.pressed;
      dpadDown = dpadDown || gamepad.buttons[13]?.pressed || gamepad.buttons[5]?.pressed;
      dpadLeft = dpadLeft || gamepad.buttons[14]?.pressed || gamepad.buttons[6]?.pressed;
      dpadRight = dpadRight || gamepad.buttons[15]?.pressed || gamepad.buttons[7]?.pressed;

      // Handle name entry screen
      if (this.gameState.scene === 'NAME_ENTRY') {
        if (dpadUp && !lastState.dpadUp) {
          this.handleNameEntryInput('arrowup');
        } else if (dpadDown && !lastState.dpadDown) {
          this.handleNameEntryInput('arrowdown');
        } else if (dpadLeft && !lastState.dpadLeft) {
          this.handleNameEntryInput('arrowleft');
        } else if (dpadRight && !lastState.dpadRight) {
          this.handleNameEntryInput('arrowright');
        }
        
        // Check for submit button (Start or A button)
        const submitPressed = gamepad.buttons[9]?.pressed || // Start
                             gamepad.buttons[0]?.pressed;    // A button
        if (submitPressed && !lastState.submit) {
          this.handleNameEntryInput('enter');
        }
        
        this.lastGamepadState[stateKey] = {
          dpadUp, dpadDown, dpadLeft, dpadRight,
          submit: submitPressed,
          debugLogged: true
        };
        return;
      }
      
      // Start game from title screen on any button press or d-pad
      if (this.gameState.scene === 'TITLE') {
        const anyPressed = dpadUp || dpadDown || dpadLeft || dpadRight || 
                          gamepad.buttons.some(btn => btn?.pressed);
        if (anyPressed) {
          console.log('🎮 Starting game from controller input');
          this.startGame();
          this.lastGamepadState[stateKey] = { dpadUp, dpadDown, dpadLeft, dpadRight };
          return;
        }
      }

      // Handle direction changes (only on new press, not held)
      if (dpadUp && !lastState.dpadUp) {
        console.log('🎮 D-pad UP');
        this.dir = 'UP';
      } else if (dpadDown && !lastState.dpadDown) {
        console.log('🎮 D-pad DOWN');
        this.dir = 'DOWN';
      } else if (dpadLeft && !lastState.dpadLeft) {
        console.log('🎮 D-pad LEFT');
        this.dir = 'LEFT';
      } else if (dpadRight && !lastState.dpadRight) {
        console.log('🎮 D-pad RIGHT');
        this.dir = 'RIGHT';
      }

      // Check multiple possible Start button positions
      const startPressed = gamepad.buttons[9]?.pressed || // Standard start
                          gamepad.buttons[8]?.pressed ||  // Select/Start alternative
                          gamepad.buttons[3]?.pressed ||  // Some NES controllers
                          gamepad.buttons[1]?.pressed;    // B button as alternative

      if (startPressed && !lastState.start) {
        console.log('🎮 Restart button pressed');
        this.restart();
      }

      // Update last state - track all buttons and axes for debug
      const newState = {
        dpadUp,
        dpadDown,
        dpadLeft,
        dpadRight,
        start: startPressed,
        debugLogged: true
      };
      
      // Track individual buttons for debug logging
      gamepad.buttons.forEach((button, index) => {
        newState[`btn${index}`] = button.pressed;
      });
      gamepad.axes.forEach((value, index) => {
        newState[`axis${index}`] = Math.abs(value) > 0.5;
      });

      this.lastGamepadState[stateKey] = newState;
    }
  }

  // Method to set direction from external input
  setDirection(direction) {
    // Handle name entry
    if (this.gameState.scene === 'NAME_ENTRY') {
      if (direction === 'UP') this.handleNameEntryInput('arrowup');
      else if (direction === 'DOWN') this.handleNameEntryInput('arrowdown');
      else if (direction === 'LEFT') this.handleNameEntryInput('arrowleft');
      else if (direction === 'RIGHT') this.handleNameEntryInput('arrowright');
      return;
    }
    
    // Start game from title screen on any direction press
    if (this.gameState.scene === 'TITLE') {
      this.startGame();
      return;
    }
    this.dir = direction;
  }

  // Method to handle button presses from external input (controllers)
  handleButtonPress(button) {
    if (this.gameState.scene === 'NAME_ENTRY') {
      // If showing scores, ignore button presses (will auto-restart after 10 seconds)
      if (this.nameEntry.showingScores) {
        return;
      }
      
      // A button, B button, or START button submits the name
      if (button === 'A' || button === 'B' || button === 'START') {
        this.handleNameEntryInput('enter');
      }
    }
  }

  startGame() {
    this.gameState.scene = 'PLAYING';
    this.gameState.playing = true;
  }

  restart() {
    this.currentLevel = 1;
    this.gameState = this.getInitialState();
    this.dir = null;
    this.tick = 0;
  }

  nextLevel() {
    this.currentLevel++;
    this.gameState = this.getInitialState(true, true, true); // Keep score, advance level, show transition
    this.transitionStartTime = Date.now();
    this.dir = null;
    this.tick = 0;
    
    // Start the actual level after 2.5 seconds
    setTimeout(() => {
      if (this.gameState.scene === 'LEVEL_TRANSITION') {
        this.gameState.scene = 'PLAYING';
        this.gameState.playing = true;
      }
    }, 2500);
  }

  // helper functions
  // this math rocks!!
  inBounds(x, y) { 
    return x >= 0 && y >= 0 && x < GRID_W && y < GRID_H; 
  }
  
  makeEmpty(w, h, v) { 
    return Array.from({ length: h }, () => Array.from({ length: w }, () => v)); 
  }
  
  neighbors4(x, y) { 
    return [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]; 
  }

  floodKeep(walls, enemies) {
    const keep = this.makeEmpty(GRID_W, GRID_H, false);
    const seen = this.makeEmpty(GRID_W, GRID_H, false);
    const q = [];
    
    for (const e of enemies) {
      const ex = Math.round(e.x), ey = Math.round(e.y);
      if (!this.inBounds(ex, ey) || walls[ey][ex]) continue;
      q.push([ex, ey]); 
      seen[ey][ex] = keep[ey][ex] = true;
    }
    
    while (q.length) {
      const [cx, cy] = q.shift();
      for (const [nx, ny] of this.neighbors4(cx, cy)) {
        if (!this.inBounds(nx, ny) || seen[ny][nx] || walls[ny][nx]) continue;
        seen[ny][nx] = keep[ny][nx] = true;
        q.push([nx, ny]);
      }
    }
    return keep;
  }

  // High score management methods
  loadHighScores() {
    // Only load from file in Node.js environment
    if (typeof fs === 'undefined') {
      return [];
    }
    
    try {
      if (fs.existsSync(HIGH_SCORES_FILE)) {
        const data = fs.readFileSync(HIGH_SCORES_FILE, 'utf8');
        return JSON.parse(data);
      }
    } catch (err) {
      console.error('Error loading high scores:', err);
    }
    return [];
  }

  saveHighScores() {
    // Only save to file in Node.js environment
    if (typeof fs === 'undefined') {
      console.log('High scores (browser mode):', this.highScores);
      return;
    }
    
    try {
      fs.writeFileSync(HIGH_SCORES_FILE, JSON.stringify(this.highScores, null, 2));
      console.log(`✅ High score saved! ${this.highScores[this.highScores.length - 1]?.name}: ${this.highScores[this.highScores.length - 1]?.score}`);
    } catch (err) {
      console.error('Error saving high scores:', err);
    }
  }

  addHighScore(name, score, level) {
    this.highScores.push({
      name: name.join(''),
      score,
      level,
      date: new Date().toISOString()
    });
    
    // Sort by score descending
    this.highScores.sort((a, b) => b.score - a.score);
    
    // Keep only top 10
    this.highScores = this.highScores.slice(0, 10);
    
    this.saveHighScores();
  }

  handleNameEntryInput(key) {
    const now = Date.now();
    
    // If showing scores, ignore input (will auto-restart after 10 seconds)
    if (this.nameEntry.showingScores) {
      return;
    }
    
    // Prevent input for first 500ms after entering name entry screen (to avoid accidental input)
    if (now - this.nameEntry.startTime < 500) {
      return;
    }
    
    // Debounce input to prevent too rapid changes
    if (now - this.nameEntry.lastInputTime < 150) {
      return;
    }
    this.nameEntry.lastInputTime = now;

    if (key === 'arrowup') {
      // Cycle letter up (A-Z)
      const currentCharCode = this.nameEntry.name[this.nameEntry.cursorPos].charCodeAt(0);
      let newCharCode = currentCharCode + 1;
      if (newCharCode > 90) newCharCode = 65; // Wrap from Z to A
      this.nameEntry.name[this.nameEntry.cursorPos] = String.fromCharCode(newCharCode);
    } else if (key === 'arrowdown') {
      // Cycle letter down (Z-A)
      const currentCharCode = this.nameEntry.name[this.nameEntry.cursorPos].charCodeAt(0);
      let newCharCode = currentCharCode - 1;
      if (newCharCode < 65) newCharCode = 90; // Wrap from A to Z
      this.nameEntry.name[this.nameEntry.cursorPos] = String.fromCharCode(newCharCode);
    } else if (key === 'arrowright') {
      // If on last character, pressing right submits the score
      if (this.nameEntry.cursorPos === 2) {
        // Submit score and show high scores list
        this.addHighScore(this.nameEntry.name, this.gameState.score, this.currentLevel);
        // Reset name entry for next time
        this.nameEntry.name = ['A', 'A', 'A'];
        this.nameEntry.cursorPos = 0;
        // Show the scores list and record the time
        this.nameEntry.showingScores = true;
        this.nameEntry.scoresDisplayTime = Date.now();
        this.nameEntry.scrollOffset = 0;
      } else {
        // Move cursor right
        this.nameEntry.cursorPos++;
      }
    } else if (key === 'arrowleft') {
      // Move cursor left
      this.nameEntry.cursorPos = (this.nameEntry.cursorPos - 1 + 3) % 3;
    } else if (key === 'enter' || key === ' ') {
      // Submit score and show high scores list
      this.addHighScore(this.nameEntry.name, this.gameState.score, this.currentLevel);
      // Reset name entry for next time
      this.nameEntry.name = ['A', 'A', 'A'];
      this.nameEntry.cursorPos = 0;
      // Show the scores list and record the time
      this.nameEntry.showingScores = true;
      this.nameEntry.scoresDisplayTime = Date.now();
      this.nameEntry.scrollOffset = 0;
    }
  }

  update() {
    this.tick++;
    
    // Poll gamepad input every frame
    this.pollGamepad();
    
    // Update flash state for title screen and level transition (flash every 15 ticks, ~0.25 seconds at 60fps)
    if (this.tick % 15 === 0) {
      this.flashState = !this.flashState;
    }
    
    // Auto-restart after 10 seconds on high score screen
    if (this.gameState.scene === 'NAME_ENTRY' && this.nameEntry.showingScores) {
      const now = Date.now();
      const elapsed = now - this.nameEntry.scoresDisplayTime;
      if (elapsed >= 10000) {
        this.nameEntry.showingScores = false;
        this.restart();
        return;
      }
    }
    
    if (this.gameState.scene !== 'PLAYING' || this.gameState.gameOver || this.gameState.win || !this.gameState.playing) {
      return;
    }

    // Enemy movement
    this.gameState.enemies = this.gameState.enemies.map(e => {
      let nx = e.x + e.vx;
      let ny = e.y + e.vy;
      
      if (this.gameState.walls[Math.round(e.y)]?.[Math.round(nx)]) {
        e.vx *= -1;
        nx = e.x + e.vx;
      }
      if (this.gameState.walls[Math.round(ny)]?.[Math.round(e.x)]) {
        e.vy *= -1;
        ny = e.y + e.vy;
      }
      return { ...e, x: nx, y: ny };
    });

    // Player movement (every other tick for speed control)
    if (!this.dir || this.tick % 2 !== 0) {
      return;
    }

    let scoreGained = 0;
    let nx = this.gameState.player.x, ny = this.gameState.player.y;
    
    if (this.dir === 'UP') ny--;
    if (this.dir === 'DOWN') ny++;
    if (this.dir === 'LEFT') nx--;
    if (this.dir === 'RIGHT') nx++;
    
    if (this.inBounds(nx, ny)) {
      this.gameState.player = { x: nx, y: ny };
      this.gameState.trail.add(`${nx},${ny}`);

      const onWall = this.gameState.walls[ny][nx];

      // Check collision with enemies
      const hit = this.gameState.enemies.some(e => 
        this.gameState.trail.has(`${Math.round(e.x)},${Math.round(e.y)}`)
      );
      
      if (hit) {
        this.gameState.lives--;
        if (this.gameState.lives <= 0) {
          this.gameState.gameOver = true;
          this.gameState.playing = false;
          this.gameState.lives = 0;
          // Show name entry screen with delay to prevent accidental input
          this.gameState.scene = 'NAME_ENTRY';
          this.nameEntry.startTime = Date.now();
        }
        this.gameState.trail = new Set();
        this.gameState.player = { x: 1, y: 1 };
      } else if (onWall && this.gameState.trail.size > 1) {
        // Fill enclosed areas
        const tempWalls = this.gameState.walls.map(r => r.slice());
        this.gameState.trail.forEach(s => {
          const [sx, sy] = s.split(',').map(Number);
          if (tempWalls[sy]) tempWalls[sy][sx] = true;
        });
        
        const keep = this.floodKeep(tempWalls, this.gameState.enemies);
        for (let y = 1; y < GRID_H - 1; y++) {
          for (let x = 1; x < GRID_W - 1; x++) {
            if (!tempWalls[y][x] && !keep[y][x]) {
              tempWalls[y][x] = true;
              scoreGained++;
            }
          }
        }
        this.gameState.walls = tempWalls;
        this.gameState.trail = new Set();
      }
    }
    
    this.gameState.score += scoreGained;
    
    // Check win condition
    let filled = 0;
    for (let y = 0; y < GRID_H; y++) {
      for (let x = 0; x < GRID_W; x++) {
        if (this.gameState.walls[y][x]) filled++;
      }
    }
    
    const pct = Math.round((filled / (GRID_W * GRID_H)) * 100);
    if (!this.gameState.win && pct >= WIN_PCT) {
      this.gameState.win = true;
      this.gameState.playing = false;
      // Automatically advance to next level after a short delay
      setTimeout(() => {
        if (this.gameState.win) {
          this.nextLevel();
        }
      }, 2000); // 2 second delay to show win message
    }
  }

  renderCustomText(ctx, text, x, y, scale = 1) {
    const charW = 5 * scale;
    const charH = 5 * scale;
    const spacing = 1 * scale;
    
    let currentX = x;
    
    for (let i = 0; i < text.length; i++) {
      const matrix = characters[text[i].toUpperCase()] || characters[" "];
      
      for (let py = 0; py < 5; py++) {
        for (let px = 0; px < 5; px++) {
          if (matrix[py][px]) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(
              currentX + px * scale, 
              y + py * scale, 
              scale, 
              scale
            );
          }
        }
      }
      currentX += charW + spacing;
    }
  }

  renderBigText(ctx, text, x, y, animated = false) {
    let currentX = x;
    const spacing = 2; // Space between letters
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      
      if (char === ' ') {
        currentX += 4; // Space width
        continue;
      }
      
      const matrix = lettersBig[char];
      if (!matrix) continue;
      
      // Calculate wave offset if animated
      let waveOffset = 0;
      if (animated) {
        // Create a sine wave effect based on character position and time
        const frequency = 0.8; // Wave frequency
        const amplitude = 2; // Wave height in pixels
        waveOffset = Math.floor(Math.sin((this.tick * 0.15) + (i * frequency)) * amplitude);
      }
      
      // Draw the letter with wave offset
      for (let py = 0; py < matrix.length; py++) {
        for (let px = 0; px < matrix[py].length; px++) {
          if (matrix[py][px]) {
            ctx.fillRect(currentX + px, y + py + waveOffset, 1, 1);
          }
        }
      }
      
      // Move to next letter position
      currentX += matrix[0].length + spacing;
    }
  }

  render(ctx) {
    // Clear canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, this.width, this.height);

    // Render name entry screen
    if (this.gameState.scene === 'NAME_ENTRY') {
      ctx.fillStyle = "#fff";
      
      // Check if we're in the "showing scores" mode
      if (this.nameEntry.showingScores) {
        // Calculate scroll offset based on time (smooth sine wave motion)
        const elapsed = Date.now() - this.nameEntry.scoresDisplayTime;
        const scrollSpeed = 0.0006; // Adjust for slower/faster scrolling
        
        // Calculate how many items can fit on screen
        const lineHeight = 6;
        const visibleLines = Math.floor(this.height / lineHeight);
        const totalScores = this.highScores.length;
        
        // Only scroll if there are more scores than can fit
        if (totalScores > visibleLines) {
          // Calculate max scroll (negative value)
          const maxScroll = -(totalScores - visibleLines) * lineHeight;
          
          // Use sine wave for smooth back-and-forth motion
          // Complete cycle in 10 seconds (matching the display time)
          const scrollProgress = Math.sin(elapsed * scrollSpeed);
          
          // Map sine wave (-1 to 1) to scroll range (0 to maxScroll)
          this.nameEntry.scrollOffset = (scrollProgress * 0.5 + 0.5) * maxScroll;
        } else {
          this.nameEntry.scrollOffset = 0;
        }
        
        // Show high scores list with scrolling
        const startY = 2;
        
        // Display all scores
        for (let i = 0; i < totalScores; i++) {
          const score = this.highScores[i];
          const y = startY + (i * lineHeight) + this.nameEntry.scrollOffset;
          
          // Only render if within visible area (with small margin)
          if (y >= -lineHeight && y < this.height) {
            const scoreText = `${score.name}: ${score.score}`;
            this.renderBigText(ctx, scoreText, 2, Math.round(y));
          }
        }
        
        return;
      }
      
      // Name entry mode - show simple layout
      // "GAME OVER"
      this.renderBigText(ctx, "GAME OVER", 16, 2);
      
      // "SCORE: XXXX"
      const scoreY = 10;
      this.renderBigText(ctx, `SCORE: ${this.gameState.score}`, 2, scoreY);
      
      // "NAME: ABC" with cursor
      const nameY = 18;
      this.renderBigText(ctx, "NAME:", 2, nameY);
      
      const nameStartX = 36;
      const letterSpacing = 8;
      
      for (let i = 0; i < 3; i++) {
        const x = nameStartX + i * letterSpacing;
        
        // Draw letter
        this.renderBigText(ctx, this.nameEntry.name[i], x, nameY);
        
        // Draw cursor (flashing underscore) under current letter
        if (i === this.nameEntry.cursorPos && this.flashState) {
          // Draw a line under the letter
          ctx.fillRect(x, nameY + 6, 5, 1);
        }
      }
      
      return;
    }

    // Render level transition screen
    if (this.gameState.scene === 'LEVEL_TRANSITION') {
      // Only render if flash state is on
      if (this.flashState) {
        ctx.fillStyle = "#fff";
        
        // Render "LEVEL X" text
        const levelText = `LEVEL ${this.currentLevel}`;
        
        // Calculate width for centering
        // Rough calculation: each char is ~5-7 pixels wide with 2 spacing
        // LEVEL = 5+2+5+2+5+2+5+2+5 = 33
        // space = 4
        // number can be 1-2 digits, let's estimate based on digits
        const numDigits = this.currentLevel.toString().length;
        const numberWidth = numDigits * 7; // ~5 pixels + 2 spacing per digit
        const textWidth = 33 + 4 + numberWidth;
        
        const textX = Math.floor((this.width - textWidth) / 2);
        const textY = Math.floor((this.height - 5) / 2); // Center vertically (5 is char height)
        
        this.renderBigText(ctx, levelText, textX, textY, false);
      }
      
      return;
    }

    // Render title screen
    if (this.gameState.scene === 'TITLE') {
      ctx.fillStyle = "#fff";
      
      // Calculate center positions for "PAC XON"
      // PAC = 5+2+5+2+5 = 19 pixels
      // space = 4 pixels
      // XON = 5+2+5+2+5 = 19 pixels
      // Total = 19 + 4 + 19 = 42 pixels
      const titleWidth = 42;
      const titleX = Math.floor((this.width - titleWidth) / 2);
      const titleY = 6;
      
      // Render animated wavy "PAC XON" text
      this.renderBigText(ctx, "PAC XON", titleX, titleY, true);
      
      // Render flashing "START" text
      if (this.flashState) {
        // START = 5+2+5+2+5+2+5+2+5 = 35 pixels
        const startWidth = 35;
        const startX = Math.floor((this.width - startWidth) / 2);
        const startY = 18;
        
        this.renderBigText(ctx, "START", startX, startY);
      }
      
      return;
    }

    // Always render the game field, even during game over or win states
    if (this.gameState.scene === 'PLAYING') {
      ctx.fillStyle = "#fff";
      
      // Draw walls
      for (let y = 0; y < GRID_H; y++) {
        for (let x = 0; x < GRID_W; x++) {
          if (this.gameState.walls[y][x]) {
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
      
      // Draw trail
      this.gameState.trail.forEach(s => {
        const [tx, ty] = s.split(',').map(Number);
        ctx.fillRect(tx, ty, 1, 1);
      });
      
      // Draw enemies
      this.gameState.enemies.forEach(e => {
        ctx.fillRect(Math.round(e.x), Math.round(e.y), 1, 1);
      });
      
      // Draw player (blinking rapidly for visibility)
      if (this.tick % 8 < 4) {
        const px = this.gameState.player.x;
        const py = this.gameState.player.y;
        
        // Check if player is on a filled area (wall or trail)
        const onFilledArea = this.gameState.walls[py][px] || 
                            this.gameState.trail.has(`${px},${py}`);
        
        // Invert player color if on filled area for visibility
        ctx.fillStyle = onFilledArea ? "#000" : "#fff";
        ctx.fillRect(px, py, 1, 1);
        
        // Reset fill style back to white for other elements
        ctx.fillStyle = "#fff";
      }
      
      // Draw lives in top right corner with larger font for better visibility
      const livesText = this.gameState.lives.toString();
      const livesScale = 1.0; // Increased scale for better visibility
      const livesSpacing = 1;
      
      // Calculate lives text width
      let livesWidth = 0;
      for (let char of livesText) {
        if (characters[char]) {
          livesWidth += Math.floor(characters[char][0].length * livesScale) + livesSpacing;
        }
      }
      
      // Position lives in top right (with small margin)
      const livesX = this.width - livesWidth - 1;
      const livesY = 1;
      
      // Render lives text
      this.renderCustomText(ctx, livesText, livesX, livesY, livesScale);
    }
  }

  getStatus() {
    if (this.gameState.scene === 'NAME_ENTRY') {
      if (this.nameEntry.showingScores) {
        const elapsed = Date.now() - this.nameEntry.scoresDisplayTime;
        const remaining = Math.ceil((10000 - elapsed) / 1000);
        return `High Scores • Auto-restart in ${remaining}s`;
      }
      return `Enter your name: ${this.nameEntry.name.join('')} • Use arrows to change letters • Press RIGHT on last letter to submit`;
    }
    
    if (this.gameState.gameOver) {
      return `GAME OVER! Level: ${this.currentLevel} • Final Score: ${this.gameState.score}`;
    }
    
    if (this.gameState.win) {
      return `LEVEL ${this.currentLevel} COMPLETE! Advancing to Level ${this.currentLevel + 1}...`;
    }
    
    if (this.gameState.scene !== 'PLAYING') {
      return '';
    }
    
    let filled = 0;
    for (let y = 0; y < GRID_H; y++) {
      for (let x = 0; x < GRID_W; x++) {
        if (this.gameState.walls[y][x]) filled++;
      }
    }
    
    const pct = Math.round((filled / (GRID_W * GRID_H)) * 100);
    return `Level: ${this.currentLevel} • Score: ${this.gameState.score} • ${pct}% Filled • Lives: ${this.gameState.lives}`;
  }
}