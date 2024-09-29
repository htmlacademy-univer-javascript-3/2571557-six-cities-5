import MainPage from '../pages/MainPage';
import { ICard } from '../model/interfaces';

interface IAppProps {
    apartments: ICard[];
}

function App({ apartments }: IAppProps): JSX.Element {
  return (
    <MainPage apartments={apartments} />
  );
}

export default App;
