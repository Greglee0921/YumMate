import preloader from '../../assets/frying_pan_edit.png';

export const Preloader = () => {
  window.scrollTo(0, 0);
  return (
    <div className="bg-nav flex flex-col justify-center items-center h-[91vh] lg:px-40">
      <img className="" src={preloader} />
    </div>
  );
};
