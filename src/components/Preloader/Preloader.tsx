import preloader from '../../assets/frying_pan_edit.png';

export const Preloader = () => {
  return (
    <div className="bg-nav flex flex-col items-center h-screen px-40">
      <img className="object-cover" src={preloader} />
    </div>
  );
};