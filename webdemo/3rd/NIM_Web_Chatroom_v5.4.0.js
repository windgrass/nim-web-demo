!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Chatroom = t() : e.Chatroom = t()
}(window, function () {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
        }, n.r = function (e) {
            Object.defineProperty(e, "__esModule", {value: !0})
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 285)
    }([function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
        n(15);
        var s = n(128), a = n(110);
        n(205);
        var c, u, l = n(24), p = l.getGlobal(), m = /\s+/;
        l.deduplicate = function (e) {
            var t = [];
            return e.forEach(function (e) {
                -1 === t.indexOf(e) && t.push(e)
            }), t
        }, l.capFirstLetter = function (e) {
            return e ? (e = "" + e).slice(0, 1).toUpperCase() + e.slice(1) : ""
        }, l.guid = (c = function () {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }, function () {
            return c() + c() + c() + c() + c() + c() + c() + c()
        }), l.extend = function (e, t, n) {
            for (var r in t) void 0 !== e[r] && !0 !== n || (e[r] = t[r])
        }, l.filterObj = function (e, t) {
            var n = {};
            return l.isString(t) && (t = t.split(m)), t.forEach(function (t) {
                e.hasOwnProperty(t) && (n[t] = e[t])
            }), n
        }, l.copy = function (e, t) {
            return t = t || {}, e ? (Object.keys(e).forEach(function (n) {
                l.exist(e[n]) && (t[n] = e[n])
            }), t) : t
        }, l.copyWithNull = function (e, t) {
            return t = t || {}, e ? (Object.keys(e).forEach(function (n) {
                (l.exist(e[n]) || l.isnull(e[n])) && (t[n] = e[n])
            }), t) : t
        }, l.findObjIndexInArray = function (e, t) {
            e = e || [];
            var n = t.keyPath || "id", r = -1;
            return e.some(function (e, o) {
                if (a(e, n) === t.value) return r = o, !0
            }), r
        }, l.findObjInArray = function (e, t) {
            var n = l.findObjIndexInArray(e, t);
            return -1 === n ? null : e[n]
        }, l.mergeObjArray = function () {
            var e = [], t = [].slice.call(arguments, 0, -1), n = arguments[arguments.length - 1];
            l.isArray(n) && (t.push(n), n = {});
            var r, o = n.keyPath = n.keyPath || "id";
            for (n.sortPath = n.sortPath || o; !e.length && t.length;) e = (e = t.shift() || []).slice(0);
            return t.forEach(function (t) {
                t && t.forEach(function (t) {
                    -1 !== (r = l.findObjIndexInArray(e, {
                        keyPath: o,
                        value: a(t, o)
                    })) ? e[r] = l.merge({}, e[r], t) : e.push(t)
                })
            }), n.notSort || (e = l.sortObjArray(e, n)), e
        }, l.cutObjArray = function (e) {
            var t = e.slice(0), n = arguments.length, r = [].slice.call(arguments, 1, n - 1), o = arguments[n - 1];
            l.isObject(o) || (r.push(o), o = {});
            var i, s = o.keyPath = o.keyPath || "id";
            return r.forEach(function (e) {
                l.isArray(e) || (e = [e]), e.forEach(function (e) {
                    e && (o.value = a(e, s), -1 !== (i = l.findObjIndexInArray(t, o)) && t.splice(i, 1))
                })
            }), t
        }, l.sortObjArray = function (e, t) {
            var n = (t = t || {}).sortPath || "id";
            s.insensitive = !!t.insensitive;
            var r, o, i, c = !!t.desc;
            return i = l.isFunction(t.compare) ? t.compare : function (e, t) {
                return r = a(e, n), o = a(t, n), c ? s(o, r) : s(r, o)
            }, e.sort(i)
        }, l.emptyFunc = function () {
        }, l.isEmptyFunc = function (e) {
            return e === l.emptyFunc
        }, l.notEmptyFunc = function (e) {
            return e !== l.emptyFunc
        }, l.splice = function (e, t, n) {
            return [].splice.call(e, t, n)
        }, l.reshape2d = function (e, t) {
            if (Array.isArray(e)) {
                l.verifyParamType("type", t, "number", "util::reshape2d");
                var n = e.length;
                if (n <= t) return [e];
                for (var r = Math.ceil(n / t), o = [], i = 0; i < r; i++) o.push(e.slice(i * t, (i + 1) * t));
                return o
            }
            return e
        }, l.flatten2d = function (e) {
            if (Array.isArray(e)) {
                var t = [];
                return e.forEach(function (e) {
                    t = t.concat(e)
                }), t
            }
            return e
        }, l.dropArrayDuplicates = function (e) {
            if (Array.isArray(e)) {
                for (var t = {}, n = []; e.length > 0;) {
                    t[e.shift()] = !0
                }
                for (var r in t) !0 === t[r] && n.push(r);
                return n
            }
            return e
        }, l.onError = function (e) {
            throw new function (e) {
                "object" === (void 0 === e ? "undefined" : (0, i.default)(e)) ? (this.callFunc = e.callFunc || null, this.message = e.message || "UNKNOW ERROR") : this.message = e, this.time = new Date, this.timetag = +this.time
            }(e)
        }, l.verifyParamPresent = function (e, t, n, r) {
            n = n || "";
            var o = !1;
            switch (l.typeOf(t)) {
                case"undefined":
                case"null":
                    o = !0;
                    break;
                case"string":
                    "" === t && (o = !0);
                    break;
                case"object":
                    Object.keys(t).length || (o = !0);
                    break;
                case"array":
                    t.length ? t.some(function (e) {
                        if (l.notexist(e)) return o = !0, !0
                    }) : o = !0
            }
            o && l.onParamAbsent(n + e, r)
        }, l.onParamAbsent = function (e, t) {
            l.onParamError("缺少参数 " + e + ", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined", t)
        }, l.verifyParamAbsent = function (e, t, n, r) {
            n = n || "", void 0 !== t && l.onParamPresent(n + e, r)
        }, l.onParamPresent = function (e, t) {
            l.onParamError("多余的参数 " + e, t)
        }, l.verifyParamType = function (e, t, n, r) {
            var o = l.typeOf(t).toLowerCase();
            l.isArray(n) || (n = [n]);
            var i = !0;
            switch (-1 === (n = n.map(function (e) {
                return e.toLowerCase()
            })).indexOf(o) && (i = !1), o) {
                case"number":
                    isNaN(t) && (i = !1)
            }
            i || l.onParamInvalidType(e, n, "", r)
        }, l.onParamInvalidType = function (e, t, n, r) {
            n = n || "", t = l.isArray(t) ? (t = t.map(function (e) {
                return '"' + e + '"'
            })).join(", ") : '"' + t + '"', l.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]", r)
        }, l.verifyParamValid = function (e, t, n, r) {
            l.isArray(n) || (n = [n]), -1 === n.indexOf(t) && l.onParamInvalidValue(e, n, r)
        }, l.onParamInvalidValue = function (e, t, n) {
            l.isArray(t) || (t = [t]), t = t.map(function (e) {
                return '"' + e + '"'
            }), l.isArray(t) && (t = t.join(", ")), l.onParamError("参数 " + e + "值错误, 合法的值包括: [" + JSON.stringify(t) + "]", n)
        }, l.verifyParamMin = function (e, t, n, r) {
            t < n && l.onParamError("参数" + e + "的值不能小于" + n, r)
        }, l.verifyParamMax = function (e, t, n, r) {
            t > n && l.onParamError("参数" + e + "的值不能大于" + n, r)
        }, l.verifyArrayMax = function (e, t, n, r) {
            t.length > n && l.onParamError("参数" + e + "的长度不能大于" + n, r)
        }, l.verifyEmail = (u = /^\S+@\S+$/, function (e, t, n) {
            u.test(t) || l.onParamError("参数" + e + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符", n)
        }), l.verifyTel = function () {
            var e = /^[+\-()\d]+$/;
            return function (t, n, r) {
                e.test(n) || l.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字", r)
            }
        }(), l.verifyBirth = function () {
            var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
            return function (t, n, r) {
                e.test(n) || l.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"', r)
            }
        }(), l.onParamError = function (e, t) {
            l.onError({message: e, callFunc: t})
        }, l.verifyOptions = function (e, t, n, r, o) {
            if (e = e || {}, t && (l.isString(t) && (t = t.split(m)), l.isArray(t))) {
                "boolean" != typeof n && (o = n || null, n = !0, r = "");
                var i = n ? l.verifyParamPresent : l.verifyParamAbsent;
                t.forEach(function (t) {
                    i.call(l, t, e[t], r, o)
                })
            }
            return e
        }, l.verifyParamAtLeastPresentOne = function (e, t, n) {
            t && (l.isString(t) && (t = t.split(m)), l.isArray(t) && (t.some(function (t) {
                return l.exist(e[t])
            }) || l.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个", n)))
        }, l.verifyParamPresentJustOne = function (e, t, n) {
            t && (l.isString(t) && (t = t.split(m)), l.isArray(t) && 1 !== t.reduce(function (t, n) {
                return l.exist(e[n]) && t++, t
            }, 0) && l.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个", n))
        }, l.verifyBooleanWithDefault = function (e, t, n, r, o) {
            l.undef(n) && (n = !0), m.test(t) && (t = t.split(m)), l.isArray(t) ? t.forEach(function (t) {
                l.verifyBooleanWithDefault(e, t, n, r, o)
            }) : void 0 === e[t] ? e[t] = n : l.isBoolean(e[t]) || l.onParamInvalidType(t, "boolean", r, o)
        }, l.verifyFileInput = function (e, t) {
            return l.verifyParamPresent("fileInput", e, "", t), l.isString(e) && ((e = document.getElementById(e)) || l.onParamError("找不到要上传的文件对应的input, 请检查fileInput id " + e, t)), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || l.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:" + e.tagName + ", filetype:" + e.type, t), e
        }, l.verifyFileType = function (e, t) {
            l.verifyParamValid("type", e, l.validFileTypes, t)
        }, l.verifyCallback = function (e, t, n) {
            m.test(t) && (t = t.split(m)), l.isArray(t) ? t.forEach(function (t) {
                l.verifyCallback(e, t, n)
            }) : e[t] ? l.isFunction(e[t]) || l.onParamInvalidType(t, "function", "", n) : e[t] = l.emptyFunc
        }, l.verifyFileUploadCallback = function (e, t) {
            l.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel", t)
        }, l.validFileTypes = ["image", "audio", "video", "file"], l.validFileExts = {
            image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
            audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
            video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
        }, l.filterFiles = function (e, t) {
            var n, r, o = "file" === (t = t.toLowerCase()), i = [];
            return [].forEach.call(e, function (e) {
                if (o) i.push(e); else if (n = e.name.slice(e.name.lastIndexOf(".") + 1), (r = e.type.split("/"))[0] && r[1]) {
                    (r[0].toLowerCase() === t || -1 !== l.validFileExts[t].indexOf(n)) && i.push(e)
                }
            }), i
        };
        var d, f, h = l.supportFormData = l.notundef(p.FormData);
        l.getFileName = function (e) {
            return e = l.verifyFileInput(e), h ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1)
        }, l.getFileInfo = (d = {ppt: 1, pptx: 2, pdf: 3}, function (e) {
            var t = {};
            if (!(e = l.verifyFileInput(e)).files) return t;
            var n = e.files[0];
            return h && (t.name = n.name, t.size = n.size, t.type = n.name.match(/\.(\w+)$/), t.type = t.type && t.type[1].toLowerCase(), t.transcodeType = d[t.type] || 0), t
        }), l.sizeText = (f = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"], function (e) {
            var t, n = 0;
            do {
                t = (e = Math.floor(100 * e) / 100) + f[n], e /= 1024, n++
            } while (e > 1);
            return t
        }), l.promises2cmds = function (e) {
            return e.map(function (e) {
                return e.cmd
            })
        }, l.objs2accounts = function (e) {
            return e.map(function (e) {
                return e.account
            })
        }, l.teams2ids = function (e) {
            return e.map(function (e) {
                return e.teamId
            })
        }, l.objs2ids = function (e) {
            return e.map(function (e) {
                return e.id
            })
        }, l.getMaxUpdateTime = function (e) {
            var t = e.map(function (e) {
                return +e.updateTime
            });
            return Math.max.apply(Math, t)
        }, l.genCheckUniqueFunc = function (e, t) {
            return e = e || "id", t = t || 1e3, function (t) {
                this.uniqueSet = this.uniqueSet || {}, this.uniqueSet[e] = this.uniqueSet[e] || {};
                var n = this.uniqueSet[e], r = t[e];
                return !n[r] && (n[r] = !0, !0)
            }
        }, l.fillPropertyWithDefault = function (e, t, n) {
            return !!l.undef(e[t]) && (e[t] = n, !0)
        }, e.exports = l
    }, function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (e, t, n) {
        var r = n(37)("wks"), o = n(27), i = n(1).Symbol, s = "function" == typeof i;
        (e.exports = function (e) {
            return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
        }).store = r
    }, function (e, t) {
        var n = e.exports = {version: "2.5.6"};
        "number" == typeof __e && (__e = n)
    }, function (e, t, n) {
        "use strict";
        var r = {
            info: {
                hash: "'14a262be2a5c056d718af2102ad68c05edbe688b",
                shortHash: "14a262be'",
                version: "5.4.0",
                sdkVersion: "50",
                nrtcVersion: "4.1.0",
                nrtcSdkVersion: "1",
                protocolVersion: 1
            },
            agentVersion: "2.7.0.710",
            lbsUrl: "https://lbs.netease.im/lbs/webconf.jsp",
            roomserver: "roomserver.netease.im",
            connectTimeout: 1e4,
            xhrTimeout: 1e4,
            socketTimeout: 1e4,
            reconnectionDelay: 800,
            reconnectionDelayMax: 1e4,
            reconnectionJitter: .01,
            heartbeatInterval: 3e4,
            cmdTimeout: 1e4,
            defaultReportUrl: "https://dr.netease.im/1.gif",
            isWeixinApp: !1,
            isNodejs: !1,
            isRN: !1,
            PUSHTOKEN: "",
            PUSHCONFIG: {},
            CLIENTTYPE: 16,
            formatSocketUrl: function (e) {
                var t = e.url, n = e.secure ? "https" : "http";
                return -1 === t.indexOf("http") ? n + "://" + t : t
            },
            uploadUrl: "https://nos.netease.com",
            replaceUrl: "https://{bucket}.nosdn.127.net/{object}",
            downloadHost: "nos.netease.com",
            downloadUrl: "https://{bucket}.nosdn.127.net/{object}",
            httpsEnabled: !1,
            genUploadUrl: function (e) {
                return r.uploadUrl + "/" + e
            },
            genDownloadUrl: function (e, t) {
                var n = r.replaceUrl;
                return /^http/.test(n) ? r.httpsEnabled && (n = n.replace("http", "https")) : n = r.httpsEnabled ? "https://" + n : "http://" + n, n.replace("{bucket}", e).replace("{object}", t)
            }
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = s(n(99)), o = s(n(88)),
            i = "function" == typeof o.default && "symbol" == typeof r.default ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
            };

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = "function" == typeof o.default && "symbol" === i(r.default) ? function (e) {
            return void 0 === e ? "undefined" : i(e)
        } : function (e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
        }
    }, function (e, t, n) {
        var r = n(9), o = n(57), i = n(39), s = Object.defineProperty;
        t.f = n(8) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return s(e, t, n)
            } catch (e) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t, n) {
        e.exports = !n(16)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        var r = n(11);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function (e, t, n) {
        var r = n(6), o = n(19);
        e.exports = n(8) ? function (e, t, n) {
            return r.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, n) {
        var r = n(54), o = n(40);
        e.exports = function (e) {
            return r(o(e))
        }
    }, function (e, t, n) {
        var r = n(1), o = n(3), i = n(44), s = n(10), a = n(7), c = function (e, t, n) {
            var u, l, p, m = e & c.F, d = e & c.G, f = e & c.S, h = e & c.P, y = e & c.B, g = e & c.W,
                v = d ? o : o[t] || (o[t] = {}), b = v.prototype, k = d ? r : f ? r[t] : (r[t] || {}).prototype;
            for (u in d && (n = t), n) (l = !m && k && void 0 !== k[u]) && a(v, u) || (p = l ? k[u] : n[u], v[u] = d && "function" != typeof k[u] ? n[u] : y && l ? i(p, r) : g && k[u] == p ? function (e) {
                var t = function (t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(p) : h && "function" == typeof p ? i(Function.call, p) : p, h && ((v.virtual || (v.virtual = {}))[u] = p, e & c.R && b && !b[u] && s(b, u, p)))
        };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
    }, , function (e, t, n) {
        "use strict";
        (function (t) {
            var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
            var s = function () {
                var e = "object" === (void 0 === t ? "undefined" : (0, i.default)(t)) ? t : window,
                    n = Math.pow(2, 53) - 1, r = /\bOpera/, o = Object.prototype, s = o.hasOwnProperty, a = o.toString;

                function c(e) {
                    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                }

                function u(e) {
                    return e = f(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e)
                }

                function l(e, t) {
                    for (var n in e) s.call(e, n) && t(e[n], n, e)
                }

                function p(e) {
                    return null == e ? c(e) : a.call(e).slice(8, -1)
                }

                function m(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?")
                }

                function d(e, t) {
                    var r = null;
                    return function (e, t) {
                        var r = -1, o = e ? e.length : 0;
                        if ("number" == typeof o && o > -1 && o <= n) for (; ++r < o;) t(e[r], r, e); else l(e, t)
                    }(e, function (n, o) {
                        r = t(r, n, o, e)
                    }), r
                }

                function f(e) {
                    return String(e).replace(/^ +| +$/g, "")
                }

                return function t(n) {
                    var o = e,
                        s = n && "object" === (void 0 === n ? "undefined" : (0, i.default)(n)) && "String" != p(n);
                    s && (o = n, n = null);
                    var c = o.navigator || {}, h = c.userAgent || "";
                    n || (n = h);
                    var y, g, v, b, k,
                        T = s ? !!c.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(a.toString()),
                        M = s ? "Object" : "ScriptBridgingProxyObject", S = s ? "Object" : "Environment",
                        x = s && o.java ? "JavaPackage" : p(o.java), w = s ? "Object" : "RuntimeObject",
                        C = /\bJava/.test(x) && o.java, _ = C && p(o.environment) == S, O = C ? "a" : "α",
                        P = C ? "b" : "β", I = o.document || {}, E = o.operamini || o.opera,
                        A = r.test(A = s && E ? E["[[Class]]"] : p(E)) ? A : E = null, N = n, j = [], F = null,
                        R = n == h, L = R && E && "function" == typeof E.version && E.version(),
                        D = d([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (e, t) {
                            return e || RegExp("\\b" + (t.pattern || m(t)) + "\\b", "i").exec(n) && (t.label || t)
                        }), U = function (e) {
                            return d(e, function (e, t) {
                                return e || RegExp("\\b" + (t.pattern || m(t)) + "\\b", "i").exec(n) && (t.label || t)
                            })
                        }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "Edge"
                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        }, "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        }, {label: "IE", pattern: "IEMobile"}, {label: "IE", pattern: "MSIE"}, "Safari"]),
                        q = W([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        }, {label: "Galaxy S4", pattern: "GT-I9500"}, {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        }, {label: "Galaxy S6", pattern: "SM-G920"}, {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        }, {label: "Galaxy S7", pattern: "SM-G930"}, {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), B = function (e) {
                            return d(e, function (e, t, r) {
                                return e || (t[q] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(q)] || RegExp("\\b" + m(r) + "(?:\\b|\\w*\\d)", "i").exec(n)) && r
                            })
                        }({
                            Apple: {iPad: 1, iPhone: 1, iPod: 1},
                            Archos: {},
                            Amazon: {Kindle: 1, "Kindle Fire": 1},
                            Asus: {Transformer: 1},
                            "Barnes & Noble": {Nook: 1},
                            BlackBerry: {PlayBook: 1},
                            Google: {"Google TV": 1, Nexus: 1},
                            HP: {TouchPad: 1},
                            HTC: {},
                            LG: {},
                            Microsoft: {Xbox: 1, "Xbox One": 1},
                            Motorola: {Xoom: 1},
                            Nintendo: {"Wii U": 1, Wii: 1},
                            Nokia: {Lumia: 1},
                            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                            Sony: {PlayStation: 1, "PlayStation Vita": 1}
                        }), H = function (e) {
                            return d(e, function (e, t) {
                                var r = t.pattern || m(t);
                                return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (e = function (e, t, n) {
                                    var r = {
                                        "10.0": "10",
                                        6.4: "10 Technical Preview",
                                        6.3: "8.1",
                                        6.2: "8",
                                        6.1: "Server 2008 R2 / 7",
                                        "6.0": "Server 2008 / Vista",
                                        5.2: "Server 2003 / XP 64-bit",
                                        5.1: "XP",
                                        5.01: "2000 SP1",
                                        "5.0": "2000",
                                        "4.0": "NT",
                                        "4.90": "ME"
                                    };
                                    return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = u(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                }(e, r, t.label || t)), e
                            })
                        }(["Windows Phone", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                    function W(e) {
                        return d(e, function (e, t) {
                            var r = t.pattern || m(t);
                            return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((e = String(t.label && !RegExp(r, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = u(e[0].replace(RegExp(r, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                        })
                    }

                    if (D && (D = [D]), B && !q && (q = W([B])), (y = /\bGoogle TV\b/.exec(q)) && (q = y[0]), /\bSimulator\b/i.test(n) && (q = (q ? q + " " : "") + "Simulator"), "Opera Mini" == U && /\bOPiOS\b/.test(n) && j.push("running in Turbo/Uncompressed mode"), "IE" == U && /\blike iPhone OS\b/.test(n) ? (B = (y = t(n.replace(/like iPhone OS/, ""))).manufacturer, q = y.product) : /^iP/.test(q) ? (U || (U = "Safari"), H = "iOS" + ((y = / OS ([\d_]+)/i.exec(n)) ? " " + y[1].replace(/_/g, ".") : "")) : "Konqueror" != U || /buntu/i.test(H) ? B && "Google" != B && (/Chrome/.test(U) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(q)) || /\bAndroid\b/.test(H) && /^Chrome/.test(U) && /\bVersion\//i.test(n) ? (U = "Android Browser", H = /\bAndroid\b/.test(H) ? H : "Android") : "Silk" == U ? (/\bMobi/i.test(n) || (H = "Android", j.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && j.unshift("accelerated")) : "PaleMoon" == U && (y = /\bFirefox\/([\d.]+)\b/.exec(n)) ? j.push("identifying as Firefox " + y[1]) : "Firefox" == U && (y = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (H || (H = "Firefox OS"), q || (q = y[1])) : !U || (y = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(U)) ? (U && !q && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(y + "/") + 8)) && (U = null), (y = q || B || H) && (q || B || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(H)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(H) ? H : y) + " Browser")) : "Electron" == U && (y = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && j.push("Chromium " + y) : H = "Kubuntu", L || (L = d(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", m(U), "(?:Firefox|Minefield|NetFront)"], function (e, t) {
                        return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
                    })), (y = ("iCab" == D && parseFloat(L) > 3 ? "WebKit" : /\bOpera\b/.test(U) && (/\bOPR\b/.test(n) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(D) && "WebKit" || !D && /\bMSIE\b/i.test(n) && ("Mac OS" == H ? "Tasman" : "Trident") || "WebKit" == D && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront") && (D = [y]), "IE" == U && (y = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (U += " Mobile", H = "Windows Phone " + (/\+$/.test(y) ? y : y + ".x"), j.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (U = "IE Mobile", H = "Windows Phone 8.x", j.unshift("desktop mode"), L || (L = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : "IE" != U && "Trident" == D && (y = /\brv:([\d.]+)/.exec(n)) && (U && j.push("identifying as " + U + (L ? " " + L : "")), U = "IE", L = y[1]), R) {
                        if (b = "global", k = null != (v = o) ? (0, i.default)(v[b]) : "number", /^(?:boolean|number|string|undefined)$/.test(k) || "object" == k && !v[b]) p(y = o.runtime) == M ? (U = "Adobe AIR", H = y.flash.system.Capabilities.os) : p(y = o.phantom) == w ? (U = "PhantomJS", L = (y = y.version || null) && y.major + "." + y.minor + "." + y.patch) : "number" == typeof I.documentMode && (y = /\bTrident\/(\d+)/i.exec(n)) ? (L = [L, I.documentMode], (y = +y[1] + 4) != L[1] && (j.push("IE " + L[1] + " mode"), D && (D[1] = ""), L[1] = y), L = "IE" == U ? String(L[1].toFixed(1)) : L[0]) : "number" == typeof I.documentMode && /^(?:Chrome|Firefox)\b/.test(U) && (j.push("masking as " + U + " " + L), U = "IE", L = "11.0", D = ["Trident"], H = "Windows"); else if (C && (N = (y = C.lang.System).getProperty("os.arch"), H = H || y.getProperty("os.name") + " " + y.getProperty("os.version")), _) {
                            try {
                                L = o.require("ringo/engine").version.join("."), U = "RingoJS"
                            } catch (e) {
                                (y = o.system) && y.global.system == o.system && (U = "Narwhal", H || (H = y[0].os || null))
                            }
                            U || (U = "Rhino")
                        } else "object" === (0, i.default)(o.process) && !o.process.browser && (y = o.process) && ("object" === (0, i.default)(y.versions) && ("string" == typeof y.versions.electron ? (j.push("Node " + y.versions.node), U = "Electron", L = y.versions.electron) : "string" == typeof y.versions.nw && (j.push("Chromium " + L, "Node " + y.versions.node), U = "NW.js", L = y.versions.nw)), U || (U = "Node.js", N = y.arch, H = y.platform, L = (L = /[\d.]+/.exec(y.version)) ? L[0] : null));
                        H = H && u(H)
                    }
                    if (L && (y = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(L) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (R && c.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (F = /b/i.test(y) ? "beta" : "alpha", L = L.replace(RegExp(y + "\\+?$"), "") + ("beta" == F ? P : O) + (/\d+\+?/.exec(y) || "")), "Fennec" == U || "Firefox" == U && /\b(?:Android|Firefox OS)\b/.test(H)) U = "Firefox Mobile"; else if ("Maxthon" == U && L) L = L.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(q)) "Xbox 360" == q && (H = null), "Xbox 360" == q && /\bIEMobile\b/.test(n) && j.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(U) && (!U || q || /Browser|Mobi/.test(U)) || "Windows CE" != H && !/Mobi/i.test(n)) if ("IE" == U && R) try {
                        null === o.external && j.unshift("platform preview")
                    } catch (e) {
                        j.unshift("embedded")
                    } else (/\bBlackBerry\b/.test(q) || /\bBB10\b/.test(n)) && (y = (RegExp(q.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || L) ? (H = ((y = [y, /BB10/.test(n)])[1] ? (q = null, B = "BlackBerry") : "Device Software") + " " + y[0], L = null) : this != l && "Wii" != q && (R && E || /Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(n) || "Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(H) || "IE" == U && (H && !/^Win/.test(H) && L > 5.5 || /\bWindows XP\b/.test(H) && L > 8 || 8 == L && !/\bTrident\b/.test(n))) && !r.test(y = t.call(l, n.replace(r, "") + ";")) && y.name && (y = "ing as " + y.name + ((y = y.version) ? " " + y : ""), r.test(U) ? (/\bIE\b/.test(y) && "Mac OS" == H && (H = null), y = "identify" + y) : (y = "mask" + y, U = A ? u(A.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(y) && (H = null), R || (L = null)), D = ["Presto"], j.push(y)); else U += " Mobile";
                    (y = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (y = [parseFloat(y.replace(/\.(\d)$/, ".0$1")), y], "Safari" == U && "+" == y[1].slice(-1) ? (U = "WebKit Nightly", F = "alpha", L = y[1].slice(0, -1)) : L != y[1] && L != (y[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1]) || (L = null), y[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1], 537.36 == y[0] && 537.36 == y[2] && parseFloat(y[1]) >= 28 && "WebKit" == D && (D = ["Blink"]), R && (T || y[1]) ? (D && (D[1] = "like Chrome"), y = y[1] || ((y = y[0]) < 530 ? 1 : y < 532 ? 2 : y < 532.05 ? 3 : y < 533 ? 4 : y < 534.03 ? 5 : y < 534.07 ? 6 : y < 534.1 ? 7 : y < 534.13 ? 8 : y < 534.16 ? 9 : y < 534.24 ? 10 : y < 534.3 ? 11 : y < 535.01 ? 12 : y < 535.02 ? "13+" : y < 535.07 ? 15 : y < 535.11 ? 16 : y < 535.19 ? 17 : y < 536.05 ? 18 : y < 536.1 ? 19 : y < 537.01 ? 20 : y < 537.11 ? "21+" : y < 537.13 ? 23 : y < 537.18 ? 24 : y < 537.24 ? 25 : y < 537.36 ? 26 : "Blink" != D ? "27" : "28")) : (D && (D[1] = "like Safari"), y = (y = y[0]) < 400 ? 1 : y < 500 ? 2 : y < 526 ? 3 : y < 533 ? 4 : y < 534 ? "4+" : y < 535 ? 5 : y < 537 ? 6 : y < 538 ? 7 : y < 601 ? 8 : "8"), D && (D[1] += " " + (y += "number" == typeof y ? ".x" : /[.+]/.test(y) ? "" : "+")), "Safari" == U && (!L || parseInt(L) > 45) && (L = y)), "Opera" == U && (y = /\bzbov|zvav$/.exec(H)) ? (U += " ", j.unshift("desktop mode"), "zvav" == y ? (U += "Mini", L = null) : U += "Mobile", H = H.replace(RegExp(" *" + y + "$"), "")) : "Safari" == U && /\bChrome\b/.exec(D && D[1]) && (j.unshift("desktop mode"), U = "Chrome Mobile", L = null, /\bOS X\b/.test(H) ? (B = "Apple", H = "iOS 4.3+") : H = null), L && 0 == L.indexOf(y = /[\d.]+$/.exec(H)) && n.indexOf("/" + y + "-") > -1 && (H = f(H.replace(y, ""))), D && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || "Safari" != U && /^iOS/.test(H) && /\bSafari\b/.test(D[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(U) && D[1]) && (y = D[D.length - 1]) && j.push(y), j.length && (j = ["(" + j.join("; ") + ")"]), B && q && q.indexOf(B) < 0 && j.push("on " + B), q && j.push((/^on /.test(j[j.length - 1]) ? "" : "on ") + q), H && (y = / ([\d.+]+)$/.exec(H), g = y && "/" == H.charAt(H.length - y[0].length - 1), H = {
                        architecture: 32,
                        family: y && !g ? H.replace(y[0], "") : H,
                        version: y ? y[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !g ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }), (y = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (H && (H.architecture = 64, H.family = H.family.replace(RegExp(" *" + y), "")), U && (/\bWOW64\b/i.test(n) || R && /\w(?:86|32)$/.test(c.cpuClass || c.platform) && !/\bWin64; x64\b/i.test(n)) && j.unshift("32-bit")) : H && /^OS X/.test(H.family) && "Chrome" == U && parseFloat(L) >= 39 && (H.architecture = 64), n || (n = null);
                    var $ = {};
                    return $.description = n, $.layout = D && D[0], $.manufacturer = B, $.name = U, $.prerelease = F, $.product = q, $.ua = n, $.version = U && L, $.os = H || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function () {
                            return "null"
                        }
                    }, $.parse = t, $.toString = function () {
                        return this.description || ""
                    }, $.version && j.unshift(L), $.name && j.unshift(U), H && U && (H != String(H).split(" ")[0] || H != U.split(" ")[0] && !q) && j.push(q ? "(" + H + ")" : "on " + H), j.length && ($.description = j.join(" ")), $
                }()
            }();
            e.exports = s
        }).call(this, n(30))
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, , function (e, t) {
        e.exports = {}
    }, function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, function (e, t) {
        e.exports = !0
    }, , , function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};

        function s(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.message = e || n.message || "", "object" === (void 0 === t ? "undefined" : (0, i.default)(t)) ? (this.event = t, this.code = "Other_Error") : void 0 !== t && (this.code = t), this.timetag = +new Date, void 0 !== n && (this.event = n), this.event && (this.callFunc = this.event.callFunc || null, delete this.event.callFunc)
        }

        s.prototype = Object.create(Error.prototype), s.prototype.name = "NIMError";
        var a = {
            201: "客户端版本不对, 需升级sdk",
            302: "用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配",
            403: "非法操作或没有权限",
            404: "对象(用户/群/聊天室)不存在",
            405: "参数长度过长",
            408: "客户端请求超时",
            414: "参数错误",
            415: "服务不可用/没有聊天室服务器可分配",
            416: "频率控制",
            417: "重复操作",
            422: "帐号被禁用",
            500: "服务器内部错误",
            501: "数据库操作失败",
            503: "服务器繁忙",
            508: "删除有效期过了",
            509: "已失效",
            7101: "被拉黑",
            801: "群人数达到上限",
            802: "没有权限",
            803: "群不存在或未发生变化",
            804: "用户不在群里面",
            805: "群类型不匹配",
            806: "创建群数量达到限制",
            807: "群成员状态不对",
            809: "已经在群里",
            811: "强推列表中帐号数量超限",
            812: "群被禁言",
            813: "因群数量限制，部分拉人成功",
            997: "协议已失效",
            998: "解包错误",
            999: "打包错误",
            9102: "通道失效",
            9103: "已经在其他端接听/拒绝过这通电话",
            11001: "对方离线, 通话不可送达",
            13002: "聊天室状态异常",
            13003: "在黑名单中",
            13004: "在禁言名单中",
            13006: "聊天室处于整体禁言状态,只有管理员能发言",
            Connect_Failed: "无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下",
            Error_Internet_Disconnected: "网断了",
            Error_Connection_is_not_Established: "连接未建立",
            Error_Connection_Socket_State_not_Match: "socket状态不对",
            Error_Timeout: "超时",
            Param_Error: "参数错误",
            No_File_Selected: "请选择文件",
            Wrong_File_Type: "文件类型错误",
            File_Too_Large: "文件过大",
            Cross_Origin_Iframe: "不能获取跨域Iframe的内容",
            Not_Support: "不支持",
            NO_DB: "无数据库",
            DB: "数据库错误",
            Still_In_Team: "还在群里",
            Session_Exist: "会话已存在",
            Session_Not_Exist: "会话不存在",
            Error_Unknown: "未知错误",
            Operation_Canceled: "操作取消"
        };
        [200, 406, 808, 810].forEach(function (e) {
            a[e] = null
        }), s.genError = function (e) {
            var t = a[e];
            return void 0 === t && (t = "操作失败"), null === t ? null : new s(t, e)
        }, s.multiInstance = function (e) {
            return new s("不允许初始化多个实例", "Not_Allow_Multi_Instance", e)
        }, s.newNetworkError = function (e) {
            var t = "Error_Internet_Disconnected";
            return new s(a[t], t, e)
        }, s.newConnectError = function (e) {
            var t = "Connect_Failed";
            return new s(a[t] || null, t, e)
        }, s.newConnectionError = function (e) {
            var t = "Error_Connection_is_not_Established";
            return new s(a[t], t, e)
        }, s.newSocketStateError = function (e) {
            var t = "Error_Connection_Socket_State_not_Match";
            return new s(a[t], t, e)
        }, s.newTimeoutError = function (e) {
            var t = "Error_Timeout";
            return new s(a[t], t, e)
        }, s.newFrequencyControlError = function (e) {
            var t = new s(a[416], 416, e);
            return t.from = "local", t
        }, s.newParamError = function (e, t) {
            return new s(e || a.Param_Error, "Param_Error", t)
        }, s.newNoFileError = function (e, t) {
            var n = "No_File_Selected";
            return new s(e || a[n], n, t)
        }, s.newWrongFileTypeError = function (e, t) {
            var n = "Wrong_File_Type";
            return new s(e || a[n], n, t)
        }, s.newFileTooLargeError = function (e, t) {
            var n = "File_Too_Large";
            return new s(e || a[n], n, t)
        }, s.newCORSIframeError = function (e) {
            var t = "Cross_Origin_Iframe";
            return new s(a[t], t, e)
        }, s.newSupportError = function (e, t, n) {
            return new s("不支持" + e, "Not_Support_" + t, n)
        }, s.newSupportDBError = function (e) {
            return s.newSupportError("数据库", "DB", e)
        }, s.noDBError = function (e) {
            return new s(a.NO_DB, "NO_DB", e)
        }, s.newDBError = function (e) {
            return new s(a.DB, "DB", e)
        }, s.newUnknownError = function (e) {
            var t = "Error_Unknown";
            return new s(a[t], t, e)
        }, s.stillInTeamError = function (e) {
            var t = "Still_In_Team";
            return new s(a[t], t, e)
        }, s.sessionExist = function (e) {
            var t = "Session_Exist";
            return new s(a[t], t, e)
        }, s.sessionNotExist = function (e) {
            var t = "Session_Not_Exist";
            return new s(a[t], t, e)
        }, s.cancel = function (e) {
            var t = "Operation_Canceled";
            return new s(a[t], t, e)
        }, s.customError = function (e, t) {
            e = e || "Other_Error";
            var n = "";
            return (t = t || {}).message || (n = a[e] || e), "object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) ? new s(n, e, t) : new s(n, "Other_Error", void 0 === t ? e : t)
        }, e.exports = s
    }, function (e, t, n) {
        "use strict";
        (function (e) {
            Object.defineProperty(t, "__esModule", {value: !0}), t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0;
            var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
            t.getGlobal = s, t.detectCSSFeature = function (e) {
                var t = !1, n = "Webkit Moz ms O".split(" "), r = document.createElement("div"), o = null;
                e = e.toLowerCase(), void 0 !== r.style[e] && (t = !0);
                if (!1 === t) {
                    o = e.charAt(0).toUpperCase() + e.substr(1);
                    for (var i = 0; i < n.length; i++) if (void 0 !== r.style[n[i] + o]) {
                        t = !0;
                        break
                    }
                }
                return t
            }, t.fix = a, t.getYearStr = c, t.getMonthStr = u, t.getDayStr = l, t.getHourStr = p, t.getMinuteStr = m, t.getSecondStr = d, t.getMillisecondStr = f, t.dateFromDateTimeLocal = function (e) {
                return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
            }, t.getClass = g, t.typeOf = v, t.isString = b, t.isNumber = function (e) {
                return "number" === v(e)
            }, t.isBoolean = function (e) {
                return "boolean" === v(e)
            }, t.isArray = k, t.isFunction = T, t.isDate = M, t.isRegExp = function (e) {
                return "regexp" === v(e)
            }, t.isError = function (e) {
                return "error" === v(e)
            }, t.isnull = S, t.notnull = x, t.undef = w, t.notundef = C, t.exist = _, t.notexist = O, t.isObject = P, t.isEmpty = function (e) {
                return O(e) || (b(e) || k(e)) && 0 === e.length
            }, t.containsNode = function (e, t) {
                if (e === t) return !0;
                for (; t.parentNode;) {
                    if (t.parentNode === e) return !0;
                    t = t.parentNode
                }
                return !1
            }, t.calcHeight = function (e) {
                var t = e.parentNode || document.body;
                (e = e.cloneNode(!0)).style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
                var n = e.offsetHeight;
                return t.removeChild(e), n
            }, t.remove = function (e) {
                e.parentNode && e.parentNode.removeChild(e)
            }, t.dataset = function (e, t, n) {
                if (!_(n)) return e.getAttribute("data-" + t);
                e.setAttribute("data-" + t, n)
            }, t.target = function (e) {
                return e.target || e.srcElement
            }, t.createIframe = function (e) {
                var t;
                if ((e = e || {}).name) try {
                    (t = document.createElement('<iframe name="' + e.name + '"></iframe>')).frameBorder = 0
                } catch (n) {
                    (t = document.createElement("iframe")).name = e.name
                } else t = document.createElement("iframe");
                e.visible || (t.style.display = "none");
                T(e.onload) && E(t, "load", function n(r) {
                    if (!t.src) return;
                    e.multi || N(t, "load", n);
                    e.onload(r)
                });
                (e.parent || document.body).appendChild(t);
                var n = e.src || "about:blank";
                return setTimeout(function () {
                    t.src = n
                }, 0), t
            }, t.html2node = function (e) {
                var t = document.createElement("div");
                t.innerHTML = e;
                var n = [], r = void 0, o = void 0;
                if (t.children) for (r = 0, o = t.children.length; r < o; r++) n.push(t.children[r]); else for (r = 0, o = t.childNodes.length; r < o; r++) {
                    var i = t.childNodes[r];
                    1 === i.nodeType && n.push(i)
                }
                return n.length > 1 ? t : n[0]
            }, t.scrollTop = function (e) {
                _(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
                return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            }, t.forOwn = j, t.mixin = F, t.isJSON = L, t.parseJSON = function e(t) {
                try {
                    L(t) && (t = JSON.parse(t)), P(t) && j(t, function (n, r) {
                        switch (v(r)) {
                            case"string":
                            case"object":
                                t[n] = e(r)
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                return t
            }, t.simpleClone = function (e) {
                var t = [], n = JSON.stringify(e, function (e, n) {
                    if ("object" === (void 0 === n ? "undefined" : (0, i.default)(n)) && null !== n) {
                        if (-1 !== t.indexOf(n)) return;
                        t.push(n)
                    }
                    return n
                });
                return JSON.parse(n)
            }, t.merge = function () {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach(function (t) {
                    F(e, t)
                }), e
            }, t.fillUndef = function (e, t) {
                return j(t, function (t, n) {
                    w(e[t]) && (e[t] = n)
                }), e
            }, t.checkWithDefault = function (e, t, n) {
                var r = e[t] || e[t.toLowerCase()];
                O(r) && (r = n, e[t] = r);
                return r
            }, t.fetch = function (e, t) {
                return j(e, function (n, r) {
                    _(t[n]) && (e[n] = t[n])
                }), e
            }, t.string2object = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",", n = {};
                return e.split(t).forEach(function (e) {
                    var t = e.split("="), r = t.shift();
                    r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
                }), n
            }, t.object2string = D, t.genUrlSep = function (e) {
                return e.indexOf("?") < 0 ? "?" : "&"
            }, t.object2query = function (e) {
                return D(e, "&", !0)
            }, t.isFileInput = U, t.getKeys = function (e, t) {
                var n = Object.keys(e);
                t && n.sort(function (t, n) {
                    var r = U(e[t]), o = U(e[n]);
                    return r === o ? 0 : r ? 1 : -1
                });
                return n
            };
            t.o = {}, t.emptyObj = {}, t.f = function () {
            }, t.emptyFunc = function () {
            }, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi;

            function s() {
                return "undefined" != typeof window ? window : void 0 !== e ? e : {}
            }

            function a(e, t) {
                t = t || 2;
                for (var n = "" + e; n.length < t;) n = "0" + n;
                return n
            }

            function c(e) {
                return "" + e.getFullYear()
            }

            function u(e) {
                return a(e.getMonth() + 1)
            }

            function l(e) {
                return a(e.getDate())
            }

            function p(e) {
                return a(e.getHours())
            }

            function m(e) {
                return a(e.getMinutes())
            }

            function d(e) {
                return a(e.getSeconds())
            }

            function f(e) {
                return a(e.getMilliseconds(), 3)
            }

            var h, y;
            t.format = (h = /yyyy|MM|dd|hh|mm|ss|SSS/g, y = {
                yyyy: c,
                MM: u,
                dd: l,
                hh: p,
                mm: m,
                ss: d,
                SSS: f
            }, function (e, t) {
                return e = new Date(e), isNaN(+e) ? "invalid date" : (t = t || "yyyy-MM-dd").replace(h, function (t) {
                    return y[t](e)
                })
            });

            function g(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }

            function v(e) {
                return g(e).toLowerCase()
            }

            function b(e) {
                return "string" === v(e)
            }

            function k(e) {
                return "array" === v(e)
            }

            function T(e) {
                return "function" === v(e)
            }

            function M(e) {
                return "date" === v(e)
            }

            function S(e) {
                return null === e
            }

            function x(e) {
                return null !== e
            }

            function w(e) {
                return void 0 === e
            }

            function C(e) {
                return void 0 !== e
            }

            function _(e) {
                return C(e) && x(e)
            }

            function O(e) {
                return w(e) || S(e)
            }

            function P(e) {
                return _(e) && "object" === v(e)
            }

            var I = t.addEventListener = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }, E = t.on = I, A = t.removeEventListener = function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }, N = t.off = A;

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                    }, n = arguments[2];
                for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
            }

            function F(e, t) {
                j(t, function (t, n) {
                    e[t] = n
                })
            }

            var R;
            t.uniqueID = (R = 0, function () {
                return "" + R++
            });

            function L(e) {
                return b(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1
            }

            function D(e, t, n) {
                if (!e) return "";
                var r = [];
                return j(e, function (e, t) {
                    T(t) || (M(t) ? t = t.getTime() : k(t) ? t = t.join(",") : P(t) && (t = JSON.stringify(t)), n && (t = encodeURIComponent(t)), r.push(encodeURIComponent(e) + "=" + t))
                }), r.join(t || ",")
            }

            t.url2origin = function () {
                var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                return function (t) {
                    return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
                }
            }();

            function U(e) {
                var t = s();
                return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob
            }
        }).call(this, n(30))
    }, function (e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty, o = "~";

        function i() {
        }

        function s(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1
        }

        function a() {
            this._events = new i, this._eventsCount = 0
        }

        Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (o = !1)), a.prototype.eventNames = function () {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) r.call(e, t) && n.push(o ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }, a.prototype.listeners = function (e, t) {
            var n = o ? o + e : e, r = this._events[n];
            if (t) return !!r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, s = r.length, a = new Array(s); i < s; i++) a[i] = r[i].fn;
            return a
        }, a.prototype.emit = function (e, t, n, r, i, s) {
            var a = o ? o + e : e;
            if (!this._events[a]) return !1;
            var c, u, l = this._events[a], p = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
                    case 1:
                        return l.fn.call(l.context), !0;
                    case 2:
                        return l.fn.call(l.context, t), !0;
                    case 3:
                        return l.fn.call(l.context, t, n), !0;
                    case 4:
                        return l.fn.call(l.context, t, n, r), !0;
                    case 5:
                        return l.fn.call(l.context, t, n, r, i), !0;
                    case 6:
                        return l.fn.call(l.context, t, n, r, i, s), !0
                }
                for (u = 1, c = new Array(p - 1); u < p; u++) c[u - 1] = arguments[u];
                l.fn.apply(l.context, c)
            } else {
                var m, d = l.length;
                for (u = 0; u < d; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), p) {
                    case 1:
                        l[u].fn.call(l[u].context);
                        break;
                    case 2:
                        l[u].fn.call(l[u].context, t);
                        break;
                    case 3:
                        l[u].fn.call(l[u].context, t, n);
                        break;
                    case 4:
                        l[u].fn.call(l[u].context, t, n, r);
                        break;
                    default:
                        if (!c) for (m = 1, c = new Array(p - 1); m < p; m++) c[m - 1] = arguments[m];
                        l[u].fn.apply(l[u].context, c)
                }
            }
            return !0
        }, a.prototype.on = function (e, t, n) {
            var r = new s(t, n || this), i = o ? o + e : e;
            return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], r] : this._events[i].push(r) : (this._events[i] = r, this._eventsCount++), this
        }, a.prototype.once = function (e, t, n) {
            var r = new s(t, n || this, !0), i = o ? o + e : e;
            return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], r] : this._events[i].push(r) : (this._events[i] = r, this._eventsCount++), this
        }, a.prototype.removeListener = function (e, t, n, r) {
            var s = o ? o + e : e;
            if (!this._events[s]) return this;
            if (!t) return 0 == --this._eventsCount ? this._events = new i : delete this._events[s], this;
            var a = this._events[s];
            if (a.fn) a.fn !== t || r && !a.once || n && a.context !== n || (0 == --this._eventsCount ? this._events = new i : delete this._events[s]); else {
                for (var c = 0, u = [], l = a.length; c < l; c++) (a[c].fn !== t || r && !a[c].once || n && a[c].context !== n) && u.push(a[c]);
                u.length ? this._events[s] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new i : delete this._events[s]
            }
            return this
        }, a.prototype.removeAllListeners = function (e) {
            var t;
            return e ? (t = o ? o + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new i : delete this._events[t])) : (this._events = new i, this._eventsCount = 0), this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prototype.setMaxListeners = function () {
            return this
        }, a.prefixed = o, a.EventEmitter = a, e.exports = a
    }, function (e, t) {
        t.f = {}.propertyIsEnumerable
    }, function (e, t) {
        var n = 0, r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function (e, t, n) {
        var r = n(55), o = n(36);
        e.exports = Object.keys || function (e) {
            return r(e, o)
        }
    }, , function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        var r = n(6).f, o = n(7), i = n(2)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function (e, t, n) {
        var r = n(1), o = n(3), i = n(20), s = n(35), a = n(6).f;
        e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {value: s.f(e)})
        }
    }, function (e, t, n) {
        t.f = n(2)
    }, function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (e, t, n) {
        var r = n(3), o = n(1), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(20) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t, n) {
        var r = n(37)("keys"), o = n(27);
        e.exports = function (e) {
            return r[e] || (r[e] = o(e))
        }
    }, function (e, t, n) {
        var r = n(11);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function (e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, , function (e, t, n) {
        "use strict";
        var r = n(0), o = {
            init: function () {
                o.deviceId = r.guid()
            }
        };
        o.init(), o.clientTypeMap = {
            1: "Android",
            2: "iOS",
            4: "PC",
            8: "WindowsPhone",
            16: "Web",
            32: "Server",
            64: "Mac"
        }, o.db = {
            open: function () {
            }
        }, e.exports = o
    }, function (e, t, n) {
        var r = n(61);
        e.exports = function (e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t, n) {
        var r = n(9), o = n(95), i = n(36), s = n(38)("IE_PROTO"), a = function () {
        }, c = function () {
            var e, t = n(50)("iframe"), r = i.length;
            for (t.style.display = "none", n(73).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[i[r]];
            return c()
        };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = c(), void 0 === t ? n : o(n, t)
        }
    }, function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
        var s = n(25), a = n(0), c = a.notundef, u = n(204), l = n(4);
        n(43);

        function p() {
        }

        var m = {};
        p.getInstance = function (e) {
            a.verifyOptions(e, "account", "api::Base.getInstance");
            var t = this.genInstanceName(e), n = m[t];
            return n ? p.updateInstance(n, e) : n = m[t] = new this(e), n
        }, p.updateInstance = function (e, t) {
            e.setOptions(t), e.connect()
        };
        var d = p.fn = p.prototype = Object.create(new s);
        d.updatePrivateConf = function (e) {
            if (e && "object" === (0, i.default)(e.privateConf)) {
                var t = e.privateConf;
                "string" == typeof t.lbs_web && (e.lbsUrl = t.lbs_web), "boolean" == typeof t.link_ssl_web && (e.secure = t.link_ssl_web), "boolean" == typeof t.https_enabled && (e.httpsEnabled = t.https_enabled), e.uploadUrl = t.nos_uploader_web ? t.nos_uploader_web : null, e.replaceUrl = t.nos_downloader ? t.nos_downloader : null, e.downloadUrl = t.nos_accelerate ? t.nos_accelerate : null, e.downloadHost = t.nos_accelerate_host ? t.nos_accelerate_host : null, e.ntServerAddress = t.nt_server
            }
            return null === e.ntServerAddress || "" === e.ntServerAddress ? l.ntServerAddress = null : l.ntServerAddress = e.ntServerAddress || l.defaultReportUrl, l.uploadUrl = e.uploadUrl || l.uploadUrl, l.downloadUrl = e.downloadUrl || l.downloadUrl, l.downloadHost = e.downloadHost || l.downloadHost, l.replaceUrl = e.replaceUrl || l.replaceUrl, l.httpsEnabled = e.httpsEnabled || l.httpsEnabled, e
        }, d.init = function (e) {
            a.verifyOptions(e, "account", "api::Base.init"), e = this.updatePrivateConf(e);
            var t = this.account = e.account = e.account + "", n = e.constructor.genInstanceName(e), r = m[n];
            if (e._disableSingleton && (r = null), r) return p.updateInstance(r, e), r;
            this.name = n, m[n] = this, this.logger = e.logger = new u({
                debug: e.debug,
                logFunc: e.logFunc,
                prefix: this.subType
            }), e.api = this;
            var o = this.protocol = new e.Protocol(e);
            return o.name = "Protocol-" + n, o.account = t, o.api = this, o.message = this.message = new e.Message({account: t}), this.options = a.copy(e), this.reset(), this
        }, d.destroy = function (e) {
            e = e || {};
            var t = this.name;
            this.protocol && this.protocol.resetPush && this.protocol.resetPush();
            var n = this;
            this.disconnect({
                done: function (r) {
                    n.logger.warn("ApiBase::destroy: instance destroyed ..."), Object.getOwnPropertyNames(n).forEach(function (e) {
                        delete n[e]
                    }), m && (delete m[t], m[t] = null), e.done instanceof Function && e.done(r)
                }
            })
        }, d.reset = function () {
            var e = this.updatePrivateConf(this.options);
            a.verifyBooleanWithDefault(e, "exifOrientation", !0, "", "api::Base.reset")
        }, d.setOptions = function (e) {
            this.reset(), this.protocol.setOptions(e)
        }, d.processCallback = function (e, t) {
            f(e, t)
        }, d.processCallbackPromise = function (e, t) {
            return new Promise(function (n, r) {
                f(e, t, !0, n, r)
            })
        };
        var f = function (e, t, n, r, o) {
            var i = "api::processCallback";
            n && (i = "api::processCallbackPromise"), a.verifyCallback(e, "done", i), e.callback = function (s, u, l) {
                var p = e.callback.options;
                if (u = u || p, t && (u = p), a.isFunction(e.cbaop)) {
                    var m = e.cbaop(s, u);
                    c(m) && (u = m)
                }
                var d = e.done;
                a.isObject(u) && (delete u.done, delete u.cb, delete u.callback), n ? s ? o({
                    message: "生成接口回调错误",
                    callFunc: i,
                    event: s
                }) : r(u) : d(s, u, l)
            }, e.callback.options = a.copy(e)
        };
        d.processPs = function (e) {
            a.notexist(e.ps) && (e.ps = "")
        }, d.processCustom = function (e) {
            a.notexist(e.custom) && (e.custom = "")
        }, d.sendCmd = function () {
            this.protocol.sendCmd.apply(this.protocol, arguments)
        }, d.sendCmdWithResp = function (e, t, n) {
            this.sendCmd(e, t, function (e, t, r) {
                a.isFunction(n) && (e ? n(e, t) : n(null, r))
            })
        }, d.cbAndSendCmd = function (e, t) {
            var n = this.processCallbackPromise(t);
            return this.sendCmd(e, t), n
        }, p.use = function (e, t) {
            e && e.install && a.isFunction(e.install) && e.install(this, t)
        }, p.rmAllInstances = function () {
            for (var e in m) m[e].destroy();
            m = {}
        }, d.logout = function (e) {
            this.protocol.shouldReconnect = !1, this.protocol.doLogout = !0, this.processCallback(e), this.sendCmd("logout", e, e.callback)
        }, e.exports = p, n(197), n(196), n(192), n(191), n(190), n(189)
    }, , , function (e, t, n) {
        var r = n(40);
        e.exports = function (e) {
            return Object(r(e))
        }
    }, function (e, t, n) {
        var r = n(11), o = n(1).document, i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {}
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(97)(!0);
        n(58)(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
        })
    }, , function (e, t, n) {
        var r = n(55), o = n(36).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return r(e, o)
        }
    }, function (e, t, n) {
        var r = n(32);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function (e, t, n) {
        var r = n(7), o = n(12), i = n(94)(!1), s = n(38)("IE_PROTO");
        e.exports = function (e, t) {
            var n, a = o(e), c = 0, u = [];
            for (n in a) n != s && r(a, n) && u.push(n);
            for (; t.length > c;) r(a, n = t[c++]) && (~i(u, n) || u.push(n));
            return u
        }
    }, function (e, t, n) {
        e.exports = n(10)
    }, function (e, t, n) {
        e.exports = !n(8) && !n(16)(function () {
            return 7 != Object.defineProperty(n(50)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        "use strict";
        var r = n(20), o = n(13), i = n(56), s = n(10), a = n(18), c = n(96), u = n(31), l = n(92),
            p = n(2)("iterator"), m = !([].keys && "next" in [].keys()), d = function () {
                return this
            };
        e.exports = function (e, t, n, f, h, y, g) {
            c(n, t, f);
            var v, b, k, T = function (e) {
                    if (!m && e in w) return w[e];
                    switch (e) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                }, M = t + " Iterator", S = "values" == h, x = !1, w = e.prototype,
                C = w[p] || w["@@iterator"] || h && w[h], _ = C || T(h), O = h ? S ? T("entries") : _ : void 0,
                P = "Array" == t && w.entries || C;
            if (P && (k = l(P.call(new e))) !== Object.prototype && k.next && (u(k, M, !0), r || "function" == typeof k[p] || s(k, p, d)), S && C && "values" !== C.name && (x = !0, _ = function () {
                return C.call(this)
            }), r && !g || !m && !x && w[p] || s(w, p, _), a[t] = _, a[M] = d, h) if (v = {
                values: S ? _ : T("values"),
                keys: y ? _ : T("keys"),
                entries: O
            }, g) for (b in v) b in w || i(w, b, v[b]); else o(o.P + o.F * (m || x), t, v);
            return v
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(108), o = n(199), i = n(198);
        r.json = o, r.upload = i, e.exports = r
    }, function (e, t, n) {
        n(91);
        for (var r = n(1), o = n(10), i = n(18), s = n(2)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
            var u = a[c], l = r[u], p = l && l.prototype;
            p && !p[s] && o(p, s, u), i[u] = i.Array
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = n(4), i = n(23);

        function s(e) {
            r.undef(e.secure) && (e.secure = !0), this.options = r.copy(e), this.init(), this.connect()
        }

        var a = s.fn = s.prototype;
        a.init = function () {
            this.logger = this.options.logger, this.cmdTaskArray = [], this.timerMap = {}, this.cmdCallbackMap = {}, this.cmdContentMap = {}, this.initConnect(), this.reset()
        }, a.reset = function () {
            this.resetConnect()
        }, a.setOptions = function (e) {
            var t = this.options, n = Object.keys(t), o = n.indexOf("account");
            -1 !== o && n.splice(o, 1), e = r.filterObj(e, n), this.options = r.merge(t, e), this.reset()
        }, a.sendCmd = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments[2];
            this.heartbeat(), "heartbeat" !== e && this.logger.warn("protocol::sendCmd: " + e, t);
            var r, o = e, i = (e = this.parser.createCmd(e, t)).SER;
            t = t || {}, this.cmdContentMap[i] = t, t.single && (delete t.single, 1 === (r = Object.keys(t)).length && (this.cmdContentMap[i] = t[r[0]])), t.NOTSTORE && ((r = t.NOTSTORE.split(" ")).forEach(function (e) {
                delete t[e]
            }), delete t.NOTSTORE), (n = n || t.callback) && (this.cmdCallbackMap[i] = n), this.cmdTaskArray.push({
                cmdName: o,
                cmd: JSON.stringify(e)
            }), this.startCmdTaskTimer()
        }, a.startCmdTaskTimer = function () {
            var e = this;
            e.cmdTaskTimer || (e.cmdTaskTimer = setTimeout(function () {
                var t = e.cmdTaskArray.shift();
                e.cmdTaskTimer = null, t && e.executeCmdTask(t), e.cmdTaskArray.length && e.startCmdTaskTimer()
            }, 0))
        }, a.executeCmdTask = function (e) {
            var t = e.cmdName, n = e.cmd, r = (n = JSON.parse(n)).SER;
            this.isFrequencyControlled(t) ? (this.logger.warn("protocol::executeCmdTask: " + t + " hit freq control"), this.markCallbackInvalid(r, i.newFrequencyControlError({
                callFunc: "protocol::executeCmdTask",
                message: t + " hit freq control"
            }))) : this.isConnected() ? (this.logger.log("protocol::sendCmd: " + t + " " + JSON.stringify(n)), this.doSendCmd(n)) : (this.logger.warn("protocol::executeCmdTask: " + t + " not connected"), this.markCallbackInvalid(r, i.newSocketStateError({
                callFunc: "protocol::executeCmdTask",
                message: t + " not connected"
            })))
        }, a.isFrequencyControlled = function (e) {
            var t = this.frequencyControlMap && this.frequencyControlMap[e];
            if (t) {
                if (Date.now() < t.from + t.duration) return !0;
                delete this.frequencyControlMap[e]
            }
        }, a.doSendCmd = function (e) {
            var t = this, n = e.SER;
            t.timerMap[n] = setTimeout(function () {
                t.markCallbackInvalid(n, i.newTimeoutError({
                    callFunc: "protocol::doSendCmd",
                    message: "ser " + n + " Timeout Error"
                }))
            }, o.cmdTimeout);
            try {
                t.socket.send(JSON.stringify(e))
            } catch (e) {
                t.markCallbackInvalid(n, i.newSocketStateError({
                    callFunc: "protocol::doSendCmd",
                    message: "ser " + n + " socketSendJson Error"
                })), t.onDisconnect(!0, "protocol::doSendCmd:socketSendJson")
            }
        }, a.getObjWithSer = function (e) {
            var t = this.cmdContentMap[e];
            return delete this.cmdContentMap[e], t && r.copy(t)
        }, a.getCallbackWithSer = function (e) {
            var t = this.cmdCallbackMap[e];
            return delete this.cmdCallbackMap[e], t
        }, a.getTimerWithSer = function (e) {
            var t = this.timerMap[e];
            return delete this.timerMap[e], t
        }, a.clearTimerWithSer = function (e) {
            var t = this.getTimerWithSer(e);
            t && clearTimeout(t)
        }, a.markCallbackInvalid = function (e, t) {
            this.getObjWithSer(e), this.clearTimerWithSer(e);
            var n = this.getCallbackWithSer(e);
            if (n) {
                var r = n.options;
                setTimeout(function () {
                    n(t || i.newUnknownError({ser: e}), r)
                }, 0)
            }
        }, a.markAllCallbackInvalid = function (e) {
            var t = this;
            Object.keys(this.cmdCallbackMap).forEach(function (n) {
                t.markCallbackInvalid(n, e)
            })
        }, a.getPacketObj = function (e) {
            var t = null;
            if (e && e.raw) {
                var n = e.raw.ser;
                r.notundef(n) && (t = this.getObjWithSer(n))
            }
            return t
        }, a.callPacketAckCallback = function (e) {
            var t = this;
            if (e && e.raw) {
                var n = e.raw.ser;
                if (r.notundef(n)) {
                    t.clearTimerWithSer(n);
                    var o = t.getCallbackWithSer(n);
                    o && (e.promise ? e.promise.then(function () {
                        o(e.error, e.obj)
                    }, function (r) {
                        r.callFunc = "protocol::callPacketAckCallback", r.message = "Resp Promoise Error: cmd: " + e.cmd + ", ser: " + n;
                        var s = i.customError("CALLBACK_ACK_ERR", r);
                        t.logger.error("protocol::callPacketAckCallback: promise error " + JSON.stringify(r)), o(s, e.obj, e.content)
                    }) : o(e.error, e.obj, e.content))
                }
            }
        }, a.onMessage = function (e) {
            this.heartbeat();
            var t = this.parser.parseResponse(e);
            t.notFound && this.logger.warn("protocol::onMessage: packet not found " + JSON.stringify(t)), t.error ? (t.error.message = t.cmd + " error: " + t.error.message, this.logger.error("protocol::onMessage: packet error " + JSON.stringify(t.error))) : t.content || "heartbeat" === t.cmd || this.logger.warn("protocol::onMessage: packet.content undefined " + JSON.stringify(t)), t.frequencyControlDuration && (this.logger.error("protocol::onMessage: server freq control " + JSON.stringify(t.cmd)), this.frequencyControlMap = this.frequencyControlMap || {}, this.frequencyControlMap[t.cmd] = {
                from: +new Date,
                duration: t.frequencyControlDuration
            }), t.obj = this.getPacketObj(t), "heartbeat" !== t.cmd && "getClientAntispam" !== t.cmd && this.logger.log("protocol::recvCmd: " + t.cmd + " " + t.rawStr);
            var n = "process" + r.capFirstLetter(t.service);
            this[n] ? (this.logger.warn("protocol::recvCmd: " + t.cmd + " " + n, t.content), this[n](t)) : this.logger.warn("protocol::onMessage: " + n + " not found"), this.callPacketAckCallback(t)
        }, a.onMiscError = function (e, t, n) {
            t && this.notifyError(e, t, n)
        }, a.notifyError = function (e, t, n) {
            this.isConnected() && (this.logger.error((e || "") + " " + this.name, t, n), this.options.onerror(t, n))
        }, a.emitAPI = function (e) {
            var t = e.type, n = e.obj;
            this.api.emit(t, n)
        }, e.exports = s, n(188), n(186), n(185), n(184)
    }, , , function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r}, s = n(71);
        var a = n(0), c = a.notundef, u = a.exist, l = n(105), p = n(155), m = p.typeMap;

        function d(e) {
            e.resend ? (a.verifyOptions(e, "idClient", "msg::Message"), this.idClient = e.idClient) : this.idClient = a.guid(), this.type = m[e.type], this.resend = e.resend ? 1 : 0, c(e.custom) && ("object" === (0, i.default)(e.custom) ? (this.logger.info("model::Message: custom should be JsonString, auto transfer"), this.custom = JSON.stringify(e.custom)) : this.custom = "" + e.custom), c(e.text) && (this.body = "" + e.text), c(e.body) && (this.body = "" + e.body), c(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0), c(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0), c(e.antiSpamContent) && ("object" === (0, i.default)(e.antiSpamContent) ? (this.logger.info("model::Message: antiSpamContent should be JsonString, auto transfer"), this.antiSpamContent = JSON.stringify(e.antiSpamContent)) : this.antiSpamContent = "" + e.antiSpamContent), c(e.antiSpamBusinessId) && ("object" === (0, i.default)(e.antiSpamBusinessId) ? (this.logger.info("model::Message: antiSpamBusinessId should be JsonString, auto transfer"), this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)) : this.antiSpamBusinessId = "" + e.antiSpamBusinessId), c(e.skipHistory) && (this.skipHistory = e.skipHistory ? 1 : 0), c(e.highPriority) && (this.highPriority = e.highPriority ? 1 : 0), c(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0)
        }

        d.validTypes = p.validTypes, a.merge(d.prototype, p.prototype), d.getType = p.getType, d.reverse = function (e) {
            var t = a.filterObj(e, "chatroomId idClient from fromNick fromAvatar fromCustom userUpdateTime custom status");
            return c(t.fromAvatar) && (t.fromAvatar = (0, s.genPrivateUrl)(t.fromAvatar)), t = a.merge(t, {
                fromClientType: l.reverseType(e.fromClientType),
                time: +e.time,
                type: d.getType(e),
                text: u(e.body) ? e.body : "",
                resend: 1 == +e.resend
            }), c(t.userUpdateTime) && (t.userUpdateTime = +t.userUpdateTime), t.status = t.status || "success", t
        }, d.setExtra = function (e, t) {
            p.setFlow(e, t)
        }, e.exports = d
    }, , function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(78), i = (r = o) && r.__esModule ? r : {default: r};
        t.default = i.default || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    }, function (e, t, n) {
        var r = n(26), o = n(19), i = n(12), s = n(39), a = n(7), c = n(57), u = Object.getOwnPropertyDescriptor;
        t.f = n(8) ? u : function (e, t) {
            if (e = i(e), t = s(t, !0), c) try {
                return u(e, t)
            } catch (e) {
            }
            if (a(e, t)) return o(!r.f.call(e, t), e[t])
        }
    }, function (e, t, n) {
        var r = n(41), o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    }, , function (e, t, n) {
        "use strict";
        var r = n(4), o = {
            genUrlSep: function (e) {
                return -1 === (e = "" + e).indexOf("?") ? "?imageView&" : "&"
            }, url2object: function (e) {
                var t = (e = e || "").indexOf("https") >= 0 ? "https://" : "http://", n = e.replace(t, "");
                n.indexOf("?") >= 0 && (n = n.substring(0, n.indexOf("?")));
                var r = n.split("/");
                n = r[0];
                var o = "";
                if (r.length > 0 && (o = r.slice(1).join("/")), -1 === e.indexOf("?")) return {
                    protocol: t,
                    hostname: n,
                    path: o,
                    query: {}
                };
                var i = {};
                return e.substr(e.indexOf("?") + 1).split("&").forEach(function (e) {
                    if (e.indexOf("=") > 0) {
                        var t = e.split("=");
                        i[t[0]] = decodeURIComponent(t[1])
                    } else i[e] = ""
                }), {protocol: t, hostname: n, path: o, query: i}
            }, object2url: function (e) {
                var t = e.protocol, n = e.hostname, r = e.path, o = e.query;
                t = t || "http://", n = n || "", r && (n = n + "/" + r), o = o || {};
                var i = [];
                for (var s in o) "imageView" !== s && i.push(s + "=" + encodeURIComponent(o[s]));
                return i.length > 0 ? "" + t + n + "?imageView&" + i.join("&") : "" + t + n
            }, genPrivateUrl: function (e) {
                var t = o.url2object(e), n = t.hostname, i = t.path, s = r.downloadHost, a = r.downloadUrl;
                if (n === s) {
                    var c = i.indexOf("/");
                    if (-1 !== c) {
                        var u = i.substring(0, c), l = i.substring(c + 1);
                        return a.replace("{bucket}", u).replace("{object}", l)
                    }
                } else if (-1 !== n.indexOf(s)) {
                    var p = t.path, m = p.indexOf(".");
                    if (-1 !== m) {
                        var d = p.substring(0, m), f = p;
                        return a.replace("{bucket}", d).replace("{object}", f)
                    }
                }
                return e
            }
        };
        e.exports = o
    }, function (e, t) {
    }, function (e, t, n) {
        var r = n(1).document;
        e.exports = r && r.documentElement
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = r.undef, i = n(23), s = n(147), a = n(183), c = n(182), u = n(181), l = n(180), p = n(179);

        function m(e) {
            this.mixin(e)
        }

        m.prototype.mixin = function (e) {
            var t = this;
            this.configMap = this.configMap || {}, ["idMap", "cmdConfig", "packetConfig"].forEach(function (n) {
                t.configMap[n] = r.merge({}, t.configMap[n], e.configMap && e.configMap[n])
            }), ["serializeMap", "unserializeMap"].forEach(function (n) {
                t[n] = r.merge({}, t[n], e[n])
            })
        };
        var d, f = new m({configMap: s, serializeMap: a, unserializeMap: c}),
            h = new m({configMap: u, serializeMap: l, unserializeMap: p});
        m.getInstance = function (e) {
            switch (e) {
                case"IM":
                    return f;
                case"Chatroom":
                    return h
            }
        }, m.prototype.createCmd = (d = 1, function (e, t) {
            var n = this, r = this.configMap.cmdConfig[e];
            return e = {
                SID: r.sid,
                CID: r.cid,
                SER: "heartbeat" === e ? 0 : d++
            }, r.params && (e.Q = [], r.params.forEach(function (r) {
                var i = r.type, s = r.name, a = r.entity, c = t[s];
                if (!o(c)) {
                    switch (i) {
                        case"PropertyArray":
                            i = "ArrayMable", c = c.map(function (e) {
                                return {t: "Property", v: n.serialize(e, a)}
                            });
                            break;
                        case"Property":
                            c = n.serialize(c, s);
                            break;
                        case"bool":
                            c = c ? "true" : "false"
                    }
                    e.Q.push({t: i, v: c})
                }
            })), e
        }), m.prototype.parseResponse = function (e) {
            var t = this, n = JSON.parse(e), o = {raw: n, rawStr: e, error: i.genError(n.code)},
                s = t.configMap.packetConfig[n.sid + "_" + n.cid];
            if (!s) return o.notFound = {sid: n.sid, cid: n.cid}, o;
            var a = n.r, c = "notify" === s.service && !s.cmd;
            if (o.isNotify = c, c) {
                var u = n.r[1].headerPacket;
                if (s = t.configMap.packetConfig[u.sid + "_" + u.cid], a = n.r[1].body, !s) return o.notFound = {
                    sid: u.sid,
                    cid: u.cid
                }, o
            }
            if (o.service = s.service, o.cmd = s.cmd, o.error) {
                var l = n.sid + "_" + n.cid;
                if (c && (l = u.sid + "_" + u.cid), o.error.cmd = o.cmd, o.error.callFunc = "protocol::parseResponse: " + l, 416 === o.error.code) {
                    var p = a[0];
                    p && (o.frequencyControlDuration = 1e3 * p)
                }
            }
            var m = !1;
            return o.error && s.trivialErrorCodes && (m = -1 !== s.trivialErrorCodes.indexOf(o.error.code)), o.error && !m || !s.response || (o.content = {}, s.response.forEach(function (e, i) {
                var s = a[i];
                if (!r.undef(s)) {
                    var u = e.type, l = e.name, p = e.entity || l;
                    switch (u) {
                        case"Property":
                            o.content[l] = t.unserialize(s, p);
                            break;
                        case"PropertyArray":
                            o.content[l] = [], s.forEach(function (e) {
                                o.content[l].push(t.unserialize(e, p))
                            });
                            break;
                        case"KVArray":
                            o.content[l] = s;
                            break;
                        case"long":
                        case"Long":
                        case"byte":
                        case"Byte":
                        case"Number":
                            o.content[l] = +s;
                            break;
                        default:
                            o.content[l] = s
                    }
                    if (c && "msg" === l || "sysMsg" === l) {
                        var m = o.content[l];
                        r.isObject(m) && !m.idServer && (m.idServer = "" + n.r[0], m.type && "8" === m.type && m.deletedIdClient && (m.idServer = m.deletedIdClient))
                    }
                }
            })), o
        }, m.prototype.serialize = function (e, t) {
            var n = this.serializeMap[t], r = {};
            for (var o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
            return r
        }, m.prototype.unserialize = function (e, t) {
            var n = this.unserializeMap[t], r = {};
            if (e) for (var o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
            return r
        }, e.exports = m
    }, function (e, t, n) {
        "use strict";
        var r = n(28), o = n(33), i = n(26), s = n(49), a = n(54), c = Object.assign;
        e.exports = !c || n(16)(function () {
            var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function (e) {
                t[e] = e
            }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != r
        }) ? function (e, t) {
            for (var n = s(e), c = arguments.length, u = 1, l = o.f, p = i.f; c > u;) for (var m, d = a(arguments[u++]), f = l ? r(d).concat(l(d)) : r(d), h = f.length, y = 0; h > y;) p.call(d, m = f[y++]) && (n[m] = d[m]);
            return n
        } : c
    }, function (e, t, n) {
        var r = n(13);
        r(r.S + r.F, "Object", {assign: n(75)})
    }, function (e, t, n) {
        n(76), e.exports = n(3).Object.assign
    }, function (e, t, n) {
        e.exports = {default: n(77), __esModule: !0}
    }, , function (e, t, n) {
        n(34)("observable")
    }, function (e, t, n) {
        n(34)("asyncIterator")
    }, function (e, t, n) {
        var r = n(12), o = n(53).f, i = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return s && "[object Window]" == i.call(e) ? function (e) {
                try {
                    return o(e)
                } catch (e) {
                    return s.slice()
                }
            }(e) : o(r(e))
        }
    }, function (e, t, n) {
        var r = n(32);
        e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
        }
    }, function (e, t, n) {
        var r = n(28), o = n(33), i = n(26);
        e.exports = function (e) {
            var t = r(e), n = o.f;
            if (n) for (var s, a = n(e), c = i.f, u = 0; a.length > u;) c.call(e, s = a[u++]) && t.push(s);
            return t
        }
    }, function (e, t, n) {
        var r = n(27)("meta"), o = n(11), i = n(7), s = n(6).f, a = 0, c = Object.isExtensible || function () {
            return !0
        }, u = !n(16)(function () {
            return c(Object.preventExtensions({}))
        }), l = function (e) {
            s(e, r, {value: {i: "O" + ++a, w: {}}})
        }, p = e.exports = {
            KEY: r, NEED: !1, fastKey: function (e, t) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, r)) {
                    if (!c(e)) return "F";
                    if (!t) return "E";
                    l(e)
                }
                return e[r].i
            }, getWeak: function (e, t) {
                if (!i(e, r)) {
                    if (!c(e)) return !0;
                    if (!t) return !1;
                    l(e)
                }
                return e[r].w
            }, onFreeze: function (e) {
                return u && p.NEED && c(e) && !i(e, r) && l(e), e
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1), o = n(7), i = n(8), s = n(13), a = n(56), c = n(85).KEY, u = n(16), l = n(37), p = n(31),
            m = n(27), d = n(2), f = n(35), h = n(34), y = n(84), g = n(83), v = n(9), b = n(11), k = n(12), T = n(39),
            M = n(19), S = n(45), x = n(82), w = n(68), C = n(6), _ = n(28), O = w.f, P = C.f, I = x.f, E = r.Symbol,
            A = r.JSON, N = A && A.stringify, j = d("_hidden"), F = d("toPrimitive"), R = {}.propertyIsEnumerable,
            L = l("symbol-registry"), D = l("symbols"), U = l("op-symbols"), q = Object.prototype,
            B = "function" == typeof E, H = r.QObject, W = !H || !H.prototype || !H.prototype.findChild,
            $ = i && u(function () {
                return 7 != S(P({}, "a", {
                    get: function () {
                        return P(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (e, t, n) {
                var r = O(q, t);
                r && delete q[t], P(e, t, n), r && e !== q && P(q, t, r)
            } : P, X = function (e) {
                var t = D[e] = S(E.prototype);
                return t._k = e, t
            }, J = B && "symbol" == typeof E.iterator ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                return e instanceof E
            }, z = function (e, t, n) {
                return e === q && z(U, t, n), v(e), t = T(t, !0), v(n), o(D, t) ? (n.enumerable ? (o(e, j) && e[j][t] && (e[j][t] = !1), n = S(n, {enumerable: M(0, !1)})) : (o(e, j) || P(e, j, M(1, {})), e[j][t] = !0), $(e, t, n)) : P(e, t, n)
            }, G = function (e, t) {
                v(e);
                for (var n, r = y(t = k(t)), o = 0, i = r.length; i > o;) z(e, n = r[o++], t[n]);
                return e
            }, K = function (e) {
                var t = R.call(this, e = T(e, !0));
                return !(this === q && o(D, e) && !o(U, e)) && (!(t || !o(this, e) || !o(D, e) || o(this, j) && this[j][e]) || t)
            }, V = function (e, t) {
                if (e = k(e), t = T(t, !0), e !== q || !o(D, t) || o(U, t)) {
                    var n = O(e, t);
                    return !n || !o(D, t) || o(e, j) && e[j][t] || (n.enumerable = !0), n
                }
            }, Y = function (e) {
                for (var t, n = I(k(e)), r = [], i = 0; n.length > i;) o(D, t = n[i++]) || t == j || t == c || r.push(t);
                return r
            }, Q = function (e) {
                for (var t, n = e === q, r = I(n ? U : k(e)), i = [], s = 0; r.length > s;) !o(D, t = r[s++]) || n && !o(q, t) || i.push(D[t]);
                return i
            };
        B || (a((E = function () {
            if (this instanceof E) throw TypeError("Symbol is not a constructor!");
            var e = m(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
                this === q && t.call(U, n), o(this, j) && o(this[j], e) && (this[j][e] = !1), $(this, e, M(1, n))
            };
            return i && W && $(q, e, {configurable: !0, set: t}), X(e)
        }).prototype, "toString", function () {
            return this._k
        }), w.f = V, C.f = z, n(53).f = x.f = Y, n(26).f = K, n(33).f = Q, i && !n(20) && a(q, "propertyIsEnumerable", K, !0), f.f = function (e) {
            return X(d(e))
        }), s(s.G + s.W + s.F * !B, {Symbol: E});
        for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) d(Z[ee++]);
        for (var te = _(d.store), ne = 0; te.length > ne;) h(te[ne++]);
        s(s.S + s.F * !B, "Symbol", {
            for: function (e) {
                return o(L, e += "") ? L[e] : L[e] = E(e)
            }, keyFor: function (e) {
                if (!J(e)) throw TypeError(e + " is not a symbol!");
                for (var t in L) if (L[t] === e) return t
            }, useSetter: function () {
                W = !0
            }, useSimple: function () {
                W = !1
            }
        }), s(s.S + s.F * !B, "Object", {
            create: function (e, t) {
                return void 0 === t ? S(e) : G(S(e), t)
            },
            defineProperty: z,
            defineProperties: G,
            getOwnPropertyDescriptor: V,
            getOwnPropertyNames: Y,
            getOwnPropertySymbols: Q
        }), A && s(s.S + s.F * (!B || u(function () {
            var e = E();
            return "[null]" != N([e]) || "{}" != N({a: e}) || "{}" != N(Object(e))
        })), "JSON", {
            stringify: function (e) {
                for (var t, n, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = t = r[1], (b(t) || void 0 !== e) && !J(e)) return g(t) || (t = function (e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t
                }), r[1] = t, N.apply(A, r)
            }
        }), E.prototype[F] || n(10)(E.prototype, F, E.prototype.valueOf), p(E, "Symbol"), p(Math, "Math", !0), p(r.JSON, "JSON", !0)
    }, function (e, t, n) {
        n(86), n(72), n(81), n(80), e.exports = n(3).Symbol
    }, function (e, t, n) {
        e.exports = {default: n(87), __esModule: !0}
    }, function (e, t) {
        e.exports = function (e, t) {
            return {value: t, done: !!e}
        }
    }, function (e, t) {
        e.exports = function () {
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(90), o = n(89), i = n(18), s = n(12);
        e.exports = n(58)(Array, "Array", function (e, t) {
            this._t = s(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (e, t, n) {
        var r = n(7), o = n(49), i = n(38)("IE_PROTO"), s = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, function (e, t, n) {
        var r = n(41), o = Math.max, i = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
        }
    }, function (e, t, n) {
        var r = n(12), o = n(69), i = n(93);
        e.exports = function (e) {
            return function (t, n, s) {
                var a, c = r(t), u = o(c.length), l = i(s, u);
                if (e && n != n) {
                    for (; u > l;) if ((a = c[l++]) != a) return !0
                } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
                return !e && -1
            }
        }
    }, function (e, t, n) {
        var r = n(6), o = n(9), i = n(28);
        e.exports = n(8) ? Object.defineProperties : function (e, t) {
            o(e);
            for (var n, s = i(t), a = s.length, c = 0; a > c;) r.f(e, n = s[c++], t[n]);
            return e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(45), o = n(19), i = n(31), s = {};
        n(10)(s, n(2)("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = r(s, {next: o(1, n)}), i(e, t + " Iterator")
        }
    }, function (e, t, n) {
        var r = n(41), o = n(40);
        e.exports = function (e) {
            return function (t, n) {
                var i, s, a = String(o(t)), c = r(n), u = a.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? e ? a.charAt(c) : i : e ? a.slice(c, c + 2) : s - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (e, t, n) {
        n(51), n(60), e.exports = n(35).f("iterator")
    }, function (e, t, n) {
        e.exports = {default: n(98), __esModule: !0}
    }, , function (e, t, n) {
        "use strict";
        var r = n(62), o = n(0), i = o.undef, s = o.notundef, a = n(4), c = n(74).getInstance("Chatroom"), u = n(169),
            l = n(142);

        function p(e) {
            o.verifyOptions(e, "appKey account chatroomId chatroomAddresses", "protocol::ChatroomProtocol"), e.isAnonymous || o.verifyOptions(e, "token", "protocol::ChatroomProtocol"), o.verifyParamType("chatroomAddresses", e.chatroomAddresses, "array", "protocol::ChatroomProtocol"), o.verifyCallback(e, "onconnect onerror onwillreconnect ondisconnect onmsg onmsgs onrobots", "protocol::ChatroomProtocol"), r.call(this, e)
        }

        var m = r.fn, d = p.fn = p.prototype = Object.create(m);
        d.init = function () {
            m.init.call(this), this.parser = c, this.syncResult = {}, this.timetags = {}, this.msgBuffer = []
        }, d.reset = function () {
            var e = this;
            m.reset.call(e);
            var t = e.options;
            i(t.msgBufferInterval) && (t.msgBufferInterval = 300), o.verifyParamType("msgBufferInterval", t.msgBufferInterval, "number", "protocol::ChatroomProtocol.reset"), i(t.msgBufferSize) && (t.msgBufferSize = 500), o.verifyParamType("msgBufferSize", t.msgBufferSize, "number", "protocol::ChatroomProtocol.reset"), s(t.chatroomAddresses) && (e.socketUrls = t.chatroomAddresses.map(function (t) {
                return a.formatSocketUrl({url: t, secure: e.options.secure})
            }), e.socketUrlsBackup = e.socketUrls.slice(0))
        }, d.processChatroom = function (e) {
            switch (e.cmd) {
                case"login":
                    e.error || (e.obj = {
                        chatroom: u.reverse(e.content.chatroom),
                        member: l.reverse(e.content.chatroomMember)
                    });
                    break;
                case"kicked":
                    this.onKicked(e);
                    break;
                case"logout":
                    break;
                case"sendMsg":
                    this.onSendMsg(e);
                    break;
                case"msg":
                    this.onMsg(e);
                    break;
                case"getChatroomMembers":
                    this.onChatroomMembers(e);
                    break;
                case"getHistoryMsgs":
                    this.onHistoryMsgs(e);
                    break;
                case"markChatroomMember":
                    this.onMarkChatroomMember(e);
                    break;
                case"closeChatroom":
                    break;
                case"getChatroom":
                    this.onChatroom(e);
                    break;
                case"updateChatroom":
                    break;
                case"updateMyChatroomMemberInfo":
                    delete e.obj.chatroomMember;
                    break;
                case"getChatroomMembersInfo":
                    this.onChatroomMembersInfo(e);
                    break;
                case"kickChatroomMember":
                case"updateChatroomMemberTempMute":
                    break;
                case"queueList":
                    e.error || (e.obj = e.content);
                    break;
                case"syncRobot":
                    this.onSyncRobot(e)
            }
        }, d.onChatroom = function (e) {
            e.error || (e.obj.chatroom = u.reverse(e.content.chatroom))
        }, e.exports = p, n(284), n(283), n(282), n(281)
    }, , , , function (e, t, n) {
        "use strict";
        var r, o = n(43);
        var i = ((r = o) && r.__esModule ? r : {default: r}).default.clientTypeMap;

        function s() {
        }

        s.reverse = function (e) {
            var t = e;
            return t.type = i[t.type], t
        }, s.reverseType = function (e) {
            return i[e] || e
        }, e.exports = s
    }, , function (e, t, n) {
        "use strict";
        var r = n(24), o = r.f, i = n(202);

        function s(e) {
            e.onload && this.once("load", e.onload), e.onerror && this.once("error", e.onerror), e.onbeforesend && this.once("beforesend", e.onbeforesend), e.onaftersend && this.once("aftersend", e.onaftersend);
            var t = (e = this.options = r.fetch({
                method: "GET",
                url: "",
                sync: !1,
                data: null,
                headers: {},
                cookie: !1,
                timeout: 6e4,
                type: "text",
                form: null,
                input: null,
                putFileAtEnd: !1,
                proxyUrl: ""
            }, e)).headers;
            r.notexist(t["Content-Type"]) && (t["Content-Type"] = "application/x-www-form-urlencoded"), this.send()
        }

        var a = s.prototype = Object.create(i.prototype);
        a.send = function () {
            var e = this, t = e.options;
            setTimeout(function () {
                try {
                    try {
                        e.emit("beforesend", t)
                    } catch (e) {
                        console.error("ignore error ajax beforesend,", e)
                    }
                    e.doSend()
                } catch (t) {
                    console.error("ignore error server error,", t), e.onError("serverError", "请求失败:" + t.message)
                }
            }, 0)
        }, a.doSend = o, a.afterSend = function () {
            var e = this;
            setTimeout(function () {
                e.emit("aftersend", e.options)
            }, 0)
        }, a.onLoad = function (e) {
            var t = this.options, n = e.status, r = e.result;
            if (0 === ("" + n).indexOf("2")) {
                if ("json" === t.type) try {
                    r = JSON.parse(r)
                } catch (e) {
                    return console.error("ignore error parse json,", e), void this.onError("parseError", r)
                }
                this.emit("load", r)
            } else this.onError("serverError", "服务器返回异常状态", {status: n, result: r})
        }, a.onError = function (e, t, n) {
            var o = r.isObject(n) ? n : {};
            o.code = e || "error", o.message = t || "发生错误", this.emit("error", o)
        }, a.onTimeout = function () {
            this.onError("timeout", "请求超时")
        }, a.abort = function () {
            this.onError("abort", "客户端中止")
        }, a.header = function (e) {
            var t = this;
            if (!r.isArray(e)) return t.getResponseHeader(e || "");
            var n = {};
            return e.forEach(function (e) {
                n[e] = t.header(e)
            }), n
        }, a.getResponseHeader = o, a.destroy = o, e.exports = s
    }, function (e, t, n) {
        "use strict";
        var r = n(24), o = n(203), i = n(201), s = n(200), a = {}, c = r.f;

        function u(e) {
            var t = e.upload = "multipart/form-data" === (e.headers || r.o)["Content-Type"], n = !1;
            try {
                n = (location.protocol + "//" + location.host).toLowerCase() !== r.url2origin(e.url)
            } catch (e) {
            }
            return e.cors = n, t || n || e.mode ? function (e) {
                var t = e.mode, n = o, a = r.getGlobal();
                return !a.FormData && a.document && (t = "iframe"), "iframe" === t && (n = e.upload ? i : s), new n(e)
            }(e) : new o(e)
        }

        function l(e, t, n) {
            var r = a[e];
            if (r) {
                "onload" === t && r.result && (n = function (e, t) {
                    t = {data: t};
                    var n = e.result.headers;
                    return n && (t.headers = e.req.header(n)), t
                }(r, n)), function (e) {
                    var t = a[e];
                    t && (t.req.destroy(), delete a[e])
                }(e);
                var o = {type: t, result: n};
                c(o), o.stopped || r[t](o.result)
            }
        }

        function p(e, t) {
            var n = r.genUrlSep(e);
            return t = t || "", r.isObject(t) && (t = r.object2query(t)), t && (e += n + t), e
        }

        function m(e, t) {
            t = t || {};
            var n = r.uniqueID(), o = {result: t.result, onload: t.onload || r.f, onerror: t.onerror || r.f};
            a[n] = o, t.onload = function (e, t) {
                l(e, "onload", t)
            }.bind(null, n), t.onerror = function (e, t) {
                l(e, "onerror", t)
            }.bind(null, n), t.query && (e = p(e, t.query));
            var i = t.method || "";
            return i && !/get/i.test(i) || !t.data || (e = p(e, t.data), t.data = null), t.url = e, o.req = u(t), n
        }

        m.filter = function (e) {
            r.isFunction(e) && (c = e)
        }, m.abort = function (e) {
            var t = a[e];
            t && t.req.abort()
        }, e.exports = m
    }, , function (e, t) {
        e.exports = function (e, t) {
            var n = t.split(".");
            for (; n.length;) {
                var r = n.shift(), o = !1;
                if ("?" == r[r.length - 1] && (r = r.slice(0, -1), o = !0), !(e = e[r]) && o) return e
            }
            return e
        }
    }, , , , , function (e, t, n) {
        "use strict";
        var r = n(71), o = n(65), i = n(0), s = n(4);

        function a(e) {
            switch (i.notundef(e.type) ? i.verifyFileType(e.type, "msg::FileMessage") : e.type = "file", i.verifyOptions(e, "file", "msg::FileMessage"), i.verifyOptions(e.file, "url ext size md5", !0, "file.", "msg::FileMessage"), e.type) {
                case"image":
                    c.verifyFile(e.file, "msg::FileMessage");
                    break;
                case"audio":
                    u.verifyFile(e.file, "msg::FileMessage");
                    break;
                case"video":
                    l.verifyFile(e.file, "msg::FileMessage")
            }
            o.call(this, e), this.attach = JSON.stringify(e.file)
        }

        a.prototype = Object.create(o.prototype), a.reverse = function (e) {
            var t = o.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "", t.file = e.attach ? JSON.parse(e.attach) : {}, t.file.url = (0, r.genPrivateUrl)(t.file.url), "audio" === t.type && (t.file.mp3Url = t.file.url + "?audioTrans&type=mp3"), s.httpsEnabled && (t.file.url = t.file.url.replace("http", "https")), t
        }, e.exports = a;
        var c = n(278), u = n(277), l = n(276)
    }, function (e, t, n) {
        "use strict";
        var r = n(46), o = n(101), i = n(4), s = n(169), a = n(280), c = n(0), u = c.verifyOptions,
            l = c.verifyParamType, p = n(74).getInstance("Chatroom");

        function m(e) {
            return this.subType = "chatroom", e.Protocol = o, e.Message = a, e.constructor = m, e.isAnonymous && (e.account = e.account || "nimanon_" + c.guid(), e.isAnonymous = 1, c.verifyOptions(e, "chatroomNick", "api::Chatroom"), e.chatroomAvatar = e.chatroomAvatar || " "), this.init(e)
        }

        m.Protocol = o, m.parser = p, m.use = r.use, m.getInstance = function (e) {
            return e.isAnonymous && (e.account = e.account || "nimanon_" + c.guid(), e.isAnonymous = 1, c.verifyOptions(e, "chatroomNick", "api::Chatroom.getInstance"), e.chatroomAvatar = e.chatroomAvatar || " "), r.getInstance.call(this, e)
        }, m.genInstanceName = function (e) {
            return c.verifyOptions(e, "chatroomId", "api::Chatroom.genInstanceName"), "Chatroom-account-" + e.account + "-chatroomId-" + e.chatroomId
        };
        var d = m.fn = m.prototype = Object.create(r.prototype);
        m.info = d.info = i.info, d.getChatroom = function (e) {
            this.processCallback(e), this.sendCmd("getChatroom", e)
        }, d.updateChatroom = function (e) {
            u(e, "chatroom needNotify", "api::updateChatroom"), l("needNotify", e.needNotify, "boolean"), this.processCustom(e), this.processCallback(e), e.chatroom = new s(e.chatroom), this.sendCmd("updateChatroom", e)
        }, d.closeChatroom = function (e) {
            this.processCustom(e), this.processCallback(e), this.sendCmd("closeChatroom", e)
        }, e.exports = m, n(270), n(269), n(268)
    }, , , , , , function (e, t) {
        e.exports = function (e) {
            var t = n.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        };
        var n = Object.prototype.toString
    }, function (e, t, n) {
        "use strict";
        var r = {
            link: {id: 1, heartbeat: 2},
            misc: {
                id: 6,
                getSimpleNosToken: 1,
                getNosToken: 2,
                notifyUploadLog: 3,
                uploadSdkLogUrl: 4,
                audioToText: 5,
                processImage: 6,
                getClientAntispam: 17,
                getNosTokenTrans: 7,
                notifyTransLog: 8,
                fetchFile: 9,
                fetchFileList: 10,
                removeFile: 11
            }
        }, o = {
            heartbeat: {sid: r.link.id, cid: r.link.heartbeat},
            getSimpleNosToken: {sid: r.misc.id, cid: r.misc.getSimpleNosToken, params: [{type: "int", name: "num"}]},
            getNosToken: {sid: r.misc.id, cid: r.misc.getNosToken, params: [{type: "String", name: "responseBody"}]},
            uploadSdkLogUrl: {sid: r.misc.id, cid: r.misc.uploadSdkLogUrl, params: [{type: "string", name: "url"}]},
            audioToText: {sid: r.misc.id, cid: r.misc.audioToText, params: [{type: "Property", name: "audioToText"}]},
            processImage: {
                sid: r.misc.id,
                cid: r.misc.processImage,
                params: [{type: "String", name: "url"}, {type: "PropertyArray", name: "imageOps", entity: "imageOp"}]
            },
            getClientAntispam: {
                sid: r.misc.id,
                cid: r.misc.getClientAntispam,
                params: [{type: "Property", name: "clientAntispam"}]
            },
            getNosTokenTrans: {
                sid: r.misc.id,
                cid: r.misc.getNosTokenTrans,
                params: [{type: "Property", name: "transToken"}]
            },
            fetchFile: {sid: r.misc.id, cid: r.misc.fetchFile, params: [{type: "String", name: "docId"}]},
            fetchFileList: {
                sid: r.misc.id,
                cid: r.misc.fetchFileList,
                params: [{type: "Property", name: "fileListParam"}]
            },
            removeFile: {sid: r.misc.id, cid: r.misc.removeFile, params: [{type: "String", name: "docId"}]}
        };
        e.exports = {
            idMap: r,
            cmdConfig: o,
            packetConfig: {
                "1_2": {service: "link", cmd: "heartbeat"},
                "6_1": {
                    service: "misc",
                    cmd: "getSimpleNosToken",
                    response: [{type: "PropertyArray", name: "nosTokens", entity: "nosToken"}]
                },
                "6_2": {service: "misc", cmd: "getNosToken", response: [{type: "Property", name: "nosToken"}]},
                "6_3": {service: "misc", cmd: "notifyUploadLog"},
                "6_5": {service: "misc", cmd: "audioToText", response: [{type: "String", name: "text"}]},
                "6_6": {service: "misc", cmd: "processImage", response: [{type: "String", name: "url"}]},
                "6_17": {
                    service: "misc",
                    cmd: "getClientAntispam",
                    response: [{type: "Property", name: "clientAntispam"}]
                },
                "6_7": {
                    service: "misc",
                    cmd: "getNosTokenTrans",
                    response: [{type: "Property", name: "nosToken"}, {type: "String", name: "docId"}]
                },
                "6_8": {service: "misc", cmd: "notifyTransLog", response: [{type: "Property", name: "transInfo"}]},
                "6_9": {
                    service: "misc",
                    cmd: "fetchFile",
                    response: [{type: "Property", name: "info", entity: "transInfo"}]
                },
                "6_10": {
                    service: "misc",
                    cmd: "fetchFileList",
                    response: [{type: "PropertyArray", name: "list", entity: "transInfo"}, {
                        type: "Number",
                        name: "totalCount"
                    }]
                },
                "6_11": {service: "misc", cmd: "removeFile", response: [{type: "String", name: "res"}]}
            }
        }
    }, function (module, exports, __webpack_require__) {
        (function (global, module) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

            /*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
            function logWeixin(e) {
                "undefined" != typeof wx && console.log("wx log: " + e)
            }

            function getGlobal() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== global ? global : {}
            }

            var root = getGlobal(), io = module.exports;
            void 0 === root.location && (root.location = null), root.io ? module && (module.exports = io = root.io) : root.io = io, function () {
                !function (e, t) {
                    var n = e;
                    n.version = "0.9.11", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function (e, r) {
                        var o, i, s = n.util.parseUri(e);
                        t && t.location && (s.protocol = s.protocol || t.location.protocol.slice(0, -1), s.host = s.host || (t.document ? t.document.domain : t.location.hostname), s.port = s.port || t.location.port), o = n.util.uniqueUri(s);
                        var a = {
                            host: s.host,
                            secure: "https" === s.protocol,
                            port: s.port || ("https" === s.protocol ? 443 : 80),
                            query: s.query || ""
                        };
                        return n.util.merge(a, r), !a["force new connection"] && n.sockets[o] || (i = new n.Socket(a)), !a["force new connection"] && i && (n.sockets[o] = i), (i = i || n.sockets[o]).of(s.path.length > 1 ? s.path : "")
                    }
                }(module.exports, root), function (e, t) {
                    var n = e.util = {},
                        r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                    n.parseUri = function (e) {
                        for (var t = r.exec(e || ""), n = {}, i = 14; i--;) n[o[i]] = t[i] || "";
                        return n
                    }, n.uniqueUri = function (e) {
                        var n = e.protocol, r = e.host, o = e.port;
                        return "document" in t ? (r = r || document.domain, o = o || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (r = r || "localhost", o || "https" != n || (o = 443)), (n || "http") + "://" + r + ":" + (o || 80)
                    }, n.query = function (e, t) {
                        var r = n.chunkQuery(e || ""), o = [];
                        for (var i in n.merge(r, n.chunkQuery(t || "")), r) r.hasOwnProperty(i) && o.push(i + "=" + r[i]);
                        return o.length ? "?" + o.join("&") : ""
                    }, n.chunkQuery = function (e) {
                        for (var t, n = {}, r = e.split("&"), o = 0, i = r.length; o < i; ++o) (t = r[o].split("="))[0] && (n[t[0]] = t[1]);
                        return n
                    };
                    var i = !1;
                    n.load = function (e) {
                        if (document && "complete" === document.readyState || i) return e();
                        n.on(t, "load", e, !1)
                    }, n.on = function (e, t, n, r) {
                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, r)
                    }, n.request = function (e) {
                        if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
                        if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS)) return new XMLHttpRequest;
                        if (!e) try {
                            return new (root[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                        } catch (e) {
                        }
                        return null
                    }, void 0 !== root && n.load(function () {
                        i = !0
                    }), n.defer = function (e) {
                        if (!n.ua.webkit || "undefined" != typeof importScripts) return e();
                        n.load(function () {
                            setTimeout(e, 100)
                        })
                    }, n.merge = function (e, t, r, o) {
                        var i, s = o || [], a = void 0 === r ? 2 : r;
                        for (i in t) t.hasOwnProperty(i) && n.indexOf(s, i) < 0 && ("object" == typeof e[i] && a ? n.merge(e[i], t[i], a - 1, s) : (e[i] = t[i], s.push(t[i])));
                        return e
                    }, n.mixin = function (e, t) {
                        n.merge(e.prototype, t.prototype)
                    }, n.inherit = function (e, t) {
                        function n() {
                        }

                        n.prototype = t.prototype, e.prototype = new n
                    }, n.isArray = Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }, n.intersect = function (e, t) {
                        for (var r = [], o = e.length > t.length ? e : t, i = e.length > t.length ? t : e, s = 0, a = i.length; s < a; s++) ~n.indexOf(o, i[s]) && r.push(i[s]);
                        return r
                    }, n.indexOf = function (e, t, n) {
                        var r = e.length;
                        for (n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++) ;
                        return r <= n ? -1 : n
                    }, n.toArray = function (e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
                        return t
                    }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
                        try {
                            var e = new XMLHttpRequest
                        } catch (e) {
                            return !1
                        }
                        return void 0 != e.withCredentials
                    }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
                }(void 0 !== io ? io : module.exports, root), function (e, t) {
                    function n() {
                    }

                    e.EventEmitter = n, n.prototype.on = function (e, n) {
                        return this.$events || (this.$events = {}), this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n, this
                    }, n.prototype.addListener = n.prototype.on, n.prototype.once = function (e, t) {
                        var n = this;

                        function r() {
                            n.removeListener(e, r), t.apply(this, arguments)
                        }

                        return r.listener = t, this.on(e, r), this
                    }, n.prototype.removeListener = function (e, n) {
                        if (this.$events && this.$events[e]) {
                            var r = this.$events[e];
                            if (t.util.isArray(r)) {
                                for (var o = -1, i = 0, s = r.length; i < s; i++) if (r[i] === n || r[i].listener && r[i].listener === n) {
                                    o = i;
                                    break
                                }
                                if (o < 0) return this;
                                r.splice(o, 1), r.length || delete this.$events[e]
                            } else (r === n || r.listener && r.listener === n) && delete this.$events[e]
                        }
                        return this
                    }, n.prototype.removeAllListeners = function (e) {
                        return void 0 === e ? (this.$events = {}, this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
                    }, n.prototype.listeners = function (e) {
                        return this.$events || (this.$events = {}), this.$events[e] || (this.$events[e] = []), t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]), this.$events[e]
                    }, n.prototype.emit = function (e) {
                        if (!this.$events) return !1;
                        var n = this.$events[e];
                        if (!n) return !1;
                        var r = Array.prototype.slice.call(arguments, 1);
                        if ("function" == typeof n) n.apply(this, r); else {
                            if (!t.util.isArray(n)) return !1;
                            for (var o = n.slice(), i = 0, s = o.length; i < s; i++) o[i].apply(this, r)
                        }
                        return !0
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports), function (exports, nativeJSON) {
                    "use strict";
                    if (nativeJSON && nativeJSON.parse) return exports.JSON = {
                        parse: nativeJSON.parse,
                        stringify: nativeJSON.stringify
                    };
                    var JSON = exports.JSON = {};

                    function f(e) {
                        return e < 10 ? "0" + e : e
                    }

                    function date(e, t) {
                        return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
                    }

                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        }, rep;

                    function quote(e) {
                        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                    }

                    function str(e, t) {
                        var n, r, o, i, s, a = gap, c = t[e];
                        switch (c instanceof Date && (c = date(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                            case"string":
                                return quote(c);
                            case"number":
                                return isFinite(c) ? String(c) : "null";
                            case"boolean":
                            case"null":
                                return String(c);
                            case"object":
                                if (!c) return "null";
                                if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                    for (i = c.length, n = 0; n < i; n += 1) s[n] = str(n, c) || "null";
                                    return o = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, o
                                }
                                if (rep && "object" == typeof rep) for (i = rep.length, n = 0; n < i; n += 1) "string" == typeof rep[n] && (o = str(r = rep[n], c)) && s.push(quote(r) + (gap ? ": " : ":") + o); else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (o = str(r, c)) && s.push(quote(r) + (gap ? ": " : ":") + o);
                                return o = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, o
                        }
                    }

                    JSON.stringify = function (e, t, n) {
                        var r;
                        if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1) indent += " "; else "string" == typeof n && (indent = n);
                        if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("socket.io:: replacer cannot JSON.stringify");
                        return str("", {"": e})
                    }, JSON.parse = function (text, reviver) {
                        var j;

                        function walk(e, t) {
                            var n, r, o = e[t];
                            if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[n] = r : delete o[n]);
                            return reviver.call(e, t, o)
                        }

                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                        throw new SyntaxError("socket.io:: reviver cannot JSON.parse")
                    }
                }(void 0 !== io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function (e, t) {
                    var n = e.parser = {},
                        r = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
                        o = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
                        i = n.advice = ["reconnect"], s = t.JSON, a = t.util.indexOf;
                    n.encodePacket = function (e) {
                        var t = a(r, e.type), n = e.id || "", c = e.endpoint || "", u = e.ack, l = null;
                        switch (e.type) {
                            case"error":
                                var p = e.reason ? a(o, e.reason) : "", m = e.advice ? a(i, e.advice) : "";
                                "" === p && "" === m || (l = p + ("" !== m ? "+" + m : ""));
                                break;
                            case"message":
                                "" !== e.data && (l = e.data);
                                break;
                            case"event":
                                var d = {name: e.name};
                                e.args && e.args.length && (d.args = e.args), l = s.stringify(d);
                                break;
                            case"json":
                                l = s.stringify(e.data);
                                break;
                            case"connect":
                                e.qs && (l = e.qs);
                                break;
                            case"ack":
                                l = e.ackId + (e.args && e.args.length ? "+" + s.stringify(e.args) : "")
                        }
                        var f = [t, n + ("data" == u ? "+" : ""), c];
                        return null !== l && void 0 !== l && f.push(l), f.join(":")
                    }, n.encodePayload = function (e) {
                        var t = "";
                        if (1 == e.length) return e[0];
                        for (var n = 0, r = e.length; n < r; n++) {
                            t += "�" + e[n].length + "�" + e[n]
                        }
                        return t
                    };
                    var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                    n.decodePacket = function (e) {
                        if (!(a = e.match(c))) return {};
                        var t = a[2] || "", n = (e = a[5] || "", {type: r[a[1]], endpoint: a[4] || ""});
                        switch (t && (n.id = t, a[3] ? n.ack = "data" : n.ack = !0), n.type) {
                            case"error":
                                var a = e.split("+");
                                n.reason = o[a[0]] || "", n.advice = i[a[1]] || "";
                                break;
                            case"message":
                                n.data = e || "";
                                break;
                            case"event":
                                try {
                                    var u = s.parse(e);
                                    n.name = u.name, n.args = u.args
                                } catch (e) {
                                }
                                n.args = n.args || [];
                                break;
                            case"json":
                                try {
                                    n.data = s.parse(e)
                                } catch (e) {
                                }
                                break;
                            case"connect":
                                n.qs = e || "";
                                break;
                            case"ack":
                                if ((a = e.match(/^([0-9]+)(\+)?(.*)/)) && (n.ackId = a[1], n.args = [], a[3])) try {
                                    n.args = a[3] ? s.parse(a[3]) : []
                                } catch (e) {
                                }
                        }
                        return n
                    }, n.decodePayload = function (e) {
                        var t = function (e, t) {
                            for (var n = 0, r = e; r < t.length; r++) {
                                if ("�" == t.charAt(r)) return n;
                                n++
                            }
                            return n
                        };
                        if ("�" == e.charAt(0)) {
                            for (var r = [], o = 1, i = ""; o < e.length; o++) if ("�" == e.charAt(o)) {
                                var s = e.substr(o + 1).substr(0, i);
                                if ("�" != e.charAt(o + 1 + Number(i)) && o + 1 + Number(i) != e.length) {
                                    var a = Number(i);
                                    l = t(o + a + 1, e), s = e.substr(o + 1).substr(0, a + l), o += l
                                }
                                r.push(n.decodePacket(s)), o += Number(i) + 1, i = ""
                            } else i += e.charAt(o);
                            return r
                        }
                        return [n.decodePacket(e)]
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports), function (e, t) {
                    function n(e, t) {
                        this.socket = e, this.sessid = t
                    }

                    e.Transport = n, t.util.mixin(n, t.EventEmitter), n.prototype.heartbeats = function () {
                        return !0
                    }, n.prototype.onData = function (e) {
                        if (this !== this.socket.transport) return this;
                        if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== e) {
                            var n = t.parser.decodePayload(e);
                            if (n && n.length) for (var r = 0, o = n.length; r < o; r++) this.onPacket(n[r])
                        }
                        return this
                    }, n.prototype.onPacket = function (e) {
                        return this.socket.setHeartbeatTimeout(), "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(), "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1), this.socket.onPacket(e), this)
                    }, n.prototype.setCloseTimeout = function () {
                        if (!this.closeTimeout) {
                            var e = this;
                            this.closeTimeout = setTimeout(function () {
                                logWeixin("SocketIO close socket by timeout !"), e.onDisconnect()
                            }, this.socket.closeTimeout)
                        }
                    }, n.prototype.onDisconnect = function () {
                        return this.isOpen && this.close(), this.clearTimeouts(), this.socket.transport === this ? this.socket.onDisconnect() : this.socket.setBuffer(!1), this
                    }, n.prototype.onConnect = function () {
                        return this.socket.onConnect(), this
                    }, n.prototype.clearCloseTimeout = function () {
                        this.closeTimeout && (clearTimeout(this.closeTimeout), logWeixin("SocketIO clear close timeout ..."), this.closeTimeout = null)
                    }, n.prototype.clearTimeouts = function () {
                        this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
                    }, n.prototype.packet = function (e) {
                        this.send(t.parser.encodePacket(e))
                    }, n.prototype.onHeartbeat = function (e) {
                        this.packet({type: "heartbeat"})
                    }, n.prototype.onOpen = function () {
                        logWeixin("SocketIO transports onopen ..."), this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
                    }, n.prototype.onClose = function () {
                        logWeixin("SocketIO transports onclose ..."), this.isOpen = !1, this.socket.transport === this ? this.socket.onClose() : this.socket.setBuffer(!1), this.onDisconnect(), this.onDisconnectDone instanceof Function && this.onDisconnectDone(null), this.onConnectionOver instanceof Function && this.onConnectionOver(null)
                    }, n.prototype.onDisconnectDone = function () {
                    }, n.prototype.onConnectionOver = function () {
                    }, n.prototype.prepareUrl = function () {
                        var e = this.socket.options;
                        return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
                    }, n.prototype.ready = function (e, t) {
                        t.call(this)
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports), function (e, t, n) {
                    function r(e) {
                        if (this.options = {
                            port: 80,
                            secure: !1,
                            document: "document" in n && document,
                            resource: "socket.io",
                            transports: e.transports || t.transports,
                            "connect timeout": 1e4,
                            "try multiple transports": !0,
                            reconnect: !0,
                            "reconnection delay": 500,
                            "reconnection limit": 1 / 0,
                            "reopen delay": 3e3,
                            "max reconnection attempts": 10,
                            "sync disconnect on unload": !1,
                            "auto connect": !0,
                            "flash policy port": 10843,
                            manualFlush: !1
                        }, t.util.merge(this.options, e), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
                            var r = this;
                            t.util.on(n, "beforeunload", function () {
                                r.disconnectSync()
                            }, !1)
                        }
                        this.options["auto connect"] && this.connect()
                    }

                    function o() {
                    }

                    e.Socket = r, t.util.mixin(r, t.EventEmitter), r.prototype.of = function (e) {
                        return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this, e), "" !== e && this.namespaces[e].packet({type: "connect"})), this.namespaces[e]
                    }, r.prototype.publish = function () {
                        var e;
                        for (var t in this.emit.apply(this, arguments), this.namespaces) this.namespaces.hasOwnProperty(t) && (e = this.of(t)).$emit.apply(e, arguments)
                    }, r.prototype.handshake = function (e) {
                        var n = this, r = this.options;

                        function i(t) {
                            t instanceof Error ? (n.connecting = !1, n.onError(t.message)) : (console.log("SocketIO handshake success " + t), e.apply(null, t.split(":")))
                        }

                        var s = ["http" + (r.secure ? "s" : "") + ":/", r.host + ":" + r.port, r.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
                        if (this.isXDomain() && !t.util.ua.hasCORS && document && document.getElementsByTagName) {
                            var a = document.getElementsByTagName("script")[0], c = document.createElement("script");
                            c.src = s + "&jsonp=" + t.j.length, c.onreadystatechange = function () {
                                "loaded" == this.readyState && c.parentNode && (c.parentNode.removeChild(c), n.connecting = !1, !n.reconnecting && n.onError("Server down or port not open"), n.publish("handshake_failed"))
                            }, a.parentNode.insertBefore(c, a), t.j.push(function (e) {
                                i(e), c.parentNode.removeChild(c)
                            })
                        } else {
                            var u = t.util.request();
                            u.open("GET", s, !0), u.timeout = 1e4, this.isXDomain() && (u.withCredentials = !0), u.onreadystatechange = function () {
                                4 == u.readyState && (u.onreadystatechange = o, 200 == u.status ? i(u.responseText) : 403 == u.status ? (n.connecting = !1, n.onError(u.responseText), n.publish("handshake_failed")) : (n.connecting = !1, !n.reconnecting && n.onError(u.responseText), n.publish("handshake_failed")))
                            }, u.ontimeout = function (e) {
                                n.connecting = !1, !n.reconnecting && n.onError(u.responseText), n.publish("handshake_failed")
                            }, u.send(null)
                        }
                    }, r.prototype.connect = function (e) {
                        if (this.connecting) return this;
                        var n = this;
                        return n.connecting = !0, this.handshake(function (r, o, i, s) {
                            n.sessionid = r, n.closeTimeout = 1e3 * i, n.heartbeatTimeout = 1e3 * o, n.transports || (n.transports = n.origTransports = s ? t.util.intersect(s.split(","), n.options.transports) : n.options.transports), console.log("SocketIO transports: " + n.transports + " opt:" + n.options.transports), n.setHeartbeatTimeout(), n.once("connect", function () {
                                clearTimeout(n.connectTimeoutTimer), n.connectTimeoutTimer = null, e && "function" == typeof e && e()
                            }), n.doConnect()
                        }), this
                    }, r.prototype.doConnect = function () {
                        var e = this;
                        if (e.transport && e.transport.clearTimeouts(), e.transport = e.getTransport(e.transports), !e.transport) return e.publish("connect_failed");
                        e.transport.ready(e, function () {
                            e.connecting = !0, e.publish("connecting", e.transport.name), e.transport.open(), e.options["connect timeout"] && (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer), e.connectTimeoutTimer = setTimeout(e.tryNextTransport.bind(e), e.options["connect timeout"]))
                        })
                    }, r.prototype.getTransport = function (e) {
                        for (var n, r = e || this.transports, o = 0; n = r[o]; o++) {
                            if (console.log("SocketIO check " + n + " " + t.Transport[n].check(this) + " , cors " + t.Transport[n].xdomainCheck(this)), t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this))) return new t.Transport[n](this, this.sessionid)
                        }
                        return null
                    }, r.prototype.tryNextTransport = function () {
                        logWeixin("SocketIO try next transport");
                        if (!this.connected && (this.connecting = !1, this.options["try multiple transports"])) {
                            for (var e = this.transports; e.length > 0 && e.splice(0, 1)[0] != this.transport.name;) ;
                            e.length ? (logWeixin("SocketIO use transport " + JSON.stringify(e)), this.doConnect()) : this.publish("connect_failed")
                        }
                    }, r.prototype.setHeartbeatTimeout = function () {
                        if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                            var e = this;
                            this.heartbeatTimeoutTimer = setTimeout(function () {
                                e.transport && e.transport.onClose()
                            }, this.heartbeatTimeout)
                        }
                    }, r.prototype.packet = function (e) {
                        return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e), this
                    }, r.prototype.setBuffer = function (e) {
                        this.doBuffer = e, !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
                    }, r.prototype.flushBuffer = function () {
                        this.transport.payload(this.buffer), this.buffer = []
                    }, r.prototype.disconnect = function () {
                        return (this.connected || this.connecting) && (this.open && this.of("").packet({type: "disconnect"}), this.onDisconnect("booted")), this
                    }, r.prototype.disconnectSync = function () {
                        var e = t.util.request(),
                            n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                        e.open("GET", n, !1), e.send(null), this.onDisconnect("booted")
                    }, r.prototype.isXDomain = function () {
                        var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                        return this.options.host !== n.location.hostname || this.options.port != e
                    }, r.prototype.onConnect = function () {
                        this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
                    }, r.prototype.onOpen = function () {
                        this.open = !0
                    }, r.prototype.onClose = function () {
                        this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
                    }, r.prototype.onPacket = function (e) {
                        this.of(e.endpoint).onPacket(e)
                    }, r.prototype.onError = function (e) {
                        e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", e && e.reason ? e.reason : e)
                    }, r.prototype.onDisconnect = function (e) {
                        var t = this.connected, n = this.connecting;
                        this.connected = !1, this.connecting = !1, this.open = !1, (t || n) && (this.transport.close(), this.transport.clearTimeouts(), t && (this.publish("disconnect", e), "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()), n && this.tryNextTransport())
                    }, r.prototype.reconnect = function () {
                        this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                        var e = this, t = this.options["max reconnection attempts"],
                            n = this.options["try multiple transports"], r = this.options["reconnection limit"];

                        function o() {
                            if (e.connected) {
                                for (var t in e.namespaces) e.namespaces.hasOwnProperty(t) && "" !== t && e.namespaces[t].packet({type: "connect"});
                                e.publish("reconnect", e.transport.name, e.reconnectionAttempts)
                            }
                            clearTimeout(e.reconnectionTimer), e.removeListener("connect_failed", i), e.removeListener("connect", i), e.reconnecting = !1, delete e.reconnectionAttempts, delete e.reconnectionDelay, delete e.reconnectionTimer, delete e.redoTransports, e.options["try multiple transports"] = n
                        }

                        function i() {
                            if (e.reconnecting) return e.connected ? o() : e.connecting && e.reconnecting ? e.reconnectionTimer = setTimeout(i, 1e3) : void(e.reconnectionAttempts++ >= t ? e.redoTransports ? (e.publish("reconnect_failed"), o()) : (e.on("connect_failed", i), e.options["try multiple transports"] = !0, e.transports = e.origTransports, e.transport = e.getTransport(), e.redoTransports = !0, e.connect()) : (e.reconnectionDelay < r && (e.reconnectionDelay *= 2), e.connect(), e.publish("reconnecting", e.reconnectionDelay, e.reconnectionAttempts), e.reconnectionTimer = setTimeout(i, e.reconnectionDelay)))
                        }

                        this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(i, this.reconnectionDelay), this.on("connect", i)
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports, root), function (e, t) {
                    function n(e, t) {
                        this.socket = e, this.name = t || "", this.flags = {}, this.json = new r(this, "json"), this.ackPackets = 0, this.acks = {}
                    }

                    function r(e, t) {
                        this.namespace = e, this.name = t
                    }

                    e.SocketNamespace = n, t.util.mixin(n, t.EventEmitter), n.prototype.$emit = t.EventEmitter.prototype.emit, n.prototype.of = function () {
                        return this.socket.of.apply(this.socket, arguments)
                    }, n.prototype.packet = function (e) {
                        return e.endpoint = this.name, this.socket.packet(e), this.flags = {}, this
                    }, n.prototype.send = function (e, t) {
                        var n = {type: this.flags.json ? "json" : "message", data: e};
                        return "function" == typeof t && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = t), this.packet(n)
                    }, n.prototype.emit = function (e) {
                        var t = Array.prototype.slice.call(arguments, 1), n = t[t.length - 1],
                            r = {type: "event", name: e};
                        return "function" == typeof n && (r.id = ++this.ackPackets, r.ack = "data", this.acks[r.id] = n, t = t.slice(0, t.length - 1)), r.args = t, this.packet(r)
                    }, n.prototype.disconnect = function () {
                        return "" === this.name ? this.socket.disconnect() : (this.packet({type: "disconnect"}), this.$emit("disconnect")), this
                    }, n.prototype.onPacket = function (e) {
                        var n = this;

                        function r() {
                            n.packet({type: "ack", args: t.util.toArray(arguments), ackId: e.id})
                        }

                        switch (e.type) {
                            case"connect":
                                this.$emit("connect");
                                break;
                            case"disconnect":
                                "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                                break;
                            case"message":
                            case"json":
                                var o = ["message", e.data];
                                "data" == e.ack ? o.push(r) : e.ack && this.packet({
                                    type: "ack",
                                    ackId: e.id
                                }), this.$emit.apply(this, o);
                                break;
                            case"event":
                                o = [e.name].concat(e.args);
                                "data" == e.ack && o.push(r), this.$emit.apply(this, o);
                                break;
                            case"ack":
                                this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                                break;
                            case"error":
                                e.advice ? this.socket.onError(e) : "unauthorized" == e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
                        }
                    }, r.prototype.send = function () {
                        this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
                    }, r.prototype.emit = function () {
                        this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
                    }
                }(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports), function (e, t, n) {
                    function r(e) {
                        t.Transport.apply(this, arguments)
                    }

                    e.websocket = r, t.util.inherit(r, t.Transport), r.prototype.name = "websocket", r.prototype.open = function () {
                        var e, r = t.util.query(this.socket.options.query), o = this;
                        return e || (e = n.MozWebSocket || n.WebSocket), this.websocket = new e(this.prepareUrl() + r), this.websocket.onopen = function () {
                            o.onOpen(), o.socket.setBuffer(!1)
                        }, this.websocket.onmessage = function (e) {
                            o.onData(e.data)
                        }, this.websocket.onclose = function () {
                            o.socket.setBuffer(!0), o.onClose()
                        }, this.websocket.onerror = function (e) {
                            o.onError(e)
                        }, this
                    }, t.util.ua.iDevice ? r.prototype.send = function (e) {
                        var t = this;
                        return setTimeout(function () {
                            t.websocket.send(e)
                        }, 0), this
                    } : r.prototype.send = function (e) {
                        return this.websocket.send(e), this
                    }, r.prototype.payload = function (e) {
                        for (var t = 0, n = e.length; t < n; t++) this.packet(e[t]);
                        return this
                    }, r.prototype.close = function () {
                        return this.websocket.close(), this
                    }, r.prototype.onError = function (e) {
                        this.socket.onError(e)
                    }, r.prototype.scheme = function () {
                        return this.socket.options.secure ? "wss" : "ws"
                    }, r.check = function () {
                        return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
                    }, r.xdomainCheck = function () {
                        return !0
                    }, t.transports.push("websocket")
                }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root), function (e, t, n) {
                    function r(e) {
                        e && (t.Transport.apply(this, arguments), this.sendBuffer = [])
                    }

                    function o() {
                    }

                    e.XHR = r, t.util.inherit(r, t.Transport), r.prototype.open = function () {
                        return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
                    }, r.prototype.payload = function (e) {
                        for (var n = [], r = 0, o = e.length; r < o; r++) n.push(t.parser.encodePacket(e[r]));
                        this.send(t.parser.encodePayload(n))
                    }, r.prototype.send = function (e) {
                        return this.post(e), this
                    }, r.prototype.post = function (e) {
                        var t = this;
                        this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = function () {
                            this.onload = o, t.socket.setBuffer(!1)
                        } : this.sendXHR.onreadystatechange = function () {
                            4 == this.readyState && (this.onreadystatechange = o, t.posting = !1, 200 == this.status ? t.socket.setBuffer(!1) : t.onClose())
                        }, this.sendXHR.send(e)
                    }, r.prototype.close = function () {
                        return this.onClose(), this
                    }, r.prototype.request = function (e) {
                        var n = t.util.request(this.socket.isXDomain()),
                            r = t.util.query(this.socket.options.query, "t=" + +new Date);
                        if (n.open(e || "GET", this.prepareUrl() + r, !0), "POST" == e) try {
                            n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                        } catch (e) {
                        }
                        return n
                    }, r.prototype.scheme = function () {
                        return this.socket.options.secure ? "https" : "http"
                    }, r.check = function (e, r) {
                        try {
                            var o = t.util.request(r), i = n.XDomainRequest && o instanceof XDomainRequest,
                                s = e && e.options && e.options.secure ? "https:" : "http:",
                                a = n.location && s != n.location.protocol;
                            if (o && (!i || !a)) return !0
                        } catch (e) {
                        }
                        return !1
                    }, r.xdomainCheck = function (e) {
                        return r.check(e, !0)
                    }
                }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root), function (e, t, n) {
                    function r() {
                        t.Transport.XHR.apply(this, arguments)
                    }

                    function o() {
                    }

                    e["xhr-polling"] = r, t.util.inherit(r, t.Transport.XHR), t.util.merge(r, t.Transport.XHR), r.prototype.name = "xhr-polling", r.prototype.heartbeats = function () {
                        return !1
                    }, r.prototype.open = function () {
                        return t.Transport.XHR.prototype.open.call(this), !1
                    }, r.prototype.get = function () {
                        if (this.isOpen) {
                            var e = this;
                            this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = function () {
                                this.onload = o, this.onerror = o, e.retryCounter = 1, e.onData(this.responseText), e.get()
                            }, this.xhr.onerror = function () {
                                e.retryCounter++, !e.retryCounter || e.retryCounter > 3 ? e.onClose() : e.get()
                            }) : this.xhr.onreadystatechange = function () {
                                4 == this.readyState && (this.onreadystatechange = o, 200 == this.status ? (e.onData(this.responseText), e.get()) : e.onClose())
                            }, this.xhr.send(null)
                        }
                    }, r.prototype.onClose = function () {
                        if (t.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                            this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = o;
                            try {
                                this.xhr.abort()
                            } catch (e) {
                            }
                            this.xhr = null
                        }
                    }, r.prototype.ready = function (e, n) {
                        var r = this;
                        t.util.defer(function () {
                            n.call(r)
                        })
                    }, t.transports.push("xhr-polling")
                }(void 0 !== io ? io.Transport : module.exports, void 0 !== io ? io : module.parent.exports, root), __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return io
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
            }()
        }).call(this, __webpack_require__(30), __webpack_require__(187)(module))
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = {stripmeta: 0, blur: 2, quality: 3, crop: 4, rotate: 5, thumbnail: 7, interlace: 9}, i = {
            0: "stripmeta",
            1: "type",
            2: "blur",
            3: "quality",
            4: "crop",
            5: "rotate",
            6: "pixel",
            7: "thumbnail",
            8: "watermark",
            9: "interlace",
            10: "tmp"
        };

        function s(e) {
            r.verifyOptions(e, "type", "image::ImageOp"), r.verifyParamValid("type", e.type, s.validTypes, "image::ImageOp"), r.merge(this, e), this.type = o[e.type]
        }

        s.validTypes = Object.keys(o), s.reverse = function (e) {
            var t = r.copy(e);
            return t.type = i[t.type], t
        }, s.reverseImageOps = function (e) {
            return e.map(function (e) {
                return s.reverse(e)
            })
        }, e.exports = s
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = {
            fromDataURL: function (e) {
                var t = r.getGlobal(), n = void 0;
                n = e.split(",")[0].indexOf("base64") >= 0 ? t.atob(e.split(",")[1]) : t.decodeURIComponent(e.split(",")[1]);
                for (var o = e.split(",")[0].split(":")[1].split(";")[0], i = new Uint8Array(n.length), s = 0; s < n.length; s++) i[s] = n.charCodeAt(s);
                return new t.Blob([i], {type: o})
            }
        };
        e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = n(24), o = r.getGlobal(), i = {}, s = o.name || "_parent", a = [], c = [];
        i.addMsgListener = function (e) {
            a.push(e)
        };
        var u, l, p, m, d = (u = /^([\w]+?:\/\/.*?(?=\/|$))/i, function (e) {
            return e = e || "", u.test(e) ? RegExp.$1 : "*"
        }), f = function () {
            var e = unescape(o.name || "").trim();
            if (e && 0 === e.indexOf("MSG|")) {
                o.name = "";
                var t = r.string2object(e.replace("MSG|", ""), "|"), n = (t.origin || "").toLowerCase();
                n && "*" !== n && 0 !== location.href.toLowerCase().indexOf(n) || function (e) {
                    for (var t = 0, n = a.length; t < n; t++) try {
                        a[t].call(null, e)
                    } catch (e) {
                    }
                }({
                    data: JSON.parse(t.data || "null"),
                    source: o.frames[t.self] || t.self,
                    origin: d(t.ref || document.referrer)
                })
            }
        }, h = (p = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
            return !1
        }, function () {
            if (c.length) {
                l = [];
                for (var e, t = c.length - 1; t >= 0; t--) e = c[t], p(l, e.w) || (l.push(e.w), c.splice(t, 1), e.w.name = e.d);
                l = null
            }
        }), y = i.startTimer = (m = !1, function () {
            m || (m = !0, o.postMessage || (setInterval(h, 100), setInterval(f, 20)))
        });
        i.postMessage = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (r.fillUndef(t, {origin: "*", source: s}), o.postMessage) {
                var n = t.data;
                o.FormData || (n = JSON.stringify(n)), e.postMessage(n, t.origin)
            } else {
                if (y(), r.isObject(t)) {
                    var i = {};
                    i.origin = t.origin || "", i.ref = location.href, i.self = t.source, i.data = JSON.stringify(t.data), t = "MSG|" + r.object2string(i, "|", !0)
                }
                c.unshift({w: e, d: escape(t)})
            }
        }, e.exports = i
    }, function (e, t) {
        e.exports = function e(t, n) {
            "use strict";
            var r, o, i = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                s = /(^[ ]*|[ ]*$)/g,
                a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                c = /^0x[0-9a-f]+$/i, u = /^0/, l = function (t) {
                    return e.insensitive && ("" + t).toLowerCase() || "" + t
                }, p = l(t).replace(s, "") || "", m = l(n).replace(s, "") || "",
                d = p.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                f = m.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                h = parseInt(p.match(c), 16) || 1 !== d.length && p.match(a) && Date.parse(p),
                y = parseInt(m.match(c), 16) || h && m.match(a) && Date.parse(m) || null;
            if (y) {
                if (h < y) return -1;
                if (h > y) return 1
            }
            for (var g = 0, v = Math.max(d.length, f.length); g < v; g++) {
                if (r = !(d[g] || "").match(u) && parseFloat(d[g]) || d[g] || 0, o = !(f[g] || "").match(u) && parseFloat(f[g]) || f[g] || 0, isNaN(r) !== isNaN(o)) return isNaN(r) ? 1 : -1;
                if (typeof r != typeof o && (r += "", o += ""), r < o) return -1;
                if (r > o) return 1
            }
            return 0
        }
    }, , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        var r = n(71), o = n(0), i = o.notundef, s = {"-1": "restricted", 0: "common", 1: "owner", 2: "manager"};

        function a(e) {
            i(e.nick) && (this.nick = "" + e.nick), i(e.avatar) && (this.avatar = "" + e.avatar), i(e.custom) && (this.custom = "" + e.custom)
        }

        a.reverse = function (e) {
            var t = o.copy(e);
            return i(t.chatroomId) && (t.chatroomId = "" + t.chatroomId), i(t.avatar) && (t.avatar = (0, r.genPrivateUrl)(t.avatar)), i(t.type) && (t.type = s[t.type]), i(t.level) && (t.level = +t.level), i(t.online) && (t.online = 1 == +t.online), i(t.enterTime) && (t.enterTime = +t.enterTime), i(t.guest) && (t.guest = 1 == +t.guest), i(t.blacked) && (t.blacked = 1 == +t.blacked), i(t.gaged) && (t.gaged = 1 == +t.gaged), i(t.valid) && (t.valid = 1 == +t.valid), i(t.updateTime) && (t.updateTime = +t.updateTime), i(t.tempMuted) ? t.tempMuted = 1 == +t.tempMuted : t.tempMuted = !1, i(t.tempMuteDuration) ? t.tempMuteDuration = +t.tempMuteDuration : t.tempMuteDuration = 0, t.online || delete t.enterTime, t.guest && (t.type = "guest", delete t.valid), "common" !== t.type && delete t.level, delete t.guest, t
        }, a.reverseMembers = function (e) {
            return e.map(function (e) {
                return a.reverse(e)
            })
        }, a.validTypes = Object.keys(s), e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = n(15), o = n(177), i = n(124), s = n(128), a = n(110), c = n(0), u = n(150), l = n(126), p = n(59),
            m = n(171), d = n(170);
        e.exports = function (e) {
            c.merge(e, {
                platform: r,
                xhr: o,
                io: i,
                naturalSort: s,
                deepAccess: a,
                util: c,
                support: u,
                blob: l,
                ajax: p,
                LoggerPlugin: m,
                usePlugin: d
            })
        }
    }, , , , function (e, t, n) {
        "use strict";
        var r = n(0), o = n(123), i = r.merge({}, o.idMap, {
            auth: {id: 2, login: 3, kicked: 5, logout: 6, multiPortLogin: 7, kick: 8},
            user: {
                id: 3,
                updatePushToken: 1,
                appBackground: 2,
                markInBlacklist: 3,
                getBlacklist: 4,
                markInMutelist: 5,
                getMutelist: 6,
                getRelations: 8,
                getUsers: 7,
                updateMyInfo: 10,
                updateDonnop: 15,
                syncMyInfo: 109,
                syncUpdateMyInfo: 110
            },
            notify: {
                id: 4,
                markRead: 3,
                syncOfflineMsgs: 4,
                batchMarkRead: 5,
                syncOfflineSysMsgs: 6,
                syncRoamingMsgs: 9,
                syncMsgReceipts: 12,
                syncRobots: 15,
                syncBroadcastMsgs: 16
            },
            sync: {id: 5, sync: 1, syncTeamMembers: 2},
            msg: {
                id: 7,
                sendMsg: 1,
                msg: 2,
                sysMsg: 3,
                getHistoryMsgs: 6,
                sendCustomSysMsg: 7,
                searchHistoryMsgs: 8,
                deleteSessions: 9,
                getSessions: 10,
                syncSendMsg: 101,
                sendMsgReceipt: 11,
                msgReceipt: 12,
                deleteMsg: 13,
                msgDeleted: 14,
                markSessionAck: 16,
                broadcastMsg: 17
            },
            team: {
                id: 8,
                createTeam: 1,
                sendTeamMsg: 2,
                teamMsg: 3,
                teamMsgs: 4,
                addTeamMembers: 5,
                removeTeamMembers: 6,
                updateTeam: 7,
                leaveTeam: 8,
                getTeam: 9,
                getTeams: 10,
                getTeamMembers: 11,
                dismissTeam: 12,
                applyTeam: 13,
                passTeamApply: 14,
                rejectTeamApply: 15,
                addTeamManagers: 16,
                removeTeamManagers: 17,
                transferTeam: 18,
                updateInfoInTeam: 19,
                updateNickInTeam: 20,
                acceptTeamInvite: 21,
                rejectTeamInvite: 22,
                getTeamHistoryMsgs: 23,
                searchTeamHistoryMsgs: 24,
                updateMuteStateInTeam: 25,
                getMyTeamMembers: 26,
                getMutedTeamMembers: 27,
                sendTeamMsgReceipt: 28,
                getTeamMsgReads: 29,
                getTeamMsgReadAccounts: 30,
                notifyTeamMsgReads: 31,
                muteTeamAll: 32,
                syncMyTeamMembers: 126,
                syncTeams: 109,
                syncTeamMembers: 111,
                syncCreateTeam: 101,
                syncSendTeamMsg: 102,
                syncUpdateTeamMember: 119
            },
            friend: {
                id: 12,
                friendRequest: 1,
                syncFriendRequest: 101,
                deleteFriend: 2,
                syncDeleteFriend: 102,
                updateFriend: 3,
                syncUpdateFriend: 103,
                getFriends: 4
            },
            chatroom: {id: 13, getChatroomAddress: 1},
            filter: {id: 101, sendFilterMsg: 1, filterMsg: 2, filterSysMsg: 3, sendFilterCustomSysMsg: 7},
            eventService: {
                id: 14,
                publishEvent: 1,
                pushEvent: 2,
                subscribeEvent: 3,
                unSubscribeEventsByAccounts: 4,
                unSubscribeEventsByType: 5,
                querySubscribeEventsByAccounts: 6,
                querySubscribeEventsByType: 7,
                pushEvents: 9
            }
        }), s = r.merge({}, o.cmdConfig, {
            login: {
                sid: i.auth.id,
                cid: i.auth.login,
                params: [{type: "Property", name: "login"}]
            },
            logout: {sid: i.auth.id, cid: i.auth.logout},
            kick: {sid: i.auth.id, cid: i.auth.kick, params: [{type: "StrArray", name: "deviceIds"}]},
            updatePushToken: {
                sid: i.user.id,
                cid: i.user.updatePushToken,
                params: [{type: "String", name: "tokenName"}, {type: "String", name: "token"}, {
                    type: "int",
                    name: "pushkit"
                }]
            },
            appBackground: {
                sid: i.user.id,
                cid: i.user.appBackground,
                params: [{type: "bool", name: "isBackground"}, {type: "Int", name: "badge"}]
            },
            markInBlacklist: {
                sid: i.user.id,
                cid: i.user.markInBlacklist,
                params: [{type: "String", name: "account"}, {type: "bool", name: "isAdd"}]
            },
            getBlacklist: {sid: i.user.id, cid: i.user.getBlacklist, params: [{type: "long", name: "time"}]},
            markInMutelist: {
                sid: i.user.id,
                cid: i.user.markInMutelist,
                params: [{type: "String", name: "account"}, {type: "bool", name: "isAdd"}]
            },
            getMutelist: {sid: i.user.id, cid: i.user.getMutelist, params: [{type: "long", name: "time"}]},
            getRelations: {sid: i.user.id, cid: i.user.getRelations, params: [{type: "long", name: "timetag"}]},
            getUsers: {sid: i.user.id, cid: i.user.getUsers, params: [{type: "StrArray", name: "accounts"}]},
            updateMyInfo: {sid: i.user.id, cid: i.user.updateMyInfo, params: [{type: "Property", name: "user"}]},
            updateDonnop: {sid: i.user.id, cid: i.user.updateDonnop, params: [{type: "Property", name: "donnop"}]},
            markRead: {
                sid: i.notify.id,
                cid: i.notify.markRead,
                params: [{type: "long", name: "id"}, {type: "ph", name: "ph"}]
            },
            batchMarkRead: {
                sid: i.notify.id,
                cid: i.notify.batchMarkRead,
                params: [{type: "byte", name: "sid"}, {type: "byte", name: "cid"}, {type: "LongArray", name: "ids"}]
            },
            sync: {sid: i.sync.id, cid: i.sync.sync, params: [{type: "Property", name: "sync"}]},
            syncTeamMembers: {
                sid: i.sync.id,
                cid: i.sync.syncTeamMembers,
                params: [{type: "LongLongMap", name: "sync"}]
            },
            sendMsg: {sid: i.msg.id, cid: i.msg.sendMsg, params: [{type: "Property", name: "msg"}]},
            getHistoryMsgs: {
                sid: i.msg.id,
                cid: i.msg.getHistoryMsgs,
                params: [{type: "String", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "long", name: "lastMsgId"}, {type: "int", name: "limit"}, {
                    type: "bool",
                    name: "reverse"
                }, {type: "LongArray", name: "msgTypes"}]
            },
            sendCustomSysMsg: {
                sid: i.msg.id,
                cid: i.msg.sendCustomSysMsg,
                params: [{type: "Property", name: "sysMsg"}]
            },
            searchHistoryMsgs: {
                sid: i.msg.id,
                cid: i.msg.searchHistoryMsgs,
                params: [{type: "String", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "String", name: "keyword"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            getSessions: {sid: i.msg.id, cid: i.msg.getSessions, params: [{type: "long", name: "time"}]},
            deleteSessions: {sid: i.msg.id, cid: i.msg.deleteSessions, params: [{type: "StrArray", name: "sessions"}]},
            sendMsgReceipt: {
                sid: i.msg.id,
                cid: i.msg.sendMsgReceipt,
                params: [{type: "Property", name: "msgReceipt"}]
            },
            deleteMsg: {sid: i.msg.id, cid: i.msg.deleteMsg, params: [{type: "Property", name: "sysMsg"}]},
            markSessionAck: {
                sid: i.msg.id,
                cid: i.msg.markSessionAck,
                params: [{type: "byte", name: "scene"}, {type: "String", name: "to"}, {type: "long", name: "timetag"}]
            },
            createTeam: {
                sid: i.team.id,
                cid: i.team.createTeam,
                params: [{type: "Property", name: "team"}, {type: "StrArray", name: "accounts"}, {
                    type: "String",
                    name: "ps"
                }]
            },
            sendTeamMsg: {sid: i.team.id, cid: i.team.sendTeamMsg, params: [{type: "Property", name: "msg"}]},
            addTeamMembers: {
                sid: i.team.id,
                cid: i.team.addTeamMembers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}, {
                    type: "String",
                    name: "ps"
                }]
            },
            removeTeamMembers: {
                sid: i.team.id,
                cid: i.team.removeTeamMembers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}]
            },
            updateTeam: {sid: i.team.id, cid: i.team.updateTeam, params: [{type: "Property", name: "team"}]},
            leaveTeam: {sid: i.team.id, cid: i.team.leaveTeam, params: [{type: "long", name: "teamId"}]},
            getTeam: {sid: i.team.id, cid: i.team.getTeam, params: [{type: "long", name: "teamId"}]},
            getTeams: {sid: i.team.id, cid: i.team.getTeams, params: [{type: "long", name: "timetag"}]},
            getTeamMembers: {
                sid: i.team.id,
                cid: i.team.getTeamMembers,
                params: [{type: "long", name: "teamId"}, {type: "long", name: "timetag"}]
            },
            dismissTeam: {sid: i.team.id, cid: i.team.dismissTeam, params: [{type: "long", name: "teamId"}]},
            applyTeam: {
                sid: i.team.id,
                cid: i.team.applyTeam,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "ps"}]
            },
            passTeamApply: {
                sid: i.team.id,
                cid: i.team.passTeamApply,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}]
            },
            rejectTeamApply: {
                sid: i.team.id,
                cid: i.team.rejectTeamApply,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}, {type: "String", name: "ps"}]
            },
            addTeamManagers: {
                sid: i.team.id,
                cid: i.team.addTeamManagers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}]
            },
            removeTeamManagers: {
                sid: i.team.id,
                cid: i.team.removeTeamManagers,
                params: [{type: "long", name: "teamId"}, {type: "StrArray", name: "accounts"}]
            },
            transferTeam: {
                sid: i.team.id,
                cid: i.team.transferTeam,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "account"}, {
                    type: "bool",
                    name: "leave"
                }]
            },
            updateInfoInTeam: {
                sid: i.team.id,
                cid: i.team.updateInfoInTeam,
                params: [{type: "Property", name: "teamMember"}]
            },
            updateNickInTeam: {
                sid: i.team.id,
                cid: i.team.updateNickInTeam,
                params: [{type: "Property", name: "teamMember"}]
            },
            acceptTeamInvite: {
                sid: i.team.id,
                cid: i.team.acceptTeamInvite,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}]
            },
            rejectTeamInvite: {
                sid: i.team.id,
                cid: i.team.rejectTeamInvite,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "from"}, {type: "String", name: "ps"}]
            },
            getTeamHistoryMsgs: {
                sid: i.team.id,
                cid: i.team.getTeamHistoryMsgs,
                params: [{type: "long", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "long", name: "lastMsgId"}, {type: "int", name: "limit"}, {
                    type: "bool",
                    name: "reverse"
                }, {type: "LongArray", name: "msgTypes"}]
            },
            searchTeamHistoryMsgs: {
                sid: i.team.id,
                cid: i.team.searchTeamHistoryMsgs,
                params: [{type: "long", name: "to"}, {type: "long", name: "beginTime"}, {
                    type: "long",
                    name: "endTime"
                }, {type: "String", name: "keyword"}, {type: "int", name: "limit"}, {type: "bool", name: "reverse"}]
            },
            updateMuteStateInTeam: {
                sid: i.team.id,
                cid: i.team.updateMuteStateInTeam,
                params: [{type: "long", name: "teamId"}, {type: "String", name: "account"}, {type: "int", name: "mute"}]
            },
            getMyTeamMembers: {
                sid: i.team.id,
                cid: i.team.getMyTeamMembers,
                params: [{type: "LongArray", name: "teamIds"}]
            },
            getMutedTeamMembers: {
                sid: i.team.id,
                cid: i.team.getMutedTeamMembers,
                params: [{type: "long", name: "teamId"}]
            },
            sendTeamMsgReceipt: {
                sid: i.team.id,
                cid: i.team.sendTeamMsgReceipt,
                params: [{type: "PropertyArray", name: "teamMsgReceipts", entity: "teamMsgReceipt"}]
            },
            getTeamMsgReads: {
                sid: i.team.id,
                cid: i.team.getTeamMsgReads,
                params: [{type: "PropertyArray", name: "teamMsgReceipts", entity: "teamMsgReceipt"}]
            },
            getTeamMsgReadAccounts: {
                sid: i.team.id,
                cid: i.team.getTeamMsgReadAccounts,
                params: [{type: "Property", name: "teamMsgReceipt"}]
            },
            muteTeamAll: {
                sid: i.team.id,
                cid: i.team.muteTeamAll,
                params: [{type: "long", name: "teamId"}, {type: "int", name: "muteType"}]
            },
            friendRequest: {
                sid: i.friend.id,
                cid: i.friend.friendRequest,
                params: [{type: "String", name: "account"}, {type: "byte", name: "type"}, {type: "String", name: "ps"}]
            },
            deleteFriend: {sid: i.friend.id, cid: i.friend.deleteFriend, params: [{type: "String", name: "account"}]},
            updateFriend: {sid: i.friend.id, cid: i.friend.updateFriend, params: [{type: "Property", name: "friend"}]},
            getFriends: {sid: i.friend.id, cid: i.friend.getFriends, params: [{type: "long", name: "timetag"}]},
            getChatroomAddress: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroomAddress,
                params: [{type: "long", name: "chatroomId"}, {type: "bool", name: "isWeixinApp"}]
            },
            sendFilterMsg: {sid: i.filter.id, cid: i.filter.sendFilterMsg, params: [{type: "Property", name: "msg"}]},
            sendFilterCustomSysMsg: {
                sid: i.filter.id,
                cid: i.filter.sendFilterCustomSysMsg,
                params: [{type: "Property", name: "sysMsg"}]
            },
            publishEvent: {
                sid: i.eventService.id,
                cid: i.eventService.publishEvent,
                params: [{type: "Property", name: "msgEvent"}]
            },
            pushEvent: {sid: i.eventService.id, cid: i.eventService.pushEvent},
            subscribeEvent: {
                sid: i.eventService.id,
                cid: i.eventService.subscribeEvent,
                params: [{type: "Property", name: "msgEventSubscribe"}, {type: "StrArray", name: "accounts"}]
            },
            unSubscribeEventsByAccounts: {
                sid: i.eventService.id,
                cid: i.eventService.unSubscribeEventsByAccounts,
                params: [{type: "Property", name: "msgEventSubscribe"}, {type: "StrArray", name: "accounts"}]
            },
            unSubscribeEventsByType: {
                sid: i.eventService.id,
                cid: i.eventService.unSubscribeEventsByType,
                params: [{type: "Property", name: "msgEventSubscribe"}]
            },
            querySubscribeEventsByAccounts: {
                sid: i.eventService.id,
                cid: i.eventService.querySubscribeEventsByAccounts,
                params: [{type: "Property", name: "msgEventSubscribe"}, {type: "StrArray", name: "accounts"}]
            },
            querySubscribeEventsByType: {
                sid: i.eventService.id,
                cid: i.eventService.querySubscribeEventsByType,
                params: [{type: "Property", name: "msgEventSubscribe"}]
            },
            pushEvents: {sid: i.eventService.id, cid: i.eventService.pushEvents}
        }), a = r.merge({}, o.packetConfig, {
            "2_3": {
                service: "auth",
                cmd: "login",
                response: [{type: "Property", name: "loginRes"}, {
                    type: "PropertyArray",
                    name: "loginPorts",
                    entity: "loginPort"
                }, {type: "Property", name: "aosPushInfo"}]
            },
            "2_5": {
                service: "auth",
                cmd: "kicked",
                response: [{type: "Number", name: "from"}, {type: "Number", name: "reason"}]
            },
            "2_6": {service: "auth", cmd: "logout"},
            "2_7": {
                service: "auth",
                cmd: "multiPortLogin",
                response: [{type: "Number", name: "state"}, {
                    type: "PropertyArray",
                    name: "loginPorts",
                    entity: "loginPort"
                }]
            },
            "2_8": {service: "auth", cmd: "kick", response: [{type: "StrArray", name: "deviceIds"}]},
            "3_1": {service: "user", cmd: "updatePushToken"},
            "3_2": {service: "user", cmd: "appBackground"},
            "3_3": {service: "user", cmd: "markInBlacklist"},
            "3_103": {
                service: "user",
                cmd: "syncMarkInBlacklist",
                response: [{type: "String", name: "account"}, {type: "Boolean", name: "isAdd"}]
            },
            "3_4": {service: "user", cmd: "getBlacklist", response: [{type: "StrArray", name: "blacklist"}]},
            "3_5": {service: "user", cmd: "markInMutelist"},
            "3_105": {
                service: "user",
                cmd: "syncMarkInMutelist",
                response: [{type: "String", name: "account"}, {type: "Boolean", name: "isAdd"}]
            },
            "3_6": {service: "user", cmd: "getMutelist", response: [{type: "StrArray", name: "mutelist"}]},
            "3_8": {
                service: "user",
                cmd: "getRelations",
                response: [{
                    type: "PropertyArray",
                    name: "specialRelations",
                    entity: "specialRelation"
                }, {type: "Number", name: "timetag"}]
            },
            "3_7": {
                service: "user",
                cmd: "getUsers",
                response: [{type: "PropertyArray", name: "users", entity: "user"}]
            },
            "3_10": {service: "user", cmd: "updateMyInfo", response: [{type: "Number", name: "timetag"}]},
            "3_15": {service: "user", cmd: "updateDonnop", response: [{type: "Number", name: "timetag"}]},
            "3_115": {
                service: "user",
                cmd: "syncUpdateDonnop",
                response: [{type: "Property", name: "donnop"}, {type: "Number", name: "timetag"}]
            },
            "3_109": {
                service: "user",
                cmd: "syncMyInfo",
                response: [{type: "Property", name: "user"}, {type: "Number", name: "timetag"}]
            },
            "3_110": {service: "user", cmd: "syncUpdateMyInfo", response: [{type: "Property", name: "user"}]},
            "4_1": {service: "notify"},
            "4_2": {service: "notify"},
            "4_3": {service: "notify", cmd: "markRead"},
            "4_4": {
                service: "notify",
                cmd: "syncOfflineMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "4_5": {service: "notify", cmd: "batchMarkRead"},
            "4_6": {
                service: "notify",
                cmd: "syncOfflineSysMsgs",
                response: [{type: "PropertyArray", name: "sysMsgs", entity: "sysMsg"}]
            },
            "4_9": {
                service: "notify",
                cmd: "syncRoamingMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "4_12": {
                service: "notify",
                cmd: "syncMsgReceipts",
                response: [{type: "PropertyArray", name: "msgReceipts", entity: "msgReceipt"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_13": {
                service: "notify",
                cmd: "syncDonnop",
                response: [{type: "Property", name: "donnop"}, {type: "Number", name: "timetag"}]
            },
            "4_14": {
                service: "notify",
                cmd: "syncSessionAck",
                response: [{type: "StrLongMap", name: "p2p"}, {type: "LongLongMap", name: "team"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "4_15": {
                service: "notify",
                cmd: "syncRobots",
                response: [{type: "PropertyArray", name: "robots", entity: "robot"}]
            },
            "4_16": {
                service: "notify",
                cmd: "syncBroadcastMsgs",
                response: [{type: "PropertyArray", name: "broadcastMsgs", entity: "broadcastMsg"}]
            },
            "4_100": {
                service: "notify",
                cmd: "syncOfflineFilterMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "4_101": {
                service: "notify",
                cmd: "syncOfflineFilterSysMsgs",
                response: [{type: "PropertyArray", name: "sysMsgs", entity: "sysMsg"}]
            },
            "5_1": {service: "sync", cmd: "syncDone", response: [{type: "Number", name: "timetag"}]},
            "5_2": {service: "sync", cmd: "syncTeamMembersDone", response: [{type: "Number", name: "timetag"}]},
            "7_1": {
                service: "msg",
                cmd: "sendMsg",
                response: [{type: "Property", name: "msg"}],
                trivialErrorCodes: [7101]
            },
            "7_2": {service: "msg", cmd: "msg", response: [{type: "Property", name: "msg"}]},
            "7_3": {service: "msg", cmd: "sysMsg", response: [{type: "Property", name: "sysMsg"}]},
            "7_6": {
                service: "msg",
                cmd: "getHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "7_7": {service: "msg", cmd: "sendCustomSysMsg", trivialErrorCodes: [7101]},
            "7_8": {
                service: "msg",
                cmd: "searchHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "7_9": {service: "msg", cmd: "deleteSessions"},
            "7_10": {service: "msg", cmd: "getSessions", response: [{type: "StrArray", name: "sessions"}]},
            "7_101": {service: "msg", cmd: "syncSendMsg", response: [{type: "Property", name: "msg"}]},
            "7_11": {service: "msg", cmd: "sendMsgReceipt", response: [{type: "Property", name: "msgReceipt"}]},
            "7_12": {service: "msg", cmd: "msgReceipt", response: [{type: "Property", name: "msgReceipt"}]},
            "7_13": {service: "msg", cmd: "onDeleteMsg"},
            "7_14": {service: "msg", cmd: "onMsgDeleted", response: [{type: "Property", name: "sysMsg"}]},
            "7_15": {
                service: "msg",
                cmd: "onDeleteMsgOfflineRoaming",
                response: [{type: "PropertyArray", name: "sysMsgs", entity: "sysMsg"}, {
                    type: "Number",
                    name: "timetag"
                }, {type: "Number", name: "type"}]
            },
            "7_16": {service: "msg", cmd: "onMarkSessionAck"},
            "7_17": {service: "msg", cmd: "broadcastMsg", response: [{type: "Property", name: "broadcastMsg"}]},
            "7_116": {
                service: "msg",
                cmd: "syncMarkSessionAck",
                response: [{type: "Number", name: "scene"}, {type: "String", name: "to"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_1": {service: "team", cmd: "createTeam", response: [{type: "Property", name: "team"}]},
            "8_2": {service: "team", cmd: "sendTeamMsg", response: [{type: "Property", name: "msg"}]},
            "8_3": {service: "team", cmd: "teamMsg", response: [{type: "Property", name: "msg"}]},
            "8_4": {service: "team", cmd: "teamMsgs", response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]},
            "8_5": {service: "team", cmd: "addTeamMembers"},
            "8_6": {service: "team", cmd: "removeTeamMembers"},
            "8_7": {
                service: "team",
                cmd: "updateTeam",
                response: [{type: "Number", name: "id"}, {type: "Number", name: "time"}]
            },
            "8_8": {service: "team", cmd: "leaveTeam"},
            "8_9": {service: "team", cmd: "getTeam", response: [{type: "Property", name: "team"}]},
            "8_10": {
                service: "team",
                cmd: "getTeams",
                response: [{type: "PropertyArray", name: "teams", entity: "team"}, {type: "Number", name: "timetag"}]
            },
            "8_11": {
                service: "team",
                cmd: "getTeamMembers",
                response: [{type: "Number", name: "teamId"}, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "teamMember"
                }, {type: "Number", name: "timetag"}]
            },
            "8_12": {service: "team", cmd: "dismissTeam"},
            "8_13": {service: "team", cmd: "applyTeam", response: [{type: "Property", name: "team"}]},
            "8_14": {service: "team", cmd: "passTeamApply"},
            "8_15": {service: "team", cmd: "rejectTeamApply"},
            "8_16": {service: "team", cmd: "addTeamManagers"},
            "8_17": {service: "team", cmd: "removeTeamManagers"},
            "8_18": {service: "team", cmd: "transferTeam"},
            "8_19": {service: "team", cmd: "updateInfoInTeam"},
            "8_20": {service: "team", cmd: "updateNickInTeam"},
            "8_21": {service: "team", cmd: "acceptTeamInvite", response: [{type: "Property", name: "team"}]},
            "8_22": {service: "team", cmd: "rejectTeamInvite"},
            "8_23": {
                service: "team",
                cmd: "getTeamHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "8_24": {
                service: "team",
                cmd: "searchTeamHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "8_25": {service: "team", cmd: "updateMuteStateInTeam"},
            "8_26": {
                service: "team",
                cmd: "getMyTeamMembers",
                response: [{type: "PropertyArray", name: "teamMembers", entity: "teamMember"}]
            },
            "8_27": {
                service: "team",
                cmd: "getMutedTeamMembers",
                response: [{type: "Number", name: "teamId"}, {
                    type: "PropertyArray",
                    name: "teamMembers",
                    entity: "teamMember"
                }]
            },
            "8_28": {
                service: "team",
                cmd: "sendTeamMsgReceipt",
                response: [{type: "PropertyArray", name: "teamMsgReceipts", entity: "teamMsgReceipt"}]
            },
            "8_29": {
                service: "team",
                cmd: "getTeamMsgReads",
                response: [{type: "PropertyArray", name: "teamMsgReceipts", entity: "teamMsgReceipt"}]
            },
            "8_30": {
                service: "team",
                cmd: "getTeamMsgReadAccounts",
                response: [{type: "String", name: "idClient"}, {
                    type: "StrArray",
                    name: "readAccounts"
                }, {type: "StrArray", name: "unreadAccounts"}]
            },
            "8_31": {
                service: "team",
                cmd: "notifyTeamMsgReads",
                response: [{type: "PropertyArray", name: "teamMsgReceipts", entity: "teamMsgReceipt"}]
            },
            "8_32": {service: "team", cmd: "muteTeamAll", response: []},
            "8_126": {
                service: "team",
                cmd: "syncMyTeamMembers",
                response: [{type: "PropertyArray", name: "teamMembers", entity: "teamMember"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "8_109": {
                service: "team",
                cmd: "syncTeams",
                response: [{type: "Number", name: "timetag"}, {type: "PropertyArray", name: "teams", entity: "team"}]
            },
            "8_111": {
                service: "team",
                cmd: "syncTeamMembers",
                response: [{type: "Number", name: "teamId"}, {
                    type: "PropertyArray",
                    name: "members",
                    entity: "teamMember"
                }, {type: "Number", name: "timetag"}]
            },
            "8_101": {service: "team", cmd: "syncCreateTeam", response: [{type: "Property", name: "team"}]},
            "8_102": {service: "team", cmd: "syncSendTeamMsg", response: [{type: "Property", name: "msg"}]},
            "8_119": {service: "team", cmd: "syncUpdateTeamMember", response: [{type: "Property", name: "teamMember"}]},
            "12_1": {service: "friend", cmd: "friendRequest"},
            "12_101": {
                service: "friend",
                cmd: "syncFriendRequest",
                response: [{type: "String", name: "account"}, {type: "Number", name: "type"}, {
                    type: "String",
                    name: "ps"
                }]
            },
            "12_2": {service: "friend", cmd: "deleteFriend"},
            "12_102": {service: "friend", cmd: "syncDeleteFriend", response: [{type: "String", name: "account"}]},
            "12_3": {service: "friend", cmd: "updateFriend"},
            "12_103": {service: "friend", cmd: "syncUpdateFriend", response: [{type: "Property", name: "friend"}]},
            "12_4": {
                service: "friend",
                cmd: "getFriends",
                response: [{type: "PropertyArray", name: "friends", entity: "friend"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "12_5": {
                service: "friend",
                cmd: "syncFriends",
                response: [{type: "PropertyArray", name: "friends", entity: "friend"}, {
                    type: "Number",
                    name: "timetag"
                }]
            },
            "12_6": {
                service: "friend",
                cmd: "syncFriendUsers",
                response: [{type: "PropertyArray", name: "users", entity: "user"}, {type: "Number", name: "timetag"}]
            },
            "13_1": {service: "chatroom", cmd: "getChatroomAddress", response: [{type: "StrArray", name: "address"}]},
            "14_1": {service: "eventService", cmd: "publishEvent", response: [{type: "Property", name: "msgEvent"}]},
            "14_2": {service: "eventService", cmd: "pushEvent", response: [{type: "Property", name: "msgEvent"}]},
            "14_3": {service: "eventService", cmd: "subscribeEvent", response: [{type: "StrArray", name: "accounts"}]},
            "14_4": {
                service: "eventService",
                cmd: "unSubscribeEventsByAccounts",
                response: [{type: "StrArray", name: "accounts"}]
            },
            "14_5": {service: "eventService", cmd: "unSubscribeEventsByType"},
            "14_6": {
                service: "eventService",
                cmd: "querySubscribeEventsByAccounts",
                response: [{type: "PropertyArray", name: "msgEventSubscribes", entity: "msgEventSubscribe"}]
            },
            "14_7": {
                service: "eventService",
                cmd: "querySubscribeEventsByType",
                response: [{type: "PropertyArray", name: "msgEventSubscribes", entity: "msgEventSubscribe"}]
            },
            "14_9": {
                service: "eventService",
                cmd: "pushEvents",
                response: [{type: "PropertyArray", name: "msgEvents", entity: "msgEvent"}]
            },
            "101_1": {service: "filter", cmd: "sendFilterMsg", response: [{type: "Property", name: "msg"}]},
            "101_2": {service: "filter", cmd: "filterMsg", response: [{type: "Property", name: "msg"}]},
            "101_3": {service: "filter", cmd: "filterSysMsg", response: [{type: "Property", name: "sysMsg"}]},
            "101_7": {service: "filter", cmd: "sendFilterCustomSysMsg"}
        });
        e.exports = {idMap: i, cmdConfig: s, packetConfig: a}
    }, , function (e, t) {
        function n(e) {
            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
        }

        e.exports = n, n.prototype.duration = function () {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random(), n = Math.floor(t * this.jitter * e);
                e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
            }
            return 0 | Math.min(e, this.max)
        }, n.prototype.reset = function () {
            this.attempts = 0
        }, n.prototype.setMin = function (e) {
            this.ms = e
        }, n.prototype.setMax = function (e) {
            this.max = e
        }, n.prototype.setJitter = function (e) {
            this.jitter = e
        }
    }, function (e, t, n) {
        "use strict";
        var r = {
            set: function (e, t, n) {
                r[e] = t, n && (n.support = t)
            }
        };
        e.exports = r
    }, function (e, t, n) {
        "use strict";
        n(207).polyfill(), n(4).isBrowser = !0
    }, , , , function (e, t, n) {
        "use strict";
        var r = n(43);

        function o() {
        }

        o.typeMap = {
            text: 0,
            image: 1,
            audio: 2,
            video: 3,
            geo: 4,
            notification: 5,
            file: 6,
            tip: 10,
            robot: 11,
            custom: 100
        };
        var i = o.typeReverseMap = {
            0: "text",
            1: "image",
            2: "audio",
            3: "video",
            4: "geo",
            5: "notification",
            6: "file",
            10: "tip",
            11: "robot",
            100: "custom"
        };
        o.validTypes = Object.keys(o.typeMap), o.setFlow = function (e, t) {
            var n = t === e.from;
            n && t === e.to && (n = r.deviceId === e.fromDeviceId), e.flow = n ? "out" : "in", "robot" === e.type && e.content && e.content.msgOut && (e.flow = "in")
        }, o.getType = function (e) {
            var t = e.type;
            return i[t] || t
        }, e.exports = o
    }, , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        var r = n(0), o = r.notundef, i = r.undef;

        function s(e) {
            o(e.name) && (this.name = "" + e.name), o(e.announcement) && (this.announcement = "" + e.announcement), o(e.broadcastUrl) && (this.broadcastUrl = "" + e.broadcastUrl), o(e.custom) && (this.custom = "" + e.custom), o(e.queuelevel) && (this.queuelevel = parseInt(e.queuelevel))
        }

        s.reverse = function (e) {
            var t = r.copy(e);
            return i(t.announcement) && (t.announcement = ""), i(t.broadcastUrl) && (t.broadcastUrl = ""), i(t.custom) && (t.custom = ""), o(t.createTime) && (t.createTime = +t.createTime), o(t.updateTime) && (t.updateTime = +t.updateTime), o(t.onlineMemberNum) && (t.onlineMemberNum = +t.onlineMemberNum), o(t.mute) && (t.mute = "1" === t.mute), t
        }, e.exports = s
    }, function (e, t, n) {
        "use strict";
        var r = n(43);
        e.exports = function (e) {
            e.db && (r.db = e.db)
        }
    }, function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};

        function s(e) {
            var t = this, n = e.url || null;
            t.level = {
                debug: 0,
                log: 1,
                info: 2,
                warn: 3,
                error: 4
            }[e.level] || 0, t.logCache = [], t.logNum = 1, t.timeInterval = 5e3, window.onerror = function (e, n, r, o, i) {
                t.error.call(t, i)
            }, setInterval(function () {
                t.logCache.length > 0 && n && t.postLogs(n, t.logCache)
            }, t.timeInterval)
        }

        s.prototype.debug = function () {
            this.level > 0 || (console.debug.apply(this, arguments), this.cacheLogs.apply(this, ["[degbug]"].concat(arguments)))
        }, s.prototype.log = function () {
            this.level > 1 || (console.log.apply(this, arguments), this.cacheLogs.apply(this, ["[log]"].concat(arguments)))
        }, s.prototype.info = function () {
            this.level > 2 || (console.info.apply(this, arguments), this.cacheLogs.apply(this, ["[info]"].concat(arguments)))
        }, s.prototype.warn = function () {
            this.level > 3 || (console.warn.apply(this, arguments), this.cacheLogs.apply(this, ["[warn]"].concat(arguments)))
        }, s.prototype.error = function () {
            this.level > 4 || (console.error.apply(this, arguments), this.cacheLogs.apply(this, ["[error]"].concat(arguments)))
        }, s.prototype.cacheLogs = function (e, t) {
            for (var n = [], r = 0; r < t.length; r++) {
                var o = t[r];
                "object" === (void 0 === o ? "undefined" : (0, i.default)(o)) ? n.push(JSON.stringify(o)) : n.push(o)
            }
            var s = this.logNum++ + " " + e + " " + n.join("; ");
            this.logCache.push(s.replace("%c", ""))
        }, s.prototype.postLogs = function (e, t) {
            var n = this, r = new XMLHttpRequest;
            r.onreadystatechange = function () {
                4 === r.readyState && (200 === r.status ? (console.info("LoggerPlugin::日志上报完成"), n.logCache = [], n.timeInterval = 5e3) : n.timeInterval += 5e3)
            }, r.open("POST", e), r.setRequestHeader("Content-Type", "plain/text;charset=utf-8"), r.timeout = 360, r.send(t.join("\n"))
        }, e.exports = s
    }, function (e, t) {
        e.exports = function () {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) n.call(r, o) && (e[o] = r[o])
            }
            return e
        };
        var n = Object.prototype.hasOwnProperty
    }, function (e, t, n) {
        var r = n(122);
        e.exports = function (e, t, n) {
            if (!r(t)) throw new TypeError("iterator must be a function");
            arguments.length < 3 && (n = this);
            "[object Array]" === o.call(e) ? function (e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) i.call(e, r) && t.call(n, e[r], r, e)
            }(e, t, n) : "string" == typeof e ? function (e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) t.call(n, e.charAt(r), r, e)
            }(e, t, n) : function (e, t, n) {
                for (var r in e) i.call(e, r) && t.call(n, e[r], r, e)
            }(e, t, n)
        };
        var o = Object.prototype.toString, i = Object.prototype.hasOwnProperty
    }, function (e, t) {
        (t = e.exports = function (e) {
            return e.replace(/^\s*|\s*$/g, "")
        }).left = function (e) {
            return e.replace(/^\s*/, "")
        }, t.right = function (e) {
            return e.replace(/\s*$/, "")
        }
    }, function (e, t, n) {
        var r = n(174), o = n(173);
        e.exports = function (e) {
            if (!e) return {};
            var t = {};
            return o(r(e).split("\n"), function (e) {
                var n, o = e.indexOf(":"), i = r(e.slice(0, o)).toLowerCase(), s = r(e.slice(o + 1));
                void 0 === t[i] ? t[i] = s : (n = t[i], "[object Array]" === Object.prototype.toString.call(n) ? t[i].push(s) : t[i] = [t[i], s])
            }), t
        }
    }, function (e, t, n) {
        (function (t) {
            var n;
            n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
        }).call(this, n(30))
    }, function (e, t, n) {
        "use strict";
        var r = n(176), o = n(122), i = n(175), s = n(172);

        function a(e, t, n) {
            var r = e;
            return o(t) ? (n = t, "string" == typeof e && (r = {uri: e})) : r = s(t, {uri: e}), r.callback = n, r
        }

        function c(e, t, n) {
            return u(t = a(e, t, n))
        }

        function u(e) {
            if (void 0 === e.callback) throw new Error("callback argument missing");
            var t = !1, n = function (n, r, o) {
                t || (t = !0, e.callback(n, r, o))
            };

            function r(e) {
                return clearTimeout(l), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, n(e, g)
            }

            function o() {
                if (!a) {
                    var t;
                    clearTimeout(l), t = e.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                    var r = g, o = null;
                    return 0 !== t ? (r = {
                        body: function () {
                            var e = void 0;
                            if (e = u.response ? u.response : u.responseText || function (e) {
                                try {
                                    if ("document" === e.responseType) return e.responseXML;
                                    var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                    if ("" === e.responseType && !t) return e.responseXML
                                } catch (e) {
                                }
                                return null
                            }(u), y) try {
                                e = JSON.parse(e)
                            } catch (e) {
                            }
                            return e
                        }(), statusCode: t, method: m, headers: {}, url: p, rawRequest: u
                    }, u.getAllResponseHeaders && (r.headers = i(u.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), n(o, r, r.body)
                }
            }

            var s, a, u = e.xhr || null;
            u || (u = e.cors || e.useXDR ? new c.XDomainRequest : new c.XMLHttpRequest);
            var l, p = u.url = e.uri || e.url, m = u.method = e.method || "GET", d = e.body || e.data,
                f = u.headers = e.headers || {}, h = !!e.sync, y = !1,
                g = {body: void 0, headers: {}, statusCode: 0, method: m, url: p, rawRequest: u};
            if ("json" in e && !1 !== e.json && (y = !0, f.accept || f.Accept || (f.Accept = "application/json"), "GET" !== m && "HEAD" !== m && (f["content-type"] || f["Content-Type"] || (f["Content-Type"] = "application/json"), d = JSON.stringify(!0 === e.json ? d : e.json))), u.onreadystatechange = function () {
                4 === u.readyState && setTimeout(o, 0)
            }, u.onload = o, u.onerror = r, u.onprogress = function () {
            }, u.onabort = function () {
                a = !0
            }, u.ontimeout = r, u.open(m, p, !h, e.username, e.password), h || (u.withCredentials = !!e.withCredentials), !h && e.timeout > 0 && (l = setTimeout(function () {
                if (!a) {
                    a = !0, u.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT", r(e)
                }
            }, e.timeout)), u.setRequestHeader) for (s in f) f.hasOwnProperty(s) && u.setRequestHeader(s, f[s]); else if (e.headers && !function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType" in e && (u.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(u), u.send(d || null), u
        }

        e.exports = c, e.exports.default = c, c.XMLHttpRequest = r.XMLHttpRequest || function () {
        }, c.XDomainRequest = "withCredentials" in new c.XMLHttpRequest ? c.XMLHttpRequest : r.XDomainRequest, function (e, t) {
            for (var n = 0; n < e.length; n++) t(e[n])
        }(["get", "put", "post", "patch", "head", "delete"], function (e) {
            c["delete" === e ? "del" : e] = function (t, n, r) {
                return (n = a(t, n, r)).method = e.toUpperCase(), u(n)
            }
        })
    }, , function (e, t, n) {
        "use strict";
        e.exports = {
            imLogin: {
                3: "clientType",
                4: "os",
                6: "sdkVersion",
                8: "appLogin",
                9: "protocolVersion",
                10: "pushTokenName",
                11: "pushToken",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                32: "deviceInfo",
                112: "isReactNative",
                1000: "token"
            },
            nosToken: {1: "objectName", 2: "token", 3: "bucket", 4: "expireTime"},
            audioToText: {2: "url"},
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            robot: {
                4: "account",
                5: "nick",
                6: "avatar",
                7: "intro",
                8: "config",
                9: "valid",
                10: "createTime",
                11: "updateTime",
                12: "custid",
                13: "botid",
                14: "bindTime"
            },
            clientAntispam: {1: "version", 2: "md5", 3: "nosurl", 4: "thesaurus"},
            transToken: {1: "name", 2: "type", 3: "transType", 4: "size", 5: "extra", 6: "body"},
            transInfo: {
                1: "docId",
                2: "name",
                3: "prefix",
                4: "size",
                5: "type",
                6: "state",
                7: "transType",
                8: "transSize",
                9: "pageCount",
                10: "picInfo",
                11: "extra",
                12: "flag"
            },
            fileListParam: {1: "fromDocId", 2: "limit"},
            login: {
                1: "appKey",
                2: "account",
                3: "deviceId",
                5: "chatroomId",
                8: "appLogin",
                20: "chatroomNick",
                21: "chatroomAvatar",
                22: "chatroomCustom",
                23: "chatroomEnterCustom",
                26: "session",
                38: "isAnonymous"
            },
            chatroom: {
                1: "id",
                3: "name",
                4: "announcement",
                5: "broadcastUrl",
                12: "custom",
                14: "createTime",
                15: "updateTime",
                16: "queuelevel",
                100: "creator",
                101: "onlineMemberNum",
                102: "mute"
            },
            msg: {
                1: "idClient",
                2: "type",
                3: "attach",
                4: "custom",
                5: "resend",
                6: "userUpdateTime",
                7: "fromNick",
                8: "fromAvatar",
                9: "fromCustom",
                10: "yidunEnable",
                11: "antiSpamContent",
                12: "skipHistory",
                13: "body",
                14: "antiSpamBusinessId",
                15: "clientAntiSpam",
                16: "antiSpamUsingYidun",
                20: "time",
                21: "from",
                22: "chatroomId",
                23: "fromClientType",
                25: "highPriority"
            },
            chatroomMember: {
                1: "chatroomId",
                2: "account",
                3: "type",
                4: "level",
                5: "nick",
                6: "avatar",
                7: "custom",
                8: "online",
                9: "guest",
                10: "enterTime",
                12: "blacked",
                13: "gaged",
                14: "valid",
                15: "updateTime",
                16: "tempMuted",
                17: "tempMuteDuration"
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            imLogin: {
                clientType: 3,
                os: 4,
                sdkVersion: 6,
                appLogin: 8,
                protocolVersion: 9,
                pushTokenName: 10,
                pushToken: 11,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                deviceInfo: 32,
                isReactNative: 112,
                token: 1e3
            },
            nosToken: {objectName: 1, token: 2, bucket: 3, expireTime: 4},
            audioToText: {url: 2},
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            robot: {
                account: 4,
                nick: 5,
                avatar: 6,
                intro: 7,
                config: 8,
                valid: 9,
                createTime: 10,
                updateTime: 11,
                custid: 12,
                botid: 13,
                bindTime: 14
            },
            clientAntispam: {version: 1, md5: 2, nosurl: 3, thesaurus: 4},
            transToken: {name: 1, type: 2, transType: 3, size: 4, extra: 5, body: 6},
            transInfo: {
                docId: 1,
                name: 2,
                prefix: 3,
                size: 4,
                type: 5,
                state: 6,
                transType: 7,
                transSize: 8,
                pageCount: 9,
                picInfo: 10,
                extra: 11,
                flag: 12
            },
            fileListParam: {fromDocId: 1, limit: 2},
            login: {
                appKey: 1,
                account: 2,
                deviceId: 3,
                chatroomId: 5,
                appLogin: 8,
                chatroomNick: 20,
                chatroomAvatar: 21,
                chatroomCustom: 22,
                chatroomEnterCustom: 23,
                session: 26,
                isAnonymous: 38
            },
            chatroom: {
                id: 1,
                name: 3,
                announcement: 4,
                broadcastUrl: 5,
                custom: 12,
                createTime: 14,
                updateTime: 15,
                queuelevel: 16,
                creator: 100,
                onlineMemberNum: 101,
                mute: 102
            },
            msg: {
                idClient: 1,
                type: 2,
                attach: 3,
                custom: 4,
                resend: 5,
                userUpdateTime: 6,
                fromNick: 7,
                fromAvatar: 8,
                fromCustom: 9,
                yidunEnable: 10,
                antiSpamContent: 11,
                skipHistory: 12,
                body: 13,
                antiSpamBusinessId: 14,
                clientAntiSpam: 15,
                antiSpamUsingYidun: 16,
                time: 20,
                from: 21,
                chatroomId: 22,
                fromClientType: 23,
                highPriority: 25
            },
            chatroomMember: {
                chatroomId: 1,
                account: 2,
                type: 3,
                level: 4,
                nick: 5,
                avatar: 6,
                custom: 7,
                online: 8,
                guest: 9,
                enterTime: 10,
                blacked: 12,
                gaged: 13,
                valid: 14,
                updateTime: 15,
                tempMuted: 16,
                tempMuteDuration: 17
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = n(123), i = r.merge({}, o.idMap, {
            chatroom: {
                id: 13,
                login: 2,
                kicked: 3,
                logout: 4,
                sendMsg: 6,
                msg: 7,
                getChatroomMembers: 8,
                getHistoryMsgs: 9,
                markChatroomMember: 11,
                closeChatroom: 12,
                getChatroom: 13,
                updateChatroom: 14,
                updateMyChatroomMemberInfo: 15,
                getChatroomMembersInfo: 16,
                kickChatroomMember: 17,
                updateChatroomMemberTempMute: 19,
                queueOffer: 20,
                queuePoll: 21,
                queueList: 22,
                peak: 23,
                queueDrop: 24,
                queueInit: 25
            }, user: {id: 3, syncRobot: 16}
        }), s = r.merge({}, o.cmdConfig, {
            login: {
                sid: i.chatroom.id,
                cid: i.chatroom.login,
                params: [{type: "byte", name: "type"}, {type: "Property", name: "login"}, {
                    type: "Property",
                    name: "imLogin"
                }]
            },
            logout: {sid: i.chatroom.id, cid: i.chatroom.logout},
            sendMsg: {sid: i.chatroom.id, cid: i.chatroom.sendMsg, params: [{type: "Property", name: "msg"}]},
            getChatroomMembers: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroomMembers,
                params: [{type: "byte", name: "type"}, {type: "long", name: "time"}, {type: "int", name: "limit"}]
            },
            getHistoryMsgs: {
                sid: i.chatroom.id,
                cid: i.chatroom.getHistoryMsgs,
                params: [{type: "long", name: "timetag"}, {type: "int", name: "limit"}, {
                    type: "bool",
                    name: "reverse"
                }, {type: "LongArray", name: "msgTypes"}]
            },
            markChatroomMember: {
                sid: i.chatroom.id,
                cid: i.chatroom.markChatroomMember,
                params: [{type: "string", name: "account"}, {type: "int", name: "type"}, {
                    type: "bool",
                    name: "isAdd"
                }, {type: "int", name: "level"}, {type: "string", name: "custom"}]
            },
            closeChatroom: {
                sid: i.chatroom.id,
                cid: i.chatroom.closeChatroom,
                params: [{type: "string", name: "custom"}]
            },
            getChatroom: {sid: i.chatroom.id, cid: i.chatroom.getChatroom},
            updateChatroom: {
                sid: i.chatroom.id,
                cid: i.chatroom.updateChatroom,
                params: [{type: "Property", name: "chatroom"}, {type: "bool", name: "needNotify"}, {
                    type: "String",
                    name: "custom"
                }]
            },
            updateMyChatroomMemberInfo: {
                sid: i.chatroom.id,
                cid: i.chatroom.updateMyChatroomMemberInfo,
                params: [{type: "Property", name: "chatroomMember"}, {
                    type: "bool",
                    name: "needNotify"
                }, {type: "String", name: "custom"}, {type: "bool", name: "needSave"}]
            },
            getChatroomMembersInfo: {
                sid: i.chatroom.id,
                cid: i.chatroom.getChatroomMembersInfo,
                params: [{type: "StrArray", name: "accounts"}]
            },
            kickChatroomMember: {
                sid: i.chatroom.id,
                cid: i.chatroom.kickChatroomMember,
                params: [{type: "string", name: "account"}, {type: "string", name: "custom"}]
            },
            updateChatroomMemberTempMute: {
                sid: i.chatroom.id,
                cid: i.chatroom.updateChatroomMemberTempMute,
                params: [{type: "String", name: "account"}, {type: "long", name: "duration"}, {
                    type: "bool",
                    name: "needNotify"
                }, {type: "String", name: "custom"}]
            },
            queueOffer: {
                sid: i.chatroom.id,
                cid: i.chatroom.queueOffer,
                params: [{type: "string", name: "elementKey"}, {type: "string", name: "elementValue"}, {
                    type: "bool",
                    name: "transient"
                }]
            },
            queuePoll: {sid: i.chatroom.id, cid: i.chatroom.queuePoll, params: [{type: "string", name: "elementKey"}]},
            queueList: {sid: i.chatroom.id, cid: i.chatroom.queueList},
            peak: {sid: i.chatroom.id, cid: i.chatroom.peak},
            queueDrop: {sid: i.chatroom.id, cid: i.chatroom.queueDrop},
            queueInit: {sid: i.chatroom.id, cid: i.chatroom.queueInit, params: [{type: "int", name: "limit"}]},
            syncRobot: {sid: i.user.id, cid: i.user.syncRobot, params: [{type: "long", name: "timetag"}]}
        }), a = r.merge({}, o.packetConfig, {
            "4_10": {service: "notify"},
            "4_11": {service: "notify"},
            "3_16": {
                service: "chatroom",
                cmd: "syncRobot",
                response: [{type: "PropertyArray", name: "robots", entity: "robot"}]
            },
            "13_2": {
                service: "chatroom",
                cmd: "login",
                response: [{type: "Property", name: "chatroom"}, {type: "Property", name: "chatroomMember"}]
            },
            "13_3": {
                service: "chatroom",
                cmd: "kicked",
                response: [{type: "Number", name: "reason"}, {type: "String", name: "custom"}]
            },
            "13_4": {service: "chatroom", cmd: "logout"},
            "13_6": {service: "chatroom", cmd: "sendMsg", response: [{type: "Property", name: "msg"}]},
            "13_7": {service: "chatroom", cmd: "msg", response: [{type: "Property", name: "msg"}]},
            "13_8": {
                service: "chatroom",
                cmd: "getChatroomMembers",
                response: [{type: "PropertyArray", name: "members", entity: "chatroomMember"}]
            },
            "13_9": {
                service: "chatroom",
                cmd: "getHistoryMsgs",
                response: [{type: "PropertyArray", name: "msgs", entity: "msg"}]
            },
            "13_11": {
                service: "chatroom",
                cmd: "markChatroomMember",
                response: [{type: "Property", name: "chatroomMember"}]
            },
            "13_12": {service: "chatroom", cmd: "closeChatroom"},
            "13_13": {service: "chatroom", cmd: "getChatroom", response: [{type: "Property", name: "chatroom"}]},
            "13_14": {service: "chatroom", cmd: "updateChatroom"},
            "13_15": {service: "chatroom", cmd: "updateMyChatroomMemberInfo"},
            "13_16": {
                service: "chatroom",
                cmd: "getChatroomMembersInfo",
                response: [{type: "PropertyArray", name: "members", entity: "chatroomMember"}]
            },
            "13_17": {service: "chatroom", cmd: "kickChatroomMember"},
            "13_19": {service: "chatroom", cmd: "updateChatroomMemberTempMute"},
            "13_20": {service: "chatroom", cmd: "queueOffer"},
            "13_21": {
                service: "chatroom",
                cmd: "queuePoll",
                response: [{type: "String", name: "elementKey"}, {type: "String", name: "elementValue"}]
            },
            "13_22": {service: "chatroom", cmd: "queueList", response: [{type: "KVArray", name: "queueList"}]},
            "13_23": {
                service: "chatroom",
                cmd: "peak",
                response: [{type: "String", name: "elementKey"}, {type: "String", name: "elementValue"}]
            },
            "13_24": {service: "chatroom", cmd: "queueDrop"},
            "13_25": {service: "chatroom", cmd: "queueInit"}
        });
        e.exports = {idMap: i, cmdConfig: s, packetConfig: a}
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            nosToken: {1: "objectName", 2: "token", 3: "bucket", 4: "expireTime"},
            audioToText: {2: "url"},
            imageOp: {
                0: "type",
                1: "stripmeta",
                2: "typeType",
                3: "blurRadius",
                4: "blurSigma",
                5: "qualityQuality",
                6: "cropX",
                7: "cropY",
                8: "cropWidth",
                9: "cropHeight",
                10: "rotateAngle",
                11: "pixelPixel",
                12: "thumbnailMode",
                13: "thumbnailWidth",
                14: "thumbnailHeight",
                15: "thumbnailAxisX",
                16: "thumbnailAxisY",
                17: "thumbnailCenterX",
                18: "thumbnailCenterY",
                19: "thumbnailEnlarge",
                20: "thumbnailToStatic",
                21: "watermarkType",
                22: "watermarkGravity",
                23: "watermarkDissolve",
                24: "watermarkDx",
                25: "watermarkDy",
                26: "watermarkImage",
                27: "watermarkText",
                28: "watermarkFont",
                29: "watermarkFontSize",
                30: "watermarkFontColor",
                31: "interlace"
            },
            robot: {
                4: "account",
                5: "nick",
                6: "avatar",
                7: "intro",
                8: "config",
                9: "valid",
                10: "createTime",
                11: "updateTime",
                12: "custid",
                13: "botid",
                14: "bindTime"
            },
            clientAntispam: {1: "version", 2: "md5", 3: "nosurl", 4: "thesaurus"},
            transToken: {1: "name", 2: "type", 3: "transType", 4: "size", 5: "extra", 6: "body"},
            transInfo: {
                1: "docId",
                2: "name",
                3: "prefix",
                4: "size",
                5: "type",
                6: "state",
                7: "transType",
                8: "transSize",
                9: "pageCount",
                10: "picInfo",
                11: "extra",
                12: "flag"
            },
            fileListParam: {1: "fromDocId", 2: "limit"},
            login: {
                3: "clientType",
                4: "os",
                6: "sdkVersion",
                8: "appLogin",
                9: "protocolVersion",
                10: "pushTokenName",
                11: "pushToken",
                13: "deviceId",
                18: "appKey",
                19: "account",
                24: "browser",
                26: "session",
                32: "deviceInfo",
                112: "isReactNative",
                1000: "token"
            },
            loginRes: {17: "lastLoginDeviceId", 102: "connectionId", 103: "ip", 104: "port", 106: "country"},
            loginPort: {
                3: "type",
                4: "os",
                5: "mac",
                13: "deviceId",
                19: "account",
                32: "deviceInfo",
                102: "connectionId",
                103: "ip",
                109: "time"
            },
            aosPushInfo: {110: "pushType", 111: "hasTokenPreviously"},
            sync: {
                1: "myInfo",
                2: "offlineMsgs",
                3: "teams",
                6: "netcallMsgs",
                7: "roamingMsgs",
                9: "relations",
                11: "friends",
                12: "sessions",
                13: "friendUsers",
                14: "msgReceipts",
                15: "myTeamMembers",
                16: "donnop",
                17: "deleteMsg",
                18: "sessionAck",
                19: "robots",
                20: "broadcastMsgs",
                100: "filterMsgs"
            },
            donnop: {1: "open"},
            team: {
                1: "teamId",
                3: "name",
                4: "type",
                5: "owner",
                6: "level",
                7: "selfCustom",
                8: "valid",
                9: "memberNum",
                10: "memberUpdateTime",
                11: "createTime",
                12: "updateTime",
                13: "validToCurrentUser",
                14: "intro",
                15: "announcement",
                16: "joinMode",
                17: "bits",
                18: "custom",
                19: "serverCustom",
                20: "avatar",
                21: "beInviteMode",
                22: "inviteMode",
                23: "updateTeamMode",
                24: "updateCustomMode",
                100: "mute",
                101: "muteType"
            },
            teamMember: {
                1: "teamId",
                3: "account",
                4: "type",
                5: "nickInTeam",
                7: "bits",
                8: "active",
                9: "valid",
                10: "joinTime",
                11: "updateTime",
                12: "custom",
                13: "mute"
            },
            msg: {
                0: "scene",
                1: "to",
                2: "from",
                4: "fromClientType",
                5: "fromDeviceId",
                6: "fromNick",
                7: "time",
                8: "type",
                9: "body",
                10: "attach",
                11: "idClient",
                12: "idServer",
                13: "resend",
                14: "userUpdateTime",
                15: "custom",
                16: "pushPayload",
                17: "pushContent",
                18: "apnsAccounts",
                19: "apnsContent",
                20: "apnsForcePush",
                21: "yidunEnable",
                22: "antiSpamContent",
                23: "antiSpamBusinessId",
                24: "clientAntiSpam",
                25: "antiSpamUsingYidun",
                26: "needMsgReceipt",
                100: "isHistoryable",
                101: "isRoamingable",
                102: "isSyncable",
                104: "isMuted",
                105: "cc",
                107: "isPushable",
                108: "isOfflinable",
                109: "isUnreadable",
                110: "needPushNick",
                111: "isReplyMsg",
                112: "tempTeamMemberCount"
            },
            msgReceipt: {1: "to", 2: "from", 7: "time", 11: "idClient"},
            teamMsgReceipt: {0: "teamId", 1: "idServer", 100: "read", 101: "unread", 102: "idClient", 103: "account"},
            sysMsg: {
                0: "time",
                1: "type",
                2: "to",
                3: "from",
                4: "ps",
                5: "attach",
                6: "idServer",
                7: "sendToOnlineUsersOnly",
                8: "apnsText",
                9: "pushPayload",
                10: "deletedIdClient",
                11: "deletedIdServer",
                12: "yidunEnable",
                13: "antiSpamContent",
                14: "deletedMsgTime",
                15: "deletedMsgFromNick",
                16: "opeAccount",
                105: "cc",
                107: "isPushable",
                109: "isUnreadable",
                110: "needPushNick"
            },
            broadcastMsg: {1: "broadcastId", 2: "fromAccid", 3: "fromUid", 4: "timestamp", 5: "body"},
            friend: {
                4: "account",
                5: "flag",
                6: "beflag",
                7: "source",
                8: "alias",
                9: "bits",
                10: "custom",
                11: "createTime",
                12: "updateTime",
                13: "serverex"
            },
            user: {
                1: "account",
                3: "nick",
                4: "avatar",
                5: "sign",
                6: "gender",
                7: "email",
                8: "birth",
                9: "tel",
                10: "custom",
                12: "createTime",
                13: "updateTime"
            },
            specialRelation: {0: "account", 1: "isMuted", 2: "isBlacked", 3: "createTime", 4: "updateTime"},
            msgType: {
                0: "text",
                1: "picture",
                2: "audio",
                3: "video",
                4: "location",
                5: "notification",
                6: "file",
                7: "netcall_audio",
                8: "netcall_vedio",
                9: "datatunnel_new",
                10: "tips",
                11: "robot",
                100: "custom"
            },
            msgEvent: {
                1: "type",
                2: "value",
                3: "idClient",
                4: "custom",
                5: "validTime",
                6: "broadcastType",
                7: "sync",
                8: "validTimeType",
                9: "durable",
                10: "time",
                11: "idServer",
                12: "clientType",
                13: "serverConfig",
                14: "serverCustom",
                101: "appid",
                103: "account",
                104: "enableMultiClient",
                106: "consid"
            },
            msgEventSubscribe: {1: "type", 2: "subscribeTime", 3: "sync", 102: "to", 104: "from", 105: "time"}
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            nosToken: {objectName: 1, token: 2, bucket: 3, expireTime: 4},
            audioToText: {url: 2},
            imageOp: {
                type: 0,
                stripmeta: 1,
                typeType: 2,
                blurRadius: 3,
                blurSigma: 4,
                qualityQuality: 5,
                cropX: 6,
                cropY: 7,
                cropWidth: 8,
                cropHeight: 9,
                rotateAngle: 10,
                pixelPixel: 11,
                thumbnailMode: 12,
                thumbnailWidth: 13,
                thumbnailHeight: 14,
                thumbnailAxisX: 15,
                thumbnailAxisY: 16,
                thumbnailCenterX: 17,
                thumbnailCenterY: 18,
                thumbnailEnlarge: 19,
                thumbnailToStatic: 20,
                watermarkType: 21,
                watermarkGravity: 22,
                watermarkDissolve: 23,
                watermarkDx: 24,
                watermarkDy: 25,
                watermarkImage: 26,
                watermarkText: 27,
                watermarkFont: 28,
                watermarkFontSize: 29,
                watermarkFontColor: 30,
                interlace: 31
            },
            robot: {
                account: 4,
                nick: 5,
                avatar: 6,
                intro: 7,
                config: 8,
                valid: 9,
                createTime: 10,
                updateTime: 11,
                custid: 12,
                botid: 13,
                bindTime: 14
            },
            clientAntispam: {version: 1, md5: 2, nosurl: 3, thesaurus: 4},
            transToken: {name: 1, type: 2, transType: 3, size: 4, extra: 5, body: 6},
            transInfo: {
                docId: 1,
                name: 2,
                prefix: 3,
                size: 4,
                type: 5,
                state: 6,
                transType: 7,
                transSize: 8,
                pageCount: 9,
                picInfo: 10,
                extra: 11,
                flag: 12
            },
            fileListParam: {fromDocId: 1, limit: 2},
            login: {
                clientType: 3,
                os: 4,
                sdkVersion: 6,
                appLogin: 8,
                protocolVersion: 9,
                pushTokenName: 10,
                pushToken: 11,
                deviceId: 13,
                appKey: 18,
                account: 19,
                browser: 24,
                session: 26,
                deviceInfo: 32,
                isReactNative: 112,
                token: 1e3
            },
            loginRes: {lastLoginDeviceId: 17, connectionId: 102, ip: 103, port: 104, country: 106},
            loginPort: {
                type: 3,
                os: 4,
                mac: 5,
                deviceId: 13,
                account: 19,
                deviceInfo: 32,
                connectionId: 102,
                ip: 103,
                time: 109
            },
            aosPushInfo: {pushType: 110, hasTokenPreviously: 111},
            sync: {
                myInfo: 1,
                offlineMsgs: 2,
                teams: 3,
                netcallMsgs: 6,
                roamingMsgs: 7,
                relations: 9,
                friends: 11,
                sessions: 12,
                friendUsers: 13,
                msgReceipts: 14,
                myTeamMembers: 15,
                donnop: 16,
                deleteMsg: 17,
                sessionAck: 18,
                robots: 19,
                broadcastMsgs: 20,
                filterMsgs: 100
            },
            donnop: {open: 1},
            team: {
                teamId: 1,
                name: 3,
                type: 4,
                owner: 5,
                level: 6,
                selfCustom: 7,
                valid: 8,
                memberNum: 9,
                memberUpdateTime: 10,
                createTime: 11,
                updateTime: 12,
                validToCurrentUser: 13,
                intro: 14,
                announcement: 15,
                joinMode: 16,
                bits: 17,
                custom: 18,
                serverCustom: 19,
                avatar: 20,
                beInviteMode: 21,
                inviteMode: 22,
                updateTeamMode: 23,
                updateCustomMode: 24,
                mute: 100,
                muteType: 101
            },
            teamMember: {
                teamId: 1,
                account: 3,
                type: 4,
                nickInTeam: 5,
                bits: 7,
                active: 8,
                valid: 9,
                joinTime: 10,
                updateTime: 11,
                custom: 12,
                mute: 13
            },
            msg: {
                scene: 0,
                to: 1,
                from: 2,
                fromClientType: 4,
                fromDeviceId: 5,
                fromNick: 6,
                time: 7,
                type: 8,
                body: 9,
                attach: 10,
                idClient: 11,
                idServer: 12,
                resend: 13,
                userUpdateTime: 14,
                custom: 15,
                pushPayload: 16,
                pushContent: 17,
                apnsAccounts: 18,
                apnsContent: 19,
                apnsForcePush: 20,
                yidunEnable: 21,
                antiSpamContent: 22,
                antiSpamBusinessId: 23,
                clientAntiSpam: 24,
                antiSpamUsingYidun: 25,
                needMsgReceipt: 26,
                isHistoryable: 100,
                isRoamingable: 101,
                isSyncable: 102,
                isMuted: 104,
                cc: 105,
                isPushable: 107,
                isOfflinable: 108,
                isUnreadable: 109,
                needPushNick: 110,
                isReplyMsg: 111,
                tempTeamMemberCount: 112
            },
            msgReceipt: {to: 1, from: 2, time: 7, idClient: 11},
            teamMsgReceipt: {teamId: 0, idServer: 1, read: 100, unread: 101, idClient: 102, account: 103},
            sysMsg: {
                time: 0,
                type: 1,
                to: 2,
                from: 3,
                ps: 4,
                attach: 5,
                idServer: 6,
                sendToOnlineUsersOnly: 7,
                apnsText: 8,
                pushPayload: 9,
                deletedIdClient: 10,
                deletedIdServer: 11,
                yidunEnable: 12,
                antiSpamContent: 13,
                deletedMsgTime: 14,
                deletedMsgFromNick: 15,
                opeAccount: 16,
                cc: 105,
                isPushable: 107,
                isUnreadable: 109,
                needPushNick: 110
            },
            broadcastMsg: {broadcastId: 1, fromAccid: 2, fromUid: 3, timestamp: 4, body: 5},
            friend: {
                account: 4,
                flag: 5,
                beflag: 6,
                source: 7,
                alias: 8,
                bits: 9,
                custom: 10,
                createTime: 11,
                updateTime: 12,
                serverex: 13
            },
            user: {
                account: 1,
                nick: 3,
                avatar: 4,
                sign: 5,
                gender: 6,
                email: 7,
                birth: 8,
                tel: 9,
                custom: 10,
                createTime: 12,
                updateTime: 13
            },
            specialRelation: {account: 0, isMuted: 1, isBlacked: 2, createTime: 3, updateTime: 4},
            msgType: {
                text: 0,
                picture: 1,
                audio: 2,
                video: 3,
                location: 4,
                notification: 5,
                file: 6,
                netcall_audio: 7,
                netcall_vedio: 8,
                datatunnel_new: 9,
                tips: 10,
                robot: 11,
                custom: 100
            },
            msgEvent: {
                type: 1,
                value: 2,
                idClient: 3,
                custom: 4,
                validTime: 5,
                broadcastType: 6,
                sync: 7,
                validTimeType: 8,
                durable: 9,
                time: 10,
                idServer: 11,
                clientType: 12,
                serverConfig: 13,
                serverCustom: 14,
                appid: 101,
                account: 103,
                enableMultiClient: 104,
                consid: 106
            },
            msgEventSubscribe: {type: 1, subscribeTime: 2, sync: 3, to: 102, from: 104, time: 105}
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(62).fn, o = n(125);
        r.processMisc = function (e) {
            switch (e.cmd) {
                case"getSimpleNosToken":
                    e.error || (e.obj = e.content.nosTokens[0]);
                    break;
                case"getNosToken":
                    e.error || (e.obj = e.content.nosToken);
                    break;
                case"notifyUploadLog":
                    e.error || this.emitAPI({type: "notifyUploadLog"});
                    break;
                case"audioToText":
                    e.error || (e.obj.text = e.content.text);
                    break;
                case"processImage":
                    e.obj.imageOps = o.reverseImageOps(e.obj.imageOps), e.error || (e.obj = {url: e.content.url});
                    break;
                case"getNosTokenTrans":
                    e.error || (e.obj = {nosToken: e.content.nosToken, docId: e.content.docId});
                    break;
                case"notifyTransLog":
                    e.error || this.emitAPI({type: "notifyTransLog", obj: e.content.transInfo});
                    break;
                case"fetchFile":
                case"fetchFileList":
                case"removeFile":
                    e.error || (e.obj = e.content)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(62).fn, o = n(4);
        r.processLink = function (e) {
            e.cmd
        }, r.startHeartbeat = function () {
            var e = this;
            e.stopHeartbeat(), e.heartbeatTimer = setTimeout(function () {
                e.sendCmd("heartbeat", null, e.onHeartbeat.bind(e))
            }, o.heartbeatInterval)
        }, r.stopHeartbeat = function () {
            this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null)
        }, r.onHeartbeat = function (e, t) {
            e ? (e.callFunc = "link::onHeartbeat", this.api.reportLogs({event: "ping_timeout"}), this.onCustomError("heartbeat error", "HEARTBEAT_ERROR", e)) : this.startHeartbeat()
        }, r.heartbeat = function () {
        }
    }, function (e, t, n) {
        "use strict";
        var r, o = n(67), i = (r = o) && r.__esModule ? r : {default: r};
        var s, a = n(62).fn, c = n(23), u = n(15), l = n(105), p = n(43), m = n(4), d = n(0), f = d.notundef;
        a.login = function () {
            var e = this;
            Promise.resolve().then(function () {
                return e.assembleLogin()
            }).then(function (t) {
                e.sendCmd("login", (0, i.default)({}, t), e.onLogin.bind(e))
            }), e.autoconnect = !1
        }, a.genSessionKey = (s = {}, function () {
            var e = this.name;
            return s[e] = s[e] || d.guid()
        }), a.assembleIMLogin = function () {
            var e = this.options, t = e.account, n = this.autoconnect ? 0 : 1;
            return this.sdkSession = this.genSessionKey(), {
                appLogin: n,
                appKey: e.appKey,
                account: t,
                token: e.token,
                sdkVersion: m.info.sdkVersion,
                protocolVersion: m.info.protocolVersion,
                os: u.os.toString(),
                browser: u.name + " " + u.version,
                clientType: m.CLIENTTYPE || 16,
                session: this.sdkSession,
                deviceId: p.deviceId,
                isReactNative: m.isRN ? 1 : 0
            }
        }, a.onLogin = function (e, t) {
            this.loginResult = t, e ? this.onAuthError(e, "link::onLogin") : (this.startHeartbeat(), this.afterLogin(t))
        }, a.afterLogin = d.emptyFunc, a.notifyLogin = function () {
            var e = this.loginResult;
            this.logger.info("link::notifyLogin: on connect", e), this.options.onconnect(e)
        }, a.logout = function () {
            var e = "done disconnect";
            if (this.doLogout) return this.doLogout = !1, e = "done logout", void this.onAuthError(new c(e, "logout"), "link::logout");
            if (this.isConnected()) {
                var t = new c(e, "logout");
                this.onAuthError(t, "link::logout")
            }
        }, a.onKicked = function (e) {
            var t = e.content, n = t.from, r = t.reason, o = t.custom,
                i = {reason: this.kickedReasons[r] || "unknown", message: this.kickedMessages[r] || "未知原因"};
            if (f(n) && (i.from = l.reverseType(n)), f(o) && (i.custom = o), this.shouldNotifyKicked(i)) {
                var s = new c("被踢了", "kicked");
                d.merge(s, i), this.onAuthError(s, "link::onKicked")
            } else this.logger.warn("link::onKicked: silentlyKick"), this.shouldReconnect = !0, this.hasNotifyDisconnected = !0, this.disconnectSocket()
        }, a.shouldNotifyKicked = function (e) {
            return "silentlyKick" !== e.reason
        }, a.onAuthError = function (e, t) {
            this.shouldReconnect = !1, (e = e || c.newConnectionError({callFunc: t})).callFunc = e.callFunc || t || null, this.markAllCallbackInvalid(e), this.notifyDisconnect(e)
        }
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(62).fn, o = n(23), i = n(149), s = n(124), a = n(4), c = n(0);
        r.initConnect = function () {
            this.socket = null, this.retryCount = 0, this.connecting = !1, this.shouldReconnect = !0, this.hasNotifyDisconnected = !1, this.doLogout = !1
        }, r.resetConnect = function () {
            var e = this.options;
            c.notundef(e.needReconnect) ? (c.verifyParamType("needReconnect", e.needReconnect, "boolean", "link::resetConnect"), this.needReconnect = e.needReconnect) : this.needReconnect = !0, this.logger.log("link::resetConnect: needReconnect " + this.needReconnect), c.notundef(e.reconnectionAttempts) && c.verifyParamType("reconnectionAttempts", e.reconnectionAttempts, "number", "link::resetConnect"), this.reconnectionAttempts = "number" == typeof e.reconnectionAttempts ? e.reconnectionAttempts : 1 / 0, this.backoff = new i({
                min: a.reconnectionDelay,
                max: a.reconnectionDelayMax,
                jitter: a.reconnectionJitter
            })
        }, r.connect = function () {
            if (this.isConnected()) this.logger.warn("link::connect: already connected"); else if (this.connecting) this.logger.warn("link::connect: already connecting"); else if (this.connecting = !0, this.hasNotifyDisconnected = !1, this.socket) this.logger.info("link::connect: try connecting..."), this.socket.socket.connect(); else {
                var e = this.getNextSocketUrl();
                e ? this.connectToUrl(e) : this.refreshSocketUrl()
            }
        }, r.getNextSocketUrl = function () {
            return this.socketUrls.shift()
        }, r.isConnected = function () {
            return !!this.socket && !!this.socket.socket && this.socket.socket.connected
        }, r.connectToUrl = function (e) {
            var t = this;
            if (t.logger.log("link::connectToUrl: " + e), "undefined" == typeof window) {
                var n = c.getGlobal(), r = e.split(":");
                n.location || (n.location = {
                    protocol: r[0],
                    hostname: r[1].slice(2),
                    port: r[2]
                }), this.options.transports = ["websocket"]
            }
            var o = this.options.transports || ["websocket", "xhr-polling"];
            t.socket = s.connect(e, {
                transports: o,
                reconnect: !1,
                "force new connection": !0,
                "connect timeout": a.connectTimeout
            }), t.logger.info("link::connectToUrl: socket url: " + e + ", transports: " + JSON.stringify(o)), t.socket.on("connect", t.onConnect.bind(t)), t.socket.on("handshake_failed", t.onHandshakeFailed.bind(t)), t.socket.on("connect_failed", t.onConnectFailed.bind(t)), t.socket.on("error", t.onError.bind(t)), t.socket.on("message", t.onMessage.bind(t)), t.socket.on("disconnect", function (n) {
                t.logger.warn("link::connectToUrl: socket url: " + e + ", disconnected"), t.doLogout ? t.logout() : t.onDisconnect(!0, "link::socketDisconnect")
            })
        }, r.disconnect = function (e) {
            var t = this;

            function n(n) {
                t.logger.info("link::disconnect: socket finally closed, ", n), clearTimeout(t.disconnectCallbackTimer), e(n)
            }

            e instanceof Function || (e = function () {
            }), clearTimeout(t.connectTimer), t.disconnectCallbackTimer = setTimeout(function () {
                e.call(t, "mark disconnected due to timeout")
            }, 1e4), t.socket && t.socket.socket && t.socket.socket.transport ? t.socket.socket.transport.onDisconnectDone = function (e) {
                n(e)
            } : n(null), t.isConnected() ? (t.logger.log("link::disconnect: start disconnecting"), t.logout()) : t.connecting ? (t.logger.log("link::disconnect: abort connecting"), t.disconnectSocket()) : (t.logger.log("link::disconnect: start otherwise"), t.connecting = !1, t.shouldReconnect = !1, t.needReconnect = !1, t.options.ondisconnect({
                callFunc: "link::disconnect",
                message: "manually disconnect status"
            }))
        }, r.onConnect = function () {
            this.backoff && this.backoff.reset(), this.reconnectStatus = this.retryCount > 0 ? 1 : 0, this.retryCount = 0, this.connecting = !1, this.shouldReconnect = !0, this.hasNotifyDisconnected = !1, this.logger.log("link::onConnect: socket onconnected, start login"), this.login(), this.api.reportLogs({event: "ws_connected"})
        }, r.onHandshakeFailed = function () {
            this.api.reportLogs({event: "ws_handshake_failed"}), this.onDisconnect(!1, "link::onHandshakeFailed")
        }, r.onConnectFailed = function () {
            this.api.reportLogs({event: "ws_connect_failed"}), this.onDisconnect(!1, "link::onConnectFailed")
        }, r.onError = function () {
            var e = arguments[0];
            e && (this.api.reportLogs({event: "connect_timeout"}), this.onMiscError("连接错误", new o(e, "LINK_ERROR", {callFunc: "link::onError"}))), this.connecting = !1
        }, r.onDisconnect = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.connected = e, this.connecting = !1, this.markAllCallbackInvalid(o.newNetworkError({callFunc: t})), this.stopHeartbeat(), this.reconnect()
        }, r.willReconnect = function () {
            return this.shouldReconnect && this.needReconnect && this.retryCount < this.reconnectionAttempts
        }, r.reconnect = function () {
            var e = this;
            if (e.willReconnect()) if (e.socket && e.socket.socket && e.socket.socket.transport && e.socket.socket.transport.websocket) {
                e.logger.info("link::reconnect: on socket closed");
                try {
                    e.socket.socket.transport.websocket.close()
                } catch (t) {
                    e.logger.warn("link::reconnect: force disconnect error:", t)
                }
                e.socket.socket.transport.onConnectionOver = function () {
                    e.doReconnect()
                }
            } else e.logger.info("link::reconnect: on socket timeout"), e.doReconnect(); else e.notifyDisconnect()
        }, r.doReconnect = function () {
            var e = this;
            e.socket = null, e.connected && (e.autoconnect = !0), e.retryCount++, e.appLogin = 1;
            var t = e.backoff.duration();
            e.logger.info("link::reconnect: will retry after " + t + "ms, retryCount " + e.retryCount), e.options.onwillreconnect({
                retryCount: e.retryCount,
                duration: t
            }), e.connectTimer = setTimeout(function () {
                clearTimeout(e.connectTimer), e.connect()
            }, t)
        }, r.notifyConnectError = function (e) {
            var t = o.newConnectError({message: e, callFunc: "link::notifyConnectError"});
            this.logger.error("link::notifyConnectError:", t), this.options.onerror(t)
        }, r.notifyDisconnect = function (e) {
            var t = this;
            t.hasNotifyDisconnected || (t.hasNotifyDisconnected = !0, t.disconnectSocket(), (e = e || new o).retryCount = t.retryCount, e.willReconnect = t.willReconnect(), t.backoff && t.backoff.reset(), t.retryCount = 0, t.socket && t.socket.socket && t.socket.socket.transport && t.socket.socket.transport.websocket ? (t.logger.info("link::notifyDisconnect: ondisconnected", e), t.socket.socket.transport.onConnectionOver = function () {
                t.socket = null, t.options.ondisconnect(e)
            }) : (t.logger.info("link::notifyDisconnect: ondisconnected/no transport ws", e), t.options.ondisconnect(e)))
        }, r.disconnectSocket = function () {
            if (this.isConnected() || this.connecting) try {
                this.connecting = !1, this.shouldReconnect = !1, this.needReconnect = !1, this.socket.disconnect()
            } catch (e) {
                this.logger.info("link::disconnectSocket: disconnect failed, error ", e)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(46).fn, o = n(0), i = n(59), s = n(4), a = n(15);
        (a = a || {}).name = a.name || "", a.version = a.version || "", r.reportLogs = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this, n = t.options,
                r = s.ntServerAddress;
            if (r) {
                var c = s.info;
                e = o.merge(e, {
                    appkey: n.appKey,
                    uid: n.account,
                    os: "web",
                    session: t.protocol.sdkSession || "",
                    ver: c.sdkVersion,
                    type: t.subType,
                    platform: "" + a.name.toLowerCase() + a.version.replace(/(\.\d+)+$/, "")
                });
                var u = r + o.genUrlSep(r), l = [];
                for (var p in e) l.push(p + "=" + e[p]);
                u += l.join("&"), i(u, {
                    proxyUrl: o.url2origin(u) + "/lbs/res/cors/nej_proxy_frame.html",
                    timeout: s.xhrTimeout,
                    onload: function () {
                    },
                    onerror: function (e) {
                        t.logger.info("report::ajax report error", e)
                    }
                })
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
        var s = n(0), a = n(46).fn;

        function c(e, t, n, r) {
            var o = !1, i = "";
            if (1 === n ? e.indexOf(t) >= 0 && (o = !0, i = t) : 2 === n && (i = new RegExp(t, "g")).test(e) && (o = !0), o && "" !== i) switch (r) {
                case 1:
                    return e.replace(i, "**");
                case 2:
                    return {code: 2};
                case 3:
                    return {code: 3}
            }
            return e
        }

        function u(e, t) {
            for (var n = t.match, r = t.operate, o = e, s = 0; s < t.keys.length; s++) {
                var a = t.keys[s], u = a.match || n, l = a.operate || r;
                try {
                    if ("object" === (void 0 === (o = c(o, a.key, u, l)) ? "undefined" : (0, i.default)(o))) return o
                } catch (e) {
                    this.logger.warn("misc::filterContent: js cannot parse this regexp ", e)
                }
            }
            return o
        }

        a.uploadSdkLogUrl = function (e) {
            return s.verifyOptions(e, "url", "misc::uploadSdkLogUrl"), this.cbAndSendCmd("uploadSdkLogUrl", e)
        }, a.getClientAntispamLexicon = function (e) {
            var t = this, n = (e = e || {}).done;
            n instanceof Function || (n = function () {
            }), e = {clientAntispam: {version: 0}};
            var r = this;
            return this.protocol.sendCmd("getClientAntispam", e, function (e, o, i) {
                e ? (r.protocol.logger.error("misc::getClientAntispamLexicon:", e), n.call(t, e, {})) : (n.call(t, null, i), r.antispamLexicon = i.clientAntispam || {})
            })
        }, a.filterClientAntispam = function (e) {
            var t = e.content, n = e.antispamLexicon;
            if (!t) return {code: 404, errmsg: "待反垃圾文本content不存在"};
            n = n || this.antispamLexicon || {};
            var r = this.antispamLexicon && this.antispamLexicon.thesaurus;
            if (!r) return {code: 404, errmsg: "没有反垃圾词库或者词库格式不合法"};
            try {
                r = JSON.parse(r).thesaurus
            } catch (e) {
                return this.protocol.logger.error("misc::filterClientAntispam: parse thesaurus error"), {
                    code: 500,
                    errmsg: "反垃圾词库格式不合法"
                }
            }
            for (var o = t, s = 0; s < r.length; s++) if ("object" === (void 0 === (o = u.call(this, o, r[s])) ? "undefined" : (0, i.default)(o))) {
                if (2 === o.code) return {code: 200, type: 2, errmsg: "建议拒绝发送", content: t, result: ""};
                if (3 === o.code) return {
                    code: 200,
                    type: 3,
                    errmsg: "建议服务器处理反垃圾，发消息带上字段clientAntiSpam",
                    content: t,
                    result: t
                }
            }
            return o === t ? {code: 200, type: 0, errmsg: "", content: t, result: o} : {
                code: 200,
                type: 1,
                errmsg: "已对特殊字符做了过滤",
                content: t,
                result: o
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r}, s = n(71);
        var a, c = n(0), u = n(46).fn;
        u.viewImageSync = function (e) {
            var t = this.options;
            c.verifyOptions(e, "url", "nos::viewImageSync");
            var n = e.url, r = (0, s.url2object)(n), o = r.protocol, a = r.hostname, u = r.path, l = r.query;
            if ("boolean" == typeof e.strip && (l.stripmeta = e.strip ? 1 : 0), "number" == typeof e.quality && (c.verifyParamMin("quality", e.quality, 0, "nos::viewImageSync"), c.verifyParamMax("quality", e.quality, 100, "nos::viewImageSync"), l.quality = Math.round(e.quality)), "boolean" == typeof e.interlace && (l.interlace = e.interlace ? 1 : 0), "number" == typeof e.rotate && (l.rotate = Math.round(e.rotate)), "object" === (0, i.default)(e.thumbnail)) {
                var p = e.thumbnail.mode || "crop", m = e.thumbnail.width, d = e.thumbnail.height;
                if (m >= 0 && d >= 0 && m < 4096 && d < 4096 && (m > 0 || d > 0)) {
                    switch (p) {
                        case"crop":
                            p = "y";
                            break;
                        case"contain":
                            p = "x";
                            break;
                        case"cover":
                            p = "z";
                            break;
                        default:
                            p = "x"
                    }
                    l.thumbnail = "" + m + p + d
                }
            }
            if (t.downloadUrl) {
                var f = (0, s.url2object)(e.url), h = t.downloadUrl, y = f.path, g = y.indexOf("/");
                if (-1 !== g) {
                    var v = y.substring(0, g), b = y.substring(g + 1);
                    h = h.replace("{bucket}", v).replace("{object}", b)
                }
                var k = (0, s.url2object)(h);
                return (0, s.object2url)({
                    protocol: k.protocol,
                    hostname: k.hostname,
                    path: k.path,
                    query: c.merge(k.query, l)
                })
            }
            return (0, s.object2url)({protocol: o, hostname: a, path: u, query: l})
        }, u.viewImageStripMeta = function (e) {
            c.verifyOptions(e, "url strip", "nos::viewImageStripMeta"), c.verifyParamType("strip", e.strip, "boolean", "nos::viewImageStripMeta");
            var t = "stripmeta=" + (e.strip ? 1 : 0), n = (0, s.genUrlSep)(e.url);
            return e.url + n + t
        }, u.viewImageQuality = function (e) {
            c.verifyOptions(e, "url quality", "nos::viewImageQuality"), c.verifyParamType("quality", e.quality, "number", "nos::viewImageQuality"), c.verifyParamMin("quality", e.quality, 0, "nos::viewImageQuality"), c.verifyParamMax("quality", e.quality, 100, "nos::viewImageQuality");
            var t = "quality=" + Math.round(e.quality), n = (0, s.genUrlSep)(e.url);
            return e.url + n + t
        }, u.viewImageInterlace = function (e) {
            c.verifyOptions(e, "url", "nos::viewImageInterlace");
            var t = (0, s.genUrlSep)(e.url);
            return e.url + t + "interlace=1"
        }, u.viewImageRotate = function (e) {
            for (c.verifyOptions(e, "url angle", "nos::viewImageRotate"), c.verifyParamType("angle", e.angle, "number", "nos::viewImageRotate"); e.angle < 0;) e.angle = e.angle + 360;
            e.angle = e.angle % 360;
            var t = "rotate=" + Math.round(e.angle), n = (0, s.genUrlSep)(e.url);
            return e.url + n + t
        }, u.viewImageBlur = function (e) {
            c.verifyOptions(e, "url radius sigma", "nos::viewImageBlur"), c.verifyParamType("radius", e.radius, "number", "nos::viewImageBlur"), c.verifyParamMin("radius", e.radius, 1, "nos::viewImageBlur"), c.verifyParamMax("radius", e.radius, 50, "nos::viewImageBlur"), c.verifyParamType("sigma", e.sigma, "number", "nos::viewImageBlur"), c.verifyParamMin("sigma", e.sigma, 0, "nos::viewImageBlur");
            var t = "blur=" + Math.round(e.radius) + "x" + Math.round(e.sigma), n = (0, s.genUrlSep)(e.url);
            return e.url + n + t
        }, u.viewImageCrop = function (e) {
            c.verifyOptions(e, "url x y width height", "nos::viewImageCrop"), c.verifyParamType("x", e.x, "number", "nos::viewImageCrop"), c.verifyParamMin("x", e.x, 0, "nos::viewImageCrop"), c.verifyParamType("y", e.y, "number", "nos::viewImageCrop"), c.verifyParamMin("y", e.y, 0, "nos::viewImageCrop"), c.verifyParamType("width", e.width, "number", "nos::viewImageCrop"), c.verifyParamMin("width", e.width, 0, "nos::viewImageCrop"), c.verifyParamType("height", e.height, "number", "nos::viewImageCrop"), c.verifyParamMin("height", e.height, 0, "nos::viewImageCrop");
            var t = "crop=" + Math.round(e.x) + "_" + Math.round(e.y) + "_" + Math.round(e.width) + "_" + Math.round(e.height),
                n = (0, s.genUrlSep)(e.url);
            return e.url + n + t
        }, u.viewImageThumbnail = (a = {cover: "z", contain: "x", crop: "y"}, function (e) {
            c.verifyOptions(e, "url mode", "nos::viewImageThumbnail"), c.verifyParamValid("mode", e.mode, Object.keys(a), "nos::viewImageThumbnail"), "contain" === e.mode ? c.verifyParamAtLeastPresentOne(e, "width height", "nos::viewImageThumbnail") : c.verifyOptions(e, "width height", "nos::viewImageThumbnail"), c.undef(e.width) && (e.width = 0), c.undef(e.height) && (e.height = 0), c.verifyParamType("width", e.width, "number", "nos::viewImageThumbnail"), c.verifyParamMin("width", e.width, 0, "nos::viewImageThumbnail"), c.verifyParamType("height", e.height, "number", "nos::viewImageThumbnail"), c.verifyParamMin("height", e.height, 0, "nos::viewImageThumbnail");
            var t = Math.round(e.width), n = Math.round(e.height), r = "thumbnail=" + t + a[e.mode] + n;
            "crop" === e.mode && c.notundef(e.axis) && (c.undef(e.axis.x) && (e.axis.x = 5), c.undef(e.axis.y) && (e.axis.y = 5), c.verifyParamMin("axis.x", e.axis.x, 0, "nos::viewImageThumbnail"), c.verifyParamMax("axis.x", e.axis.x, 10, "nos::viewImageThumbnail"), c.verifyParamMin("axis.y", e.axis.y, 0, "nos::viewImageThumbnail"), c.verifyParamMax("axis.y", e.axis.y, 10, "nos::viewImageThumbnail"), r = r + "&axis=" + Math.round(e.axis.x) + "_" + Math.round(e.axis.y)), c.notundef(e.enlarge) && (c.verifyParamType("enlarge", e.enlarge, "boolean", "nos::viewImageThumbnail"), e.enlarge && (r += "&enlarge=1"));
            var o = (0, s.genUrlSep)(e.url);
            return e.url + o + r
        })
    }, function (e, t, n) {
        "use strict";
        var r, o = n(0), i = n(46).fn, s = n(125);
        i.getSimpleNosToken = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.num = 1, o.verifyOptions(e), this.cbAndSendCmd("getSimpleNosToken", e)
        }, i.getNosToken = function (e) {
            this.sendCmd("getNosToken", {responseBody: e.responseBody}, e.callback)
        }, i.getNosTokenTrans = function (e) {
            this.sendCmd("getNosTokenTrans", e.responseBody, e.callback)
        }, i.packFileDownloadName = function (e) {
            o.verifyOptions(e, "url name", !0, "", "nos::packFileDownloadName");
            var t = e.url;
            return t + o.genUrlSep(t) + "download=" + encodeURIComponent(e.name)
        }, i.audioToMp3 = function (e) {
            o.verifyOptions(e, "url", "nos::audioToMp3");
            var t = e.url;
            return t + o.genUrlSep(t) + "audioTrans&type=mp3"
        }, i.removeFile = function (e) {
            this.sendCmd("removeFile", e, e.callback)
        }, i.fetchFile = function (e) {
            this.sendCmd("fetchFile", e, e.callback)
        }, i.fetchFileList = function (e) {
            this.sendCmd("fetchFileList", e, e.callback)
        }, i.stripImageMeta = function (e) {
            return this.beforeProcessImage(e, "stripmeta")
        }, i.qualityImage = function (e) {
            return this.beforeProcessImage(e, "quality")
        }, i.interlaceImage = function (e) {
            return this.beforeProcessImage(e, "interlace")
        }, i.rotateImage = function (e) {
            return this.beforeProcessImage(e, "rotate")
        }, i.blurImage = function (e) {
            return this.beforeProcessImage(e, "blur")
        }, i.cropImage = function (e) {
            return this.beforeProcessImage(e, "crop")
        }, i.thumbnailImage = function (e) {
            return this.beforeProcessImage(e, "thumbnail")
        }, i.beforeProcessImage = function (e, t) {
            var n = o.copy(e);
            return n.type = t, e.ops = [n], this.processImage(e)
        }, i.processImage = function (e) {
            var t = this;
            o.verifyOptions(e, "url ops", !0, "", "nos::processImage"), o.verifyParamType("ops", e.ops, "array", "nos::processImage");
            var n = e.ops.map(function (e) {
                return o.verifyOptions(e, "type", !0, "", "nos::processImage"), o.verifyParamValid("type", e.type, s.validTypes, "nos::processImage"), t["gen" + e.type.slice(0, 1).toUpperCase() + e.type.slice(1) + "Op"](e)
            });
            t.processCallback(e), t.sendCmd("processImage", {url: e.url, imageOps: n}, e.callback)
        }, i.genStripmetaOp = function (e) {
            return new s({type: e.type, stripmeta: e.strip ? 1 : 0})
        }, i.genQualityOp = function (e) {
            o.verifyOptions(e, "quality", !0, "", "nos::genQualityOp"), o.verifyParamType("quality", e.quality, "number", "nos::genQualityOp"), o.verifyParamMin("quality", e.quality, 0, "nos::genQualityOp"), o.verifyParamMax("quality", e.quality, 100, "nos::genQualityOp");
            var t = Math.round(e.quality);
            return new s({type: e.type, qualityQuality: t})
        }, i.genInterlaceOp = function (e) {
            return new s({type: e.type})
        }, i.genRotateOp = function (e) {
            for (o.verifyOptions(e, "angle", !0, "", "nos::genRotateOp"), o.verifyParamType("angle", e.angle, "number", "nos::genRotateOp"); e.angle < 0;) e.angle = e.angle + 360;
            e.angle = e.angle % 360;
            var t = Math.round(e.angle);
            return new s({type: e.type, rotateAngle: t})
        }, i.genBlurOp = function (e) {
            o.verifyOptions(e, "radius sigma", "nos::genBlurOp"), o.verifyParamType("radius", e.radius, "number", "nos::genBlurOp"), o.verifyParamMin("radius", e.radius, 1, "nos::genBlurOp"), o.verifyParamMax("radius", e.radius, 50, "nos::genBlurOp"), o.verifyParamType("sigma", e.sigma, "number", "nos::genBlurOp"), o.verifyParamMin("sigma", e.sigma, 0, "nos::genBlurOp");
            var t = Math.round(e.radius), n = Math.round(e.sigma);
            return new s({type: e.type, blurRadius: t, blurSigma: n})
        }, i.genCropOp = function (e) {
            o.verifyOptions(e, "x y width height", "nos::genCropOp"), o.verifyParamType("x", e.x, "number", "nos::genCropOp"), o.verifyParamMin("x", e.x, 0, "nos::genCropOp"), o.verifyParamType("y", e.y, "number", "nos::genCropOp"), o.verifyParamMin("y", e.y, 0, "nos::genCropOp"), o.verifyParamType("width", e.width, "number", "nos::genCropOp"), o.verifyParamMin("width", e.width, 0, "nos::genCropOp"), o.verifyParamType("height", e.height, "number", "nos::genCropOp"), o.verifyParamMin("height", e.height, 0, "nos::genCropOp");
            var t = Math.round(e.x), n = Math.round(e.y), r = Math.round(e.width), i = Math.round(e.height);
            return new s({type: e.type, cropX: t, cropY: n, cropWidth: r, cropHeight: i})
        }, i.genThumbnailOp = (r = {cover: "z", contain: "x", crop: "y"}, function (e) {
            o.verifyOptions(e, "mode", "nos::genThumbnailOp"), o.verifyParamValid("mode", e.mode, Object.keys(r), "nos::genThumbnailOp"), "contain" === e.mode ? o.verifyParamAtLeastPresentOne(e, "width height", "nos::genThumbnailOp") : o.verifyOptions(e, "width height", "nos::genThumbnailOp"), o.undef(e.width) && (e.width = 0), o.undef(e.height) && (e.height = 0), o.verifyParamType("width", e.width, "number", "nos::genThumbnailOp"), o.verifyParamMin("width", e.width, 0, "nos::genThumbnailOp"), o.verifyParamType("height", e.height, "number", "nos::genThumbnailOp"), o.verifyParamMin("height", e.height, 0, "nos::genThumbnailOp");
            var t = Math.round(e.width), n = Math.round(e.height),
                i = new s({type: e.type, thumbnailMode: r[e.mode], thumbnailWidth: t, thumbnailHeight: n});
            if ("crop" === e.mode && o.notundef(e.axis)) {
                o.undef(e.axis.x) && (e.axis.x = 5), o.undef(e.axis.y) && (e.axis.y = 5), o.verifyParamMin("axis.x", e.axis.x, 0, "nos::genThumbnailOp"), o.verifyParamMax("axis.x", e.axis.x, 10, "nos::genThumbnailOp"), o.verifyParamMin("axis.y", e.axis.y, 0, "nos::genThumbnailOp"), o.verifyParamMax("axis.y", e.axis.y, 10, "nos::genThumbnailOp");
                var a = Math.round(e.axis.x), c = Math.round(e.axis.y);
                i.thumbnailAxisX = a, i.thumbnailAxisY = c
            }
            return o.notundef(e.enlarge) && (o.verifyParamType("enlarge", e.enlarge, "boolean", "nos::genThumbnailOp"), e.enlarge && (i.thumbnailEnlarge = 1)), i
        })
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = n(23), i = n(59).upload, s = n(59).abort, a = r.supportFormData, c = 104857600;

        function u(e) {
            var t = this;
            t.options = r.copy(e), r.verifyOptions(e, "url fileName"), r.verifyParamPresentJustOne(e, "blob fileInput"), r.verifyCallback(e, "beginupload uploadprogress uploaddone"), e.fileInput && (e.fileInput = r.verifyFileInput(e.fileInput)), e.type && r.verifyFileType(e.type), e.timeout ? r.verifyParamType("timeout", e.timeout, "number") : e.timeout = 6e5, r.verifyFileUploadCallback(e), e.data = {};
            var n = e.fileName, s = e.fileInput;
            if (a) if (s) {
                var u = e.type ? r.filterFiles(s.files, e.type) : [].slice.call(s.files, 0);
                if (!u || !u.length) return void e.uploaddone(o.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了" + e.type + "类型的文件"));
                if (s.files[0].size > c) return void e.uploaddone(o.newFileTooLargeError("文件大小超过100M"));
                e.data[n] = u[0]
            } else e.blob && (e.data[n] = e.blob); else r.dataset(s, "name", n), e.data.input = s;
            e.params && r.merge(e.data, e.params);
            var l = {
                data: e.data, onaftersend: function () {
                    e.beginupload(t)
                }, onuploading: function (t) {
                    var n = Math.floor(1e4 * t.loaded / t.total) / 100,
                        r = {docId: e.docId, total: t.total, loaded: t.loaded, percentage: n, percentageText: n + "%"};
                    e.fileInput && (r.fileInput = e.fileInput), e.blob && (r.blob = e.blob), e.uploadprogress(r)
                }, onload: function (n) {
                    n.docId = e.docId, n.Error ? t.onError(n) : e.uploaddone(null, n)
                }, onerror: function (n) {
                    try {
                        if (n.result) var r = JSON.parse(n.result); else r = n;
                        t.onError(r)
                    } catch (r) {
                        console.error("ignore error if could not parse obj.result", r), e.uploaddone(new o(n.message, n.code), t.options)
                    }
                }
            };
            a || (l.mode = "iframe"), l.putFileAtEnd = !0, t.sn = i(e.url, l)
        }

        u.prototype.onError = function (e) {
            var t, n, r, i = this.options;
            n = (t = (e = e || {}).Error || e || {}).Code || t.code || "unknown", r = t.Message || t.message || "未知错误", i.uploaddone(new o(n + "(" + r + ")", n))
        }, u.prototype.abort = function () {
            s(this.sn)
        }, e.exports = u
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = {
            file: {md5: "$(Etag)", size: "$(ObjectSize)"},
            image: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                w: "$(ImageInfo.Width)",
                h: "$(ImageInfo.Height)",
                orientation: "$(ImageInfo.Orientation)"
            },
            audio: {md5: "$(Etag)", size: "$(ObjectSize)", dur: "$(AVinfo.Audio.Duration)"},
            video: {
                md5: "$(Etag)",
                size: "$(ObjectSize)",
                dur: "$(AVinfo.Video.Duration)",
                w: "$(AVinfo.Video.Width)",
                h: "$(AVinfo.Video.Height)"
            }
        }, i = {
            genResponseBody: function (e) {
                return o[e = e || "file"]
            }, parseResponse: function (e, t) {
                r.notundef(e.size) && (e.size = +e.size), r.notundef(e.w) && (e.w = +e.w), r.notundef(e.h) && (e.h = +e.h), r.notundef(e.dur) && (e.dur = +e.dur);
                var n = e.orientation;
                if (r.notundef(n) && (delete e.orientation, t && ("right, top" === n || "left, bottom" === n))) {
                    var o = e.w;
                    e.w = e.h, e.h = o
                }
                return e
            }
        };
        e.exports = i
    }, function (e, t, n) {
        var r, o, i;
        !function (n, s) {
            "use strict";
            o = [], void 0 === (i = "function" == typeof(r = function (e) {
                return function (t) {
                    t = t || {}, function () {
                        t.arrayAccessForm = t.arrayAccessForm || "none", t.emptyNodeForm = t.emptyNodeForm || "text", t.jsAttributeFilter = t.jsAttributeFilter, t.jsAttributeConverter = t.jsAttributeConverter, t.attributeConverters = t.attributeConverters || [], t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || [], t.arrayAccessFormPaths = t.arrayAccessFormPaths || [], void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0);
                        void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0);
                        void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0);
                        void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0);
                        void 0 === t.ignoreRoot && (t.ignoreRoot = !1);
                        void 0 === t.escapeMode && (t.escapeMode = !0);
                        void 0 === t.attributePrefix && (t.attributePrefix = "_");
                        void 0 === t.selfClosingElements && (t.selfClosingElements = !0);
                        void 0 === t.keepCData && (t.keepCData = !1);
                        void 0 === t.jsDateUTC && (t.jsDateUTC = !1)
                    }(), function () {
                        function e(e) {
                            var t = String(e);
                            return 1 === t.length && (t = "0" + t), t
                        }

                        "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
                            return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
                        });
                        "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function () {
                            return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                        })
                    }();
                    var n = {ELEMENT_NODE: 1, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, COMMENT_NODE: 8, DOCUMENT_NODE: 9};

                    function r(e) {
                        var t = e.localName;
                        return null == t && (t = e.baseName), null != t && "" !== t || (t = e.nodeName), t
                    }

                    function o(e) {
                        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : e
                    }

                    function i(e, n, r) {
                        switch (t.arrayAccessForm) {
                            case"property":
                                e[n] instanceof Array ? e[n + "_asArray"] = e[n] : e[n + "_asArray"] = [e[n]]
                        }
                        if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
                            for (var o = !1, i = 0; i < t.arrayAccessFormPaths.length; i++) {
                                var s = t.arrayAccessFormPaths[i];
                                if ("string" == typeof s) {
                                    if (s === r) {
                                        o = !0;
                                        break
                                    }
                                } else if (s instanceof RegExp) {
                                    if (s.test(r)) {
                                        o = !0;
                                        break
                                    }
                                } else if ("function" == typeof s && s(n, r)) {
                                    o = !0;
                                    break
                                }
                            }
                            o && (e[n] = [e[n]])
                        }
                    }

                    function s(e) {
                        var t = e.split(/[-T:+Z]/g), n = new Date(t[0], t[1] - 1, t[2]), r = t[5].split(".");
                        if (n.setHours(t[3], t[4], r[0]), r.length > 1 && n.setMilliseconds(r[1]), t[6] && t[7]) {
                            var o = 60 * t[6] + Number(t[7]), i = /\d\d-\d\d:\d\d$/.test(e) ? "-" : "+";
                            o = 0 + ("-" === i ? -1 * o : o), n.setMinutes(n.getMinutes() - o - n.getTimezoneOffset())
                        } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
                        return n
                    }

                    function a(e, o) {
                        for (var a = {__cnt: 0}, u = e.childNodes, l = 0; l < u.length; l++) {
                            var p = u.item(l), m = r(p);
                            p.nodeType !== n.COMMENT_NODE && (a.__cnt++, null == a[m] ? (a[m] = c(p, o + "." + m), i(a, m, o + "." + m)) : (a[m] instanceof Array || (a[m] = [a[m]], i(a, m, o + "." + m)), a[m][a[m].length] = c(p, o + "." + m)))
                        }
                        for (var d = 0; d < e.attributes.length; d++) {
                            var f = e.attributes.item(d);
                            a.__cnt++;
                            for (var h = f.value, y = 0; y < t.attributeConverters.length; y++) {
                                var g = t.attributeConverters[y];
                                g.test.call(null, f.name, f.value) && (h = g.convert.call(null, f.name, f.value))
                            }
                            a[t.attributePrefix + f.name] = h
                        }
                        var v = e.prefix;
                        return v && (a.__cnt++, a.__prefix = v), a["#text"] && (a.__text = a["#text"], a.__text instanceof Array && (a.__text = a.__text.join("\n")), t.escapeMode && (a.__text = a.__text.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")), t.stripWhitespaces && (a.__text = a.__text.trim()), delete a["#text"], "property" === t.arrayAccessForm && delete a["#text_asArray"], a.__text = function (e, n, r) {
                            if (t.datetimeAccessFormPaths.length > 0) for (var o = r.split(".#")[0], i = 0; i < t.datetimeAccessFormPaths.length; i++) {
                                var a = t.datetimeAccessFormPaths[i];
                                if ("string" == typeof a) {
                                    if (a === o) return s(e)
                                } else if (a instanceof RegExp) {
                                    if (a.test(o)) return s(e)
                                } else if ("function" == typeof a && a(o)) return s(e)
                            }
                            return e
                        }(a.__text, 0, o + ".#text")), a.hasOwnProperty("#cdata-section") && (a.__cdata = a["#cdata-section"], delete a["#cdata-section"], "property" === t.arrayAccessForm && delete a["#cdata-section_asArray"]), 1 === a.__cnt && a.__text ? a = a.__text : 0 === a.__cnt && "text" === t.emptyNodeForm ? a = "" : a.__cnt > 1 && void 0 !== a.__text && t.skipEmptyTextNodesForObj && (t.stripWhitespaces && "" === a.__text || "" === a.__text.trim()) && delete a.__text, delete a.__cnt, t.keepCData || a.hasOwnProperty("__text") || !a.hasOwnProperty("__cdata") ? (t.enableToStringFunc && (a.__text || a.__cdata) && (a.toString = function () {
                            return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "")
                        }), a) : a.__cdata ? a.__cdata : ""
                    }

                    function c(e, o) {
                        return e.nodeType === n.DOCUMENT_NODE ? function (e) {
                            for (var o = {}, i = e.childNodes, s = 0; s < i.length; s++) {
                                var a = i.item(s);
                                if (a.nodeType === n.ELEMENT_NODE) {
                                    var u = r(a);
                                    t.ignoreRoot ? o = c(a, u) : o[u] = c(a, u)
                                }
                            }
                            return o
                        }(e) : e.nodeType === n.ELEMENT_NODE ? a(e, o) : e.nodeType === n.TEXT_NODE || e.nodeType === n.CDATA_SECTION_NODE ? e.nodeValue : null
                    }

                    function u(e, n, r, i) {
                        var s = "<" + (e && e.__prefix ? e.__prefix + ":" : "") + n;
                        if (r) for (var a = 0; a < r.length; a++) {
                            var c = r[a], u = e[c];
                            t.escapeMode && (u = o(u)), s += " " + c.substr(t.attributePrefix.length) + "=", t.useDoubleQuotes ? s += '"' + u + '"' : s += "'" + u + "'"
                        }
                        return s += i ? " />" : ">"
                    }

                    function l(e, t) {
                        return "</" + (e && e.__prefix ? e.__prefix + ":" : "") + t + ">"
                    }

                    function p(e, n) {
                        return "property" === t.arrayAccessForm && (r = n.toString(), o = "_asArray", -1 !== r.indexOf(o, r.length - o.length)) || 0 === n.toString().indexOf(t.attributePrefix) || 0 === n.toString().indexOf("__") || e[n] instanceof Function;
                        var r, o
                    }

                    function m(e) {
                        var t = 0;
                        if (e instanceof Object) for (var n in e) p(e, n) || t++;
                        return t
                    }

                    function d(e) {
                        var n = [];
                        if (e instanceof Object) for (var r in e) -1 === r.toString().indexOf("__") && 0 === r.toString().indexOf(t.attributePrefix) && n.push(r);
                        return n
                    }

                    function f(e) {
                        var n = "";
                        return e instanceof Object ? n += function (e) {
                            var n = "";
                            e.__cdata && (n += "<![CDATA[" + e.__cdata + "]]>");
                            e.__text && (t.escapeMode ? n += o(e.__text) : n += e.__text);
                            return n
                        }(e) : null !== e && (t.escapeMode ? n += o(e) : n += e), n
                    }

                    function h(e, n, r) {
                        var o = "";
                        if (t.jsAttributeFilter && t.jsAttributeFilter.call(null, n, e)) return o;
                        if (t.jsAttributeConverter && (e = t.jsAttributeConverter.call(null, n, e)), void 0 !== e && null !== e && "" !== e || !t.selfClosingElements) if ("object" == typeof e) if ("[object Array]" === Object.prototype.toString.call(e)) o += function (e, t, n) {
                            var r = "";
                            if (0 === e.length) r += u(e, t, n, !0); else for (var o = 0; o < e.length; o++) r += h(e[o], t, d(e[o]));
                            return r
                        }(e, n, r); else if (e instanceof Date) o += u(e, n, r, !1), o += t.jsDateUTC ? e.toUTCString() : e.toISOString(), o += l(e, n); else {
                            var i = m(e);
                            i > 0 || e.__text || e.__cdata ? (o += u(e, n, r, !1), o += y(e), o += l(e, n)) : t.selfClosingElements ? o += u(e, n, r, !0) : (o += u(e, n, r, !1), o += l(e, n))
                        } else o += u(e, n, r, !1), o += f(e), o += l(e, n); else o += u(e, n, r, !0);
                        return o
                    }

                    function y(e) {
                        var t = "", n = m(e);
                        if (n > 0) for (var r in e) if (!p(e, r)) {
                            var o = e[r], i = d(o);
                            t += h(o, r, i)
                        }
                        return t += f(e)
                    }

                    function g(t) {
                        if (void 0 === t) return null;
                        if ("string" != typeof t) return null;
                        var n = null, r = null;
                        if (e) n = new e, r = n.parseFromString(t, "text/xml"); else if (window && window.DOMParser) {
                            n = new window.DOMParser;
                            var o = null, i = window.ActiveXObject || "ActiveXObject" in window;
                            if (!i) try {
                                o = n.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
                            } catch (e) {
                                o = null
                            }
                            try {
                                r = n.parseFromString(t, "text/xml"), null !== o && r.getElementsByTagNameNS(o, "parsererror").length > 0 && (r = null)
                            } catch (e) {
                                r = null
                            }
                        } else 0 === t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)), (r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(t);
                        return r
                    }

                    this.asArray = function (e) {
                        return void 0 === e || null === e ? [] : e instanceof Array ? e : [e]
                    }, this.toXmlDateTime = function (e) {
                        return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
                    }, this.asDateTime = function (e) {
                        return "string" == typeof e ? s(e) : e
                    }, this.xml2dom = function (e) {
                        return g(e)
                    }, this.dom2js = function (e) {
                        return c(e, null)
                    }, this.js2dom = function (e) {
                        var t = this.js2xml(e);
                        return g(t)
                    }, this.xml2js = function (e) {
                        var t = g(e);
                        return null != t ? this.dom2js(t) : null
                    }, this.js2xml = function (e) {
                        return y(e)
                    }, this.getVersion = function () {
                        return "3.1.1"
                    }
                }
            }) ? r.apply(t, o) : r) || (e.exports = i)
        }()
    }, function (e, t, n) {
        "use strict";
        var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
        var s = n(46).fn, a = n(0), c = n(195), u = n(23), l = n(4), p = n(194), m = n(193), d = n(126);
        s.sendText = function (e) {
            return this.processCallback(e), e.msg = new this.message.TextMessage(e), this.sendMsg(e)
        }, s.previewFile = function (e) {
            if (a.verifyOptions(e, "done", "msg::previewFile"), e.type || (e.type = "file"), a.verifyParamPresentJustOne(e, "dataURL blob fileInput filePath wxFilePath fileObject", "msg::previewFile"), e.filePath = e.filePath || e.wxFilePath, delete e.wxFilePath, e.dataURL) e.blob = d.fromDataURL(e.dataURL); else if (e.blob) ; else if (e.fileInput) {
                if (e.fileInput = a.verifyFileInput(e.fileInput, "msg::previewFile"), e.fileInput.files) {
                    if (!e.fileInput.files.length) return void e.done(u.newNoFileError("请选择" + e.type + "文件", {
                        callFunc: "msg::previewFile",
                        fileInput: e.fileInput
                    }), e);
                    e.fileSize = e.fileInput.files[0].size
                }
                e.fileInputName = a.getFileName(e.fileInput), e.fileInfo = a.getFileInfo(e.fileInput), e.transtype = e.fileInfo.type
            }
            this.processCallback(e);
            var t = JSON.stringify(p.genResponseBody(e.type) || {}).replace(/"/gi, '\\"'), n = null,
                r = e.transcode ? "getNosTokenTrans" : "getNosToken";
            n = e.transcode ? {
                transToken: {
                    name: e.fileInfo.name,
                    type: e.fileInfo.transcodeType,
                    transType: "png" === e.transcode ? 11 : 10,
                    size: e.fileInfo.size,
                    body: t
                }
            } : t, this[r]({
                responseBody: n, callback: function (t, n) {
                    t ? e.done(t, e.callback.options) : (e.transcode ? (e.nosToken = n.nosToken, e.docId = n.docId) : e.nosToken = n, this._doPreviewFile(e))
                }.bind(this)
            })
        }, s._doPreviewFile = function (e) {
            var t = this, n = e.uploaddone, r = l.genUploadUrl(e.nosToken.bucket),
                o = this.assembleUploadParams(e.nosToken);

            function s(r, i) {
                if (e.uploaddone = n, r) e.done(r, e.callback.options); else {
                    if ((i = p.parseResponse(i, t.options.exifOrientation)).url = l.genDownloadUrl(e.nosToken.bucket, o.Object), a.exist(e.fileInputName)) i.name = e.fileInputName; else if (e.blob) {
                        var s = e.blob.name;
                        if (i.name = s || "blob-" + i.md5, !s) {
                            var c = e.blob.type;
                            i.ext = c.slice(c.lastIndexOf("/") + 1)
                        }
                    } else e.filePath ? i.name = e.filePath : e.fileObject && (i.name = e.fileObject.fileName);
                    if (!i.ext) {
                        var u = i.name.lastIndexOf(".");
                        i.ext = -1 === u ? "unknown" : i.name.slice(u + 1)
                    }
                    i.size = i.size || 0, e.done(null, a.copy(i))
                }
            }

            if (l.isWeixinApp) a.verifyOptions(e, "filePath", "msg::_doPreviewFile"), wx.uploadFile({
                url: r,
                filePath: e.filePath,
                name: "file",
                formData: o,
                fail: function (e) {
                    console.error("api::msg:upload file failed", e)
                },
                success: function (e) {
                    if (200 === e.statusCode) try {
                        s(null, JSON.parse(e.data))
                    } catch (t) {
                        console.error("parse wx upload file res error", t), s({
                            code: "PARSE_WX_UPLOAD_FILE_RES_ERROR",
                            str: e.data,
                            msg: e.errMsg
                        })
                    } else s({code: e.statusCode, msg: e.errMsg})
                }
            }); else if (l.isNodejs) {
                var c = {
                    url: r, name: "file", formData: o, success: function (e) {
                        if (200 === e.statusCode) try {
                            s(null, JSON.parse(e.data))
                        } catch (t) {
                            console.error("parse nodejs upload file res error", t), s({
                                code: "PARSE_NODEJS_UPLOAD_FILE_RES_ERROR",
                                str: e.data,
                                msg: e.errMsg
                            })
                        } else s({code: e.statusCode, msg: e.errMsg})
                    }, fail: function (e) {
                        console.error("api::msg:upload file failed", e)
                    }
                };
                if (e.filePath) c.filePath = e.filePath; else {
                    if ("object" !== (0, i.default)(e.fileObject)) throw new u("Nodejs上传fileObject参数类型应如 {fileName:..,fileData:..} ");
                    c.fileData = e.fileObject.fileData
                }
                m.uploadFile(c)
            } else if (l.isRN) {
                var d = {
                    url: r, name: "file", formData: o, filePath: e.filePath, success: function (e) {
                        if (e.ok && 200 === e.status) try {
                            e.md5 = e.headers.map && e.headers.map.etag && e.headers.map.etag[0] || "UNKNOWN", s(null, e)
                        } catch (t) {
                            console.error("parse React Native upload file res error", t), s({
                                code: "PARSE_React_Native_UPLOAD_FILE_RES_ERROR",
                                res: e
                            })
                        } else s({code: e.status, msg: e.statusText})
                    }, fail: function (e) {
                        console.error("api::msg:upload file failed", e)
                    }
                };
                m.uploadFile(d)
            } else e.uploaddone = s, e.url = r, e.params = o, e.fileName = "file", new m(e)
        }, s.sendFile = function (e) {
            if (e.type || (e.type = "file"), a.verifyParamPresentJustOne(e, "dataURL blob fileInput file filePath wxFilePath fileObject", "msg::sendFile"), this.processCallback(e), e.filePath = e.filePath || e.wxFilePath, delete e.wxFilePath, e.dataURL) this._previewAndSendFile(e); else if (e.blob) this._previewAndSendFile(e); else if (e.fileInput) {
                if (e.fileInput = a.verifyFileInput(e.fileInput, "msg::sendFile"), e.fileInput.files && !e.fileInput.files.length) return void e.done(u.newNoFileError("请选择" + e.type + "文件", {
                    callFunc: "msg::sendFile",
                    fileInput: e.fileInput
                }), e.callback.options);
                this._previewAndSendFile(e)
            } else if (e.filePath || e.fileObject) this._previewAndSendFile(e); else if (e.file) return e.msg = new this.message.FileMessage(e), this.sendMsg(e)
        }, s._previewAndSendFile = function (e) {
            var t = this;
            a.verifyCallback(e, "uploaddone beforesend", "msg::_previewAndSendFile");
            var n = e.done;
            e.done = function (r, o) {
                if (e.done = n, r) e.uploaddone(r, e.callback.options); else {
                    if (/chatroom/.test(e.scene)) return;
                    e.uploaddone(null, a.copy(o)), e.file = o, e.msg = new t.message.FileMessage(e), e.beforesend(t.sendMsg(e))
                }
            }, t.previewFile(e)
        }, s.assembleUploadParams = function (e) {
            return e ? {
                Object: decodeURIComponent(e.objectName),
                "x-nos-token": e.token,
                "x-nos-entity-type": "json"
            } : null
        }, s.deleteFile = function (e) {
            a.verifyParamPresentJustOne(e, "docId", "msg::deleteFile"), this.removeFile({
                docId: e.docId,
                callback: function (t, n) {
                    t ? e.error && e.error(t, n) : e.success && e.success(n)
                }
            })
        }, s.getFile = function (e) {
            a.verifyParamPresentJustOne(e, "docId", "msg::getFile"), this.fetchFile({
                docId: e.docId,
                callback: function (t, n) {
                    t ? e.error && e.error(t, n) : e.success && e.success(n.info)
                }
            })
        }, s.getFileList = function (e) {
            var t = e.fromDocId, n = void 0 === t ? "" : t, r = e.limit, o = void 0 === r ? 10 : r, i = {limit: o};
            n && (i.fromDocId = n), this.fetchFileList({
                fileListParam: i, callback: function (t, n) {
                    t ? (o > 30 && (t.message = t.message + "::文档条数超过限制:30"), e.error && e.error(t, n)) : e.success && e.success(n)
                }
            })
        }, s.sendGeo = function (e) {
            return this.processCallback(e), e.msg = new this.message.GeoMessage(e), this.sendMsg(e)
        }, s.sendTipMsg = function (e) {
            return this.processCallback(e), e.msg = new this.message.TipMessage(e), this.sendMsg(e)
        }, s.sendCustomMsg = function (e) {
            return this.processCallback(e), e.msg = new this.message.CustomMessage(e), this.sendMsg(e)
        }, s.sendRobotMsg = function (e) {
            return this.processCallback(e), e.msg = new this.message.RobotMessage(e), this.sendMsg(e)
        }, s.sendMsg = function (e) {
            var t = this.protocol, n = e.msg, r = {}, o = !!e.isLocal;
            if (o && (e.time && (n.time = e.time), e.idClient && (n.idClient = e.idClient)), e.resend && ("out" !== e.flow || "fail" !== e.status)) return a.onError("只能重发发送失败的消息");
            e.callback.options.idClient = n.idClient, this.beforeSendMsg(e, r);
            var i = e.rtnMsg = this.formatReturnMsg(n);
            return o && (i.status = "success", i.isLocal = !0), t.storeSendMsg && (r.promise = t.storeSendMsg(i)), e.cbaop = function (e) {
                if (e && "server" !== e.from) return i.status = "fail", t.updateSendMsgError && t.updateSendMsgError(i), i
            }, o || (r.msg = n, this.sendCmd(e.cmd, r, e.callback)), this.afterSendMsg(e), o && setTimeout(function () {
                i = a.simpleClone(i), e.done(null, i)
            }, 0), a.copy(i)
        }, s.beforeSendMsg = function () {
        }, s.afterSendMsg = function () {
        }, s.formatReturnMsg = function (e) {
            return e = a.copy(e), this.protocol.completeMsg(e), e.status = "sending", e = this.message.reverse(e)
        }, s.resendMsg = function (e) {
            return a.verifyOptions(e, "msg", "msg::resendMsg"), this.trimMsgFlag(e), e.resend = !0, this._sendMsgByType(e)
        }, s.forwardMsg = function (e) {
            return a.verifyOptions(e, "msg", "msg::forwardMsg"), this.beforeForwardMsg(e), this.trimMsgFlag(e), e.forward = !0, e.msg.idClient = a.guid(), this._sendMsgByType(e)
        }, s.trimMsgFlag = function (e) {
            e && e.msg && (e.msg = a.copy(e.msg), delete e.msg.resend, delete e.msg.forward)
        }, s.beforeForwardMsg = function () {
        }, s._sendMsgByType = function (e) {
            switch (a.verifyOptions(e, "msg", "msg::_sendMsgByType"), a.verifyParamValid("msg.type", e.msg.type, this.message.validTypes, "msg::_sendMsgByType"), a.merge(e, e.msg), e.type) {
                case"text":
                    return this.sendText(e);
                case"image":
                case"audio":
                case"video":
                case"file":
                    return this.sendFile(e);
                case"geo":
                    return this.sendGeo(e);
                case"custom":
                    return this.sendCustomMsg(e);
                case"tip":
                    return this.sendTipMsg(e);
                default:
                    throw new u("不能发送类型为 " + e.type + " 的消息")
            }
        }, s.parseRobotTemplate = function (e) {
            if (/<template[^>\/]+\/>/.test(e)) return {raw: e, json: [{type: "text", name: "", text: ""}]};
            if (!/<template[^>\/]+>/.test(e)) return {raw: e, json: [{type: "text", name: "", text: e}]};
            var t = new c({escapeMode: !1});
            e = e.replace(/<template [^>]+>/, "<template>");
            var n = t.xml2js(e);
            n = n.template.LinearLayout, Array.isArray(n) || (n = [n]);
            var r = [];
            return n = n.forEach(function (e) {
                e.image && (r = r.concat(i(e))), e.text && (r = r.concat(o(e))), e.link && (r = r.concat(function (e) {
                    if (e.link) {
                        var t = e.link;
                        Array.isArray(t) || (t = [t]), t = t.map(function (e) {
                            return e.image && (e.image = i(e)), e.text && (e.text = o(e)), "url" === e._type ? (e.type = "url", e.style = e._style || "", e.target = e._target, delete e._target, delete e._style) : "block" === e._type && (e.type = "block", e.style = e._style || "", e.params = e._params || "", e.target = e._target, delete e._params, delete e._target, delete e._style), delete e._type, e
                        }), e.link = t
                    }
                    return e.link
                }(e)))
            }), {raw: e, json: r};

            function o(e) {
                return Array.isArray(e.text) || (e.text = [e.text]), e.text = e.text.map(function (e) {
                    return {type: "text", name: e._name, text: e.__text}
                }), e.text
            }

            function i(e) {
                return Array.isArray(e.image) || (e.image = [e.image]), e.image = e.image.map(function (e) {
                    return {type: "image", name: e._name, url: e._url}
                }), e.image
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(46).fn;
        r.isConnected = function () {
            return !!this.protocol && this.protocol.isConnected()
        }, r.connect = function () {
            this.protocol.appLogin = 0, this.protocol.connect()
        }, r.disconnect = function (e) {
            e = e || {}, this.protocol.disconnect(e.done)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(108);
        e.exports = function (e, t) {
            return t.method = "POST", t.headers = t.headers || {}, t.headers["Content-Type"] = "multipart/form-data", t.timeout = 0, t.type = t.type || "json", r(e, t)
        }
    }, function (e, t, n) {
        "use strict";
        var r, o, i = n(24), s = n(108), a = (r = /json/i, o = /post/i, function (e, t) {
            var n = (t = t || {}).data = t.data || {}, a = t.headers = t.headers || {},
                c = i.checkWithDefault(a, "Accept", "application/json"),
                u = i.checkWithDefault(a, "Content-Type", "application/json");
            return r.test(c) && (t.type = "json"), o.test(t.method) && r.test(u) && (t.data = JSON.stringify(n)), s(e, t)
        });
        e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = n(24), o = n(127), i = n(107), s = {};

        function a(e) {
            this.init(), i.call(this, e)
        }

        var c = i.prototype, u = a.prototype = Object.create(c);
        u.init = function () {
            var e = "NEJ-AJAX-DATA:", t = !1;

            function n(t) {
                var n = t.data;
                if (0 === n.indexOf(e)) {
                    var r = (n = JSON.parse(n.replace(e, ""))).key, o = s[r];
                    o && (delete s[r], n.result = decodeURIComponent(n.result || ""), o.onLoad(n))
                }
            }

            return function () {
                !function () {
                    if (!t) {
                        t = !0;
                        var e = r.getGlobal();
                        e.postMessage ? r.on(e, "message", n) : o.addMsgListener(n)
                    }
                }()
            }
        }(), u.doSend = function () {
            var e = this.options, t = r.url2origin(e.url), n = e.proxyUrl || t + "/res/nej_proxy_frame.html", i = s[n];
            if (r.isArray(i)) i.push(this.doSend.bind(this, e)); else {
                if (!i) return s[n] = [this.doSend.bind(this, e)], void r.createIframe({
                    src: n, onload: function (e) {
                        var t = s[n];
                        s[n] = r.target(e).contentWindow, t.forEach(function (e) {
                            try {
                                e()
                            } catch (e) {
                                console.error(e)
                            }
                        })
                    }
                });
                if (!this.aborted) {
                    var a = this.key = r.uniqueID();
                    s[a] = this;
                    var c = r.fetch({method: "GET", url: "", data: null, headers: {}, timeout: 0}, e);
                    c.key = a, o.postMessage(i, {data: c}), this.afterSend()
                }
            }
        }, u.abort = function () {
            this.aborted = !0, delete s[this.key], c.abort.call(this)
        }, e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = n(24), o = n(107), i = n(127), s = "NEJ-UPLOAD-RESULT:", a = {};

        function c(e) {
            this.init(), o.call(this, e)
        }

        var u = o.prototype, l = c.prototype = Object.create(u);
        l.init = function () {
            var e = !1;

            function t(e) {
                var t = e.data;
                if (0 === t.indexOf(s)) {
                    var n = (t = JSON.parse(t.replace(s, ""))).key, r = a[n];
                    r && (delete a[n], t.result = decodeURIComponent(t.result || ""), r.onLoad(t.result))
                }
            }

            return function () {
                !function () {
                    if (!e) {
                        e = !0;
                        var n = r.getGlobal();
                        n.postMessage ? r.on(n, "message", t) : (i.addMsgListener(t), i.startTimer())
                    }
                }()
            }
        }(), l.doSend = function () {
            var e = this, t = e.options, n = e.key = "zoro-ajax-upload-iframe-" + r.uniqueID();
            a[n] = e;
            var o = e.form = r.html2node('<form style="display:none;"></form>');
            document.body.appendChild(o), o.target = n, o.method = "POST", o.enctype = "multipart/form-data", o.encoding = "multipart/form-data";
            var i = t.url, s = r.genUrlSep(i);
            o.action = i + s + "_proxy_=form";
            var c = t.data, u = [], l = [];

            function p() {
                u.forEach(function (e, t) {
                    var n = l[t];
                    n.parentNode && (e.name = n.name, r.isFunction(e.setAttribute) && e.setAttribute("form", n.getAttribute("form")), n.parentNode.replaceChild(e, n))
                })
            }

            c && r.getKeys(c, t.putFileAtEnd).forEach(function (e) {
                var t = c[e];
                if (t.tagName && "INPUT" === t.tagName.toUpperCase()) {
                    if ("file" === t.type) {
                        var n = t, i = n.cloneNode(!0);
                        n.parentNode.insertBefore(i, n);
                        var s = r.dataset(n, "name");
                        s && (n.name = s), o.appendChild(n), r.isFunction(n.setAttribute) && (n.setAttribute("form", ""), n.removeAttribute("form")), u.push(t), l.push(i)
                    }
                } else {
                    var a = r.html2node('<input type="hidden"/>');
                    a.name = e, a.value = t, o.appendChild(a)
                }
            });
            var m = e.iframe = r.createIframe({
                name: n, onload: function () {
                    e.aborted ? p() : (r.on(m, "load", e.checkResult.bind(e)), o.submit(), p(), e.afterSend())
                }
            })
        }, l.checkResult = function () {
            var e, t;
            try {
                if ((t = ((e = this.iframe.contentWindow.document.body).innerText || e.textContent || "").trim()).indexOf(s) >= 0 || e.innerHTML.indexOf(s) >= 0) return
            } catch (e) {
                return void console.error("ignore error if not same domain,", e)
            }
            this.onLoad(t)
        }, l.onLoad = function (e) {
            u.onLoad.call(this, {
                status: 200,
                result: e
            }), r.remove(this.form), r.remove(this.iframe), u.destroy.call(this)
        }, l.destroy = function () {
            r.remove(this.iframe), r.remove(this.form)
        }, l.abort = function () {
            this.aborted = !0, delete a[this.key], u.abort.call(this)
        }, e.exports = c
    }, function (e, t, n) {
        var r;
        /*!
 * EventEmitter v5.2.4 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */
        !function (t) {
            "use strict";

            function o() {
            }

            var i = o.prototype, s = t.EventEmitter;

            function a(e, t) {
                for (var n = e.length; n--;) if (e[n].listener === t) return n;
                return -1
            }

            function c(e) {
                return function () {
                    return this[e].apply(this, arguments)
                }
            }

            i.getListeners = function (e) {
                var t, n, r = this._getEvents();
                if (e instanceof RegExp) for (n in t = {}, r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]); else t = r[e] || (r[e] = []);
                return t
            }, i.flattenListeners = function (e) {
                var t, n = [];
                for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                return n
            }, i.getListenersAsObject = function (e) {
                var t, n = this.getListeners(e);
                return n instanceof Array && ((t = {})[e] = n), t || n
            }, i.addListener = function (e, t) {
                if (!function e(t) {
                    return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
                }(t)) throw new TypeError("listener must be a function");
                var n, r = this.getListenersAsObject(e), o = "object" == typeof t;
                for (n in r) r.hasOwnProperty(n) && -1 === a(r[n], t) && r[n].push(o ? t : {listener: t, once: !1});
                return this
            }, i.on = c("addListener"), i.addOnceListener = function (e, t) {
                return this.addListener(e, {listener: t, once: !0})
            }, i.once = c("addOnceListener"), i.defineEvent = function (e) {
                return this.getListeners(e), this
            }, i.defineEvents = function (e) {
                for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                return this
            }, i.removeListener = function (e, t) {
                var n, r, o = this.getListenersAsObject(e);
                for (r in o) o.hasOwnProperty(r) && -1 !== (n = a(o[r], t)) && o[r].splice(n, 1);
                return this
            }, i.off = c("removeListener"), i.addListeners = function (e, t) {
                return this.manipulateListeners(!1, e, t)
            }, i.removeListeners = function (e, t) {
                return this.manipulateListeners(!0, e, t)
            }, i.manipulateListeners = function (e, t, n) {
                var r, o, i = e ? this.removeListener : this.addListener,
                    s = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp) for (r = n.length; r--;) i.call(this, t, n[r]); else for (r in t) t.hasOwnProperty(r) && (o = t[r]) && ("function" == typeof o ? i.call(this, r, o) : s.call(this, r, o));
                return this
            }, i.removeEvent = function (e) {
                var t, n = typeof e, r = this._getEvents();
                if ("string" === n) delete r[e]; else if (e instanceof RegExp) for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
                return this
            }, i.removeAllListeners = c("removeEvent"), i.emitEvent = function (e, t) {
                var n, r, o, i, s = this.getListenersAsObject(e);
                for (i in s) if (s.hasOwnProperty(i)) for (n = s[i].slice(0), o = 0; o < n.length; o++) !0 === (r = n[o]).once && this.removeListener(e, r.listener), r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                return this
            }, i.trigger = c("emitEvent"), i.emit = function (e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, t)
            }, i.setOnceReturnValue = function (e) {
                return this._onceReturnValue = e, this
            }, i._getOnceReturnValue = function () {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, i._getEvents = function () {
                return this._events || (this._events = {})
            }, o.noConflict = function () {
                return t.EventEmitter = s, o
            }, void 0 === (r = function () {
                return o
            }.call(t, n, t, e)) || (e.exports = r)
        }(this || {})
    }, function (e, t, n) {
        "use strict";
        var r = n(24), o = n(107);

        function i(e) {
            e.onuploading && this.on("uploading", e.onuploading), o.call(this, e)
        }

        var s = o.prototype, a = i.prototype = Object.create(s);
        a.doSend = function () {
            var e = this.options, t = e.headers, n = this.xhr = new XMLHttpRequest;
            if ("multipart/form-data" === t["Content-Type"]) {
                delete t["Content-Type"], n.upload.onprogress = this.onProgress.bind(this), n.upload.onload = this.onProgress.bind(this);
                var o = e.data;
                e.data = new window.FormData, o && r.getKeys(o, e.putFileAtEnd).forEach(function (t) {
                    var n = o[t];
                    n.tagName && "INPUT" === n.tagName.toUpperCase() ? "file" === n.type && [].forEach.call(n.files, function (t) {
                        e.data.append(r.dataset(n, "name") || n.name || t.name || "file-" + r.uniqueID(), t)
                    }) : e.data.append(t, n)
                })
            }
            n.onreadystatechange = this.onStateChange.bind(this), 0 !== e.timeout && (this.timer = setTimeout(this.onTimeout.bind(this), e.timeout)), n.open(e.method, e.url, !e.sync), Object.keys(t).forEach(function (e) {
                n.setRequestHeader(e, t[e])
            }), e.cookie && "withCredentials" in n && (n.withCredentials = !0), n.send(e.data), this.afterSend()
        }, a.onProgress = function (e) {
            e.lengthComputable && e.loaded <= e.total && this.emit("uploading", e)
        }, a.onStateChange = function () {
            var e = this.xhr;
            4 === e.readyState && this.onLoad({status: e.status, result: e.responseText || ""})
        }, a.getResponseHeader = function (e) {
            var t = this.xhr;
            return t ? t.getResponseHeader(e) : ""
        }, a.destroy = function () {
            clearTimeout(this.timer);
            try {
                this.xhr.onreadystatechange = r.f, this.xhr.abort()
            } catch (e) {
                console.error("ignore error ajax destroy,", e)
            }
            s.destroy.call(this)
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(15), o = n(0);
        n(59);

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o.merge(this, {
                options: e,
                debug: !1,
                api: "log",
                style: "color:blue;",
                log: o.emptyFunc,
                info: o.emptyFunc,
                warn: o.emptyFunc,
                error: o.emptyFunc
            }), this.prefix = e.prefix || "", this.setDebug(e.debug)
        }

        var s = i.prototype, a = ["Chrome", "Safari", "Firefox"];
        s.setDebug = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this;
            if (t.debug = e, e.style && (t.style = e.style), t.debug && o.exist(console)) {
                var n = console;
                t.debug = function () {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("debug", e)
                }, t.log = function () {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("log", e)
                }, t.info = function () {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("info", e)
                }, t.warn = function () {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("warn", e)
                }, t.error = function () {
                    var e = t.formatArgs(arguments);
                    -1 !== a.indexOf(r.name) && o.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("error", e)
                }, t._log = function (e, r) {
                    var i = t.options.logFunc, s = null;
                    if (i && (i[e] && (s = i[e]), o.isFunction(s))) s.apply(i, r); else if (n[e]) try {
                        n[e].apply ? t.chrome(e, r) : t.ie(e, r)
                    } catch (e) {
                    }
                }, t.chrome = function (e, o) {
                    -1 !== a.indexOf(r.name) ? n[e].apply(n, o) : t.ie(e, o)
                }, t.ie = function (e, t) {
                    t.forEach(function (t) {
                        n[e](JSON.stringify(t, null, 4))
                    })
                }
            }
        }, s.formatArgs = function (e) {
            e = [].slice.call(e, 0);
            var t = new Date,
                n = "[NIM LOG " + (c(t.getMonth() + 1) + "-" + c(t.getDate()) + " " + c(t.getHours()) + ":" + c(t.getMinutes()) + ":" + c(t.getSeconds()) + ":" + c(t.getMilliseconds(), 3)) + " " + this.prefix.toUpperCase() + "]  ";
            return o.isString(e[0]) ? e[0] = n + e[0] : e.splice(0, 0, n), e.forEach(function (t, n) {
                (o.isArray(t) || o.isObject(t)) && (e[n] = o.simpleClone(t))
            }), e
        };
        var c = function (e, t) {
            t = t || 2;
            for (var n = "" + e; n.length < t;) n = "0" + n;
            return n
        };
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(4);
        "undefined" != typeof window && (window.console || r.isWeixinApp || (window.console = {
            log: function () {
            }, info: function () {
            }, warn: function () {
            }, error: function () {
            }
        }))
    }, function (e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var c, u = [], l = !1, p = -1;

        function m() {
            l && c && (l = !1, c.length ? u = c.concat(u) : p = -1, u.length && d())
        }

        function d() {
            if (!l) {
                var e = a(m);
                l = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++p < t;) c && c[p].run();
                    p = -1, t = u.length
                }
                c = null, l = !1, function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }

        function f(e, t) {
            this.fun = e, this.array = t
        }

        function h() {
        }

        o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new f(e, t)), 1 !== u.length || l || a(d)
        }, f.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
            return []
        }, o.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        (function (t, n) {
            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
            var r;
            r = function () {
                "use strict";

                function e(e) {
                    return "function" == typeof e
                }

                var r = Array.isArray ? Array.isArray : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }, o = 0, i = void 0, s = void 0, a = function (e, t) {
                    f[o] = e, f[o + 1] = t, 2 === (o += 2) && (s ? s(h) : k())
                };
                var c = "undefined" != typeof window ? window : void 0, u = c || {},
                    l = u.MutationObserver || u.WebKitMutationObserver,
                    p = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                    m = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function d() {
                    var e = setTimeout;
                    return function () {
                        return e(h, 1)
                    }
                }

                var f = new Array(1e3);

                function h() {
                    for (var e = 0; e < o; e += 2) {
                        (0, f[e])(f[e + 1]), f[e] = void 0, f[e + 1] = void 0
                    }
                    o = 0
                }

                var y, g, v, b, k = void 0;

                function T(e, t) {
                    var n = this, r = new this.constructor(x);
                    void 0 === r[S] && U(r);
                    var o = n._state;
                    if (o) {
                        var i = arguments[o - 1];
                        a(function () {
                            return L(o, r, i, n._result)
                        })
                    } else F(n, r, e, t);
                    return r
                }

                function M(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(x);
                    return E(t, e), t
                }

                p ? k = function () {
                    return t.nextTick(h)
                } : l ? (g = 0, v = new l(h), b = document.createTextNode(""), v.observe(b, {characterData: !0}), k = function () {
                    b.data = g = ++g % 2
                }) : m ? ((y = new MessageChannel).port1.onmessage = h, k = function () {
                    return y.port2.postMessage(0)
                }) : k = void 0 === c ? function () {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function () {
                            i(h)
                        } : d()
                    } catch (e) {
                        return d()
                    }
                }() : d();
                var S = Math.random().toString(36).substring(2);

                function x() {
                }

                var w = void 0, C = 1, _ = 2, O = {error: null};

                function P(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return O.error = e, O
                    }
                }

                function I(t, n, r) {
                    n.constructor === t.constructor && r === T && n.constructor.resolve === M ? function (e, t) {
                        t._state === C ? N(e, t._result) : t._state === _ ? j(e, t._result) : F(t, void 0, function (t) {
                            return E(e, t)
                        }, function (t) {
                            return j(e, t)
                        })
                    }(t, n) : r === O ? (j(t, O.error), O.error = null) : void 0 === r ? N(t, n) : e(r) ? function (e, t, n) {
                        a(function (e) {
                            var r = !1, o = function (e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, function (n) {
                                r || (r = !0, t !== n ? E(e, n) : N(e, n))
                            }, function (t) {
                                r || (r = !0, j(e, t))
                            }, e._label);
                            !r && o && (r = !0, j(e, o))
                        }, e)
                    }(t, n, r) : N(t, n)
                }

                function E(e, t) {
                    var n, r;
                    e === t ? j(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? N(e, t) : I(e, t, P(t)))
                }

                function A(e) {
                    e._onerror && e._onerror(e._result), R(e)
                }

                function N(e, t) {
                    e._state === w && (e._result = t, e._state = C, 0 !== e._subscribers.length && a(R, e))
                }

                function j(e, t) {
                    e._state === w && (e._state = _, e._result = t, a(A, e))
                }

                function F(e, t, n, r) {
                    var o = e._subscribers, i = o.length;
                    e._onerror = null, o[i] = t, o[i + C] = n, o[i + _] = r, 0 === i && e._state && a(R, e)
                }

                function R(e) {
                    var t = e._subscribers, n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s], o = t[s + n], r ? L(n, r, o, i) : o(i);
                        e._subscribers.length = 0
                    }
                }

                function L(t, n, r, o) {
                    var i = e(r), s = void 0, a = void 0, c = void 0, u = void 0;
                    if (i) {
                        if ((s = function (e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return O.error = e, O
                            }
                        }(r, o)) === O ? (u = !0, a = s.error, s.error = null) : c = !0, n === s) return void j(n, new TypeError("A promises callback cannot return that same promise."))
                    } else s = o, c = !0;
                    n._state !== w || (i && c ? E(n, s) : u ? j(n, a) : t === C ? N(n, s) : t === _ && j(n, s))
                }

                var D = 0;

                function U(e) {
                    e[S] = D++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                var q = function () {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(x), this.promise[S] || U(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? N(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && N(this.promise, this._result))) : j(this.promise, new Error("Array Methods must be provided an Array"))
                    }

                    return e.prototype._enumerate = function (e) {
                        for (var t = 0; this._state === w && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function (e, t) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === M) {
                            var o = P(e);
                            if (o === T && e._state !== w) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, this._result[t] = e; else if (n === B) {
                                var i = new n(x);
                                I(i, e, o), this._willSettleAt(i, t)
                            } else this._willSettleAt(new n(function (t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(r(e), t)
                    }, e.prototype._settledAt = function (e, t, n) {
                        var r = this.promise;
                        r._state === w && (this._remaining--, e === _ ? j(r, n) : this._result[t] = n), 0 === this._remaining && N(r, this._result)
                    }, e.prototype._willSettleAt = function (e, t) {
                        var n = this;
                        F(e, void 0, function (e) {
                            return n._settledAt(C, t, e)
                        }, function (e) {
                            return n._settledAt(_, t, e)
                        })
                    }, e
                }();
                var B = function () {
                    function e(t) {
                        this[S] = D++, this._result = this._state = void 0, this._subscribers = [], x !== t && ("function" != typeof t && function () {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof e ? function (e, t) {
                            try {
                                t(function (t) {
                                    E(e, t)
                                }, function (t) {
                                    j(e, t)
                                })
                            } catch (t) {
                                j(e, t)
                            }
                        }(this, t) : function () {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }

                    return e.prototype.catch = function (e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function (e) {
                        var t = this.constructor;
                        return this.then(function (n) {
                            return t.resolve(e()).then(function () {
                                return n
                            })
                        }, function (n) {
                            return t.resolve(e()).then(function () {
                                throw n
                            })
                        })
                    }, e
                }();
                return B.prototype.then = T, B.all = function (e) {
                    return new q(this, e).promise
                }, B.race = function (e) {
                    var t = this;
                    return r(e) ? new t(function (n, r) {
                        for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                    }) : new t(function (e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, B.resolve = M, B.reject = function (e) {
                    var t = new this(x);
                    return j(t, e), t
                }, B._setScheduler = function (e) {
                    s = e
                }, B._setAsap = function (e) {
                    a = e
                }, B._asap = a, B.polyfill = function () {
                    var e = void 0;
                    if (void 0 !== n) e = n; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve())
                        } catch (e) {
                        }
                        if ("[object Promise]" === r && !t.cast) return
                    }
                    e.Promise = B
                }, B.Promise = B, B
            }, e.exports = r()
        }).call(this, n(206), n(30))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        var r = n(116).fn, o = n(0);
        r.queueOffer = function (e) {
            o.verifyOptions(e, "elementKey elementValue", "msg::queueOffer"), e.transient ? e.transient = !0 : e.transient = !1, this.processCallback(e), this.sendCmd("queueOffer", e, e.callback)
        }, r.queuePoll = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e.elementKey = e.elementKey || "", this.processCallback(e), this.sendCmd("queuePoll", e, e.callback)
        }, r.queueList = function (e) {
            this.processCallback(e), this.sendCmd("queueList", e, e.callback)
        }, r.peak = function (e) {
            this.processCallback(e), this.sendCmd("peak", e, e.callback)
        }, r.queueDrop = function (e) {
            this.processCallback(e), this.sendCmd("queueDrop", e, e.callback)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = r.undef, i = r.verifyOptions, s = r.verifyParamType, a = n(142), c = n(116).fn;
        c.updateMyChatroomMemberInfo = function (e) {
            i(e, "member needNotify", "member::updateMyChatroomMemberInfo"), s("needNotify", e.needNotify, "boolean", "member::updateMyChatroomMemberInfo"), e.needSave = e.needSave || !1, s("needSave", e.needSave, "boolean", "member::updateMyChatroomMemberInfo"), this.processCustom(e), this.processCallback(e), e.chatroomMember = new a(e.member), this.sendCmd("updateMyChatroomMemberInfo", e)
        }, c.getChatroomMembers = function (e) {
            i(e, "guest", "member::getChatroomMembers"), s("guest", e.guest, "boolean", "member::getChatroomMembers"), o(e.time) ? e.time = 0 : s("time", e.time, "number", "member::getChatroomMembers"), o(e.limit) ? e.limit = 100 : s("limit", e.limit, "number", "member::getChatroomMembers"), this.processCallback(e), e.type = e.guest ? 1 : 0, !e.guest && e.onlyOnline && (e.type = 2), this.sendCmd("getChatroomMembers", e)
        }, c.getChatroomMembersInfo = function (e) {
            i(e, "accounts", "member::getChatroomMembersInfo"), s("accounts", e.accounts, "array", "member::getChatroomMembersInfo"), this.processCallback(e), this.sendCmd("getChatroomMembersInfo", e)
        }, c.markChatroomManager = function (e) {
            e.type = 1, this.markChatroomMember(e)
        }, c.markChatroomCommonMember = function (e) {
            e.type = 2, this.markChatroomMember(e)
        }, c.markChatroomBlacklist = function (e) {
            e.type = -1, this.markChatroomMember(e)
        }, c.markChatroomGaglist = function (e) {
            e.type = -2, this.markChatroomMember(e)
        }, c.markChatroomMember = function (e) {
            i(e, "account type isAdd", "member::markChatroomMember"), s("isAdd", e.isAdd, "boolean", "member::markChatroomMember"), o(e.level) ? e.level = 0 : s("level", e.level, "number", "member::markChatroomMember");
            this.processCustom(e), this.processCallback(e), this.sendCmd("markChatroomMember", e)
        }, c.kickChatroomMember = function (e) {
            i(e, "account", "member::kickChatroomMember"), this.processCustom(e), this.processCallback(e), this.sendCmd("kickChatroomMember", e)
        }, c.updateChatroomMemberTempMute = function (e) {
            i(e, "account duration needNotify", "member::updateChatroomMemberTempMute"), s("duration", e.duration, "number", "member::updateChatroomMemberTempMute"), s("needNotify", e.needNotify, "boolean", "member::updateChatroomMemberTempMute"), this.processCustom(e), this.processCallback(e), this.sendCmd("updateChatroomMemberTempMute", e)
        }, c.getRobotList = function (e) {
            o(e.timetag) && (e.timetag = 0), this.processCallback(e), this.sendCmd("syncRobot", e)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = r.undef, i = n(116).fn;
        i.beforeSendMsg = function (e) {
            e.cmd = "sendMsg"
        };
        var s = {
            text: 0,
            image: 1,
            audio: 2,
            video: 3,
            geo: 4,
            notification: 5,
            file: 6,
            tip: 10,
            robot: 11,
            custom: 100
        };
        i.getHistoryMsgs = function (e) {
            r.verifyOptions(e), o(e.timetag) ? e.timetag = 0 : r.verifyParamType("timetag", e.timetag, "number", "msg::getHistoryMsgs"), o(e.limit) ? e.limit = 100 : r.verifyParamType("limit", e.limit, "number", "msg::getHistoryMsgs"), o(e.reverse) ? e.reverse = !1 : r.verifyParamType("reverse", e.reverse, "boolean", "msg::getHistoryMsgs"), o(e.msgTypes) ? e.msgTypes = [] : Array.isArray(e.msgTypes) ? (e.msgTypes = e.msgTypes.map(function (e) {
                return s[e]
            }), e.msgTypes = e.msgTypes.filter(function (e) {
                return "number" == typeof e
            })) : "number" == typeof s[e.msgTypes] ? e.msgTypes = [s[e.msgTypes]] : e.msgTypes = [];
            this.processCallback(e), this.sendCmd("getHistoryMsgs", e, function (t, n, r) {
                Array.isArray(r) && (r = r.map(function (e) {
                    return s[e.type] && (e.type = s[e.type]), e
                })), e.callback(t, n, r)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(65), o = n(0), i = {welcome: "00", text: "01", link: "03"},
            s = {"01": "text", "02": "image", "03": "answer", 11: "template"};

        function a(e) {
            o.verifyOptions(e, "content", "msg::RobotMessage");
            var t = e.content;
            switch (t.type) {
                case"welcome":
                    o.undef(e.body) && (this.body = "欢迎消息");
                    break;
                case"text":
                    o.verifyOptions(t, "content", "msg::RobotMessage"), o.undef(e.body) && (this.body = t.content);
                    break;
                case"link":
                    o.verifyOptions(t, "target", "msg::RobotMessage")
            }
            t.type && (t.type = i[t.type]), t = {
                param: t,
                robotAccid: e.robotAccid
            }, this.attach = JSON.stringify(t), e.type = "robot", r.call(this, e)
        }

        a.prototype = Object.create(r.prototype), a.reverse = function (e) {
            var t = r.reverse(e);
            if ("robot" === t.type) {
                var n = JSON.parse(e.attach);
                if (n.param && (n.param.type = s[n.param.type] || "unknown"), n.robotMsg) {
                    var i = (n = o.merge(n, n.robotMsg)).message;
                    "bot" === n.flag ? n.message = i.map(function (e) {
                        return e.type = s[e.type] || "unknown", e
                    }) : n.flag, delete n.robotMsg
                }
                t.content = n
            }
            return t
        }, e.exports = a
    }, function (e, t, n) {
        "use strict";
        var r = n(65), o = n(0);

        function i(e) {
            o.verifyOptions(e, "tip", "msg::TipMessage"), e.type = "tip", r.call(this, e), this.attach = e.tip
        }

        i.prototype = Object.create(r.prototype), i.reverse = function (e) {
            var t = r.reverse(e);
            return t.tip = e.attach, t
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(65), o = n(0);

        function i(e) {
            o.verifyOptions(e, "content", "msg::CustomMessage"), e.type = "custom", r.call(this, e), "string" != typeof e.content && (e.content = JSON.stringify(e.content)), this.attach = e.content
        }

        i.prototype = Object.create(r.prototype), i.reverse = function (e) {
            var t = r.reverse(e);
            return t.content = e.attach, t
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(0).notundef, o = n(65), i = {
            301: "memberEnter",
            302: "memberExit",
            303: "blackMember",
            304: "unblackMember",
            305: "gagMember",
            306: "ungagMember",
            307: "addManager",
            308: "removeManager",
            309: "addCommon",
            310: "removeCommon",
            311: "closeChatroom",
            312: "updateChatroom",
            313: "kickMember",
            314: "addTempMute",
            315: "removeTempMute",
            316: "updateMemberInfo",
            317: "updateQueue",
            318: "muteRoom",
            319: "unmuteRoom",
            320: "batchUpdateQueue"
        };

        function s() {
        }

        s.prototype = Object.create(o.prototype), s.reverse = function (e) {
            var t = o.reverse(e);
            if (e.attach = e.attach ? "" + e.attach : "", e.attach) {
                var n = JSON.parse(e.attach);
                if (t.attach = {type: i[n.id]}, r(n.data)) {
                    var s = n.data;
                    if (r(s.operator) && (t.attach.from = s.operator), r(s.opeNick) && (t.attach.fromNick = s.opeNick), r(s.target) && (t.attach.to = s.target), r(s.tarNick) && (t.attach.toNick = s.tarNick), r(s.muteDuration) && (t.attach.duration = parseInt(s.muteDuration, 10)), "memberEnter" === t.attach.type && (r(s.muted) ? t.attach.gaged = 1 == +s.muted : t.attach.gaged = !1, r(s.tempMuted) ? t.attach.tempMuted = 1 == +s.tempMuted : t.attach.tempMuted = !1, r(s.muteTtl) ? t.attach.tempMuteDuration = +s.muteTtl : t.attach.tempMuteDuration = 0), r(s.ext) && (t.attach.custom = s.ext), r(s.queueChange)) {
                        var a = JSON.parse(s.queueChange);
                        switch (a._e) {
                            case"OFFER":
                                t.attach.queueChange = {type: "OFFER", elementKey: a.key, elementValue: a.content};
                                break;
                            case"POLL":
                                t.attach.queueChange = {type: "POLL", elementKey: a.key, elementValue: a.content};
                                break;
                            case"DROP":
                                t.attach.queueChange = {type: "DROP"};
                                break;
                            case"PARTCLEAR":
                                t.attach.queueChange = {type: "PARTCLEAR", elementKv: a.kvObject}
                        }
                    }
                }
            } else t.attach = {};
            return t
        }, e.exports = s
    }, function (e, t, n) {
        "use strict";
        var r = n(65), o = n(0);

        function i(e) {
            e.type = "geo", o.verifyOptions(e, "geo", "msg::GeoMessage"), o.verifyOptions(e.geo, "lng lat title", !0, "geo.", "msg::GeoMessage"), o.verifyParamType("geo.lng", e.geo.lng, "number", "msg::GeoMessage"), o.verifyParamType("geo.lat", e.geo.lat, "number", "msg::GeoMessage"), o.verifyParamType("geo.title", e.geo.title, "string", "msg::GeoMessage"), r.call(this, e), this.attach = JSON.stringify(e.geo)
        }

        i.prototype = Object.create(r.prototype), i.reverse = function (e) {
            var t = r.reverse(e);
            return e.attach = e.attach ? "" + e.attach : "", t.geo = e.attach ? JSON.parse(e.attach) : {}, t
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(115), o = n(0);

        function i() {
        }

        i.prototype = Object.create(r.prototype), i.verifyFile = function (e, t) {
            o.verifyOptions(e, "dur w h", !0, "file.", t)
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(115), o = n(0);

        function i() {
        }

        i.prototype = Object.create(r.prototype), i.verifyFile = function (e, t) {
            o.verifyOptions(e, "dur", !0, "file.", t)
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = n(115);

        function i() {
        }

        i.prototype = Object.create(o.prototype), i.verifyFile = function (e, t) {
            r.verifyOptions(e, "w h", !0, "file.", t)
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(65), o = n(0);

        function i(e) {
            o.verifyOptions(e, "text", "msg::TextMessage"), e.type = "text", r.call(this, e), this.attach = e.text, this.body = ""
        }

        i.prototype = Object.create(r.prototype), i.reverse = function (e) {
            var t = r.reverse(e);
            return t.text = e.attach, t
        }, e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(0), o = function (e) {
                this.account = e.account
            }, i = o.prototype, s = i.Message = n(65), a = i.TextMessage = n(279), c = i.FileMessage = n(115),
            u = i.GeoMessage = n(275), l = i.NotificationMessage = n(274), p = i.CustomMessage = n(273),
            m = i.TipMessage = n(272), d = i.RobotMessage = n(271);
        i.validTypes = s.validTypes, i.reverse = function (e) {
            var t;
            switch (s.getType(e)) {
                case"text":
                    t = a.reverse(e);
                    break;
                case"image":
                case"audio":
                case"video":
                case"file":
                    t = c.reverse(e);
                    break;
                case"geo":
                    t = u.reverse(e);
                    break;
                case"notification":
                    t = l.reverse(e);
                    break;
                case"custom":
                    t = p.reverse(e);
                    break;
                case"tip":
                    t = m.reverse(e);
                    break;
                case"robot":
                    t = d.reverse(e);
                    break;
                default:
                    t = s.reverse(e)
            }
            return s.setExtra(t, this.account), t
        }, i.reverseMsgs = function (e, t) {
            var n, o, i = this;
            return e.map(function (e) {
                return e = i.reverse(e), t && ((n = t.modifyObj) && (e = r.merge(e, n)), o = t.mapper, r.isFunction(o) && (e = o(e))), e
            })
        }, e.exports = o
    }, function (e, t, n) {
        "use strict";
        var r = n(101).fn, o = n(142);
        r.onChatroomMembersInfo = r.onChatroomMembers = function (e) {
            e.error || (e.obj.members = o.reverseMembers(e.content.members))
        }, r.onMarkChatroomMember = function (e) {
            e.error || (e.obj.member = o.reverse(e.content.chatroomMember))
        }, r.onSyncRobot = function (e) {
            !e.error && this.options.onrobots ? this.options.onrobots(null, e.content) : this.ontions.onrobots(e.error, {})
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(101).fn, o = n(0);
        r.completeMsg = function (e) {
            e.chatroomId = this.chatroom.id, e.from = this.options.account, e.fromClientType = "Web", e.time || (e.time = +new Date)
        }, r.onMsg = function (e) {
            var t = this.message.reverse(e.content.msg);
            this.checkMsgUnique(t) && (this.msgBuffer.push(t), this.msgFlushTimer || this.startMsgFlushTimer())
        }, r.startMsgFlushTimer = function () {
            var e = this, t = e.options;
            e.msgFlushTimer = setTimeout(function () {
                var n = e.msgBuffer.splice(0, t.msgBufferSize);
                e.options.onmsgs(n), e.msgBuffer.length ? e.startMsgFlushTimer() : delete e.msgFlushTimer
            }, t.msgBufferInterval)
        }, r.checkMsgUnique = o.genCheckUniqueFunc("idClient"), r.onSendMsg = function (e) {
            var t = e.obj.msg;
            e.error ? t.status = "fail" : (t = e.content.msg).status = "success", t = this.message.reverse(t), e.obj = t
        }, r.onHistoryMsgs = function (e) {
            e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(101).fn, o = n(43), i = n(0);
        r.assembleLogin = function () {
            var e = this.options;
            this.sdkSession = this.genSessionKey();
            var t = {
                appKey: e.appKey,
                account: e.account,
                deviceId: o.deviceId,
                chatroomId: e.chatroomId,
                session: this.sdkSession,
                appLogin: this.appLogin || 0
            };
            return {
                type: 1,
                login: t = i.merge(t, i.filterObj(e, "chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom isAnonymous")),
                imLogin: this.assembleIMLogin()
            }
        }, r.afterLogin = function (e) {
            var t = e.chatroom;
            this.chatroom = t, this.notifyLogin()
        }, r.kickedReasons = ["", "chatroomClosed", "managerKick", "samePlatformKick", "silentlyKick", "blacked"], r.kickedMessages = ["", "聊天室关闭了", "被房主或者管理员踢出", "不允许同一个帐号在多个地方同时登录", "悄悄被踢", "被拉黑了"]
    }, function (e, t, n) {
        "use strict";
        n(101).fn.refreshSocketUrl = function () {
            this.socketUrls = this.socketUrlsBackup.slice(0), this.logger.info("link::refreshSocketUrl"), this.connectToUrl(this.getNextSocketUrl())
        }
    }, function (e, t, n) {
        "use strict";
        n(151);
        var r = n(116);
        n(143)(r), e.exports = r
    }])
});