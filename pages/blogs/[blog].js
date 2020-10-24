import styles from '../../styles/eachpage.module.scss';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PageData from '../../components/page-data';

function blog({ blog }) {
    return (
        <>
            <header>
                <Navbar isBack="true" active="blogs" />
            </header>
            <PageData data={blog} />
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://strapi-cms-backend.herokuapp.com/blogs');
    const blogs = await res.json();

    const paths = blogs.map((blog) => ({
        params: { blog: blog.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://strapi-cms-backend.herokuapp.com/blogs?slug=${params.blog}`);
    const blog = await res.json();

    return {
        props: {
            blog,
        },
        revalidate: 10,
    };
}

export default blog;
