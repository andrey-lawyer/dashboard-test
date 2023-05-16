import { Customers } from 'components/Customers';
import { Header } from 'components/Header';

export const App = () => {
  return (
    <div className=" grid l:grid-cols-page ">
      <Header />
      <Customers />
    </div>
  );
};
