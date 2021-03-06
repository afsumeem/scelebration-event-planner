import galleryImg1 from "../assets/images/gallery-1.png";
import galleryImg2 from "../assets/images/gallery-1.1.png";
import galleryImg3 from "../assets/images/gallery-1.2.png";
import galleryImg4 from "../assets/images/gallery-2.jpg";
import galleryImg5 from "../assets/images/gallery-2.1.jpg";
import galleryImg6 from "../assets/images/gallery-2.2.jpg";
import galleryImg7 from "../assets/images/gallery-3.jpeg";
import galleryImg8 from "../assets/images/gallery-3.1.jpeg";
import galleryImg9 from "../assets/images/gallery-3.3.jpeg";
import ModalImage from "react-modal-image";



function Gallery() {
    return (
        <section className="py-10 container mx-auto">
            {/* section title */}
            <div>
                <h1 className="text-7xl text-red-500 text-center font-medium tracking-tighter pb-[20px] px-[20px] section-title"
                >
                    Our Gallery
                </h1>
                <h2 className="text-center text-[#84795D] text-2xl section-para mb-10 font-semibold leading-7"
                >
                    An event that gives back
                </h2>
            </div>
            <div className="bg-white pt-5 pb-10">
                <div className="grid md:grid-cols-3 gap-5 pb-3.5 px-14">
                    {/* gallery column 1 */}
                    <div>
                        <div className='galleryImg '>
                            {/* <img src={galleryImg1} alt="galleryImg" /> */}
                            <ModalImage
                                small={galleryImg1}
                                large={galleryImg1}
                                alt="Jhinjha Weds Jandu!"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 pt-4">
                            <div>
                                <div className='galleryImg'>
                                    {/* <img src={galleryImg2} alt="galleryImg" /> */}
                                    <ModalImage
                                        small={galleryImg2}
                                        large={galleryImg2}
                                        alt="Jhinjha Weds Jandu!"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='galleryImg' style={{ maxWidth: "800px" }}>
                                    <ModalImage
                                        small={galleryImg3}
                                        large={galleryImg3}
                                        alt="Jhinjha Weds Jandu!"
                                    />
                                    {/* <img src={galleryImg3} alt="galleryImg" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* gallery column 2 */}
                    <div>
                        <div className='galleryImg '>
                            {/* <img src={galleryImg4} alt="galleryImg" /> */}
                            <ModalImage
                                small={galleryImg4}
                                large={galleryImg4}
                                alt="Jhinjha Weds Jandu!"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 pt-4">
                            <div>
                                <div className='galleryImg'>
                                    {/* <img src={galleryImg5} alt="galleryImg" /> */}
                                    <ModalImage
                                        small={galleryImg5}
                                        large={galleryImg5}
                                        alt="Jhinjha Weds Jandu!"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='galleryImg '>
                                    {/* <img src={galleryImg6} alt="galleryImg" /> */}
                                    <ModalImage
                                        small={galleryImg6}
                                        large={galleryImg6}
                                        alt="Jhinjha Weds Jandu!"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* gallery column 3 */}
                    <div>
                        <div className='galleryImg'>
                            {/* <img src={galleryImg7} alt="galleryImg" /> */}
                            <ModalImage
                                small={galleryImg7}
                                large={galleryImg7}
                                alt="Jhinjha Weds Jandu!"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 pt-4">
                            <div>
                                <div className='galleryImg'>
                                    {/* <img src={galleryImg8} alt="galleryImg" /> */}
                                    <ModalImage
                                        small={galleryImg8}
                                        large={galleryImg8}
                                        alt="Jhinjha Weds Jandu!"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='galleryImg '>
                                    {/* <img src={galleryImg9} alt="galleryImg" /> */}
                                    <ModalImage
                                        small={galleryImg9}
                                        large={galleryImg9}
                                        alt="Jhinjha Weds Jandu!"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="bg-red-500 hover:bg-red-700 hover:duration-300 hover:-translate-y-2 text-xs font-bold uppercase leading-7 tracking-[2.5px] text-white px-5 py-1.5  mt-4 text-center block m-auto rounded-sm"
                >Explore More</button>
            </div>
        </section>
    );
}

export default Gallery;