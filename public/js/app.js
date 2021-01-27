/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~dynamicMap":"vendors~dynamicMap","dynamicMap":"dynamicMap","vendors~canvg":"vendors~canvg","vendors~pdfmake":"vendors~pdfmake","vendors~xlsx":"vendors~xlsx","xlsx":"xlsx"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./resources/js/helper/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var GetByID = function GetByID(id) {
  return document.getElementById(id);
};

$.extend($.expr[':'], {
  role: function role(obj, index, meta) {
    return $(obj).is(":not([role])");
  }
});
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
  var stopAllYouTubeVideos, all, world, segments, importMap, mapConst, cbclick, currencyFormatDE, currencyFormat, currencyFormatTwo, logSubmit, instance, checkIDs, selectsInstance, groupSelector, len, tailSelect, clientHeight, resize, ToDisable, renderSelect, clearSelect, showLoader, hideLoader, activeSelect, activeOrDisabledChekbox, nestedChekbox, checkboxses, checkboxsesFirstTab, thousands_separators, mystr, clicked, resData, groupParamsByKey, changeTypeOption, submitBtn, form, formData, SearchParams, entries, params, chkMonth, arraofids, addIDs, checkDropdownID, arrToAdd, dropdownNames, addChildren, removeChildren, items, getDropdownByName, DisableYear, hssTitle, selectsData, renderSelects, getFirstDigit, getAllHSData, getHSData, isHs2Changed, isHs4Changed, isHs6Changed, arrToCheck, itemKey, selected, reg, isHs4Check, isHs6Check, sitcGroup, sitcGroup2, countryArr, getAllCountries, getCountry;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          localStorage.setItem('currentMonth', $('#month :selected').val());

          stopAllYouTubeVideos = function stopAllYouTubeVideos() {
            var iframes = document.querySelectorAll('iframe');
            Array.prototype.forEach.call(iframes, function (iframe) {
              iframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'stopVideo'
              }), '*');
            });
          };

          $('#exampleModalCenter').on('hidden.bs.modal', function () {
            stopAllYouTubeVideos();
          });
          all = document.getElementById('all');
          world = document.getElementById('world');
          segments = window.location.pathname.split('/').filter(function (i) {
            return i !== "";
          }); //secondLastSegment = segments[segments.length];

          if (!(segments[1] == "map")) {
            _context3.next = 14;
            break;
          }

          _context3.next = 9;
          return Promise.all(/*! import() | dynamicMap */[__webpack_require__.e("vendors~dynamicMap"), __webpack_require__.e("dynamicMap")]).then(__webpack_require__.bind(null, /*! ./page/map */ "./resources/js/page/map/index.js"));

        case 9:
          importMap = _context3.sent;
          mapConst = new importMap.Map();
          mapConst.render(); //let  mapObj = new map();
          //console.log('mapConst', mapConst)
          //console.log('axsios', axios)

          _context3.next = 120;
          break;

        case 14:
          cbclick = function cbclick(e) {
            e = e || event;
            var cb = e.srcElement || e.target;

            if (cb.type !== 'checkbox') {
              return true;
            }

            var cbxs = document.querySelectorAll('input[dataName="groupThree"]');
            var cbs = document.querySelectorAll('input[dataName="groupOne"]');
            var i = cbxs.length;
            var j = cbs.length;

            while (i--) {
              if (cbxs[i].type && cbxs[i].type == 'checkbox' && cbxs[i].id !== cb.id) {
                cbxs[i].checked = false;
              }
            }

            while (j--) {
              if (cbs[j].type && cbs[j].type == 'checkbox' && cbs[j].id !== cb.id) {
                cbs[j].checked = false;
              }
            }
          };

          currencyFormatDE = function currencyFormatDE(num) {
            return num.toFixed(1) // always two decimal digits
            .replace('.', '.') // replace decimal point character with ,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // use . as a separator
          };

          currencyFormat = function currencyFormat(num) {
            return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
          };

          currencyFormatTwo = function currencyFormatTwo(num) {
            return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
          };

          logSubmit = function logSubmit(e) {
            showLoader();
            var formData = new FormData(e.target);
            formData.append('lang', lang);
            formData.append('default', 'false');
            var SearchParams = new URLSearchParams(formData);
            changeTypeOption(SearchParams);
            var params = groupParamsByKey(SearchParams);
            resData(SearchParams, params);
            return false;
          };

          instance = [];
          checkIDs = ["flow", "year", "quarter", "month", "hssec", "hs2", "hs4", "hs6", "bec", "sitc", "country", "transout", "cost", "grp", "parameters"];
          selectsInstance = {};
          groupSelector = document.getElementById("grp");
          len = groupSelector.selectedOptions.length;

          tailSelect = function tailSelect(id) {
            var sel = document.getElementById(id);
            var length = sel.selectedOptions.length;
            var isYear = id == "year" ? true : false;
            var isQuarter = id == "quarter" ? true : false;
            var isMonth = id == "month" ? true : false;
            var isType = id == "flow" ? true : false;
            var isCountry = id == "country" ? true : false;
            var isGrp = id == "grp" ? true : false;
            var isTransport = id == "transout" ? true : false;
            var isCost = id == "cost" ? true : false;
            var isHss = id == "hssec" ? true : false;
            var isHs2 = id == "hs2" ? true : false;
            var isHs4 = id == "hs4" ? true : false;
            var isHs6 = id == "hs6" ? true : false;
            var bec = id == "bec" ? true : false;
            var sitc = id == "sitc" ? true : false;
            var parameters = id == "parameters" ? true : false;
            instance[id] = tail("#" + id, {
              multiPinSelected: true,
              multiSelectAll: !parameters ? true : false,
              multiple: !isType && !parameters ? true : false,
              deselect: true,
              placeholder: '',
              search: !isType && !isGrp && !isCost && !isYear && !isQuarter && !isMonth && !parameters ? true : false,
              multiShowCount: false,
              multiContainer: length > 1 ? false : true,
              locale: lang,
              descriptions: true,
              searchMinLength: 1,
              sortItems: true,
              disabled: !isYear && !isType && !isCountry && !isGrp && !isTransport && !isCost ? true : false,
              stayOpen: true,
              hideSelected: isHs4 && isHs6 ? true : false
            });
          };

          checkIDs.map(function (item) {
            tailSelect(item);
          });
          clientHeight = document.getElementById("two").clientHeight;
          document.getElementById("one").style.height = clientHeight + "px";
          document.getElementById("three").style.height = clientHeight + "px";

          resize = function resize() {
            clientHeight = document.getElementById("two").clientHeight;
            document.getElementById("one").style.height = clientHeight + "px";
            document.getElementById("three").style.height = clientHeight + "px";
          };

          window.addEventListener("resize", resize);
          ToDisable = document.querySelectorAll('input[dataName="groupOne"]');

          _toConsumableArray(ToDisable).forEach(function (el) {
            el.addEventListener('click', function (event) {
              if (event.target.dataset.selectid == 'quarter') {
                instance['month'].options.all('unselect');
              } else {
                instance['quarter'].options.all('unselect');
              }
            });
          });

          renderSelect = function renderSelect(id, tableName, colmName) {
            instance[id].on("open", function (e) {
              var hs4Input = instance[id].search.querySelector("input");
              hs4Input.addEventListener("input", function (event) {
                if (event.target.value.length > 1) {
                  axios.get("api/getDataHs4", {
                    params: {
                      val: event.target.value,
                      lang: lang,
                      tableName: tableName,
                      colmName: colmName
                    }
                  }).then(function (response) {
                    var data = response.data;
                    var htmlData = data.html;

                    if (htmlData) {
                      GetByID(id).innerHTML = htmlData;
                    } else {
                      GetByID(id).innerHTML = "";
                    }

                    instance[id].reload();
                    instance[id].open(true);
                    var hs4Input = instance[id].search.querySelector("input");
                    hs4Input.value = event.target.value; //console.log(response.data);
                  })["catch"](function (error) {
                    console.log(error);
                  });
                }
              });
            });
          };

          axios.get("api/getDataHs2", {
            params: {
              lang: lang
            }
          }).then(function (response) {
            var data = response.data;
            var htmlData = data.html;
            GetByID("hs2").innerHTML = htmlData; //console.log(data);
          })["catch"](function (error) {//console.log(error);
          });
          renderSelect("hs4", "Hs4", "hs4_id");
          renderSelect("hs6", "Hs6", "hs6_id");
          $('[data-toggle="tooltip"]').tooltip();

          clearSelect = function clearSelect(arr) {
            arr.map(function (elm) {
              instance[elm.dataset.selectid].config("disabled", true);
            }); //return arr.some(elem => elem.checked == true);
          };

          showLoader = function showLoader() {
            JsLoadingOverlay.show({
              'overlayBackgroundColor': '#666666',
              'overlayOpacity': 0.6,
              'spinnerIcon': 'line-scale-party',
              'spinnerColor': '#0080be',
              'spinnerSize': '2x',
              'overlayIDName': 'overlay',
              'spinnerIDName': 'spinner'
            });
          };

          hideLoader = function hideLoader() {
            JsLoadingOverlay.hide();
          };

          activeSelect = function activeSelect(instance, selectId, activeOrdisable) {
            var activeelect = Object.keys(instance).filter(function (key) {
              return selectId == key;
            }).map(function (elm) {
              return instance[elm];
            })[0];
            activeelect.config("disabled", activeOrdisable);
          };

          activeOrDisabledChekbox = function activeOrDisabledChekbox(arr, type) {
            var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            return function (event) {
              var _this = event.currentTarget;
              var selectId = _this.dataset.selectid; // instance[selectId].init();

              if (type == 'groupOne') {
                instance[selectId].options.all('unselect');
                clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked);
              } else if (type == "groupTwo") {
                instance[selectId].options.all('unselect'); // clearSelect(arr);

                activeSelect(instance, selectId, !_this.checked);
              } else if (type == "groupThree") {
                instance[selectId].options.all('unselect');
                clearSelect(arr);
                activeSelect(instance, selectId, !_this.checked);
              }
            };
          };

          nestedChekbox = document.querySelectorAll('input[dataName="groupTwo"]');
          checkboxses = document.querySelectorAll('input[dataName="groupThree"]');
          checkboxsesFirstTab = document.querySelectorAll('input[dataName="groupOne"]'); //[...nestedChekbox].map(elm => {
          //console.log("elm", elm);
          // elm.disabled = false;
          //});

          _toConsumableArray(checkboxses).map(function (elem) {
            elem.addEventListener("click", cbclick);
            elem.addEventListener("input", activeOrDisabledChekbox(_toConsumableArray(checkboxses), 'groupThree', true));
          });

          _toConsumableArray(checkboxsesFirstTab).map(function (elem) {
            elem.addEventListener("click", cbclick);
            elem.addEventListener("input", activeOrDisabledChekbox(_toConsumableArray(checkboxsesFirstTab), 'groupOne', true));
          });

          _toConsumableArray(nestedChekbox).map(function (elem) {
            // console.log("elem", elem);
            elem.addEventListener("input", activeOrDisabledChekbox(_toConsumableArray(nestedChekbox), 'groupTwo', false));
          });

          thousands_separators = function thousands_separators(num) {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
          };

          mystr = '';
          clicked = '';

          resData = function resData(params, ifParams) {
            var sumCheck = document.getElementById('sumval');
            var marker = document.getElementById('marker');
            var style = 'none';
            marker.style.display = "none";
            axios.get("api/displayTable", {
              params: params,
              lang: lang
            }).then(function (response) {
              var regParams = Object.keys(ifParams).reduce(function (previous, key) {
                var regKey = key.replace(/[\W_]+/g, "");
                previous[regKey] = ifParams[key];
                return previous;
              }, {});
              var items = {};
              var data = response.data;
              var htmlData = data.data; //var newarr=htmlData.filter(o => o.year == 2019);
              // var newArr =  htmlData.map(function(val,index){ 
              //     console.log("val", val);
              //    return htmlData.filter(val => val.year ==2019); 
              // }) 

              for (var t = 0; t < htmlData.length; t++) {
                items[htmlData[t].year] = htmlData[t].usd1000total;
              }

              console.log("items", items);

              var filterByYear = function filterByYear(obj, y) {
                var newArr;
                newArr = obj.filter(function (o) {
                  return o.year == y;
                });
                return '<td>' + newArr[0].usd1000total + '</td>';
              };

              var tablelang = lang == 'ka' ? 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Georgian.json' : 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json';
              var align, rowWidth, rowBreak, suppStyle, tonsStyle, exportLang, stringTitle;
              lang == 'ka' ? stringTitle = 'მონაცემები ტრანსპორტირების სახეების მიხედვით ხელმისაწვდომია 2016 წლიდან.' : stringTitle = 'მონაცემები ტრანსპორტირების სახეების მიხედვით ხელმისაწვდომია 2016 წლიდან.';

              if (htmlData.length == 1 && regParams.country && regParams.grp) {
                delete regParams.country;
              }

              if (htmlData !== null) {
                var _$$DataTable;

                if (document.getElementById('table_id').innerHTML.trim() !== "") {
                  $('#table_id').DataTable().clear().destroy();
                }

                var html = '<thead>';
                html += '<tr>';
                Object.keys(htmlData[0]).forEach(function (key) {
                  if (key == 'grp') {
                    marker.style.display = "block";
                  }

                  if (key == 'year') {
                    align = 'center';
                  } else if (key == 'month' || key == 'flow' || key == 'quarter' || key == 'country' || key == 'trasout' || key == 'hssec' || key == 'hs2' || key == 'hs4' || key == 'hs6' || key == 'bec1' || key == 'sitc1') {
                    align = 'center';
                  } else if (key === "usd1000total" || key === "tonstotal" || key === "supputotal") {
                    align = 'right';
                  }

                  if (sumCheck.checked) {
                    if (key == 'month' || key == 'quarter') {
                      style = 'contents';

                      if (lang == 'ka') {
                        mystr = ' (მოცემულ ველში ასახულია ის პერიოდები როცა განხორციელდა სავაჭრო ნაკადი)';
                      } else {
                        mystr = ' (Actual trade flows are presented in the current field)';
                      }
                    } else {
                      mystr = '';
                      style = 'none';
                    }
                  }

                  if (key !== 'month' && key !== 'quarter') {
                    if (key !== 'type_name' && regParams[key] !== undefined || key === "usd1000total" || key === "tonstotal") {
                      if (key == 'transout' && $('#transout :selected').text() !== '') {
                        html += '<th style="text-align:' + align + ';">' + Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, key) + ' <i class="fas fa-info-circle hideClass"  title="' + stringTitle + '"></i></th>';
                      } else {
                        if (key == 'year') {
                          for (var _i = 0, _Object$entries = Object.entries(items); _i < _Object$entries.length; _i++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                                _key = _Object$entries$_i[0],
                                value = _Object$entries$_i[1];

                            html += '<th style="text-align:' + align + ';">' + _key + '</th>';
                          }
                        } else {
                          html += '<th style="text-align:' + align + ';">' + Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, key) + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
                        }
                      }
                    } else if (key == 'supputotal') {
                      html += '<th id="suppu" style="text-align:' + align + ';">' + Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, key) + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
                      html += '<th id="" style="text-align:' + align + ';">' + Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 'unit') + ' <i class="fas fa-info-circle hideClass" id="info" style="display:' + style + ';" title="' + mystr + '"></i></th>';
                    }
                  }
                });
                html += '</tr>';
                html += '</thead>';
                html += '<tbody>';
                htmlData.forEach(function (value, key) {
                  html += '<tr>';
                  Object.keys(value).forEach(function (nKey) {
                    nKey == 'month' ? rowWidth = '23%' : rowWidth = '';
                    nKey == 'month' ? rowBreak = 'break-all' : rowBreak = '';

                    if ($('#hs2 :selected').val() == 77 || $('#hs4 :selected').val() == 7700 || $('#hs6 :selected').val() == 770000) {
                      suppStyle = 'none';
                    } else {
                      suppStyle = 'table-cell';
                    }

                    if ($('#hs6 :selected').val() == 271111) {
                      tonsStyle = 'none';
                    } else {
                      tonsStyle = 'table-cell';
                    }

                    if (nKey == 'year') {
                      align = 'center';
                    } else if (nKey == 'month' || nKey == 'flow' || nKey == 'quarter' || nKey == 'country' || nKey == 'trasout' || nKey == 'hssec' || nKey == 'hs2' || nKey == 'hs4' || nKey == 'hs6' || nKey == 'bec1' || nKey == 'sitc1') {
                      align = 'left';
                    } else if (nKey === "usd1000total" || nKey === "tonstotal" || nKey === "supputotal") {
                      align = 'right';
                    }

                    if (nKey !== 'type_name' && regParams[nKey] !== undefined && nKey !== 'month' && nKey !== 'quarter' || nKey == 'supputotal' || nKey === "usd1000total" || nKey === "tonstotal") {
                      if (nKey == 'usd1000total') {
                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';">' + currencyFormat(value[nKey]) + '</td>';
                      } else if (nKey == 'supputotal') {
                        if (($('#country :selected').text() !== '' || $('#grp :selected').text() !== '' || $('#transout :selected').text() !== '') && ($('#hs4 :selected').val() == 0 || $('#hs4 :selected').val() == 2716 || $('#hs6 :selected').val() == 271600 || $('#hs6 :selected').val() == 271121 || $('#hs6 :selected').val() == 0) && $('#country :selected').val() !== 'all') {
                          if (document.getElementById("addTxt")) {
                            document.getElementById("addTxt").style.display = "block";
                          }

                          html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + suppStyle + ';">' + "..." + '</td>';
                          html += '<td style="text-align:' + align + ';width:' + rowWidth + ';">' + "..." + '</td>';
                        } else {
                          html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + suppStyle + ';">' + currencyFormatTwo(value[nKey]) + '</td>';
                          html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + suppStyle + ';">' + value['unit'] + '</td>';
                        }
                      } else if (nKey == 'tonstotal') {
                        html += '<td style="text-align:' + align + ';width:' + rowWidth + ';display:' + tonsStyle + ';">' + currencyFormat(value[nKey]) + '</td>';
                      } else {
                        if (document.getElementById("addTxt")) {
                          document.getElementById("addTxt").style.display = "none";
                        }

                        if (nKey = 'year') {
                          for (var _i2 = 0, _Object$entries2 = Object.entries(items); _i2 < _Object$entries2.length; _i2++) {
                            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                                Skey = _Object$entries2$_i[0],
                                Svalue = _Object$entries2$_i[1];

                            html += '<td style="text-align:' + align + ';>' + Svalue + '</td>';
                          }
                        } else {
                          html += '<td style="text-align:' + align + ';width:' + rowWidth + ';word-break:' + rowBreak + ';">' + value[nKey] + '</td>';
                        }
                      }
                    }
                  });
                  html += '</tr>';
                });
                html += '</tbody>';
                document.getElementById("table_id").innerHTML = html;
                var table = $("#table_id").DataTable((_$$DataTable = {
                  pageLength: 30,
                  lengthChange: false,
                  searching: false,
                  language: {
                    url: tablelang
                  },
                  colReorder: true,
                  autoWidth: false,
                  sScrollX: "100%",
                  sScrollXInner: "100%",
                  bScrollCollapse: true
                }, _defineProperty(_$$DataTable, "colReorder", true), _defineProperty(_$$DataTable, "dom", "lBfrtip"), _defineProperty(_$$DataTable, "buttons", [{
                  extend: 'excelHtml5',
                  text: exportLang = lang == 'ka' ? 'ჩამოტვირთვა' : 'Download Data',
                  exportOptions: {
                    format: {
                      body: function body(data, row, column, node) {
                        var regExp = new RegExp('([0-9.+])(,)([0-9.+])', 'g');

                        if (data.match(regExp)) {
                          data = data.replace(regExp, "$1$3");
                        }

                        return data;
                      }
                    }
                  },
                  charset: 'utf-8',
                  fieldSeparator: ';',
                  fieldBoundary: '',
                  filename: 'Download Data',
                  bom: true,
                  action: function action(e, dt, node, config) {
                    $.fn.dataTable.ext.buttons.excelHtml5.action.call(this, e, dt, node, config);
                  }
                }]), _$$DataTable));
                hideLoader();

                if (($('#country :selected').text() !== '' || $('#grp :selected').text() !== '' || $('#transout :selected').text() !== '' || $('#hs4 :selected').val() == 0) && ($('#hs2 :selected').val() == 77 || $('#hs4 :selected').val() == 7700 || $('#hs6 :selected').val() == 770000)) {
                  document.getElementById("suppu").style.display = "none";
                }
              } else {
                $('#table_id').DataTable().clear(); // hideLoader();
              }
            })["catch"](function (error) {
              hideLoader();
              console.log(error);
            });
          };

          groupParamsByKey = function groupParamsByKey(params) {
            return _toConsumableArray(params.entries()).reduce(function (acc, tuple) {
              var _tuple = _slicedToArray(tuple, 2),
                  key = _tuple[0],
                  val = _tuple[1];

              if (acc.hasOwnProperty(key)) {
                if (Array.isArray(acc[key])) {
                  acc[key] = [].concat(_toConsumableArray(acc[key]), [val]);
                } else {
                  acc[key] = [acc[key], val];
                }
              } else {
                acc[key] = val;
              }

              return acc;
            }, {});
          };

          changeTypeOption = function changeTypeOption(SearchParams) {
            if (SearchParams.get('flow[]') && SearchParams.get('flow[]') == 'E') {
              SearchParams.set('flow[]', 'RE');
              SearchParams.append('flow[]', 'DE');
            } else if (SearchParams.get('flow[]') && SearchParams.get('flow[]') == 'CI') {
              SearchParams.set('flow[]', 'RE');
              SearchParams.append('flow[]', 'DE');
              SearchParams.append('flow[]', 'I');
              SearchParams.append('flow[]', 'I');
            } else if (SearchParams.get('flow[]') && SearchParams.get('flow[]') == 'BA') {
              SearchParams.set('flow[]', 'RE');
              SearchParams.append('flow[]', 'DE');
              SearchParams.append('flow[]', 'I');
              SearchParams.append('flow[]', 'BA');
            }
          };

          submitBtn = document.getElementById('filterSubmit');
          form = document.getElementById('filterForm');
          formData = new FormData(form);
          formData.append('lang', lang);
          formData.append('default', 'true');
          SearchParams = new URLSearchParams(formData);
          entries = SearchParams.entries();
          params = groupParamsByKey(SearchParams);
          changeTypeOption(SearchParams);
          resData(SearchParams, params);
          submitBtn.addEventListener('click', function (event) {
            event.preventDefault();
            form.dispatchEvent(new Event('submit')); //form.submit();
          });
          form.onsubmit = logSubmit;
          chkMonth = document.querySelectorAll("[data-selectid='month']");
          chkMonth.checked = true;

          if (chkMonth.checked) {
            instance[chkMonth[0].dataset.selectid].config("disabled", false);
          }

          arraofids = ['year', 'quarter', 'month', 'cost', 'country', 'grp', 'transout', 'hssec', 'hs2', 'hs4', 'hs6', 'bec', 'sitc'];

          addIDs = function addIDs() {
            var buttonsnList = document.getElementsByClassName("tail-all");

            for (var i = 0; i < buttonsnList.length; i++) {
              buttonsnList[i].dataset.id = arraofids[i];

              buttonsnList[i].onclick = function () {
                instance[this.getAttribute('data-id')].label.innerHTML = "<span class=\"label-inner\">".concat(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 'MultipleValuesChoose'), "</span>");
              };
            }
          };

          checkIDs.map(function (ids) {
            instance[ids].on('open', function (item, state) {
              addIDs();
            });
          });

          checkDropdownID = function checkDropdownID() {
            arraofids.map(function (items) {
              instance[items].on('change', function (item, state) {
                if (instance[items].value()) {
                  if (instance[items].value().length < 1 || instance[items].value().length == undefined) {
                    instance[items].value().forEach(function (itm) {
                      var undo = instance[items].options.get(itm, '#');
                      instance[items].update(_objectSpread(_objectSpread({}, undo), {}, {
                        selected: true
                      }));
                    });
                  } else if (instance[items].value().length > 1) {
                    instance[items].label.innerHTML = "<span class=\"label-inner\">".concat(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, 'MultipleValues'), "</span>");
                  } else {
                    instance[items].value().forEach(function (itm) {
                      var undo = instance[items].options.get(itm, '#');
                      instance[items].update(_objectSpread(_objectSpread({}, undo), {}, {
                        selected: true
                      }));
                    });
                  }
                }
              });
            });
          };

          arraofids.map(function (items) {
            instance[items].on('change', function (item, state) {
              checkDropdownID();
            });
          });
          instance["parameters"].on('open', function (item, state) {
            var fooStyle = document.querySelector("#groups > .tail-select > .select-dropdown");
            fooStyle.style.maxHeight = "";
            var fooEls = document.querySelector("#groups > .tail-select > .select-dropdown > .dropdown-inner");
            var node = document.createElement("div");
            var textnode = document.createTextNode(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, "close"));
            node.appendChild(textnode);
            node.classList.add('mybtn');
            fooEls.before(node);
            var fooBtn = document.querySelector("#groups > .tail-select > .select-dropdown > .mybtn");

            if (fooBtn) {
              fooBtn.addEventListener('click', function (e) {
                instance["parameters"].close("true");
              });
            }
          });
          instance["parameters"].on('close', function (item, state) {
            var fooEls = document.querySelector("#groups .mybtn");
            fooEls.remove();
          });
          arrToAdd = ['year', 'quarter', 'month', 'cost', 'country', 'grp', 'transout', 'hssec', 'hs2', 'hs4', 'hs6', 'bec', 'sitc'];
          dropdownNames = ['flow', 'year', 'quarter', 'month', 'cost', 'country', 'grp', 'transout', 'hssec', 'hs2', 'hs4', 'hs6', 'bec', 'sitc'];

          addChildren = function addChildren() {
            var node = document.createElement("div");
            var textnode = document.createTextNode(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, "close"));
            var dropdownList = document.getElementsByClassName("dropdown-action");
            node.classList.add('mybtn');
            node.appendChild(textnode);

            for (var i = 0; i < dropdownList.length; i++) {
              node.dataset.id = arrToAdd[i];
              dropdownList[i].appendChild(node.cloneNode(true));
            }
          };

          removeChildren = function removeChildren() {
            var buttonList = document.getElementsByClassName("mybtn");

            for (var u = 0; u < buttonList.length; u++) {
              while (buttonList.length > 0) {
                buttonList[u].remove();
              }
            }
          };

          dropdownNames.map(function (itm) {
            instance[itm].on('open', function (item, state) {
              removeChildren();
              addChildren();
            });
            instance[itm].on('close', function (item, state) {
              removeChildren();
            });
          });
          checkIDs.map(function (itms) {
            instance[itms].on('open', function (item, state) {
              var clsButton = document.querySelectorAll('[data-id]');

              if (clsButton) {
                for (var i = 0; i < clsButton.length; i++) {
                  clsButton[i].addEventListener('click', function (e) {
                    instance[e.target.dataset.id].close("true");
                    var dropdownLabel = document.getElementById(itms);
                    var optionlength = dropdownLabel.selectedOptions.length;
                    removeChildren();
                  });
                }
              }
            });
          });
          items = {};

          getDropdownByName = function getDropdownByName() {
            var el;
            dropdownNames.forEach(function (item) {
              var names = document.getElementById(item);

              names.onchange = function (e) {
                el = e.currentTarget.id;
                instance[el].on('change', function (item, state) {
                  if (state == 'select') {
                    items[el] = Object(_helper__WEBPACK_IMPORTED_MODULE_1__["translate"])(lang, el);
                    instance["parameters"].config("disabled", false);
                    instance["parameters"].config("items", items);

                    if (instance["parameters"]) {
                      if ($('#flow :selected').val() == 'DE' || $('#flow :selected').val() == 'RE') {
                        instance["parameters"].options.remove("year", "#", true);
                      }
                    }
                  }
                });
              };
            });
          };

          getDropdownByName();

          DisableYear = function DisableYear(sflow) {
            var iterator, div_list, div_array;

            if (sflow == 'RE' || sflow == 'DE') {
              for (var i = 1; i <= 6; i++) {
                iterator = 2014 - i;
                div_list = document.querySelectorAll("[data-key='" + iterator + "']");
                div_array = _toConsumableArray(div_list);
                div_array.forEach(function (div) {
                  div.style.pointerEvents = "none";
                  div.style.color = "lightgrey";
                });
              }
            } else {
              for (var i = 1; i <= 6; i++) {
                iterator = 2014 - i;
                div_list = document.querySelectorAll("[data-key='" + iterator + "']");
                div_array = _toConsumableArray(div_list);
                div_array.forEach(function (div) {
                  div.style.pointerEvents = "";
                  div.style.color = "";
                });
              }
            }
          };

          instance['flow'].on('change', function (item, state) {
            DisableYear(item.key);

            if (item.key == 'RE' || item.key == 'DE') {
              instance['year'].options.all("unselect", "#");
            }
          });
          instance['year'].on('change', function (item, state) {
            //var assign = assignFlow;
            var iterate, div_list, div_array; //DisableYear(item.key);

            var e = document.getElementById("flow");
            var strUser = e.value;

            if (strUser == 'RE' || strUser == 'DE') {
              for (var k = 1; k <= 6; k++) {
                iterate = 2014 - k;
                div_list = document.querySelectorAll("[data-key='" + iterate + "']");
                div_array = _toConsumableArray(div_list);
                div_array.forEach(function (div) {
                  div.style.pointerEvents = "none";
                  div.style.color = "lightgrey";
                });
              }
            }
          });

          hssTitle = function hssTitle() {
            var langs = {
              ka: ["ცოცხალი ცხოველები; ცხოველური წარმოშობის პროდუქტები", "მცენარეული წარმოშობის პროდუქტები", "ცხოველური ან მცენარეული წარმოშობის ცხიმები და ზეთები და მათი გახლეჩის პროდუქტები; მზა საკვები ცხიმები; ცხოველური ან მცენარეული წარმოშობის ცვილები", "კვების მზა პროდუქტები; ალკოჰოლიანი და უალკოჰოლო სასმელები და ძმარი; თამბაქო და მისი შემცვლელები", "მინერალური პროდუქტები", "ქიმიური და მასთან დაკავშირებული მრეწველობის დარგების პროდუქცია", "პლასტმასები და მათი ნაწარმი; კაუჩუკი, რეზინი და მათი ნაწარმი", "დაუმუშავებელი ტყავები, გამოქნილი ტყავი, ნატურალური ბეწვი და მათი ნაწარმი; სასარაჯო-საუნაგირე ნაწარმი და აკაზმულობა; სამგზავრო ნივთები, ქალის ჩანთები და ანალოგიური საქონელი; ნაწარმი ცხოველების ნაწლავებისაგან (აბრეშუმის ჭიის ფიბრიონის ბოჭკოს გარდა)", "მერქანი და მერქნის ნაწარმი; ხის ნახშირი; კორპი და მისი ნაწარმი; ჩალის, ალფის ან სხვა მასალის წნული; კალათები და სხვა მოწნული ნაწარმი", "მასა მერქნის ან სხვა ბოჭკოვანი და ცელულოზური მასალებისგან; რეგენერირებული ქაღალდი ან მუყაო (მაკულატურა და ნარჩენები); ქაღალდი, მუყაო და მათი ნაწარმი", "ტექსტილის (საფეიქრო) მასალები და ტექსტილის ნაწარმი", "ფეხსაცმელი, თავსაბურავები, ქოლგები, მზისაგან დასაცავი ქოლგები, ხელჯოხები და ხელჯოხ-დასაჯდომები, შოლტები, მათრახები და მათი ნაწილები; დამუშავებული ნაკრტენი და მისი ნაწარმი; ხელოვნური ყვავილები; ნაწარმი ადამიანის თმისაგან", "ქვის, თაბაშირის, ცემენტის, აზბესტის, ქარსის ან ანალოგიური მასალების ნაწარმი; კერამიკული ნაწარმი; მინა და მისი ნაწარმი", "მარგალიტი ბუნებრივი ან კულტივირებული, ძვირფასი ან ნახევრადძვირფასი ქვები; ძვირფასი ლითონები, ძვირფასი ლითონებით მიტკეცილი ლითონები და მათი ნაწარმი; ბიჟუტერია; მონეტები", "არაძვირფასი ლითონები და მათი ნაწარმი", "მანქანები, მოწყობილობები და მექანიზმები; ელექტროტექნიკური მოწყობილობები; მათი ნაწილები; ბგერათჩამწერი და ბგერათაღმწარმოებელი აპარატურა; სატელევიზიო გამოსახულებისა და ხმის ჩამწერი და აღმწარმოებლი აპარატურა, მათი ნაწილები და საკუთნოები", "მიწისზედა სატრანსპორტო საშუალებები, საფრენი აპარატები, მცურავი საშუალებები და ტრანსპორტთან დაკავშირებული მოწყობილობები და დანადგარები", "ინსტრუმენტები და აპარატები ოპტიკური, ფოტოგრაფიული, კინემატოგრაფიული, საზომი, საკონტროლო, პრეციზიული, სამედიცინო ან ქირურგიული; ყველა სახის საათები; მუსიკალური ინსტრუმენტები; მათი ნაწილები და საკუთნოები", "იარაღი და საბრძოლო მასალები; მათი ნაწილები და საკუთნოები", "სხვადასხვა სამრეწველო საქონელი", "ხელოვნების ნიმუშები, საკოლექციო ნივთები და ანტიკვარიატი", "კლასიფიკაციის განსაკუთრებული პირობები; საქონელი, რომელიც არ არის განკუთვნილი ეკონომიკური საქმიანობისათვის;"],
              en: ["Live animals; animal products", "Vegetable products", "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes", "Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes", "Mineral products", "Products of the chemical or allied industries", "Plastics and articles thereof; rubber and articles thereof", "Raw hides and skins, leather, fur skins and articles thereof; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silk-worm gut)", "Wood and articles of wood; wood charcoal; cork and articles of cork; manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork", "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard; paper and paperboard and articles thereof", "Textiles and textile articles", "Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair", "Articles of stone, plaster, cement, asbestos, mica or similar materials; ceramic products; glass and glassware", "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal and articles thereof; imitation jewellery; coin", "Base metals and articles of base metal", "Machinery and mechanical appliances; electrical equipment; parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles", "Vehicles, aircraft, vessels and associated transport equipment", "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; clocks and watches; musical instruments; parts and accessories thereof", "Swords, cutlasses and similar arms and parts, scabbards and sheaths therefor", "Miscellaneous manufactured articles", "Works of art, collector's pieces and antiques", "Special classification provisions; Goods not intended for economic activity"]
            };
            var x = document.getElementById("hssHover");
            var y = x.childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes;

            for (var i = 0; i < y.length; i++) {
              y[i].setAttribute("title", langs[lang][i]);
            }
          };

          instance['hssec'].on('open', function (item, state) {
            hssTitle();
          });

          selectsData = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tableName, columnName) {
              var data;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return axios({
                        method: 'get',
                        url: '/api/selectsData',
                        params: {
                          tableName: tableName,
                          columnName: columnName,
                          lang: lang
                        }
                      });

                    case 2:
                      data = _context.sent;
                      return _context.abrupt("return", data);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function selectsData(_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }();

          renderSelects = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(divName, tableName, columnName) {
              var value, desc, red, hs2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return selectsData(tableName, columnName);

                    case 2:
                      hs2 = _context2.sent;
                      red = Object.keys(hs2.data.data).reduce(function (previous, key) {
                        value = tableName == 'CountryGroup' ? key : hs2.data.data[key];
                        desc = tableName == 'CountryGroup' ? {
                          description: hs2.data.data[key]
                        } : {};
                        previous[key] = _objectSpread({
                          value: value,
                          selected: true,
                          group: "#",
                          disabled: false
                        }, desc);
                        return previous;
                      }, {});
                      instance[divName].options.add(_objectSpread({}, red));
                      instance[divName].options.unselect(_objectSpread({}, red));

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function renderSelects(_x3, _x4, _x5) {
              return _ref3.apply(this, arguments);
            };
          }();

          _context3.next = 95;
          return renderSelects('grp', 'CountryGroup', 'name');

        case 95:
          getFirstDigit = function getFirstDigit(x) {
            while (x > 9) {
              x /= 10;
            }

            return x;
          };

          Array.prototype.remove = function () {
            var what,
                a = arguments,
                L = a.length,
                ax;

            while (L && this.length) {
              what = a[--L];

              while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
              }
            }

            return this;
          };

          getAllHSData = function getAllHSData(key, length) {
            axios.get("api/getAllHSData", {
              params: {
                codes: key,
                len: length,
                lang: lang
              }
            }).then(function (response) {
              var data = response.data;
              var dataHS2 = data.hs2;
              var dataHS4 = data.hs4;
              var dataHS6 = data.hs6;

              if (dataHS2 && dataHS4 && dataHS6) {
                if (response.data.length == 2 || response.data.length == 3) {
                  GetByID('hs4').innerHTML = dataHS4;
                  GetByID('hs6').innerHTML = dataHS6;
                } else if (response.data.length == 4 || response.data.length == 5) {
                  GetByID('hs2').innerHTML = dataHS2;
                  GetByID('hs6').innerHTML = dataHS6;
                } else if (response.data.length == 6 || response.data.length == 7) {
                  GetByID('hs2').innerHTML = dataHS2;
                  GetByID('hs4').innerHTML = dataHS4;
                }
              } else {
                GetByID('hs2').innerHTML = dataHS2;
                GetByID('hs4').innerHTML = dataHS4;
                GetByID('hs6').innerHTML = dataHS6;
              }

              instance['hs2'].reload();
              instance['hs4'].reload();
              instance['hs6'].reload();
            })["catch"](function (error) {
              console.log(error);
            });
          };

          getHSData = function getHSData(key, length) {
            axios.get("api/filterHSData", {
              params: {
                codes: key,
                len: length,
                lang: lang
              }
            }).then(function (response) {
              var data = response.data;
              var dataHS2 = data.hs2;
              var dataHS4 = data.hs4;
              var dataHS6 = data.hs6;

              if (dataHS2 && dataHS4 && dataHS6) {
                if (response.data.length == 2 || response.data.length == 3) {
                  GetByID('hs4').innerHTML = dataHS4;
                  GetByID('hs6').innerHTML = dataHS6;
                } else if (response.data.length == 4 || response.data.length == 5) {
                  GetByID('hs2').innerHTML = dataHS2;
                  GetByID('hs6').innerHTML = dataHS6;
                } else if (response.data.length == 6 || response.data.length == 7) {
                  GetByID('hs2').innerHTML = dataHS2;
                  GetByID('hs4').innerHTML = dataHS4;
                }
              } else {
                GetByID('hs2').innerHTML = "";
                GetByID('hs4').innerHTML = "";
                GetByID('hs6').innerHTML = "";
              } //instance['hs2'].reload();


              instance['hs4'].reload();
              instance['hs6'].reload();
            })["catch"](function (error) {
              console.log(error);
            });
          };

          isHs2Changed = document.getElementById('hs2').id;
          isHs4Changed = document.getElementById('hs4').id;
          isHs6Changed = document.getElementById('hs6').id;
          arrToCheck = [isHs2Changed];
          selected = [];
          reg = /^-?\d{2}/;
          arrToCheck.forEach(function (el) {
            instance[el].on('change', function (item, state) {
              var len = Math.ceil(Math.log10(item.key + 1));
              item.key < 10 ? itemKey = 0 + getFirstDigit(item.key) : itemKey = item.key.toString().match(reg)[0];

              if (state == 'select') {
                selected.push(itemKey);
                getHSData(selected, len);
              } else if (state == 'unselect') {
                selected.remove(itemKey);
                getAllHSData(selected, len);
              }
            });
          });
          isHs4Check = document.querySelector('[name="hs4"]');
          isHs6Check = document.querySelector('[name="hs6"]');

          if (instance['cost']) {
            instance['cost'].options.disable('tons', '#');
            instance['cost'].options.disable('suppu', '#');
          }

          [isHs4Check, isHs6Check].forEach(function (el) {
            el.addEventListener('change', function (event) {
              var isSomeCheck = [isHs4Check, isHs6Check].some(function (el) {
                return el.checked == true;
              });

              if (isSomeCheck) {
                instance['cost'].options.enable('tons', '#');
                instance['cost'].options.enable('suppu', '#');
              } else {
                instance['cost'].options.disable('tons', '#');
                instance['cost'].options.disable('suppu', '#');
              }
            });
          });
          sitcGroup = document.querySelectorAll('input[dataName="groupTwo"]');
          sitcGroup2 = document.querySelectorAll('input[dataName="groupThree"]');
          [].concat(_toConsumableArray(sitcGroup), _toConsumableArray(sitcGroup2)).forEach(function (el) {
            el.addEventListener('change', function (event) {
              var isSomeCheck = [].concat(_toConsumableArray(sitcGroup), _toConsumableArray(sitcGroup2)).some(function (el) {
                return el.checked == true;
              });

              if (isSomeCheck) {
                instance['flow'].options.disable('CI', '#');
                instance['flow'].options.disable('BA', '#');
              } else {
                instance['flow'].options.enable('CI', '#');
                instance['flow'].options.enable('BA', '#');
              }
            });
          });

          if (instance['flow']) {
            instance['flow'].on('change', function (item, state) {
              if (this.value() == 'CI' || this.value() == 'BA') {
                [].concat(_toConsumableArray(sitcGroup), _toConsumableArray(sitcGroup2)).map(function (el) {
                  el.disabled = true;
                  el.style.backgroundColor = "#fff";
                });
              } else {
                [].concat(_toConsumableArray(sitcGroup), _toConsumableArray(sitcGroup2)).map(function (el) {
                  el.disabled = false;
                  el.style.backgroundColor = "";
                });
              } //instance['flow'].options.disable('all', '#')

            });
          }

          if (instance['country']) {
            if (instance['country'].value().includes("world")) {
              instance['country'].options.disable('all', '#');
            } else if (instance['country'].value().includes("all")) {
              instance['country'].options.disable('world', '#');
            }
          }

          instance['country'].on('change', function (item, state) {
            if (item.key == 'world' && (state == 'select' || state == 'unselect')) {
              if (instance['country'].options.get('all', '#').disabled == true) {
                instance['country'].options.handle('enable', 'all', '#', true);
              } else if (instance['country'].options.get('all', '#').disabled == false) {
                instance['country'].options.handle('disable', 'all', '#', true);
              }
            } else if (item.key == 'all' && (state == 'select' || state == 'unselect')) {
              if (instance['country'].options.get('world', '#').disabled == true) {
                instance['country'].options.handle('enable', 'world', '#', true);
              } else if (instance['country'].options.get('world', '#').disabled == false) {
                instance['country'].options.handle('disable', 'world', '#', true);
              }
            }

            var That = this;

            if ((item.key == 'all' || item.key == 'world') && state == 'select') {
              Object.keys(That.options.items['#']).map(function (elm) {
                if (That.options.is('select', elm, '#')) {
                  if (elm !== 'all' && elm !== 'world') {
                    That.options.unselect(elm, '#');
                  }
                }
              });
            } else if ((item.key !== 'all' || item.key !== 'world') && state == 'select') {
              Object.keys(That.options.items['#']).map(function (elm) {
                if (That.options.is('select', elm, '#') && (elm == 'all' || elm == 'world')) {
                  That.options.unselect(elm, '#');
                }
              });
            }

            if (state == 'select') {//selectsInstance.config("disabled", true);
              //selectsInstance.options.all('unselect');
            } else {//instance['country'].config("disabled", false);
                //selectsInstance.config("disabled", false);
                // instance.options.all('unselect');
              }
          });
          countryArr = [];

          getAllCountries = function getAllCountries(par) {
            axios.get("api/getAllCountry", {
              params: {
                code: par,
                lang: lang
              }
            }).then(function (response) {
              var data = response.data;
              var htmlData = data.html;

              if (htmlData) {
                GetByID('country').innerHTML = htmlData;
              } else {
                GetByID('country').innerHTML = "";
              }

              instance['country'].reload();
            })["catch"](function (error) {
              console.log(error);
            });
          };

          getCountry = function getCountry(param) {
            axios.get("api/getCountry", {
              params: {
                code: param,
                lang: lang
              }
            }).then(function (response) {
              var data = response.data;
              var htmlData = data.html;

              if (htmlData) {
                GetByID('country').innerHTML = htmlData;
              } else {
                GetByID('country').innerHTML = "";
              }

              instance['country'].reload();
            })["catch"](function (error) {
              console.log(error);
            });
          };

          instance && instance["grp"].on('change', function (item, state) {
            if (state == 'select') {
              countryArr.push(item.value);
              getCountry(countryArr); // instance['country'].options.all('unselect');
              //instance['country'].config("disabled", true);
            } else if (state == 'unselect') {
              countryArr.remove(item.value);
              console.log(countryArr); //selectsInstance.config("disabled", false);

              getAllCountries(countryArr);
              instance['country'].options.all('unselect'); //instance['country'].config("disabled", false);
            }
          });

        case 120:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));

/***/ }),

/***/ "./resources/js/helper/index.js":
/*!**************************************!*\
  !*** ./resources/js/helper/index.js ***!
  \**************************************/
/*! exports provided: translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
var translate = function translate(lang, key) {
  var isDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  var languageList = null;

  if (lang === 'ka') {
    languageList = __webpack_require__(/*! ../locale/ka */ "./resources/js/locale/ka.js");
  } else {
    languageList = __webpack_require__(/*! ../locale/en */ "./resources/js/locale/en.js");
  }

  return languageList["".concat(isDefault)][key];
};

/***/ }),

/***/ "./resources/js/locale/en.js":
/*!***********************************!*\
  !*** ./resources/js/locale/en.js ***!
  \***********************************/
/*! exports provided: default, month, quarter, monthsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarter", function() { return quarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsEn", function() { return monthsEn; });
var _year$usd1000total$to;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_year$usd1000total$to = {
  year: 'Year',
  usd1000total: 'Thsd. USD',
  tonstotal: 'Tons',
  supputotal: 'Supplementary unit',
  month: 'Month',
  quarter: 'Quarter',
  type: 'Type',
  country: 'Country',
  hssec: 'HSSEC',
  hs2: 'HS2',
  hs4: 'HS4',
  hs6: 'HS6',
  bec1: 'BEC',
  sitc1: 'SITC',
  transout: 'Transport',
  grp: 'Country Group',
  flow: 'Trade Flows',
  unit: 'Unit',
  bec: 'BEC',
  sitc: 'SITC',
  usaDollar: '1000 US Dollar'
}, _defineProperty(_year$usd1000total$to, "year", ' Year '), _defineProperty(_year$usd1000total$to, "export", 'Export'), _defineProperty(_year$usd1000total$to, "quarter", 'Quarter'), _defineProperty(_year$usd1000total$to, "month", 'Month'), _defineProperty(_year$usd1000total$to, "MultipleValues", 'Multiple Values'), _defineProperty(_year$usd1000total$to, "select", 'Select'), _defineProperty(_year$usd1000total$to, "close", 'Close'), _defineProperty(_year$usd1000total$to, "choose", 'Multiple select'), _defineProperty(_year$usd1000total$to, "MultipleValuesChoose", 'All Values'), _defineProperty(_year$usd1000total$to, "sum", 'Sum'), _year$usd1000total$to); //const monthEn;

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var quarter = {
  1: '&#8544',
  2: '&#8545',
  3: '&#8546',
  4: '&#8547'
};
var monthsEn = [{
  title: 'January',
  value: '01'
}, {
  title: 'February',
  value: '02'
}, {
  title: 'March',
  value: '03'
}, {
  title: 'April',
  value: '04'
}, {
  title: 'May',
  value: '05'
}, {
  title: 'June',
  value: '06'
}, {
  title: 'July',
  value: '07'
}, {
  title: 'August',
  value: '08'
}, {
  title: 'September',
  value: '09'
}, {
  title: 'October',
  value: '10'
}, {
  title: 'November',
  value: '11'
}, {
  title: 'December',
  value: '12'
}];

/***/ }),

/***/ "./resources/js/locale/ka.js":
/*!***********************************!*\
  !*** ./resources/js/locale/ka.js ***!
  \***********************************/
/*! exports provided: default, month, quarter, monthsKa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarter", function() { return quarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsKa", function() { return monthsKa; });
var _year$usd1000total$to;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (_year$usd1000total$to = {
  year: 'წელი',
  usd1000total: '1000 აშშ დოლარი',
  tonstotal: 'ტონა',
  supputotal: 'დამატებითი ზომა',
  month: 'თვე',
  quarter: 'კვარტალი',
  type: 'ტიპი',
  country: 'ქვეყანა',
  hssec: 'კარი',
  hs2: 'HS2',
  hs4: 'HS4',
  hs6: 'HS6',
  bec1: 'BEC',
  sitc1: 'SITC',
  transout: 'ტრანსპორტი',
  grp: 'ქვეყნის ჯგუფი',
  flow: 'სავაჭრო ნაკადები',
  unit: 'ერთეული',
  bec: 'BEC',
  sitc: 'SITC',
  usaDollar: '1000 აშშ დოლარი'
}, _defineProperty(_year$usd1000total$to, "year", ' წელი '), _defineProperty(_year$usd1000total$to, "export", 'ექსპორტი'), _defineProperty(_year$usd1000total$to, "quarter", 'კვარტალი'), _defineProperty(_year$usd1000total$to, "month", 'თვე'), _defineProperty(_year$usd1000total$to, "MultipleValues", 'მონიშნულია რამდენიმე'), _defineProperty(_year$usd1000total$to, "select", 'აირჩიეთ'), _defineProperty(_year$usd1000total$to, "close", 'დახურვა'), _defineProperty(_year$usd1000total$to, "choose", 'არჩეულია რამდენიმე'), _defineProperty(_year$usd1000total$to, "MultipleValuesChoose", 'მონიშნულია ყველა'), _defineProperty(_year$usd1000total$to, "sum", 'ჯამი'), _year$usd1000total$to); //monthKa

var month = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
var quarter = {
  1: '&#8544',
  2: '&#8545',
  3: '&#8546',
  4: '&#8547'
};
var monthsKa = [{
  title: 'იანვარი',
  value: '01'
}, {
  title: 'თებერვალი',
  value: '02'
}, {
  title: 'მარტი',
  value: '03'
}, {
  title: 'აპრილი',
  value: '04'
}, {
  title: 'მაისი',
  value: '05'
}, {
  title: 'ივნისი',
  value: '06'
}, {
  title: 'ივლისი',
  value: '07'
}, {
  title: 'აგვისტო',
  value: '08'
}, {
  title: 'სექტემბერი',
  value: '09'
}, {
  title: 'ოქტომბერი',
  value: '10'
}, {
  title: 'ნოემბერი',
  value: '11'
}, {
  title: 'დეკემბერი',
  value: '12'
}];

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/vendor.scss":
/*!************************************!*\
  !*** ./resources/sass/vendor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/vendor.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/portal/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /Applications/MAMP/htdocs/portal/resources/sass/app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/portal/resources/sass/vendor.scss */"./resources/sass/vendor.scss");


/***/ })

/******/ });