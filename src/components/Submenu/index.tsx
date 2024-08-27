'use client';

import Link from "next/link";
import styles from './styles.module.scss';
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


function Submenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={styles.submenu}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <Menu size={24} color="#121212" />
                <span>Menu</span>
            </div>
            <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
                {
                    isOpen &&
                    <button className={styles.close} onClick={toggleMenu}>
                        <X size={54} color="#121212" />
                    </button>
                }
                <li>
                    <Link href={'#'}>
                        página 1
                    </Link>
                </li>
                <li>

                    <Link href={'#'}>
                        página 2
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Submenu;