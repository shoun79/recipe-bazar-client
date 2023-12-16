import { Link } from 'react-router-dom';
import carousel01 from './../../../assets/images/carousel01.jpg'
import carousel02 from './../../../assets/images/carousel02.jpg'
import carousel03 from './../../../assets/images/carousel03.jpg'
import carousel04 from './../../../assets/images/carousel04.jpg'
const Hero = () => {
    return (
        <section>
            <div className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">It is even better than
                        an expensive cookery book</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.

                    </p>
                    <div className="flex flex-wrap justify-center">

                        <Link to='/login'>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 hover:bg-gray-900">Login</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* carousel */}

            <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500">
                <div className="carousel ">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img src={carousel04} className="w-full " style={{ height: '500px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={carousel01} className="w-full" style={{ height: '500px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={carousel02} className="w-full " style={{ height: '500px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={carousel03} className="w-full " style={{ height: '500px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;