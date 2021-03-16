import React, { useEffect } from "react";
import Layout from "../components/layout";
import { IntlProvider, FormattedMessage } from "react-intl";
import Dropdown from "react-bootstrap/Dropdown";
import en_US from "../language/en_US";
import zh_CN from "../language/zh_CN";
import es_ES from "../language/es_ES";

export default function Index() {
  const [curLanguage, setCurLanguage] = React.useState();
  const [isOpen, openMenu] = React.useState(false);

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (!curLanguage) {
      if (browserLang === "zh-cn") {
        setCurLanguage("中文");
      } else if (browserLang === "es-es") {
        setCurLanguage("ES");
      } else {
        setCurLanguage("EN");
      }
    }
  });

  const switchLanguage = (lang) => {
    switch (lang) {
      case "中文":
        return zh_CN;
      case "ES":
        return es_ES;
      default:
        return en_US;
    }
  };

  return (
    <>
      <Layout>
        <IntlProvider locale={"en"} messages={switchLanguage(curLanguage)}>
          <div className="page index">
            <div className="bg">
              <div className="block-1">
                <span className="icon point-1"></span>
                <span className="icon point-2"></span>
                <span className="icon point-3"></span>
              </div>
              <div className="block-2"></div>
              <div className="block-3"></div>
            </div>
            <header>
              <div className="container hd">
                <div className="header-bar">
                  <div className="logo"></div>
                  <span className="menu-header">
                    <>
                      {" "}
                      <a className="menu-item" href="https://sips.symblox.io" target="_blank">
                        <FormattedMessage id="MENU_ITEM5" />
                      </a>
                      <Dropdown className="menu-item">
                        <Dropdown.Toggle as={"a"} variant="success" id="dropdown-basic">
                          <FormattedMessage id="MENU_ITEM1" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/v3R86WVVvyWQQRPR/"
                                : "https://symblox.medium.com/introducing-symblox-c4e67b33fc9e"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM1_1" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/diby5RZUVQUJyGHn/"
                                : "https://symblox.medium.com/symblox-yield-farming-2-0-e9f3128680bd"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM1_2" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown className="menu-item">
                        <Dropdown.Toggle as={"a"} variant="success" id="dropdown-basic">
                          <FormattedMessage id="MENU_ITEM2" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/YVPKjdCKdg69jX3R/"
                                : "https://symblox.github.io/guides/yield-farming/2020/10/22/symblox-guide-for-mobile"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_1" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/Vw5XybChNyk6Ms6g/"
                                : "https://symblox.github.io/guides/yield-farming/2020/10/22/symblox-guide-for-pc"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_2" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/RxpqvXdPVrhJqwkt/"
                                : "https://hackmd.io/@Symblox/BkChukUvw"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_3" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/rkRYqqgCyYytChdy/"
                                : "https://symblox.medium.com/symblox-strategy-guide-for-dummies-48e2f516daec"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_4" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/Q5BNIEBFX10apcX3"
                                : "https://github.com/symblox/symblox.github.io/blob/master/_posts/2020-11-27-crosschain-guide-for-mobile.md"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_5" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/ChSHzR8yPq4S0phP"
                                : "https://github.com/symblox/symblox.github.io/blob/master/_posts/2020-11-27-crosschain-guide-for-mobile.md"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_6" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <a
                        className="menu-item"
                        href={
                          curLanguage === "中文"
                            ? "https://shimo.im/docs/3jppqrHD6WhQ98Dv/"
                            : "https://hackmd.io/@Symblox/BkGxZBNwv"
                        }
                        target="_blank"
                      >
                        <FormattedMessage id="MENU_ITEM3" />
                      </a>
                      <a
                        className="menu-item"
                        href="https://github.com/symblox/symblox-yield-farming/blob/master/audit/PeckShield-Audit-Report-Symblox-1.0.pdf"
                        target="_blank"
                      >
                        <FormattedMessage id="MENU_ITEM4" />
                      </a>
                    </>
                  </span>
                  <a
                    className="menu-icon"
                    onClick={() => {
                      openMenu(!isOpen);
                    }}
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                  <Dropdown className="menu-item menu-lang">
                    <Dropdown.Toggle as={"a"} variant="success" id="dropdown-basic">
                      <span className="menu-lang-icon"></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setCurLanguage("EN")}>EN</Dropdown.Item>
                      <Dropdown.Item onClick={() => setCurLanguage("ES")}>ES</Dropdown.Item>
                      <Dropdown.Item onClick={() => setCurLanguage("中文")}>中</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* <a className="account" onClick={() => setCurLanguage(curLanguage === "中文" ? "EN" : "中文")}>
                    <button>{curLanguage === "中文" ? "EN" : "中文"}</button>
                  </a> */}
                </div>
              </div>
              <div className="mobile-menu-header" style={{ display: isOpen ? "block" : "none" }}>
                <>
                  {" "}
                  <a className="menu-item" href="https://sips.symblox.io" target="_blank">
                    <FormattedMessage id="MENU_ITEM5" />
                  </a>
                  <span className="menu-item">
                    <FormattedMessage id="MENU_ITEM1" />
                  </span>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/v3R86WVVvyWQQRPR/"
                        : "https://symblox.medium.com/introducing-symblox-c4e67b33fc9e"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM1_1" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/diby5RZUVQUJyGHn/"
                        : "https://symblox.medium.com/symblox-yield-farming-2-0-e9f3128680bd"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM1_2" />
                  </a>
                  <span className="menu-item">
                    <FormattedMessage id="MENU_ITEM2" />
                  </span>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/YVPKjdCKdg69jX3R/"
                        : "https://symblox.github.io/guides/yield-farming/2020/10/22/symblox-guide-for-mobile"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_1" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/Vw5XybChNyk6Ms6g/"
                        : "https://symblox.github.io/guides/yield-farming/2020/10/22/symblox-guide-for-pc"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_2" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/RxpqvXdPVrhJqwkt/"
                        : "https://hackmd.io/@Symblox/BkChukUvw"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_3" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/rkRYqqgCyYytChdy/"
                        : "https://symblox.medium.com/symblox-strategy-guide-for-dummies-48e2f516daec"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_4" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/Q5BNIEBFX10apcX3"
                        : "https://github.com/symblox/symblox.github.io/blob/master/_posts/2020-11-27-crosschain-guide-for-mobile.md"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_5" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/Q5BNIEBFX10apcX3"
                        : "https://github.com/symblox/symblox.github.io/blob/master/_posts/2020-11-27-crosschain-guide-for-mobile.md"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_6" />
                  </a>
                  <a
                    className="menu-item"
                    href={
                      curLanguage === "中文"
                        ? "https://shimo.im/docs/ChSHzR8yPq4S0phP"
                        : "https://github.com/symblox/symblox.github.io/blob/master/_posts/2020-11-27-crosschain-guide-for-mobile.md"
                    }
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM3" />
                  </a>
                  <a
                    className="menu-item"
                    href="https://github.com/symblox/symblox-yield-farming/blob/master/audit/PeckShield-Audit-Report-Symblox-1.0.pdf"
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM4" />
                  </a>
                </>
              </div>
            </header>
            <section className="section section-1">
              <div className="container">
                <h1>
                  <FormattedMessage id="TITLE" />
                  <br />
                  <FormattedMessage id="TITLE2" />
                </h1>
                <p>
                  <FormattedMessage id="SUBTITLE" />
                </p>
                <div className="actions">
                  <a className="menu-item" href="https://app.symblox.io/">
                    <button>
                      <FormattedMessage id="MINING_APP" />
                    </button>
                  </a>
                  <a className="menu-item" href="https://x.symblox.io/">
                    <button className="action">
                      <FormattedMessage id="XCHAIN_APP" />
                    </button>
                  </a>
                  <a className="menu-item" href="https://pvlx.symblox.io/">
                    <button className="action">
                      <FormattedMessage id="PVLX_APP" />
                    </button>
                  </a>
                  <a className="menu-item" href="https://vote.symblox.io/">
                    <button className="action-vote">
                      <FormattedMessage id="VOTE" />
                    </button>
                  </a>
                </div>
              </div>
            </section>
            <section className="section section-2">
              <div className="container flex">
                <div className="text">
                  <h2>
                    <FormattedMessage id="CONTENT_TITLE" />
                  </h2>
                  <p>
                    <FormattedMessage id="CONTENT_TEXT" />
                  </p>
                </div>
                <span className="image-2-1"></span>
              </div>
            </section>
            <section className="section section-3">
              <div className="container">
                <div className="title">
                  <FormattedMessage id="CONTENT2_TITLE" />
                </div>
                <div className="grid">
                  <div className="grid-item">
                    <span className="icon grid-1"></span>
                    <b>
                      <FormattedMessage id="CONTENT2_ITEM1_TITLE" />
                    </b>
                    <p>
                      <FormattedMessage id="CONTENT2_ITEM1_TEXT" />
                    </p>
                  </div>
                  <div className="grid-item">
                    <span className="icon grid-2"></span>
                    <b>
                      <FormattedMessage id="CONTENT2_ITEM2_TITLE" />
                    </b>
                    <p>
                      <FormattedMessage id="CONTENT2_ITEM2_TEXT" />
                    </p>
                  </div>
                  <div className="grid-item">
                    <span className="icon grid-3"></span>
                    <b>
                      <FormattedMessage id="CONTENT2_ITEM3_TITLE" />
                    </b>
                    <p>
                      <FormattedMessage id="CONTENT2_ITEM3_TEXT" />
                    </p>
                  </div>
                  <div className="grid-item">
                    <span className="icon grid-4"></span>
                    <b>
                      <FormattedMessage id="CONTENT2_ITEM4_TITLE" />
                    </b>
                    <p>
                      <FormattedMessage id="CONTENT2_ITEM4_TEXT" />
                    </p>
                  </div>
                  <div className="grid-item">
                    <span className="icon grid-5"></span>
                    <b>
                      <FormattedMessage id="CONTENT2_ITEM5_TITLE" />
                    </b>
                    <p>
                      <FormattedMessage id="CONTENT2_ITEM5_TEXT" />
                    </p>
                  </div>
                  <div className="grid-item">
                    <span className="icon grid-6"></span>
                    <b>
                      <FormattedMessage id="CONTENT2_ITEM6_TITLE" />
                    </b>
                    <p>
                      <FormattedMessage id="CONTENT2_ITEM6_TEXT" />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-4">
              <div className="container">
                <div className="title">
                  <FormattedMessage id="CONTENT3_TITLE" />
                </div>
                <div className="app flex">
                  <div className="app-item">
                    <span className="app-1"></span>
                    <p>
                      <FormattedMessage id="CONTENT3_ITEM1" />
                    </p>
                  </div>
                  <div className="app-item">
                    <span className="app-2"></span>
                    <p>
                      <FormattedMessage id="CONTENT3_ITEM2" />
                    </p>
                  </div>
                  <div className="app-item">
                    <span className="app-3"></span>
                    <p>
                      <FormattedMessage id="CONTENT3_ITEM3" />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-5">
              <div className="container">
                <div className="title">
                  <FormattedMessage id="CONTENT4_TITLE" />
                </div>
                <div className="timeline flex">
                  <div className="timeline-item">
                    <div className="time">
                      <FormattedMessage id="CONTENT4_ITEM1_TITLE" />
                    </div>
                    <p>
                      <FormattedMessage id="CONTENT4_ITEM1" />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="time">
                      <FormattedMessage id="CONTENT4_ITEM2_TITLE" />
                    </div>
                    <p>
                      <FormattedMessage id="CONTENT4_ITEM2" />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="time">
                      <FormattedMessage id="CONTENT4_ITEM3_TITLE" />
                    </div>
                    <p>
                      <FormattedMessage id="CONTENT4_ITEM3" />
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="time">
                      <FormattedMessage id="CONTENT4_ITEM4_TITLE" />
                    </div>
                    <p>
                      <FormattedMessage id="CONTENT4_ITEM4" />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-6">
              <div className="container">
                <div className="title">
                  <FormattedMessage id="CONTENT5_TITLE" />
                </div>
                <div className="app flex">
                  <div className="app-item">
                    <a href="https://www.velas.com" target="_blank">
                      <span className="app-1"></span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="https://www.peckshield.com" target="_blank">
                      <span className="app-2"></span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="https://www.coinpayments.net" target="_blank">
                      <span className="app-3"></span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="https://www.alphawallet.com" target="_blank">
                      <span className="app-4"></span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="section section-7">
              <div className="container">
                <div className="title">
                  <FormattedMessage id="CONTENT6_TITLE" />
                </div>
                <div className="app flex">
                  <div className="app-item">
                    <a href="https://testflight.apple.com/join/B2Kr95Fg">
                      <span className="app-1"></span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="/defi-wallet-0314.apk" target="_blank">
                      <span className="app-2"></span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </IntlProvider>
      </Layout>
    </>
  );
}
