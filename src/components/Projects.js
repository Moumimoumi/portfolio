import websiteImg1 from '../assets/eCommerce-Website-Features-1920-x-1080.jpg'
import websiteImg2 from '../assets/movie ticket booking.jpg'
import websiteImg3 from '../assets/lipstick.png'


export default function Projects(){

    const config = {
        projects:[
            {
                link:''
            }
        ]
    }

    return <section id='projects' className="flex flex-col py-20 px-5 justify-cente bg-secondary  text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-[#cd90e6] mb-5 w-[140px] font-bold">Projects</h1>
                <p> These are some of my best project. I have  built with React,MERN and vanila CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg1}/>
                    <div className='project-des'>
                        <p className='text-center px-5 py-5'>Our e-commerce project, built by a team of five, features product browsing, filtering, and secure checkout functionality.</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg2}/>
                    <div className='project-des'>
                        <p className='text-center px-5 py-5'>I developed a movie ticket booking system using JavaScript, allowing users to select movies, choose seats, and book tickets seamlessly. </p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteImg3}/>
                    <div className='project-des'>
                        <p className='text-center px-5 py-5'>I designed a lipstick color selector using Figma, allowing users to visualize and choose different shades in a clean, interactive UI.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}