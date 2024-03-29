(() => {
    "use strict";
    var n = {
            28: (n, r, t) => {
                t.d(r, {
                    Z: () => j
                });
                var e = t(81),
                    o = t.n(e),
                    i = t(645),
                    a = t.n(i),
                    l = t(667),
                    s = t.n(l),
                    d = new URL(t(292), t
                        .b),
                    c = new URL(t(14), t
                        .b),
                    p = new URL(t(186), t
                        .b),
                    m = new URL(t(680), t
                        .b),
                    g = new URL(t(242), t
                        .b),
                    h = new URL(t(125), t
                        .b),
                    f = new URL(t(966), t
                        .b),
                    u = new URL(t(871), t
                        .b),
                    v = a()(o()),
                    x = s()(d),
                    b = s()(c),
                    C = s()(p),
                    w = s()(m),
                    y = s()(g),
                    L = s()(h),
                    k = s()(f),
                    S = s()(u);
                v.push([n.id,
                    'html {\r\n  scroll-behavior: smooth !important;\r\n}\r\n\r\n:root {\r\n  font-size: 62.5%;\r\n\r\n  --nav-text-color: #fff;\r\n  --nav-FF: "Poppins-Regular", sans-serif;\r\n  --nav-li-FS: 1.6rem;\r\n\r\n  --body-bg-color: rgb(21, 21, 21);\r\n\r\n  --h1-padding: 0rem;\r\n  --h1-FS: 2.4rem;\r\n\r\n  --p-FS: 1.6rem;\r\n\r\n  --hero-text-pad: 2.5rem;\r\n\r\n  --body-FF: "OpenSans-Regular", sans-serif;\r\n  --skills-padding: 1em;\r\n}\r\n\r\n/*! reset */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  /* outline: 2px limegreen solid; */\r\n  \r\n}\r\n\r\nimg,\r\npicture,\r\nsvg,\r\nvideo {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nbutton,\r\nselect {\r\n  font: inherit;\r\n  background-color: #3b3b3b;\r\n  color: #ffffff;\r\n}\r\n\r\n/*! reset */\r\n@font-face {\r\n  font-family: "Poppins-Regular";\r\n  src: url(' +
                    x +
                    ');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: "OpenSans-Regular";\r\n  src: url(' +
                    b +
                    ");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n/* utlity class */\r\n.top_padding {\r\n  padding-top: 1.5rem;\r\n}\r\n\r\nbody {\r\n  font-size: 1.6rem;\r\n  min-height: 100vh;\r\n  background: var(--body-bg-color);\r\n  color: #fff;\r\n  font-family: var(--body-FF);\r\n}\r\n\r\n/* nav */\r\n\r\n.nav-item {\r\n  opacity: 1;\r\n}\r\n\r\n\r\nnav {\r\n  width: 100%;\r\n  display: grid;\r\n  background-color: var(--nav-bg-color);\r\n  color: var(--nav-text-color);\r\n  font-family: var(--nav-FF);\r\n}\r\n\r\nli {\r\n  text-align: center;\r\n  list-style: none;\r\n  margin: 0 0rem 0 2rem;\r\n  padding-top: 1rem;\r\n  font-size: var(--nav-li-FS);\r\n}\r\n\r\nli:first-child {\r\n  margin: 0;\r\n}\r\nul {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* Title */\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding: var(--h1-padding);\r\n  font-size: var(--h1-FS);\r\n  font-family: var(--nav-FF);\r\n}\r\n\r\nnav h1::before {\r\n  content: url(" +
                    C +
                    ");\r\n  display: inline-block;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* hero photo */\r\n\r\n#hero-title h1::after {\r\n  content: attr(data-text);\r\n  display: inline-block;\r\n  border-bottom: 4px solid;\r\n  border-color: #fff;\r\n  border-image: -webkit-linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n  border-image: linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n}\r\n\r\n/* stops text from being selected */\r\n#hero-title h1:hover {\r\n  width: 100%;\r\n}\r\n\r\n#personal_photo {\r\n  max-width: 300px;\r\n  border-radius: 15px;\r\n}\r\n\r\n#personal_photo_container {\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* hero   */\r\n\r\n#hero {\r\n  max-width: 1200px;\r\n}\r\n\r\n#hero-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n}\r\n\r\n#hero-title {\r\n  padding: 2rem;\r\n  font-size: var(--h1-FS);\r\n}\r\n\r\n#hero p {\r\n  font-size: var(--p-FS);\r\n  line-height: 1.8;\r\n}\r\n\r\n#hero-text {\r\n  padding: var(--hero-text-pad);\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  /* styles */\r\n  :root {\r\n    --hero-text-pad: 1rem;\r\n  }\r\n\r\n  #hero-text {\r\n    text-align: center;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n@media (min-width: 778px) {\r\n  #personal_photo_container {\r\n    margin-left: 2rem;\r\n  }\r\n  /* styles */\r\n  :root {\r\n    /* --h1-FS: 3.2rem; */\r\n    --nav-li-FS: 2.2rem;\r\n    --p-FS: 2.2rem;\r\n  }\r\n  #hero-title > h1 {\r\n    font-size: 3.2rem !important;\r\n  }\r\n\r\n  #hero-content {\r\n    display: grid;\r\n    grid-template-columns: fit-content(300px) 2fr;\r\n  }\r\n  #Skills{\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  .programming-skills {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 30%;\r\n    max-width: 1200px;\r\n  }\r\n  \r\n  .programming-skills .HTML {\r\n    display: grid;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n  }  \r\n}\r\n\r\n\r\n\r\n#skills > h2 {\r\n  padding: var(--skills-padding);\r\n  text-align: center;\r\n}\r\n\r\n.programming-skills > div > h3 {\r\n  margin-bottom: 1rem;\r\n  position: relative;\r\n  /* This position relative makes it possible to have that transform translate */\r\n}\r\n.programming-skills > div > p {\r\n  padding: 1.6rem;\r\n  /* This position relative makes it possible to have that transform translate */\r\n  line-height: 2;\r\n}\r\n\r\n.HTML h3::before {\r\n  content: url(" +
                    w +
                    ");\r\n  display: inline-block;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n\r\n  transform: translateY(17px);\r\n}\r\n.CSS h3::before {\r\n  content: url(" +
                    y +
                    ");\r\n  display: inline-block;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n  transform: translateY(12px);\r\n}\r\n.PYTHON h3::before {\r\n  content: url(" +
                    L +
                    ");\r\n  display: inline-block;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n\r\n  transform: translateY(12px);\r\n}\r\n.JavaScript h3::before {\r\n  content: url(" +
                    k +
                    ");\r\n  display: inline-block;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n  transform: translateY(12px);\r\n}\r\n.SQL h3::before {\r\n  content: url(" +
                    S +
                    ");\r\n  display: inline-block;\r\n  width: 48px;\r\n  height: 48px;\r\n  margin-right: 10px;\r\n  transform: translateY(12px);\r\n  margin-left: 10px;\r\n}\r\n\r\n.programming-skills > div > h3 {\r\n  margin-bottom: 1rem;\r\n  /* position: relative; */\r\n}\r\n\r\n.programming-skills > div {\r\n  margin: 2rem;\r\n  background-color: #4d4d4d  ;\r\n  border-radius: 0.8em;\r\n}\r\n\r\n\r\n#skills-header{\r\n  padding-top: 2rem;\r\n  padding-bottom: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n#skills-divider{\r\n  margin: 3rem 3rem 0 3rem;\r\n  border-color: #fff;\r\n  border-image: -webkit-linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n  border-image: linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n  }\r\n  \r\n\r\n  .project-container {\r\n    display: grid;\r\n    grid-template-columns: 260px;\r\n    padding: 2rem;\r\n    padding-bottom: 0;\r\n    place-content: center;\r\n  }\r\n   \r\n  .project-info,\r\n  .project-title {\r\n    margin-top: 20px; /* add some padding to the project information and technology list */\r\n    margin-bottom: 20px; /* add some padding to the project information and technology list */\r\n    padding-left: 0;\r\n  }\r\nh2.project-title{\r\n  text-align: center;\r\n  padding-bottom: 0.5rem;\r\n}\r\n  .tech-list{\r\n    opacity: 0.7;\r\n  }\r\n\r\n  .tech-title{\r\n    padding-top: 1rem;\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n\r\n  #projects-container{\r\n    justify-content: center;\r\n  }\r\n\r\n  #Projects{\r\n    display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n  }\r\n\r\nul.tech-list{\r\n  display: flex;\r\n  justify-content: flex-start !important;\r\n  gap:1rem;\r\n  \r\n}\r\n  .tech-list > li{\r\n    margin: 0;\r\n  }\r\n\r\n  ul.tech-list:first-child{\r\n    align-self: flex-start !important;\r\n  }\r\n\r\n  .tech-title{\r\n  background-color: #4d4d4d  ;\r\n  margin-bottom: 1rem;\r\n  padding-bottom: 1rem;\r\n  border-radius: 5px;\r\n  padding-left: 10px;\r\n  transform: translateY(12px);  \r\n}\r\n\r\n.project-title{\r\n  border-bottom: 4px solid;\r\n  border-color: #fff;\r\n  border-image: -webkit-linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n  border-image: linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n}\r\n.tech-list li {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.project-img{\r\n  height: 260px;\r\n  width: 260px;\r\n}\r\n\r\na {\r\n  font-family: var(--nav-FF);\r\n  font-size: var(--nav-li-FS);\r\n  color:#fff;\r\n  text-decoration: none;\r\n}\r\n\r\n#contact-heading{\r\n  padding: 2rem;\r\n  text-align: center;\r\n}\r\n.go-to-top {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Fixed/sticky position */\r\n  bottom: 20px; /* Place the button at the bottom of the page */\r\n  right: 30px; /* Place the button 30px from the right */\r\n  z-index: 99; /* Make sure it does not overlap */\r\n  border: none; /* Remove borders */\r\n  outline: none; /* Remove outline */\r\n  background-color: #008080; /* Set a background color */\r\n  color: black; /* Text color */\r\n  cursor: pointer; /* Add a mouse pointer on hover */\r\n  padding: 15px; /* Some padding */\r\n  border-radius: 10px; /* Rounded corners */\r\n  background: -webkit-linear-gradient(to right, #a8ff78, #78ffd6) 1;\r\n  background: linear-gradient(to right, #a8ff78, #78ffd6);\r\n}\r\n.go-to-top svg{\r\nwidth: 48px;\r\nheight: 20px;\r\n}\r\n\r\n.nav-link {\r\n  box-shadow: inset 0 0 0 0 #54b3d6;\r\n  color: #FFF;\r\n  margin: 0 -.25rem;\r\n  padding: 0 .25rem;\r\n  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;\r\n}\r\n.nav-link:hover {\r\n  box-shadow: inset 100px 0 0 0 #54b3d6;\r\n  color: white;\r\n}\r\n\r\n.tech-title {\r\n  cursor: pointer;\r\n  color: white;\r\n  text-decoration: underline;\r\n  transform-origin: bottom;\r\n  \r\n}\r\n\r\n\r\n@keyframes grow {\r\n\r\n  100% {\r\n    transform: translate(0, 15px) scale(1.2);\r\n  }\r\n\r\n}\r\n\r\n.tech-title:hover {\r\n  transform: translate(0, 15px) scale(1.2); /* Grow the element to 1.2 times its original size */\r\n  transition: transform 0.5s ease-in-out; /* Add a smooth transition when the element is scaled */\r\n}\r\n\r\n .hidden-thank-you {\r\n  text-align: center;\r\n  background-color: #4CAF50;\r\n  padding: 10px;\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n  display: none;\r\n  margin-top: 1rem;\r\n  border-radius: 5px;\r\n}",
                    ""
                ]);
                const j = v
            },
            645: n => {
                n.exports = function(n) {
                    var r = [];
                    return r
                        .toString =
                        function() {
                            return this
                                .map((function(
                                    r
                                ) {
                                    var t =
                                        "",
                                        e =
                                        void 0 !==
                                        r[
                                            5
                                            ];
                                    return r[
                                            4
                                        ] &&
                                        (t +=
                                            "@supports ("
                                            .concat(
                                                r[
                                                    4
                                                    ],
                                                ") {"
                                            )
                                        ),
                                        r[
                                            2
                                            ] &&
                                        (t +=
                                            "@media "
                                            .concat(
                                                r[
                                                    2
                                                    ],
                                                " {"
                                            )
                                        ),
                                        e &&
                                        (t +=
                                            "@layer"
                                            .concat(
                                                r[
                                                    5
                                                    ]
                                                .length >
                                                0 ?
                                                " "
                                                .concat(
                                                    r[
                                                        5
                                                        ]
                                                ) :
                                                "",
                                                " {"
                                            )
                                        ),
                                        t +=
                                        n(
                                            r
                                            ),
                                        e &&
                                        (t +=
                                            "}"
                                        ),
                                        r[
                                            2
                                            ] &&
                                        (t +=
                                            "}"
                                        ),
                                        r[
                                            4
                                            ] &&
                                        (t +=
                                            "}"
                                        ),
                                        t
                                }))
                                .join(
                                    ""
                                )
                        }, r.i =
                        function(n, t,
                            e, o, i) {
                            "string" ==
                            typeof n
                                &&
                                (n = [
                                    [null,
                                        n,
                                        void 0
                                    ]
                                ]);
                            var
                                a = {};
                            if (e)
                                for (
                                    var l =
                                        0; l <
                                    this
                                    .length; l++
                                ) {
                                    var s =
                                        this[
                                            l
                                        ]
                                        [
                                            0
                                        ];
                                    null !=
                                        s &&
                                        (a[s] = !
                                            0
                                        )
                                }
                            for (var d =
                                    0; d <
                                n
                                .length; d++
                            ) {
                                var c = []
                                    .concat(
                                        n[
                                            d
                                            ]
                                    );
                                e && a[c[
                                        0
                                        ]] ||
                                    (void 0 !==
                                        i &&
                                        (void 0 ===
                                            c[
                                                5
                                                ] ||
                                            (c[1] =
                                                "@layer"
                                                .concat(
                                                    c[
                                                        5
                                                        ]
                                                    .length >
                                                    0 ?
                                                    " "
                                                    .concat(
                                                        c[
                                                            5
                                                            ]
                                                    ) :
                                                    "",
                                                    " {"
                                                )
                                                .concat(
                                                    c[
                                                        1
                                                        ],
                                                    "}"
                                                )
                                            ),
                                            c[
                                                5
                                                ] =
                                            i
                                        ),
                                        t &&
                                        (c[2] ?
                                            (c[1] =
                                                "@media "
                                                .concat(
                                                    c[
                                                        2
                                                        ],
                                                    " {"
                                                )
                                                .concat(
                                                    c[
                                                        1
                                                        ],
                                                    "}"
                                                ),
                                                c[
                                                    2
                                                    ] =
                                                t
                                            ) :
                                            c[
                                                2
                                                ] =
                                            t
                                        ),
                                        o &&
                                        (c[4] ?
                                            (c[1] =
                                                "@supports ("
                                                .concat(
                                                    c[
                                                        4
                                                        ],
                                                    ") {"
                                                )
                                                .concat(
                                                    c[
                                                        1
                                                        ],
                                                    "}"
                                                ),
                                                c[
                                                    4
                                                    ] =
                                                o
                                            ) :
                                            c[
                                                4
                                                ] =
                                            ""
                                            .concat(
                                                o
                                            )
                                        ),
                                        r
                                        .push(
                                            c
                                        )
                                    )
                            }
                        }, r
                }
            },
            667: n => {
                n.exports = function(n,
                    r) {
                    return r || (
                            r = {}),
                        n ? (n =
                            String(n
                                .__esModule ?
                                n
                                .default :
                                n),
                            /^['"].*['"]$/
                            .test(
                                n) &&
                            (n =
                                n
                                .slice(
                                    1,
                                    -1
                                )
                            ), r
                            .hash && (
                                n += r
                                .hash
                            ),
                            /["'() \t\n]|(%20)/
                            .test(
                                n) ||
                            r
                            .needQuotes ?
                            '"'
                            .concat(n
                                .replace(
                                    /"/g,
                                    '\\"'
                                )
                                .replace(
                                    /\n/g,
                                    "\\n"
                                ),
                                '"') :
                            n) : n
                }
            },
            81: n => {
                n.exports = function(n) {
                    return n[1]
                }
            },
            379: n => {
                var r = [];

                function t(n) {
                    for (var t = -1, e =
                            0; e < r
                        .length; e++)
                        if (r[e]
                            .identifier ===
                            n) {
                            t = e;
                            break
                        } return t
                }

                function e(n, e) {
                    for (var i = {},
                            a = [], l =
                            0; l <
                        n.length; l++) {
                        var s = n[l],
                            d = e.base ?
                            s[0] + e
                            .base : s[0],
                            c = i[d] || 0,
                            p = "".concat(
                                d, " ")
                            .concat(c);
                        i[d] = c + 1;
                        var m = t(p),
                            g = {
                                css: s[1],
                                media: s[
                                        2
                                        ],
                                sourceMap: s[
                                    3
                                ],
                                supports: s[
                                    4
                                ],
                                layer: s[
                                    5]
                            };
                        if (-1 !== m) r[m]
                            .references++,
                            r[m].updater(
                                g);
                        else {
                            var h = o(g,
                                e);
                            e.byIndex = l,
                                r.splice(
                                    l,
                                    0, {
                                        identifier: p,
                                        updater: h,
                                        references: 1
                                    })
                        }
                        a.push(p)
                    }
                    return a
                }

                function o(n, r) {
                    var t = r.domAPI(r);
                    return t.update(n),
                        function(r) {
                            if (r) {
                                if (r
                                    .css ===
                                    n
                                    .css &&
                                    r
                                    .media ===
                                    n
                                    .media &&
                                    r
                                    .sourceMap ===
                                    n
                                    .sourceMap &&
                                    r
                                    .supports ===
                                    n
                                    .supports &&
                                    r
                                    .layer ===
                                    n
                                    .layer
                                )
                                    return;
                                t.update(
                                    n =
                                    r)
                            } else t
                                .remove()
                        }
                }
                n.exports = function(n,
                    o) {
                    var i = e(n = n ||
                        [], o =
                        o || {});
                    return function(
                        n) {
                        n = n ||
                        [];
                        for (var a =
                                0; a <
                            i
                            .length; a++
                        ) {
                            var l =
                                t(i[
                                    a
                                    ]);
                            r[l].references--
                        }
                        for (var s =
                                e(n,
                                    o
                                    ),
                                d =
                                0; d <
                            i
                            .length; d++
                        ) {
                            var c =
                                t(i[
                                    d
                                    ]);
                            0 ===
                                r[
                                    c
                                    ]
                                .references &&
                                (r[c]
                                    .updater(),
                                    r
                                    .splice(
                                        c,
                                        1
                                    )
                                )
                        }
                        i = s
                    }
                }
            },
            569: n => {
                var r = {};
                n.exports = function(n,
                    t) {
                    var e = function(
                        n) {
                        if (void 0 ===
                            r[n]
                        ) {
                            var t =
                                document
                                .querySelector(
                                    n
                                );
                            if (window
                                .HTMLIFrameElement &&
                                t instanceof window
                                .HTMLIFrameElement
                            )
                                try {
                                    t = t
                                        .contentDocument
                                        .head
                                } catch (
                                    n
                                ) {
                                    t = null
                                }
                            r[n] =
                                t
                        }
                        return r[
                            n]
                    }(n);
                    if (!e) throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                    e.appendChild(t)
                }
            },
            216: n => {
                n.exports = function(n) {
                    var r = document
                        .createElement(
                            "style");
                    return n
                        .setAttributes(
                            r, n
                            .attributes
                        ), n
                        .insert(r, n
                            .options),
                        r
                }
            },
            565: (n, r, t) => {
                n.exports = function(n) {
                    var r = t.nc;
                    r && n
                        .setAttribute(
                            "nonce", r
                        )
                }
            },
            795: n => {
                n.exports = function(n) {
                    var r = n
                        .insertStyleElement(
                            n);
                    return {
                        update: function(
                            t) {
                            !
                            function(
                                n,
                                r,
                                t
                            ) {
                                var e =
                                    "";
                                t.supports &&
                                    (e +=
                                        "@supports ("
                                        .concat(
                                            t
                                            .supports,
                                            ") {"
                                        )
                                    ),
                                    t
                                    .media &&
                                    (e +=
                                        "@media "
                                        .concat(
                                            t
                                            .media,
                                            " {"
                                        )
                                    );
                                var o =
                                    void 0 !==
                                    t
                                    .layer;
                                o && (e +=
                                        "@layer"
                                        .concat(
                                            t
                                            .layer
                                            .length >
                                            0 ?
                                            " "
                                            .concat(
                                                t
                                                .layer
                                            ) :
                                            "",
                                            " {"
                                        )
                                    ),
                                    e +=
                                    t
                                    .css,
                                    o &&
                                    (e +=
                                        "}"
                                    ),
                                    t
                                    .media &&
                                    (e +=
                                        "}"
                                    ),
                                    t
                                    .supports &&
                                    (e +=
                                        "}"
                                    );
                                var i =
                                    t
                                    .sourceMap;
                                i && "undefined" !=
                                    typeof btoa &&
                                    (e +=
                                        "\n/*# sourceMappingURL=data:application/json;base64,"
                                        .concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON
                                                        .stringify(
                                                            i
                                                        )
                                                    )
                                                )
                                            ),
                                            " */"
                                        )
                                    ),
                                    r
                                    .styleTagTransform(
                                        e,
                                        n,
                                        r
                                        .options
                                    )
                            }(r, n,
                                t)
                        },
                        remove: function() {
                            !
                            function(
                                n
                            ) {
                                if (null ===
                                    n
                                    .parentNode
                                )
                                    return !
                                        1;
                                n.parentNode
                                    .removeChild(
                                        n
                                    )
                            }(r)
                        }
                    }
                }
            },
            589: n => {
                n.exports = function(n,
                    r) {
                    if (r.styleSheet)
                        r.styleSheet
                        .cssText = n;
                    else {
                        for (; r
                            .firstChild;
                        ) r
                            .removeChild(
                                r
                                .firstChild
                            );
                        r.appendChild(
                            document
                            .createTextNode(
                                n)
                        )
                    }
                }
            },
            966: n => {
                n.exports =
                    "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path fill=%27white%27 d=%27M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z%27 /></svg>"
            },
            680: n => {
                n.exports =
                    "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path fill=%27white%27 d=%27M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z%27 /></svg>"
            },
            186: n => {
                n.exports =
                    "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path fill=%27white%27 d=%27M17,16.47V7.39L11,11.93M2.22,9.19C1.92,8.87 1.91,8.37 2.2,8.04L3.4,6.93C3.6,6.75 4.09,6.67 4.45,6.93L7.87,9.54L15.8,2.29C16.12,1.97 16.67,1.84 17.3,2.17L21.3,4.08C21.66,4.29 22,4.62 22,5.23V18.73C22,19.13 21.71,19.56 21.4,19.73L17,21.83C16.68,21.96 16.08,21.84 15.87,21.63L7.85,14.33L4.45,16.93C4.07,17.19 3.6,17.12 3.4,16.93L2.2,15.83C1.88,15.5 1.92,14.96 2.25,14.63L5.25,11.93%27 /></svg>"
            },
            871: n => {
                n.exports =
                    "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path fill=%27white%27 d=%27M18.68,12.32C16.92,10.56 14.07,10.57 12.32,12.33C10.56,14.09 10.56,16.94 12.32,18.69C13.81,20.17 16.11,20.43 17.89,19.32L21,22.39L22.39,21L19.3,17.89C20.43,16.12 20.17,13.8 18.68,12.32M17.27,17.27C16.29,18.25 14.71,18.24 13.73,17.27C12.76,16.29 12.76,14.71 13.74,13.73C14.71,12.76 16.29,12.76 17.27,13.73C18.24,14.71 18.24,16.29 17.27,17.27M10.9,20.1C10.25,19.44 9.74,18.65 9.42,17.78C6.27,17.25 4,15.76 4,14V17C4,19.21 7.58,21 12,21V21C11.6,20.74 11.23,20.44 10.9,20.1M4,9V12C4,13.68 6.07,15.12 9,15.7C9,15.63 9,15.57 9,15.5C9,14.57 9.2,13.65 9.58,12.81C6.34,12.3 4,10.79 4,9M12,3C7.58,3 4,4.79 4,7C4,9 7,10.68 10.85,11H10.9C12.1,9.74 13.76,9 15.5,9C16.41,9 17.31,9.19 18.14,9.56C19.17,9.09 19.87,8.12 20,7C20,4.79 16.42,3 12,3Z%27 /></svg>"
            },
            125: n => {
                n.exports =
                    "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path fill=%27white%27 d=%27M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M14.86,19.29C14.46,19.29 14.14,19.59 14.14,20.18C14.14,20.77 14.46,20.89 14.86,20.89A0.71,0.71 0 0,0 15.57,20.18C15.57,19.59 15.25,19.29 14.86,19.29M4.86,17.5C3.28,17.5 2,16.22 2,14.64V10.86C2,9.28 3.28,8 4.86,8H12C12,7.61 11.68,7.04 11.29,7.04H7V5.36C7,3.78 8.28,2.5 9.86,2.5H14.14C15.72,2.5 17,3.78 17,5.36V9.11C17,10.69 15.72,11.96 14.14,11.96H8.89C7.31,11.96 6.04,13.24 6.04,14.82V17.5H4.86M9.14,5.71C9.54,5.71 9.86,5.41 9.86,4.82C9.86,4.23 9.54,4.11 9.14,4.11C8.75,4.11 8.43,4.23 8.43,4.82C8.43,5.41 8.75,5.71 9.14,5.71Z%27 /></svg>"
            },
            242: n => {
                n.exports =
                    "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path fill=%27white%27 d=%27M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z%27 /></svg>"
            },
            14: (n, r, t) => {
                n.exports = t.p +
                    "77c09223204154ae8d43.ttf"
            },
            292: (n, r, t) => {
                n.exports = t.p +
                    "35d26b781dc5fda684cc.ttf"
            }
        },
        r = {};

    function t(e) {
        var o = r[e];
        if (void 0 !== o) return o.exports;
        var i = r[e] = {
            id: e,
            exports: {}
        };
        return n[e](i, i.exports, t), i
            .exports
    }
    t.m = n, t.n = n => {
            var r = n && n.__esModule ? () =>
                n.default : () => n;
            return t.d(r, {
                a: r
            }), r
        }, t.d = (n, r) => {
            for (var e in r) t.o(r, e) && !t
                .o(n, e) && Object
                .defineProperty(n, e, {
                    enumerable: !0,
                    get: r[e]
                })
        }, t.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function(
                    "return this")()
            } catch (n) {
                if ("object" == typeof window)
                    return window
            }
        }(), t.o = (n, r) => Object.prototype
        .hasOwnProperty.call(n, r), (() => {
            var n;
            t.g.importScripts && (n = t.g
                .location + "");
            var r = t.g.document;
            if (!n && r && (r
                    .currentScript && (n =
                        r.currentScript
                        .src), !n)) {
                var e = r
                    .getElementsByTagName(
                        "script");
                e.length && (n = e[e
                        .length - 1]
                    .src)
            }
            if (!n) throw new Error(
                "Automatic publicPath is not supported in this browser"
            );
            n = n.replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/,
                    "/"), t.p = n
        })(), t.b = document.baseURI || self
        .location.href, t.nc = void 0, (
            () => {
                var n = t(379),
                    r = t.n(n),
                    e = t(795),
                    o = t.n(e),
                    i = t(569),
                    a = t.n(i),
                    l = t(565),
                    s = t.n(l),
                    d = t(216),
                    c = t.n(d),
                    p = t(589),
                    m = t.n(p),
                    g = t(28),
                    h = {};

                function f(n, r) {
                    const t = document
                        .createElement(n);
                    return t.textContent = r,
                        t
                }

                function u(n, r) {
                    const t = document
                        .createElement(n);
                    return t.id = r, t
                }
                h.styleTagTransform = m(), h
                    .setAttributes = s(), h
                    .insert = a().bind(null,
                        "head"), h.domAPI =
                    o(), h
                    .insertStyleElement = c(),
                    r()(g.Z, h), g.Z && g.Z
                    .locals && g.Z.locals;
                const v = ["Skills",
                         "Contact"
                    ],
                    x = () => {
                        const n = u("div",
                            "hero-container"
                        );
                        return n.appendChild((
                            () => {
                                const
                                    n =
                                    u("section",
                                        "hero"
                                    );
                                return n
                                    .appendChild(
                                        (() => {
                                            const
                                                n =
                                                u("div",
                                                    "hero-content"
                                                );
                                            return n
                                                .appendChild(
                                                    (() => {
                                                        const
                                                            n =
                                                            u("div",
                                                                "personal_photo_container"
                                                            ),
                                                            r =
                                                            u("img",
                                                                "personal_photo"
                                                            );
                                                        return r
                                                            .src =
                                                            "../src/img/Sans titre.png",
                                                            r
                                                            .alt =
                                                            "",
                                                            n
                                                            .appendChild(
                                                                r
                                                            ),
                                                            n
                                                    })
                                                    ()
                                                ),
                                                n
                                                .appendChild(
                                                    (() => {
                                                        const
                                                            n =
                                                            u("div",
                                                                "hero-text"
                                                            ),
                                                            r =
                                                            document
                                                            .createElement(
                                                                "p"
                                                            );
                                                        return r
                                                            .textContent =
                                                            "As a developer with a strong understanding of programming and cloud concepts, I bring a wealth of technical expertise and a passion for continuous learning. Currently, I am working as a RPA Developer at CGI, where I perform automation of server administration tasks using UIPATH Studio, and develop automation scripts using Python. I love staying updated with the latest technologies and taking on challenging projects, and I am eager to contribute to your success.", n.appendChild(r), n
                                                    })
                                                    ()
                                                ),
                                                n
                                        })
                                        ()
                                    ),
                                    n
                            })()), n
                    };
                (() => {
                    const n = document
                        .createElement(
                            "nav"),
                        r = document
                        .createElement(
                            "ul"),
                        t = f("h1",
                            "Jalal Bellouchi"
                        );
                    v.forEach(((n, t) => {
                            const
                                e =
                                document
                                .createElement(
                                    "li"
                                ),
                                o =
                                document
                                .createElement(
                                    "a"
                                );
                            o.setAttribute(
                                    "href",
                                    "#" +
                                    n
                                ),
                                o
                                .textContent =
                                n,
                                o
                                .classList
                                .add(
                                    "nav-link"
                                ),
                                e
                                .appendChild(
                                    o
                                ),
                                r
                                .appendChild(
                                    e
                                )
                        })), n.append(t,
                            r), document
                        .addEventListener(
                            "DOMContentLoaded",
                            (function() {
                                document
                                    .querySelector(
                                        "main"
                                    )
                                    .insertAdjacentElement(
                                        "beforebegin",
                                        n
                                    )
                            }))
                })(), document
                    .addEventListener(
                        "DOMContentLoaded", (
                            function() {
                                document
                                    .querySelector(
                                        "main"
                                    )
                                    .appendChild(
                                        (() => {
                                            const
                                                n =
                                                u("div",
                                                    "hero-container-wrapper"
                                                );
                                            return n
                                                .appendChild(
                                                    (() => {
                                                        const
                                                            n =
                                                            u("div",
                                                                "hero-title"
                                                            ),
                                                            r =
                                                            f("h1",
                                                                "Good to meet you, I am a code wizard named "
                                                            );
                                                        return n
                                                            .appendChild(
                                                                r
                                                            ),
                                                            r
                                                            .setAttribute(
                                                                "data-text",
                                                                "Jalal"
                                                            ),
                                                            n
                                                    })
                                                    ()
                                                ),
                                                n
                                                .appendChild(
                                                    x()
                                                ),
                                                n
                                        })());
                                const n =
                                    document
                                    .querySelector(
                                        "#Projects .project-container:nth-of-type(1) .tech-title"
                                    ),
                                    r =
                                    document
                                    .querySelector(
                                        "#Projects .project-container:nth-of-type(2) .tech-title"
                                    ),
                                    t =
                                    document
                                    .querySelector(
                                        "#Projects .project-container:nth-of-type(3) .tech-title"
                                    ),
                                    e =
                                    document
                                    .querySelector(
                                        "#Projects .project-container:nth-of-type(4) .tech-title"
                                    );
                                n.addEventListener(
                                        "click",
                                        (() => {
                                            window
                                                .open(
                                                    "https://github.com/jalalbello/Library",
                                                    "_blank"
                                                )
                                        })), t
                                    .addEventListener(
                                        "click",
                                        (() => {
                                            window
                                                .open(
                                                    "https://github.com/jalalbello/todolist",
                                                    "_blank"
                                                )
                                        })), e
                                    .addEventListener(
                                        "click",
                                        (() => {
                                            window
                                                .open(
                                                    "https://blastfood.github.io/",
                                                    "_blank"
                                                )
                                        })), r
                                    .addEventListener(
                                        "click",
                                        (() => {
                                            window
                                                .open(
                                                    "https://github.com/jalalbello/restaurant-page",
                                                    "_blank"
                                                )
                                        }))
                            }));
                var b = document
                    .querySelector(
                        ".go-to-top");
                window.onscroll = function() {
                    document.body
                        .scrollTop > 20 ||
                        document
                        .documentElement
                        .scrollTop > 20 ?
                        b.style.display =
                        "block" : b.style
                        .display = "none"
                }, b.addEventListener(
                    "click", (function() {
                        document.body
                            .scrollTop =
                            0,
                            document
                            .documentElement
                            .scrollTop =
                            0
                    }))
            })()
})();
