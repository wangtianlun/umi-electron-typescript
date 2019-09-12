import { getGlobal } from '../utils/electron';

function Index() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{ getGlobal('title') }</h1>
      <br />
      <br />
      <img src={require('../assets/yay.jpg')} width='400' />
    </div>
  );
}

export default Index;
