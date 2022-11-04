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

    let n = 40;
    let m = 10;

    let dt = 2 * Math.PI / n;
    let dr = 1;

    let xAlt = 0;
    let yAlt = 0;
    let zAlt = 0;
    /**
     * Füllt alle benötigten Array mit den Positionen und Farbwerten der Vertices.
     */
    for (let i = 0, t = 0; i <= n; i++, t += dt) { // Kreis
        for (let j = 0, r = 0; j <= m; j++, r += dr) { // Strahlen
            let x = r * Math.cos(t);
            let y = r * Math.sin(t);
            let z = 0;

            /**
             * Punkte und Farbe der nächsten Punkte der Sinuswelle ausgeben
             */
            if (xAlt !== 0) {
                pushLine(xAlt);
                pushLine(yAlt);
                pushLine(zAlt);
                pushLine(1.0, 0.0, 0.0, 1);
            }

            pushLine(x);
            pushLine(y);
            pushLine(z);
            pushLine(1.0, 0.0, 0.0, 1);

            /**
             * Kreislinie 1
             */


            /**
             * Punkte sichern
             */
            xAlt = x;
            yAlt = y;
            zAlt = z;
        }
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
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 7 * 4, 0);
    gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 7 * 4, 3 * 4);

    // alte Ausgabe löschen
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Ausgabe Nullinie...
    gl.bufferData(gl.ARRAY_BUFFER, LineVertices, gl.STATIC_DRAW);
    gl.drawArrays(gl.LINES, 0, LineVertices.length / 7);
}

/**
 * Startet die WebGL Anwendung und erste Ausgabe der Grafik
 */
iniWebGLApp();
