
const CustomIcon = ({ icon, ...props}) => {
 return (
    <>
      <button
        className="flex items-center justify-center rounded-md shadow-md w-[40px] h-[40px]"
       {...props}
      >
        {icon}
      </button>
    </>
  );
};

export default CustomIcon;
