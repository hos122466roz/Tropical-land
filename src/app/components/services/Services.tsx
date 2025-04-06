import { TfiTruck } from "react-icons/tfi";

const Services = () => {
  return (
    <section className="bg-green-900  md:p-20 p-10 text-center">
      <div className="md:text-4xl text-white font-Dana flex justify-center items-center gap-5">
        <span>

        خرید بیشتر از 2 میلیون = ارسال رایگان
        </span>
        <span>
            
        <TfiTruck size={50}/>
        </span>
      </div>
    </section>
  );
};
export default Services;
