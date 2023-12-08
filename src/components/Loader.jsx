import { Html, useProgress } from '@react-three/drei';


const Loader = () => {
  const { progress } = useProgress();

  return (
    // code to show the percentage load time for the 3D image.
    <Html> 
      <span className= "canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader