function News() {
    return (
        <div className="news_wrapper">
            <h2 className="text-center">Новости</h2>
            <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-pair">
                            <div className="news_block">
                                <div className="news_text_container">
                                    <p className="news_header">
                                        GoldenSilver стал лауреатом Всероссийской акции 
                                        «Выбираю чистый воздух»
                                    </p>
                                    <p className="news_text">
                                        GoldenSilver вошел в число победителей
                                        II Всероссийской акции «Выбираю чистый воздух»,
                                        организованной при поддержке Минприроды и
                                        направленной на вовлечение бизнеса и общества
                                        в реализацию федерального проекта 
                                        «Чистый воздух». Награждение 
                                        лауреатов состоялось в Москве 28 сентября.
                                    </p>
                                </div>
                                <button className="news_more">
                                    Подробнее
                                </button>
                            </div>
                            <div className="news_block">
                                <div className="news_text_container">
                                    <p className="news_header">
                                    GoldenSilver представит возможности по выпуску гражданской судостали
                                    </p>
                                    <p className="news_text">
                                        GoldenSilver принимает участие в 
                                        начавшей свою работу 18 сентября в 
                                        Санкт-Петербурге 17-й Международной 
                                        выставке и конференции по гражданскому 
                                        судостроению, судоходству, деятельности 
                                        портов и освоению океана и шельфа «НЕВА-2023».
                                    </p>
                                </div>
                                <button className="news_more">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-pair">
                            <div className="news_block">
                                <div className="news_text_container">
                                    <p className="news_header">
                                        GoldenSilver стал лауреатом Всероссийской акции 
                                        «Выбираю чистый воздух»
                                    </p>
                                    <p className="news_text">
                                        GoldenSilver вошел в число победителей
                                        II Всероссийской акции «Выбираю чистый воздух»,
                                        организованной при поддержке Минприроды и
                                        направленной на вовлечение бизнеса и общества
                                        в реализацию федерального проекта 
                                        «Чистый воздух». Награждение 
                                        лауреатов состоялось в Москве 28 сентября.
                                    </p>
                                </div>
                                <button className="news_more">
                                    Подробнее
                                </button>
                            </div>
                            <div className="news_block">
                                <div className="news_text_container">
                                    <p className="news_header">
                                    GoldenSilver представит возможности по выпуску гражданской судостали
                                    </p>
                                    <p className="news_text">
                                        GoldenSilver принимает участие в 
                                        начавшей свою работу 18 сентября в 
                                        Санкт-Петербурге 17-й Международной 
                                        выставке и конференции по гражданскому 
                                        судостроению, судоходству, деятельности 
                                        портов и освоению океана и шельфа «НЕВА-2023».
                                    </p>
                                </div>
                                <button className="news_more">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default News;