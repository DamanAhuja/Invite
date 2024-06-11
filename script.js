body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #222;
  color: #fff;
  overflow: hidden;
}

.container {
  position: relative;
  height: 100vh;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://github.com/DamanAhuja/Invite/assets/142963733/a01543d4-c770-4774-9fb1-bd5b52f20264');
  background-size: cover;
  filter: blur(5px);
  z-index: -1;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.background.loaded {
  opacity: 1;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #FFD700;
  color: #222;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #FFA500;
}

.timeline-container {
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.timeline-item {
  font-size: 1.2em;
  padding: 10px;
  border-bottom: 1px solid #fff;
  width: 80%;
  text-align: center;
}
