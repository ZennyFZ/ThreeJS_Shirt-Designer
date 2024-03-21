import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  position: [0, 0, 5],
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;