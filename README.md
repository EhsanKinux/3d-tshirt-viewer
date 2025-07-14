# 3D Viewer

## Overview

3D Viewer is a modern React application that showcases a real-time, interactive 3D t-shirt model using [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) and [Three.js](https://threejs.org/). The viewer features smooth camera controls, dynamic lighting, and the ability to display a logo on different positions of the shirt. The project is built with Vite for lightning-fast development and hot module replacement.

## Features

- **Interactive 3D Model:** View and interact with a 3D t-shirt model rendered in real time.
- **Dynamic Logo Placement:** The logo is displayed on the shirt and cycles through multiple positions (middle, right, left, back) automatically.
- **Smooth Animations:** The shirt rotates smoothly, and camera transitions are responsive to screen size and pointer movement.
- **Modern Stack:** Built with React, Vite, React Three Fiber, Drei, and Valtio for state management.
- **Customizable Colors:** The shirt and background colors are easily adjustable in the code.

## Demo


## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd 3d-viewer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```
Open your browser and navigate to the local server address (usually `http://localhost:5173`).

### Building for Production

```bash
npm run build
```
The production-ready files will be in the `dist` directory.

### Previewing the Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  App.jsx                # Main app entry
  CanvasLayout/          # 3D canvas and layout logic
  components/
    Camera/CameraRig.jsx # Camera controls for 3D scene
    Models/Shirt.jsx     # 3D shirt model and logo logic
  store/                 # State management (Valtio)
  assets/                # Static assets (e.g., logos)
public/
  tshirt.glb             # 3D model file
  react.png              # Default logo
```

## Customization

- **Logo:** By default, the shirt displays `react.png` as the logo. (Currently, there is no UI for uploading a custom logo, but you can change the default image in the code or assets.)
- **Colors:** Adjust the shirt and background colors in `src/store/index.js`.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei](https://docs.pmnd.rs/drei/introduction)
- [Valtio](https://valtio.pmnd.rs/)

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

