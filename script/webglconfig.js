/**
 * Der aktuell gültige WebGL Kontext
 * @type {*} Ein WebGL Kontext
 */
const gl = getContext(0.9, 0.9, 0.9, 1);

/**
 * Erzeugt einen WebGL Kontext mit dem als RGB übergebenen Farbwert als Hintergrund
 * und gibt diesen zurück. Zusätzlich wird der Ausgabebereich vergrößert
 *
 * http://www.ibesora.me/creating-a-webgl2-canvas/
 *
 * @param redVal Der Rotwert
 * @param greenVal Der Grünwert
 * @param blueVal Der Blauwert
 * @param alphaVal Der Aplhawert
 * @returns {*} Einen WebGL Kontext
 */
function getContext(redVal, greenVal, blueVal, alphaVal) {
    // Get the WebGL context
    const canvas = document.getElementById('canvas');

    const gl = canvas.getContext('webgl2');
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clearColor(0.9, 0.9, 0.9, 1);//RGB der Hintergrundfarbe

    return gl;
}

/**
 * Das Aktuell gültige WebGL Programm
 */
const program = gl.createProgram();

/**
 * Initialisiert und konfiguriert die WebGL Anwendung und definiert die Shader und
 * das Programm. Es wird ein gültiger WebGL Kontext erwartet.
 */
function iniWebGLApp() {
    var vsShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vsShader, vertexShaderSource);
    gl.compileShader(vsShader);
    gl.attachShader(program, vsShader);

    var fsShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fsShader, fragmentShaderSouce);
    gl.compileShader(fsShader);
    gl.attachShader(program, fsShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(gl.getShaderInfoLog(vertexShaderSource));
        console.log(gl.getShaderInfoLog(fragmentShaderSouce));
    }

    gl.useProgram(program);

    // start drawing
    RefreshWave();
}