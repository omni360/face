 
function card() {
	CARD = function () {
		var t = 100, d
		card = function (a, b) {
			d = $.dA('y', 300)//.cen()
			d.$$(function () {
				d.rm()
			})
			if (O(a)) {
				d.A($.h3(a.u || 'anon'), $.i(a.m || 'me'))
			}
			else {
				d.A($.h3(a || 'anon'), $.i(b || 'me'))
			}
			d.WH(200)
		}
		cards = function () {
			$.get('/users', function (u) {
				_.e(u, function (u) {
					$.P('/getImageById', u.m, function (mug) {
						d = $.dA('r', '+').lt(t)
						d.A($.h2(u.u), $.i(mug).WH(200, 300))
						t += 20
					})
				})
			})
		}
	}
	CARD = function () {
		var t = 100, d
		card = function (a, b) {
			d = $.dA('y', 300)//.cen()
			d.$$(function () {
				d.rm()
			})
			if (O(a)) {
				d.A($.h3(a.u || 'anon'), $.i(a.m || 'me'))
			}
			else {
				d.A($.h3(a || 'anon'), $.i(b || 'me'))
			}
			d.WH(200)
		}
		cards = function () {
			$.get('/users', function (u) {
				_.e(u, function (u) {
					$.P('/getImageById', u.m, function (mug) {
						d = $.dA('r', '+').lt(t)
						d.A($.h2(u.u), $.i(mug).WH(200, 300))
						t += 20
					})
				})
			})
		}
	}
//old // does something :)
	card = function (a, b) { //to see a users profile
		if (O(a)) {
			return card(a.u, a.m)
		}
		var d = $.divA('y', 300)//.cen()
		d.dblclick(function () {
			$(this).remove()
		})
		d.A($.h3(a || 'anon'), $.img(b || 'me').WH(200))
		d.el().A()
		return d
	}
	shUcards = function () {
		z();
		var t = 100
		usrs(function (u) {
			_.each(u, function (u) {
				$.P(
						'/getImageById', u.m,
						function (m) {
							_d().p('a').lt(t).c('r').a().drg()(
									h2(u.u),
									im(m).w(200).h(200)
							)
							t += 20
						})
			})
		})
	}
}
USERS = function () {
	d = $.Ct().A(
			$.R(),
			$.h1('users'),
			$.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
	).C('r')
	//i = 0
	$.G('users', function (u) {
		d.E();
		_.e(u, function (u) { //$l(u.username + '-' + i++)
			d.A(
					$.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
			)
		})
	})
}
USER = function (a) {
	$.fm()
	//problem: click on a user.. creates a NEW USER?
	if (U(username = _pam || a)) {
		$l('username undefined.  default to -> a');
		username = 'a'
	}
	$.G('user/' + username, function (u) {
		s1.A(
				$.h1(u.username),
				$.i(u.mug).WH(100),
				$.h4(u.status),
				statusSpan = $.sp(),
				i = $.i(),
				messageTextarea = $.ta().C('w', 'z')
				// $chatButton( _pam,  messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.pf(_pam, TABS)
	})
	tab2 = $.tab('pics', function () {
		TABS.E().A('hahaha')
		$.eG('images/' + _pam, function (i) {
			TABS.A($.i(i.d).WH(100))
		})
	})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.eG('/pstu', {u: username}, function (i) {
			$.blp(i, TABS, '+')
		})
	})
	/*
	 tab4= $.tab('buds',function(){ TABS.E() })
	 tab5= $.tab('groups',function(){ TABS.E() })
	
	
	 tab6= $.tab('email', function(){
	 //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
	 from = _pam
	 var messageTextarea = $.textarea()
	 _$username = window['from'] || 'b'
	
	 TABS.E()(
	 $.h1('convo with '+u),
	 $.h1('Messages'), $.br())
	 $.eG('gMsgW', { u: _$username }, function( m ){var c
	 c = $.c('X', 100)
	 $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
	 TABS.A(
	 $.R().A(
	 $.Cl(2,c),
	 $.Cl(10,
	 $.h6('from: ' + m.fr),
	 $.h4($.dt( m.dt ).dt()).K('pull-right'),
	 $.h5(m.m))
	 ),
	 $.hr()
	 )})
	 TABS.A(
	 messageTextarea,
	 $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
	 })
	 */
	tabs = $.tabs(tab1, tab2, tab3//,tab4,tab5,tab6
	)
	s2.A(tabs)
	tabs.load()
}
USERS = function () {
	d = $.Ct().A(
			$.R(),
			$.h1('users'),
			$.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
	).C('r')
	//i = 0
	$.G('users', function (u) {
		d.E();
		_.e(u, function (u) { //$l(u.username + '-' + i++)
			d.A(
					$.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
			)
		})
	})
}
USERSX = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
}
USERSX = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
}
USERSX = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
}
USERS = function () {
	b = $.boot()
	i = 0
	b.h1('users')
	b.A(
			$.d('y').id('content').A('users will go here via ajax in a moment...').A($.br(2)
			))
	$(function () {
		$.g('/users', function (urs) {
			$('#content').E()
			_.e(urs, function (ur) {
				$l(i++)
				$l(user.un)
				$('#content').A(
						$.div().K("col-xs-6 col-sm-3 col-md-2 col-lg-2").A(
								$.a('', function () {
									window.location = '/wap/user/' + user.un
								}).K('thumbnail').A(
										$.img(user.mug || dfMug),
										$.h4(user.un),
										$.h5('sts: ' + user.sts)
								)
						)
				)
			})
		})
	})
}
USER = function (a) {
	
	
	
	//problem: click on a user.. creates a NEW USER?
	un = _pam || a
	if (U(un)) {
		$l('un undefined.  default to -> a')
		un = 'a'
	}
	$.fm()
	$.g('/user/' + un, function (user) {
		u = user
		s1.A(
				$.h1(user.un),
				$.img(user.mug).WH(100),
				$.h4(user.status),
				statusSpan = $.span(),
				image = $.img(),
				messageTextarea = $.textarea().C('w', 'z'),
				$chatButton(_pam, messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.profile(_pam, TABS)
	})
	tab2 = $.tab('pics',
			function () {
				TABS.E()
				TABS.A('hahaha')
				$.g('/images/' + _pam, function (imgs) {
					_.e(imgs, function (i) {
						TABS.A(
								$.i(i.d).WH(100)
						)
					})
				})
			})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.G('/pstu', {u: u}, function (i) {
			blp(i, TABS, '+')
		}, '+')
	})
	tab4 = $.tab('buds', function () {
		TABS.E()
	})
	tab5 = $.tab('groups', function () {
		TABS.E()
	})
	tab6 = $.tab('email', function () {
		
		//TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
		from = _pam
		var messageTextarea = $.textarea()
		_$un = window['from'] || 'b'
		TABS.E()(
				$.h1('convo with ' + u),
				$.h1('Messages'),
				$.br()
		)
		$.GE('/gMsgW', {u: _$un},
				function (message) {
					var c = $.canvas('X', 100)
					$.post('/mug', {u: m.fr}, function (mug) {
						c.fit(mug)
					})
					TABS.A(
							$.row($.col(2, c),
									$.col(10,
											$.h6('from: ' + message.fr),
											$.h4(
													dt(message.dt).dt()
											).K('pull-right'),
											$.h5(m.m))),
							$.hr()
					)
				})
		TABS.A(
				messageTextarea,
				$.bt('new message', function () {
					$.post('/sMsg',
							{
								m: messageTextarea.V(),
								to: from
							})
				}),
				$.br(2)
		)
	})
	s2.A(
			theTabs = $.tabs(tab1, tab2, tab3, tab4, tab5, tab6))
	theTabs.load()
}
$.user = function (u) {
	var userA = $.a('', function () {
		window.location = '/wap/user/' + u.username
	}).K('thumbnail')
	userA.A(
			$.i(u.mug || defaultMug),
			$.h4(u.username),
			$.h5('status: ' + u.status),
			$.bt('X', function () {
			}),
			$.bt('be me', function () {
			})
	)
	return userA
}
USER = function (a) {
	$.fm()
	//problem: click on a user.. creates a NEW USER?
	if (U(username = _pam || a)) {
		$l('username undefined.  default to -> a');
		username = 'a'
	}
	$.G('user/' + username, function (u) {
		s1.A(
				$.h1(u.username),
				$.i(u.mug).WH(100),
				$.h4(u.status),
				statusSpan = $.sp(),
				i = $.i(),
				messageTextarea = $.ta().C('w', 'z')
				// $chatButton( _pam,  messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.pf(_pam, TABS)
	})
	tab2 = $.tab('pics', function () {
		TABS.E().A('hahaha')
		$.eG('images/' + _pam, function (i) {
			TABS.A($.i(i.d).WH(100))
		})
	})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.eG('/pstu', {u: username}, function (i) {
			$.blp(i, TABS, '+')
		})
	})
	/*
	 tab4= $.tab('buds',function(){ TABS.E() })
	 tab5= $.tab('groups',function(){ TABS.E() })
	
	
	 tab6= $.tab('email', function(){
	 //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
	 from = _pam
	 var messageTextarea = $.textarea()
	 _$username = window['from'] || 'b'
	
	 TABS.E()(
	 $.h1('convo with '+u),
	 $.h1('Messages'), $.br())
	 $.eG('gMsgW', { u: _$username }, function( m ){var c
	 c = $.c('X', 100)
	 $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
	 TABS.A(
	 $.R().A(
	 $.Cl(2,c),
	 $.Cl(10,
	 $.h6('from: ' + m.fr),
	 $.h4($.dt( m.dt ).dt()).K('pull-right'),
	 $.h5(m.m))
	 ),
	 $.hr()
	 )})
	 TABS.A(
	 messageTextarea,
	 $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
	 })
	 */
	tabs = $.tabs(tab1, tab2, tab3//,tab4,tab5,tab6
	)
	s2.A(tabs)
	tabs.load()
}
