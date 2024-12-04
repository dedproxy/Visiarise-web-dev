const Footer = () => {
  return (
    <footer>
        <div className="flex justify-center items-center">
            <img src="/logo.png" alt="logo" className="h-10 w-auto ml-20 cursor-pointer" />
            <div className="mr-50 ml-auto">
                <nav className="font-poppins flex space-x-8">
                    <h3 className="font-bold text-normal no-underline tracking-wider cursor-pointer">HOME</h3>
                    <h3 className="font-bold text-normal no-underline tracking-wider cursor-pointer">FEATURES</h3>
                    <h3 className="font-bold text-normal no-underline tracking-wider cursor-pointer">PAGE LAYOUTS</h3>
                    <h3 className="font-bold text-normal no-underline tracking-wider cursor-pointer">PAGES</h3>
                    <h3 className="font-bold text-normal no-underline tracking-wider cursor-pointer">STORE</h3>
                </nav>
            </div>
            <div className="flex items-center space-x-4 ml-auto mr-20">
                <img src="/blackfb.png" alt="fb" className="h-6 w-auto ml-4 bg-white cursor-pointer" />
                <img src="/blacktwit.png" alt="fb" className="h-6 w-auto ml-4 bg-white cursor-pointer" />
                <img src="/blackinsta.png" alt="fb" className="h-6 w-auto ml-4 bg-white cursor-pointer" />
                <img src="/blackgmail.png" alt="fb" className="h-6 w-auto ml-4 bg-white cursor-pointer" />
            </div>
        </div>
        <div className="my-10" />
        <div className="w-[90%] m-auto border-white border-b-2 w- mx-auto opacity-25" />
        <div className ="my-5" />
        <div className="text-gray-400 -ml-8">
            &copy;Copyright. All rights reserved
        </div>
    </footer>
  )
}
export default Footer
