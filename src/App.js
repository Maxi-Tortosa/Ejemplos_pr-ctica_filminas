import './App.css';

import Comp1 from './Components/Componentización/Comp1';
import Comp2 from './Components/Componentización/Comp2';
import ReactMemo from './Components/ReactMemo/ReactMemo';
import Render1 from './Components/RenderizaciónCondicional/Render1';
import Render2 from './Components/RenderizaciónCondicional/Render2';
import Render3 from './Components/RenderizaciónCondicional/Render3';
import RenderOtrasOpciones from './Components/RenderizaciónCondicional/RenderOtrasOpciones';

function App() {
	const item = { id: '1', modifyDate: '24/05/2023' };

	return (
		<>
			{/* COMPONENTIZACIÓN */}

			{/* <h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				Ejemplo de creación de componente{' '}
				<span style={{ fontSize: '32px' }}>dentro de otro componente</span>
			</h1>
			<Comp1 />
			<h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				Ejemplo de creación de componente
				<span style={{ fontSize: '32px' }}> con importación en otro </span>
			</h1>

			<Comp2 />*/}

			{/* RENDERIZADO CONDICIONAL */}

			{/* <h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				Renderizado condicional #1
			</h1>
			<Render1 /> */}

			{/* <h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				Renderizado condicional #2
			</h1>
			<Render2 /> */}
			{/* 
			<h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				Renderizado condicional #3
			</h1>
			<Render3 /> */}

			{/* <h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				Renderizado otras opciones
			</h1>
			<RenderOtrasOpciones /> */}

			<h1 style={{ fontSize: '24px', textAlign: 'center', color: 'blue' }}>
				React Memo
			</h1>
			<ReactMemo item={item} />
		</>
	);
}

export default App;
