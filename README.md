# AirCanvas

> **Real-time computer-vision interface for drawing, pointing and explaining ideas with your hand.**

AirCanvas is a supporting engineering project demonstrating real-time interaction, WebSockets, FastAPI, browser vision and temporal reasoning.

## Engineering signal

The project is useful as evidence that I can reason about applications where **latency, state, confidence and transient failures** matter.

```text
Camera
  ↓
MediaPipe Hand Landmarks
  ↓
Tracking + Confidence
  ↓
Temporal Filtering
  ↓
WebSocket / API Layer
  ↓
React Interface
```

## Current capabilities

| Mode | Purpose |
|---|---|
| Draw | Follow the fingertip and create freehand strokes |
| Shape | Convert rough geometry into cleaner shapes |
| Pointer | Use the fingertip as a presentation pointer |
| Laser | Create a temporary emphasis trail |

## Engineering focus

- Temporal fingertip tracking
- Adaptive smoothing
- Velocity estimation
- Confidence handling
- Tracking-gap prediction
- Temporal gesture voting
- WebSocket communication
- FastAPI service
- Browser-side fallback behaviour

The project follows:

**Build → test → observe → measure → improve.**

## Run the frontend

```bash
npm install
npm run dev
```

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

Then install dependencies and run:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Portfolio role

**SUPPORTING ENGINEERING — real-time systems**

AirCanvas is not the main IBM application-support project. It provides additional evidence of debugging and reasoning about real-time application behaviour, while [ThriiLocal](https://github.com/Rrachet/ThriiLocal), [SupportHub](https://github.com/Rrachet/SupportHub) and [APIAtlas](https://github.com/Rrachet/apiatlas) carry the primary application-operations story.

## License

MIT
