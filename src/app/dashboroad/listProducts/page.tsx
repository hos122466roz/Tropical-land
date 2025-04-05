
import getProduct from "@/app/actions/getProduct";
import DeleteProduct from "./DeletProduct";

const ListProduct = async () => {
  const products = await getProduct();

  
  if (products.length === 0) {
    <div>
      <h1>محصولی موجود نیست</h1>
    </div>;
  }
  return (
    <div className="rounded-[1.5rem] w-full bg-white boxStyle">
      <h4 className="p-6 text-[24px] border-b border-b-[#ebebeb] font-Dana-medium">
        افزودن محصول
      </h4>
      <table className="w-full my-6">
        <thead className="border-b *:pb-3 border-b-green-600">
          <tr className="*:text-green-700">
            <th>کاور محصول</th>
            <th>عنوان محصول</th>
            <th> دسته بندی</th>
            <th> ویرایش</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr
              key={item.id}
              className=" font-Dana-medium border-b last:border-b-0 border-b-gray-500/20"
            >
              <td>
                <img
                  src={item.imageSrc}
                  alt="cover"
                  className="size-15 object-cover inline-block"
                />
              </td>
              <td> {item.title}</td>
              <td> {item.category}</td>
              <td>
              <DeleteProduct productId={item.id}/>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListProduct;
