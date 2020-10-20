export default function Footer() {
  return (
    <footer>
      <div className="container flex">
        <div className="logo" style={{ position: "relative" }}></div>
        <div className="r">
          <div className="menu">
            <a href="https://twitter.com/symbloxdefi" target="_blank">
              <img src="/twitter.svg" alt="twitter" height="39" />
            </a>
            <a href="https://t.me/symblox" target="_blank">
              <img src="/terims.svg" alt="terims" height="39" />
            </a>
            <a href="https://medium.com/@symbloxsyx" target="_blank">
              <img src="/media.svg" alt="media" height="39" />
            </a>
            <a
              href="https://github.com/symblox/symblox-yield-farming"
              target="_blank"
            >
              <img
                src={"/github.svg"}
                alt="github"
                style={{
                  background: "#49475F",
                  borderRadius: "50%",
                  padding: "6px",
                  height: "39px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
