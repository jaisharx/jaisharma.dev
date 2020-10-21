import styles from './list.module.scss';
import Link from 'next/link';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function index({ title, items }) {
    return (
        <div className={styles.container}>
            <h2>Latest {title}</h2>

            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item._id}>
                        <div>{formatDate(item.createdAt)}</div>
                        <Link href="">
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default index;
