/**
 * Hilfsfuktion zum Berechnen der Sinuswerte auf BAsis von Grad
 * @param degree zu berechnender Grad
 * @param y_scale die zu verwendende Skalierung der Amplitude
 * @returns {number} Der skalierte Sinuswert
 */
function sinusFromDegree(degree, y_scale) {
    let radians = degree * Math.PI / 180.0;
    let y_pos = Math.sin(radians) * y_scale;

    return y_pos;
}

/**
 * Baut die Vertices Array für die Linie
 */
function getVerticesPointsArray() {
    /**
     * JavaScript Array für die Liniensegmente
     * @type {Float32Array}
     */
    LineVertices = new Float32Array([]);

    let n = 10;

    let dt = 2 * Math.PI / n;
    let t = 0;
    let r = 45.0;

    /**
     * Füllt alle benötigten Array mit den Positionen und Farbwerten der Vertices.
     */
    for (let i = 0; i <= n;) {
        t = t + dt;
        i++;
        let x = r * Math.cos(t);
        let y = r * Math.sin(t);

        /**
         * Punkte und Farbe der nächsten Punkte der Sinuswelle ausgeben
         */
        pushLine(x);
        pushLine(y);
        pushLine(1.0, 0.0, 0.0, 1);
    }
}

/**
 * Belegt den Ausgabebuffer des aktuellen WebGL Programms mit den aktuellen Daten neu und zeichnet die
 * Ausgabe. Das WebGL Programm muss zuvor bereits initialisiert und konfiguriert worden sein.
 */
function RefreshWave() {
    // Arrays für neue Ausgabe füllen
    getVerticesPointsArray();

    // Buffer für die Punkte erzeugen und laden
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

    // posAttrib erzeugen und verwenden
    var aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(program, 'aColor');
    gl.enableVertexAttribArray(aColor);

    // Zeiger erzeugen und konfigurieren
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 6 * 4, 0);
    gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 6 * 4, 2 * 4);

    // alte Ausgabe löschen
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Ausgabe Nullinie...
    gl.bufferData(gl.ARRAY_BUFFER, LineVertices, gl.STATIC_DRAW);
    gl.drawArrays(gl.LINE_STRIP, 0, LineVertices.length / 6);
}

/**
 * Startet die WebGL Anwendung und erste Ausgabe der Grafik
 */
iniWebGLApp();
