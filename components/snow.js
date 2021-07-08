import ParticleField from 'react-particles-webgl';
import glamorous from 'glamorous';

const config = {
	showCube: false,
	dimension: '3D',
	velocity: 2.5,
	boundaryType: 'passthru',
	antialias: false,
	direction: {
		xMin: -0.6,
		xMax: 0.3,
		yMin: -1,
		yMax: -0.6,
		zMin: -0.6,
		zMax: 0.3
	},
	lines: {
		colorMode: 'solid',
		color: '#ffffff',
		transparency: 0.5,
		limitConnections: true,
		maxConnections: 20,
		minDistance: 200,
		visible: false
	},
	particles: {
		colorMode: 'solid',
		color: '#ffffff',
		transparency: 0.7,
		shape: 'circle',
		boundingBox: 'canvas',
		count: 200,
		minSize: 1,
		maxSize: 40,
		visible: true
	},
	cameraControls: {
		enabled: false,
		enableDamping: true,
		dampingFactor: 0.35,
		enableZoom: false,
		autoRotate: false,
		autoRotateSpeed: 0,
		resetCameraFlag: false
	},
	limitConnections: true,
	maxConnections: 0
};


const SnowWrapper = glamorous.div({
	position: 'fixed',
	top: 0,
	left: 0,
	pointerEvents: 'none',
	height: '100vh',
	width: '100vw',
	zIndex: 2
});

const Snow = () => (
	<SnowWrapper>
		<ParticleField config={config} />
	</SnowWrapper>
);

export default Snow;
