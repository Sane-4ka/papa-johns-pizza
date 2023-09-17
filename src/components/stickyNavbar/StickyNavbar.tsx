import {useEffect, useState} from 'react'
import styles from './StickyNavbar.module.scss'
import debounce from 'lodash.debounce'
import { Link } from 'react-scroll'
import { CSSTransition } from 'react-transition-group'

const StickyNavbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState<Boolean>();
    const time = prevScrollPos > 800 || prevScrollPos < 500 ? 100 : 10

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setPrevScrollPos(currentScrollPos);
        const isVisible = document.querySelector(".navbar_menu")!.getBoundingClientRect().top < -150;
        if (visible !== isVisible) {
            setVisible(isVisible)
        }
    }, time);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <CSSTransition in={Boolean(visible)} timeout={300} unmountOnExit classNames="alert">
       <div className={styles.root}>
            <ul className={styles.container}>
                <Link className={styles.link} offset={-150} activeClass="active" smooth={false} spy to="pizza">
                    Pizza</Link>
                <Link className={styles.link} offset={-45} activeClass="active" smooth={false} spy to="Закуски">
                    Snacks</Link>
                <Link className={styles.link} offset={-50} activeClass="active" smooth={false} spy to="Напитки">
                    Drinks</Link>
                <Link className={styles.link} offset={-45} activeClass="active" smooth={false} spy to="Соусы">
                    Sauces</Link>
                <Link className={styles.link} offset={-45} activeClass="active" smooth={false} spy to="Десерты">
                    Desserts</Link>
                <Link className={styles.link} offset={-45} activeClass="active" smooth={false} spy to="Горячее">
                    Hot</Link>
                <Link className={styles.link} offset={-45} activeClass="active" smooth={false} spy to="Комбо">
                    Combo</Link>
            </ul>
        </div>
    </CSSTransition>
    )
}

export default StickyNavbar;
