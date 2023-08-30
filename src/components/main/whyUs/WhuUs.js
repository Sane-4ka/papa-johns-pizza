import React from 'react'

import styles from './whyUs.module.scss'

const WhyUs = () => {
    return (
    <div className={styles.container}>
        <div className={styles.title}>Почему выбирают именно нас</div>
        <div className={styles.subTitle}></div>
            <div className={styles.block}>
                <div className={styles.item}>
                    <img src="" alt="delivery" className="img" />
                    <div className={styles.title1}>БЕСПЛАТНАЯ ДОСТАВКА</div>
                    <div className={styles.txt1}>При заказе от 1500 руб. мы бесплатно доставим посылку по всей территории России. Подробнее об условиях доставки нашего интернет-магазина вы можете прочитать здесь
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="" alt="order" className="img" />
                    <div className={styles.title1}>ОБРАБОТКА ЗАКАЗА 1 ДЕНЬ</div>
                    <div className={styles.txt1}>После размещения заказа мы незамедлительно свяжемся с вами для подтверждения и подробных консультаций - персональный менеджер ответит на любые ваши вопросы
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="" alt="price" className="img" />
                    <div className={styles.title1}>ЦЕНЫ ОТ ПРОИЗВОДИТЕЛЕЙ</div>
                    <div className={styles.txt1}>Мы работаем с фабриками-производителями напрямую и без посредников. В Интернет-магазине Beautifull только подлинные товары по фабричным ценам
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="" alt="guaranty" className="img" />
                    <div className={styles.title1}>ГАРАНТИЯ 100% НА ВСЕ</div>
                    <div className={styles.txt1}>Мы даем абсолютную 100% гарантию на все предоставляемые товары в ассортименте нашего интернет магазина. И это доступно каждому нашему клиенту прямо сейчас (оформите заказ)
                    </div>
                </div>
            </div>
    </div>    
    )
}

export default WhyUs;