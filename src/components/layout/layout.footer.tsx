const LayoutFooter = () => {
  return (
    <footer className="bg-gray-dark text-white-light">
      <div className="container grid grid-cols-1 gap-12 py-16 sm:grid-cols-2">
        {/* Name & Links */}
        <div className="flex h-full flex-col justify-between gap-8">
          <h2 className="text-2xl text-red">Ali Woods</h2>
          <p>Live Shows</p>
          <p>Videos</p>
          <p>Newsletter</p>
        </div>
        {/* Contact */}
        <div className="flex flex-col justify-between gap-8">
          <div className="flex gap-16 text-red sm:justify-end ">
            Socials Here
          </div>
          <div className="sm:text-end">
            <p className="font-bold">Contact</p>
            <p>Sammple Contact Information</p>
            <p>Name</p>
            <p>Address</p>
            <p>0284652048</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
