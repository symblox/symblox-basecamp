export default function Footer() {
    return (
        <footer>
            <div className="container flex">
                <div className="logo"></div>
                <div className="r">
                    <div className="menu">
                        <a
                            href="https://twitter.com/symbloxdefi"
                            target="_blank"
                        >
                            <img src="/twitter.svg" alt="twitter" height="39" />
                        </a>
                        <a href="https://t.me/symblox" target="_blank">
                            <img src="/terims.svg" alt="terims" height="39" />
                        </a>
                        <a
                            href="https://medium.com/@symbloxsyx"
                            target="_blank"
                        >
                            <img src="/media.svg" alt="media" height="39" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
