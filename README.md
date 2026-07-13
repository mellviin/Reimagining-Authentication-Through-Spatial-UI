# 🔐 VirtuAuth — Reimagining Authentication Through Spatial UI

> An immersive 3D authentication experience that transforms the traditional login screen into an interactive spatial environment using Three.js and WebGL.

<video controls autoplay muted loop width="100%" playsinline>
  <source src="./virtuauth_gif.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)
![WebGL](https://img.shields.io/badge/WebGL-3D-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Project-Completed-success?style=for-the-badge)

---

# 📖 Overview

VirtuAuth explores how immersive web technologies can transform one of the most overlooked parts of an application—the login screen.

Instead of displaying a conventional username and password form, users enter an interactive 3D environment where authentication becomes part of the scene itself.

The project combines **real-time rendering**, **interactive 3D objects**, **cinematic camera movement**, and **traditional authentication workflows** to create a memorable login experience.

Rather than replacing familiar authentication patterns, VirtuAuth enhances them through spatial interaction and environmental storytelling.

---

# ✨ Features

- 🎮 Interactive 3D room
- 🖱️ Object-based authentication
- 🎥 Cinematic camera transitions
- 🚪 Animated security door
- 👤 Animated FBX character
- 💡 Dynamic lighting & shadows
- ✨ Bloom post-processing
- 📺 Canvas-powered LED display
- 🔊 Success & failure audio feedback
- 🎯 Raycast-based interaction
- 🔒 Password-protected authentication
- ⚡ Responsive browser rendering

---

# 🎯 Inspiration

Modern login pages are functional but rarely memorable.

VirtuAuth asks a simple question:

> **Can authentication become an experience instead of just a form?**

The project explores spatial UI concepts while preserving usability, accessibility, and familiar authentication patterns.

---

# 🏗 Architecture

```text
                  User
                    │
                    ▼
           Interactive 3D Scene
                    │
         Raycast Object Detection
                    │
                    ▼
          Password Terminal Click
                    │
                    ▼
           HTML Authentication UI
                    │
          Password Validation
                    │
      ┌─────────────┴─────────────┐
      │                           │
      ▼                           ▼
Wrong Password            Correct Password
      │                           │
 Error Animation        Door Unlock Animation
      │                           │
      ▼                           ▼
 Stay in Scene        Camera Fly-through
```

---

# 🚀 User Flow

```text
Enter 3D Room
      │
      ▼
Explore Environment
      │
      ▼
Hover Password Terminal
      │
      ▼
Click Password Object
      │
      ▼
Password Popup
      │
      ▼
Enter Password
      │
      ▼
Authentication
      │
      ▼
Door Opens
      │
      ▼
Camera Moves Forward
```

---

# ⚙️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Graphics

- Three.js
- WebGL
- FBXLoader
- OrbitControls
- Raycaster

## Rendering

- EffectComposer
- UnrealBloomPass
- CanvasTexture
- Dynamic Lighting
- Shadow Mapping

## Assets

- FBX Models
- Textures
- Audio Effects

---

# 📂 Project Structure

```text
VirtuAuth
│
├── index.html
├── main.js
├── style.css
│
├── models/
│   ├── character.fbx
│   ├── PASSWORD_NI.fbx
│   └── metal_door.fbx
│
├── textures/
│   ├── black.jpg
│   ├── florr.jpg
│   └── metal_texture.jpg
│
├── sounds/
│   ├── success.mp3
│   └── wrong.mp3
│
└── README.md
```

---

# 🎨 Core Features

## Interactive Authentication

Authentication is triggered by interacting with a physical object inside the 3D environment rather than clicking a traditional HTML button.

---

## Raycast-Based Interaction

Objects respond to mouse hover and clicks using Three.js Raycaster, making the environment behave like a spatial interface.

---

## Cinematic Camera

Successful authentication triggers smooth camera transitions instead of abrupt page changes, creating a more immersive experience.

---

## Dynamic LED Display

A virtual LED screen is generated using CanvasTexture, allowing dynamic text to appear on objects within the scene.

---

## Real-Time Rendering

The entire environment is rendered using WebGL with:

- Dynamic lights
- Bloom effects
- Fog
- Shadows
- Animated models

---

# 💻 Installation

Clone the repository.

```bash
git clone https://github.com/mellviin/VirtuAuth-3D-Interactive-Login-Page-.git
```

Navigate into the project.

```bash
cd VirtuAuth-3D-Interactive-Login-Page-
```

Open `index.html` using a local web server.

Example:

```bash
python -m http.server
```

or

```bash
npx serve
```

Then visit:

```
http://localhost:8000
```

---

# 🎮 Controls

| Action | Description |
|---------|-------------|
| Mouse Drag | Rotate Camera |
| Scroll | Zoom |
| Click Password Object | Open Login |
| Enter Password | Authenticate |
| ESC | Close Popup |

---

# 📌 Engineering Highlights

- Interactive 3D user interface
- Spatial authentication concept
- Object picking using Raycasting
- Real-time lighting system
- FBX asset loading
- Animated camera movement
- Canvas-based texture generation
- DOM + WebGL integration
- Browser-based 3D rendering

---

# 📈 Future Improvements

- Backend authentication
- JWT login
- Database integration
- User accounts
- WebXR support
- Mobile optimization
- Voice authentication
- Biometric login animations
- Multiplayer virtual lobby
- React + React Three Fiber migration

---

# 🎓 What I Learned

Building VirtuAuth strengthened my understanding of:

- Three.js architecture
- WebGL rendering
- Real-time graphics
- Spatial UI design
- Raycasting
- Animation systems
- Camera interpolation
- Post-processing effects
- Event-driven interaction
- Integrating HTML with WebGL

---

# 📷 Preview

> Add screenshots or a short GIF here demonstrating:
>
> - Landing scene
> - Hover interaction
> - Password popup
> - Door animation
> - Camera fly-through

---

# 👨‍💻 Author

**Melvin V**

M.Sc. Computer Science

Full-Stack Developer • AI Enthusiast • Creative Frontend Engineer

GitHub:
https://github.com/mellviin

---

## ⭐ If you enjoyed this project, consider giving it a star!