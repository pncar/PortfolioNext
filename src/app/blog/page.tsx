import { getBlogPosts } from '@/lib/contentful';
import Link from 'next/link';
import type { Entry } from 'contentful';

const Blog = async () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts = await getBlogPosts() as any[];

    const printDate = (date:string) => {
        const temp = new Date(date);
        return temp.toLocaleDateString();
    }

    return(
        <div className="">
            <h2 className="text-3xl font-semibold">Blog</h2>
            <div className="py-4 space-y-3">
                {posts.map((post) => (
                    <div key={post.sys.id} className="w-full md:w-2/3 flex border border-primary-800 rounded-md shadow-lg bg-gradient-to-r from-primary-900/50 to-primary-800/50 hover:from-primary-900 hover:to-primary-800 transition-all">
                        <Link href={`/blog/${post.sys.id}`} className="flex-1 p-4 px-6 gap-y-2">
                            <h2 className="font-semibold text-lg">{post.fields.title}</h2>
                            <p className="text-primary-400">{printDate(post.sys.createdAt)}</p>
                        </Link>
                        <div className="w-auto p-6">
                            <img src={post.fields.thumb?.fields.file.url || `https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`} className="w-32 h-32 object-cover rounded-lg"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog;