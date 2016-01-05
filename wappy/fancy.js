$.dragStage = function (x, y) {
	dragFrame = function (div) {
		var outerDiv = $.div('r').drag().pad(20).A()
		div = div || $.div('y', 50, 50).mar(20)
		div.on('mousedown', function (e) {
			e.stopPropagation()
		})
		outerDiv.A(div)
		return outerDiv
	}
	c = $.canvas('g', 400)
	s = new cjs.Stage(c[0]).tick()
	dragFrame(c).A()
	return s
}
FANCYEDIT = function (x, y) {
	z()
	canvas = $.canvas('g', 400)
	stage = new cjs.Stage(canvas[0]).tick()
	frame = $.dragFrame(theSpan = $.span())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imagesDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.button('cut'),
			$.button('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $span()
				var newStage = dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sxy(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	theSpan.A()
}
$.colorPicker = $.ColorPicker = function () {
	z()
	colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
	colorPicker.change(function () {
		$l(colorPicker.val())
	})
}
function tweenArt() {
	TWEENART = function (a) {
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		s = $St()
		s.mug(function (b) {
					b.XY(300);
					b.rC(); //centers it's reg point?
					SK(b)
					$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					s.mug(function (b) {
						b.XY(200);
						b.rC();
						b.WH(200);
						SL(b);
						$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						s.mug(function (b) {
							b.rC();
							b.XY(600);
							SC(b)
							$Tw([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				},
				EDIT()
		)
	}
	TWEENART = function (a) {
		//wMb makes bitmap mug and passes it to a callback
		//optionally? can pass a stage to append it to before the callback runs
		s = $St()
		s.mug(function (b) {
					b.XY(300);
					b.rC(); //centers it's reg point?
					SK(b)
					$Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
					s.mug(function (b) {
						b.XY(200);
						b.rC();
						b.WH(200);
						SL(b);
						$Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
						s.mug(function (b) {
							b.rC();
							b.XY(600);
							SC(b)
							$Tw([b, 'l'], {kxy: 0},
									[{kxy: 20}, 500],
									[{kxy: 0}, 500])
						})
					})
				},
				EDIT()
		)
	}
}
FAANCYY = function (x, y) {
	z()
	canvas = $.c('g', 400)
	st = stage = $St(canvas[0])
	frame = $.dragFrame(sp = $.sp())
	sp.A(
			$.bt('X', function () {
				frame.rm()
			}),
			$.bt('pics', function () {
				$.imgDiv(st)
			}),
			$.bt('transform'),
			$.bt('text'),
			$.bt('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						st.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							//                    stagePainter(paintStage)
						})
			}),
			$.bt('cut'),
			$.bt('save'))
	sp.A($.br(), canvas)
	sp.A($.d().A(
			$.bt('clear', function () {
				st.removeAllChildren()
			}),
			$.bt('flat', function () {
				st.removeAllChildren()
				st.bm(st.toDataURL(), function (bm) {
					bm.dg()
				})
			}),
			$.bt('clone', function () {
				var sp = $.sp(),
						newStage = $.dragStage().A(sp)
				newStage.bm(st.du(), function (bm) {
					SL(bm)
				})
			}),
			$.bt('recur', function () {
				stbm(st.du(), function (bm) {
					bm.sxy(.4).SL()
				})
			}),
			$.bt('copy', function () {
				_copy = st.du()
			}),
			$.bt('paste', function () {
				st.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.bt('replace', function () {
				st.rm()
				st.bm(_copy, function (bm) {
					bm.dg()
				})
			})
	))
	sp.$$(function () {
		$('button').toggle()
	})
	sp.A()
}//C
FAANCY = function (x, y) {
	z()
	$.iD = $.imgDiv = function (st) {
		d = $.d('y', '+')
		$.eGj('img', function (i) {
			d.A($.c(100, 100).fit(i.d)
					.$(function () {
						st.bm(i.d, function (bm) {
							bm.sXY(.4).dg()
						})
					}))
		})
	}
	canvas = $.c('g', 400)
	stage = new cjs.Stage(canvas[0]).t()
	frame = $.dragFrame(theSpan = $.sp())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imgDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.button('cut'),
			$.button('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $.sp()
				var newStage = $.dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sXY(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	theSpan.A()
}//A-
ZXZ = function () {
	$.fn.md = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mu = function (l) {
		var c = this
		c.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mm = function (l) {
		$l('mU')
		var c = this
		c.mousemove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.$$ = $.fn.dblclick
	$.eD = $.editDiv = function (words) {//$.dE
		canMove = true
		changeLocation = true
		inputMove = true
		mouse = 'up'
		ta = $.ta().mar(4)
		sp = $.sp().C('z')
		fn = function () {
			sp.T(ta.v())
		}
		d = $.dA('+').C('n', 'y').pad(8)
		d.zIndex(0)
		xBt = $.bt('', function () {
			d.rm()
		}).WH(4).C('red')
		d.md(function () {
			inputMove = false;
			mouse = 'div'
		})
		d.mu(function () {
			mouse = 'up'
		})
		d.md(function () {
			$.editDiv.TOP++
			$(this).zIndex($.editDiv.TOP)
		})
		ta.md(function (e) {
			$.editDiv.TOP++
			$(this).parent().zIndex($.editDiv.TOP)
			location = {top: d.Y(), left: d.X()}
			inputMove = true
			mouse = 'input'
			e.stopPropagation()
		})
		ta.mm(function (e) {
			if (inputMove) {
				e.stopPropagation();
				d.XY(location.left, location.top)
			}
		})
		if (U(words)) {
			return d.A(xBt, $.br(), sp.hd(), ta,
					$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
						$(this).pa().free()
					})
			).$$(function (e) {
						e.stopPropagation()
						sp.T(ip.v())
						xBt.gg();
						ip.gg();
						sp.gg()
					})
		}
		else {
			ip.v(words)
			sp.T(ta.v())
			return d.$$(function (e) {
				e.stopPropagation()
				sp.T(ta.v())
				xBt.gg();
				ip.gg();
				sp.gg()
			}).A(xBt, $.br(), sp, ip.hd())
		}
	};
	$.editDiv.TOP = 0
	z()
	a = $.editDiv().A().C('a')
	b = $.editDiv().A().C('b')
}//C-
 