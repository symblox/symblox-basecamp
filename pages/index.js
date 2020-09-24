import React, { useEffect } from "react";
import Layout from "../components/layout";
import { IntlProvider, FormattedMessage } from "react-intl";
import en_US from "../language/en_US";
import zh_CN from "../language/zh_CN";

export default function Index() {
    const [curLanguage, setCurLanguage] = React.useState();
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
                <IntlProvider
                    locale={"en"}
                    messages={curLanguage === "中文" ? zh_CN : en_US}
                >
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
                                <div className="logo"></div>
                                <div
                                    className="account"
                                    onClick={() =>
                                        setCurLanguage(
                                            curLanguage === "中文"
                                                ? "EN"
                                                : "中文"
                                        )
                                    }
                                >
                                    <button>
                                        {curLanguage === "中文" ? "EN" : "中文"}
                                    </button>
                                </div>
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
                                <a
                                    href="https://app.symblox.io"
                                    target="_blank"
                                >
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
                    </div>
                </IntlProvider>
            </Layout>
        </>
    );
}
