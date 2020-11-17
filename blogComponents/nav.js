import React from "react";
import styles from '../styles/blogStyle.module.css';

const Nav = ({ categories }) => {
  return (
    <div>
        <nav className="uk-navbar" data-uk-navbar="true">
            <ul className={`uk-navbar-nav mt-2 mb-3 ${styles.navBlog}`} style={{ margin: 'auto' }}>
                {categories.map((category) => {
                return (
                    <li key={category.id}>
                        <a href={`/blog/category/${category.slug}`} style={{ fontWeight: 600, fontSize: '1.5em' }} className="uk-link-reset">{category.name}</a>
                    </li>
                );
                })}
            </ul>
        </nav>
    </div>
  );
};

export default Nav;
