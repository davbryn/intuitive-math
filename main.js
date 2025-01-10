/************************************************
 * main.js
 * A simple script to create interactive trig demos
 ************************************************/

/**********************************************
 * Helper Functions
 **********************************************/

/**
 * Converts degrees to radians.
 * @param {number} deg 
 * @returns number
 */
function degToRad(deg) {
  return (deg * Math.PI) / 180;
  }
  
  /**
   * Clear the canvas
   * @param {HTMLCanvasElement} canvas 
   * @param {CanvasRenderingContext2D} ctx 
   */
  function clearCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  /**********************************************
   * Applet 1: Distance from Origin
   **********************************************/
  function drawApplet1(angleDeg) {
  const canvas = document.getElementById("applet1");
  const ctx = canvas.getContext("2d");
  clearCanvas(canvas, ctx);
  
  // Setup
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100; // arbitrary radius for illustration
  
  // Draw axes
  ctx.beginPath();
  ctx.strokeStyle = "#ccc";
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.stroke();
  
  // Draw circle
  ctx.beginPath();
  ctx.strokeStyle = "#557a95";
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  // Convert angle to radians
  const angleRad = degToRad(angleDeg);
  
  // x and y for the point on the circle
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;
  
  // Draw the line from origin
  ctx.beginPath();
  ctx.strokeStyle = "#c06014";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY - y);
  ctx.stroke();

  // Axis lines
  ctx.beginPath();
  ctx.strokeStyle = "#999";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY);   // horizontal
  ctx.moveTo(centerX + x, centerY);
  ctx.lineTo(centerX + x, centerY - y); // vertical
  ctx.stroke();
  
  // Draw the point
  ctx.beginPath();
  ctx.fillStyle = "#c06014";
  ctx.arc(centerX + x, centerY - y, 5, 0, 2 * Math.PI);
  ctx.fill();
  
  // Display numeric readout
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  const dist = Math.sqrt(x*x + y*y).toFixed(2);
  ctx.fillText(`Angle: ${angleDeg}°`, 10, 20);
  ctx.fillText(`Distance = r = √(x² + y²) = ${dist}`, 10, 40);
  }
  
  /**********************************************
   * Applet 2: Ratios (cos and sin)
   **********************************************/
  function drawApplet2(angleDeg) {
  const canvas = document.getElementById("applet2");
  const ctx = canvas.getContext("2d");
  clearCanvas(canvas, ctx);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2 + 20; // Move circle down by 20 pixels
  const radius = 100;

  // Draw circle
  ctx.beginPath();
  ctx.strokeStyle = "#ccc";
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();

  // Convert angle to radians
  const angleRad = degToRad(angleDeg);

  // x and y
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;

  // Axis lines
  ctx.beginPath();
  ctx.strokeStyle = "#ccc";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY);   // horizontal
  ctx.moveTo(centerX + x, centerY);
  ctx.lineTo(centerX + x, centerY - y); // vertical
  ctx.stroke();

  // Hypotenuse line
  ctx.beginPath();
  ctx.strokeStyle = "#c06014";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY - y);
  ctx.stroke();

  // Dot
  ctx.beginPath();
  ctx.fillStyle = "#c06014";
  ctx.arc(centerX + x, centerY - y, 4, 0, 2 * Math.PI);
  ctx.fill();

  // Text info
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  ctx.fillText(`Angle: ${angleDeg}°`, 10, 20);
  const cosVal = (Math.cos(angleRad)).toFixed(2);
  const sinVal = (Math.sin(angleRad)).toFixed(2);
  ctx.fillText(`cos(a) = ${cosVal}, sin(a) = ${sinVal}`, 10, 40);

  // x, y text label
  ctx.fillText(`(x: ${cosVal}, y: ${sinVal})`, centerX + x + 5, centerY - y - 5);
  }
  /**********************************************
   * Applet 3: sin²(a) + cos²(a) = 1
   **********************************************/
  function drawApplet3(angleDeg) {
  const canvas = document.getElementById("applet3");
  const ctx = canvas.getContext("2d");
  clearCanvas(canvas, ctx);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2; 
  const radius = 100;

  // Draw unit circle
  ctx.beginPath();
  ctx.strokeStyle = "#ccc";
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();

  const angleRad = degToRad(angleDeg);
  const cosVal = Math.cos(angleRad);
  const sinVal = Math.sin(angleRad);
  const x = cosVal * radius;
  const y = sinVal * radius;
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  // Draw line to point
  ctx.beginPath();
  ctx.strokeStyle = "#c06014";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY - y);
  ctx.stroke();

  // Dot
  ctx.beginPath();
  ctx.fillStyle = "#c06014";
  ctx.arc(centerX + x, centerY - y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw sin line
  ctx.beginPath();
  ctx.strokeStyle = "#557a95";
  ctx.moveTo(centerX + radius + 20, centerY - radius);
  ctx.lineTo(centerX + radius + 20, centerY + radius);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#557a95";
  ctx.arc(centerX + radius + 20, centerY - y, 4, 0, 2 * Math.PI);
  ctx.fill();

  // Draw sin labels
  ctx.fillStyle = "#000";
  ctx.fillText("sin", centerX + radius + 15, centerY - radius - 15);
  ctx.fillText("1", centerX + radius + 25, centerY - radius + 5);
  ctx.fillText("0", centerX + radius + 25, centerY + 5);
  ctx.fillText("-1", centerX + radius + 25, centerY + radius + 5);
  ctx.fillText(`${sinVal.toFixed(2)}`, centerX + radius + 55, centerY - y);

  // Draw cos line
  ctx.beginPath();
  ctx.strokeStyle = "#557a95";
  ctx.moveTo(centerX - radius, centerY + radius + 20);
  ctx.lineTo(centerX + radius, centerY + radius + 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#557a95";
  ctx.arc(centerX + x, centerY + radius + 20, 4, 0, 2 * Math.PI);
  ctx.fill();

  // Draw cos labels
  ctx.fillStyle = "#000";
  ctx.fillText("cos", centerX - radius - 35, centerY + radius + 25);
  ctx.fillText("-1", centerX - radius - 10, centerY + radius + 35);
  ctx.fillText("0", centerX - 5, centerY + radius + 35);
  ctx.fillText("1", centerX + radius - 5, centerY + radius + 35);
  ctx.fillText(`${cosVal.toFixed(2)}`, centerX + x - 10, centerY + radius + 50);

  // Text
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  ctx.fillText(`Angle: ${angleDeg}°`, 10, 20);

  // The identity
  const lhs = (sinVal * sinVal + cosVal * cosVal).toFixed(2);
  ctx.fillText(`sin²(a) + cos²(a) = ${lhs}`, 10, 40);
  ctx.fillText(`${(sinVal * sinVal).toFixed(2)} + ${(cosVal * cosVal).toFixed(2)} = ${lhs}`, 10, 60);
  }
  
  /**********************************************
   * Applet 4: tan, sec, cot, csc
   **********************************************/
  function drawApplet4(angleDeg) {
  const canvas = document.getElementById("applet4");
  const ctx = canvas.getContext("2d");
  clearCanvas(canvas, ctx);
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;
  
  // Basic circle
  ctx.beginPath();
  ctx.strokeStyle = "#ccc";
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  const angleRad = degToRad(angleDeg);
  const sinVal = Math.sin(angleRad);
  const cosVal = Math.cos(angleRad);
  const x = cosVal * radius;
  const y = sinVal * radius;
  
  // Hypotenuse
  ctx.beginPath();
  ctx.strokeStyle = "#c06014";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY - y);
  ctx.stroke();
  
  // Dot
  ctx.beginPath();
  ctx.fillStyle = "#c06014";
  ctx.arc(centerX + x, centerY - y, 4, 0, 2 * Math.PI);
  ctx.fill();
  
  // Text
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  ctx.fillText(`Angle: ${angleDeg}°`, 10, 20);
  
  // Compute the extra functions (with safe checks for division by zero)
  let tanVal = "undef";
  if (Math.abs(cosVal) > 0.0001) {
    tanVal = (sinVal / cosVal).toFixed(2);
  }
  let secVal = "undef";
  if (Math.abs(cosVal) > 0.0001) {
    secVal = (1 / cosVal).toFixed(2);
  }
  let cotVal = "undef";
  if (Math.abs(sinVal) > 0.0001) {
    cotVal = (cosVal / sinVal).toFixed(2);
  }
  let cscVal = "undef";
  if (Math.abs(sinVal) > 0.0001) {
    cscVal = (1 / sinVal).toFixed(2);
  }
  
  ctx.fillText(`tan(a) = ${tanVal}`, 10, 40);
  ctx.fillText(`sec(a) = ${secVal}`, 10, 60);
  ctx.fillText(`cot(a) = ${cotVal}`, 10, 80);
  ctx.fillText(`csc(a) = ${cscVal}`, 10, 100);
  }
  
  /**********************************************
   * Applet 5: tan²(a) + 1 = sec²(a)
   **********************************************/
  function drawApplet5(angleDeg) {
  const canvas = document.getElementById("applet5");
  const ctx = canvas.getContext("2d");
  clearCanvas(canvas, ctx);
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;
  
  // Draw circle
  ctx.beginPath();
  ctx.strokeStyle = "#ccc";
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  // Convert angle
  const angleRad = degToRad(angleDeg);
  const sinVal = Math.sin(angleRad);
  const cosVal = Math.cos(angleRad);
  const x = cosVal * radius;
  const y = sinVal * radius;
  
  // Hypotenuse
  ctx.beginPath();
  ctx.strokeStyle = "#c06014";
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + x, centerY - y);
  ctx.stroke();
  
  // Dot
  ctx.beginPath();
  ctx.fillStyle = "#c06014";
  ctx.arc(centerX + x, centerY - y, 4, 0, 2 * Math.PI);
  ctx.fill();
  
  // Title
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  ctx.fillText(`Angle: ${angleDeg}°`, 10, 20);
  
  // tan(a) and sec(a)
  let tanVal = "undef";
  let secVal = "undef";
  if (Math.abs(cosVal) > 0.0001) {
    tanVal = sinVal / cosVal;
    secVal = 1 / cosVal;
  }
  
  const tanSquared = tanVal === "undef" ? "∞" : (tanVal * tanVal).toFixed(2);
  const secSquared = secVal === "undef" ? "∞" : (secVal * secVal).toFixed(2);
  
  ctx.fillText(`tan²(a) = ${tanSquared}`, 10, 40);
  ctx.fillText(`sec²(a) = ${secSquared}`, 10, 60);
  
  if (tanVal !== "undef" && secVal !== "undef") {
    const lhs = (tanVal * tanVal + 1).toFixed(2);
    const rhs = (secVal * secVal).toFixed(2);
    ctx.fillText(`tan²(a) + 1 = ${lhs}`, 10, 80);
    ctx.fillText(`sec²(a) = ${rhs}`, 10, 100);
  } else {
    ctx.fillText(`tan²(a) + 1 = sec²(a)`, 10, 80);
  }
  }
  
  /**********************************************
   * INIT
   **********************************************/
  document.addEventListener("DOMContentLoaded", function () {
  // Section 1
  const slider1 = document.getElementById("slider1");
  slider1.addEventListener("input", () => {
    drawApplet1(parseInt(slider1.value, 10));
  });
  drawApplet1(parseInt(slider1.value, 10));
  
  // Section 2
  const slider2 = document.getElementById("slider2");
  slider2.addEventListener("input", () => {
    drawApplet2(parseInt(slider2.value, 10));
  });
  drawApplet2(parseInt(slider2.value, 10));
  
  // Section 3
  const slider3 = document.getElementById("slider3");
  slider3.addEventListener("input", () => {
    drawApplet3(parseInt(slider3.value, 10));
  });
  drawApplet3(parseInt(slider3.value, 10));
  
  // Section 4
  const slider4 = document.getElementById("slider4");
  slider4.addEventListener("input", () => {
    drawApplet4(parseInt(slider4.value, 10));
  });
  drawApplet4(parseInt(slider4.value, 10));
  
  // Section 5
  const slider5 = document.getElementById("slider5");
  slider5.addEventListener("input", () => {
    drawApplet5(parseInt(slider5.value, 10));
  });
  drawApplet5(parseInt(slider5.value, 10));
  });
