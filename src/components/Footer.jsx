export default function Footer() {
    return (
        <>
          <footer className=" h-4 flex items-center justify-center text-white mt-8">
          <span>Todos los  derechos reservados &copy; 2024 | Diseñado por <a href="https://astounding-boba-34e503.netlify.app/" target="_blank" className=" text-orange-700 font-bold">CodeRi</a></span>
          <nav className="flex gap-5 ml-8 text-xl">
            <a href="https://github.com/ghost11000" target="_blank"  className=" hover:scale-90">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://astounding-boba-34e503.netlify.app/" target="_blank" className=" hover:scale-90">
              <i class="fa-solid fa-briefcase" ></i>
            </a>
            <a href="#" className=" hover:scale-90 ">
              <i class="fa-brands fa-instagram" ></i>
            </a>
            <a href="#" className=" hover:scale-90 ">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </nav>
          </footer>
        </>
    );
};