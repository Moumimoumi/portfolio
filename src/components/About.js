import AboutImg from '../assets/about me.avif'

export default function About(){
    return <section className='flex flex-col md:flex-row px-5' id='about'> 
        <div className='py-5 md:w-1/2'> 
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 border-[#cd90e6] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>Hi, My name is Moumitha.I am a Full stack developer. I built Websites with React.js and Tailwind CSS</p>
            <p className='pb-5'>Proficient Full Stack Developer with expertise in building dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)</p>
            <p className='pb-5'>Experienced in Frontend and Backend Development, focused on delivering optimized and user-centric full-stack applications with strong attention to detail and performance.</p>
        </div>            
        </div>

    </section>
}