import React, { useEffect } from "react";
import Layout from "../components/layout";
import { IntlProvider, FormattedMessage } from "react-intl";
import Dropdown from "react-bootstrap/Dropdown";
import en_US from "../language/en_US";
import zh_CN from "../language/zh_CN";

export default function Index() {
  const [curLanguage, setCurLanguage] = React.useState();
  const [isOpen, openMenu] = React.useState(false);

  useEffect(() => {
    if (!curLanguage) {
      if (navigator.language === "zh-CN") {
        setCurLanguage("中文");
      } else {
        setCurLanguage("EN");
      }
    }
  });

  return (
    <>
      <Layout>
        <IntlProvider locale={"en"} messages={curLanguage === "中文" ? zh_CN : en_US}>
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
                      <Dropdown className="menu-item">
                        <Dropdown.Toggle as={"a"} variant="success" id="dropdown-basic">
                          <FormattedMessage id="MENU_ITEM1" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/v3R86WVVvyWQQRPR/"
                                : "https://symbloxsyx.medium.com/introducing-symblox-c4e67b33fc9e"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM1_1" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/DgHPyCWcr9TR6H6Q/"
                                : "https://symbloxsyx.medium.com/a-detailed-explanation-of-symblox-yield-farming-8f7ec4b48de8"
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
                                : "https://docs.google.com/document/d/1FnsTQRzOcX9_8pJBw0kMh83yEcnbz1f7Ag1uQlVt2uo/edit"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_1" />
                          </Dropdown.Item>
                          <Dropdown.Item
                            href={
                              curLanguage === "中文"
                                ? "https://shimo.im/docs/Vw5XybChNyk6Ms6g/"
                                : "https://docs.google.com/document/d/1FnsTQRzOcX9_8pJBw0kMh83yEcnbz1f7Ag1uQlVt2uo/edit"
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
                                : "https://symbloxsyx.medium.com/symblox-strategy-guide-for-dummies-48e2f516daec"
                            }
                            target="_blank"
                          >
                            <FormattedMessage id="MENU_ITEM2_4" />
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
                        href={
                          curLanguage === "中文"
                            ? "https://github.com/symblox/symblox-yield-farming/blob/master/audit/PeckShield-Audit-Report-Symblox-1.0.pdf"
                            : "https://github.com/symblox/symblox-yield-farming/blob/master/audit/PeckShield-Audit-Report-Symblox-1.0.pdf"
                        }
                        target="_blank"
                      >
                        <FormattedMessage id="MENU_ITEM4" />
                      </a>
                    </>
                  </span>
                  <a className="account" onClick={() => setCurLanguage(curLanguage === "中文" ? "EN" : "中文")}>
                    <button>{curLanguage === "中文" ? "EN" : "中文"}</button>
                  </a>
                  <a
                    className="menu-icon"
                    onClick={() => {
                      openMenu(!isOpen);
                    }}
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
              <div className="mobile-menu-header" style={{ display: isOpen ? "block" : "none" }}>
                <>
                  {" "}
                  <span className="menu-item">
                    <FormattedMessage id="MENU_ITEM1" />
                  </span>
                  <a
                    className="menu-item menu-sub-item"
                    href={curLanguage === "中文" ? "https://shimo.im/docs/v3R86WVVvyWQQRPR/" : ""}
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM1_1" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={curLanguage === "中文" ? "https://shimo.im/docs/DgHPyCWcr9TR6H6Q/" : ""}
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM1_2" />
                  </a>
                  <span className="menu-item">
                    <FormattedMessage id="MENU_ITEM2" />
                  </span>
                  <a
                    className="menu-item menu-sub-item"
                    href={curLanguage === "中文" ? "https://shimo.im/docs/YVPKjdCKdg69jX3R/" : ""}
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_1" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={curLanguage === "中文" ? "https://shimo.im/docs/Vw5XybChNyk6Ms6g/" : ""}
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_2" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={curLanguage === "中文" ? "https://shimo.im/docs/RxpqvXdPVrhJqwkt/" : ""}
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_3" />
                  </a>
                  <a
                    className="menu-item menu-sub-item"
                    href={curLanguage === "中文" ? "https://shimo.im/docs/rkRYqqgCyYytChdy/" : ""}
                    target="_blank"
                  >
                    <FormattedMessage id="MENU_ITEM2_4" />
                  </a>
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
                    href={
                      curLanguage === "中文"
                        ? "https://github.com/symblox/symblox-yield-farming/blob/master/audit/PeckShield-Audit-Report-Symblox-1.0.pdf"
                        : "https://github.com/symblox/symblox-yield-farming/blob/master/audit/PeckShield-Audit-Report-Symblox-1.0.pdf"
                    }
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
                <a className="menu-item" href="https://app.symblox.io/">
                  <button>
                    <FormattedMessage id="LAUNCH_APP" />
                  </button>
                </a>
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
                    <span className="app-1"></span>
                  </div>
                  <div className="app-item">
                    <span className="app-2"></span>
                  </div>
                  <div className="app-item">
                    <span className="app-3"></span>
                  </div>
                  <div className="app-item">
                    <span className="app-4"></span>
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
                    <a href="itms-services://?action=download-manifest&url=https://symblox.io/manifest.plist">
                      <span className="app-1"></span>
                    </a>
                  </div>
                  <div className="app-item">
                    <a href="/velas-defi-wallet-1014.apk" target="_blank">
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
