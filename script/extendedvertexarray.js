/**
 * Array, das die aktuellen Vertices hält
 * @type {Float32Array} Ein neues Float32 Array
 */
var TriangleVertices = new Float32Array([]);

/**
 * Hilfsfunktion, um im Array vertices dynamisch einen neuen Wert
 * hinzuzufügen
 *
 * https://stackoverflow.com/questions/24410418/push-on-float32array
 */
function pushTriangle() {
    TriangleVertices = new Float32Array([...TriangleVertices, ...arguments]);
}

/**
 * Array, das die aktuellen Vertices für die Linie hält
 * @type {Float32Array} Ein neues Float32 Array
 */
var LineVertices = new Float32Array([]);

/**
 * Hilfsfunktion, um im Array LineVertices dynamisch einen neuen Wert
 * hinzuzufügen
 *
 * https://stackoverflow.com/questions/24410418/push-on-float32array
 */
function pushLine() {
    LineVertices = new Float32Array([...LineVertices, ...arguments]);
}

/**
 * Array, das die aktuellen Vertices für die SinusLinie hält
 * @type {Float32Array} Ein neues Float32 Array
 */
var WaveVertices = new Float32Array([]);

/**
 * Hilfsfunktion, um im Array WaveVertices dynamisch einen neuen Wert
 * hinzuzufügen
 *
 * https://stackoverflow.com/questions/24410418/push-on-float32array
 */
function pushWave() {
    WaveVertices = new Float32Array([...WaveVertices, ...arguments]);
}

