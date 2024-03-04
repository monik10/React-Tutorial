
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const dataObject = {
   name: 'Monika',
    id: 'FFE370',
    company: 'Fireflink',
  };

  return (
    <div>
      <ChildComponent data={dataObject} />
    </div>
  );
};

export default ParentComponent;