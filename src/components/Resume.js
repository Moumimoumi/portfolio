import ResumeImg from '../assets/resume.avif'

export default function Resume(){
    const config = {
        link : 'file:///C:/Users/Lenovo/Downloads/MOUMITHA%20S.pdf'
    }


    return <section id='resume' className='flex flex-col md:flex-row px-5 '> 
        <div className='py-5 md:w-1/2 flex justify-center'> 
            <img className='w-[600px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 border-[#cd90e6] mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn' href={config.link} >Download</a></p>
        </div>            
        </div>

    </section>
}