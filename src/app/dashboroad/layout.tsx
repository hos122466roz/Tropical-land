import Aside from "../profile/aside/Aside";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex ">
      <Aside />
      <div className="bg-[#f6f7f9] mt-24 mr-[20%] w-[80%] min-h-[100vh] p-10 ">{children}</div>
    </section>
  );
};
export default RootLayout;
