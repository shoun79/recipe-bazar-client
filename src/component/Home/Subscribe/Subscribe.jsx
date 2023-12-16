import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="subscribe mt-8 ">
            <div className='px-4 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-24   text-white'>
                <h2 className='text-4xl font-bold'>Subscribe to our Newsletter</h2>
                <p className='mt-2'>Fusce id velit placerat, efficitur libero <br />  placerat, sodales ante.   Curabitur <br /> sed erosat orci congue vestibulum.</p>
                <button className="btn bg-gray-800 text-gray-100 hover:bg-gray-950  mt-2 rounded-xl px-8">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;