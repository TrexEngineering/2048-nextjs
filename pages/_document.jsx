import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head></Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: themeInitializerScript,
                        }}
                    >

                    </script>
                </body>
                <Main></Main>
                <NextScript />
            </Html>
        );
    }
}

function setInitialMode() {
    function getInitialMode() {
        //ストレージからthemeを取得する。
        if (process.browser) {
            const storedPreferenceMode = window.localStorage.getItem("theme");
        }
        const hasStoredPreference = typeof storedPreferenceMode === "string";
        
        if (hasStoredPreference) {
            return storedPreferenceMode;
        }

        return "takao";
    }

    const currentMode = getInitialMode();

    if (currentMode === "aoi") {
        document.documentElement.setAttribute("data-theme", "aoi")
    }
};

const themeInitializerScript = `(function() {
    ${setInitialMode()}
    setInitialMode();
})()`;

export default MyDocument;