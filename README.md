# AirCanvas

> **A real-time computer-vision interface for drawing, pointing and explaining ideas with your hand.**

AirCanvas explores what happens when hand tracking, temporal reasoning and a lightweight AR interaction layer become one product experience.

[![Frontend](https://img.shields.io/badge/Frontend-Vite%20%2B%20React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/) [![Vision](https://img.shields.io/badge/Vision-MediaPipe-blue?style=flat-square)](https://ai.google.dev/edge/mediapipe/solutions/guide) [![Backend](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square)](https://fastapi.tiangolo.com/)

## Product problem

A mouse and keyboard are excellent for structured input, but not always for pointing at something during a presentation, sketching an idea while speaking, or explaining a visual concept.

AirCanvas explores a camera-first interaction model:

**See the hand → understand the movement → turn movement into an interface.**

## Current capabilities

| Mode | Purpose |
|---|---|
| Draw | Follow the fingertip and create freehand strokes |
| Shape | Convert rough geometry into cleaner shapes |
| Pointer | Use the fingertip as a presentation pointer |
| Laser | Create a temporary emphasis trail |

## Architecture

```text
Camera
  ↓
MediaPipe Hand Landmarks
  ↓
┌──────────────────┬────────────────────┐
│ Browser Canvas   │ Python Vision Layer│
│ low-latency UI   │ temporal reasoning │
└────────┬─────────┴──────────┬─────────┘
         └──────────┬──────────┘
                    ↓
             AirCanvas Layer
       draw / shape / pointer / laser
```

The browser owns camera access, landmark detection and immediate feedback. The optional Python service handles experimental temporal filtering, gesture reasoning, movement analysis and shape processing.

## Engineering focus

- Temporal fingertip tracking
- Adaptive smoothing
- Velocity estimation
- Confidence handling
- Short tracking-gap prediction
- Temporal gesture voting
- Polygon and shape alignment
- WebSocket communication
- Experimental learning/training path

The project follows a deliberate loop:

**Build → test → observe → measure → improve.**

## Repository structure

```text
backend/              Python vision service
  app/                tracking + FastAPI logic
  training/           experimental training path
docs/                 architecture notes
public/               static assets
src/                  React application
```

## Run the frontend

```bash
npm install
npm run dev
```

Open the Vite URL and allow camera access. Camera APIs require a secure context such as `localhost` or HTTPS.

## Run the optional Python service

```bash
cd backend
python -m venv .venv
```

Windows:

```bash
.venv\Scripts\activate
```

macOS / Linux:

```bash
source .venv/bin/activate
```

Install dependencies and start FastAPI:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The browser-to-Python bridge can use:

```text
VITE_VISION_WS_URL=ws://localhost:8000/ws/vision
```

The frontend can fall back to browser-side vision when the Python service is not configured.

## Roadmap

- [x] Camera input
- [x] Fingertip tracking
- [x] Gesture-gated drawing
- [x] Draw / shape / pointer / laser modes
- [x] Browser-side smoothing
- [x] FastAPI + WebSocket vision channel
- [x] Temporal filtering
- [x] Confidence tracking
- [x] Tracking-gap prediction
- [ ] Reproducible tracking benchmark
- [ ] Training dataset + evaluation pipeline
- [ ] Chrome Manifest V3 extension
- [ ] Browser-tab / meeting integration
- [ ] Shared collaboration

## Product + engineering signal

AirCanvas demonstrates the kind of work I enjoy at the intersection of **product interaction, computer vision, real-time systems and engineering experimentation**.

## Built by

**Amarnath Mishra** — Product Analyst / Product Builder with a full-stack engineering background.

## License

MIT
