import HeroImg from '../assets/hero.webp';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";


export default function Hero(){

    const config = {
        social:{
            twitter:'#',
            facebook:'#',
            Linkedin:'#'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-black text-6xl font-hero-Font'>Hi, <br/> Im Moumi
            <p className='text-2xl'>Im a Full-stck developer</p>
            </h1>
            <div className='flex py-10'>
                <a href="{config.social.twitter}" className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href="{config.social.facebok}"className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href="{config.social.Linkedin}" className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
        </div>        
        <img className='md:w-1/3' src={HeroImg}/>        
    </section>
}