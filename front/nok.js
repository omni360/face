$L('bindings')
$o = function () {
	var g = G(arguments)
	g[0] = g.u ? (g.n ? 0 : 1) : g.f
	return ko.o.apply(ko, g)
}
$oA = $oa=function () {
	var g = G(arguments)
	return ko.oA(g.A_ ? g.f : g)
}
ok = function self(vm, el) {
	if (A(vm)) {
		return self(vm[0], vm[1])
	}
	if (S(vm)) {
		return self($Ob(vm, el))
	}
	window.vm = vm
	ko.aB(vm, el)
	return vm
}
OK = $ok = function self() {

// ???? pass plain object and element(string or ob?) :)
	var g = G(arguments)
	if (g.p) {
		_.in(0, function () {
			self.apply(null, g)
		})
	}
	// pass nothing -> {da: $o(1)} Note: 'da' replaced '$'
	if (g.u) {
		g.f = 'da'
	}
	// pass a single key, value -> {key:value}
	vm = S(g.f) ? Ob(g.f, D(g.s) ? g.s : $o(g.n)) :
		// pass just a value -> {$: value}
			F(g.f) || N(g.f) || A(g.f) ?
					Ob('da', g.f)
				// pass just plain obj (normal)
					: g.f
	ok(vm)
}
$KOob = function (k, v) {
	var g = G(arguments)
	if (g.O) {
		var o = []
		_.e(g.f, function (v, k) {
			o.push($KOob(k, v))
		})
		return o.join()
	}
	k = KOob[k] ? KOob[k] : k
	v = v ? ': ' + v : ''
	return k + v
}
$.fn.dB = function (dB, p2) {
	return this.at({'data-bind': p2? (dB+':'+p2): dB})
}

$.fn.ko =   function (a, b) {
	var o = []
	if (O(a)) {
		_.e(a, function (v, k) {if (KOob[k]) {k = KOob[k]}
			o.push(k + ':' + v)
		})
		this.b(  $l(o.join()))
	}
	
	else {
		if (KOob[a]) {a = KOob[a]}
		str = a + ':' + b;  // str= oO('b', a)
		this.at({'data-bind': str})
	}
	return this
}
$.fn.b = function (a, b) {
	var q = this, g = G(arguments)
	var str = g.O ? $KOob(g.f) :
			hasCln(a) ? a :
					$KOob(a, b || 't')
	return q.dB(str)
	function hasCln(str) {
		return str.indexOf(':') != -1
	}
}
/*
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
 */
function bindings() {
	html = $.fn.ko_ht = function (s) {
		return this.b('html', s)
		// = $.fn.bH
	}
	attr = $.fn.bA = $.fn.bAt = function (s) {
		return this.b('attr', s)
	}
	event = $.fn.bEv = function (s) {
		return this.b('event', s)
	}
	visib = $.fn.ko_vs = $.fn.bVs = function (s) {
		return this.b('visible', s)
	}
	style = $.fn.bY = $.fn.bSy = function (s) {
		return this.b('style', s)
	}
	wit = $.fn.ko_w = $.fn.ko_with = $.fn.bW = function (s) {
		return this.b('with', s)
	}
	iff = $.fn.ko_if = $.fn.bI = $.fn.bIf = function (s) {
		return this.b('if', s)
		// = $.fn.bI = $.fn.bIf
	}
	not = $.fn.bN = $.fn.bIN = function (s) {
		return this.b('ifnot', s)
	}
	click = $.fn.ko_$ = $.fn.ko_click = $.fn.b$ = function (s) {
		return this.b('click', s)
	}
	submit = $.fn.bSm = function (s) {
		return this.b('submit', s)
	}
	 
	focus = $.fn.bF = function (s) {
		return this.b('hasFocus', s)
	}
	$.fn.ko_option = $.fn.ko_op = function (s) {//= $.fn.bO
		return this.b('o', s)
	}
	$.fn.ko_options = $.fn.ko_ops = function (s) {//= $.fn.bSO
		return this.b('so', s)
	}
	enab = $.fn.bEn = function (s) {
		return this.b('enable', s)
	}
	disab = $.fn.bD = function (s) {
		return this.b('disable', s)
	}
	uniq = $.fn.bU = $.fn.bUN = function (s) {
		return this.b('uniqueName' + s)
	}
	compo = $.fn.bCm = function (s) {
		return this.b('component', s)
	}
	templ = $.fn.bTp = function (s) {
		return this.b('template', s)
	}
}

$.fn.t$= $.fn.ko_t = $.fn.ko_tx = $.fn.bT = function (s) {
	return this.b('text', s || '$data')
}
$.fn.v$=$.fn.bV = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.fn.ko_txIp = $.fn.bTI = $.fn.bTi = function (s) {
	return this.b('textInput', s)
}
function elements() {
	$.d_w = function (a, b) {
		var d = $.d().bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
		//= $.dW = $.dBw
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	$.d_h = $.dH = function (a) {
		return $.d().bH(a)
	}
	$.d_cm = $.dCm = function (a) {
		return $.d().bCm(a)
	}
	ko.d.if = $.d_if = $.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.sp_t = $.spT = $.spBt = function (a, b) {
		return $.sp(b).bT(a)
	}
	$.sp_t = $.sT = $.spT = function (a, b) {
		a = a || '$data'
		return $.sp(b).bT(a)
	}
	$.h1_bt = $.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.p_i = $.pI = function (a, b, c, d) {
		var p = $.p(b, c, d).bI(a)
	}
	$.p_t = $.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.li_t = $.liT = $.liBt = function (a) {
		return $.li().bT(a)
	}
	$.td_t = $.tdT = function (a, b) {
		var td = $.td()
		td.bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
	$.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.pI = function (a, b, c, d) {
		var p = $.p(b, c, d).bI(a)
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b)
				.bT(a || '$data')
	}
	$.spVs = function (a) {
		return $.sp().bVs(a)
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
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d//$.dI=
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
	$.dT = function (a) {
		return $.d().bT(a)
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
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b).bT(a || '$data')
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

$.fn.ch$   = function (s) {
	//= $.fn.ko_C_ = $.fn.bC
	return this.b('checked', s)
}

ko.cb = $.cC = function (a) {
	//$.cb_c =  $.cbC
	return $.cb().ch$(a)
}
ko.sp = function (t) {
	return $.sp().t$(t)
}

function inputs() {
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
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	$.smEn = function (a) {
		return $.sm().bEn(a)
	}
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
	$.ipV = $.ipBv = function () {
		var g = G(arguments),
				ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
		$.iV = warning = $.ipV = $.ipBv = function () {
			var g = G(arguments), ip
			ip = $.ip()
			ip.bV.apply(ip, g)
			return ip
		}
	}
	$.sO = $.slO = function (a) {
		return $.sl().bO(a)
	}
	$.ip_v = $.ipV = $.ipBv = function () {
		var g = G(arguments),
				ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	$.ip_tI = $.ip_ti = $.ipTi = function (a) {
		return $.ip().bTi(a)
	}
	$.pw_tI = $.pw_ti = $.pwTi = function (a) {
		return $.pw().bTi(a)
	}
	$.f_sb = $.fSb = $.fBsb = function (a, b) {
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
	$.bt_$ = $.bt$ = $.btB$ = function (a, b) {
		return $.bt(a).b$(a)
	}
	$sb_$ = $.s$ = function (a, b, c, d) {
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
	function options() {
		$.fn.bH = function (s) {
			return this.b('html', s)
		}
		$.fn.bS = function (s) {
			return this.b('css', s)
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
		$.cC = $.cbC = function (a) {
			if (U(a)) {
				a = '$'
			}
			return $.cb().bC(a)
		}
		$.c$ = function (fn) {
			return $.cb().b$(fn)
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
}


function classic() {
	knockoutBind2 = function (a) {

//= bd
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
}
function alphaPams() {
	$.fn.pm = $.fn.pam = $.fn.pams = $.fn.par = function (a, b) {
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
}
function _pre() {
	KOob = {
	
		e: 'foreach',
		ch: 'checked', c: 'checked',
		t: 'text',
		 v: 'value',
		  h: 'html',
		 i: 'if',
		$: 'click',
		fc: 'hasFocus', hF: 'hasFocus',f: 'hasFocus',
		 w: 'with',
		at: 'attr', a: 'attr',
		en: 'enable',
		vs: 'visible', tI: 'textInput',
		o: 'options',
		oT: 'optionsText',
		ev: 'event',
		sm: 'submit',
		sO: 'selectedOptions',
		n: 'ifnot',
		d: 'disable',
		///////////
		u: 'uniqueName', vU: 'valueUpdate',
		cm: 'component', tp: 'template',
		////////////////////
		s: 'css', sty: 'style', y: 'style'
	
	}
	
	ko.ut = ko.u = ko.utils
	ko.cm = ko.components
	ko.vE = ko.ve = ko.virtualElements
	ko.aB = ko.ab = ko.applyBindings
	ko.o = ko.observable
	ko.c = ko.computed
	ko.pC = ko.pc = ko.pureComputed
	ko.oA = ko.oa = ko.observableArray
	ko.aF = ko.ut.aF = ko.u.af = ko.u.arrayFilter
	ko.cm.rg = ko.cm.register
	ko.bH = ko.bh = ko.BH = ko.bindingHandlers
	ko.rTp = ko.rT = ko.renderTemplate
	ko.dO = ko.do = ko.dependentObservable
	ko.uw = ko.unwrap
	ko.ut.uo = ko.ut.unwrapObservable
	ko.bD = ko.applyBindingsToDescendants
	ko.cm.iR = ko.cm.isRegistered
	ko.vE.aB = ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	function extending() {
		oA = ko.observableArray.fn
		oA.rm = function (i) {
			var oA = this
			oA.remove(i)
			return oA
		}
		oA.p = function (i) {
			var oA = this
			oA.push(i)
			return oA
		}
	}
	
	extending()
}
$cO = function () {
	return ko.computed.apply(ko, arguments)
}

KOO = function () {
	
	sp = $.sp().t$('fullName')
	
	$.h2().A('Hello, ', sp, '!')
	$.p().A('First name: ', $.ip().v$('firstName') )
	$.p().A('Last name: ', $.ip().v$('lastName') )
	
	VM = function (first, last) {
		
		this.firstName = $o(first)
		
		this.lastName = $o(last)
		
		this.fullName = $cO(function () {
			return this.firstName() + " " + this.lastName();
		
		}, this)
	}
	
	ok(new VM("rigo", "ochoa"))
}
COMPUTED = CPD = function () {
	$.d().A(
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			$.p('L: ', $.b().bT('fl')),
			$.bt('caps').b$('capL')
	)
	vm = {
		f: $o('j'),
		l: $o('y'),
		capL: function () {
			this.l(_.tU(this.l()))
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
	function klassk() {
		KNOCKS = function () {
			format()
			s2(h1('KNOCKOUT'),
					pg('F: ', _B().b('t', 'f')),
					pg('L: ', _B().b('t', 'l')),
					pg('F: ', ip().b('V', 'f')),
					pg('L: ', ip().b('V', 'l')).id('l'),
					pg('L: ', _B().b('t', 'fl')),
					bt('caps').b('$', 'capL'))
			vm = {}
			vm.f = $o('j')
			vm.l = $o('y')
			vm.fl = ko.c(function () {
				return vm.f() + ' ' + vm.l()
			})
			vm.capL = function () {
				vm.l(uC(vm.l()))
			}
			ko.ab(vm)
		}
	}
}
VALUE = VAL = function () {
	$.p('Name:').A($.ip().b({
				v: 'editing',
				v: 'name',
				f: 'editing'
			}),
			$.d('r').b({v: '!editing()', t: 'name', $: 'edit'}))
	$.p('Click the name to edit it; click elsewhere to apply changes')
	ok({
		name: $o("Bert Bertington"),
		editing: $o(),
		edit: function () {
			vm.editing(true)
		}
	})//KOFCC
}
WITHH = function () {
	$.d([
		$.h1().t$('city'),
		$.p([
			'lat:', $.sp().t$('lat'),
			'lon:', $.sp().t$('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
BSTY = function () {
	$s({
		bd: {fS: 100, C: 'p'},
		_profWarn: {C: 'r', c: 'b'},
		_profPos: {C: 'b', c: 'r'}
	})
	d = $.d(['Prof Info'])
	str = "{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
	d.b({y: str})
	vm = {curProf: $o(150000)}
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
BCSS = function () {
	$s({
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	})
	$.d(['Prof Info']).fS(40).b({s: 'profSts'})
	vm = {
		curProf: $o(150000)
	}
	vm.profSts = ko.pureComputed(function () {
		var res = this.curProf() < 0 ? "profWarn" : "profPos"
		return res
	}, vm)
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
CHECK = SPAMM = function () {
	$.cKO = function (m, b, v) {
		var cb = $.cb()
		var p = $.p().A($.sp().A(m), cb.ch$(b))
		if (v) {
			cb.v(v)
		}
		return p
	}//=cbKO=cb2
	$.p(['spam?',
		$.cC('wantSpam', 'wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])])
			.bVs('wantSpam')
	vm = {wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
