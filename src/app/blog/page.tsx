export const revalidate = 60;
import { getBlogPosts } from '@/lib/contentful';
import Link from 'next/link';

const Blog = async () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts = await getBlogPosts() as any[];

    const printDate = (date:string) => {
        const temp = new Date(date);
        return temp.toLocaleDateString();
    }

    return(
        <div className="">
            <h1 className="text-4xl">Blog</h1>
            <div className="py-4 gap-4 grid md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link href={`/blog/${post.sys.id}`} key={post.sys.id} className="group relative h-64 overflow-hidden rounded-lg border border-primary-600">
                        <img src={post.fields.thumb?.fields.file.url || `https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`} className="transition-all scale-110 group-hover:scale-100 rounded-lg absolute w-full h-full object-cover"/>
                        <div className="z-10 relative h-full bg-gradient-to-b from-transparent to-primary-950">
                            <div className="absolute bottom-0 p-3">
                                <h2>{post.fields.title}</h2>
                                <p className="text-primary-400">{printDate(post.sys.createdAt)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog;