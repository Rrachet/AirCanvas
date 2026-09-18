# AirCanvas

### Real-time computer-vision interface

AirCanvas explores real-time interaction where **latency, confidence, state and transient failures** matter.

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
Interactive Interface
```

## Engineering focus

- Python
- Computer vision
- MediaPipe hand landmarks
- Temporal smoothing
- Velocity estimation
- Confidence handling
- Tracking-gap prediction
- Temporal gesture voting
- WebSockets
- FastAPI
- Browser interaction

The project is intentionally focused on the engineering problem of turning noisy, real-time sensor input into stable user-visible behaviour.

## Modes

| Mode | Behaviour |
|---|---|
| Draw | Follow fingertip movement and create strokes |
| Shape | Convert rough geometry into cleaner shapes |
| Pointer | Use fingertip as a presentation pointer |
| Laser | Create a temporary emphasis trail |

## Engineering loop

```text
IMPLEMENT
   ↓
TEST
   ↓
OBSERVE
   ↓
MEASURE
   ↓
IMPROVE
```

## Run

```bash
npm install
npm run dev
```

Optional Python service:

```bash
cd backend
python -m venv .venv
# activate the environment
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Portfolio role

**REAL-TIME / COMPUTER VISION — Python, FastAPI and WebSockets**

[Live demo](https://rrachet.github.io/AirCanvas/) · [Source](https://github.com/Rrachet/AirCanvas)

## License

MIT
