import Music from '../reuse/Music.jsx'
import dataBase from '../data.js';
import '../style/main.css'

let logoIMG = '../img/logo-fondo.png';

export default function Main() {
  
    return (
        <> 
            <div className=" flex w-full main-content">
                <main className='w-9/12 flex flex-col gap-2 overflow-auto p-4'>
                    {dataBase.map((item, index) => (
                        <Music
                                key={index}
                                nombre={item.musicName}
                                artista={item.artis}
                                direccion={item.src}
                        />
                    ))}
                    
                </main>
                <aside className='w-3/12 h-full bg-transparent flex items-center justify-center'>
                    <img src={logoIMG} alt="Music Crap" className=" w-80" />
                </aside>
            </div>
        </>
    )
}