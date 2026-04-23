import Script from 'next/script' //引入Script组件
export function LocalIntroduction() {
    return (
        <div>
            <Script id="VGUBHJMK5" strategy="beforeInteractive"
                    src="https://unpkg.com/vue@3/dist/vue.global.js"></Script>
        </div>
    )
}

export function InLine() {
    return <div>
        <Script id="VGUBHJMK6"
                strategy="afterInteractive">
            {
                `
            const {createApp} = Vue
            createApp({
              template: '<h1>{{ message }}</h1>',
              setup() {
                return {
                  message: 'Next.js + Vue.js + InLine1'
                }
              }
            }).mount('#app1')
          `
            }
        </Script>
    </div>
}

export function InLine2() {
    return <div>
        <div id="app2"></div>
        <Script id="GSJI76HHj" dangerouslySetInnerHTML={{
            __html: `
(function() {
        const {createApp} = Vue
        createApp({
            template: '<h1>{{ message }}</h1>',
            setup() {
            return {
                message: 'Next.js + Vue.js + InLine2'
            }
            }
        }).mount('#app2')
    })()
    `
        }} strategy="afterInteractive">
        </Script>
    </div>
}

export default function ScriptPage() {
    return (
        <div>
            <LocalIntroduction/>
            <div id="app1"></div>
            <InLine/>
            <InLine2/>
        </div>
    )
}