w.aAF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	sB.cAF(A(g.t) ? g.t : _.r(g, 2))
	return w
}
w.cAF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	return sB.cAF(A(g.t) ? g.t : _.r(g, 2))
}
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}

w.cTri= w.tri = function (x, y) {
	return this.sB(x, y), $fD($pH()).SAA([
				V(-1, 0), V(0, -1), V(1, 0)
			], 3)		
}

w.aTri = function (x, y) {
	this.sB(x, y).CF(
	
			
			$fD($pH()._SAA([
				V(-1, 0), V(0, -1), V(1, 0)
			]))
	)
	
	return this
}
  