const Logo = () => {
    return (
        <div className="flex justify-center items-center gap-0 lg:gap-2">
            <img className="w-[30%] lg:w-[40%]" src="../Asset/Group.svg" alt="" />
            <div>
                <h1 className="text-[#FF444A] text-lg md:text-2xl lg:text-3xl font-bold">Donation</h1>
                <h3 className="text-xs md:text-base lg:text-lg tracking-[4px] text-neutral-500 font-medium">Campaign</h3>
            </div>
        </div>
    );
};

export default Logo;