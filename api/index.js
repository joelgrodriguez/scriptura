import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export async function getAllPosts(){
    const context = require.context('../_lib/posts', false, /\.md$/)
    const posts = []
    for(const key of context.keys()){
        const post = key.slice(2);
        const content = await import(`../_lib/posts/${post}`);
        const meta = matter(content.default)
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title
        })
    }
    return posts;
}

export async function getPostBySlug(slug){
    const fileContent = await import(`../_lib/posts/${slug}.md`);
    const meta = matter(fileContent.default)
    const content = marked(meta.content)    
    return {
        title: meta.data.title, 
        content: content
    }
}

export async function getAllProducts(){
    const context = require.context('../_lib/products', false, /\.md$/)
    const products = []
    for(const key of context.keys()){
        const product = key.slice(2);
        const content = await import(`../_lib/products/${product}`);
        const meta = matter(content.default)
        products.push({
            slug: product.replace('.md',''),
            title: meta.data.title
        })
    }
    return products;
}

export async function getProductBySlug(slug){
    const fileContent = await import(`../_lib/products/${slug}.md`);
    const meta = matter(fileContent.default)
    const content = marked(meta.content)    
    return {
        title: meta.data.title, 
        content: content
    }
}

export async function getAllPages(){
    const context = require.context('../_lib/pages', false, /\.md$/)
    const pages = []
    for(const key of context.keys()){
        const page = key.slice(2);
        const content = await import(`../_lib/pages/${page}`);
        const meta = matter(content.default)
        pages.push({
            slug: page.replace('.md',''),
            title: meta.data.title
        })
    }
    return pages;
}

export async function getPageBySlug(slug){
    const fileContent = await import(`../_lib/pages/${slug}.md`);
    const meta = matter(fileContent.default)
    const content = marked(meta.content)    
    return {
        title: meta.data.title, 
        content: content
    }
}



export async function getConfig(){
    const config = await import(`../config.yml`)
    return yaml.safeLoad( config.default )
}