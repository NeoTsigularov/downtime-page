const html = String.raw`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Temporary Downtime</title>

<style>
:root {
  --cream: #fff7e9;
  --paper: #fffdfa;
  --ink: #29104d;
  --soft: #675c7d;
  --purple: #8c58ff;
  --pink: #ff459c;
  --yellow: #ffd957;
  --mint: #d9f8ec;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  min-height: 100vh;
  overflow-x: hidden;

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  color: var(--ink);

  background:
    radial-gradient(circle at 12% 18%, rgba(255, 80, 150, .11), transparent 25rem),
    radial-gradient(circle at 90% 82%, rgba(60, 220, 180, .12), transparent 27rem),
    var(--cream);
}

/* background blobs */

.blob {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(.2px);
}

.blob.one {
  width: 260px;
  height: 260px;
  background: #ffd4dc;
  left: -35px;
  top: 55px;

  animation: floatOne 7s ease-in-out infinite alternate;
}

.blob.two {
  width: 330px;
  height: 330px;
  background: #d7f5ea;
  right: -90px;
  bottom: -30px;

  animation: floatTwo 9s ease-in-out infinite alternate;
}

.big-star {
  position: fixed;
  left: 9%;
  top: 13%;

  color: var(--pink);
  font-size: 72px;

  animation: starFloat 4s ease-in-out infinite;
}

/* main layout */

.page {
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 55px 22px;
}

.wrapper {
  width: min(820px, 100%);
  position: relative;

  perspective: 1200px;

  animation: enter 1s cubic-bezier(.16,1,.3,1) both;
}

.shadow {
  position: absolute;
  inset: 12px -12px -12px 12px;

  border-radius: 34px;

  background: var(--ink);

  z-index: -1;
}

.card {
  position: relative;

  overflow: hidden;

  min-height: 870px;

  background:
    linear-gradient(
      120deg,
      rgba(255,255,255,.9),
      rgba(255,255,255,.4)
    ),
    var(--paper);

  border: 2px solid var(--ink);
  border-radius: 34px;

  padding: 64px;

  transform-style: preserve-3d;

  transition: transform .15s ease-out;

  box-shadow:
    0 35px 80px rgba(41, 16, 77, .09);
}

/* shine animation */

.card::after {
  content: "";

  position: absolute;
  inset: -80%;

  background:
    linear-gradient(
      115deg,
      transparent 43%,
      rgba(255,255,255,.72) 50%,
      transparent 57%
    );

  transform: translateX(-60%) rotate(10deg);

  animation: shine 8s ease-in-out infinite;

  pointer-events: none;
}

/* top */

.top {
  position: relative;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: itemIn .9s .15s both;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 22px;
  font-weight: 900;
  letter-spacing: -.05em;
}

.logo-star {
  color: var(--pink);
  font-size: 28px;

  animation: spinSpark 3.4s ease-in-out infinite;
}

.logo-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: var(--pink);

  margin-top: 9px;
  margin-left: -4px;
}

.status {
  display: flex;
  gap: 10px;
  align-items: center;

  background: var(--yellow);

  border: 1.5px solid var(--ink);
  border-radius: 999px;

  padding: 10px 16px;

  font-family: monospace;
  font-size: 12px;
  font-weight: 800;

  letter-spacing: .07em;
  text-transform: uppercase;
}

.status-dot {
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: #ff6846;

  box-shadow:
    0 0 0 5px rgba(255,104,70,.18);

  animation: pulseOrange 1.7s ease-in-out infinite;
}

/* circles */

.yellow-circle {
  position: absolute;

  width: 165px;
  height: 165px;

  right: -70px;
  top: 175px;

  border: 2px solid var(--ink);
  border-radius: 50%;

  background: var(--yellow);

  animation: circleMove 6s ease-in-out infinite;
}

.pink-circle {
  position: absolute;

  width: 160px;
  height: 160px;

  right: 65px;
  bottom: -95px;

  border: 2px solid var(--ink);
  border-radius: 50%;

  background: var(--pink);

  animation: circleMove 7s -2s ease-in-out infinite;
}

/* content */

.content {
  position: relative;
  z-index: 4;

  margin-top: 125px;

  max-width: 610px;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--purple);

  font-family: monospace;
  font-weight: 800;

  letter-spacing: .15em;
  text-transform: uppercase;

  margin-bottom: 28px;

  animation: itemIn .9s .3s both;
}

.eyebrow span {
  color: var(--pink);
  font-size: 20px;
}

h1 {
  margin: 0;

  font-size: clamp(58px, 7vw, 82px);
  line-height: .92;

  font-weight: 950;
  letter-spacing: -.075em;

  animation: itemIn .9s .42s both;
}

.dark {
  display: block;
}

.gradient {
  display: inline-block;

  color: transparent;

  background:
    linear-gradient(
      90deg,
      #8b55ff,
      #a068ff,
      #7a4df0,
      #ad7aff
    );

  background-size: 250% auto;

  -webkit-background-clip: text;
  background-clip: text;

  animation: gradientMove 5s ease-in-out infinite;
}

.description {
  max-width: 580px;

  margin-top: 34px;

  color: var(--soft);

  font-size: 18px;
  line-height: 1.75;

  animation: itemIn .9s .55s both;
}

.waiting {
  margin-top: 28px;

  width: fit-content;

  display: flex;
  align-items: center;
  gap: 10px;

  border: 1.5px solid var(--ink);
  border-radius: 999px;

  padding: 11px 18px;

  background:
    linear-gradient(
      90deg,
      #ddfaed,
      #e7f7ff
    );

  font-family: monospace;
  font-size: 11px;
  font-weight: 800;

  animation: itemIn .9s .68s both;
}

.green {
  width: 11px;
  height: 11px;

  border-radius: 50%;

  background: #52dca5;

  animation: pulseGreen 1.8s ease-in-out infinite;
}

/* footer */

.footer {
  position: absolute;

  left: 64px;
  right: 64px;
  bottom: 64px;

  border-top: 1px solid rgba(41,16,77,.16);

  padding-top: 18px;

  display: flex;
  justify-content: space-between;

  color: #958ba0;

  font-family: monospace;
  font-size: 11px;

  text-transform: uppercase;
  letter-spacing: .1em;

  animation: itemIn .9s .8s both;
}

.footer b {
  color: var(--pink);
}

/* animations */

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(55px) scale(.94);
    filter: blur(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@keyframes itemIn {
  from {
    opacity: 0;
    transform: translateY(25px);
    filter: blur(7px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes gradientMove {
  0%, 100% {
    background-position: 0% center;
  }

  50% {
    background-position: 100% center;
  }
}

@keyframes floatOne {
  from {
    transform: translate(-10px, -10px) scale(1);
  }

  to {
    transform: translate(20px, 15px) scale(1.05);
  }
}

@keyframes floatTwo {
  from {
    transform: translate(0, 0) scale(1);
  }

  to {
    transform: translate(-20px, -20px) scale(1.04);
  }
}

@keyframes starFloat {
  0%,100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(8deg);
  }
}

@keyframes spinSpark {
  0%,100% {
    transform: rotate(0) scale(1);
  }

  50% {
    transform: rotate(15deg) scale(1.18);
  }
}

@keyframes circleMove {
  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-13px);
  }
}

@keyframes pulseOrange {
  0%,100% {
    box-shadow: 0 0 0 4px rgba(255,104,70,.17);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(255,104,70,0);
  }
}

@keyframes pulseGreen {
  0%,100% {
    box-shadow: 0 0 0 4px rgba(82,220,165,.2);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(82,220,165,0);
  }
}

@keyframes shine {
  0%,65% {
    transform: translateX(-65%) rotate(10deg);
  }

  80%,100% {
    transform: translateX(65%) rotate(10deg);
  }
}

/* mobile */

@media (max-width: 680px) {

  .page {
    padding: 25px 14px;
  }

  .card {
    min-height: 760px;

    padding: 34px 26px;

    border-radius: 26px;
  }

  .shadow {
    inset: 8px -7px -9px 7px;
  }

  .logo {
    font-size: 18px;
  }

  .status {
    font-size: 9px;
    padding: 8px 10px;
  }

  .content {
    margin-top: 115px;
  }

  h1 {
    font-size: clamp(48px, 14vw, 68px);
  }

  .description {
    font-size: 16px;
  }

  .yellow-circle {
    width: 115px;
    height: 115px;

    right: -60px;
  }

  .pink-circle {
    width: 115px;
    height: 115px;

    right: 25px;
  }

  .footer {
    left: 26px;
    right: 26px;
    bottom: 32px;

    font-size: 9px;
  }
}
</style>
</head>

<body>

<div class="blob one"></div>
<div class="blob two"></div>

<div class="big-star">✦</div>

<main class="page">

  <div class="wrapper" id="wrapper">

    <div class="shadow"></div>

    <section class="card" id="card">

      <div class="yellow-circle"></div>
      <div class="pink-circle"></div>

      <header class="top">

        <div class="logo">
          <span class="logo-star">✦</span>
          <span>NEO</span>
          <span class="logo-dot"></span>
        </div>

        <div class="status">
          <span class="status-dot"></span>
          Temporary downtime
        </div>

      </header>

      <div class="content">

        <div class="eyebrow">
          QUICK UPDATE
          <span>✳</span>
        </div>

        <h1>
          <span class="dark">
            A little pause.
          </span>

          <span class="gradient">
            We'll be back.
          </span>
        </h1>

        <p class="description">
          Hello! We're currently experiencing a temporary service interruption.
          We're waiting for further information from the electricity company
          and we'll share an update as soon as we know more.
          Thank you for your patience.
        </p>

        <div class="waiting">
          <span class="green"></span>

          Waiting for an update

          <span style="color:#8c58ff">
            ✦
          </span>
        </div>

      </div>

      <footer class="footer">

        <span>
          NEO TSIGULAROV
        </span>

        <span>
          Thanks for waiting
          <b>✦</b>
        </span>

      </footer>

    </section>

  </div>

</main>

<script>
const wrapper =
  document.getElementById("wrapper");

const card =
  document.getElementById("card");

let tx = 0;
let ty = 0;

let cx = 0;
let cy = 0;

wrapper.addEventListener(
  "mousemove",
  function(event) {

    const rect =
      wrapper.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width - 0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height - 0.5;

    tx = x * 3;
    ty = y * -3;
  }
);

wrapper.addEventListener(
  "mouseleave",
  function() {

    tx = 0;
    ty = 0;
  }
);

function frame() {

  cx +=
    (tx - cx) * 0.07;

  cy +=
    (ty - cy) * 0.07;

  card.style.transform =
    "rotateY(" +
    cx +
    "deg) rotateX(" +
    cy +
    "deg)";

  requestAnimationFrame(frame);
}

frame();
</script>

</body>
</html>
`;

export default {

  async fetch() {

    return new Response(
      html,
      {
        status: 503,

        headers: {

          "Content-Type":
            "text/html; charset=UTF-8",

          "Cache-Control":
            "no-store",

          "Retry-After":
            "3600",

          "X-Robots-Tag":
            "noindex"
        }
      }
    );
  }
};
