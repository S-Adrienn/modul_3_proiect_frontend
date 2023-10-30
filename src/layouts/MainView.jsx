import { Outlet } from 'react-router-dom';

function MainView() {
  return (
    <div>
      <Outlet /> {/* Az aloldalak itt jelennek meg */}
    </div>
  );
}

export default MainView;
