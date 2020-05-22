(window["jsonpFunction"] = window["jsonpFunction"] || []).push([
    ["lang-en"], {
        d500: function (e, t, o) {
            "use strict";
            o.r(t), o.d(t, "lang", (function () {
                return r
            }));
            var r = {
                error: {
                    text: "A fatal error was detected. Please contact the administrator with the information"
                },
                form: {
                    input: [{
                        prepend: "Format"
                    }, {
                        prepend: "Password",
                        placeholder: "Blank to disable encryption"
                    }],
                    textarea: {
                        placeholder: {
                            write_something_here: "Write something......",
                            read_once: "Self-destruct after opening"
                        }
                    },
                    select: {
                        plain: "Plain"
                    },
                    submit: "Submit",
                    checkbox: "Self-destruct"
                },
                success: {
                    h2: "Success!",
                    p: [{
                        text: "How to access this Paste <strong>{key}</strong> :"
                    }, {
                        button: "Return"
                    }],
                    ul: {
                        li: [{
                            text: "Enter <strong>Paste's number</strong> in the nav bar area."
                        }, {
                            browser: "Direct click to access: ",
                            tooltip: "Open on a new window"
                        }, {
                            scan_qr_code: "Scan the QR code"
                        }]
                    },
                    popover: {
                        text: "Enter <strong>Paste's number</strong> here to access to it."
                    },
                    badge: {
                        copy: "Copy",
                        success: "Copied!",
                        fail: "Error!"
                    }
                },
                auth: {
                    form: {
                        label: "Please offer your password to access:",
                        button: "Submit",
                        placeholder: "Wrong password."
                    }
                },
                nav: {
                    router_link: "Homepage",
                    form: {
                        placeholder: "Paste's number",
                        button: "Go"
                    },
                    lang: {
                        zh_CN: "简体中文",
                        en: "English"
                    },
                    something: {
                        text: "Something",
                        log: "Change Logs",
                        help: "Guidance",
                        feedback: "Feedback"
                    },
                    more: "More",
                    donate: "Donation",
                    beg: "给个 Star 好不啦"
                },
                not_found: {
                    content: {
                        title: "The paste you entered were not found",
                        go_home: "Back to home"
                    },
                    footer: {
                        text: "If you would like to know more about the error, you can search：Error 404 Girlfriend Not Found",
                        beg: {
                            left: "Give a",
                            right: "on Github"
                        }
                    }
                },
                footer: {
                    tooltip: "Click to change"
                },
                view: {
                    parsed: "Parsed",
                    raw: "Raw"
                }
            }
        }
    }
]);