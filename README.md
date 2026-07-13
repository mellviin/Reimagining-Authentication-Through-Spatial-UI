# 🔐 VirtuAuth — Reimagining Authentication Through Spatial UI

<p align="center">
  <img src="./virtuauth_preview.gif" alt="VirtuAuth Interactive Demo" width="100%">
</p>

<p align="center">
An immersive <strong>3D authentication experience</strong> that transforms the traditional login screen into an interactive spatial environment using <strong>Three.js</strong>, <strong>WebGL</strong>, and cinematic UI design.
</p>

<p align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)
![WebGL](https://img.shields.io/badge/WebGL-3D-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

</p>

---

# 🎬 Interactive Demo

> Experience authentication through an immersive 3D environment where users interact with objects, animations, and cinematic camera transitions instead of a conventional login form.

The animation above showcases:

- 🎮 Interactive 3D environment
- 🖱️ Raycast-based object interaction
- 🔐 Password terminal activation
- 🚪 Animated security door
- 🎥 Cinematic camera fly-through
- ✨ Real-time lighting and bloom effects
- 📺 Dynamic LED display
- 🔊 Audio-based success and error feedback

---

# 📖 Overview

VirtuAuth reimagines one of the most familiar interactions in modern software—the login screen.

Instead of presenting a static username and password form, users enter an immersive 3D environment where authentication becomes part of the experience itself.

Built with **Three.js** and **WebGL**, the project combines cinematic storytelling, spatial interaction, and modern web graphics to create a memorable authentication workflow while preserving the familiarity of traditional login systems.

Rather than replacing authentication, VirtuAuth enhances it through immersive design.

---

# ✨ Key Features

- 🎮 Interactive 3D environment
- 🖱️ Object-based authentication
- 🎯 Raycaster-driven interaction
- 🎥 Cinematic camera transitions
- 🚪 Animated security door
- 👤 FBX animated character
- 💡 Dynamic lighting & shadows
- ✨ Unreal Bloom post-processing
- 📺 CanvasTexture-powered LED display
- 🔊 Audio feedback for success & failure
- ⚡ Real-time WebGL rendering
- 📱 Responsive browser experience

---

# 🎯 Inspiration

Most authentication systems prioritize functionality over experience.

VirtuAuth explores a simple question:

> **What if authentication felt like entering a world instead of filling out a form?**

The project demonstrates how immersive interfaces can improve user engagement while maintaining familiar authentication workflows.

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
 Wrong Password          Correct Password
      │                           │
 Error Animation       Door Unlock Animation
      │                           │
      ▼                           ▼
 Stay in Scene      Cinematic Camera Fly-through
```

---

# 🚀 User Journey

```text
Launch Experience
        │
        ▼
Explore 3D Environment
        │
        ▼
Hover Interactive Terminal
        │
        ▼
Click Password Object
        │
        ▼
Authentication Popup
        │
        ▼
Enter Password
        │
        ▼
Validation
        │
        ▼
Door Unlock Animation
        │
        ▼
Camera Fly-through
```

---

# ⚙️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Graphics & Rendering

- Three.js
- WebGL
- EffectComposer
- UnrealBloomPass
- CanvasTexture

### Interaction

- Raycaster
- OrbitControls
- FBXLoader

### Assets

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
├── sounds/
├── assets/
│
└── README.md
```

---

# 💡 Engineering Highlights

- Spatial UI authentication concept
- Interactive object selection using Raycasting
- Smooth cinematic camera interpolation
- Dynamic CanvasTexture rendering
- Bloom post-processing pipeline
- Real-time lighting and shadow system
- WebGL + HTML integration
- Modular Three.js scene architecture
- Browser-native 3D rendering

---

# 💻 Installation

Clone the repository:

```bash
git clone https://github.com/mellviin/VirtuAuth-3D-Interactive-Login-Page-.git
```

Navigate to the project:

```bash
cd VirtuAuth-3D-Interactive-Login-Page-
```

Start a local server:

```bash
python -m http.server
```

or

```bash
npx serve
```

Open:

```
http://localhost:8000
```

---

# 🎮 Controls

| Action | Description |
|---------|-------------|
| 🖱 Mouse Drag | Rotate Camera |
| 🔍 Scroll | Zoom |
| 👆 Click Password Terminal | Open Login |
| 🔑 Enter Password | Authenticate |
| ❌ ESC | Close Popup |

---

# 🚀 Future Improvements

- Backend authentication
- JWT & OAuth integration
- Database connectivity
- React + React Three Fiber migration
- WebXR support
- Mobile optimization
- Voice authentication
- Biometric interactions
- Multiplayer virtual lobby

---

# 📚 What I Learned

Through VirtuAuth I gained hands-on experience with:

- Three.js architecture
- WebGL rendering pipeline
- Spatial UI design
- Raycasting & object interaction
- Camera interpolation
- Post-processing effects
- Event-driven programming
- CanvasTexture generation
- Integrating DOM with WebGL
- Building immersive browser experiences

---

# 👨‍💻 Author

## **Melvin V**

**M.Sc. Computer Science**  
**Full-Stack Developer • Creative Frontend Engineer • AI Enthusiast**

**GitHub:**  
https://github.com/mellviin

---

<p align="center">

⭐ **If you found this project interesting, consider giving it a Star!** ⭐

</p>