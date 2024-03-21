import { Canvas } from '@react-three/fiber';
import { Environment, Center, Stage, PresentationControls } from '@react-three/drei';

import Shirt from './Shirt';
import styles from './Canva.module.scss';
import state from '../store';
import { useSnapshot } from 'valtio';

const CanvasModel = () => {
    const snap = useSnapshot(state);

    return (
        <Canvas
            shadows
            camera={{ position: snap.position, fov: 65}}
            gl={{ preserveDrawingBuffer: true }}
            className={styles.canvaContainer}
        >
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <PresentationControls speed={1.5} global zoom={0.7} polar={[-1, Math.PI / 2]}>
                <Shirt />
            </PresentationControls>
        </Canvas>
    );
};

export default CanvasModel;
