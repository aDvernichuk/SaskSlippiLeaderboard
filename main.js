/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 24:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "84d99e2076f92e1817ca.png";

/***/ }),

/***/ 74:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b694a8fcee43995f9d8e.svg";

/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = void 0;
var jsx_runtime_1 = __webpack_require__(4848);
var Row_1 = __webpack_require__(8995);
var react_responsive_1 = __webpack_require__(7988);
function Table(_a) {
    var players = _a.players;
    var isSm = react_responsive_1.useMediaQuery({ query: '(min-width: 640px)' });
    var th = function (text) {
        return jsx_runtime_1.jsx("th", __assign({ className: "text-xs md:text-sm font-medium text-white md:px-6 md:py-4 px-3 py-3" }, { children: text }), void 0);
    };
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("table", __assign({ className: "table-fixed text-center" }, { children: [jsx_runtime_1.jsx("thead", __assign({ className: "bg-gray-800" }, { children: jsx_runtime_1.jsxs("tr", { children: [th('Rank'), th('Player'), th('Rating'), th(isSm ? 'Characters' : 'Char'), th('W/L')] }, void 0) }), void 0), players.length > 0 &&
                        jsx_runtime_1.jsx("tbody", { children: players.map(function (p, index) { return jsx_runtime_1.jsx(Row_1.Row, { player: p }, p.displayName); }) }, void 0)] }), void 0), !players.length && jsx_runtime_1.jsx("div", __assign({ role: "status", className: "flex items-center justify-center p-20" }, { children: jsx_runtime_1.jsxs("svg", __assign({ className: "inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx_runtime_1.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }, void 0), jsx_runtime_1.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" }, void 0)] }), void 0) }), void 0)] }, void 0));
}
exports.Table = Table;


/***/ }),

/***/ 269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2822040b37afdf57d6c0.png";

/***/ }),

/***/ 414:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28571e465043a2524d6a.svg";

/***/ }),

/***/ 487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "37da5f0e5061d929f556.png";

/***/ }),

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f605ef22468b0fdc81c.svg";

/***/ }),

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f88e0735dfcdc7a3615.png";

/***/ }),

/***/ 633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ce62b2bc0169afd732e7.png";

/***/ }),

/***/ 831:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRank = exports.RANKS = void 0;
var GrandMaster_svg_1 = __importDefault(__webpack_require__(3998));
var MasterI_svg_1 = __importDefault(__webpack_require__(5405));
var MasterII_svg_1 = __importDefault(__webpack_require__(414));
var MasterIII_svg_1 = __importDefault(__webpack_require__(8219));
var DiamondI_svg_1 = __importDefault(__webpack_require__(855));
var DiamondII_svg_1 = __importDefault(__webpack_require__(588));
var DiamondIII_svg_1 = __importDefault(__webpack_require__(9389));
var PlatinumIII_svg_1 = __importDefault(__webpack_require__(8697));
var PlatinumII_svg_1 = __importDefault(__webpack_require__(2688));
var PlatinumI_svg_1 = __importDefault(__webpack_require__(1299));
var GoldIII_svg_1 = __importDefault(__webpack_require__(1843));
var GoldII_svg_1 = __importDefault(__webpack_require__(6406));
var GoldI_svg_1 = __importDefault(__webpack_require__(9669));
var SilverIII_svg_1 = __importDefault(__webpack_require__(4964));
var SilverII_svg_1 = __importDefault(__webpack_require__(9407));
var SilverI_svg_1 = __importDefault(__webpack_require__(74));
var BronzeIII_svg_1 = __importDefault(__webpack_require__(2393));
var BronzeII_svg_1 = __importDefault(__webpack_require__(8160));
var BronzeI_svg_1 = __importDefault(__webpack_require__(9523));
var None_svg_1 = __importDefault(__webpack_require__(4652));
var Pending_svg_1 = __importDefault(__webpack_require__(4995));
var setCount = function (player) {
    return player.rankedNetplayProfile.wins +
        player.rankedNetplayProfile.losses;
};
var MIN_RANK_SETS = 5;
var NoneRank = /** @class */ (function () {
    function NoneRank() {
        this.name = "None";
        this.iconUrl = None_svg_1.default;
        this.bgClass = "bg-stone-500";
    }
    NoneRank.prototype.isRank = function (player) {
        return setCount(player) === 0;
    };
    return NoneRank;
}());
var PendingRank = /** @class */ (function () {
    function PendingRank() {
        this.name = "Pending";
        this.iconUrl = Pending_svg_1.default;
        this.bgClass = "bg-stone-700";
    }
    PendingRank.prototype.isRank = function (player) {
        var totalSets = setCount(player);
        return 0 < totalSets && totalSets < MIN_RANK_SETS;
    };
    return PendingRank;
}());
var StandardRank = /** @class */ (function () {
    function StandardRank(name, lowerBound, upperBound, bgClass, iconUrl) {
        this.name = name;
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.bgClass = bgClass;
        this.iconUrl = iconUrl;
    }
    StandardRank.prototype.isRank = function (player) {
        if (setCount(player) < MIN_RANK_SETS) {
            return false;
        }
        var rating = Math.floor(100 * player.rankedNetplayProfile.ratingOrdinal) / 100; // ensure rating doesn't fall between two bounds
        return this.lowerBound <= rating && rating <= this.upperBound;
    };
    return StandardRank;
}());
var GrandMaster = /** @class */ (function (_super) {
    __extends(GrandMaster, _super);
    function GrandMaster() {
        return _super.call(this, 'Grandmaster', 2191.75, Infinity, "bg-slate-900", GrandMaster_svg_1.default) || this;
    }
    GrandMaster.prototype.isRank = function (player) {
        var hasRating = _super.prototype.isRank.call(this, player);
        if (!hasRating) {
            return false;
        }
        return player.rankedNetplayProfile.dailyGlobalPlacement !== null
            || player.rankedNetplayProfile.dailyRegionalPlacement !== null;
    };
    return GrandMaster;
}(StandardRank));
var ORANGE_BG = 'bg-orange-900';
var SLATE_BG = 'bg-slate-800';
var YELLOW_BG = 'bg-yellow-900';
var SKY_BG = 'bg-sky-900';
var BLUE_BG = 'bg-blue-900';
var INDIGO_BG = 'bg-indigo-900';
exports.RANKS = [
    new NoneRank(),
    new PendingRank(),
    new StandardRank('Bronze I', 0, 765.42, ORANGE_BG, BronzeI_svg_1.default),
    new StandardRank('Bronze II', 765.43, 913.71, ORANGE_BG, BronzeII_svg_1.default),
    new StandardRank('Bronze III', 913.72, 1054.86, ORANGE_BG, BronzeIII_svg_1.default),
    new StandardRank('Silver I', 1054.87, 1188.87, SLATE_BG, SilverI_svg_1.default),
    new StandardRank('Silver II', 1188.88, 1315.74, SLATE_BG, SilverII_svg_1.default),
    new StandardRank('Silver III', 1315.75, 1435.47, SLATE_BG, SilverIII_svg_1.default),
    new StandardRank('Gold I', 1435.48, 1548.06, YELLOW_BG, GoldI_svg_1.default),
    new StandardRank('Gold II', 1548.07, 1653.51, YELLOW_BG, GoldII_svg_1.default),
    new StandardRank('Gold III', 1653.52, 1751.82, YELLOW_BG, GoldIII_svg_1.default),
    new StandardRank('Platinum I', 1751.83, 1842.99, SKY_BG, PlatinumI_svg_1.default),
    new StandardRank('Platinum II', 1843, 1927.02, SKY_BG, PlatinumII_svg_1.default),
    new StandardRank('Platinum III', 1927.03, 2003.91, SKY_BG, PlatinumIII_svg_1.default),
    new StandardRank('Diamond I', 2003.92, 2073.66, BLUE_BG, DiamondI_svg_1.default),
    new StandardRank('Diamond II', 2073.67, 2136.27, BLUE_BG, DiamondII_svg_1.default),
    new StandardRank('Diamond III', 2136.28, 2191.74, BLUE_BG, DiamondIII_svg_1.default),
    new StandardRank('Master I', 2191.75, 2274.99, INDIGO_BG, MasterI_svg_1.default),
    new StandardRank('Master II', 2275, 2350, INDIGO_BG, MasterII_svg_1.default),
    new StandardRank('Master III', 2350, Infinity, INDIGO_BG, MasterIII_svg_1.default),
    new GrandMaster()
];
function getRank(player) {
    for (var i = exports.RANKS.length - 1; i >= 0; i--) {
        if (exports.RANKS[i].isRank(player)) {
            return exports.RANKS[i];
        }
    }
    return new NoneRank();
}
exports.getRank = getRank;


/***/ }),

/***/ 855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3758158f3ad9a215311e.svg";

/***/ }),

/***/ 1216:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"updated":1764465475592}');

/***/ }),

/***/ 1292:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(4848);
var react_1 = __webpack_require__(6540);
var Table_1 = __webpack_require__(187);
var players_old_json_1 = __importDefault(__webpack_require__(5698));
var players_new_json_1 = __importDefault(__webpack_require__(7701));
var timestamp_json_1 = __importDefault(__webpack_require__(1216));
var dayjs_1 = __importDefault(__webpack_require__(4353));
var relativeTime_1 = __importDefault(__webpack_require__(6279)); // import plugin
var settings = __importStar(__webpack_require__(7576));
var Flag_of_Saskatchewan_svg_1 = __importDefault(__webpack_require__(8954));
dayjs_1.default.extend(relativeTime_1.default);
var setCount = function (player) {
    return player.rankedNetplayProfile.wins +
        player.rankedNetplayProfile.losses;
};
var sortAndPopulatePlayers = function (players) {
    players = players.filter(function (p) { return setCount(p); })
        .concat(players.filter(function (p) { return !setCount(p); }));
    players.forEach(function (player, i) {
        if (setCount(player) > 0) {
            player.rankedNetplayProfile.rank = i + 1;
        }
    });
    return players;
};
function HomePage() {
    var rankedPlayersOld = sortAndPopulatePlayers(players_old_json_1.default);
    var oldPlayersMap = new Map(rankedPlayersOld.map(function (p) { return [p.connectCode.code, p]; }));
    var players = sortAndPopulatePlayers(players_new_json_1.default);
    players.forEach(function (p) {
        var oldData = oldPlayersMap.get(p.connectCode.code);
        if (oldData) {
            p.oldRankedNetplayProfile = oldData.rankedNetplayProfile;
        }
    });
    // continuously update
    var updatedAt = dayjs_1.default(timestamp_json_1.default.updated);
    var _a = __read(react_1.useState(updatedAt.fromNow()), 2), updateDesc = _a[0], setUpdateDesc = _a[1];
    react_1.useEffect(function () {
        var interval = setInterval(function () { return setUpdateDesc(updatedAt.fromNow()); }, 1000 * 60);
        return function () {
            clearInterval(interval);
        };
    }, []);
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-col items-center h-screen p-8" }, { children: [jsx_runtime_1.jsx("img", { className: "h-48", src: Flag_of_Saskatchewan_svg_1.default, alt: "saskatchewan flag" }, void 0), jsx_runtime_1.jsx("h1", __assign({ className: "text-3xl m-4 text-center text-white" }, { children: settings.title }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "p-1 text-gray-300" }, { children: [" Updated ", updateDesc] }), void 0), jsx_runtime_1.jsx(Table_1.Table, { players: players }, void 0), jsx_runtime_1.jsxs("div", __assign({ className: "p-4 text-gray-300 flex flex-col" }, { children: [jsx_runtime_1.jsx("div", { children: "Built by blorppppp & modified by Ketsu" }, void 0), jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("a", __assign({ href: "https://www.buymeacoffee.com/blorppppp", target: "_blank", rel: "noreferrer", className: "text-gray-400 hover:text-indigo-700 mr-2 hover:underline" }, { children: "Buy blorp a coffee!" }), void 0), "\u2615"] }, void 0)] }), void 0)] }), void 0));
}
exports["default"] = HomePage;


/***/ }),

/***/ 1299:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e788a14a6315286f8d41.svg";

/***/ }),

/***/ 1558:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Character = void 0;
var jsx_runtime_1 = __webpack_require__(4848);
var server_1 = __importDefault(__webpack_require__(5848));
var bowser_default_png_1 = __importDefault(__webpack_require__(2510));
var dk_default_png_1 = __importDefault(__webpack_require__(9171));
var doc_default_png_1 = __importDefault(__webpack_require__(8332));
var falco_default_png_1 = __importDefault(__webpack_require__(5373));
var falcon_default_png_1 = __importDefault(__webpack_require__(487));
var fox_default_png_1 = __importDefault(__webpack_require__(609));
var ganon_default_png_1 = __importDefault(__webpack_require__(8583));
var gnw_default_png_1 = __importDefault(__webpack_require__(24));
var ics_default_png_1 = __importDefault(__webpack_require__(2509));
var kirby_default_png_1 = __importDefault(__webpack_require__(6815));
var link_default_png_1 = __importDefault(__webpack_require__(6468));
var luigi_default_png_1 = __importDefault(__webpack_require__(5788));
var mario_default_png_1 = __importDefault(__webpack_require__(7914));
var marth_default_png_1 = __importDefault(__webpack_require__(3258));
var mewtwo_default_png_1 = __importDefault(__webpack_require__(2517));
var ness_default_png_1 = __importDefault(__webpack_require__(8173));
var peach_default_png_1 = __importDefault(__webpack_require__(269));
var pichu_default_png_1 = __importDefault(__webpack_require__(2275));
var pikachu_default_png_1 = __importDefault(__webpack_require__(3011));
var puff_default_png_1 = __importDefault(__webpack_require__(633));
var roy_default_png_1 = __importDefault(__webpack_require__(7556));
var samus_default_png_1 = __importDefault(__webpack_require__(8003));
var sheik_default_png_1 = __importDefault(__webpack_require__(7736));
var yl_default_png_1 = __importDefault(__webpack_require__(3975));
var yoshi_default_png_1 = __importDefault(__webpack_require__(4264));
var zelda_default_png_1 = __importDefault(__webpack_require__(5206));
var unknown_png_1 = __importDefault(__webpack_require__(1674));
var react_circular_progressbar_1 = __webpack_require__(5237);
var react_tooltip_1 = __webpack_require__(9552);
__webpack_require__(6919);
__webpack_require__(4105);
var characterNameToIcon = new Map([
    ['BOWSER', bowser_default_png_1.default],
    ['CAPTAIN_FALCON', falcon_default_png_1.default],
    ['DONKEY_KONG', dk_default_png_1.default],
    ['DR_MARIO', doc_default_png_1.default],
    ['FALCO', falco_default_png_1.default],
    ['FOX', fox_default_png_1.default],
    ['GAME_AND_WATCH', gnw_default_png_1.default],
    ['GANONDORF', ganon_default_png_1.default],
    ['ICE_CLIMBERS', ics_default_png_1.default],
    ['KIRBY', kirby_default_png_1.default],
    ['LINK', link_default_png_1.default],
    ['LUIGI', luigi_default_png_1.default],
    ['MARIO', mario_default_png_1.default],
    ['MARTH', marth_default_png_1.default],
    ['MEWTWO', mewtwo_default_png_1.default],
    ['NESS', ness_default_png_1.default],
    ['PEACH', peach_default_png_1.default],
    ['PICHU', pichu_default_png_1.default],
    ['PIKACHU', pikachu_default_png_1.default],
    ['JIGGLYPUFF', puff_default_png_1.default],
    ['ROY', roy_default_png_1.default],
    ['SAMUS', samus_default_png_1.default],
    ['SHEIK', sheik_default_png_1.default],
    ['YOSHI', yoshi_default_png_1.default],
    ['YOUNG_LINK', yl_default_png_1.default],
    ['ZELDA', zelda_default_png_1.default]
]);
function Character(_a) {
    var _b;
    var id = _a.id, totalGames = _a.totalGames, stats = _a.stats;
    var icon = (_b = characterNameToIcon.get(stats.character)) !== null && _b !== void 0 ? _b : unknown_png_1.default;
    var percentage = 100 * (stats.gameCount / totalGames);
    var charId = stats.character + id;
    var percentString = Number(percentage.toFixed(2)) + "%";
    var tooltip = server_1.default.renderToString(jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("div", { children: [stats.gameCount, " ", stats.gameCount > 1 ? 'games' : 'game'] }, void 0), jsx_runtime_1.jsx("div", { children: percentString }, void 0)] }, void 0));
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("div", __assign({ className: "p-0.5", id: charId, "data-tooltip-html": tooltip }, { children: jsx_runtime_1.jsx(react_circular_progressbar_1.CircularProgressbarWithChildren, __assign({ className: "md:h-12 md:w-12 h-4 w-4", value: percentage, styles: react_circular_progressbar_1.buildStyles({
                        strokeLinecap: 'butt',
                        pathColor: 'rgb(22 163 74)'
                    }) }, { children: jsx_runtime_1.jsx("img", { className: "md:h-8 md:w-8 h-3 w-3", src: icon }, void 0) }), void 0) }), void 0), jsx_runtime_1.jsx(react_tooltip_1.Tooltip, { anchorId: charId }, void 0)] }, void 0));
}
exports.Character = Character;


/***/ }),

/***/ 1674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ad9277f223c05c3376d.png";

/***/ }),

/***/ 1843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "335dd121b2978c869f16.svg";

/***/ }),

/***/ 2275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcd3ad179c93f163adb8.png";

/***/ }),

/***/ 2393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "926dad245cc35e515006.svg";

/***/ }),

/***/ 2509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e4393d93e7a0b677f9e1.png";

/***/ }),

/***/ 2510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "502f9ee7fc954239fa5d.png";

/***/ }),

/***/ 2517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d24e95c72160795553ed.png";

/***/ }),

/***/ 2688:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3ff4dc16ac5e17e9357.svg";

/***/ }),

/***/ 3011:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1af182299d6d49846541.png";

/***/ }),

/***/ 3258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fae5725f43a3a3565d42.png";

/***/ }),

/***/ 3387:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Characters = void 0;
var jsx_runtime_1 = __webpack_require__(4848);
var react_1 = __webpack_require__(6540);
var Character_1 = __webpack_require__(1558);
var react_responsive_1 = __webpack_require__(7988);
var CONDENSED_SIZE = 3;
function Characters(_a) {
    var player = _a.player, totalGames = _a.totalGames;
    var isSm = react_responsive_1.useMediaQuery({ query: '(min-width: 640px)' });
    var _b = __read(react_1.useState(false), 2), expand = _b[0], setExpand = _b[1];
    var codeToId = function (code) {
        var parts = code.split('#');
        return parts[0].toLowerCase() + "-" + parts[1];
    };
    var characters = react_1.useMemo(function () { return (player.rankedNetplayProfile.characters || [])
        .sort(function (a, b) { return b.gameCount - a.gameCount; }); }, [player]);
    var expandChracters = function () {
        setExpand(true);
    };
    var condenseCharacters = function () {
        setExpand(false);
    };
    var condensedView = function () {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [characters.slice(0, CONDENSED_SIZE).map(function (c) {
                    return jsx_runtime_1.jsx(Character_1.Character, { id: codeToId(player.connectCode.code), totalGames: totalGames, stats: c }, c.character);
                }), characters.length > CONDENSED_SIZE &&
                    jsx_runtime_1.jsxs("div", __assign({ className: "md:mx-1 mx-0.5 p-1 rounded-full border-gray-300 md:border-2 border border-dashed md:h-12 md:w-12 h-4 w-4 text-xs flex flex-col items-center justify-center hover:border-solid hover:text-gray-500 hover:border-gray-500", onClick: expandChracters }, { children: [isSm && jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("div", { children: ["+", characters.length - CONDENSED_SIZE] }, void 0), jsx_runtime_1.jsx("div", { children: "more" }, void 0)] }, void 0), !isSm && '+'] }), void 0)] }, void 0);
    };
    var shouldCondense = characters.length > CONDENSED_SIZE + 1;
    var expandedView = function () {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [characters.map(function (c) {
                    return jsx_runtime_1.jsx(Character_1.Character, { id: codeToId(player.connectCode.code), totalGames: totalGames, stats: c }, c.character);
                }), shouldCondense &&
                    jsx_runtime_1.jsxs("div", __assign({ className: "md:mx-1 mx-0.5 p-1 rounded-full border-gray-300 md:border-2 border border-dashed md:h-12 md:w-12 h-4 w-4 text-xs flex flex-col items-center justify-center hover:border-solid hover:text-gray-500 hover:border-gray-500", onClick: condenseCharacters }, { children: [isSm && 'Hide', !isSm && '-'] }), void 0)] }, void 0);
    };
    return jsx_runtime_1.jsxs("div", __assign({ className: "flex flex-wrap items-center justify-center" }, { children: [(expand || !shouldCondense) && expandedView(), !expand && shouldCondense && condensedView()] }), void 0);
}
exports.Characters = Characters;


/***/ }),

/***/ 3900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(4848);
var react_dom_1 = __webpack_require__(961);
var App_1 = __importDefault(__webpack_require__(5802));
__webpack_require__(4703);
react_dom_1.render(jsx_runtime_1.jsx(App_1.default, {}, void 0), document.getElementById('app'));


/***/ }),

/***/ 3975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6675ab1172300086194d.png";

/***/ }),

/***/ 3998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee2c75e98fe1d2f075cb.svg";

/***/ }),

/***/ 4264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28e4d81db80d649c37e7.png";

/***/ }),

/***/ 4652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "89c1471dd8339b016d5b.svg";

/***/ }),

/***/ 4703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9177);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 4964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f055e41201f927063634.svg";

/***/ }),

/***/ 4995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d00d9f8b63cb7f9f28d.svg";

/***/ }),

/***/ 5206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de20007f2debc75e809c.png";

/***/ }),

/***/ 5373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "54b0ee6d2ccbde2c1163.png";

/***/ }),

/***/ 5405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "671b49b542024fc93252.svg";

/***/ }),

/***/ 5698:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"fbUid":"Br59hw7KU3gIPkk7v9W4HDkDQQa2","displayName":"Beezy","connectCode":{"code":"BZF#1","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Br59hw7KU3gIPkk7v9W4HDkDQQa2-season-4","ratingOrdinal":2156.371437965343,"ratingUpdateCount":40,"wins":33,"losses":7,"dailyGlobalPlacement":190,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"MARTH","gameCount":91,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"v51MeAjNDwfos8sI8Z6Ls6siFGM2","displayName":"Lincoln","connectCode":{"code":"SGA#222","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-v51MeAjNDwfos8sI8Z6Ls6siFGM2-season-4","ratingOrdinal":1877.6100789324073,"ratingUpdateCount":88,"wins":43,"losses":45,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":196,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"GPZuUquJmpcpjGijMFsFzUJBuH32","displayName":"Symbol_SK","connectCode":{"code":"SYMB#384","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-GPZuUquJmpcpjGijMFsFzUJBuH32-season-4","ratingOrdinal":1668.6191725065873,"ratingUpdateCount":6,"wins":6,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FALCO","gameCount":14,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Fre9zoJYKvQdwHvKY4b0xy77Arv1","displayName":"TenCommandGrabs","connectCode":{"code":"SWAG#513","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Fre9zoJYKvQdwHvKY4b0xy77Arv1-season-4","ratingOrdinal":1625.2685005516473,"ratingUpdateCount":35,"wins":18,"losses":17,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"ICE_CLIMBERS","gameCount":76,"__typename":"CharacterUsage"},{"character":"FOX","gameCount":4,"__typename":"CharacterUsage"},{"character":"CAPTAIN_FALCON","gameCount":1,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Mu7SW8d5SJePNmUlgftMkNoN93c2","displayName":"Zyn Naghmi","connectCode":{"code":"GWK#466","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Mu7SW8d5SJePNmUlgftMkNoN93c2-season-4","ratingOrdinal":1574.9567456365735,"ratingUpdateCount":35,"wins":19,"losses":16,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"MARTH","gameCount":72,"__typename":"CharacterUsage"},{"character":"FOX","gameCount":8,"__typename":"CharacterUsage"},{"character":"FALCO","gameCount":1,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"m97xOH9yh6NT7oe91Gy9ZRhAxq72","displayName":"double shine","connectCode":{"code":"CELL#0","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-m97xOH9yh6NT7oe91Gy9ZRhAxq72-season-4","ratingOrdinal":1508.8476320761847,"ratingUpdateCount":19,"wins":11,"losses":8,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":32,"__typename":"CharacterUsage"},{"character":"SHEIK","gameCount":11,"__typename":"CharacterUsage"},{"character":"FALCO","gameCount":2,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"j7xj9NrEXchrutBI4QEaOpo2dtl1","displayName":"BonyEaredAssfsh","connectCode":{"code":"SNOW#141","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-j7xj9NrEXchrutBI4QEaOpo2dtl1-season-4","ratingOrdinal":1443.1057654172394,"ratingUpdateCount":105,"wins":49,"losses":56,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"MARIO","gameCount":242,"__typename":"CharacterUsage"},{"character":"GAME_AND_WATCH","gameCount":4,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"8Ou9M9nOyzW46zK7c6GjbJNw91n1","displayName":"clive trotter","connectCode":{"code":"OK#160","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-8Ou9M9nOyzW46zK7c6GjbJNw91n1-season-4","ratingOrdinal":1194.7398922465832,"ratingUpdateCount":15,"wins":6,"losses":9,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":35,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"KaLGTHm7WQMUGHw7uFOtPJtXJiz1","displayName":"Level 10 Shovel","connectCode":{"code":"LONE#872","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-KaLGTHm7WQMUGHw7uFOtPJtXJiz1-season-4","ratingOrdinal":1140.9351469052285,"ratingUpdateCount":7,"wins":3,"losses":4,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"PEACH","gameCount":15,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"dywB8BYrn5RzTwVCgVcU6e9R4e23","displayName":"Pockets Deep","connectCode":{"code":"SK#06","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-dywB8BYrn5RzTwVCgVcU6e9R4e23-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"UE2swLAVVvekmlMaY88Wf6yvpmm1","displayName":"GamerZach","connectCode":{"code":"GZAC#414","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-UE2swLAVVvekmlMaY88Wf6yvpmm1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"PVPHf6tEjbM1uxiCEf45woJVwxD3","displayName":"NoplS","connectCode":{"code":"NOPE#475","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-PVPHf6tEjbM1uxiCEf45woJVwxD3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"P3gY7KCBsPOzCr4UMGEJxMKXzGJ2","displayName":"Wafflejunkie","connectCode":{"code":"XD#946","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-P3gY7KCBsPOzCr4UMGEJxMKXzGJ2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"qFgtciEaXuUqX9vjhNG1BTyNpfC2","displayName":"KvSS4E2","connectCode":{"code":"JESS#405","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-qFgtciEaXuUqX9vjhNG1BTyNpfC2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"sywgp37VdFQsmFagTNSpOCbuX1A3","displayName":"Shang Tsung","connectCode":{"code":"LEVI#666","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-sywgp37VdFQsmFagTNSpOCbuX1A3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"VyR2XxId9jTloxkXmdhrN9hXS043","displayName":"Gawr Gura","connectCode":{"code":"UUUH#325","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-VyR2XxId9jTloxkXmdhrN9hXS043-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"0h6GOnLFMHMUrC5vqQ3X42rYxZu2","displayName":"Kair","connectCode":{"code":"KAIR#152","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-0h6GOnLFMHMUrC5vqQ3X42rYxZu2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"rFQgRzBRPgUp2pynVJgavGL4gtU2","displayName":"Berserker Soul","connectCode":{"code":"MUX#711","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-rFQgRzBRPgUp2pynVJgavGL4gtU2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"dfmICDDtFRREAi9ukqyKg4DuBiG3","displayName":"Qwexe","connectCode":{"code":"PAUL#101","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-dfmICDDtFRREAi9ukqyKg4DuBiG3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"apAnsrnHiHXGrBkJNC8HmWrcZjk1","displayName":"denm","connectCode":{"code":"DENM#907","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-apAnsrnHiHXGrBkJNC8HmWrcZjk1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"CVhwDvS9h6aJBu4Gqd2Su4mDzNe2","displayName":"Thomas7644","connectCode":{"code":"TUBA#262","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-CVhwDvS9h6aJBu4Gqd2Su4mDzNe2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"5B2nMHqqtvOsPxwnGIwb8R1yFGm2","displayName":"Mr. Goonicide","connectCode":{"code":"SLEE#871","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-5B2nMHqqtvOsPxwnGIwb8R1yFGm2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Pq9ecliC1yecz1YkwE3tpPbU1vE3","displayName":"missinglinc","connectCode":{"code":"MISS#4","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Pq9ecliC1yecz1YkwE3tpPbU1vE3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"ypOYt6dQoQRnwY84gLUPv1WfBRn2","displayName":"NadiA","connectCode":{"code":"LV#201","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-ypOYt6dQoQRnwY84gLUPv1WfBRn2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"c2uWhTlwFISwn2VT2ebDXAnPM0t2","displayName":"Chris","connectCode":{"code":"FOX#509","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-c2uWhTlwFISwn2VT2ebDXAnPM0t2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"T5BRTvHe81YyQmeKvx7STfr1Vc32","displayName":"butch lite","connectCode":{"code":"AEDA#395","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-T5BRTvHe81YyQmeKvx7STfr1Vc32-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"rPdW5GbzhqMiIMZfAo5Eul0Bff92","displayName":"A Dreamer","connectCode":{"code":"BAYDA#77","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-rPdW5GbzhqMiIMZfAo5Eul0Bff92-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"iY8oAO4P2RXlSGLddDzykXdHKlk1","displayName":"Bentatek","connectCode":{"code":"BTEK#426","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-iY8oAO4P2RXlSGLddDzykXdHKlk1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"wvbBUdfjeKcveLHdRjjJYUqmImB3","displayName":"Mw2_mAsTeR","connectCode":{"code":"SUGG#849","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-wvbBUdfjeKcveLHdRjjJYUqmImB3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"ozaEMjNdZXOUt4Of7GsCYgAv7Hk1","displayName":"CandyChicken","connectCode":{"code":"CNDY#347","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-ozaEMjNdZXOUt4Of7GsCYgAv7Hk1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"iWPWlJoS2jR7CvabgbSMaTwR0qS2","displayName":"Ezekiel 23:20","connectCode":{"code":"CROW#730","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-iWPWlJoS2jR7CvabgbSMaTwR0qS2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"7Sq7OTRestUXUHEgz2LeBHy38K53","displayName":"Newman","connectCode":{"code":"TWOP#861","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-7Sq7OTRestUXUHEgz2LeBHy38K53-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"zKUaBsGdaoaoIAkVZwAGj6wOsYu1","displayName":"smasher","connectCode":{"code":"PLSH#815","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-zKUaBsGdaoaoIAkVZwAGj6wOsYu1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"aQy2Drtgn3cVrF5AHGhRQquTt0B3","displayName":"ShortHoppe","connectCode":{"code":"DUCK#519","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-aQy2Drtgn3cVrF5AHGhRQquTt0B3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"rXdth9DS6UTbgOeT2UCLkSZJKZf2","displayName":"LBsukzy","connectCode":{"code":"LBSU#113","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-rXdth9DS6UTbgOeT2UCLkSZJKZf2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"vc9QbbDn8cYDuIbFQBABYQ9AX3l2","displayName":"Kenny","connectCode":{"code":"PABS#296","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-vc9QbbDn8cYDuIbFQBABYQ9AX3l2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"5npkyk27ngQBX7CpxGIrYOr5tvh2","displayName":"LoADzzA","connectCode":{"code":"JKE#929","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-5npkyk27ngQBX7CpxGIrYOr5tvh2-season-4","ratingOrdinal":1095.5954732886296,"ratingUpdateCount":1,"wins":0,"losses":1,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FALCO","gameCount":3,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Y10bhEp0V5d4mTsDoT7oLPmcpnY2","displayName":"z0j","connectCode":{"code":"ZOJ#107","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Y10bhEp0V5d4mTsDoT7oLPmcpnY2-season-4","ratingOrdinal":1070.5465402822401,"ratingUpdateCount":6,"wins":2,"losses":4,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FALCO","gameCount":2,"__typename":"CharacterUsage"},{"character":"YOSHI","gameCount":3,"__typename":"CharacterUsage"},{"character":"FOX","gameCount":10,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"bQQtukA4xCcPLeyMA3wgVE0S5eJ2","displayName":"down-B Enjoyer","connectCode":{"code":"KING#406","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-bQQtukA4xCcPLeyMA3wgVE0S5eJ2-season-4","ratingOrdinal":1016.5141889837093,"ratingUpdateCount":2,"wins":0,"losses":2,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"JIGGLYPUFF","gameCount":5,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"7HQ4ri7LD4Oe1l4TAegVvnoqJT92","displayName":"THESYRUPKIDD","connectCode":{"code":"KIDD#880","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-7HQ4ri7LD4Oe1l4TAegVvnoqJT92-season-4","ratingOrdinal":963.2975359006468,"ratingUpdateCount":3,"wins":0,"losses":3,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":8,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"}]');

/***/ }),

/***/ 5788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47ba180cbc681f29695e.png";

/***/ }),

/***/ 5802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(4848);
var react_router_dom_1 = __webpack_require__(675);
var HomePage_1 = __importDefault(__webpack_require__(1292));
var settings_1 = __importDefault(__webpack_require__(7576));
function App() {
    return (jsx_runtime_1.jsx(react_router_dom_1.HashRouter, __assign({ basename: settings_1.default.repoPath }, { children: jsx_runtime_1.jsx(react_router_dom_1.Switch, { children: jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/", component: HomePage_1.default }, void 0) }, void 0) }), void 0));
}
exports["default"] = App;


/***/ }),

/***/ 6406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "010eefcf4ef6535f0573.svg";

/***/ }),

/***/ 6468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9a6603630765449bb95.png";

/***/ }),

/***/ 6815:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "35faf9ddaee973feecbb.png";

/***/ }),

/***/ 7556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f14b610c4869f6acc126.png";

/***/ }),

/***/ 7576:
/***/ ((module) => {

module.exports = {
  // Base application title used in document.title
  title: 'Saskatchewan Ranked Slippi Leaderboard',

  // use cname option to add CNAME file to webpack build
  // CNAME file allows to use custom domain names with gh-pages, example:
  // cname: 'omatsuri.app'
  cname: null,

  // add repo path for username.github.io/repoPath for react router to recognize paths,
  // use only when deployed to github.io, leave as null for deployments with custom domains
  repoPath: 'https://advernichuk.github.io/SaskSlippiLeaderboard/',

  // Google sheets ID for player connect codes.
  // https://docs.google.com/spreadsheets/d/[YOUR ID]
  spreadsheetID: '1DPIFD0RUA3yjruregmFUbUJ7ccdOjVB2LBp0goHvL-A',
};


/***/ }),

/***/ 7701:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"fbUid":"Br59hw7KU3gIPkk7v9W4HDkDQQa2","displayName":"Beezy","connectCode":{"code":"BZF#1","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Br59hw7KU3gIPkk7v9W4HDkDQQa2-season-4","ratingOrdinal":2156.371437965343,"ratingUpdateCount":40,"wins":33,"losses":7,"dailyGlobalPlacement":190,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"MARTH","gameCount":91,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"v51MeAjNDwfos8sI8Z6Ls6siFGM2","displayName":"Lincoln","connectCode":{"code":"SGA#222","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-v51MeAjNDwfos8sI8Z6Ls6siFGM2-season-4","ratingOrdinal":1877.6100789324073,"ratingUpdateCount":88,"wins":43,"losses":45,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":196,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"GPZuUquJmpcpjGijMFsFzUJBuH32","displayName":"Symbol_SK","connectCode":{"code":"SYMB#384","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-GPZuUquJmpcpjGijMFsFzUJBuH32-season-4","ratingOrdinal":1668.6191725065873,"ratingUpdateCount":6,"wins":6,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FALCO","gameCount":14,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Fre9zoJYKvQdwHvKY4b0xy77Arv1","displayName":"TenCommandGrabs","connectCode":{"code":"SWAG#513","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Fre9zoJYKvQdwHvKY4b0xy77Arv1-season-4","ratingOrdinal":1625.2685005516473,"ratingUpdateCount":35,"wins":18,"losses":17,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"ICE_CLIMBERS","gameCount":76,"__typename":"CharacterUsage"},{"character":"FOX","gameCount":4,"__typename":"CharacterUsage"},{"character":"CAPTAIN_FALCON","gameCount":1,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Mu7SW8d5SJePNmUlgftMkNoN93c2","displayName":"Zyn Naghmi","connectCode":{"code":"GWK#466","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Mu7SW8d5SJePNmUlgftMkNoN93c2-season-4","ratingOrdinal":1574.9567456365735,"ratingUpdateCount":35,"wins":19,"losses":16,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"MARTH","gameCount":72,"__typename":"CharacterUsage"},{"character":"FOX","gameCount":8,"__typename":"CharacterUsage"},{"character":"FALCO","gameCount":1,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"m97xOH9yh6NT7oe91Gy9ZRhAxq72","displayName":"double shine","connectCode":{"code":"CELL#0","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-m97xOH9yh6NT7oe91Gy9ZRhAxq72-season-4","ratingOrdinal":1508.8476320761847,"ratingUpdateCount":19,"wins":11,"losses":8,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":32,"__typename":"CharacterUsage"},{"character":"SHEIK","gameCount":11,"__typename":"CharacterUsage"},{"character":"FALCO","gameCount":2,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"j7xj9NrEXchrutBI4QEaOpo2dtl1","displayName":"BonyEaredAssfsh","connectCode":{"code":"SNOW#141","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-j7xj9NrEXchrutBI4QEaOpo2dtl1-season-4","ratingOrdinal":1443.1057654172394,"ratingUpdateCount":105,"wins":49,"losses":56,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"MARIO","gameCount":242,"__typename":"CharacterUsage"},{"character":"GAME_AND_WATCH","gameCount":4,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"8Ou9M9nOyzW46zK7c6GjbJNw91n1","displayName":"clive trotter","connectCode":{"code":"OK#160","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-8Ou9M9nOyzW46zK7c6GjbJNw91n1-season-4","ratingOrdinal":1194.7398922465832,"ratingUpdateCount":15,"wins":6,"losses":9,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":35,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"KaLGTHm7WQMUGHw7uFOtPJtXJiz1","displayName":"Level 10 Shovel","connectCode":{"code":"LONE#872","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-KaLGTHm7WQMUGHw7uFOtPJtXJiz1-season-4","ratingOrdinal":1140.9351469052285,"ratingUpdateCount":7,"wins":3,"losses":4,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"PEACH","gameCount":15,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"dywB8BYrn5RzTwVCgVcU6e9R4e23","displayName":"Pockets Deep","connectCode":{"code":"SK#06","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-dywB8BYrn5RzTwVCgVcU6e9R4e23-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"UE2swLAVVvekmlMaY88Wf6yvpmm1","displayName":"GamerZach","connectCode":{"code":"GZAC#414","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-UE2swLAVVvekmlMaY88Wf6yvpmm1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"PVPHf6tEjbM1uxiCEf45woJVwxD3","displayName":"NoplS","connectCode":{"code":"NOPE#475","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-PVPHf6tEjbM1uxiCEf45woJVwxD3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"P3gY7KCBsPOzCr4UMGEJxMKXzGJ2","displayName":"Wafflejunkie","connectCode":{"code":"XD#946","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-P3gY7KCBsPOzCr4UMGEJxMKXzGJ2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"qFgtciEaXuUqX9vjhNG1BTyNpfC2","displayName":"KvSS4E2","connectCode":{"code":"JESS#405","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-qFgtciEaXuUqX9vjhNG1BTyNpfC2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"sywgp37VdFQsmFagTNSpOCbuX1A3","displayName":"Shang Tsung","connectCode":{"code":"LEVI#666","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-sywgp37VdFQsmFagTNSpOCbuX1A3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"VyR2XxId9jTloxkXmdhrN9hXS043","displayName":"Gawr Gura","connectCode":{"code":"UUUH#325","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-VyR2XxId9jTloxkXmdhrN9hXS043-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"0h6GOnLFMHMUrC5vqQ3X42rYxZu2","displayName":"Kair","connectCode":{"code":"KAIR#152","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-0h6GOnLFMHMUrC5vqQ3X42rYxZu2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"rFQgRzBRPgUp2pynVJgavGL4gtU2","displayName":"Berserker Soul","connectCode":{"code":"MUX#711","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-rFQgRzBRPgUp2pynVJgavGL4gtU2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"dfmICDDtFRREAi9ukqyKg4DuBiG3","displayName":"Qwexe","connectCode":{"code":"PAUL#101","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-dfmICDDtFRREAi9ukqyKg4DuBiG3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"apAnsrnHiHXGrBkJNC8HmWrcZjk1","displayName":"denm","connectCode":{"code":"DENM#907","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-apAnsrnHiHXGrBkJNC8HmWrcZjk1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"CVhwDvS9h6aJBu4Gqd2Su4mDzNe2","displayName":"Thomas7644","connectCode":{"code":"TUBA#262","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-CVhwDvS9h6aJBu4Gqd2Su4mDzNe2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"5B2nMHqqtvOsPxwnGIwb8R1yFGm2","displayName":"Mr. Goonicide","connectCode":{"code":"SLEE#871","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-5B2nMHqqtvOsPxwnGIwb8R1yFGm2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Pq9ecliC1yecz1YkwE3tpPbU1vE3","displayName":"missinglinc","connectCode":{"code":"MISS#4","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Pq9ecliC1yecz1YkwE3tpPbU1vE3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"ypOYt6dQoQRnwY84gLUPv1WfBRn2","displayName":"NadiA","connectCode":{"code":"LV#201","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-ypOYt6dQoQRnwY84gLUPv1WfBRn2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"c2uWhTlwFISwn2VT2ebDXAnPM0t2","displayName":"Chris","connectCode":{"code":"FOX#509","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-c2uWhTlwFISwn2VT2ebDXAnPM0t2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"T5BRTvHe81YyQmeKvx7STfr1Vc32","displayName":"butch lite","connectCode":{"code":"AEDA#395","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-T5BRTvHe81YyQmeKvx7STfr1Vc32-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"rPdW5GbzhqMiIMZfAo5Eul0Bff92","displayName":"A Dreamer","connectCode":{"code":"BAYDA#77","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-rPdW5GbzhqMiIMZfAo5Eul0Bff92-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"iY8oAO4P2RXlSGLddDzykXdHKlk1","displayName":"Bentatek","connectCode":{"code":"BTEK#426","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-iY8oAO4P2RXlSGLddDzykXdHKlk1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"wvbBUdfjeKcveLHdRjjJYUqmImB3","displayName":"Mw2_mAsTeR","connectCode":{"code":"SUGG#849","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-wvbBUdfjeKcveLHdRjjJYUqmImB3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"ozaEMjNdZXOUt4Of7GsCYgAv7Hk1","displayName":"CandyChicken","connectCode":{"code":"CNDY#347","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-ozaEMjNdZXOUt4Of7GsCYgAv7Hk1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"iWPWlJoS2jR7CvabgbSMaTwR0qS2","displayName":"Ezekiel 23:20","connectCode":{"code":"CROW#730","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-iWPWlJoS2jR7CvabgbSMaTwR0qS2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"7Sq7OTRestUXUHEgz2LeBHy38K53","displayName":"Newman","connectCode":{"code":"TWOP#861","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-7Sq7OTRestUXUHEgz2LeBHy38K53-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"zKUaBsGdaoaoIAkVZwAGj6wOsYu1","displayName":"smasher","connectCode":{"code":"PLSH#815","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-zKUaBsGdaoaoIAkVZwAGj6wOsYu1-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"aQy2Drtgn3cVrF5AHGhRQquTt0B3","displayName":"ShortHoppe","connectCode":{"code":"DUCK#519","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-aQy2Drtgn3cVrF5AHGhRQquTt0B3-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"rXdth9DS6UTbgOeT2UCLkSZJKZf2","displayName":"LBsukzy","connectCode":{"code":"LBSU#113","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-rXdth9DS6UTbgOeT2UCLkSZJKZf2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"vc9QbbDn8cYDuIbFQBABYQ9AX3l2","displayName":"Kenny","connectCode":{"code":"PABS#296","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-vc9QbbDn8cYDuIbFQBABYQ9AX3l2-season-4","ratingOrdinal":1100,"ratingUpdateCount":0,"wins":0,"losses":0,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":null,"characters":[],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"5npkyk27ngQBX7CpxGIrYOr5tvh2","displayName":"LoADzzA","connectCode":{"code":"JKE#929","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-5npkyk27ngQBX7CpxGIrYOr5tvh2-season-4","ratingOrdinal":1095.5954732886296,"ratingUpdateCount":1,"wins":0,"losses":1,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FALCO","gameCount":3,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"Y10bhEp0V5d4mTsDoT7oLPmcpnY2","displayName":"z0j","connectCode":{"code":"ZOJ#107","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-Y10bhEp0V5d4mTsDoT7oLPmcpnY2-season-4","ratingOrdinal":1070.5465402822401,"ratingUpdateCount":6,"wins":2,"losses":4,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FALCO","gameCount":2,"__typename":"CharacterUsage"},{"character":"YOSHI","gameCount":3,"__typename":"CharacterUsage"},{"character":"FOX","gameCount":10,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"bQQtukA4xCcPLeyMA3wgVE0S5eJ2","displayName":"down-B Enjoyer","connectCode":{"code":"KING#406","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-bQQtukA4xCcPLeyMA3wgVE0S5eJ2-season-4","ratingOrdinal":1016.5141889837093,"ratingUpdateCount":2,"wins":0,"losses":2,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"JIGGLYPUFF","gameCount":5,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"},{"fbUid":"7HQ4ri7LD4Oe1l4TAegVvnoqJT92","displayName":"THESYRUPKIDD","connectCode":{"code":"KIDD#880","__typename":"ConnectCode"},"rankedNetplayProfile":{"id":"RANKED_SINGLES-7HQ4ri7LD4Oe1l4TAegVvnoqJT92-season-4","ratingOrdinal":963.2975359006468,"ratingUpdateCount":3,"wins":0,"losses":3,"dailyGlobalPlacement":null,"dailyRegionalPlacement":null,"continent":"NORTH_AMERICA","characters":[{"character":"FOX","gameCount":8,"__typename":"CharacterUsage"}],"__typename":"NetplayProfile"},"__typename":"User"}]');

/***/ }),

/***/ 7736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b82980a4f391a232a197.png";

/***/ }),

/***/ 7914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f41e46f7b21a0128b631.png";

/***/ }),

/***/ 8003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ae8758803ad71d740ea.png";

/***/ }),

/***/ 8160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca1b9f3828159e0d2c14.svg";

/***/ }),

/***/ 8173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e9e399814559031e649b.png";

/***/ }),

/***/ 8219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5075fd077bf77bfa6c59.svg";

/***/ }),

/***/ 8332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "505e19f69cebc2b91986.png";

/***/ }),

/***/ 8583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae73ee1821a4b163ebb1.png";

/***/ }),

/***/ 8697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9dbea1040fee6c9d2501.svg";

/***/ }),

/***/ 8954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b5c634134e12162df71.svg";

/***/ }),

/***/ 8995:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Row = void 0;
var jsx_runtime_1 = __webpack_require__(4848);
var ranks_1 = __webpack_require__(831);
var Characters_1 = __webpack_require__(3387);
function Row(_a) {
    var _b, _c;
    var player = _a.player;
    var codeToId = function (code) {
        var parts = code.split('#');
        return parts[0].toLowerCase() + "-" + parts[1];
    };
    var codeToUrlSlug = function (code) {
        return "https://slippi.gg/user/" + codeToId(code);
    };
    var changeIndicator = function (change, indicators) {
        return jsx_runtime_1.jsxs("span", __assign({ className: "px-1 md:text-sm text-xs " + (change > 0 ? 'text-green-500' : 'text-red-500') }, { children: [change > 0 ? indicators[0] : indicators[1], Math.abs(change)] }), void 0);
    };
    var changeArrow = function (change) {
        return changeIndicator(change, ['▲ ', '▼ ']);
    };
    var changePlusMinus = function (change) {
        return changeIndicator(change, ['+', '-']);
    };
    var getRankChange = function (player) {
        if (!player.oldRankedNetplayProfile || !player.oldRankedNetplayProfile.rank) {
            return null;
        }
        return player.oldRankedNetplayProfile.rank - player.rankedNetplayProfile.rank;
    };
    var getRatingChange = function (player) {
        if (!player.oldRankedNetplayProfile || !player.oldRankedNetplayProfile.ratingOrdinal) {
            return null;
        }
        return Math.floor(player.rankedNetplayProfile.ratingOrdinal - player.oldRankedNetplayProfile.ratingOrdinal);
    };
    var playerRank = ranks_1.getRank(player);
    var isActive = playerRank.name !== 'None';
    var totalSets = player.rankedNetplayProfile.wins + player.rankedNetplayProfile.losses;
    var totalGames = (player.rankedNetplayProfile.characters || []).reduce(function (acc, val) { return acc + val.gameCount; }, 0);
    var rankChange = getRankChange(player);
    var ratingChange = getRatingChange(player);
    return (jsx_runtime_1.jsxs("tr", __assign({ className: playerRank.bgClass + " border-separate border-spacing-2 border-b-2 border-gray-600" }, { children: [jsx_runtime_1.jsxs("td", __assign({ className: "md:text-2xl text-gray-300 md:px-6 md:py-4 md:p-1 whitespace-nowrap" }, { children: [jsx_runtime_1.jsx("div", { children: isActive && "#" + player.rankedNetplayProfile.rank }, void 0), Boolean(rankChange) && changeArrow(rankChange), " "] }), void 0), jsx_runtime_1.jsxs("td", __assign({ className: "text-gray-100 md:px-6 md:py-4 p-1 whitespace-nowrap text-center overflow-hidden md:max-w-full max-w-[7rem] text-elipses" }, { children: [jsx_runtime_1.jsx("a", __assign({ className: "md:text-xl text-sm max-w-xs text-gray-300 hover:text-gray-500 hover:underline", href: codeToUrlSlug(player.connectCode.code) }, { children: player.displayName }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "text-gray-300 text-xs" }, { children: player.connectCode.code }), void 0)] }), void 0), jsx_runtime_1.jsxs("td", __assign({ className: "md:text-xl text-sm text-gray-900 md:px-6 md:py-4 p-1 whitespace-nowrap text-center" }, { children: [playerRank.iconUrl && jsx_runtime_1.jsx("div", __assign({ className: "flex items-center justify-center" }, { children: jsx_runtime_1.jsx("img", { className: "md:h-10 md:w-10 h-6 w-6 drop-shadow", src: playerRank.iconUrl }, void 0) }), void 0), jsx_runtime_1.jsx("div", __assign({ className: "md:text-lg text-xs max-w-xs text-gray-300 uppercase" }, { children: playerRank.name }), void 0), jsx_runtime_1.jsxs("div", __assign({ className: "text-gray-300 md:text-sm text-xs" }, { children: [isActive && Math.floor(player.rankedNetplayProfile.ratingOrdinal), isActive && Boolean(ratingChange) && changePlusMinus(ratingChange)] }), void 0)] }), void 0), jsx_runtime_1.jsx("td", __assign({ className: "md:text-sm text-xs text-gray-300 md:px-6 md:py-4 py-1  md:max-w-[18rem] max-w-[3rem]" }, { children: jsx_runtime_1.jsx(Characters_1.Characters, { player: player, totalGames: totalGames }, void 0) }), void 0), jsx_runtime_1.jsx("td", __assign({ className: "md:text-xl text-gray-300 text-sm md:px-6 md:py-4 md:p-1 whitespace-nowrap" }, { children: Boolean(totalGames) && jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("span", __assign({ className: "text-green-500" }, { children: (_b = player.rankedNetplayProfile.wins) !== null && _b !== void 0 ? _b : 0 }), void 0), jsx_runtime_1.jsx("span", __assign({ className: "md:p-1" }, { children: "/" }), void 0), jsx_runtime_1.jsx("span", __assign({ className: "text-red-500" }, { children: (_c = player.rankedNetplayProfile.losses) !== null && _c !== void 0 ? _c : 0 }), void 0)] }, void 0) }), void 0)] }), void 0));
}
exports.Row = Row;


/***/ }),

/***/ 9171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dae67cf63a8a040aec29.png";

/***/ }),

/***/ 9177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.m-4 {\n  margin: 1rem;\n}.mx-0\\.5 {\n  margin-left: 0.125rem;\n  margin-right: 0.125rem;\n}.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}.mr-2 {\n  margin-right: 0.5rem;\n}.inline {\n  display: inline;\n}.flex {\n  display: flex;\n}.table {\n  display: table;\n}.h-4 {\n  height: 1rem;\n}.h-3 {\n  height: 0.75rem;\n}.h-6 {\n  height: 1.5rem;\n}.h-8 {\n  height: 2rem;\n}.h-screen {\n  height: 100vh;\n}.h-48 {\n  height: 12rem;\n}.w-4 {\n  width: 1rem;\n}.w-3 {\n  width: 0.75rem;\n}.w-6 {\n  width: 1.5rem;\n}.w-8 {\n  width: 2rem;\n}.max-w-\\[7rem\\] {\n  max-width: 7rem;\n}.max-w-xs {\n  max-width: 20rem;\n}.max-w-\\[3rem\\] {\n  max-width: 3rem;\n}.table-fixed {\n  table-layout: fixed;\n}.border-separate {\n  border-collapse: separate;\n}.border-spacing-2 {\n  --tw-border-spacing-x: 0.5rem;\n  --tw-border-spacing-y: 0.5rem;\n  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);\n}@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}.animate-spin {\n  animation: spin 1s linear infinite;\n}.flex-col {\n  flex-direction: column;\n}.flex-wrap {\n  flex-wrap: wrap;\n}.items-center {\n  align-items: center;\n}.justify-center {\n  justify-content: center;\n}.overflow-hidden {\n  overflow: hidden;\n}.whitespace-nowrap {\n  white-space: nowrap;\n}.rounded-full {\n  border-radius: 9999px;\n}.border {\n  border-width: 1px;\n}.border-b-2 {\n  border-bottom-width: 2px;\n}.border-dashed {\n  border-style: dashed;\n}.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}.border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}.bg-stone-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(120 113 108 / var(--tw-bg-opacity));\n}.bg-stone-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(68 64 60 / var(--tw-bg-opacity));\n}.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}.bg-orange-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(124 45 18 / var(--tw-bg-opacity));\n}.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}.bg-yellow-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(113 63 18 / var(--tw-bg-opacity));\n}.bg-sky-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 74 110 / var(--tw-bg-opacity));\n}.bg-blue-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 58 138 / var(--tw-bg-opacity));\n}.bg-indigo-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(49 46 129 / var(--tw-bg-opacity));\n}.fill-gray-600 {\n  fill: #4b5563;\n}.p-0\\.5 {\n  padding: 0.125rem;\n}.p-0 {\n  padding: 0px;\n}.p-1 {\n  padding: 0.25rem;\n}.p-20 {\n  padding: 5rem;\n}.p-8 {\n  padding: 2rem;\n}.p-4 {\n  padding: 1rem;\n}.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}.text-center {\n  text-align: center;\n}.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}.font-medium {\n  font-weight: 500;\n}.uppercase {\n  text-transform: uppercase;\n}.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.hover\\:border-solid:hover {\n  border-style: solid;\n}.hover\\:border-gray-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}.hover\\:text-gray-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}.hover\\:text-indigo-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(67 56 202 / var(--tw-text-opacity));\n}.hover\\:underline:hover {\n  text-decoration-line: underline;\n}@media (prefers-color-scheme: dark) {\n\n  .dark\\:fill-gray-300 {\n    fill: #d1d5db;\n  }\n\n  .dark\\:text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n}@media (min-width: 768px) {\n\n  .md\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n\n  .md\\:h-12 {\n    height: 3rem;\n  }\n\n  .md\\:h-8 {\n    height: 2rem;\n  }\n\n  .md\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .md\\:w-12 {\n    width: 3rem;\n  }\n\n  .md\\:w-8 {\n    width: 2rem;\n  }\n\n  .md\\:w-10 {\n    width: 2.5rem;\n  }\n\n  .md\\:max-w-full {\n    max-width: 100%;\n  }\n\n  .md\\:max-w-\\[18rem\\] {\n    max-width: 18rem;\n  }\n\n  .md\\:border-2 {\n    border-width: 2px;\n  }\n\n  .md\\:p-1 {\n    padding: 0.25rem;\n  }\n\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .md\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb1783af36e8a03b5ecd.svg";

/***/ }),

/***/ 9407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80d78884f7e217605cec.svg";

/***/ }),

/***/ 9523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f4a5615366a7162c5cbe.svg";

/***/ }),

/***/ 9669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbf30bb06579441db83a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://advernichuk.github.io/SaskSlippiLeaderboard/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_pages_boilerplate"] = self["webpackChunkreact_pages_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [213], () => (__webpack_require__(3900)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;