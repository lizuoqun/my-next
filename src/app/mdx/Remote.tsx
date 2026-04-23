import {MDXRemote} from "next-mdx-remote-client/rsc";

async function MdxContent() {
    const res = await fetch('http://192.168.10.179:4000/http.md')
    const source = await res.text()

    return <MDXRemote source={source}/>
}

export default MdxContent;
