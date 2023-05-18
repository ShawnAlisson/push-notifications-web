var PusherPushNotifications = (function (exports) {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _typeof = unwrapExports(_typeof_1);

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayLikeToArray);

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return arrayLikeToArray(arr);
	}
	module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(iterableToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}
	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
	}
	module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var toPrimitive = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];
	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPrimitive);

	var toPropertyKey = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];

	function _toPropertyKey(arg) {
	  var key = toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}
	module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPropertyKey);

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(obj, key, value) {
	  key = toPropertyKey(key);
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _defineProperty = unwrapExports(defineProperty);

	var asyncToGenerator = createCommonjsModule(function (module) {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }
	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	      args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);
	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }
	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }
	      _next(undefined);
	    });
	  };
	}
	module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _asyncToGenerator = unwrapExports(asyncToGenerator);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module) {
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass);

	function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	function doRequest(_ref) {
	  var method = _ref.method,
	    path = _ref.path,
	    _ref$params = _ref.params,
	    params = _ref$params === void 0 ? {} : _ref$params,
	    _ref$body = _ref.body,
	    body = _ref$body === void 0 ? null : _ref$body,
	    _ref$headers = _ref.headers,
	    headers = _ref$headers === void 0 ? {} : _ref$headers,
	    _ref$credentials = _ref.credentials,
	    credentials = _ref$credentials === void 0 ? 'same-origin' : _ref$credentials;
	  var options = {
	    method: method,
	    headers: headers,
	    credentials: credentials
	  };
	  if (!emptyParams(params)) {
	    // check for empty params obj
	    path += '?';
	    path += Object.entries(params).filter(function (x) {
	      return x[1];
	    }).map(function (pair) {
	      return pair.map(function (x) {
	        return encodeURIComponent(x);
	      }).join('=');
	    }).join('&');
	  }
	  if (body !== null) {
	    options.body = JSON.stringify(body);
	    options.headers = _objectSpread({
	      'Content-Type': 'application/json'
	    }, headers);
	  }
	  return fetch(path, options).then( /*#__PURE__*/function () {
	    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
	      return _regeneratorRuntime().wrap(function _callee$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            if (response.ok) {
	              _context.next = 3;
	              break;
	            }
	            _context.next = 3;
	            return handleError(response);
	          case 3:
	            _context.prev = 3;
	            _context.next = 6;
	            return response.json();
	          case 6:
	            return _context.abrupt("return", _context.sent);
	          case 9:
	            _context.prev = 9;
	            _context.t0 = _context["catch"](3);
	            return _context.abrupt("return", null);
	          case 12:
	          case "end":
	            return _context.stop();
	        }
	      }, _callee, null, [[3, 9]]);
	    }));
	    return function (_x) {
	      return _ref2.apply(this, arguments);
	    };
	  }());
	}
	function emptyParams(params) {
	  for (var i in params) return false;
	  return true;
	}
	function handleError(_x2) {
	  return _handleError.apply(this, arguments);
	}
	function _handleError() {
	  _handleError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
	    var errorMessage, _yield$response$json, _yield$response$json$, error, _yield$response$json$2, description;
	    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	      while (1) switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.prev = 0;
	          _context2.next = 3;
	          return response.json();
	        case 3:
	          _yield$response$json = _context2.sent;
	          _yield$response$json$ = _yield$response$json.error;
	          error = _yield$response$json$ === void 0 ? 'Unknown error' : _yield$response$json$;
	          _yield$response$json$2 = _yield$response$json.description;
	          description = _yield$response$json$2 === void 0 ? 'No description' : _yield$response$json$2;
	          errorMessage = "Unexpected status code ".concat(response.status, ": ").concat(error, ", ").concat(description);
	          _context2.next = 14;
	          break;
	        case 11:
	          _context2.prev = 11;
	          _context2.t0 = _context2["catch"](0);
	          errorMessage = "Unexpected status code ".concat(response.status, ": Cannot parse error response");
	        case 14:
	          throw new Error(errorMessage);
	        case 15:
	        case "end":
	          return _context2.stop();
	      }
	    }, _callee2, null, [[0, 11]]);
	  }));
	  return _handleError.apply(this, arguments);
	}

	function _regeneratorRuntime$1() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	var TokenProvider = /*#__PURE__*/function () {
	  function TokenProvider() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      url = _ref.url,
	      queryParams = _ref.queryParams,
	      headers = _ref.headers,
	      credentials = _ref.credentials;
	    _classCallCheck(this, TokenProvider);
	    this.url = url;
	    this.queryParams = queryParams;
	    this.headers = headers;
	    this.credentials = credentials;
	  }
	  _createClass(TokenProvider, [{
	    key: "fetchToken",
	    value: function () {
	      var _fetchToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$1().mark(function _callee(userId) {
	        var queryParams, encodedParams, options, response;
	        return _regeneratorRuntime$1().wrap(function _callee$(_context) {
	          while (1) switch (_context.prev = _context.next) {
	            case 0:
	              queryParams = _objectSpread$1({
	                user_id: userId
	              }, this.queryParams);
	              encodedParams = Object.entries(queryParams).map(function (kv) {
	                return kv.map(encodeURIComponent).join('=');
	              }).join('&');
	              options = {
	                method: 'GET',
	                path: "".concat(this.url, "?").concat(encodedParams),
	                headers: this.headers,
	                credentials: this.credentials
	              };
	              _context.next = 5;
	              return doRequest(options);
	            case 5:
	              response = _context.sent;
	              return _context.abrupt("return", response);
	            case 7:
	            case "end":
	              return _context.stop();
	          }
	        }, _callee, this);
	      }));
	      function fetchToken(_x) {
	        return _fetchToken.apply(this, arguments);
	      }
	      return fetchToken;
	    }()
	  }]);
	  return TokenProvider;
	}();

	function _regeneratorRuntime$2() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$2 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
	var DeviceStateStore = /*#__PURE__*/function () {
	  function DeviceStateStore(instanceId) {
	    _classCallCheck(this, DeviceStateStore);
	    this._instanceId = instanceId;
	    this._dbConn = null;
	  }
	  _createClass(DeviceStateStore, [{
	    key: "_dbName",
	    get: function get() {
	      return "beams-".concat(this._instanceId);
	    }
	  }, {
	    key: "isConnected",
	    get: function get() {
	      return this._dbConn !== null;
	    }
	  }, {
	    key: "connect",
	    value: function connect() {
	      var _this = this;
	      return new Promise(function (resolve, reject) {
	        var request = indexedDB.open(_this._dbName);
	        request.onsuccess = function (event) {
	          var db = event.target.result;
	          _this._dbConn = db;
	          _this._readState().then(function (state) {
	            return state === null ? _this.clear() : Promise.resolve();
	          }).then(resolve);
	        };
	        request.onupgradeneeded = function (event) {
	          var db = event.target.result;
	          db.createObjectStore('beams', {
	            keyPath: 'instance_id'
	          });
	        };
	        request.onerror = function (event) {
	          var error = new Error("Database error: ".concat(event.target.error));
	          reject(error);
	        };
	      });
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      return this._writeState({
	        instance_id: this._instanceId,
	        device_id: null,
	        token: null,
	        user_id: null
	      });
	    }
	  }, {
	    key: "_readState",
	    value: function _readState() {
	      var _this2 = this;
	      if (!this.isConnected) {
	        throw new Error('Cannot read value: DeviceStateStore not connected to IndexedDB');
	      }
	      return new Promise(function (resolve, reject) {
	        var request = _this2._dbConn.transaction('beams').objectStore('beams').get(_this2._instanceId);
	        request.onsuccess = function (event) {
	          var state = event.target.result;
	          if (!state) {
	            resolve(null);
	          }
	          resolve(state);
	        };
	        request.onerror = function (event) {
	          reject(event.target.error);
	        };
	      });
	    }
	  }, {
	    key: "_readProperty",
	    value: function () {
	      var _readProperty2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee(name) {
	        var state;
	        return _regeneratorRuntime$2().wrap(function _callee$(_context) {
	          while (1) switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return this._readState();
	            case 2:
	              state = _context.sent;
	              if (!(state === null)) {
	                _context.next = 5;
	                break;
	              }
	              return _context.abrupt("return", null);
	            case 5:
	              return _context.abrupt("return", state[name] || null);
	            case 6:
	            case "end":
	              return _context.stop();
	          }
	        }, _callee, this);
	      }));
	      function _readProperty(_x) {
	        return _readProperty2.apply(this, arguments);
	      }
	      return _readProperty;
	    }()
	  }, {
	    key: "_writeState",
	    value: function _writeState(state) {
	      var _this3 = this;
	      if (!this.isConnected) {
	        throw new Error('Cannot write value: DeviceStateStore not connected to IndexedDB');
	      }
	      return new Promise(function (resolve, reject) {
	        var request = _this3._dbConn.transaction('beams', 'readwrite').objectStore('beams').put(state);
	        request.onsuccess = function (_) {
	          resolve();
	        };
	        request.onerror = function (event) {
	          reject(event.target.error);
	        };
	      });
	    }
	  }, {
	    key: "_writeProperty",
	    value: function () {
	      var _writeProperty2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$2().mark(function _callee2(name, value) {
	        var state;
	        return _regeneratorRuntime$2().wrap(function _callee2$(_context2) {
	          while (1) switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return this._readState();
	            case 2:
	              state = _context2.sent;
	              state[name] = value;
	              _context2.next = 6;
	              return this._writeState(state);
	            case 6:
	            case "end":
	              return _context2.stop();
	          }
	        }, _callee2, this);
	      }));
	      function _writeProperty(_x2, _x3) {
	        return _writeProperty2.apply(this, arguments);
	      }
	      return _writeProperty;
	    }()
	  }, {
	    key: "getToken",
	    value: function getToken() {
	      return this._readProperty('token');
	    }
	  }, {
	    key: "setToken",
	    value: function setToken(token) {
	      return this._writeProperty('token', token);
	    }
	  }, {
	    key: "getDeviceId",
	    value: function getDeviceId() {
	      return this._readProperty('device_id');
	    }
	  }, {
	    key: "setDeviceId",
	    value: function setDeviceId(deviceId) {
	      return this._writeProperty('device_id', deviceId);
	    }
	  }, {
	    key: "getUserId",
	    value: function getUserId() {
	      return this._readProperty('user_id');
	    }
	  }, {
	    key: "setUserId",
	    value: function setUserId(userId) {
	      return this._writeProperty('user_id', userId);
	    }
	  }, {
	    key: "getLastSeenSdkVersion",
	    value: function getLastSeenSdkVersion() {
	      return this._readProperty('last_seen_sdk_version');
	    }
	  }, {
	    key: "setLastSeenSdkVersion",
	    value: function setLastSeenSdkVersion(sdkVersion) {
	      return this._writeProperty('last_seen_sdk_version', sdkVersion);
	    }
	  }, {
	    key: "getLastSeenUserAgent",
	    value: function getLastSeenUserAgent() {
	      return this._readProperty('last_seen_user_agent');
	    }
	  }, {
	    key: "setLastSeenUserAgent",
	    value: function setLastSeenUserAgent(userAgent) {
	      return this._writeProperty('last_seen_user_agent', userAgent);
	    }
	  }]);
	  return DeviceStateStore;
	}();

	var version = "2.0.1";

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
	function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	function _regeneratorRuntime$3() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$3 = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
	var INTERESTS_REGEX = new RegExp('^(_|\\-|=|@|,|\\.|;|[A-Z]|[a-z]|[0-9])*$');
	var MAX_INTEREST_LENGTH = 164;
	var MAX_INTERESTS_NUM = 5000;
	var SERVICE_WORKER_URL = "/service-worker.js?pusherBeamsWebSDKVersion=".concat(version);
	var RegistrationState = Object.freeze({
	  PERMISSION_PROMPT_REQUIRED: 'PERMISSION_PROMPT_REQUIRED',
	  PERMISSION_GRANTED_NOT_REGISTERED_WITH_BEAMS: 'PERMISSION_GRANTED_NOT_REGISTERED_WITH_BEAMS',
	  PERMISSION_GRANTED_REGISTERED_WITH_BEAMS: 'PERMISSION_GRANTED_REGISTERED_WITH_BEAMS',
	  PERMISSION_DENIED: 'PERMISSION_DENIED'
	});
	var Client = /*#__PURE__*/function () {
	  function Client(config) {
	    _classCallCheck(this, Client);
	    if (!config) {
	      throw new Error('Config object required');
	    }
	    var instanceId = config.instanceId,
	      _config$endpointOverr = config.endpointOverride,
	      endpointOverride = _config$endpointOverr === void 0 ? null : _config$endpointOverr,
	      _config$serviceWorker = config.serviceWorkerRegistration,
	      serviceWorkerRegistration = _config$serviceWorker === void 0 ? null : _config$serviceWorker;
	    if (instanceId === undefined) {
	      throw new Error('Instance ID is required');
	    }
	    if (typeof instanceId !== 'string') {
	      throw new Error('Instance ID must be a string');
	    }
	    if (instanceId.length === 0) {
	      throw new Error('Instance ID cannot be empty');
	    }
	    if (!('indexedDB' in window)) {
	      throw new Error('Pusher Beams does not support this browser version (IndexedDB not supported)');
	    }
	    if (!window.isSecureContext) {
	      throw new Error('Pusher Beams relies on Service Workers, which only work in secure contexts. Check that your page is being served from localhost/over HTTPS');
	    }
	    if (!('serviceWorker' in navigator)) {
	      throw new Error('Pusher Beams does not support this browser version (Service Workers not supported)');
	    }
	    if (!('PushManager' in window)) {
	      throw new Error('Pusher Beams does not support this browser version (Web Push not supported)');
	    }
	    if (serviceWorkerRegistration) {
	      var serviceWorkerScope = serviceWorkerRegistration.scope;
	      var currentURL = window.location.href;
	      var scopeMatchesCurrentPage = currentURL.startsWith(serviceWorkerScope);
	      if (!scopeMatchesCurrentPage) {
	        throw new Error("Could not initialize Pusher web push: current page not in serviceWorkerRegistration scope (".concat(serviceWorkerScope, ")"));
	      }
	    }
	    this.instanceId = instanceId;
	    this._deviceId = null;
	    this._token = null;
	    this._userId = null;
	    this._serviceWorkerRegistration = serviceWorkerRegistration;
	    this._deviceStateStore = new DeviceStateStore(instanceId);
	    this._endpoint = endpointOverride; // Internal only

	    this._ready = this._init();
	  }
	  _createClass(Client, [{
	    key: "_init",
	    value: function () {
	      var _init2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee() {
	        return _regeneratorRuntime$3().wrap(function _callee$(_context) {
	          while (1) switch (_context.prev = _context.next) {
	            case 0:
	              if (!(this._deviceId !== null)) {
	                _context.next = 2;
	                break;
	              }
	              return _context.abrupt("return");
	            case 2:
	              _context.next = 4;
	              return this._deviceStateStore.connect();
	            case 4:
	              if (!this._serviceWorkerRegistration) {
	                _context.next = 9;
	                break;
	              }
	              _context.next = 7;
	              return window.navigator.serviceWorker.ready;
	            case 7:
	              _context.next = 12;
	              break;
	            case 9:
	              _context.next = 11;
	              return getServiceWorkerRegistration();
	            case 11:
	              this._serviceWorkerRegistration = _context.sent;
	            case 12:
	              _context.next = 14;
	              return this._detectSubscriptionChange();
	            case 14:
	              _context.next = 16;
	              return this._deviceStateStore.getDeviceId();
	            case 16:
	              this._deviceId = _context.sent;
	              _context.next = 19;
	              return this._deviceStateStore.getToken();
	            case 19:
	              this._token = _context.sent;
	              _context.next = 22;
	              return this._deviceStateStore.getUserId();
	            case 22:
	              this._userId = _context.sent;
	            case 23:
	            case "end":
	              return _context.stop();
	          }
	        }, _callee, this);
	      }));
	      function _init() {
	        return _init2.apply(this, arguments);
	      }
	      return _init;
	    }() // Ensure SDK is loaded and is consistent
	  }, {
	    key: "_resolveSDKState",
	    value: function () {
	      var _resolveSDKState2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee2() {
	        return _regeneratorRuntime$3().wrap(function _callee2$(_context2) {
	          while (1) switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return this._ready;
	            case 2:
	              _context2.next = 4;
	              return this._detectSubscriptionChange();
	            case 4:
	            case "end":
	              return _context2.stop();
	          }
	        }, _callee2, this);
	      }));
	      function _resolveSDKState() {
	        return _resolveSDKState2.apply(this, arguments);
	      }
	      return _resolveSDKState;
	    }()
	  }, {
	    key: "_detectSubscriptionChange",
	    value: function () {
	      var _detectSubscriptionChange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee3() {
	        var storedToken, actualToken, pushTokenHasChanged;
	        return _regeneratorRuntime$3().wrap(function _callee3$(_context3) {
	          while (1) switch (_context3.prev = _context3.next) {
	            case 0:
	              _context3.next = 2;
	              return this._deviceStateStore.getToken();
	            case 2:
	              storedToken = _context3.sent;
	              _context3.next = 5;
	              return getWebPushToken(this._serviceWorkerRegistration);
	            case 5:
	              actualToken = _context3.sent;
	              pushTokenHasChanged = storedToken !== actualToken;
	              if (!pushTokenHasChanged) {
	                _context3.next = 13;
	                break;
	              }
	              _context3.next = 10;
	              return this._deviceStateStore.clear();
	            case 10:
	              this._deviceId = null;
	              this._token = null;
	              this._userId = null;
	            case 13:
	            case "end":
	              return _context3.stop();
	          }
	        }, _callee3, this);
	      }));
	      function _detectSubscriptionChange() {
	        return _detectSubscriptionChange2.apply(this, arguments);
	      }
	      return _detectSubscriptionChange;
	    }()
	  }, {
	    key: "getDeviceId",
	    value: function () {
	      var _getDeviceId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee4() {
	        var _this = this;
	        return _regeneratorRuntime$3().wrap(function _callee4$(_context4) {
	          while (1) switch (_context4.prev = _context4.next) {
	            case 0:
	              _context4.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              return _context4.abrupt("return", this._ready.then(function () {
	                return _this._deviceId;
	              }));
	            case 3:
	            case "end":
	              return _context4.stop();
	          }
	        }, _callee4, this);
	      }));
	      function getDeviceId() {
	        return _getDeviceId.apply(this, arguments);
	      }
	      return getDeviceId;
	    }()
	  }, {
	    key: "getToken",
	    value: function () {
	      var _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee5() {
	        var _this2 = this;
	        return _regeneratorRuntime$3().wrap(function _callee5$(_context5) {
	          while (1) switch (_context5.prev = _context5.next) {
	            case 0:
	              _context5.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              return _context5.abrupt("return", this._ready.then(function () {
	                return _this2._token;
	              }));
	            case 3:
	            case "end":
	              return _context5.stop();
	          }
	        }, _callee5, this);
	      }));
	      function getToken() {
	        return _getToken.apply(this, arguments);
	      }
	      return getToken;
	    }()
	  }, {
	    key: "getUserId",
	    value: function () {
	      var _getUserId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee6() {
	        var _this3 = this;
	        return _regeneratorRuntime$3().wrap(function _callee6$(_context6) {
	          while (1) switch (_context6.prev = _context6.next) {
	            case 0:
	              _context6.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              return _context6.abrupt("return", this._ready.then(function () {
	                return _this3._userId;
	              }));
	            case 3:
	            case "end":
	              return _context6.stop();
	          }
	        }, _callee6, this);
	      }));
	      function getUserId() {
	        return _getUserId.apply(this, arguments);
	      }
	      return getUserId;
	    }()
	  }, {
	    key: "_baseURL",
	    get: function get() {
	      if (this._endpoint !== null) {
	        return this._endpoint;
	      }
	      return "https://".concat(this.instanceId, ".pushnotifications.pusher.com");
	    }
	  }, {
	    key: "_throwIfNotStarted",
	    value: function _throwIfNotStarted(message) {
	      if (!this._deviceId) {
	        throw new Error("".concat(message, ". SDK not registered with Beams. Did you call .start?"));
	      }
	    }
	  }, {
	    key: "start",
	    value: function () {
	      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee7() {
	        var _yield$this$_getPubli, publicKey, token, deviceId;
	        return _regeneratorRuntime$3().wrap(function _callee7$(_context7) {
	          while (1) switch (_context7.prev = _context7.next) {
	            case 0:
	              _context7.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              if (isSupportedBrowser()) {
	                _context7.next = 4;
	                break;
	              }
	              return _context7.abrupt("return", this);
	            case 4:
	              if (!(this._deviceId !== null)) {
	                _context7.next = 6;
	                break;
	              }
	              return _context7.abrupt("return", this);
	            case 6:
	              _context7.next = 8;
	              return this._getPublicKey();
	            case 8:
	              _yield$this$_getPubli = _context7.sent;
	              publicKey = _yield$this$_getPubli.vapidPublicKey;
	              _context7.next = 12;
	              return this._getPushToken(publicKey);
	            case 12:
	              token = _context7.sent;
	              _context7.next = 15;
	              return this._registerDevice(token);
	            case 15:
	              deviceId = _context7.sent;
	              _context7.next = 18;
	              return this._deviceStateStore.setToken(token);
	            case 18:
	              _context7.next = 20;
	              return this._deviceStateStore.setDeviceId(deviceId);
	            case 20:
	              _context7.next = 22;
	              return this._deviceStateStore.setLastSeenSdkVersion(version);
	            case 22:
	              _context7.next = 24;
	              return this._deviceStateStore.setLastSeenUserAgent(window.navigator.userAgent);
	            case 24:
	              this._token = token;
	              this._deviceId = deviceId;
	              return _context7.abrupt("return", this);
	            case 27:
	            case "end":
	              return _context7.stop();
	          }
	        }, _callee7, this);
	      }));
	      function start() {
	        return _start.apply(this, arguments);
	      }
	      return start;
	    }()
	  }, {
	    key: "getRegistrationState",
	    value: function () {
	      var _getRegistrationState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee8() {
	        return _regeneratorRuntime$3().wrap(function _callee8$(_context8) {
	          while (1) switch (_context8.prev = _context8.next) {
	            case 0:
	              _context8.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              if (!(Notification.permission === 'denied')) {
	                _context8.next = 4;
	                break;
	              }
	              return _context8.abrupt("return", RegistrationState.PERMISSION_DENIED);
	            case 4:
	              if (!(Notification.permission === 'granted' && this._deviceId !== null)) {
	                _context8.next = 6;
	                break;
	              }
	              return _context8.abrupt("return", RegistrationState.PERMISSION_GRANTED_REGISTERED_WITH_BEAMS);
	            case 6:
	              if (!(Notification.permission === 'granted' && this._deviceId === null)) {
	                _context8.next = 8;
	                break;
	              }
	              return _context8.abrupt("return", RegistrationState.PERMISSION_GRANTED_NOT_REGISTERED_WITH_BEAMS);
	            case 8:
	              return _context8.abrupt("return", RegistrationState.PERMISSION_PROMPT_REQUIRED);
	            case 9:
	            case "end":
	              return _context8.stop();
	          }
	        }, _callee8, this);
	      }));
	      function getRegistrationState() {
	        return _getRegistrationState.apply(this, arguments);
	      }
	      return getRegistrationState;
	    }()
	  }, {
	    key: "addDeviceInterest",
	    value: function () {
	      var _addDeviceInterest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee9(interest) {
	        var path, options;
	        return _regeneratorRuntime$3().wrap(function _callee9$(_context9) {
	          while (1) switch (_context9.prev = _context9.next) {
	            case 0:
	              _context9.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              this._throwIfNotStarted('Could not add Device Interest');
	              validateInterestName(interest);
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(this._deviceId, "/interests/").concat(encodeURIComponent(interest));
	              options = {
	                method: 'POST',
	                path: path
	              };
	              _context9.next = 8;
	              return doRequest(options);
	            case 8:
	            case "end":
	              return _context9.stop();
	          }
	        }, _callee9, this);
	      }));
	      function addDeviceInterest(_x) {
	        return _addDeviceInterest.apply(this, arguments);
	      }
	      return addDeviceInterest;
	    }()
	  }, {
	    key: "removeDeviceInterest",
	    value: function () {
	      var _removeDeviceInterest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee10(interest) {
	        var path, options;
	        return _regeneratorRuntime$3().wrap(function _callee10$(_context10) {
	          while (1) switch (_context10.prev = _context10.next) {
	            case 0:
	              _context10.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              this._throwIfNotStarted('Could not remove Device Interest');
	              validateInterestName(interest);
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(this._deviceId, "/interests/").concat(encodeURIComponent(interest));
	              options = {
	                method: 'DELETE',
	                path: path
	              };
	              _context10.next = 8;
	              return doRequest(options);
	            case 8:
	            case "end":
	              return _context10.stop();
	          }
	        }, _callee10, this);
	      }));
	      function removeDeviceInterest(_x2) {
	        return _removeDeviceInterest.apply(this, arguments);
	      }
	      return removeDeviceInterest;
	    }()
	  }, {
	    key: "getDeviceInterests",
	    value: function () {
	      var _getDeviceInterests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee11() {
	        var limit,
	          cursor,
	          path,
	          options,
	          res,
	          _args11 = arguments;
	        return _regeneratorRuntime$3().wrap(function _callee11$(_context11) {
	          while (1) switch (_context11.prev = _context11.next) {
	            case 0:
	              limit = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : 100;
	              cursor = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : null;
	              _context11.next = 4;
	              return this._resolveSDKState();
	            case 4:
	              this._throwIfNotStarted('Could not get Device Interests');
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(this._deviceId, "/interests");
	              options = {
	                method: 'GET',
	                path: path,
	                params: {
	                  limit: limit,
	                  cursor: cursor
	                }
	              };
	              _context11.next = 9;
	              return doRequest(options);
	            case 9:
	              res = _context11.sent;
	              res = _objectSpread$2({
	                interests: res && res['interests'] || []
	              }, res && res.responseMetadata || {});
	              return _context11.abrupt("return", res);
	            case 12:
	            case "end":
	              return _context11.stop();
	          }
	        }, _callee11, this);
	      }));
	      function getDeviceInterests() {
	        return _getDeviceInterests.apply(this, arguments);
	      }
	      return getDeviceInterests;
	    }()
	  }, {
	    key: "setDeviceInterests",
	    value: function () {
	      var _setDeviceInterests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee12(interests) {
	        var _iterator, _step, interest, uniqueInterests, path, options;
	        return _regeneratorRuntime$3().wrap(function _callee12$(_context12) {
	          while (1) switch (_context12.prev = _context12.next) {
	            case 0:
	              _context12.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              this._throwIfNotStarted('Could not set Device Interests');
	              if (!(interests === undefined || interests === null)) {
	                _context12.next = 5;
	                break;
	              }
	              throw new Error('interests argument is required');
	            case 5:
	              if (Array.isArray(interests)) {
	                _context12.next = 7;
	                break;
	              }
	              throw new Error('interests argument must be an array');
	            case 7:
	              if (!(interests.length > MAX_INTERESTS_NUM)) {
	                _context12.next = 9;
	                break;
	              }
	              throw new Error("Number of interests (".concat(interests.length, ") exceeds maximum of ").concat(MAX_INTERESTS_NUM));
	            case 9:
	              _iterator = _createForOfIteratorHelper(interests);
	              try {
	                for (_iterator.s(); !(_step = _iterator.n()).done;) {
	                  interest = _step.value;
	                  validateInterestName(interest);
	                }
	              } catch (err) {
	                _iterator.e(err);
	              } finally {
	                _iterator.f();
	              }
	              uniqueInterests = Array.from(new Set(interests));
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(this._deviceId, "/interests");
	              options = {
	                method: 'PUT',
	                path: path,
	                body: {
	                  interests: uniqueInterests
	                }
	              };
	              _context12.next = 16;
	              return doRequest(options);
	            case 16:
	            case "end":
	              return _context12.stop();
	          }
	        }, _callee12, this);
	      }));
	      function setDeviceInterests(_x3) {
	        return _setDeviceInterests.apply(this, arguments);
	      }
	      return setDeviceInterests;
	    }()
	  }, {
	    key: "clearDeviceInterests",
	    value: function () {
	      var _clearDeviceInterests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee13() {
	        return _regeneratorRuntime$3().wrap(function _callee13$(_context13) {
	          while (1) switch (_context13.prev = _context13.next) {
	            case 0:
	              _context13.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              this._throwIfNotStarted('Could not clear Device Interests');
	              _context13.next = 5;
	              return this.setDeviceInterests([]);
	            case 5:
	            case "end":
	              return _context13.stop();
	          }
	        }, _callee13, this);
	      }));
	      function clearDeviceInterests() {
	        return _clearDeviceInterests.apply(this, arguments);
	      }
	      return clearDeviceInterests;
	    }()
	  }, {
	    key: "setUserId",
	    value: function () {
	      var _setUserId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee14(userId, tokenProvider) {
	        var error, path, _yield$tokenProvider$, beamsAuthToken, options;
	        return _regeneratorRuntime$3().wrap(function _callee14$(_context14) {
	          while (1) switch (_context14.prev = _context14.next) {
	            case 0:
	              _context14.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              if (isSupportedBrowser()) {
	                _context14.next = 4;
	                break;
	              }
	              return _context14.abrupt("return");
	            case 4:
	              if (!(this._deviceId === null)) {
	                _context14.next = 7;
	                break;
	              }
	              error = new Error('.start must be called before .setUserId');
	              return _context14.abrupt("return", Promise.reject(error));
	            case 7:
	              if (!(typeof userId !== 'string')) {
	                _context14.next = 9;
	                break;
	              }
	              throw new Error("User ID must be a string (was ".concat(userId, ")"));
	            case 9:
	              if (!(userId === '')) {
	                _context14.next = 11;
	                break;
	              }
	              throw new Error('User ID cannot be the empty string');
	            case 11:
	              if (!(this._userId !== null && this._userId !== userId)) {
	                _context14.next = 13;
	                break;
	              }
	              throw new Error('Changing the `userId` is not allowed.');
	            case 13:
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(this._deviceId, "/user");
	              _context14.next = 16;
	              return tokenProvider.fetchToken(userId);
	            case 16:
	              _yield$tokenProvider$ = _context14.sent;
	              beamsAuthToken = _yield$tokenProvider$.token;
	              options = {
	                method: 'PUT',
	                path: path,
	                headers: {
	                  Authorization: "Bearer ".concat(beamsAuthToken)
	                }
	              };
	              _context14.next = 21;
	              return doRequest(options);
	            case 21:
	              this._userId = userId;
	              return _context14.abrupt("return", this._deviceStateStore.setUserId(userId));
	            case 23:
	            case "end":
	              return _context14.stop();
	          }
	        }, _callee14, this);
	      }));
	      function setUserId(_x4, _x5) {
	        return _setUserId.apply(this, arguments);
	      }
	      return setUserId;
	    }()
	  }, {
	    key: "stop",
	    value: function () {
	      var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee15() {
	        return _regeneratorRuntime$3().wrap(function _callee15$(_context15) {
	          while (1) switch (_context15.prev = _context15.next) {
	            case 0:
	              _context15.next = 2;
	              return this._resolveSDKState();
	            case 2:
	              if (isSupportedBrowser()) {
	                _context15.next = 4;
	                break;
	              }
	              return _context15.abrupt("return");
	            case 4:
	              if (!(this._deviceId === null)) {
	                _context15.next = 6;
	                break;
	              }
	              return _context15.abrupt("return");
	            case 6:
	              _context15.next = 8;
	              return this._deleteDevice();
	            case 8:
	              _context15.next = 10;
	              return this._deviceStateStore.clear();
	            case 10:
	              this._clearPushToken()["catch"](function () {}); // Not awaiting this, best effort.

	              this._deviceId = null;
	              this._token = null;
	              this._userId = null;
	            case 14:
	            case "end":
	              return _context15.stop();
	          }
	        }, _callee15, this);
	      }));
	      function stop() {
	        return _stop.apply(this, arguments);
	      }
	      return stop;
	    }()
	  }, {
	    key: "clearAllState",
	    value: function () {
	      var _clearAllState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee16() {
	        return _regeneratorRuntime$3().wrap(function _callee16$(_context16) {
	          while (1) switch (_context16.prev = _context16.next) {
	            case 0:
	              if (isSupportedBrowser()) {
	                _context16.next = 2;
	                break;
	              }
	              return _context16.abrupt("return");
	            case 2:
	              _context16.next = 4;
	              return this.stop();
	            case 4:
	              _context16.next = 6;
	              return this.start();
	            case 6:
	            case "end":
	              return _context16.stop();
	          }
	        }, _callee16, this);
	      }));
	      function clearAllState() {
	        return _clearAllState.apply(this, arguments);
	      }
	      return clearAllState;
	    }()
	  }, {
	    key: "_getPublicKey",
	    value: function () {
	      var _getPublicKey2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee17() {
	        var path, options;
	        return _regeneratorRuntime$3().wrap(function _callee17$(_context17) {
	          while (1) switch (_context17.prev = _context17.next) {
	            case 0:
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/web-vapid-public-key");
	              options = {
	                method: 'GET',
	                path: path
	              };
	              return _context17.abrupt("return", doRequest(options));
	            case 3:
	            case "end":
	              return _context17.stop();
	          }
	        }, _callee17, this);
	      }));
	      function _getPublicKey() {
	        return _getPublicKey2.apply(this, arguments);
	      }
	      return _getPublicKey;
	    }()
	  }, {
	    key: "_getPushToken",
	    value: function () {
	      var _getPushToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee18(publicKey) {
	        var sub;
	        return _regeneratorRuntime$3().wrap(function _callee18$(_context18) {
	          while (1) switch (_context18.prev = _context18.next) {
	            case 0:
	              _context18.prev = 0;
	              _context18.next = 3;
	              return this._clearPushToken();
	            case 3:
	              _context18.next = 5;
	              return this._serviceWorkerRegistration.pushManager.subscribe({
	                userVisibleOnly: true,
	                applicationServerKey: urlBase64ToUInt8Array(publicKey)
	              });
	            case 5:
	              sub = _context18.sent;
	              return _context18.abrupt("return", btoa(JSON.stringify(sub)));
	            case 9:
	              _context18.prev = 9;
	              _context18.t0 = _context18["catch"](0);
	              return _context18.abrupt("return", Promise.reject(_context18.t0));
	            case 12:
	            case "end":
	              return _context18.stop();
	          }
	        }, _callee18, this, [[0, 9]]);
	      }));
	      function _getPushToken(_x6) {
	        return _getPushToken2.apply(this, arguments);
	      }
	      return _getPushToken;
	    }()
	  }, {
	    key: "_clearPushToken",
	    value: function () {
	      var _clearPushToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee19() {
	        return _regeneratorRuntime$3().wrap(function _callee19$(_context19) {
	          while (1) switch (_context19.prev = _context19.next) {
	            case 0:
	              return _context19.abrupt("return", navigator.serviceWorker.ready.then(function (reg) {
	                return reg.pushManager.getSubscription();
	              }).then(function (sub) {
	                if (sub) sub.unsubscribe();
	              }));
	            case 1:
	            case "end":
	              return _context19.stop();
	          }
	        }, _callee19);
	      }));
	      function _clearPushToken() {
	        return _clearPushToken2.apply(this, arguments);
	      }
	      return _clearPushToken;
	    }()
	  }, {
	    key: "_registerDevice",
	    value: function () {
	      var _registerDevice2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee20(token) {
	        var path, device, options, response;
	        return _regeneratorRuntime$3().wrap(function _callee20$(_context20) {
	          while (1) switch (_context20.prev = _context20.next) {
	            case 0:
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web");
	              device = {
	                token: token,
	                metadata: {
	                  sdkVersion: version
	                }
	              };
	              options = {
	                method: 'POST',
	                path: path,
	                body: device
	              };
	              _context20.next = 5;
	              return doRequest(options);
	            case 5:
	              response = _context20.sent;
	              return _context20.abrupt("return", response.id);
	            case 7:
	            case "end":
	              return _context20.stop();
	          }
	        }, _callee20, this);
	      }));
	      function _registerDevice(_x7) {
	        return _registerDevice2.apply(this, arguments);
	      }
	      return _registerDevice;
	    }()
	  }, {
	    key: "_deleteDevice",
	    value: function () {
	      var _deleteDevice2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee21() {
	        var path, options;
	        return _regeneratorRuntime$3().wrap(function _callee21$(_context21) {
	          while (1) switch (_context21.prev = _context21.next) {
	            case 0:
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(encodeURIComponent(this._deviceId));
	              options = {
	                method: 'DELETE',
	                path: path
	              };
	              _context21.next = 4;
	              return doRequest(options);
	            case 4:
	            case "end":
	              return _context21.stop();
	          }
	        }, _callee21, this);
	      }));
	      function _deleteDevice() {
	        return _deleteDevice2.apply(this, arguments);
	      }
	      return _deleteDevice;
	    }()
	    /**
	     * Submit SDK version and browser details (via the user agent) to Pusher Beams.
	     */
	  }, {
	    key: "_updateDeviceMetadata",
	    value: function () {
	      var _updateDeviceMetadata2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee22() {
	        var userAgent, storedUserAgent, storedSdkVersion, path, metadata, options;
	        return _regeneratorRuntime$3().wrap(function _callee22$(_context22) {
	          while (1) switch (_context22.prev = _context22.next) {
	            case 0:
	              userAgent = window.navigator.userAgent;
	              _context22.next = 3;
	              return this._deviceStateStore.getLastSeenUserAgent();
	            case 3:
	              storedUserAgent = _context22.sent;
	              _context22.next = 6;
	              return this._deviceStateStore.getLastSeenSdkVersion();
	            case 6:
	              storedSdkVersion = _context22.sent;
	              if (!(userAgent === storedUserAgent && version === storedSdkVersion)) {
	                _context22.next = 9;
	                break;
	              }
	              return _context22.abrupt("return");
	            case 9:
	              path = "".concat(this._baseURL, "/device_api/v1/instances/").concat(encodeURIComponent(this.instanceId), "/devices/web/").concat(this._deviceId, "/metadata");
	              metadata = {
	                sdkVersion: version
	              };
	              options = {
	                method: 'PUT',
	                path: path,
	                body: metadata
	              };
	              _context22.next = 14;
	              return doRequest(options);
	            case 14:
	              _context22.next = 16;
	              return this._deviceStateStore.setLastSeenSdkVersion(version);
	            case 16:
	              _context22.next = 18;
	              return this._deviceStateStore.setLastSeenUserAgent(userAgent);
	            case 18:
	            case "end":
	              return _context22.stop();
	          }
	        }, _callee22, this);
	      }));
	      function _updateDeviceMetadata() {
	        return _updateDeviceMetadata2.apply(this, arguments);
	      }
	      return _updateDeviceMetadata;
	    }()
	  }]);
	  return Client;
	}();
	var validateInterestName = function validateInterestName(interest) {
	  if (interest === undefined || interest === null) {
	    throw new Error('Interest name is required');
	  }
	  if (typeof interest !== 'string') {
	    throw new Error("Interest ".concat(interest, " is not a string"));
	  }
	  if (!INTERESTS_REGEX.test(interest)) {
	    throw new Error("interest \"".concat(interest, "\" contains a forbidden character. ") + 'Allowed characters are: ASCII upper/lower-case letters, ' + 'numbers or one of _-=@,.;');
	  }
	  if (interest.length > MAX_INTEREST_LENGTH) {
	    throw new Error("Interest is longer than the maximum of ".concat(MAX_INTEREST_LENGTH, " chars"));
	  }
	};
	function getServiceWorkerRegistration() {
	  return _getServiceWorkerRegistration.apply(this, arguments);
	}
	function _getServiceWorkerRegistration() {
	  _getServiceWorkerRegistration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime$3().mark(function _callee23() {
	    var _yield$fetch, swStatusCode;
	    return _regeneratorRuntime$3().wrap(function _callee23$(_context23) {
	      while (1) switch (_context23.prev = _context23.next) {
	        case 0:
	          _context23.next = 2;
	          return fetch(SERVICE_WORKER_URL);
	        case 2:
	          _yield$fetch = _context23.sent;
	          swStatusCode = _yield$fetch.status;
	          if (!(swStatusCode !== 200)) {
	            _context23.next = 6;
	            break;
	          }
	          throw new Error('Cannot start SDK, service worker missing: No file found at /service-worker.js');
	        case 6:
	          window.navigator.serviceWorker.register(SERVICE_WORKER_URL, {
	            // explicitly opting out of `importScripts` caching just in case our
	            // customers decides to host and serve the imported scripts and
	            // accidentally set `Cache-Control` to something other than `max-age=0`
	            updateViaCache: 'none'
	          });
	          return _context23.abrupt("return", window.navigator.serviceWorker.ready);
	        case 8:
	        case "end":
	          return _context23.stop();
	      }
	    }, _callee23);
	  }));
	  return _getServiceWorkerRegistration.apply(this, arguments);
	}
	function getWebPushToken(swReg) {
	  return swReg.pushManager.getSubscription().then(function (sub) {
	    return !sub ? null : encodeSubscription(sub);
	  });
	}
	function encodeSubscription(sub) {
	  return btoa(JSON.stringify(sub));
	}
	function urlBase64ToUInt8Array(base64String) {
	  var padding = '='.repeat((4 - base64String.length % 4) % 4);
	  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
	  var rawData = window.atob(base64);
	  return Uint8Array.from(_toConsumableArray(rawData).map(function (_char) {
	    return _char.charCodeAt(0);
	  }));
	}

	/**
	 * Modified from https://stackoverflow.com/questions/4565112
	 */
	function isSupportedBrowser() {
		const winNav = window.navigator;
		const vendorName = winNav.vendor;
	  
		const isChromium =
		  window.chrome !== null && typeof window.chrome !== 'undefined';
		const isOpera = winNav.userAgent.indexOf('OPR') > -1;
		const isEdge = winNav.userAgent.indexOf('Edg') > -1;
		const isFirefox = winNav.userAgent.indexOf('Firefox') > -1;
		
		const isSafari =
		  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
		  /iPad|iPhone|iPod/.test(navigator.userAgent);
	  
		const isChrome =
		  isChromium && vendorName === 'Google Inc.' && !isEdge && !isOpera;
	  
		const isSupported = isChrome || isOpera || isFirefox || isEdge || isSafari;
	  
		if (!isSupported) {
		  console.warn(
			'Pusher Web Push Notifications supports Chrome, Firefox, Edge, Opera, Safari on macOS, and Safari on iOS.'
		  );
		}
		return isSupported;
	  }

	exports.Client = Client;
	exports.RegistrationState = RegistrationState;
	exports.TokenProvider = TokenProvider;

	return exports;

}({}));
