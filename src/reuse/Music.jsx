import { useState } from "react";
export default function Musica({nombre, artista, direccion}) {

    const [btn, setBtn] = useState(true);
    const [src] = useState(new Audio());
    const [play, setPlay] = useState(false);
 
    function changePlay() {
        setPlay(!play);
        setBtn(!btn);
    }

    let srcDataBase = direccion;

        src.src = srcDataBase;
        if (play == true) {
            src.play();
        }
        else {
            src.pause();
        }
    
    return (
        <>
            <section className="music w-12/12 h-12 flex items-center justify-between bg-gray-700 rounded-md " >
                <div className=" play w-auto h-full flex gap-10">

                    <div className="w-14  h-full bg-gray-300 flex items-center justify-center cursor-pointer transition hover:bg-gray-400 rounded-l-md" onClick={changePlay}>
                        
                        {
                            btn ? (
                                <i className="fa-solid fa-play text-white"></i>
                            ): (
                                <i className = "fa-solid fa-pause text-white"></i>
                        )
                       }
                    </div>

                    <div className="flex flex-col" >
                        
                        <h3 className="text-white">{nombre}</h3>
                        <small className=" text-red-300">{artista}</small>    
                        
                    </div>

                </div>
            </section>



        </>
    );
}
    

    
