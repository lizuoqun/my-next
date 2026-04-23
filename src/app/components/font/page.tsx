import {BBH_Hegarty, Playwrite_NO_Guides, ZCOOL_KuaiLe} from 'next/font/google' //引入字体库
import localFont from 'next/font/local'

const bbhHegarty = BBH_Hegarty({
    weight: '400', //字体粗细
    display: 'swap', //字体显示方式
})
const playwriteNOGuides = Playwrite_NO_Guides({
    weight: '400',
    display: 'swap',
})
const zcoolKuaiLe = ZCOOL_KuaiLe({
    weight: '400',
    display: 'swap',
})

const zydtFont = localFont({
    src: '../../font/zydtFont.ttf',
    display: 'swap',
})

const qhdltFont = localFont({
    src: '../../font/qhdltFont.ttf',
    display: 'swap',
})

export default function fontPage() {
    return <div>
        <div className={bbhHegarty.className}>Who first beheld the moon by the river,
            And when did the river moon first shine upon men. Font Google
        </div>
        <div className={playwriteNOGuides.className}>Who first beheld the moon by the river,
            And when did the river moon first shine upon men. Font Google
        </div>
        <div className={zcoolKuaiLe.className}>江畔何人初见月，江月何年初照人。</div>
        <div className={zydtFont.className}>江畔何人初见月，江月何年初照人。</div>
        <div className={qhdltFont.className}>江畔何人初见月，江月何年初照人。</div>
    </div>
}