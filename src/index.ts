import './styles/index.css';

const number: number[] = [];

window.addEventListener('DOMContentLoaded', () => {
    main()
})

window.addEventListener('keydown', event => {
    const code = event.code.toLowerCase();
    if (code === 'backspace') {
        if (number.length > 0) {
            number.pop();
        }
    } else if (code === 'digit0' || code === 'numpad0') {
        if (number.length > 0 && number.length < 4) {
            number.push(0);
        }
    } else if (code === 'digit1' || code === 'numpad1') {
        if (number.length < 4) {
            number.push(1);
        }
    } else if (code === 'digit2' || code === 'numpad2') {
        if (number.length < 4) {
            number.push(2);
        }
    } else if (code === 'digit3' || code === 'numpad3') {
        if (number.length < 4) {
            number.push(3);
        }
    } else if (code === 'digit4' || code === 'numpad4') {
        if (number.length < 4) {
            number.push(4);
        }
    } else if (code === 'digit5' || code === 'numpad5') {
        if (number.length < 4) {
            number.push(5);
        }
    } else if (code === 'digit6' || code === 'numpad6') {
        if (number.length < 4) {
            number.push(6);
        }
    } else if (code === 'digit7' || code === 'numpad7') {
        if (number.length < 4) {
            number.push(7);
        }
    } else if (code === 'digit8' || code === 'numpad8') {
        if (number.length < 4) {
            number.push(8);
        }
    } else if (code === 'digit9' || code === 'numpad9') {
        if (number.length < 4) {
            number.push(9);
        }
    }
    console.log(JSON.stringify(number))
});

function resize(canvas: HTMLCanvasElement) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
}

function main() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const loop = () => {
        resize(canvas);

        draw(canvas, ctx);

        requestAnimationFrame(loop);
    }

    loop();
}

const DIGITS = [
    {x: 1, y: 1},   //One
    {x: -1, y: 1},  //Ten
    {x: 1, y: -1},  //Hundred
    {x: -1, y: -1}  //Thousand
];

function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    drawBackground(canvas, ctx);

    // Bounding box to bound glyphs
    const scale = 1
    const bbox = {
        position: {
            x: 0,
            y: 0
        },
        width: 200 * scale,
        height: 300 * scale,
    }

    bbox.position.x += (canvas.width / 2) - bbox.width / 2;
    bbox.position.y += (canvas.height / 2) - bbox.height / 2;

    const half = {
        width: bbox.width / 2,
        height: bbox.height / 2,
    };

    const center = {
        width: bbox.position.x + half.width,
        height: bbox.position.y + half.height
    };

    // drawBbox(ctx, bbox);

    drawTitleText(ctx, half, center);

    if (number.length > 0) {
        drawNumberText(ctx, half, center, number.join(''));

        // Glyph style
        ctx.lineWidth = 20;
        ctx.strokeStyle = '#212121';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        drawCenterLine(ctx, half, center);

        let digitIdx = 0;
        for (let i = number.length - 1; i >= 0; i--) {
            const num = number[i];

            if (num === 0) {
                digitIdx++;
            } else if (num === 1) {
                draw1(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 2) {
                draw2(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 3) {
                draw3(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 4) {
                draw4(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 5) {
                draw5(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 6) {
                draw6(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 7) {
                draw7(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 8) {
                draw8(ctx, half, center, DIGITS[digitIdx++]);
            } else if (num === 9) {
                draw9(ctx, half, center, DIGITS[digitIdx++]);
            }
        }

        ctx.stroke();
    }

}

function drawBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBbox(ctx: CanvasRenderingContext2D, bbox: any) {
    ctx.strokeStyle = 'red'
    ctx.lineJoin = 'round';

    ctx.strokeRect(
        bbox.position.x,
        bbox.position.y,
        bbox.width,
        bbox.height
    );
}

function drawTitleText(ctx: CanvasRenderingContext2D, half: any, center: any) {
    ctx.fillStyle = '#212121';
    ctx.font = '120px Gill Sans';

    const title = 'Cistercian Numbers';
    const textWidth = ctx.measureText('Cistercian Numbers').width;

    const width = Math.max(center.width - textWidth / 2, 0)

    ctx.fillText(
        title, 
        width, 
        115,
        ctx.canvas.width * 1
    );
}

function drawNumberText(ctx: CanvasRenderingContext2D, half: any, center: any, number: string) {
    ctx.fillStyle = '#212121';
    ctx.font = '150px Gill Sans';
    ctx.textAlign = 'end';
    const textWidth = ctx.measureText(number).width;

    ctx.fillText(
        number, 
        center.width + textWidth / 2, 
        center.height - half.height * 1.75
    );
}

function drawCenterLine(ctx: CanvasRenderingContext2D, half: any, center: any) {
    ctx.moveTo(
        center.width, 
        center.height + (half.height - ctx.lineWidth / 2)
    );
    ctx.lineTo(
        center.width, 
        center.height - (half.height - ctx.lineWidth / 2)
    );
}

function draw1(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x, 
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
}

function draw2(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - half.height * 0.3 * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x, 
        center.height - half.height * 0.3 * flip.y
    );
}

function draw3(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x, 
        center.height - half.height * 0.3 * flip.y
    );
}

function draw4(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - half.height * 0.3 * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
}

function draw5(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - half.height * 0.3 * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
}

function draw6(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - half.height * 0.3 * flip.y
    )
}

function draw7(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    )
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - half.height * 0.3 * flip.y
    );
}

function draw8(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - half.height * 0.3 * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x, 
        center.height - half.height * 0.3 * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
}

function draw9(ctx: CanvasRenderingContext2D, half: any, center: any, flip: any) {
    ctx.moveTo(
        center.width, 
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x, 
        center.height - (half.height - ctx.lineWidth / 2) * flip.y
    );
    ctx.lineTo(
        center.width + (half.width - ctx.lineWidth / 2) * flip.x,
        center.height - half.height * 0.3 * flip.y
    );
    ctx.lineTo(
        center.width, 
        center.height - half.height * 0.3 * flip.y
    );
}