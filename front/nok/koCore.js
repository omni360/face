$.fn.b = $.fn.ko = function (a, b) {
	KOob = {
		t: 'text',
		h: 'html',
		s: 'css',
		y: 'style',
		a: 'attr',
		e: 'foreach',
		i: 'if', n: 'ifnot', w: 'with',
		$: 'click',
		ev: 'event',
		sb: 'submit',
		en: 'enable',
		d: 'disable',
		V: 'valueUpdate',
		vs: 'visible',
		f: 'hasFocus',
		c: 'checked',
		ch: 'checked',
		v: 'value', o: 'options',
		ti: 'textInput',
		so: 'selectedOptions',
		u: 'uniqueName',
		tp: 'template',
		cm: 'component'
	}
	var o = []
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		this.at({
			'data-bind': $l(o.join())
		})
	}
	else {
		if (KOob[a]) {
			a = KOob[a]
		}
		// str= oO('b', a)
		str = a + ':' + b;  //$l(': '+ str  )
		this.at({'data-bind': str})
	}
	return this
}
$.fn.koE = $.fn.eKo = function (a) {
	return this.bindKO('fe', a)
}
$.fn.eD = $.fn.eB = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.fn.dB = function (dB) {
	return this.at({'data-bind': dB})
}
$.aA = function (a, b, c, d) {
	return $.a(b, c, d).bA(a)
}
//event and enable
$.fn.bSm = function (s) {
	return this.b('submit', s)
}
$.fn.koE = $.fn.eKo = function (a) {
	return this.bindKO('fe', a)
}
$.fn.eD = $.fn.eB = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.fn.dB = function (dB) {
	return this.at({'data-bind': dB})
}
function not() {
	$.fn.bN = $.fn.bIN = function (s) {
		return this.b('ifnot', s)
	}
	$.fn.bN = $.fn.bIN = function (s) {
		return this.dB('ifnot: ' + s)
	}
	$.fn.bN = $.fn.bIN = function (s) {
		return this.dB('ifnot: ' + s)
	}
	$.fn.bN = $.fn.bIN = function (s) {
		return this.b('ifnot', s)
	}
}
function qPar() {
	$.fn.qA = function (t) {
		return $('<' + t + '>').A()
	}
	$.fn.qAP = function (a, b, c) {
		this.qA(a).par(b, c)
		return this
	}
	$.fn.par = function (a, b) {
		this.at('params', a + ': ' + b);
		return this
	}
	$.fn.qA = function (t) {
		return $('<' + t + '>').A()
	}
	$.fn.qAP = function (a, b, c) {
		this.qA(a).par(b, c)
		return this
	}
	$.fn.a2Lb = function (t) {
		t = t || 'label:'
		return this.a2($.lb(t))
	}
}
function atIf() {
	$.fn.bA = $.fn.bAt = function (s) {
		return this.b('attr', s)
	}
	$.fn.bA = $.fn.bAt = function (s) {
		return this.b('attr', s)
	}
	$.fn.bA = $.fn.bAt = function (s) {
		return this.dB('attr: ' + s)
	}
	$.fn.bA = $.fn.bAt = function (s) {
		return this.dB('attr: ' + s)
	}
	$.fn.bI = $.fn.bIf = function (s) {
		return this.dB('if: ' + s)
	}
	$.fn.bI = $.fn.bIf = function (s) {
		return this.dB('if: ' + s)
	}
	$.fn.bI = $.fn.bIf = function (s) {
		return this.b('if', s)
	}
}
function sync() {
	$.fn.bY = $.fn.bSy = function (s) {
		return this.b('style', s)
	}
	$.fn.bY = $.fn.bSy = function (s) {
		return this.b('style', s)
	}
	$.fn.bY = $.fn.bSy = function (s) {
		return this.dB('style: ' + s)
	}
	$.fn.bY = $.fn.bSy = function (s) {
		return this.dB('style: ' + s)
	}
}
function buu() {
	$.fn.bU = $.fn.bUN = function (s) {
		return this.dB('uniqueName: ' + s)
	}
	$.fn.bU = $.fn.bUN = function (s) {
		return this.b('uniqueName', s)
	}
	$.fn.bU = $.fn.bUN = function (s) {
		return this.dB('uniqueName: ' + s)
	}
}
function subm() {
	$.fn.bSb = function (s) {
		return this.dB('submit: ' + s)
	}
	$.fn.bSb = function (s) {
		return this.b('submit', s)
	}
	$.fn.bSb = function (s) {
		return this.dB('submit: ' + s)
	}
	$.fSm = $.fBSm = function (a, b) {
		var f = $.f();
		f.bSb(a)
		if (A(b)) {
			_.e(b, function (b) {
				f.A(b)
			})
		}
		return f
		function old() {
			$.fSb = function (a, b) {
				var f = $.f();
				f.b({sb: a})
				if (A(b)) {
					_.e(b, function (el) {
						f.A(el)
					})
				}
				return f
			}
		}
	}
}
function txIpVal() {
	$.fn.bTI = function (s) {
		return this.dB('textInput: ' + s)
	}
	$.fn.bTi = function (a) {
		return this.b({ti: a})
	}
	$.fn.bTi = function (a) {
		return this.b({ti: a})
	}
	$.fn.bTI = function (s) {
		return this.b('textInput', s)
	}
	$.fn.bTI = function (s) {
		return this.dB('textInput: ' + s)
	}
	$.fn.bTi = function (a) {
		return this.b({ti: a})
	}
	$.fn.bV = function (s) {
		var g = G(arguments)
		str = "value: " + s
		if (!g.n) {
			str += ", valueUpdate: 'afterkeydown'"
		}
		this.b(str)
		return this
	}
	$.iV = $.ipV = $.ipBv = function () {
		var g = G(arguments), ip
		ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	/*
	 $.ipV=$.ipBv=function(){
	 var g=G(arguments),
	 ip = $.ip(),
	 ip.bV.apply(ip, g)
	 return ip
	 }*/
}
function options() {
	$.fn.bH = function (s) {
		return this.dB('html: ' + s)
	}
	$.fn.bH = function (s) {
		return this.dB('html: ' + s)
	}
	$.fn.bH = function (s) {
		return this.b('html', s)
	}
	$.fn.bS = function (s) {
		return this.b('css', s)
	}
	$.fn.bS = function (s) {
		return this.dB('css: ' + s)
	}
	$.fn.bS = function (s) {
		return this.b('css', s)
	} //not bind sprite!!
	$.fn.bS = function (s) {
		return this.dB('css: ' + s)
	}
	$.fn.bC = function (s) {
		return this.dB('checked: ' + s)
	}
	$.fn.bO = function (s) {
		return this.dB('options: ' + s)
	}
	$.fn.bSO = function (s) {
		return this.dB('selectedOptions: ' + s)
	}
	$.fn.bO = function (s) {
		return this.b('options', s)
	}
	$.fn.bSO = function (s) {
		return this.b('selectedOptions', s)
	}
	$.fn.bCm = function (s) {
		return this.dB('component: ' + s)
	}
	$.fn.bO = function (s) {
		return this.dB('options: ' + s)
	}
	$.fn.bSO = function (s) {
		return this.dB('selectedOptions: ' + s)
	}
}
function koEach() {
	$.fn.bE = function (s) {
		return this.b('foreach', s)
	}
	$.fn.bE = function (s) {
		return this.dB('foreach: ' + s)
	}
	$.fn.bE = function (s) {
		return this.dB('foreach: ' + s)
	}
	$.fn.koE = $.fn.eKo = function (a) {
		alert('koE')
		return this.bindKO('fe', a)
	}
	$.fn.eD = $.fn.eB = function (a) {
		alert('ko eD')
		return this.bindKOEach('$data.' + a)
	}
	$.fn.bU = $.fn.bUN = function (s) {
		return this.b('uniqueName', s)
	}
	$.fn.bCm = function (s) {
		return this.b('component', s)
	}
	$.fn.bindKOEach = fe = forEach = function (a) {
		return this.bindKO('fe', a)
	}
	$.fn.bindKOEachData = feD = forEachData = function (a) {
		return this.bindKOEach('$data.' + a)
	}
	$.fn.bindKO = b = knockoutBind = function (a, b) {
		var o = []
		if (O(a)) {
			_.each(a, function (v, k) {
				o.push(oO('b', k) + ':' + v)
			})
			this.attr({'data-bind': o.join()})
		}
		else {
			this.attr({
				b: oO('b', a) + ':' + b
			})
		}
		return this
	}
}
function templ() {
	$.fn.bTp = function (s) {
		return this.b('template', s)
	}
	$.fn.a2Lb = function (t) {
		t = t || 'label:'
		return this.a2($.lb(t))
	}
	$.fn.bT = function (s) {
		s = s || '$data'
		return this.dB('text: ' + s)
	}
	$.fn.bCm = function (s) {
		return this.dB('component: ' + s)
	}
	$.fn.bTp = function (s) {
		return this.dB('template: ' + s)
	}
	$.fn.bTp = function (s) {
		return this.b('template', s)
	}
	$.fn.bT = function (s) {
		return this.b('text', s || '$data')
	}
	$.fn.b = $.fn.ko = function (a, b) {
		KOob = {
			t: 'text',
			h: 'html',
			s: 'css',
			y: 'style',
			a: 'attr',
			e: 'foreach',
			i: 'if', n: 'ifnot', w: 'with',
			$: 'click',
			ev: 'event',
			sb: 'submit',
			en: 'enable',
			d: 'disable',
			V: 'valueUpdate',
			vs: 'visible',
			f: 'hasFocus',
			c: 'checked',
			ch: 'checked',
			v: 'value', o: 'options',
			ti: 'textInput',
			so: 'selectedOptions',
			u: 'uniqueName',
			tp: 'template',
			cm: 'component'
		}
		var o = []
		if (O(a)) {
			_.e(a, function (v, k) {
				if (KOob[k]) {
					k = KOob[k]
				}
				o.push(k + ':' + v)
			})
			this.at({
				'data-bind': $l(o.join())
			})
		}
		else {
			if (KOob[a]) {
				a = KOob[a]
			}
			// str= oO('b', a)
			str = a + ':' + b;  //$l(': '+ str  )
			this.at({'data-bind': str})
		}
		return this
	}
	$.fn.par = function (a, b) {
		this.at('params', a + ': ' + b);
		return this
	}
	$.fn.bT = function (s) {
		s = s || '$data'
		return this.dB('text: ' + s)
	}
	$.fn.bTp = function (s) {
		return this.dB('template: ' + s)
	}
}
function enab() {
	$.fn.bEn = function (a) {
		return this.b('en', a)
	}
	$.fn.bEn = function (s) {
		return this.b('enable', s)
	}
	$.fn.bEn = function (s) {
		return this.dB('enable: ' + s)
	}
	$.fn.bEn = function (a) {
		return this.b('en', a)
	}
	$.fn.bEn = function (s) {
		return this.dB('enable: ' + s)
	}
	$.fn.bEn = function (a) {
		return this.b('en', a)
	}
}
function bW$() {
	$.fn.bW = function (s) {
		return this.b('with', s)
	}
	$.fn.bW = function (s) {
		return this.dB('with: ' + s)
	}
	$.fn.bW = function (s) {
		return this.dB('with: ' + s)
	}
	$.fn.b$ = function (s) {
		return this.dB('click: ' + s)
	}
	$.fn.b$ = function (s) {
		return this.dB('click: ' + s)
	}
	$.fn.b$ = function (s) {
		return this.b('click', s)
	}
}
function cdf() {
	$.fn.bD = function (s) {
		return this.b('disable', s)
	}
	$.fn.bD = function (s) {
		return this.dB('disable: ' + s)
	}
	$.fn.bC = function (s) {
		return this.dB('checked: ' + s)
	}
	$.fn.bD = function (s) {
		return this.dB('disable: ' + s)
	}
	$.fn.bD = function (s) {
		return this.b('disable', s)
	}
	$.fn.bC = function (s) {
		return this.b('checked', s)
	}
	function hasV() {
		$.fn.bEv = function (s) {
			return this.dB('event: ' + s)
		}
		$.fn.bEv = function (s) {
			return this.b('event', s)
		}
		$.fn.bEv = function (s) {
			return this.b('event', s)
		}
		$.fn.bEv = function (s) {
			return this.dB('event: ' + s)
		}
		$.fn.bVs = function (s) {
			return this.b('visible', s)
		}
		$.fn.bVs = function (s) {
			return this.dB('visible: ' + s)
		}
		$.fn.bVs = function (s) {
			return this.dB('visible: ' + s)
		}
		$.fn.bV = function (s) {
			var g = G(arguments)
			str = "value: " + s
			if (!g.n) {
				str += ", valueUpdate: 'afterkeydown'"
			}
			this.b(str)
			return this
		}
		$.fn.bV = function (s) {
			var g = G(arguments)
			str = "value: " + s
			if (!g.n) {
				str += ", valueUpdate: 'afterkeydown'"
			}
			this.dB(str)
			return this
		}
		$.fn.bV = function (s) {
			var g = G(arguments)
			str = "value: " + s
			if (!g.n) {
				str += ", valueUpdate: 'afterkeydown'"
			}
			this.dB(str)
			return this
		}
	}
	
	$.fn.bF = function (s) {
		return this.b('hasFocus', s)
	}
	$.fn.bF = function (s) {
		return this.dB('hasFocus: ' + s)
	}
	$.fn.bF = function (s) {
		return this.b('hasFocus', s)
	}
	$.fn.bF = function (s) {
		return this.dB('hasFocus: ' + s)
	}
}
//////////////////////////////////////////////function koEls(){
function hTag() {
	$.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
}
function div() {
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dE = function (a, b) {
		var d = $.d().bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				d.A(el)
			})
		}
		else if (S(b)) {
			d.A(b)
		}
		return d
	}
	$.dW = function (a, b) {
		var d = $.d().bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.dH = function (a) {
		return $.d().bH(a)
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}//$.dI=
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.dW = $.dBw = function (a, b) {
		var d = $.d().bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dH = function (a) {
		return $.d().bH(a)
	}
	$.dE = function (a, b) {
		var d = $.d().bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				d.A(el)
			})
		}
		else if (S(b)) {
			d.A(b)
		}
		return d
	}
	$.dW = $.dBw = function (a, b) {
		var d = $.d()
				.bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.dH = function (a) {
		return $.d().bH(a)
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dE = function (a, b) {
		var d = $.d().bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				d.A(el)
			})
		}
		else if (S(b)) {
			d.A(b)
		}
		return d
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
};
function pg() {
	$.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.pI = function (a, b, c, d) {
		var p = $.p(b, c, d).bI(a)
	}
};
function span() {
	$.sT = $.spT = function (a, b) {
		return $.sp(b)
				.bT(a || '$data')
	}
	$.spVs = function (a) {
		return $.sp().b('vs', a)
	}
};
function list() {
	$.tdT = function (a, b) {
		var td = $.td()
		td.bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
	$.liT = $.liBt = function (a) {
		return $.li().bT(a)
	}
	$.olE = $.olBe = function (a, b) {
		var ol = $.ol().bE(a)
		if (b) {
			ol.A(b)
		}
		return ol
	}
	$.tBE = function (a, b) {
		var tB = $.tB()
		tB.bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				tB.A(el)
			})
		}
		return tB
	}
	function tabl() {
		$.tBE = function (a, b) {
			var g = G(arguments),
					tB = $.tB()
			tB.bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					tB.A(el)
				})
			}
			else {
				_.e(g.r, function (q) {
					tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
				})
			}
			return tB
		}
		$.tBT = function (arr) {
			var g = G(arguments),
					tB = $.tB(), tr = $.tr()
			_.e(g.r, function (q) {
				tr.A(q)
			})
			return tB.bE(arr).A(tr)
		}
		$.tBE = function (a, b) {
			var tB = $.tB()
			tB.bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					tB.A(el)
				})
			}
			return tB
		}
		$.tdT = function (a, b) {
			var td = $.td()
			td.bT(a)
			if (A(b)) {
				_.e(b, function (el) {
					td.A(el)
				})
			}
			return td
		}
	};
	function ul() {
		$.U = function () {
			var g = G(arguments)
			return $.uE(g.f, [$.li(g.s)])
		}
		$.uE = $.ulE = function (a, b, c) {
			var g = G(arguments)
			var ul = $.ul().bE(a)
			if (c) {
				b = $.li(_.r(g))
			}
			else if (O(b) && !A(b)) {
				b = [b]
			}
			if (A(b)) {
				_.e(b, function (el) {
					ul.A(el)
				})
			}
			else if (S(b)) {
				ul.A(b)
			}
			return ul
		}
	};
	$.U = function () {
		var g = G(arguments)
		return $.uE(g.f, [$.li(g.s)])
	}
	$.uE = $.ulE = function (a, b) {
		var ul = $.ul().bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				ul.A(el)
			})
		}
		else if (S(b)) {
			ul.A(b)
		}
		return ul
	}
	$.uE = $.ulE = function (a, b, c) {
		var g = G(arguments)
		var ul = $.ul().bE(a)
		if (c) {
			b = $.li(_.r(g))
		}
		else if (O(b) && !A(b)) {
			b = [b]
		}
		if (A(b)) {
			_.e(b, function (el) {
				ul.A(el)
			})
		}
		else if (S(b)) {
			ul.A(b)
		}
		return ul
		function old() {
			$.uE = $.uE = $.ulE = function (a, b) {
				var ul = $.ul().bE(a)
				if (A(b)) {
					_.e(b, function (el) {
						ul.A(el)
					})
				}
				else if (S(b)) {
					ul.A(b)
				}
				return ul
			}
		}
	}
	$.U = function () {
		var g = G(arguments)
		return $.uE(g.f, [$.li(g.s)])
	}
	$.olE = function (a, b) {
		var ol = $.ol().bE(a)
		if (b) {
			ol.A(b)
		}
		return ol
	}
	$.uLE = function (a) {
		var g = G(arguments);
		return $.ulE(a, $.li(g.r))
	}
	$.liT = $.liBt = function (a) {
		return $.li().bT(a)
	}
	$.olE = $.olBe = function (a, b) {
		var ol = $.ol().bE(a)
		if (b) {
			ol.A(b)
		}
		return ol
	}
};
function inp() {
	function anc() {
		$.a$ = function (t, fn) {
			return $.a(t).b('$', fn)
		}
		$.aA = function (a, b, c, d) {
			return $.a(b, c, d).bA(a)
		}
	};
	function select() {
		$.slB = function (a) {
			var q = $.sl()
			q.b.apply(q, arguments)
			return q
		}
	}
	
	function btt() {
		$.$bt = function (a, b) {
			var g = G(arguments)
			b = b || a
			if (g.n) {
				b = '$parent.' + b
			}
			return $.bt(a).b$(b)
		}
		$.bt$ = $.btB$ = function (a, b, c) {
			var bt = $.bt(a).b$(a)
			if (c) {
				bt.bEn(c)
			}
			return bt
		}
	};
	function form() {
		$.fSb = function (a, b) {
			var f = $.f()
			f.b({sb: a})
			if (A(b)) {
				_.e(b, function (el) {
					f.A(el)
				})
			}
			return f
		}
		$.fSb = $.fBsb = function (a, b) {
			var f = $.f()
			f.bSb(a)
			if (A(b)) {
				_.e(b, function (b) {
					f.A(b)
				})
			}
			return f
		}
	};
	function bindIP() {
		$.pI = function (a, b, c, d) {
			return $.p(b, c, d).bI(a)
		}
		$.pI = function (a, b, c, d) {
			var p = $.p(b, c, d).bI(a)
		}
		$.IP = $.ipTi = function (a) {
			return $.ip().bTi(a)
		}
		$.pwTi = function (a) {
			return $.pw().bTi(a)
		}
	}
	
	$.iV = $.ipV = $.ipBv = function () {
		var g = G(arguments), ip
		ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	$.ipTi = function (a) {
		return $.ip().bTi(a)
	}
	$.pwTi = function (a) {
		return $.pw().bTi(a)
	}
	$.iV = $.ipV = $.ipBv = function () {
		var g = G(arguments), ip
		ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	$.ipTi = function (a) {
		return $.ip().bTi(a)
	}
	$.cC = $.cbC = function (a) {
		if (U(a)) {
			a = '$'
		}
		return $.cb().bC(a)
	}
	$.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).b$(a)
	}
	$.pwTi = function (a) {
		return $.pw().bTi(a)
	}
	$.sO = $.slO = function (a) {
		return $.sl().bO(a)
	}
};
function koTx() {
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b).bT(a || '$data')
	}
	$.sT = $.spT = function (a, b) {
		a = a || '$data'
		return $.sp(b).bT(a)
	}
	$.ST = function (t) {
		return $.S().bT(t)
	}
	$.pT = function (a) {
		var p = $.p()
		p.bT(a);
		return p
	}
	$.h1T = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.liT = function (a) {
		return $.li().bT(a)
	}
	$.tdT = function (a, b) {
		var td = $.td().bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
}
function vsb() {
	$.spVs = function (a) {
		return $.sp().bVs(a)
	}
	$.spVs = function (a) {
		return $.sp().b('vs', a)
	}
	$.dV = $.dVs = function () {
		var g = G(arguments),
				d = $.d().bVs(g.f)
		_.e(g.r, function (q) {
			d.A(q)
		})
		return d
	}
	$.spVs = function (a) {
		return $.sp().b('vs', a)
	}
}
function mouse() {
	$.a$ = function (t, fn) {
		return $.a(t).b('$', fn)
	}
	/*
	 $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip
	
	 ip = $.ip()
	
	 ip.bV.apply(ip, g)
	
	 return ip
	 }*/
	$.fSb = $.fBsb = function (a, b) {
		var f = $.f()
		f.bSb(a)
		if (A(b)) {
			_.e(b, function (b) {
				f.A(b)
			})
		}
		return f
	}
	$.bt$ = $.btB$ = function (a, b, c) {
		var bt = $.bt(a).b$(a)
		if (c) {
			bt.bEn(c)
		}
		return bt
	}
	$.sO = $.slO = function (a) {
		return $.sl().bO(a)
	}
	$.$bt = function (a, b) {
		var g = G(arguments)
		b = b || a
		if (g.n) {
			b = '$parent.' + b
		}
		return $.bt(a).b$(b)
	}
	$.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).b$(a)
	}
	$.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).b$(a)
	}
	$.$bt = function (a, b) {
		var g = G(arguments)
		b = b || a
		if (g.n) {
			b = '$parent.' + b
		}
		return $.bt(a).b$(b)
	}
	$.eT = $.emT = function (t) {
		return $.em().bT(t)
	}
	$.a$ = function (t, fn) {
		return $.a(t).b('$', fn)
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	$.fSb = function (a, b) {
		var f = $.f()
		f.b({sb: a})
		if (A(b)) {
			_.e(b, function (el) {
				f.A(el)
			})
		}
		return f
	}
	$.cC = $.cbC = function (a) {
		return $.cb().bC(a)
	}
	$.c$ = function (fn) {
		return $.cb().b$(fn)
	}
	$.cC = $.cbC = function (a) {
		if (U(a)) {
			a = '$'
		}
		return $.cb().bC(a)
	}
	$.sO = function (a) {
		return $.sl().bO(a)
	}
	$.a$ = function (t, fn) {
		return $.a(t).b('$', fn)
	}
	$.b$ = $.bt$ = $.btB$ = function (a, b, c) {
		var bt = $.bt(a)
		bt.b$(b || a)
		if (c) {
			bt.bEn(c)
		}
		return bt
	}
	$.b$$ = function () {
		var sp = $.sp()
		_.e(arguments, function (a) {
			sp.A($.b$(a))
		});
		return sp
	}
}
function extendObbArr() {
	oA = ko.observableArray.fn
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
}
function _pre() {
	 
	kA = function () {
		var g = G(arguments)
		return ko.oa(g.A_ ? g.f : g)
	}
	kO = function () {
		var g = G(arguments)
		return ko.o.apply(ko, g)
	}
 
// ko.b({ g[0]:  ko.o(b) })
	$o = function (a) {
		return ko.o(a)
	}
	OK = ok = $b = ko.b = ko.ab = function (o, b) {
		var g = G(arguments), ob
		if (S(o)) {
			ob = {}
			ob[o] = b
			g[0] = ob
		}
		if (O(g[0])) {
			vm = g[0];
			return ko.applyBindings(g[0])
		}
		return ko
	}
// ko.b({ g[0]:  ko.o(b) })
	ok = function () {
		var g = G(arguments)
		g.p ? $.in(0, aB) : aB()
		function aB() {
			vm = g.S_ ? // pass a single key, value -> {key:value}
					Ob(g.f, g.s, g.n ? '-' : null) :
					g.u ? // pass nothing -> {$: $o(1)}
					{$: $o(g.n ? 0 : 1)} :
						// ???? pass plain object and element(string or ob?) :)
							(F(g.f) || N(g.f) || A(g.f) ) ?
								// pass just a value -> {$: value}
							{$: g.f} :
								// pass just plain obj (normal)
									g.f
			ko.applyBindings(vm)
			function Ob(a, b) {
				var g = G(arguments),
						o = {k: g.f, v: g.s}
				var ob = {}
				if (S(o.k)) {
					o.v = D(o.v) ? o.v : $o(g.n ? 0 : 1)
					ob[o.k] = o.v
				}
				return ob
			}
		}
	}
	OK = function (a) {
		var g = G(arguments)
		g.push('+')
		return ok.apply(null, g)
	}
//OK=ok
	ko.ve = ko.vE = ko.virtualElements
	ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	//ko.ut.uo = ko.ut.unwrapObservable
	ko.r = ko.rg = function (n, ob) {
		ob = ob || {}
		if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
			ob.vm = {element: ob.vm}
		}
		ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
		if (U(ob.viewModel)) {
			ob = {vm: ob}
		}
		ob.template = ob.template || ob.tp || ob.t
		vm = ob
		return ko.cm.rg(n, ob)
	}
return
	ko.cm.iR = ko.cm.isRegistered
	ko.c = ko.computed
	ko.o = ko.observable
	ko.bD = ko.applyBindingsToDescendants
	ko.o = ko.observable
	ko.c = ko.computed
	ko.do = ko.dependentObservable
	ko.oa = ko.observableArray
	ko.bh = ko.BH = ko.bindingHandlers
	ko.u = ko.ut = ko.utils
	ko.u.af = ko.u.arrayFilter
	ko.o = ko.observable
	ko.c = ko.computed
	ko.oA = ko.observableArray
	ko.oa = $oa = function (a) {
		var g = G(arguments), a = g[0]
		if (!A(a)) {
			a = g
		}
		return ko.oA(a)
	}
	ko.do = ko.dependentObservable
	ko.pc = ko.pureComputed
	ko.rTp = ko.renderTemplate
	ko.cm = ko.components
	ko.cm.rg = ko.cm.register
	ko.ve = ko.vE = ko.virtualElements
	ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.ut.uo = ko.ut.unwrapObservable
	ko.r = ko.rg = function (n, ob) {
		ob = ob || {}
		if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
			ob.vm = {element: ob.vm}
		}
		ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
		if (U(ob.viewModel)) {
			ob = {vm: ob}
		}
		ob.template = ob.template || ob.tp || ob.t
		vm = ob
		return ko.cm.rg(n, ob)
	}
//	ko.cm.iR = ko.cm.isRegistered
	ko.c = ko.computed
	ko.o = ko.observable
	ko.bD = ko.applyBindingsToDescendants
	oA = ko.observableArray.fn
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
	kA = function () {
		var g = G(arguments)
		return ko.oa(g.A_ ? g.f : g)
	}
	kO = function () {
		var g = G(arguments)
		return ko.o.apply(ko, g)
	}
	ko.ab = ko.applyBindings
	ko.bD = ko.applyBindingsToDescendants
	ko.uw = ko.unwrap
	ko.rTp = ko.renderTemplate
	ko.ve = ko.vE = ko.virtualElements
//ko.B=ko.ve.ab= ko.vE.AB= ko.vE.allowedBindings
	ko.u = ko.ut = ko.utils
	ko.ut.af = ko.ut.arrayFilter
	ko.ut.uo = ko.ut.unwrapObservable
	ko.bh = ko.BH = ko.bindingHandlers
	ko.u = ko.ut = ko.utils
	ko.u.af = ko.u.arrayFilter
	ko.o = ko.observable
	ko.c = ko.computed
	ko.oA = ko.observableArray
	ko.oa = $oa = function (a) {
		var g = G(arguments), a = g[0]
		if (!A(a)) {
			a = g
		}
		return ko.oA(a)
	}
	ko.do = ko.dependentObservable
	ko.pc = ko.pureComputed
	ko.rTp = ko.renderTemplate
	ko.cm = ko.components
	ko.cm.rg = ko.cm.register
	$o = function (a) {
		return ko.o(a)
	}
//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	$o = ko.o = function (a) {
		return ko.observable(a)
	}
	$oa = ko.oa = function (a) {
		var g = G(arguments), a = g[0]
		return ko.observableArray(g.A_ ? g.f : g)
	}
	$Ob = function (a, b) {
		var g = G(arguments),
				o = {k: g.f, v: g.s}
		var ob = {}
		if (S(o.k)) {
			o.v = D(o.v) ? o.v :
					$o(g.n ? 0 : 1)
			ob[o.k] = o.v
		}
		return ob
	}
	ok = function () {
		var g = G(arguments), ob
		g.p ? _.in(0, aB) :
				aB()
		function aB() {
			vm = g.S_ ? // pass a single key, value -> {key:value}
					$Ob(g.f, g.s, g.n ? '-' : null) :
					g.u ? // pass nothing -> {$: $o(1)}
					{$: $o(g.n ? 0 : 1)} :
						// ???? pass plain object and element(string or ob?) :)
							(F(g.f) || N(g.f) || A(g.f) ) ?
								// pass just a value -> {$: value}
							{$: g.f} :
								// pass just plain obj (normal)
									g.f
			ko.aB(vm)
		}
		
		function old() {
			OK = function (o, b) {
				var g = G(arguments), ob
				return g.S_ ?
						ko.aB(vm = $Ob(o, b)) : g.O ?
						ko.aB(vm = g[0]) :
						ko
				function alt() {
					OK = function (a) {
						var g = G(arguments), ob
						g.push('+')
						return ok.apply(null, g)
					}
				}
			}
		}
	}
 
	ko.u = ko.ut = ko.utils
	ko.o = ko.observable
	ko.oa = ko.oA = ko.observableArray
	ko.c = ko.computed
	ko.pc = ko.pureComputed
	ko.do = ko.dependentObservable
	ko.aB = ko.ab = ko.applyBindings
	ko.bD = ko.applyBindingsToDescendants
	ko.ve = ko.vE = ko.virtualElements
	ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.ut.af = ko.ut.arrayFilter
	ko.rTp = ko.renderTemplate
	ko.uw = ko.unwrap
	ko.ut.uo = ko.ut.unwrapObservable
	ko.c = ko.computed
	ko.pc = ko.pureComputed
}
$L('obbArrProto', 'scrp', '$fn', 'bEls', 'apps')
cbKO = cb2 = function (m, binding, val) {
	var cbox = $.input().type('checkbox'),
			pg = $.p().A(
					$.span().A(m),
					cbox.koBind('checkbox', binding)
			)
	if (val) {
		cbox.val(val)
	}
	return pg
}
bd = knockoutBind2 = function (a) {
	var g = G(arguments), a = g[0]
	if (g.p) {
		a = 'text: ' + a
	}
	if (g.n) {
		a = 'click: ' + a
	}
	if (g.m) {
		a = 'value: ' + a
	}
	if (g.d) {
		a = 'checked: ' + a
	}
	q.attr({'data-bind': a})
	return q
}
function obbArrProto() {//bT,bV and computed
	oA = ko.observableArray.fn // inhertince extension :)
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
	oA.rm = function (i) {
		var oA = this
		oA.remove(i)
		return oA
	}
	oA = ko.observableArray.fn // inhertince extension :)
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
}
function $fn() { 
}
function bEls() { 
}
function bindHandlres() {
	ko.bindingHandlers.randomOrder = {
		init: function (elem, valueAccessor) {
			// Build an array of child elements
			var child = ko.virtualElements.firstChild(elem),
					childElems = [];
			while (child) {
				childElems.push(child);
				child = ko.virtualElements.nextSibling(child);
			}
			// Remove them all, then put them back in a random order
			ko.virtualElements.emptyNode(elem);
			while (childElems.length) {
				var randomIndex = Math.floor(Math.random() * childElems.length),
						chosenChild = childElems.splice(randomIndex, 1);
				ko.virtualElements.prepend(elem, chosenChild[0]);
			}
		}
	};
	$.fSb = function (a, b) {
		var f = $.f()
		f.b({sb: a})
		if (A(b)) {
			_.e(b, function (el) {
				f.A(el)
			})
		}
		return f
	}
	$.fn.bEn = function (a) {
		return this.b('en', a)
	}
	$D = $Dt = function () {
		var dt = new Date()
		return dt
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	Task = function (tt, done) {
		return {
			tt: ko.o(tt),
			done: ko.o(done)
		}
	}
	ko.bH = ko.bindingHandlers
	ko.bH.randomOrder = {
		init: function (el, vA) {
			var ch = ko.vE.firstChild(el), CH = []
			while (ch) {
				CH.push(ch);
				ch = ko.vE.nextSibling(ch)
			}
			ko.vE.emptyNode(el)
			while (CH.length) {
				ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
			}
		}
		
		/*
		 init: function(el, valAcc) {
		 var childElems = []
		 while(el.firstChild)
		 childElems.push(el.removeChild(el.firstChild))
		 while(childElems.length) {
		 var randomIndex = M.fl(M.rn() * childElems.length),
		 chosenChild = childElems.splice(randomIndex, 1);
		 el.appendChild(chosenChild[0]);
		 }
		 }
		 */
	}
	ko.bH.fadeVisible = {
		init: function (el, vA) {// 1st set el vs pop rel to val
			$(el).toggle(ko.unwrap(vA()))
		},
		update: function (el, vA) {//on change, slowly fade el in/out
			ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
		}
	}
	ko.bH.hasFocus = {
		init: function (el, vA) {
			$(el).focus(function () {
				vA()(1)
			})
			$(el).blur(function () {
				vA()(0)
			})
		},
		update: function (el, vA) {
			ko.uw(vA()) ? el.focus() : el.blur()
		}
	}
	$bH = function (b, o) {
		if (F(o.u)) {
			o.update = o.u
		}
		if (F(o)) {
			o = {update: o}
		}
		ko.bH[b] = o
		$.fn[b] = function (a) {
			this.b(b, a)
		}
	}
	$bH('slV', function (el, vA) {
		var isChecked = ko.uw(vA())
		isChecked ? $(el).slD(1800) :
				$(el).slU(2000)
	})
	ko.bH = ko.bindingHandlers
	ko.bH.randomOrder = {
		init: function (el, vA) {
			var ch = ko.vE.firstChild(el), CH = []
			while (ch) {
				CH.push(ch);
				ch = ko.vE.nextSibling(ch)
			}
			ko.vE.emptyNode(el)
			while (CH.length) {
				ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
			}
		}
		
		/*
		 init: function(el, valAcc) {
		 var childElems = []
		 while(el.firstChild)
		 childElems.push(el.removeChild(el.firstChild))
		 while(childElems.length) {
		 var randomIndex = M.fl(M.rn() * childElems.length),
		 chosenChild = childElems.splice(randomIndex, 1);
		 el.appendChild(chosenChild[0]);
		 }
		 }
		 */
	}
	ko.bH.fadeVisible = {
		init: function (el, vA) {// 1st set el vs pop rel to val
			$(el).toggle(ko.unwrap(vA()))
		},
		update: function (el, vA) {//on change, slowly fade el in/out
			ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
		}
	}
	ko.bH.hasFocus = {
		init: function (el, vA) {
			$(el).focus(function () {
				vA()(1)
			})
			$(el).blur(function () {
				vA()(0)
			})
		},
		update: function (el, vA) {
			ko.uw(vA()) ? el.focus() : el.blur()
		}
	}
	$bH = function (b, o) {
		if (F(o.u)) {
			o.update = o.u
		}
		if (F(o)) {
			o = {update: o}
		}
		ko.bH[b] = o
		$.fn[b] = function (a) {
			this.b(b, a)
		}
	}
	$bH('slV', function (el, vA) {
		var isChecked = ko.uw(vA())
		isChecked ? $(el).slD(1800) :
				$(el).slU(2000)
	})
//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	ko.bindingHandlers.randomOrder = {
		init: function (elem, valueAccessor) {
			// Build an array of child elements
			var child = ko.virtualElements.firstChild(elem),
					childElems = [];
			while (child) {
				childElems.push(child);
				child = ko.virtualElements.nextSibling(child);
			}
			// Remove them all, then put them back in a random order
			ko.virtualElements.emptyNode(elem);
			while (childElems.length) {
				var randomIndex = Math.floor(Math.random() * childElems.length),
						chosenChild = childElems.splice(randomIndex, 1);
				ko.virtualElements.prepend(elem, chosenChild[0]);
			}
		}
	};
}
str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
KOO = function () {
	
	
	
	//body { font-family: arial; font-size: 14px; }
	//.liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
	//.liveExample input { font-family: Arial; }
	//.liveExample b { font-weight: bold; }
	//.liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
	//.liveExample select[multiple] { width: 100%; height: 8em; }
	//.liveExample h2 { margin-top: 0.4em; font-weight: bold; font-size: 1.2em; }
	d = $.dK('liveExample').A(
			$.p().A('First name: ', $.ip().attr({'data-bind': 'value: firstName'})),
			$.p().A('Last name: ', $.ip().attr({'data-bind': 'value: lastName'})),
			$.h2().A('Hello, ', $.sp().attr({'data-bind': 'text: fullName'}), '!')
			
			/*
			
			
			 "<p>First name: <input type="text" data-bind="value: firstName"></p>
			 <p>Last name: <input type="text" data-bind="value: lastName"></p>
			
			 <h2>Hello, <span data-bind="text: fullName">function g(){if(0&lt;arguments.length){if("function"===typeof C)C.apply(d,arguments);
			 else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option.
			 If you wish to read the current value, don't pass any parameters.");
			 return this}a.k.Ob(g);(r||s&amp;&amp;f())&amp;&amp;l();return n}</span>!</h2>"
			 */
	)
	ViewModel = function (first, last) {
		this.firstName = ko.observable(first);
		this.lastName = ko.observable(last);
		this.fullName = ko.computed(function () {
			// Knockout tracks dependencies automatically.
			// It knows that fullName depends on firstName and lastName,
			// because these get called when evaluating fullName.
			return this.firstName() + " " + this.lastName();
		}, this);
	};
	ko.applyBindings(new ViewModel("Planet", "Earth"))
	// This makes Knockout get to work
}
KKO = function () {
	d = $(str).A()
	ViewModel = function (first, last) {
		this.firstName = ko.observable(first);
		this.lastName = ko.observable(last);
		this.fullName = ko.computed(function () {
			// Knockout tracks dependencies automatically.
			// It knows that fullName depends on firstName and lastName,
			// because these get called when evaluating fullName.
			return this.firstName() + " " + this.lastName();
		}, this);
	};
	ko.applyBindings(new ViewModel("Planet", "Earth"))
}