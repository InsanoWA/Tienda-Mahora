
import galeria1 from "../../assets/images/galeria1.jpg";
import galeria2 from "../../assets/images/galeria2.jpg";
import galeria3 from "../../assets/images/galeria3.jpg";
import galeria4 from "../../assets/images/galeria4.jpg";
import galeria5 from "../../assets/images/galeria5.jpg";
import galeria6 from "../../assets/images/galeria6.jpg";


export default function Galeria() {
    return (
        <div>
            <h1 id="galery" className="  text-xl font-sans antialiased underline flex justify-center"  >GALERIA</h1>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="galeria1"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src={galeria1}></img>
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="galeria2"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galeria2}>
                            </img>
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div>
                            <img src={galeria3}>
                            </img>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="" >
                            <img src={galeria4}>
                            </img>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="" >
                            <img src={galeria5}>
                            </img>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href="" >
                            <img src={galeria6}>
                            </img>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
