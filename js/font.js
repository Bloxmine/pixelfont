    // --- CHARACTER DATA ---
    const characters = {
    "0":[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]],"1":[[1,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],"2":[[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1]],"3":[[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1]],"4":[[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1]],"5":[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,0]],"6":[[1,1,1,1,0],[1,0,0,0,0],[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1]],"7":[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0]],"8":[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[0,1,1,1,1]],"9":[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1]],"A":[[0,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],"B":[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1]],"C":[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],"D":[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]],"E":[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,1,1,1]],"F":[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0]],"G":[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,1,1],[1,0,0,0,1],[1,1,1,1,1]],"H":[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],"I":[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],"J":[[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1]],"K":[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1]],"L":[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],"M":[[0,1,1,1,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,0,0,1]],"N":[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],"O":[[0,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],"P":[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]],"Q":[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[1,1,1,0,1]],"R":[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1]],"S":[[0,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,0]],"T":[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],"U":[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],"V":[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],"W":[[1,0,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,1,1,1,0]],"X":[[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1]],"Y":[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0]],"Z":[[1,1,1,1,1],[0,0,0,0,1],[0,1,1,1,0],[1,0,0,0,0],[1,1,1,1,1]],"?":[[1,1,1,1,1],[0,0,0,0,1],[0,0,1,1,1],[0,0,0,0,0],[0,0,1,0,0]],"!":[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0]],"(": [[0,0,0,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,1,1]],")":[[1,1,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,0,0,0]],"[":[[0,0,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,1,1]],"]":[[1,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,0,0]],"{":[[0,0,1,1,1],[0,0,1,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,1,1,1]],"}":[[1,1,1,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,1,0,0],[1,1,1,0,0]],",":[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],".":[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0]],":":[[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0]],";":[[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]]," ":[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],"-":[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]],"^":[[1,0,0,0,1],[1,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,1]],"~":[[1,0,1,1,1],[1,0,0,0,1],[1,0,1,1,1],[0,0,0,0,0],[1,0,0,1,0]]
    };

    // --- Dots grid ---
    const GRID_WIDTH = 84;
    const GRID_HEIGHT = 28;
    const canvas = document.getElementById('clockCanvas');
    const ctx = canvas.getContext('2d');
    const PIXEL_SIZE = canvas.width / GRID_WIDTH;
    const DOT_RADIUS = PIXEL_SIZE * 0.45;
    const DOT_COLOR = '#e0e0e0';

    // --- DOM Elements ---
    const textInput = document.getElementById('textInput');
    const animationTypeSelect = document.getElementById('animationType');
    const animationDirectionSelect = document.getElementById('animationDirection');
    const animationSpeedSlider = document.getElementById('animationSpeed');

    // --- Text config ---
    const CHAR_WIDTH = 5;
    const CHAR_SPACING = 1;

    // --- Animation State ---
    let textPositionX = GRID_WIDTH;
    let frameCounter = 0;
    let rainDrops = [];

    // --- Functions ---
    function drawTextOnGrid(grid, text, startX, startY, animation, speed, frame) {
        const upperText = text.toUpperCase();
        let currentX = Math.round(startX);

        for (let i = 0; i < upperText.length; i++) {
            const char = upperText[i];
            const charData = characters[char] || characters['?'];

            let yOffset = 0;
            switch(animation) {
                case 'wavy':
                    yOffset = Math.sin(frame * speed * 0.1 + i * 0.5) * 2;
                    break;
                case 'bounce':
                    yOffset = Math.abs(Math.sin(frame * speed * 0.1 + i * 0.5)) * 4;
                    break;
                case 'rain':
                     if (!rainDrops[i]) {
                        rainDrops[i] = { y: -5, finalY: startY, speed: Math.random() * 0.1 + 0.1, settled: false };
                    }
                    if (!rainDrops[i].settled) {
                        rainDrops[i].y += rainDrops[i].speed * speed;
                        if (rainDrops[i].y >= rainDrops[i].finalY) {
                            rainDrops[i].y = rainDrops[i].finalY;
                            rainDrops[i].settled = true;
                        }
                    }
                    startY = rainDrops[i].y;
                    break;
            }

            for (let y = 0; y < charData.length; y++) {
                for (let x = 0; x < charData[y].length; x++) {
                    if (charData[y][x] === 1) {
                        const gridX = currentX + x;
                        const gridY = Math.round(startY + y - yOffset);
                        if (gridY >= 0 && gridY < GRID_HEIGHT && gridX >= 0 && gridX < GRID_WIDTH) {
                            grid[gridY][gridX] = 1;
                        }
                    }
                }
            }
            currentX += CHAR_WIDTH + CHAR_SPACING;
        }
    }

    textInput.addEventListener('input', () => {
        rainDrops = [];
    });

    function renderGrid(grid) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = DOT_COLOR;
        for (let y = 0; y < GRID_HEIGHT; y++) {
            for (let x = 0; x < GRID_WIDTH; x++) {
                if (grid[y][x] === 1) {
                    ctx.beginPath();
                    const canvasX = x * PIXEL_SIZE + PIXEL_SIZE / 2;
                    const canvasY = y * PIXEL_SIZE + PIXEL_SIZE / 2;
                    ctx.arc(canvasX, canvasY, DOT_RADIUS, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }

    // Create a grid with all dots present (background)
    function createDotsGrid() {
        const grid = [];
        for (let y = 0; y < GRID_HEIGHT; y++) {
            grid[y] = [];
            for (let x = 0; x < GRID_WIDTH; x++) {
                grid[y][x] = 0;
            }
        }
        return grid;
    }

    function animate() {
        const scrollText = textInput.value;
        const animationType = animationTypeSelect.value;
        const direction = animationDirectionSelect.value;
        const speed = parseFloat(animationSpeedSlider.value) / 10;

        // Dots grid (background dots)
        const frameGrid = createDotsGrid();
        for (let y = 0; y < GRID_HEIGHT; y++) {
            for (let x = 0; x < GRID_WIDTH; x++) {
                frameGrid[y][x] = 0.5; // Use 0.5 for background dots
            }
        }

        // --- Update and draw text ---
        const textWidth = scrollText.length * (CHAR_WIDTH + CHAR_SPACING);
        // Center vertically
        const CHAR_HEIGHT = 5;
        let textYPosition = Math.round((GRID_HEIGHT - CHAR_HEIGHT) / 2);

        if (animationType === 'scroll') {
            if (direction === 'left') {
                textPositionX -= speed;
                if (textPositionX < -textWidth) {
                    textPositionX = GRID_WIDTH;
                }
            } else {
                textPositionX += speed;
                if (textPositionX > GRID_WIDTH) {
                    textPositionX = -textWidth;
                }
            }
        } else {
            textPositionX = (GRID_WIDTH - textWidth) / 2;
        }

        drawTextOnGrid(frameGrid, scrollText, textPositionX, textYPosition, animationType, speed, frameCounter);

        // --- Render final grid ---
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < GRID_HEIGHT; y++) {
            for (let x = 0; x < GRID_WIDTH; x++) {
                ctx.beginPath();
                const canvasX = x * PIXEL_SIZE + PIXEL_SIZE / 2;
                const canvasY = y * PIXEL_SIZE + PIXEL_SIZE / 2;
                if (frameGrid[y][x] === 1) {
                    ctx.fillStyle = DOT_COLOR;
                    ctx.arc(canvasX, canvasY, DOT_RADIUS, 0, Math.PI * 2);
                    ctx.fill();
                } else if (frameGrid[y][x] === 0.5) {
                    ctx.fillStyle = "#444";
                    ctx.arc(canvasX, canvasY, DOT_RADIUS * 0.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        frameCounter++;
        requestAnimationFrame(animate);
    }

    animate();