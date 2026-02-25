const Header = ({children}) => {
    return (
        <div>
            <h1 className={`bg-[url(/Banner-min.jpg)] w-100% h-[500px] pb-20 pt-10 bg-center mt-5`} style={{backgroundSize: '100% 100%'}}>{children}</h1>
        </div>
    );
};

export default Header;