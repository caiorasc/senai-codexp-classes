/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listaNotas = __webpack_require__(1);

var _listaNotas2 = _interopRequireDefault(_listaNotas);

var _formNotas = __webpack_require__(3);

var _formNotas2 = _interopRequireDefault(_formNotas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secao = document.getElementsByClassName('notes')[0];
// import FormInput from './componentes/formInput.js';
// import FormTextarea from './componentes/formTextarea.js';
// import FormButton from './componentes/formButton.js';


var observaMudancasNaLista = function observaMudancasNaLista() {
    atualizarSecao(secao);
};

var listaNotas = new _listaNotas2.default(observaMudancasNaLista);

window.atualizarSecao = function (secao) {
    //let conteudoSecao = "";
    while (secao.firstChild) {
        secao.removeChild(secao.firstChild);
    }

    for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        var notaAtual = listaNotas.pega(posicao);
        // if (notaAtual.editando) {
        var props = {
            notaAtual: notaAtual,
            posicao: posicao,
            adicionarNota: adicionarNota,
            editaFormulario: editaFormulario,
            removerNota: removerNota
        };

        var formNotas = new _formNotas2.default(props);

        secao.appendChild(formNotas);
    }
};

window.editaFormulario = function (posicao) {
    return listaNotas.edita(posicao);
};

window.adicionarNota = function (inputTitulo, textareaTexto, formulario, posicao) {
    if (listaNotas.pega(posicao)) {
        listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
};

window.removerNota = function (evento, posicao) {
    evento.stopPropagation();
    listaNotas.remove(posicao);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nota = __webpack_require__(2);

var _nota2 = _interopRequireDefault(_nota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListaNotas = function () {
    function ListaNotas(observador) {
        _classCallCheck(this, ListaNotas);

        this._observador = observador;
        this._listaInterna = [];
    }

    _createClass(ListaNotas, [{
        key: 'adiciona',
        value: function adiciona(novoTitulo, novoTexto) {
            var nota = new _nota2.default(novoTitulo, novoTexto);
            this._listaInterna.push(nota);
            this._observador();
        }
    }, {
        key: 'remove',
        value: function remove(posicao) {
            this._listaInterna.splice(posicao, 1);
            this._observador();
        }
    }, {
        key: 'edita',
        value: function edita(posicao) {

            this._listaInterna[posicao].editando = true;
            this._observador();
        }
    }, {
        key: 'salva',
        value: function salva(posicao, novoTitulo, novoTexto) {

            this._listaInterna[posicao].titulo = novoTitulo;
            this._listaInterna[posicao].texto = novoTexto;
            this._listaInterna[posicao].editando = false;
            this._observador();
        }
    }, {
        key: 'pega',
        value: function pega(posicao) {

            return this._listaInterna[posicao];
        }
    }, {
        key: 'contaTotal',
        value: function contaTotal() {

            return this._listaInterna.length;
        }
    }]);

    return ListaNotas;
}();

;

exports.default = ListaNotas;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nota = function () {
    function Nota(novoTitulo, novoTexto) {
        _classCallCheck(this, Nota);

        // modificadores visibilidade
        this._titulo = novoTitulo;
        this._texto = novoTexto;
        this._editando = false;
    }

    // getters/setters


    _createClass(Nota, [{
        key: "titulo",
        get: function get() {
            return this._titulo;
        },
        set: function set(tituloAlterado) {
            this._titulo = tituloAlterado;
        }
    }, {
        key: "texto",
        get: function get() {
            return this._texto;
        },
        set: function set(textoAlterado) {
            this._texto = textoAlterado;
        }
    }, {
        key: "editando",
        get: function get() {
            return this._editando;
        },
        set: function set(editandoAlterado) {
            this._editando = editandoAlterado;
        }
    }]);

    return Nota;
}();

;

exports.default = Nota;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(4);

var _form2 = _interopRequireDefault(_form);

var _formInput = __webpack_require__(5);

var _formInput2 = _interopRequireDefault(_formInput);

var _formTextarea = __webpack_require__(6);

var _formTextarea2 = _interopRequireDefault(_formTextarea);

var _formButton = __webpack_require__(7);

var _formButton2 = _interopRequireDefault(_formButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormNotas = function FormNotas(props) {

    var textareaTexto = new _formTextarea2.default({
        className: 'note__body',
        name: 'texto',
        value: props.notaAtual.texto,
        rows: '5',
        placeholder: 'Criar uma nota...',
        readonly: !props.notaAtual.editando
    });

    var formInput = new _formInput2.default({
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        value: props.notaAtual.titulo,
        placeholder: 'Título',
        readonly: !props.notaAtual.editando
    });

    var buttonConcluido = new _formButton2.default({
        className: 'note__control',
        type: 'button',
        value: props.notaAtual.editando == true ? 'Conluído' : '<i class="fa fa-times" aria-hidden="true"></i>',
        click: props.notaAtual.editando == true ? function () {
            return adicionarNota(formInput, textareaTexto, formNotas, props.posicao);
        } : function (evento) {
            return removerNota(evento, props.posicao);
        }
    });

    var formNotas = new _form2.default({
        className: 'note',
        click: props.notaAtual.editando == true ? function () {} : function () {
            return editaFormulario(props.posicao);
        },
        children: props.notaAtual.editando == true ? [formInput, textareaTexto, buttonConcluido] : [buttonConcluido, formInput, textareaTexto]
    });

    return formNotas;
};

exports.default = FormNotas;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Form = function Form(props) {
    var form = document.createElement('form');
    form.setAttribute('class', props.className);

    for (var i = 0; i < props.children.length; i++) {
        form.appendChild(props.children[i]);
    }

    form.addEventListener("click", props.click);

    return form;
};

exports.default = Form;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FormInput = function FormInput(props) {
    var formInput = document.createElement('input');

    formInput.setAttribute('class', props.className);
    formInput.setAttribute('type', props.type);
    formInput.setAttribute('name', props.name);
    formInput.setAttribute('value', props.value);
    formInput.setAttribute('placeholder', props.placeholder);

    if (props.readonly) {
        formInput.setAttribute('readonly', true);
    }

    return formInput;
};

exports.default = FormInput;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FormTextarea = function FormTextarea(props) {
    var formTextarea = document.createElement('textarea');
    formTextarea.setAttribute('class', props.className);
    formTextarea.setAttribute('name', props.name);
    formTextarea.setAttribute('rows', props.rows);
    formTextarea.setAttribute('placeholder', props.placeholder);

    if (props.readonly) {
        formTextarea.setAttribute('readonly', true);
    }

    formTextarea.innerHTML = props.value;

    return formTextarea;
};

exports.default = FormTextarea;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FormButton = function FormButton(props) {
    var formButton = document.createElement('button');
    formButton.setAttribute('class', props.className);
    formButton.setAttribute('type', props.type);

    formButton.addEventListener('click', props.click);
    formButton.innerHTML = props.value;

    return formButton;
};

exports.default = FormButton;

/***/ })
/******/ ]);