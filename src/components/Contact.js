export default function Contact(){

    const config = {
        email : 'moumimoumi889@gmail.com',
        // phone : '7708819420'
    }

    return <section id="contact" className='flex flex-col bg-secondary px-5 py-32 text-white '> 
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4  border-[#cd90e6] mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5 text-white'>If you want to discuss more in detail, please contact me</p>
            <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
            {/* <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p> */}
        </div>
    </section>
}