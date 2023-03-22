import ReactDom from 'react-dom/client';

const container = (
    <div className='container'>
        <h1 id='header1' key='1'>Header 1 using JSX</h1>
        <h2 id='header2' key='2'>Header 2 using JSX</h2>
        <h3 id='header3' key='3'>Header 3 using JSX</h3>
    </div>
)

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(container);