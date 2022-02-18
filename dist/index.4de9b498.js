// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dRf9z":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4pp4s":[function(require,module,exports) {
var _variablesJs = require("./generalFunctions/variables.js");
var _renderingJs = require("./buildingHTML/rendering.js");
var _styleChangesJs = require("./generalFunctions/styleChanges.js");
var _userFormsHandlersJs = require("./eventHandlers/userFormsHandlers.js");
var _userListHandlersJs = require("./eventHandlers/userListHandlers.js");
var _userDetailsHandlersJs = require("./eventHandlers/userDetailsHandlers.js");
var _mutualAndGeneralHandlersJs = require("./eventHandlers/mutualAndGeneralHandlers.js");
var _showingUserDataJs = require("./users/showingUserData.js");
var _generalJs = require("./generalFunctions/general.js");
_variablesJs.showUsers.addEventListener("click", function() {
    // usersList.innerHTML = " ";
    _generalJs.clearElement(_variablesJs.usersList);
    _generalJs.checkPostHeader();
    _styleChangesJs.addHide(_variablesJs.helloMessageSection);
    _showingUserDataJs.showUserList();
    _styleChangesJs.removeHide(_variablesJs.userListSection);
    _styleChangesJs.removeHide(_variablesJs.usersList);
    _styleChangesJs.addHide(_variablesJs.userForms);
    _styleChangesJs.addHide(_variablesJs.postList);
    _styleChangesJs.addHide(_variablesJs.detailsSection);
    _styleChangesJs.addHide(_variablesJs.detailsContainer);
    _generalJs.clearElement(_variablesJs.userForms);
    _generalJs.clearElement(_variablesJs.userDetails);
    _generalJs.clearElement(_variablesJs.postList);
});
_variablesJs.createUser.addEventListener("click", function() {
    _generalJs.clearElement(_variablesJs.userForms);
    _styleChangesJs.addHide(_variablesJs.detailsSection);
    _styleChangesJs.addHide(_variablesJs.detailsContainer);
    _styleChangesJs.addHide(_variablesJs.helloMessageSection);
    _renderingJs.renderCreateUser();
    _styleChangesJs.removeHide(_variablesJs.userForms);
    _styleChangesJs.addHide(_variablesJs.usersList);
    _generalJs.clearElement(_variablesJs.userDetails);
    _styleChangesJs.addHide(_variablesJs.userListSection);
    _styleChangesJs.addHide(_variablesJs.footer);
});
_variablesJs.userForms.addEventListener("click", function(event) {
    _userFormsHandlersJs.userFormsHandler(event);
});
_variablesJs.usersList.addEventListener("click", function(event) {
    _userListHandlersJs.userListHandler(event);
});
_variablesJs.userDetails.addEventListener("click", function(event) {
    _userDetailsHandlersJs.userDetailsHandler(event);
});
window.addEventListener("click", function(event) {
    _mutualAndGeneralHandlersJs.mutualHandler(event);
    _mutualAndGeneralHandlersJs.responseModalHandler(event);
});

},{"./generalFunctions/variables.js":"ej1YI","./buildingHTML/rendering.js":"bUvzx","./generalFunctions/styleChanges.js":"k9936","./eventHandlers/userFormsHandlers.js":"eyTjW","./eventHandlers/userListHandlers.js":"4lNcI","./eventHandlers/userDetailsHandlers.js":"62479","./eventHandlers/mutualAndGeneralHandlers.js":"8qxDU","./users/showingUserData.js":"2YlRm","./generalFunctions/general.js":"5aKxX"}],"ej1YI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "token", ()=>token
);
parcelHelpers.export(exports, "headers", ()=>headers
);
parcelHelpers.export(exports, "showUsers", ()=>showUsers
);
parcelHelpers.export(exports, "deleteU", ()=>deleteU
);
parcelHelpers.export(exports, "createUser", ()=>createUser
);
parcelHelpers.export(exports, "BASE_URL", ()=>BASE_URL
);
parcelHelpers.export(exports, "spinner", ()=>spinner
);
parcelHelpers.export(exports, "helloMessageSection", ()=>helloMessageSection
);
parcelHelpers.export(exports, "detailsSection", ()=>detailsSection
);
parcelHelpers.export(exports, "detailsContainer", ()=>detailsContainer
);
parcelHelpers.export(exports, "usersList", ()=>usersList
);
parcelHelpers.export(exports, "userListSection", ()=>userListSection
);
parcelHelpers.export(exports, "userDetails", ()=>userDetails
);
parcelHelpers.export(exports, "userForms", ()=>userForms
);
parcelHelpers.export(exports, "createForm", ()=>createForm
);
parcelHelpers.export(exports, "editForm", ()=>editForm
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "close", ()=>close
);
parcelHelpers.export(exports, "postList", ()=>postList
);
parcelHelpers.export(exports, "responseMessageModal", ()=>responseMessageModal
);
parcelHelpers.export(exports, "postListHeaderContainer", ()=>postListHeaderContainer
);
parcelHelpers.export(exports, "footer", ()=>footer
);
const token = "c397113043321c1304d7fb3a759310dcc61e8ef3fd4b0040dad3eb74b185192f";
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ` + token
};
const showUsers = document.querySelector(".show-all-users");
const deleteU = document.querySelector(".btn-deleteU");
const createUser = document.querySelector(".create-user");
const BASE_URL = `https://gorest.co.in/public/v1`;
const spinner = document.querySelector("#spinner");
const helloMessageSection = document.querySelector(".hello-section");
const detailsSection = document.querySelector(".details-section");
const detailsContainer = document.querySelector(".user-details-container");
const usersList = document.querySelector(".users-list");
const userListSection = document.querySelector(".user-list-section");
const userDetails = document.querySelector(".user-details-container");
const userForms = document.querySelector(".user-forms-container");
const createForm = document.querySelector(".create-form");
const editForm = document.querySelector(".edit-form");
const main = document.querySelector(".main");
const close = document.getElementsByClassName("close-icon");
const postList = document.querySelector(".user-posts-list");
const responseMessageModal = document.querySelector(".response-message-modal");
const postListHeaderContainer = document.querySelector(".post-list-header-container");
const footer = document.querySelector(".footer");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bUvzx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHtmlElement", ()=>createHtmlElement
);
parcelHelpers.export(exports, "printUsers", ()=>printUsers
);
parcelHelpers.export(exports, "renderUserDetails", ()=>renderUserDetails
);
parcelHelpers.export(exports, "renderCreateUser", ()=>renderCreateUser
);
parcelHelpers.export(exports, "renderEditUser", ()=>renderEditUser
);
parcelHelpers.export(exports, "renderUserPosts", ()=>renderUserPosts
);
parcelHelpers.export(exports, "displayResponseMessage", ()=>displayResponseMessage
);
var _gettingUserDataJs = require("../users/gettingUserData.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _createPostsListJs = require("./createPostsList.js");
const createHtmlElement = function(type, classList = [], attributes = {
}, textContent = "") {
    const element = document.createElement(type);
    if (classList.length > 0) element.classList.add(...classList);
    for (const [key, value] of Object.entries(attributes))element.setAttribute(key, value);
    if (typeof textContent === "string" && textContent !== "") element.textContent = textContent;
    return element;
};
const renderUser = function(userObject) {
    let html = `
    <li class="user">
        <h2 class="user-name">${userObject.name}</h2>
        <div class=user-id id=${userObject.id}></div>
        <div class="user-buttons">
          <button class="user-details" id=${userObject.id}" title="Check user details">
            <p class="details-icon">📖</p>
          </button>
          <button class="delete-user" title="Delete user">&#10008;</button>
        </div>
    </li>`;
    _variablesJs.usersList.insertAdjacentHTML("beforeend", html);
};
const printUsers = function(data) {
    const userArray = data.data;
    for(let i = 0; i < userArray.length; i++)renderUser(userArray[i]);
};
const renderUserDetails = function(data) {
    let html = `
  <div class="detailed-user-info">   
    <div class="details-buttons">
     <button class="go-back" title="Go Back">&#129046</button>
     <button class="edit-user" title="Edit User Information">&#x270E</button>
     </div>
    <h2 class="active-user-name">${data.name}</h2>
    <p class="active-user-email">E-mail: ${data.email}</p>
    <p class="active-user-gender">Gender: ${data.gender}</p>
    <p class="active-user-status">Status: ${data.status}</p>
    <div class="posts">
      <button class="add-post" title="Add Post">+</button>
      <button class="get-user-posts" title="Show user posts">	
      &#128366;</button>
    </div>    
  </div>  `;
    _variablesJs.userDetails.insertAdjacentHTML("afterbegin", html);
};
const renderCreateUser = function() {
    let html = `
      
     
      <form class="create-form"> 
        <button class="go-back-create" title="Go Back">&#129046</button>  
        <div class="create-form-title-container">
          <p class="create-form-title">Create your own user! </br> Please, fill all of the boxes</p>
        </div> 
        <div class="name-input">        
          <label for="name" class="create-name-label">Name: </label>
          <input type="text" id="create-name" name="name" placeholder="Your username" required size="10"> 
        </div>
        <div class="email-input">
          <label for="email" class='create-email-label'>Email: </label>       
          <input type="email" id="create-email" placeholder="Your email address" required size="10"> 
        </div>
        <div class="gender-select"> 
          <label for="gender" class='create-gender-label'>Gender: </label>      
          <select name="gender" id="create-gender" required>
            <option value="">Please choose an option</option>
            <option value="female">Female &#9792</option>
            <option value="male">Male &#9794</option>
          </select>
        </div>
        <div class="status-select"> 
          <label for="status" class='create-status-label'>Status: </label>        
          <select name="status" id="create-status" required>
            <option value="">Please choose an option</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <input type="submit" class="submit" value="Create User">
      </form>
   
  `;
    //
    //
    //
    //  </br>
    _variablesJs.userForms.insertAdjacentHTML("afterbegin", html);
};
const renderEditUser = function(event) {
    let html = `
  <form class="edit-form">  
  <button class='go-back-to-details'>&#129046</button>
      <p class="edit-user-title">Current user: </p> 
      <h2 class="current-user-name">${_gettingUserDataJs.getUserNameForEdit(event, "active-user-name")}</h2>    
    <div class="name-input">
      <label class="edit-name-label" for="name">Name: </label></br>
      <input type="text" id="edit-name" name="name" required size="10"> 
    </div>
    <div class="email-input">
      <label class="edit-email-label" for="email">Email: </label></br>
      <input type="email" id="edit-email" required size="10"> 
    </div>
    <div class="gender-select">
      <label class="edit-gender-label" for="gender">Gender: </label> </br>
      <select name="gender" id="edit-gender" required>
        <option value="">--Please choose an option--</option>
        <option value="female">Female &#9792</option>
        <option value="male">Male &#9794</option>
      </select>
    </div>
    <div class="status-select">
      <label class="edit-status-label" for="status">Status: </label> </br>
      <select name="status" id="edit-status" required>
        <option value="">--Please choose an option--</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <div class="submit-container">
      <input type="submit" class="edit-submit" value="Edit">
    </div>
  </form>
  `;
    _variablesJs.userForms.insertAdjacentHTML("afterbegin", html);
};
const renderUserPosts = function(data, event) {
    _gettingUserDataJs.getUserPostObjects(data).forEach((postObject)=>{
        _createPostsListJs.buildPostList(postObject);
    });
    console.log(data);
    _createPostsListJs.buildPostListHeader(event);
};
const displayResponseMessage = function(message) {
    const responseMessage = createHtmlElement("p", [
        "response-message"
    ], {
    }, `${message}`);
    _variablesJs.responseMessageModal.style.display = "block";
    _variablesJs.responseMessageModal.appendChild(responseMessage);
};

},{"../users/gettingUserData.js":"7IwCB","../generalFunctions/variables.js":"ej1YI","./createPostsList.js":"6zCKE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7IwCB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUserIDForAddPost", ()=>getUserIDForAddPost
);
parcelHelpers.export(exports, "getUserIDForEdit", ()=>getUserIDForEdit
);
parcelHelpers.export(exports, "getUserNameForEdit", ()=>getUserNameForEdit
);
parcelHelpers.export(exports, "getPostTitle", ()=>getPostTitle
);
parcelHelpers.export(exports, "getUserIDForDetailsAndDelete", ()=>getUserIDForDetailsAndDelete
);
parcelHelpers.export(exports, "getUserIDForDelete", ()=>getUserIDForDelete
);
parcelHelpers.export(exports, "getUserPostObjects", ()=>getUserPostObjects
);
parcelHelpers.export(exports, "getPostID", ()=>getPostID
);
parcelHelpers.export(exports, "getComments", ()=>getComments
);
var _renderingJs = require("../buildingHTML/rendering.js");
var _generalJs = require("../generalFunctions/general.js");
const getUserIDForAddPost = function(data) {
    const titleString = document.querySelector(".form-title").textContent;
    const userName = titleString.split(" ").slice(3).join(" ");
    const usersArray = data.data;
    for (const user of usersArray){
        if (user.name === userName) return user.id;
    }
};
const getUserIDForEdit = function(data, event, className) {
    const usersArray = data.data;
    for (const user of usersArray){
        if (user.name === getUserNameForEdit(event, className)) return user.id;
    }
};
const getUserNameForEdit = function(event, className) {
    return _generalJs.loopForGettingUserName(_generalJs.doubleParentChildren(event), className);
};
const getPostTitle = function(event) {
    return _generalJs.loopForGettingUserName(_generalJs.doubleParentChildren(event), "post-title");
};
const getUserIDForDetailsAndDelete = function(event) {
    return _generalJs.loopForGettingUserID(_generalJs.tripleParentChildren(event), "user-id");
};
const getUserIDForDelete = function(event) {
    return _generalJs.loopForGettingUserID(_generalJs.doubleParentChildren(event), "user-id");
};
const getUserPostObjects = function(data) {
    const postObjectsArray = data.data;
    let postsArray = [];
    if (postObjectsArray.length === 0) {
        _renderingJs.displayResponseMessage(`User haven't posted anything yet!`);
        return postObjectsArray;
    }
    for(let i = 0; i < postObjectsArray.length; i++)postsArray.push(postObjectsArray[i]);
    return postsArray;
};
const getPostID = function(data) {
    const objectArray = getUserPostObjects(data);
    let idArray = [];
    objectArray.forEach((postObject)=>{
        idArray.push(postObject.id);
    });
    return idArray;
};
const getComments = function(data) {
    const commentsArray = data.data;
    for (const commentObject of commentsArray)return commentObject;
};

},{"../buildingHTML/rendering.js":"bUvzx","../generalFunctions/general.js":"5aKxX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5aKxX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectingTarget", ()=>selectingTarget
);
parcelHelpers.export(exports, "singleParentChildren", ()=>singleParentChildren
);
parcelHelpers.export(exports, "doubleParentChildren", ()=>doubleParentChildren
);
parcelHelpers.export(exports, "doubleParent", ()=>doubleParent
);
parcelHelpers.export(exports, "tripleParentChildren", ()=>tripleParentChildren
);
parcelHelpers.export(exports, "tripleParent", ()=>tripleParent
);
parcelHelpers.export(exports, "commentsContainer", ()=>commentsContainer
);
parcelHelpers.export(exports, "loopForGettingUserName", ()=>loopForGettingUserName
);
parcelHelpers.export(exports, "loopForGettingUserID", ()=>loopForGettingUserID
);
parcelHelpers.export(exports, "checkPostHeader", ()=>checkPostHeader
);
parcelHelpers.export(exports, "clearElement", ()=>clearElement
);
var _variablesJs = require("./variables.js");
const selectingTarget = function(event) {
    const target = event.target;
    return target.classList;
};
const singleParentChildren = function(event) {
    const target = event.target;
    const parent = target.parentElement;
    return parent.children;
};
const doubleParentChildren = function(event) {
    const target = event.target;
    const parent = target.parentElement.parentElement;
    return parent.children;
};
const doubleParent = function(event) {
    const target = event.target;
    return target.parentElement.parentElement;
};
const tripleParentChildren = function(event) {
    const target = event.target;
    const parent = target.parentElement.parentElement.parentElement;
    return parent.children;
};
const tripleParent = function(event) {
    const target = event.target;
    return target.parentElement.parentElement.parentElement;
};
const commentsContainer = function(event) {
    const target = event.target;
    const parent = target.parentElement.parentElement;
    const children = parent.children;
    for(let i = 0; i < children.length; i++){
        if (children[i].classList.contains("all-comments-container")) return children[i];
    }
};
const loopForGettingUserName = function(element, className) {
    for(let i = 0; i < element.length; i++){
        if (element[i].classList.contains(className)) return element[i].textContent;
    }
};
const loopForGettingUserID = function(element, className) {
    for(let i = 0; i < element.length; i++){
        if (element[i].classList.contains(className)) return element[i].id;
    }
};
const checkPostHeader = function() {
    const userListSectionChildren = _variablesJs.userListSection.children;
    for(let i = 0; i < userListSectionChildren.length; i++)if (userListSectionChildren[i].classList.contains("post-list-header-container")) userListSectionChildren[i].parentNode.removeChild(userListSectionChildren[i]);
};
const clearElement = function(parentElement) {
    parentElement.innerHTML = "";
};

},{"./variables.js":"ej1YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6zCKE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildPostList", ()=>buildPostList
);
parcelHelpers.export(exports, "buildPostListHeader", ()=>buildPostListHeader
);
parcelHelpers.export(exports, "buildCommentsButtons", ()=>buildCommentsButtons
);
parcelHelpers.export(exports, "buildNoCommentsMessage", ()=>buildNoCommentsMessage
);
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _gettingUserDataJs = require("../users/gettingUserData.js");
var _showingUserDataJs = require("../users/showingUserData.js");
var _createAddCommentFormJs = require("./createAddCommentForm.js");
var _renderingJs = require("./rendering.js");
const buildPostList = function(data) {
    // const goBackToDetailsButton = buildGoBackToDetailsButton();
    const postTitle = buildPostTitle(data);
    const postBody = buildPostBody(data);
    const postButton = buildCommentsButtons(data);
    const comments = buildCommentContainer();
    const postContainer = _renderingJs.createHtmlElement("li", [
        "post-container"
    ]);
    // userListSection.prepend(goBackToDetailsButton);
    _variablesJs.postList.appendChild(postContainer);
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    postContainer.appendChild(postButton);
    postContainer.appendChild(comments);
};
const buildPostListHeader = function(event) {
    const postListTitle = buildPostListTitle(event);
    const goBackButton = buildGoBackToDetailsButton();
    const headerContainer = _renderingJs.createHtmlElement("div", [
        "post-list-header-container", 
    ]);
    headerContainer.appendChild(postListTitle);
    headerContainer.appendChild(goBackButton);
    _variablesJs.userListSection.prepend(headerContainer);
};
const buildPostListTitle = function(event) {
    const name = _generalJs.loopForGettingUserName(_generalJs.doubleParentChildren(event), "active-user-name");
    const headerTitle = _renderingJs.createHtmlElement("p", [
        "post-list-header-title"
    ], {
    }, `${name}'s posts`);
    return headerTitle;
};
const buildGoBackToDetailsButton = function() {
    const goBackToDetailsButton = _renderingJs.createHtmlElement("button", [
        "go-back-to-details",
        "post"
    ], {
        title: "Go Back"
    }, "🠖");
    goBackToDetailsButton.addEventListener("click", function() {
        const postListHeader = document.querySelector(".post-list-header-container");
        _generalJs.clearElement(_variablesJs.postList);
        _styleChangesJs.addHide(_variablesJs.postList);
        _styleChangesJs.removeHide(_variablesJs.userDetails);
        postListHeader.parentNode.removeChild(postListHeader);
    // goBackToDetailsButton.parentNode.removeChild(goBackToDetailsButton);
    // userListSection.children[0].parentNode.removeChild(
    //   userListSection.children[0]
    // );
    });
    return goBackToDetailsButton;
};
const buildPostTitle = function(data) {
    const postTitle = _renderingJs.createHtmlElement("h1", [
        "post-title"
    ], {
    }, `${data.title}`);
    return postTitle;
};
const buildPostBody = function(data) {
    const postBody = _renderingJs.createHtmlElement("p", [
        "post-body"
    ], {
    }, `${data.body}`);
    const bodyContainer = _renderingJs.createHtmlElement("div", [
        "post-body-container"
    ]);
    bodyContainer.appendChild(postBody);
    return bodyContainer;
};
const buildCommentsButtons = function(data) {
    const showCommentsButton = _renderingJs.createHtmlElement("button", [
        "show-comments-button"
    ], {
    }, "💬");
    showCommentsButton.addEventListener("click", function(event1) {
        const postContainers = document.querySelectorAll(".post-container");
        const commentsButtons = document.querySelector(".button-container");
        _styleChangesJs.showSpinner(commentsButtons);
        postContainers.forEach((postContainer)=>{
            _styleChangesJs.addHide(postContainer);
            _styleChangesJs.removeHide(_generalJs.doubleParent(event1));
            _styleChangesJs.addHide(showCommentsButton);
        });
        const buttonsContainer = _renderingJs.createHtmlElement("div", [
            "comments-buttons-container", 
        ]);
        const goBackButton = _renderingJs.createHtmlElement("button", [
            "go-back-to-posts"
        ], {
        }, "🠖");
        goBackButton.addEventListener("click", function(event) {
            const commentsContainers = document.querySelectorAll(".comment-container");
            const noCommentMessage = document.querySelector(".no-comment-message");
            event.preventDefault();
            _styleChangesJs.addHide(goBackButton);
            _styleChangesJs.removeHide(showCommentsButton);
            _styleChangesJs.addHide(addCommentButton);
            commentsContainers.forEach((commentContainer)=>{
                commentContainer.parentNode.removeChild(commentContainer);
            });
            postContainers.forEach((postContainer)=>{
                _styleChangesJs.removeHide(postContainer);
            });
            if (noCommentMessage) noCommentMessage.parentNode.removeChild(noCommentMessage);
            buttonsContainer.parentNode.removeChild(buttonsContainer);
        });
        const addCommentButton = _renderingJs.createHtmlElement("button", [
            "add-comment-button"
        ], {
        }, "📝");
        console.log(_variablesJs.userListSection);
        addCommentButton.addEventListener("click", function(event) {
            const commentsContainers = document.querySelectorAll(".comment-container");
            const noCommentMessage = document.querySelector(".no-comment-message");
            console.log(data);
            if (_gettingUserDataJs.getPostTitle(event) === data.title) {
                commentsContainers.forEach((commentContainer)=>{
                    _styleChangesJs.addHide(commentContainer);
                });
                _styleChangesJs.addHide(_variablesJs.userListSection);
                _createAddCommentFormJs.buildAddCommentForm(data);
                _styleChangesJs.addHide(_variablesJs.postList);
                _styleChangesJs.removeHide(_variablesJs.userForms);
                _styleChangesJs.addHide(addCommentButton);
                _styleChangesJs.addHide(goBackButton);
                if (noCommentMessage) noCommentMessage.parentNode.removeChild(noCommentMessage);
            }
        });
        _showingUserDataJs.showPostComments(data, event1, _generalJs.commentsContainer(event1));
        buttonsContainer.appendChild(goBackButton);
        buttonsContainer.appendChild(addCommentButton);
        _generalJs.doubleParent(event1).appendChild(buttonsContainer);
    });
    const buttonContainer = _renderingJs.createHtmlElement("div", [
        "button-container"
    ]);
    buttonContainer.appendChild(showCommentsButton);
    return buttonContainer;
};
const buildCommentContainer = function() {
    const commentContainer = _renderingJs.createHtmlElement("div", [
        "all-comments-container"
    ]);
    return commentContainer;
};
const buildNoCommentsMessage = function() {
    const allCommentsContainer = document.querySelector(".all-comments-container");
    const noCommentMessage = _renderingJs.createHtmlElement("p", [
        "no-comment-message"
    ], {
    }, "There are no comments yet! Click button bellow to add one 😉 !");
    allCommentsContainer.appendChild(noCommentMessage);
};

},{"../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../generalFunctions/variables.js":"ej1YI","../users/gettingUserData.js":"7IwCB","../users/showingUserData.js":"2YlRm","./createAddCommentForm.js":"g0Rtn","./rendering.js":"bUvzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9936":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addHide", ()=>addHide
);
parcelHelpers.export(exports, "removeHide", ()=>removeHide
);
parcelHelpers.export(exports, "capitalizeFirstLetters", ()=>capitalizeFirstLetters
);
parcelHelpers.export(exports, "showSpinner", ()=>showSpinner
);
parcelHelpers.export(exports, "hideSpinner", ()=>hideSpinner
);
const addHide = function(parentElement) {
    parentElement.classList.add("hide");
};
const removeHide = function(parentElement) {
    parentElement.classList.remove("hide");
};
const capitalizeFirstLetters = function(string) {
    const array = string.split(" ");
    for(let i = 0; i < array.length; i++)array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    return array.join(" ");
};
const showSpinner = function() {
    spinner.removeAttribute("hidden");
};
const hideSpinner = function() {
    spinner.setAttribute("hidden", "");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YlRm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showUserDetails", ()=>showUserDetails
);
parcelHelpers.export(exports, "showUserList", ()=>showUserList
);
parcelHelpers.export(exports, "showPostComments", ()=>showPostComments
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _createPostCommentJs = require("../buildingHTML/createPostComment.js");
var _createPostsListJs = require("../buildingHTML/createPostsList.js");
var _renderingJs = require("../buildingHTML/rendering.js");
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _gettingUserDataJs = require("./gettingUserData.js");
const showUserDetails = function(data, event) {
    const usersArray = data.data;
    usersArray.forEach((userObject)=>{
        if (userObject.id == _gettingUserDataJs.getUserIDForDetailsAndDelete(event)) _renderingJs.renderUserDetails(userObject);
    });
};
const showUserList = function() {
    _styleChangesJs.showSpinner();
    if (_variablesJs.footer) _styleChangesJs.addHide(_variablesJs.footer);
    _asyncApiCallsJs.getUsers(_variablesJs.BASE_URL).then((data)=>{
        _styleChangesJs.removeHide(_variablesJs.userListSection);
        _generalJs.clearElement(_variablesJs.usersList);
        console.log(data);
        _renderingJs.printUsers(data);
        _styleChangesJs.removeHide(_variablesJs.footer);
        _styleChangesJs.hideSpinner();
    });
};
const showPostComments = function(data1, event, container) {
    _styleChangesJs.showSpinner();
    _asyncApiCallsJs.getPostComments(_variablesJs.BASE_URL, data1.id).then((data)=>{
        const commentObjectArray = data.data;
        if (commentObjectArray.length === 0) _createPostsListJs.buildNoCommentsMessage();
        commentObjectArray.forEach((commentObject)=>{
            _createPostCommentJs.buildCommentContainer(commentObject, event, container);
        });
        _styleChangesJs.hideSpinner();
    });
};

},{"../async/asyncApiCalls.js":"eZAJC","../buildingHTML/createPostComment.js":"cmu7B","../buildingHTML/createPostsList.js":"6zCKE","../buildingHTML/rendering.js":"bUvzx","../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../generalFunctions/variables.js":"ej1YI","./gettingUserData.js":"7IwCB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZAJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUsers", ()=>getUsers
);
parcelHelpers.export(exports, "getUserByID", ()=>getUserByID
);
parcelHelpers.export(exports, "createUser", ()=>createUser
);
parcelHelpers.export(exports, "deleteUserREST", ()=>deleteUserREST
);
parcelHelpers.export(exports, "editUser", ()=>editUser
);
parcelHelpers.export(exports, "getUserPosts", ()=>getUserPosts
);
parcelHelpers.export(exports, "getPostComments", ()=>getPostComments
);
parcelHelpers.export(exports, "createUserPost", ()=>createUserPost
);
parcelHelpers.export(exports, "createUserComment", ()=>createUserComment
);
var _variablesJs = require("../generalFunctions/variables.js");
var _resolvingResponseJs = require("./resolvingResponse.js");
const getUsers = async function(url) {
    const response = await fetch(`${url}/users`, {
        method: "GET",
        headers: _variablesJs.headers
    });
    return response.json();
};
const getUserByID = async function(url, userID) {
    const response = await fetch(`${url}/users/${userID}`, {
        method: "GET",
        headers: _variablesJs.headers
    });
    return response.json();
};
const createUser = async function(url, userObject) {
    const response = await fetch(`${url}/users`, {
        method: "POST",
        headers: _variablesJs.headers,
        body: JSON.stringify(userObject)
    });
    _resolvingResponseJs.resolveResponse(response, "User Created Successfully!", "Couldn't create user, please check information provided and try again (Remember, there can't be more than 1 user with the same email address, and all information must be provided!)");
    return response.json();
};
const deleteUserREST = async function(url, id) {
    const response = await fetch(`${url}/users/${id}`, {
        method: "DELETE",
        headers: _variablesJs.headers
    });
    _resolvingResponseJs.resolveResponse(response, "User deleted successfully", "Couldn't delete user, please try again");
};
const editUser = async function(url, id, userObject) {
    const response = await fetch(`${url}/users/${id}`, {
        method: "PUT",
        headers: _variablesJs.headers,
        body: JSON.stringify(userObject)
    });
    _resolvingResponseJs.resolveResponse(response, "User details edited successfully!", "There was an error, please check information provided and try again (Remember, there can't be more than 1 user with the same email address!)");
    return response.json();
};
const getUserPosts = async function(url, userID) {
    const response = await fetch(`${url}/users/${userID}/posts`, {
        method: "GET",
        headers: _variablesJs.headers
    });
    return response.json();
};
const getPostComments = async function(url, postID) {
    const response = await fetch(`${url}/posts/${postID}/comments`, {
        method: "GET",
        headers: _variablesJs.headers
    });
    return response.json();
};
const createUserPost = async function(url, userID, userPostObject) {
    const response = await fetch(`${url}/users/${userID}/posts`, {
        method: "POST",
        headers: _variablesJs.headers,
        body: JSON.stringify(userPostObject)
    });
    _resolvingResponseJs.resolveResponse(response, "Post created!", "There was an error, please try again.");
    return response.json();
};
const createUserComment = async function(url, postID, commentObject) {
    const response = await fetch(`${url}/posts/${postID}/comments`, {
        method: "POST",
        headers: _variablesJs.headers,
        body: JSON.stringify(commentObject)
    });
    _resolvingResponseJs.resolveResponse(response, "Comment added!", "There was an error, please try again.");
    return response.json();
};

},{"../generalFunctions/variables.js":"ej1YI","./resolvingResponse.js":"ebY52","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebY52":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveResponse", ()=>resolveResponse
);
var _renderingJs = require("../buildingHTML/rendering.js");
var _variablesJs = require("../generalFunctions/variables.js");
const resolveResponse = function(response, successMessage, failMessage) {
    if (response.status === 200 || response.status === 201 || response.status === 204) _renderingJs.displayResponseMessage(successMessage);
    else {
        _renderingJs.displayResponseMessage(failMessage);
        _variablesJs.responseMessageModal.style.color = "red";
    }
};

},{"../buildingHTML/rendering.js":"bUvzx","../generalFunctions/variables.js":"ej1YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmu7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildCommentContainer", ()=>buildCommentContainer
);
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _renderingJs = require("./rendering.js");
const buildCommentContainer = function(data, event, container) {
    const commentName = buildCommentName(data);
    const commentText = buildCommentText(data);
    const commentContainer = _renderingJs.createHtmlElement("div", [
        "comment-container"
    ]);
    commentContainer.appendChild(commentName);
    commentContainer.appendChild(commentText);
    const allCommentsContainer = container;
    allCommentsContainer.prepend(commentContainer);
};
const buildCommentName = function(data) {
    const name = _renderingJs.createHtmlElement("h2", [
        "comment-name"
    ], {
    }, `${_styleChangesJs.capitalizeFirstLetters(data.name)}`);
    const nameContainer = _renderingJs.createHtmlElement("div", [
        "comment-name-container"
    ]);
    nameContainer.appendChild(name);
    return nameContainer;
};
const buildCommentText = function(data) {
    const commentText = _renderingJs.createHtmlElement("p", [
        "comment-text"
    ], {
    }, `${data.body}`);
    const commentTextContainer = _renderingJs.createHtmlElement("div", [
        "comment-text-container", 
    ]);
    commentTextContainer.appendChild(commentText);
    return commentTextContainer;
};

},{"../generalFunctions/styleChanges.js":"k9936","./rendering.js":"bUvzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0Rtn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildAddCommentForm", ()=>buildAddCommentForm
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _creatingUserObjectsJs = require("../users/creatingUserObjects.js");
var _showingUserDataJs = require("../users/showingUserData.js");
var _renderingJs = require("./rendering.js");
const buildAddCommentForm = function(data) {
    const formTitle = createFormTitle();
    const goBackButton = createButton(data);
    const nameInput = createCommentNameInput();
    const emailInput = createCommentEmailInput();
    const messageInput = createCommentMessageInput();
    const submitButton = createCommentSubmitButton(data);
    const addCommentForm = _renderingJs.createHtmlElement("form", [
        "add-comment-form"
    ], {
        alt: "background image of a mountain with forrest at it's feet"
    });
    addCommentForm.appendChild(formTitle);
    addCommentForm.appendChild(goBackButton);
    addCommentForm.appendChild(nameInput);
    addCommentForm.appendChild(emailInput);
    addCommentForm.appendChild(messageInput);
    addCommentForm.appendChild(submitButton);
    _variablesJs.userForms.appendChild(addCommentForm);
};
const createFormTitle = function() {
    const title = _renderingJs.createHtmlElement("h1", [
        "create-comment-form-title"
    ], {
    }, `Create Comment!`);
    const instruction = _renderingJs.createHtmlElement("p", [
        "create-comment-form-title-instruction"
    ], {
    }, "Please fill all of the boxes.");
    const titleContainer = _renderingJs.createHtmlElement("div", [
        "create-comment-form-title-container", 
    ]);
    titleContainer.appendChild(title);
    titleContainer.appendChild(instruction);
    return titleContainer;
};
const createButton = function(data) {
    const goBackToPosts = document.querySelector(".go-back-to-posts");
    const allCommentsContainer = document.querySelector(".all-comments-container");
    const addCommentButton = document.querySelector(".add-comment-button");
    const goBackButton = _renderingJs.createHtmlElement("button", [
        "go-back-comment"
    ], {
    }, "🠖");
    goBackButton.addEventListener("click", function(event) {
        event.preventDefault();
        _generalJs.clearElement(_variablesJs.userForms);
        _styleChangesJs.removeHide(_variablesJs.postList);
        _styleChangesJs.addHide(_variablesJs.userForms);
        _styleChangesJs.removeHide(goBackToPosts);
        _styleChangesJs.removeHide(addCommentButton);
        _styleChangesJs.removeHide(_variablesJs.userListSection);
        _showingUserDataJs.showPostComments(data, event, allCommentsContainer);
    });
    const btnContainer = _renderingJs.createHtmlElement("div", [
        "go-back-btn-container"
    ]);
    btnContainer.appendChild(goBackButton);
    return btnContainer;
};
const createCommentNameInput = function() {
    const userNameInput = _renderingJs.createHtmlElement("input", [
        "add-comment-name-input"
    ], {
        placeholder: "Your name",
        type: "text"
    });
    const userNameInputContainer = _renderingJs.createHtmlElement("div", [
        "add-comment-name-input-container", 
    ]);
    userNameInputContainer.appendChild(userNameInput);
    return userNameInputContainer;
};
const createCommentEmailInput = function() {
    const userEmailInput = _renderingJs.createHtmlElement("input", [
        "add-comment-email-input"
    ], {
        placeholder: "Your email address",
        type: "email"
    });
    const userEmailInputContainer = _renderingJs.createHtmlElement("div", [
        "add-comment-email-input-container", 
    ]);
    userEmailInputContainer.appendChild(userEmailInput);
    return userEmailInputContainer;
};
const createCommentMessageInput = function() {
    const userMessageInput = _renderingJs.createHtmlElement("textarea", [
        "add-comment-message-input"
    ], {
        placeholder: "Your message",
        type: "text"
    });
    const userMessageInputContainer = _renderingJs.createHtmlElement("div", [
        "add-comment-message-input-container", 
    ]);
    userMessageInputContainer.appendChild(userMessageInput);
    return userMessageInputContainer;
};
const createCommentSubmitButton = function(data) {
    const goBackToPosts = document.querySelector(".go-back-to-posts");
    const addCommentButton = document.querySelector(".add-comment-button");
    const allCommentsContainer = document.querySelector(".all-comments-container");
    const submitButton = _renderingJs.createHtmlElement("input", [
        "add-comment-submit"
    ], {
        type: "submit",
        value: "Add Comment!"
    });
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        _asyncApiCallsJs.createUserComment(_variablesJs.BASE_URL, data.id, _creatingUserObjectsJs.createUserCommentObject()).then(()=>{
            _generalJs.clearElement(_variablesJs.userForms);
            _generalJs.clearElement(_variablesJs.postList);
            _generalJs.checkPostHeader();
            _styleChangesJs.removeHide(_variablesJs.userDetails);
            _styleChangesJs.addHide(_variablesJs.userForms);
        });
    });
    return submitButton;
};

},{"../async/asyncApiCalls.js":"eZAJC","../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../generalFunctions/variables.js":"ej1YI","../users/creatingUserObjects.js":"ljenU","../users/showingUserData.js":"2YlRm","./rendering.js":"bUvzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljenU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUserObject", ()=>createUserObject
);
parcelHelpers.export(exports, "createUserPostObject", ()=>createUserPostObject
);
parcelHelpers.export(exports, "createUserCommentObject", ()=>createUserCommentObject
);
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
const createUserObject = function(className) {
    const name = document.querySelector(`#${className}-name`).value;
    const email = document.querySelector(`#${className}-email`).value;
    const gender = document.querySelector(`#${className}-gender`).value;
    const status = document.querySelector(`#${className}-status`).value;
    return {
        name: _styleChangesJs.capitalizeFirstLetters(name),
        email: email,
        gender: gender,
        status: status
    };
};
const createUserPostObject = function() {
    const titleString = document.querySelector(".form-title").textContent;
    const userName = titleString.split(" ").slice(3).join(" ");
    const title = document.querySelector(".add-post-title-input").value;
    const message = document.querySelector(".add-post-message-input").value;
    return {
        name: userName,
        title: title,
        body: message
    };
};
const createUserCommentObject = function() {
    const name = document.querySelector(".add-comment-name-input").value;
    const email = document.querySelector(".add-comment-email-input").value;
    const message = document.querySelector(".add-comment-message-input").value;
    return {
        name: name,
        email: email,
        body: message
    };
};

},{"../generalFunctions/styleChanges.js":"k9936","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyTjW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userFormsHandler", ()=>userFormsHandler
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _creatingUserObjectsJs = require("../users/creatingUserObjects.js");
var _gettingUserDataJs = require("../users/gettingUserData.js");
var _showingUserDataJs = require("../users/showingUserData.js");
var _variablesJs = require("../generalFunctions/variables.js");
const userFormsHandler = function(event) {
    if (_generalJs.selectingTarget(event).contains("submit")) {
        event.preventDefault();
        _styleChangesJs.showSpinner();
        _asyncApiCallsJs.createUser(_variablesJs.BASE_URL, _creatingUserObjectsJs.createUserObject("create")).then(()=>{
            _styleChangesJs.hideSpinner();
            _showingUserDataJs.showUserList();
            _generalJs.clearElement(_variablesJs.userForms);
            _styleChangesJs.addHide(_variablesJs.userForms);
            _styleChangesJs.removeHide(_variablesJs.usersList);
        });
    }
    if (_generalJs.selectingTarget(event).contains("edit-submit")) {
        event.preventDefault();
        _styleChangesJs.showSpinner();
        _asyncApiCallsJs.getUsers(_variablesJs.BASE_URL).then((data)=>{
            _asyncApiCallsJs.editUser(_variablesJs.BASE_URL, _gettingUserDataJs.getUserIDForEdit(data, event, "current-user-name"), _creatingUserObjectsJs.createUserObject("edit")).then(()=>{
                _styleChangesJs.hideSpinner();
                _generalJs.clearElement(_variablesJs.userForms);
                _showingUserDataJs.showUserList();
                _styleChangesJs.removeHide(_variablesJs.usersList);
            });
        });
    }
    if (_generalJs.selectingTarget(event).contains("go-back-to-details")) {
        _generalJs.clearElement(_variablesJs.userForms);
        _styleChangesJs.addHide(_variablesJs.userForms);
        _styleChangesJs.removeHide(_variablesJs.userDetails);
    }
};

},{"../async/asyncApiCalls.js":"eZAJC","../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../users/creatingUserObjects.js":"ljenU","../users/gettingUserData.js":"7IwCB","../users/showingUserData.js":"2YlRm","../generalFunctions/variables.js":"ej1YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4lNcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userListHandler", ()=>userListHandler
);
parcelHelpers.export(exports, "handleNoPosts", ()=>handleNoPosts
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _showingUserDataJs = require("../users/showingUserData.js");
var _deletingUserJs = require("../users/deletingUser.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _renderingJs = require("../buildingHTML/rendering.js");
const userListHandler = function(event) {
    if (_generalJs.selectingTarget(event).contains("details-icon")) {
        _styleChangesJs.addHide(_variablesJs.usersList);
        _styleChangesJs.addHide(_variablesJs.footer);
        _styleChangesJs.showSpinner();
        _asyncApiCallsJs.getUsers(_variablesJs.BASE_URL).then((data)=>{
            spinner.setAttribute("hidden", "");
            _showingUserDataJs.showUserDetails(data, event);
            _styleChangesJs.hideSpinner();
            _styleChangesJs.addHide(_variablesJs.userForms);
            _styleChangesJs.removeHide(_variablesJs.userDetails);
            _styleChangesJs.addHide(_variablesJs.postList);
            _styleChangesJs.removeHide(_variablesJs.detailsContainer);
            _styleChangesJs.removeHide(_variablesJs.detailsSection);
        });
    }
    if (_generalJs.selectingTarget(event).contains("delete-user")) _asyncApiCallsJs.getUsers(_variablesJs.BASE_URL).then((data)=>{
        _deletingUserJs.deleteUser(data, event);
    });
};
const handleNoPosts = function() {
    _renderingJs.displayResponseMessage(`User haven't posted anything yet!`);
    const goBackToDetailsButton = _renderingJs.createHtmlElement("button", [
        "go-back-to-details"
    ], {
    }, "Go Back");
    goBackToDetailsButton.addEventListener("click", function() {
        _styleChangesJs.removeHide(_variablesJs.userDetails);
        _styleChangesJs.addHide(_variablesJs.postList);
        goBackToDetailsButton.parentNode.removeChild(goBackToDetailsButton);
    });
    // goBackToDetailsButton.append(userListSection);
    _variablesJs.postList.append(goBackToDetailsButton);
};

},{"../async/asyncApiCalls.js":"eZAJC","../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../users/showingUserData.js":"2YlRm","../users/deletingUser.js":"etlDs","../generalFunctions/variables.js":"ej1YI","../buildingHTML/rendering.js":"bUvzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etlDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteUser", ()=>deleteUser
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _generalJs = require("../generalFunctions/general.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _gettingUserDataJs = require("./gettingUserData.js");
const deleteUser = function(data, event) {
    const container = _generalJs.doubleParent(event);
    const usersArray = data.data;
    usersArray.forEach((userObject)=>{
        if (_gettingUserDataJs.getUserIDForDelete(event) == userObject.id) _asyncApiCallsJs.deleteUserREST(_variablesJs.BASE_URL, userObject.id);
    });
    container.parentNode.removeChild(container);
};

},{"../async/asyncApiCalls.js":"eZAJC","../generalFunctions/general.js":"5aKxX","../generalFunctions/variables.js":"ej1YI","./gettingUserData.js":"7IwCB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62479":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userDetailsHandler", ()=>userDetailsHandler
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _createPostFormJs = require("../buildingHTML/createPostForm.js");
var _renderingJs = require("../buildingHTML/rendering.js");
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _gettingUserDataJs = require("../users/gettingUserData.js");
var _variablesJs = require("../generalFunctions/variables.js");
const userDetailsHandler = function(event) {
    if (_generalJs.selectingTarget(event).contains("edit-user")) {
        _styleChangesJs.addHide(_variablesJs.userDetails);
        _styleChangesJs.removeHide(_variablesJs.userForms);
        _renderingJs.renderEditUser(event);
    }
    if (_generalJs.selectingTarget(event).contains("add-post")) {
        event.preventDefault();
        _styleChangesJs.removeHide(_variablesJs.userForms);
        _styleChangesJs.addHide(_variablesJs.userDetails);
        _createPostFormJs.buildAddPostContainer(event);
    }
    if (_generalJs.selectingTarget(event).contains("get-user-posts")) {
        _styleChangesJs.addHide(_variablesJs.userDetails);
        _styleChangesJs.removeHide(_variablesJs.postList);
        _styleChangesJs.removeHide(_variablesJs.userListSection);
        _styleChangesJs.showSpinner();
        _asyncApiCallsJs.getUsers(_variablesJs.BASE_URL).then((data1)=>{
            _asyncApiCallsJs.getUserPosts(_variablesJs.BASE_URL, _gettingUserDataJs.getUserIDForEdit(data1, event, "active-user-name")).then((data)=>{
                // removeHide(userForms);
                _renderingJs.renderUserPosts(data, event);
                _styleChangesJs.hideSpinner();
                console.log(data);
            });
        });
    }
};

},{"../async/asyncApiCalls.js":"eZAJC","../buildingHTML/createPostForm.js":"h6gRl","../buildingHTML/rendering.js":"bUvzx","../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../users/gettingUserData.js":"7IwCB","../generalFunctions/variables.js":"ej1YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h6gRl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildAddPostContainer", ()=>buildAddPostContainer
);
var _asyncApiCallsJs = require("../async/asyncApiCalls.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _creatingUserObjectsJs = require("../users/creatingUserObjects.js");
var _gettingUserDataJs = require("../users/gettingUserData.js");
var _variablesJs = require("../generalFunctions/variables.js");
var _renderingJs = require("./rendering.js");
const buildAddPostContainer = function(event, data) {
    const mainContainer = _renderingJs.createHtmlElement("div", [
        "add-post-form-container"
    ]);
    const formHeader = buildFormHeader(event);
    const form = buildForm(data);
    mainContainer.appendChild(formHeader);
    mainContainer.appendChild(form);
    _variablesJs.userForms.appendChild(mainContainer);
};
const buildFormHeader = function(event) {
    const goBackButton = _renderingJs.createHtmlElement("button", [
        "go-back-to-details"
    ], {
    }, "🠖");
    goBackButton.addEventListener("click", function() {
        _variablesJs.userForms.innerHTML = "";
        _styleChangesJs.addHide(_variablesJs.userForms);
        _styleChangesJs.removeHide(_variablesJs.userDetails);
    });
    const title = _renderingJs.createHtmlElement("h1", [
        "form-title"
    ], {
    }, `Add post as ${_gettingUserDataJs.getUserNameForEdit(event, "active-user-name")}`);
    const titleContainer = _renderingJs.createHtmlElement("div", [
        "form-title-container"
    ]);
    titleContainer.appendChild(goBackButton);
    titleContainer.appendChild(title);
    return titleContainer;
};
const buildForm = function() {
    const form = _renderingJs.createHtmlElement("form", [
        "add-post-form"
    ]);
    const title = buildTitleInput();
    const message = buildMessageInput();
    const buttons = formButtons();
    form.appendChild(title);
    form.appendChild(message);
    form.appendChild(buttons);
    return form;
};
const buildTitleInput = function() {
    const titleInput = _renderingJs.createHtmlElement("input", [
        "add-post-title-input"
    ], {
        placeholder: "Your post title",
        type: "text",
        required: true
    }, "");
    const titleContainer = _renderingJs.createHtmlElement("div", [
        "add-post-title-container"
    ]);
    titleContainer.appendChild(titleInput);
    return titleContainer;
};
const buildMessageInput = function() {
    const messageInput = _renderingJs.createHtmlElement("textarea", [
        "add-post-message-input"
    ], {
        placeholder: "Place for your message",
        type: "text",
        required: true
    }, "");
    const messageContainer = _renderingJs.createHtmlElement("div", [
        "add-post-message-container", 
    ]);
    messageContainer.appendChild(messageInput);
    return messageContainer;
};
const formButtons = function() {
    const sendButton = _renderingJs.createHtmlElement("input", [
        "submit-post-button"
    ], {
        type: "submit",
        value: "Add Post"
    });
    sendButton.addEventListener("click", function(event) {
        event.preventDefault();
        _styleChangesJs.showSpinner();
        _asyncApiCallsJs.getUsers(_variablesJs.BASE_URL).then((data)=>{
            _asyncApiCallsJs.createUserPost(_variablesJs.BASE_URL, _gettingUserDataJs.getUserIDForAddPost(data), _creatingUserObjectsJs.createUserPostObject()).then(()=>{
                _styleChangesJs.hideSpinner();
                _variablesJs.userForms.textContent = "";
                _styleChangesJs.removeHide(_variablesJs.userDetails);
                _styleChangesJs.addHide(_variablesJs.userForms);
            });
        });
    });
    const clearButton = _renderingJs.createHtmlElement("input", [
        "clear-form-button"
    ], {
        type: "reset",
        value: "Clear Form"
    });
    const buttonsContainer = _renderingJs.createHtmlElement("div", [
        "form-buttons-container"
    ]);
    buttonsContainer.appendChild(sendButton);
    buttonsContainer.appendChild(clearButton);
    return buttonsContainer;
};

},{"../async/asyncApiCalls.js":"eZAJC","../generalFunctions/styleChanges.js":"k9936","../users/creatingUserObjects.js":"ljenU","../users/gettingUserData.js":"7IwCB","../generalFunctions/variables.js":"ej1YI","./rendering.js":"bUvzx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qxDU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mutualHandler", ()=>mutualHandler
);
parcelHelpers.export(exports, "responseModalHandler", ()=>responseModalHandler
);
var _generalJs = require("../generalFunctions/general.js");
var _styleChangesJs = require("../generalFunctions/styleChanges.js");
var _showingUserDataJs = require("../users/showingUserData.js");
var _variablesJs = require("../generalFunctions/variables.js");
const mutualHandler = function(event) {
    if (_generalJs.selectingTarget(event).contains("go-back")) {
        _generalJs.clearElement(_variablesJs.userDetails);
        _generalJs.clearElement(_variablesJs.userForms);
        _showingUserDataJs.showUserList();
        _styleChangesJs.removeHide(_variablesJs.usersList);
        _styleChangesJs.addHide(_variablesJs.userDetails);
        _styleChangesJs.addHide(_variablesJs.userForms);
        _styleChangesJs.hideSpinner();
    }
    if (_generalJs.selectingTarget(event).contains("go-back-create")) {
        _generalJs.clearElement(_variablesJs.userForms);
        _styleChangesJs.removeHide(_variablesJs.usersList);
        _styleChangesJs.removeHide(_variablesJs.userListSection);
        _showingUserDataJs.showUserList();
        _styleChangesJs.addHide(_variablesJs.userForms);
        _styleChangesJs.hideSpinner();
    }
};
const responseModalHandler = function(event) {
    const responseMessage = document.querySelector(".response-message");
    if (event.target == _variablesJs.responseMessageModal) {
        responseMessage.parentNode.removeChild(responseMessage);
        _variablesJs.responseMessageModal.style.display = "none";
    }
};

},{"../generalFunctions/general.js":"5aKxX","../generalFunctions/styleChanges.js":"k9936","../users/showingUserData.js":"2YlRm","../generalFunctions/variables.js":"ej1YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dRf9z","4pp4s"], "4pp4s", "parcelRequire000e")

//# sourceMappingURL=index.4de9b498.js.map
