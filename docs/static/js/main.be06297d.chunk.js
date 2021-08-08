(this["webpackJsonp04-react"] = this["webpackJsonp04-react"] || []).push([
  [0],
  {
    34: function (e, r, a) {},
    49: function (e, r, a) {
      "use strict";
      a.r(r);
      var t = a(1),
        c = a(21),
        s = a.n(c),
        n = a(10),
        i = Object(t.createContext)(),
        o = a(4),
        l = "[auth] login",
        h = "[auth] logout",
        j = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
          switch (r.type) {
            case l:
              return Object(o.a)(
                Object(o.a)({}, r.payload),
                {},
                { logged: !0 }
              );
            case h:
              return { logged: !1 };
            default:
              return e;
          }
        },
        u = a(5),
        b = a(2),
        d = a(13),
        m = a(0),
        p = ["isAuthenticated", "component"],
        O = function (e) {
          var r = e.isAuthenticated,
            a = e.component,
            t = Object(d.a)(e, p);
          return Object(m.jsx)(
            b.b,
            Object(o.a)(
              Object(o.a)({}, t),
              {},
              {
                component: function (e) {
                  return r
                    ? Object(m.jsx)(b.a, { to: "/" })
                    : Object(m.jsx)(a, Object(o.a)({}, e));
                },
              }
            )
          );
        },
        v = ["isAuthenticated", "component"],
        x = function (e) {
          var r = e.isAuthenticated,
            a = e.component,
            t = Object(d.a)(e, v);
          return (
            localStorage.setItem("lastPath", t.location.pathname),
            Object(m.jsx)(
              b.b,
              Object(o.a)(
                Object(o.a)({}, t),
                {},
                {
                  component: function (e) {
                    return r
                      ? Object(m.jsx)(a, Object(o.a)({}, e))
                      : Object(m.jsx)(b.a, { to: "/login" });
                  },
                }
              )
            )
          );
        },
        f = function (e) {
          var r = e.history,
            a = Object(t.useContext)(i).dispatch;
          return Object(m.jsxs)("div", {
            className: "container mt-5",
            children: [
              Object(m.jsx)("h1", { children: "Login" }),
              Object(m.jsx)("hr", {}),
              Object(m.jsx)("button", {
                className: "btn btn-success",
                onClick: function () {
                  var e = localStorage.getItem("lastPath") || "/";
                  a({ type: l, payload: { name: "Leandro" } }), r.replace(e);
                },
                children: "Login",
              }),
            ],
          });
        },
        g = function () {
          var e = Object(t.useContext)(i),
            r = e.user,
            a = e.dispatch,
            c = Object(b.g)();
          return Object(m.jsxs)("nav", {
            className: "navbar navbar-expand-sm navbar-dark bg-dark",
            children: [
              Object(m.jsx)(u.b, {
                className: "navbar-brand",
                to: "/",
                children: "Asociaciones",
              }),
              Object(m.jsx)("div", {
                className: "navbar-collapse",
                children: Object(m.jsxs)("div", {
                  className: "navbar-nav",
                  children: [
                    Object(m.jsx)(u.c, {
                      activeClassName: "active",
                      className: "nav-item nav-link",
                      exact: !0,
                      to: "/marvel",
                      children: "Marvel",
                    }),
                    Object(m.jsx)(u.c, {
                      activeClassName: "active",
                      className: "nav-item nav-link",
                      exact: !0,
                      to: "/dc",
                      children: "DC",
                    }),
                    Object(m.jsx)(u.c, {
                      activeClassName: "active",
                      className: "nav-item nav-link",
                      exact: !0,
                      to: "/search",
                      children: "Search",
                    }),
                  ],
                }),
              }),
              Object(m.jsx)("div", {
                className:
                  "navbar-collapse collapse w-100 order-3 dual-collapse2",
                children: Object(m.jsxs)("ul", {
                  className: "navbar-nav ml-auto",
                  children: [
                    Object(m.jsx)("span", {
                      className: "nav-item nav-link text-info",
                      children: r.name,
                    }),
                    Object(m.jsx)("button", {
                      className: "nav-item nav-link btn",
                      onClick: function () {
                        c.replace("/login"), a({ type: h });
                      },
                      children: "Logout",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        C = [
          {
            id: "dc-batman",
            superhero: "Batman",
            publisher: "DC Comics",
            alter_ego: "Bruce Wayne",
            first_appearance: "Detective Comics #27",
            characters: "Bruce Wayne",
          },
          {
            id: "dc-superman",
            superhero: "Superman",
            publisher: "DC Comics",
            alter_ego: "Kal-El",
            first_appearance: "Action Comics #1",
            characters: "Kal-El",
          },
          {
            id: "dc-flash",
            superhero: "Flash",
            publisher: "DC Comics",
            alter_ego: "Jay Garrick",
            first_appearance: "Flash Comics #1",
            characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
          },
          {
            id: "dc-green",
            superhero: "Green Lantern",
            publisher: "DC Comics",
            alter_ego: "Alan Scott",
            first_appearance: "All-American Comics #16",
            characters:
              "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
          },
          {
            id: "dc-arrow",
            superhero: "Green Arrow",
            publisher: "DC Comics",
            alter_ego: "Oliver Queen",
            first_appearance: "More Fun Comics #73",
            characters: "Oliver Queen",
          },
          {
            id: "dc-wonder",
            superhero: "Wonder Woman",
            publisher: "DC Comics",
            alter_ego: "Princess Diana",
            first_appearance: "All Star Comics #8",
            characters: "Princess Diana",
          },
          {
            id: "dc-martian",
            superhero: "Martian Manhunter",
            publisher: "DC Comics",
            alter_ego: "J'onn J'onzz",
            first_appearance: "Detective Comics #225",
            characters: "Martian Manhunter",
          },
          {
            id: "dc-robin",
            superhero: "Robin/Nightwing",
            publisher: "DC Comics",
            alter_ego: "Dick Grayson",
            first_appearance: "Detective Comics #38",
            characters: "Dick Grayson",
          },
          {
            id: "dc-blue",
            superhero: "Blue Beetle",
            publisher: "DC Comics",
            alter_ego: "Dan Garret",
            first_appearance: "Mystery Men Comics #1",
            characters: "Dan Garret, Ted Kord, Jaime Reyes",
          },
          {
            id: "dc-black",
            superhero: "Black Canary",
            publisher: "DC Comics",
            alter_ego: "Dinah Drake",
            first_appearance: "Flash Comics #86",
            characters: "Dinah Drake, Dinah Lance",
          },
          {
            id: "marvel-spider",
            superhero: "Spider Man",
            publisher: "Marvel Comics",
            alter_ego: "Peter Parker",
            first_appearance: "Amazing Fantasy #15",
            characters: "Peter Parker",
          },
          {
            id: "marvel-captain",
            superhero: "Captain America",
            publisher: "Marvel Comics",
            alter_ego: "Steve Rogers",
            first_appearance: "Captain America Comics #1",
            characters: "Steve Rogers",
          },
          {
            id: "marvel-iron",
            superhero: "Iron Man",
            publisher: "Marvel Comics",
            alter_ego: "Tony Stark",
            first_appearance: "Tales of Suspense #39",
            characters: "Tony Stark",
          },
          {
            id: "marvel-thor",
            superhero: "Thor",
            publisher: "Marvel Comics",
            alter_ego: "Thor Odinson",
            first_appearance: "Journey into Myster #83",
            characters: "Thor Odinson",
          },
          {
            id: "marvel-hulk",
            superhero: "Hulk",
            publisher: "Marvel Comics",
            alter_ego: "Bruce Banner",
            first_appearance: "The Incredible Hulk #1",
            characters: "Bruce Banner",
          },
          {
            id: "marvel-wolverine",
            superhero: "Wolverine",
            publisher: "Marvel Comics",
            alter_ego: "James Howlett",
            first_appearance: "The Incredible Hulk #180",
            characters: "James Howlett",
          },
          {
            id: "marvel-daredevil",
            superhero: "Daredevil",
            publisher: "Marvel Comics",
            alter_ego: "Matthew Michael Murdock",
            first_appearance: "Daredevil #1",
            characters: "Matthew Michael Murdock",
          },
          {
            id: "marvel-hawkeye",
            superhero: "Hawkeye",
            publisher: "Marvel Comics",
            alter_ego: "Clinton Francis Barton",
            first_appearance: "Tales of Suspense #57",
            characters: "Clinton Francis Barton",
          },
          {
            id: "marvel-cyclops",
            superhero: "Cyclops",
            publisher: "Marvel Comics",
            alter_ego: "Scott Summers",
            first_appearance: "X-Men #1",
            characters: "Scott Summers",
          },
          {
            id: "marvel-silver",
            superhero: "Silver Surfer",
            publisher: "Marvel Comics",
            alter_ego: "Norrin Radd",
            first_appearance: "The Fantastic Four #48",
            characters: "Norrin Radd",
          },
        ],
        _ = function (e) {
          var r = e.history,
            a = Object(b.i)().heroeId,
            c = Object(t.useMemo)(
              function () {
                return (
                  (e = a),
                  C.find(function (r) {
                    return r.id === e;
                  })
                );
                var e;
              },
              [a]
            );
          if (!c) return Object(m.jsx)(b.a, { to: "/" });
          var s = c.superhero,
            n = c.publisher,
            i = c.alter_ego,
            o = c.first_appearance,
            l = c.characters;
          return Object(m.jsxs)("div", {
            className: "row mt-5 animate__animated animate__fadeIn",
            children: [
              Object(m.jsx)("div", {
                className: "col-4",
                children: Object(m.jsx)("img", {
                  src: "./assets/heroes/".concat(a, ".jpg"),
                  alt: s,
                  className:
                    "img-thumbnail animate__animated animate__fadeInLeft",
                }),
              }),
              Object(m.jsxs)("div", {
                className: "col-8",
                children: [
                  Object(m.jsx)("h3", { children: s }),
                  Object(m.jsxs)("ul", {
                    className: "list-group list-group-flush",
                    children: [
                      Object(m.jsxs)("li", {
                        className: "list-group-item",
                        children: [
                          Object(m.jsx)("b", { children: "Alter ego: " }),
                          i,
                        ],
                      }),
                      Object(m.jsxs)("li", {
                        className: "list-group-item",
                        children: [
                          Object(m.jsx)("b", { children: "Publisher: " }),
                          n,
                        ],
                      }),
                      Object(m.jsxs)("li", {
                        className: "list-group-item",
                        children: [
                          Object(m.jsx)("b", {
                            children: "First Appearance: ",
                          }),
                          o,
                        ],
                      }),
                    ],
                  }),
                  Object(m.jsx)("h5", {
                    className: "mt-4",
                    children: "Characters",
                  }),
                  Object(m.jsx)("p", { children: l }),
                  Object(m.jsx)("button", {
                    className: "btn btn-outline-success",
                    onClick: function () {
                      r.length <= 2 ? r.push("/") : r.goBack();
                    },
                    children: "Return",
                  }),
                ],
              }),
            ],
          });
        },
        N =
          (a(34),
          function (e) {
            var r = e.id,
              a = e.superhero,
              t = e.publisher,
              c = e.alter_ego,
              s = e.first_appearance,
              n = e.characters;
            return Object(m.jsxs)(u.b, {
              to: "./hero/".concat(r),
              className: "my-card",
              children: [
                Object(m.jsx)("img", {
                  src: "./assets/heroes/".concat(r, ".jpg"),
                  className: "img img-responsive",
                  alt: a,
                }),
                Object(m.jsx)("div", {
                  className: "profile-name",
                  children: a,
                }),
                Object(m.jsx)("div", {
                  className: "profile-position",
                  children: c,
                }),
                Object(m.jsx)("div", {
                  className: "profile-overview",
                  children: Object(m.jsx)("div", {
                    className: "profile-overview",
                    children: Object(m.jsx)("div", {
                      className: "row",
                      children: Object(m.jsxs)("div", {
                        className: "col-ms-4",
                        children: [
                          Object(m.jsx)("h3", { children: t }),
                          Object(m.jsxs)("p", {
                            children: [
                              "Primera aparici\xf3n: ",
                              Object(m.jsx)("br", {}),
                              s,
                            ],
                          }),
                          c !== n && Object(m.jsx)("p", { children: n }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            });
          }),
        y = function (e) {
          var r = e.publisher,
            a = Object(t.useMemo)(
              function () {
                return (function (e) {
                  if (!["DC Comics", "Marvel Comics"].includes(e))
                    throw new Error(
                      'Publisher "'.concat(e, '" no es correcto')
                    );
                  return C.filter(function (r) {
                    return r.publisher === e;
                  });
                })(r);
              },
              [r]
            );
          return Object(m.jsx)("ul", {
            className: "card-columns animate__animated animate__fadeIn",
            children: a.map(function (e) {
              return Object(m.jsx)(N, Object(o.a)({}, e), e.id);
            }),
          });
        },
        S = function () {
          return Object(m.jsxs)("div", {
            children: [
              Object(m.jsx)("h1", { children: "Marvel Screen" }),
              Object(m.jsx)("hr", {}),
              Object(m.jsx)(y, { publisher: "Marvel Comics" }),
            ],
          });
        },
        k = function () {
          return Object(m.jsxs)("div", {
            children: [
              Object(m.jsx)("h1", { children: "Dc Screen" }),
              Object(m.jsx)("hr", {}),
              Object(m.jsx)(y, { publisher: "DC Comics" }),
            ],
          });
        },
        M = a(23),
        D = a.n(M),
        w = a(12),
        A = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = Object(t.useState)(e),
            a = Object(n.a)(r, 2),
            c = a[0],
            s = a[1],
            i = function () {
              s(e);
            },
            l = function (e) {
              var r = e.target;
              s(
                Object(o.a)(
                  Object(o.a)({}, c),
                  {},
                  Object(w.a)({}, r.name, r.value)
                )
              );
            };
          return [c, l, i];
        },
        B = function (e) {
          var r = e.history,
            a = Object(b.h)(),
            c = D.a.parse(a.search).q,
            s = void 0 === c ? "" : c,
            i = A({ searchText: s }),
            l = Object(n.a)(i, 2),
            h = l[0],
            j = l[1],
            u = h.searchText,
            d = Object(t.useMemo)(
              function () {
                return (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return "" === e
                    ? []
                    : ((e = e.toLowerCase()),
                      C.filter(function (r) {
                        return r.superhero.toLowerCase().includes(e);
                      }));
                })(s);
              },
              [s]
            );
          return Object(m.jsxs)("div", {
            children: [
              Object(m.jsx)("h1", { children: "SearchScreen" }),
              Object(m.jsx)("hr", {}),
              Object(m.jsxs)("div", {
                className: "row",
                children: [
                  Object(m.jsxs)("div", {
                    className: "col-5",
                    children: [
                      Object(m.jsx)("h4", { children: "Search Form" }),
                      Object(m.jsx)("hr", {}),
                      Object(m.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), r.push("?q=".concat(u));
                        },
                        children: [
                          Object(m.jsx)("input", {
                            type: "text",
                            name: "searchText",
                            placeholder: "Find your Hero",
                            className: "form-control",
                            value: u,
                            onChange: j,
                            autoComplete: "off",
                          }),
                          Object(m.jsx)("button", {
                            type: "submit",
                            className: "btn btn-block btn-outline-primary mt-2",
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: "col-7",
                    children: [
                      Object(m.jsx)("h4", { children: "Results" }),
                      Object(m.jsx)("hr", {}),
                      "" === s &&
                        Object(m.jsx)("div", {
                          className: "alert alert-info",
                          children: "Search a hero",
                        }),
                      "" !== s &&
                        0 === d.length &&
                        Object(m.jsxs)("div", {
                          className: "alert alert-danger",
                          children: ["There is no a hero with ", s],
                        }),
                      d.map(function (e) {
                        return Object(m.jsx)(N, Object(o.a)({}, e), e.id);
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        J = function () {
          return Object(m.jsxs)(m.Fragment, {
            children: [
              Object(m.jsx)(g, {}),
              Object(m.jsx)("div", {
                className: "mt-2 ml-4 mr-4",
                children: Object(m.jsxs)(b.d, {
                  children: [
                    Object(m.jsx)(b.b, {
                      exact: !0,
                      path: "/marvel",
                      component: S,
                    }),
                    Object(m.jsx)(b.b, {
                      exact: !0,
                      path: "/hero/:heroeId",
                      component: _,
                    }),
                    Object(m.jsx)(b.b, {
                      exact: !0,
                      path: "/dc",
                      component: k,
                    }),
                    Object(m.jsx)(b.b, {
                      exact: !0,
                      path: "/search",
                      component: B,
                    }),
                    Object(m.jsx)(b.a, { to: "/marvel" }),
                  ],
                }),
              }),
            ],
          });
        },
        T = function () {
          var e = Object(t.useContext)(i).user;
          return Object(m.jsx)(u.a, {
            children: Object(m.jsx)("div", {
              children: Object(m.jsxs)(b.d, {
                children: [
                  Object(m.jsx)(O, {
                    exact: !0,
                    path: "/login",
                    component: f,
                    isAuthenticated: e.logged,
                  }),
                  Object(m.jsx)(x, {
                    path: "/",
                    component: J,
                    isAuthenticated: e.logged,
                  }),
                ],
              }),
            }),
          });
        },
        F = function () {
          return JSON.parse(localStorage.getItem("user")) || { logged: !1 };
        },
        I = function () {
          var e = Object(t.useReducer)(j, {}, F),
            r = Object(n.a)(e, 2),
            a = r[0],
            c = r[1];
          return (
            Object(t.useEffect)(
              function () {
                localStorage.setItem("user", JSON.stringify(a));
              },
              [a]
            ),
            Object(m.jsx)(i.Provider, {
              value: { user: a, dispatch: c },
              children: Object(m.jsx)(T, {}),
            })
          );
        };
      s.a.render(Object(m.jsx)(I, {}), document.getElementById("root"));
    },
  },
  [[49, 1, 2]],
]);
//# sourceMappingURL=main.be06297d.chunk.js.map
