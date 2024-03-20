import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import styles from './Canva.module.scss';

const CanvasModel = () => {
    return (
        <Canvas 
        shadows 
        camera={{position: [0, 0, 0], fov: 25}}
        gl={{ preserveDrawingBuffer: true }}
        className={styles.canvaContainer}
        >
            <ambientLight intensity={0.5} />
            <Environment preset="city" />

            <CameraRig>
                <Center>
                    <Shirt />
                </Center>
            </CameraRig>
        </Canvas>
    );
};
export default CanvasModel;