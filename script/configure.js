//*************************************************************************
// App Werte
//*************************************************************************

/**
 * Die Anzeige für den aktuelle Startgrad
 * @type {HTMLElement} Das definierte span Element
 */
var currentDegree = document.getElementById("value-degree");

/**
 * Die Anzeige für die aktuelle Amplitude
 * @type {HTMLElement} Das definierte span Element
 */
var currentAmplitude = document.getElementById("value-amplitude");

/**
 * Die Anzeige für die aktuelle Auflösung
 * @type {HTMLElement} Das definierte span Element
 */
var currentResolution = document.getElementById("value-resolution");

/**
 * Die Einstellung zur Anzeige der überlagerten Sinuswelle
 * @type {boolean}
 */
var showSinusLine = document.getElementById("sinus_line").checked;

//*************************************************************************
// UI Handler
//*************************************************************************

/**
 * Setzt den Wert für den der Startwert (float) der Sinuskurve und
 * initiiert das Neuzeichnen
 */
document.getElementById("degree").oninput = () => {
    Winkelgrad_startValue = parseFloat(document.getElementById("degree").value);
    RefreshWave();
}

/**
 * Setzt den Wert für die Amplitude (float) der Sinuskurve und
 * initiiert das Neuzeichnen
 */
document.getElementById("amplitude").oninput = () => {
    y_scale = parseFloat(document.getElementById("amplitude").value);
    RefreshWave();
}

/**
 * Setzt den Wert für die Auflösung (float) der Sinuskurve und
 * initiiert das Neuzeichnen
 */
document.getElementById("resolution").oninput = () => {
    resolution = parseFloat(document.getElementById("resolution").value);
    RefreshWave();
}

/**
 * Setzt den Wert für die Anzeige der überlagerten Sinuswelle und
 *  * initiiert das Neuzeichnen
 *  */
document.getElementById("sinus_line").onchange = () => {
    showSinusLine = document.getElementById("sinus_line").checked;
    RefreshWave();
}

/***
 * Setzt den angezeigten Text anhand der aktuellen Werte
 */
function setInfoText() {
    currentDegree.innerText = "Aktueller Startwinkel: " + Winkelgrad_startValue.toString() + " °";
    currentAmplitude.innerText = "Aktuelle Amplitude: " + y_scale.toString();
    currentResolution.innerText = "Aktuelle Auflösung: " + resolution.toString();
}

/**
 * Ladet die Seite neu und refreshed die Anwendung
 */
document.getElementById("reset").onclick = () => {
    // Firefox setzt die Werte bei einem einfachen Reload nicht zurück!
    document.getElementById("degree").value = 0;
    document.getElementById("amplitude").value = 100;
    document.getElementById("resolution").value = 4;

    Winkelgrad_startValue = parseFloat(document.getElementById("degree").value);
    y_scale = parseFloat(document.getElementById("amplitude").value);
    resolution = parseFloat(document.getElementById("resolution").value);

    RefreshWave();
}

//*************************************************************************
// interne Werte
//*************************************************************************

/**
 * Hält den anfänglichen Startwert der Sinuskurve beim Start
 * @type {number} Der Startwert
 */
var Winkelgrad_startValue = 0.0; // ==> StartWert

/**
 * Hält den aktuellen Wert zur Skalierung der Amplitude
 * @type {number} Der Skalierungswert
 */
var y_scale = 100; // ==> Amplitude

/**
 * Hält die aktuelle Auflösung (entspricht der Schrittweite bei der Berechnung)
 * @type {number} Die Auflösung
 */
var resolution = 4; // ==> Amplitude


