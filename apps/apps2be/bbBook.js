function bbBook() {
	//http://robdodson.me/some-more-backbone-dot-js-basics/
	OBJECT = function () {
		$.fm()
		s1.A('your objects', $.br(2), t = $.ip(),
				$.bt('new object', function () {
					$.P('newObj',
							{t: t.V()})
				}))
		$.eG('objs', function (o) {
			s1.A($.h2(o.t).$(function () {
				s2.E($.h1(o.t), tt = $.ip(),
						$.bt('new sub-object', function () {
							$.P('newObj', {t: tt.V()})
						}))
			}))
			_.e(o.i, function (i) {
				s1.A(h3(i))
			})
		})
	}
	BCL = function () {
		$.x().h1('BCL but whats up wit dose funcs?')
		BksC = $Cl({
			m: Bk = $M({
				d: {n: '', g: 'fun'},
				url: 'http://localhost:51377/api/Books'
			}),
			d: {pizzaTopping: 'pepperoni'}
		})
		cl1 = BksC()
		cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
		cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
		cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))
		add = function () {
			$l('add')
			cl2.A([
				bk4 = Bk({ID: 4, n: "Bk 4"}),
				bk5 = Bk({ID: 5, n: "Bk 5"})
			])
		}
		add()
		addAt = function (n) {
			cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
		}
		change = function () {
			bk3 = Bk({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			bk3_changed = Bk({ID: 3, n: "Changed Model"})
			cl2.add(bk3_changed, {merge: true})
		}
	}
	BCL = function () {
		$.x().h1('BCL')
		Bk = Bb.M.e({
			d: {ID: '', n: ''},
			id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = Bb.C.e({m: Bk})
		cl1 = BksC.o()
		bk1 = Bk.o({ID: 1, n: "Bk 1"})
		bk2 = Bk.o({ID: 2, n: "Bk 2"})
		cl2 = BksC.o([bk1, bk2])
		bk3 = Bk.o({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
		change = function () {
			bk3 = new Bk({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
			cl2.add(bk3_changed, {merge: true})
		}
		add = function () {
			bk4 = Bk.o({ID: 4, n: "Bk 4"})
			bk5 = Bk.o({ID: 5, n: "Bk 5"})
			cl2.add([bk4, bk5])
		}
		addAt = function (n) {
			bk0 = new Bk({ID: 0, n: "Bk 0"})
			cl2.add(
					bk0, {at: n || 0}
			)
		}
	}
	MODCHANGE = function () {
		$.x()
		Bk = $M({
			d: {ID: "", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				this.on('change', function () {
					alert('change')
					if (bk.hasChanged('ID')) {
						alert('ID changed')
					}
					if (bk.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
	}
	MODCHANGE = function () {
		$.x()
		Bk = Bb.M.e({
			d: {ID: "", n: ""},
			initiate: function () {
				$l('init..')
				var that = this
				this.on('change', function () {
					alert('change')
					if (that.hasChanged('ID')) {
						alert('ID changed')
					}
					if (that.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		// ChildBook = Bk.extend({})
		bk = Bk.o({ID: 1, n: "a"})
	}
	MODCHANGE = function () {
		$.x('x', 'modchange')
		Bk = $M({
			d: {ID: "ooooo", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				bk.$(function () {
					$l('change')
					g = G(arguments)
					o = g[1]
					m = g[0]
					if (bk.hC('ID')) {
						$l('ID changed')
					}
					// if(bk.hC('n')){$l('n changed') }
					bk.hC('n', function () {
						$l('n changed')
					})
				})
			},
			show: function () {
				$l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})
		bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
		_.in(function () {
			bk.s('n', 'z', {a: 1, b: 2, c: 3})
			_.in(function () {
				bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
			}, '*')
		}, '*')
	}
	BBSORT = function () {
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
	}
	OSYNC = function () {
		$.x('x', 'osync')
		Bb.sync = function (met, md) {
			$l(met + ': ' + _.jS(md))
			md.s('id', 1)
		}
		bk = new Bb.M({
			tt: "The Rough Riders",
			au: "Theodore Roosevelt"
		})
		bk.S()
		bk.S({au: "Teddy"})
		// save accepts success and error cbs in the options hash,
		// which will be passed the args (md, resp, ops).
		// If a server-side validation fails, return a non-200 HTTP response code,
		// along with an error response in text or JSON.
		bk.save("au", "F.D.R.", {
			error: function () {
				$l('error')
			},
			success: function () {
				$l('success')
			}
		})
	}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
	old = function () {
		V$ = function () {
			var g = G(arguments), o, v, a
			a = O(g.f) ? g.f : {}
			o = {ob: g.f}
			o.ob = o.b || {}
			if (a.I) {
				a.initialize = a.I
			}
			if (a.R) {
				a.render = a.R
			}
			if (a.r) {
				a.render = a.r
			}
			if (a.rr) {
				a.render = a.rr
			}
			if (a.E) {
				a.events = a.E
			}
			if (a.T) {
				a.template = a.T
			}
			if (a.t) {
				a.tagName = a.t
			}
			if (a.k) {
				a.className = a.k
			}
			if (a.i) {
				a.id = a.i
			}
			Vw = bb.V.e(ob)
			if (a.m) {
				a.model = a.m
			}
			if (a.md) {
				a.model = a.md
			}
			if (a.cl) {
				a.collection = a.cl
			}
			vw = new Vw(a)
			return vw
		}
	}
	/*
	 VWob={  i:'initialize',
	 m:'model',  c:'collection',
	 e:'el',  n:'id', x:'id',  k:'className',
	 tn:'tagName',  t:'tagName',
	 a:'attributes',  ev:'event'  }
	
	
	 Vw = $V({
	 renderCollection: function(op) {op = op || {}
	 op.target = op.target || this.$el;
	 op.cl = op.cl ||    op.collection ||  this.collection;
	 //- reset views
	 if (!op.add) {this.disposeViews()}
	 else {this._subviews = []}
	 this._renderOptions = op
	 //- if there is a collection and a view then render it
	 if (op.cl && this.view) {op.cl.each(this._renderView, this)}
	 return this
	 }
	 })
	
	 */
	BOOKVW = function () {
		$.dI('td')
		TdVw = $V({
			t: 'li',
			e: {
				'click .toggle': 'toggleCompleted',
				'dblclick label': 'edit',
				'keypress .edit': 'updateOnEnter',
				'click .destroy': 'clear',
				'blur .edit': 'close'
			},
			Item: function (o) {
				return $.d([
					$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
			},
			i: function (ops) {
				this.ops = ops || {};
				this.model.on('change', _.b(this.r, this))
			}, //  access passed ops inyour view
			// Re-render tt of td item.
			r: function () {
				var v = this
				v.q.h(this.Item(this.md.J())) // this.md.atts ?
				v.input = v.$('.edit')
				return v
			},
			edit: function () {
			},    // executed when td label is double clicked
			close: function () {
			},  // executed when td loses focus
			updateOnEnter: function (e) {
			} // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
		})
		ListVw = $V({
			r: function () {
				// Assume our md exposes items we will display in our list
				_.e(this.g('items'), function (i) {
					// Createnew instance of ItemVw, passing it spec md item
					// The itemVw's DOM el is appended after it
					// has been rendered. Here, 'return this' is helpful
					// as itemVw renders its md. Later, we ask for its output ("el")
					this.A(TdVw({md: i}).r().q)
				}, this)
			}
		})
		tdVw = new TdVw()
		// log reference toDOM el that corresponds to view instance
		$l(tdVw.el); // logs <li></li>
	}
	BOOKVW = function () {
		$.dI('td)
		TdVw = $V({
			t: 'li',
			e: {
				'click .toggle': 'toggleCompleted',
				'dblclick label': 'edit',
				'keypress .edit': 'updateOnEnter',
				'click .destroy': 'clear',
				'blur .edit': 'close'
			},
			Item: function (o) {
				return $.d([$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
			},
			i: function (ops) {
				this.ops = ops || {};
				this.model.on('change', _.b(this.r, this))
			}, //  access passed ops inyour view
			// Re-render tt of td item.
			r: function () {
				var v = this
				v.q.h(this.Item(this.md.J())) // this.md.atts ?
				v.input = v.$('.edit')
				return v
			},
			edit: function () {
			},    // executed when td label is double clicked
			close: function () {
			},  // executed when td loses focus
			updateOnEnter: function (e) {
			} // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
		})
		ListVw = $V({
			r: function () {
				// Assume our md exposes items we will display in our list
				_.e(this.g('items'), function (i) {
					// Createnew instance of ItemVw, passing it spec md item
					// The itemVw's DOM el is appended after it
					// has been rendered. Here, 'return this' is helpful
					// as itemVw renders its md. Later, we ask for its output ("el")
					this.A(TdVw({md: i}).r().q)
				}, this)
			}
		})
		tdVw = new TdVw()
		// log reference toDOM el that corresponds to view instance
		$l(tdVw.el); // logs <li></li>
	}
	ITEMS = function () {
		z();
		Ap = {M: {}, V: {}, C: {}}
		$Ro = Router = $$R({
			R: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j'
			},
			welcome: function () {
				show('welcome')
			},
			j: function () {
			},
			showItemList: function () {
				show('show item list')
			}
		})
		r = router = $R()
		Ap.M.item = $$M({})
		i1 = Ap.M.item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			show('j')
		})
		Bb.h.start({pushState: true})
	}
	TODOOS = LSTD = function () {
		TdsCl = $Cl({md: Td, url: '/tds'});
		$Ms('BBlS')
		Tds = new TdList
		App = new AppVw
	}
	TODO = RESTPERSIST0 = function () {
		
		//RESTful Persistence
		//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing on server.
		//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
		tds = TdsCl();
		tds.fetch(); // sends HTTP GET to /tds
	}
	TODOS = SAVEMDTOSERVER = function () {
		
		
		// bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
		//  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.
		// If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. 
		// Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.
		tds = TdsCl();
		tds.fetch();
		td2 = tds.g(2);
		td2.s('title', 'go fishing');
		td2.S(); // sends HTTP PUT to /tds/2
		tds.cr({title: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.
		//  Deleting mds from server
		//  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.
		Td = $M({df: {title: '', completed: false}});
		TdsCl = $Cl({md: Td, url: '/tds'});
		tds = TdsCl();
		tds.fet();
		td2 = tds.g(2)
		td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
		// Calling destroy onMd will return false if md isNew:
		td = new Bb.Md();
		$l(td.des())  // false
		// Options
		// Each RESTful API met accepts a variety of ops.
		//  Most importantly, all mets accept success and error cbs which can be used
		//  to custize handling of server responses.
		//  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
		//  instead of entire md; i.e. md.save(attrs, {patch: true}):
		// Save partial using PATCH
		md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
		md.sv();
		md.sv({b: 2, d: 4}, {patch: true});
		$l(this.syncArgs.met);
		// 'patch'
		// Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().
	}
	function activeDanger() {
		$.x('g', 'tasker');
		Ap = {M: {}, C: {}, V: {}}
		Ap.M.Task = bbM({})
		task1 = Ap.M.Task({
			title: 'go to the store',
			priority: 4
		})
		task2 = Ap.M.Task({
			title: 'go to the park',
			priority: 3
		})
		t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
		t2 = Ap.M.Task.o({t: 'go park', pr: 3})
		t1 = Ap.M.Task({t: 'go  store', pr: 4})
		t2 = Ap.M.Task({t: 'go park', pr: 3})
		t1 = Ap.M.Tsk({t: 'store', pr: 4})
		t2 = Ap.M.Tsk({t: 'park', pr: 3})
		tsk1 = Ap.M.Tsk({
			title: 'go to the store',
			priority: 4
		})
		tsk2 = Ap.M.Tsk({
			title: 'go to the park',
			priority: 3
		})
		Ap.V.Task = bbV({
			t: 'li',
			R: function () {
				return this.H(
						this.g('title'))
			}
		})
		taskView = Ap.V.Task({m: task})
		Ap.C.Tasks = bbC({m: Ap.M.Task})
		tasks = Ap.C.Tasks([
			{title: 'hi'},
			{title: 'bye'}])
		Ap.V.Tasks = bbV({
			t: 'li',
			R: function () {
				this.cl.each(
						function (t) {
							var v = Ap.V.Task({m: t})
							this.$el.append(v.el)
						},
						this)
				$b()(this.el)
			}
		})
		tasksV = Ap.V.Tasks({cl: tasks})
		Ap.M.Task = Bb.M.e({})
		Ap.V.Tsk = Bb.V.e({
			t: 'li',
			rr: function () {
				this.A(this.g('t'))
				return this
			}
		})
		taskView = Ap.V.Tsk.o({m: t1})
		Ap.C.Tasks = Bb.C.e({m: Ap.M.Tsk})
		tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
		Ap.V.Tasks = Bb.V.e({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		Ap.M.Task = _M({}) //Ap.M.Task = $$M({})
		Ap.V.Tsk = $$V({
			t: 'li',
			rr: function () {
				this.A(this.g('t'))
				return this
			}
		})
		taskView = Ap.V.Tsk({m: t1})
		Ap.C.Tasks = $$C({m: Ap.M.Tsk})
		tasks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])
		Ap.V.Tasks = $$V({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Task({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		tasksV = Ap.V.Tasks({cl: tasks})
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')
		])
		TskV = Ap.V.Tsk = $$V({
			t: 'li',
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(this.g('t'));
				this.$el.html(temp('task'))
			},
			events: {'click button': 'add'},
			add: function () {
				alert($('#task_desc') + ' task added')
			}
		})
		tskVw = Ap.V.Tsk({m: task1})
		Ap.C.Tsks = $$C({m: Ap.M.Tsk})
		tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
		Ap.V.Tsks = $V({
			t: 'li',
			r: function () {
				var that = this
				//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.$el.A()
			}
		})
		tsksVw = Ap.V.Tsks({cl: tsks})
		Ap.M.Tsk = $M()
		Ap.V.Tsk = $V({
			t: 'li',
			r: function () {
				this.A(this.g('tt'));
				return this
			}
		})
		tskV = Ap.V.Tsk({m: t1})
		Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
		tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])
		Ap.V.Tsks = $V({
			t: 'li',
			r: function () {
				var v = this
				v.eCl(function (t) {
					v.q.A(Ap.V.Tsk({m: t}).r().q)
				})
				this.q.A()
			}
		})
		tsksV = Ap.V.Tsks({cl: tsks})
		$.bt('r Ap.V.Tsks tsksV', function () {
			tsksV.r()
		})
		$.bt('r Ap.V.Tsks tsksV', function () {
			tsksV.r()
		})
		$.d().id('container')
		r = $R({
			R: {
				'': 'first',
				'first': 'first',
				'second': 'second'
			},
			first: function () {
				$l('first')
			},
			second: function () {
				new Task()
				$l('second')
			}
		})
		Bb.h.start({pushState: true})
		TASKER = function () {
			$.x()
			Ap.M.Task = $$M({})
			t1 = Ap.M.Task({t: 'go  store', pr: 4})
			t2 = Ap.M.Task({t: 'go park', pr: 3})
			Ap.V.Tsk = $$V({
				t: 'li',
				rr: function () {
					this.A(this.g('t'))
					return this
				}
			})
			taskView = Ap.V.Tsk({m: t1})
			Ap.C.Tasks = $$C({m: Ap.M.Tsk})
			tasks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])
			Ap.V.Tasks = $$V({
				t: 'li',
				rr: function () {
					var that = this
					this.cl.each(
							function (t) {
								var v = Ap.V.Task({m: t})
								that.$el.A(v.rr().el)
							}, this)
					this.el.A()
				}
			})
			tasksV = Ap.V.Tasks({cl: tasks})
		}
		TASKER00 = function () {
			$.x('g', 'tasker');
			Ap = {M: {}, C: {}, V: {}}
			Ap.M.Tsk = $M()
			t1 = Ap.M.Tsk({t: 'store', pr: 4})
			t2 = Ap.M.Tsk({t: 'park', pr: 3})
			Ap.V.Tsk = $V({
				t: 'li',
				r: function () {
					this.A(this.g('tt'));
					return this
				}
			})
			tskV = Ap.V.Tsk({m: t1})
			Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
			tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])
			Ap.V.Tsks = $V({
				t: 'li',
				r: function () {
					var v = this
					v.eCl(function (t) {
						v.q.A(Ap.V.Tsk({m: t}).r().q)
					})
					this.q.A()
				}
			})
			tsksV = Ap.V.Tsks({cl: tsks})
			$.bt('r Ap.V.Tsks tsksV', function () {
				tsksV.r()
			})
			function alt() {
				TASKER0 = function () {
					$.x()
					Ap = {M: {}, C: {}, V: {}}
					Ap.M.Task = Bb.M.e({})
					t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
					t2 = Ap.M.Task.o({t: 'go park', pr: 3})
					Ap.V.Tsk = Bb.V.e({
						t: 'li',
						rr: function () {
							this.A(this.g('t'))
							return this
						}
					})
					taskView = Ap.V.Tsk.o({m: t1})
					Ap.C.Tasks = Bb.C.e({m: Ap.M.Tsk})
					tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
					Ap.V.Tasks = Bb.V.e({
						t: 'li',
						rr: function () {
							var that = this
							this.cl.each(
									function (t) {
										var v = Ap.V.Task.o({m: t})
										that.$el.A(v.rr().el)
									}, this)
							this.el.A()
						}
					})
					tasksV = Ap.V.Tasks.o({cl: tasks})
				}
				function oldSchol() {
					BACKDEMO = function () {
						z()
						Temp('task', [
							lb('Task: '),
							tx().id('task_desc'),
							bt('add task').id('btn')])
						di('container').a()
						bbR({
							R: {
								'': 'first',
								'first': 'first',
								'second': 'second'
							},
							first: function () {
								$l('first')
							},
							second: function () {
								new Task()
								$l('second')
							}
						})()
						bbH()
						Task = bbV({
							el: $('#container'),
							i: function () {
								this.r()
							},
							r: function () {
								this.$el.html(temp('task'))
							},
							e: {'click button': 'add'},
							add: function () {
								alert(qiv('task_desc') + ' task added')
							}
						})
					}
				}
			}
		}
		AP = TASK = function () {
			$.x('g', 'tasker');
			Temp('task', [
				$.lb('Task: '),
				$.ip().id('task_desc'),
				$.bt('add task').id('btn')
			])
			Ap.M.Tsk = $$M({})
			tsk1 = Ap.M.Tsk({
				title: 'go to the store',
				priority: 4
			})
			tsk2 = Ap.M.Tsk({
				title: 'go to the park',
				priority: 3
			})
			TskV = Ap.V.Tsk = $$V({
				t: 'li',
				el: $('#container'),
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.html(this.g('t'));
					this.$el.html(temp('task'))
				},
				events: {'click button': 'add'},
				add: function () {
					alert($('#task_desc') + ' task added')
				}
			})
			tskVw = Ap.V.Tsk({m: task1})
			Ap.C.Tsks = $$C({m: Ap.M.Tsk})
			tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
			Ap.V.Tsks = $V({
				t: 'li',
				r: function () {
					var that = this
					//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
					this.cl.each(
							function (t) {
								var v = Ap.V.Task.o({m: t})
								that.$el.A(v.rr().el)
							}, this)
					this.$el.A()
				}
			})
			tsksVw = Ap.V.Tsks({cl: tsks})
			$.bt('r Ap.V.Tsks tsksV', function () {
				tsksV.r()
			})
			$.d().id('container')
			r = $R({
				R: {
					'': 'first',
					'first': 'first',
					'second': 'second'
				},
				first: function () {
					$l('first')
				},
				second: function () {
					new Task()
					$l('second')
				}
			})
			Bb.h.start({pushState: true})
		}
		TASKS = function () {
			z()
			Ap = {M: {}, C: {}, V: {}}
			Ap.M.Task = bbM({})
			task1 = Ap.M.Task({
				title: 'go to the store',
				priority: 4
			})
			task2 = Ap.M.Task({
				title: 'go to the park',
				priority: 3
			})
			Ap.V.Task = bbV({
				t: 'li',
				R: function () {
					return this.H(
							this.g('title'))
				}
			})
			taskView = Ap.V.Task({m: task})
			Ap.C.Tasks = bbC({m: Ap.M.Task})
			tasks = Ap.C.Tasks([
				{title: 'hi'},
				{title: 'bye'}])
			Ap.V.Tasks = bbV({
				t: 'li',
				R: function () {
					this.cl.each(
							function (t) {
								var v = Ap.V.Task({m: t})
								this.$el.append(v.el)
							},
							this)
					$b()(this.el)
				}
			})
			tasksV = Ap.V.Tasks({cl: tasks})
		}
		ITEMS = function () {
			z()
			Router = bbR({
				R: {
					'': 'welcome',
					'itemlist': 'showItemList',
					'j': 'j'
				},
				welcome: function () {
					show('welcome')
				},
				j: function () {
				},
				showItemList: function () {
					show('show item list')
				}
			})
			router = Router()
			Ap = {
				M: {}, V: {}, C: {}
			}
			Ap.M.item = bbM({})
			i1 = Ap.M.item({n: 'jason', g: 'mason'})
			i1.oR('j', function () {
				show('j')
			})
			bbH()
		}
		AVAIL1 = function () {
			z()
			tx('new avail').id('newAvail').a()
			bt('ok', function () {
				Ap.M.Avail({c: qiv('newAvail')}).save()
				v.render()
			}).a()
			di('availsDiv').a()
			Ap = {M: {}, C: {}, V: {}, T: {}}
			Ap.T.Avail = function (model) {
				return _d().w(400).h(100).M(20).c('g')(
						h4(model.g('c')).id('avail').c('y', 'r'),
						br(), sp('delete').id('deleteAvail'),
						sp(' '), sp('edit').id('editAvail'),
						sp(' '), cb2().id('selAvail')).q
			}
			Ap.M.Avail = bbM({urlRoot: '/avail'})
			Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
			Ap.V.Avail = bbV({
				R: function () {
					this.$el.append(Ap.T.Avail(this.model))
					return this
				},
				events: {
					'click #deleteAvail': 'deleteAvail',
					'click #editAvail': 'editAvail',
					'blur #avail': 'changeAvail'
				},
				changeAvail: function () {
					qq(this.$el.find('#avail')).at('contenteditable', 'false')
					var newAvail = this.$el.find('#avail').text()
					this.model.s('c', newAvail)
					this.model.save()
				},
				deleteAvail: function () {
					this.model.destroy()
					this.$el.remove()
				},
				editAvail: function () {
					qq(this.$el.find('#avail')).at('contenteditable', 'true')
				}
			})
			Ap.V.Avails = bbV({
				el: '#availsDiv',
				I: function () {
					this.render()
				},
				R: function () {
					var t = this
					t.collection.fetch({
						success: function () {
							t.$el.html('')
							t.$el.append("<h1>Avails List</h1>")
							t.collection.each(function (m) {
								t.$el.append(Ap.V.Avail({model: m}).render().el)
								return t
							}, t)
						}
					})
				}
			})
			avs = Ap.C.Avails()
			v = Ap.V.Avails({collection: avs})//.render()
			avs.on('destroy', function (aa) {
				$l('destroy!!!!')
			})
		}
		AVAIL = function () {
			z()
			tx('new avail').id('newAvail').a()
			bt('ok', function () {
				var m = Ap.M.Avail({
					c: qiv('newAvail')
				})
				m.save()
				m.on('destroy', function () {
					alert('i am the model and i was destroyed')
				})
				v.render()
			}).a()
			di('availsDiv').a()
			Ap = {M: {}, C: {}, V: {}, T: {}}
			Ap.T.Avail = function (model) {
				return _d().w(400).h(100).M(20).c('g')(
						h4(model.g('c')).id('avail').c('y', 'r'),
						br(), sp('delete').id('deleteAvail'),
						sp(' '), sp('edit').id('editAvail'),
						sp(' '), cb2().id('selAvail')).q
			}
			Ap.M.Avail = bbM({urlRoot: '/avail'})
			Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
			Ap.V.Avail = bbV({
				R: function () {
					this.q(Ap.T.Avail(this.model))
					return this
				},
				events: {
					'click #deleteAvail': 'deleteAvail',
					'click #editAvail': 'editAvail',
					'blur #avail': 'changeAvail'
				},
				changeAvail: function () {
					qq(this.$el.find('#avail')).cE(0)
					var newAvail = this.$el.find('#avail').text()
					this.model.s('c', newAvail)
					this.model.save()
				},
				deleteAvail: function () {
					this.model.destroy()
					this.$el.remove()
				},
				editAvail: function () {
					qq(this.$el.find('#avail')).cE(1)
				}
			})
			Ap.V.Avails = bbV({
				el: '#availsDiv',
				I: function () {
					this.render()
				},
				R: function () {
					var t = this
					t.collection.fetch({
						success: function () {
							t.q.H('')
							t.q(h1('Avails List'))
							t.e(
									function (m) {
										t.q(
												Ap.V.Avail({m: m}).r().el)
										return t
									}, t)
						}
					})
				}
			})
			avs = Ap.C.Avails()
			avs.on('destroy',
					function (j) {
						alert('i am col and i was destroyed')
						v.trigger('modelDeleted')
					})
			v = Ap.V.Avails({cl: avs})
			v.on('modelDeleted', function () {
				alert('modDel')
			})
			a = bbM({
				defaults: {prop: 3},
				test: function () {
					console.log(this.get('prop'))
				},
				test2: function (a) {
					console.log(
							(function () {
								return this.get('prop')
							})()
					)
				},
				happy: function (a) {
					this.test2(a)
				}
			})
			f = a()
		}
//f.happy('prop')
		server = {
			d: 2,
			n: 2,
			docs: {
				1: {text: 'this is a doc', id: 1}
			},
			notes: {
				1: {1: {text: 'note'}, 2: {text: 'another note'}}
			},
			get: {
				'/docs': function (q, p) {
					var res = []
					for (var doc in docs) {
						if (docs.hasOwnProperty(doc)) {
							res.push(docs[doc])
						}
					}
					p.json(res)
				},
				'/docs/:did/notes': function (q, p) {
					var res = [], n = notes[q.params.id]
					for (var note in n) {
						if (n.hasOwnProperty(note)) {
							res.push(n[notes])
						}
					}
				}
			},
			post: {
				'/docs': function (q, p) {
					var doc = q.body
					doc.id = d++
					docs.doc.id = doc
					p.json(doc)
				},
				'/docs/:did/notes': function (q, p) {
					var note = q.body, id = q.params.id
					note.id = n++
					if (!notes[id]) {
						notes[id] = {}
					}
					notes[id][notes.id] = note
					p.json(note)
				}
			},
			put: {
				'docs/:id': function (q, p) {
					docs[q.params.id] = q.body
					p.json(q.body)
				},
				'docs/:did/notes:nid': function (q, p) {
					notes[q.params.id][q.params.nid] = q.body
					p.json(q.body)
				}
			}
		}
		Note = Bb.M.x({})
		Notes = Bb.C.x({
			m: Note,
			i: function (mds, op) {
				this.doc = op.doc
			},
			u: function () {
				return this.doc.url() + '/notes'
			}
		})
		Doc = Bb.M.x({
			i: function (op) {
				this.notes = new Notes([], {doc: this})
			},
			addNote: function (tx) {
				this.notes.create({
					text: tx
				})
			}
		})
		Docs = Bb.C.x({
			m: Doc, u: '/documents',
			i: function () {
				this.on('reset', this.getNotes, this)
			},
			getNotes: function () {
				this.each(function (doc) {
					doc.notes = new Notes([], {doc: doc})
					doc.notes.fetch()
				})
			}
		})
		ds = new Docs()
		ds.fetch()
		NOTES = function () {
			server = {
				d: 2,
				n: 2,
				docs: {
					1: {text: 'this is a doc', id: 1}
				},
				notes: {
					1: {1: {text: 'note'}, 2: {text: 'another note'}}
				},
				get: {
					'/docs': function (q, p) {
						var res = []
						for (var doc in docs) {
							if (docs.hasOwnProperty(doc)) {
								res.push(docs[doc])
							}
						}
						p.json(res)
					},
					'/docs/:did/notes': function (q, p) {
						var res = [], n = notes[q.params.id]
						for (var note in n) {
							if (n.hasOwnProperty(note)) {
								res.push(n[notes])
							}
						}
					}
				},
				post: {
					'/docs': function (q, p) {
						var doc = q.body
						doc.id = d++
						docs.doc.id = doc
						p.json(doc)
					},
					'/docs/:did/notes': function (q, p) {
						var note = q.body, id = q.params.id
						note.id = n++
						if (!notes[id]) {
							notes[id] = {}
						}
						notes[id][notes.id] = note
						p.json(note)
					}
				},
				put: {
					'docs/:id': function (q, p) {
						docs[q.params.id] = q.body
						p.json(q.body)
					},
					'docs/:did/notes:nid': function (q, p) {
						notes[q.params.id][q.params.nid] = q.body
						p.json(q.body)
					}
				}
			}
			Note = Bb.M.x({})
			Notes = Bb.C.x({
				m: Note,
				i: function (mds, op) {
					this.doc = op.doc
				},
				u: function () {
					return this.doc.url() + '/notes'
				}
			})
			Doc = Bb.M.x({
				i: function (op) {
					this.notes = new Notes([], {doc: this})
				},
				addNote: function (tx) {
					this.notes.create({
						text: tx
					})
				}
			})
			Docs = Bb.C.x({
				m: Doc, u: '/documents',
				i: function () {
					this.on('reset', this.getNotes, this)
				},
				getNotes: function () {
					this.each(function (doc) {
						doc.notes = new Notes([], {doc: doc})
						doc.notes.fetch()
					})
				}
			})
			ds = new Docs()
			ds.fetch()
		}
		NOTES = MINIMALBACKBONELOCALSTOREEXAMPLE = MINLS = function () {
			//Minimal Bb.localStorage example
			//THE MODEL AND THE COLLECTION
			//In order to use Bb.localStorage to save a model
			// we also need a collection.
			// The `localStorage` property of the collection
			// needs to be set to a new Bb.LocalStorage object
			// with an identifier for the collection
			// that is used when reading or writing the model values to LocalStorage.
			//The defaults function of the model
			// returns an object with a content property
			// that makes it easy to identify when the model was added to the collection
			// and if it's new or has been fetched from local storage.
			//ADDING AND SAVING NOTE MODELS
			//Bb collections have a fetch method that retrieves models from the server or,
			// in this case, local storage.
			//Before calling save on the model we need to add it to the collection,
			// otherwise Bb would attempt to use an Http request to store it on a server.
			myNotes = new NoteCollection()
			myNotes.fetch();
			note1 = new Note();
			myNotes.add(note1);
			note1.sv()
			myNotes.models.forEach(function (md) {
				$l("Md in cl: " + md.g("content"))
			})
		}
		function notes() {
			server = {
				d: 2,
				n: 2,
				docs: {
					1: {text: 'this is a doc', id: 1}
				},
				notes: {
					1: {1: {text: 'note'}, 2: {text: 'another note'}}
				},
				get: {
					'/docs': function (q, p) {
						var res = []
						for (var doc in docs) {
							if (docs.hasOwnProperty(doc)) {
								res.push(docs[doc])
							}
						}
						p.json(res)
					},
					'/docs/:did/notes': function (q, p) {
						var res = [], n = notes[q.params.id]
						for (var note in n) {
							if (n.hasOwnProperty(note)) {
								res.push(n[notes])
							}
						}
					}
				},
				post: {
					'/docs': function (q, p) {
						var doc = q.body
						doc.id = d++
						docs.doc.id = doc
						p.json(doc)
					},
					'/docs/:did/notes': function (q, p) {
						var note = q.body, id = q.params.id
						note.id = n++
						if (!notes[id]) {
							notes[id] = {}
						}
						notes[id][notes.id] = note
						p.json(note)
					}
				},
				put: {
					'docs/:id': function (q, p) {
						docs[q.params.id] = q.body
						p.json(q.body)
					},
					'docs/:did/notes:nid': function (q, p) {
						notes[q.params.id][q.params.nid] = q.body
						p.json(q.body)
					}
				}
			}
			Note = Bb.M.x({})
			Notes = Bb.C.x({
				m: Note,
				i: function (mds, op) {
					this.doc = op.doc
				},
				u: function () {
					return this.doc.url() + '/notes'
				}
			})
			Doc = Bb.M.x({
				i: function (op) {
					this.notes = new Notes([], {doc: this})
				},
				addNote: function (tx) {
					this.notes.create({
						text: tx
					})
				}
			})
			Docs = Bb.C.x({
				m: Doc, u: '/documents',
				i: function () {
					this.on('reset', this.getNotes, this)
				},
				getNotes: function () {
					this.each(function (doc) {
						doc.notes = new Notes([], {doc: doc})
						doc.notes.fetch()
					})
				}
			})
			ds = new Docs()
			ds.fetch()
		}
		
		TdVw = Bb.V.x({
			tagName: "li", //template: _.template($('#item-template').html()),
			events: {
				"click .toggle": "toggleDone",
				"dblclick .view": "edit", "click a.destroy": "clear",
				"keypress .edit": "updateOnEnter", "blur .edit": "close"
			},
			initialize: function () {
				var vw = this, md = vw.model
				vw.l2(md, 'change', vw.r)
				vw.l2(md, 'destroy', vw.rm)
			},
			r: function () {
				var vw = this, md = vw.model, q = vw.$el
				q.html(vw.template(md.J()))
				q.tK('done', md.g('done')) //
				vw.ip = vw.$('.edit')
				return vw
			},
			toggleDone: function () {
				this.model.toggle()
			},
			edit: function () {
				this.$el.k("editing");
				this.ip.fc()
			},
			close: function () {
				var vw = this, md = vw.model
				var v = vw.ip.v();
				if (!v) {
					vw.clear()
				}
				else {
					md.sv({title: v});
					vw.$el.rK("editing")
				}
			},
			updateOnEnter: function (e) {
				if (e.keyCode == 13) {
					this.close()
				}
			},
			clear: function () {
				this.ds()
			}
		})
		AppVw = Bb.V.x({
			el: $("#todoapp"),
			// statsTemplate: _.template($('#stats-template').html()), // Our template for the line of statistics at the bottom of the app.
			events: {
				"keypress #new-todo": "createOnEnter",
				"click #clear-completed": "clearCompleted",
				"click #toggle-all": "toggleAllComplete"
			},
			initialize: function () {
				var vw = this
				vw.ip = vw.$("#new-todo");
				vw.allCb = vw.$("#toggle-all")[0];
				vw.l2(Tds, 'add', vw.addOne);
				vw.l2(Tds, 'reset', vw.addAll);
				vw.l2(Tds, 'all', vw.render)
				vw.footer = vw.$('footer');
				vw.main = $('#main');
				Tds.fe()
			},
			render: function () {
				var vw = this,
						done = _.z(Tds.done()),
						remaining = _.z(Tds.remaining())
				if (_.z(Tds)) {
					vw.main.sh();
					vw.footer.sh()
					vw.footer.html(vw.statsTemplate({done: done, remaining: remaining}))
				}
				else {
					vw.main.hd();
					vw.footer.hd()
				}
				if (!this.allCb) {
					$l('!this.allCb')
				}
				else {
					this.allCb.checked = !remaining
				}
			},
			addOne: function (td) {
				var vw = new TdVw({model: td})
				this.$("#todo-list").A(vw.r().el)
			},
			addAll: function () {
				Tds.each(this.addOne, this)
			},
			createOnEnter: function (e) {
				if (e.keyCode != 13) {
					return
				}
				if (!this.ip.v()) {
					return
				}
				;
				Tds.cr({title: this.ip.v()});
				this.ip.v('')
			},
			clearCompleted: function () {
				_.iv(Tds.done(), 'destroy');
				return false;
			},
			toggleAllComplete: function () {
				Tds.each(function (td) {
					td.sv({'done': this.allCb.checked})
				})
			}
		})
		Note = _M({
			defaults: function () {
				return {
					content: "Note created on " + new Date().toISOString()
				}
			}
		})
		Td = $M({df: {title: '', completed: false}});
		Td = _M({
			df: function () {
				return {
					title: "empty td...",
					order: Tds.nextOrder(),
					done: false
				}
			},
			initialize: function () {
				if (!this.g("title")) {
					this.s({title: this.df().title})
				}
			},
			toggle: function () {
				this.sv({done: !this.g("done")})
			}
		})
		NoteCollection = _C({
			//model: Note,
			//localStorage: new Bb.LocalStorage("choose-some-identifier")
		})
		TdList = _C({
			//model: Todo,
			//localStorage: new Bb.LocalStorage("td-bb"),
			done: function () {
				return this.fl(function (td) {
					return td.g('done')
				})
			},
			remaining: function () {
				return this.wo.apply(this, this.done())
			},
			nextOrder: function () {
				if (!_.z(this)) {
					return 1
				}
				return this.la().g('order') + 1
			},
			comparator: function (td) {
				return td.g('order')
			}
		})
		MsView = Bb.V.x({})
		MssView = Bb.V.x({})
	}
	
	function rainyDay() {
		LIBBOOK = function () {
			/*
			
			
			
			 Exercise 2: Book Lib - Your First RESTful bb.js App
			
			 While our first app gave usgood taste of how bb.js apps are made, most real-world apps will want to communicate withback-end of some sort.
			 Let’s reinforce what we have already learned with another example,
			 but this time we will also createRESTful API for our app to talk to.
			
			 In this exercise, we will build lib app for managing digital books using bb. For each book, we will store tt, author, date of release,
			 and some keywords. We’ll also showpicture of cover.
			
			 Setting up
			 First, we need to createfolder structure for our project. To keep front-end and back-end separate, we will createfolder called site for our client in project root.
			 Within it, we will create css, img, and js directories.
			
			 As with last example, we will split our JavaScript files by their function, so under js directory create folders named lib, mds, cls, and views.
			 Your directory hierarchy should look like this:
			
			 site/
			 css/
			 img/
			 js/
			 cls/
			 lib/
			 mds/
			 views/
			 Download bb, Underscore, and jQ libraries and copy them to your js/lib folder. We needplaceholder image for book covers. Save this image to your site/img folder:
			
			
			 Just like before we need to load all of our dependencies in site/index.html file:
			
			 <!DOCTYPE html>
			 <html lang="en">
			 <head>
			 <meta charset="UTF-8"/>
			 <tt>bb.js Lib</tt>
			 <link rel="stylesheet" href="css/screen.css">
			 </head>
			 <body>
			 <script src="js/lib/jquery.min.js"></script>
			 <script src="js/lib/underscore-min.js"></script>
			 <script src="js/lib/backbone-min.js"></script>
			 <script src="js/mds/book.js"></script>
			 <script src="js/cls/lib.js"></script>
			 <script src="js/views/book.js"></script>
			 <script src="js/views/lib.js"></script>
			 <script src="js/app.js"></script>
			 </body>
			 </html>
			 We should also add in HTML for user interface. We’ll wantform for addingnew book, so add following immediately inside body el:
			
			 <div id="books">
			 <form id="addBook" action="#">
			 <div>
			 <label for="coverImage">CoverImage: </label><input id="coverImage" type="file" />
			 <label for="tt">Title: </label><input id="tt" type="text" />
			 <label for="author">Author: </label><input id="author" type="text" />
			 <label for="releaseDate">Release date: </label><input id="releaseDate" type="text" />
			 <label for="keywords">Keywords: </label><input id="keywords" type="text" />
			 <bt id="add">Add</bt>
			 </div>
			 </form>
			 </div>
			 and we’ll needtp for displaying each book which should be placed before script tags:
			
			 <script id="bookTp" type="text/tp">
			 <img src="<%= coverImage %>"/>
			 <ul>
			 <li><%= tt %></li>
			 <li><%= author %></li>
			 <li><%= releaseDate %></li>
			 <li><%= keywords %></li>
			 </ul>
			
			 <bt class="delete">Delete</bt>
			 </script>
			 To see what this will look like with some data in it, go ahead and addmanually filled-in book to books div.
			
			 <div class="bookContainer">
			 <img src="img/placeholder.png"/>
			 <ul>
			 <li>Title</li>
			 <li>Author</li>
			 <li>Release Date</li>
			 <li>Keywords</li>
			 </ul>
			
			 <bt class="delete">Delete</bt>
			 </div>
			 Open this file in bw and it should look something like this:
			
			
			 Not so great. This is notCSS tutorial, but we still need to do some formatting. Createfile named screen.css in your site/css folder:
			
			 body {
			 background-color: #eee;
			 }
			
			 .bookContainer {
			 outline: 1px solid #aaa;
			 width: 350px;
			 height: 130px;
			 background-color: #fff;
			 float: left;
			 margin: 5px;
			 }
			
			 .bookContainer img {
			 float: left;
			 margin: 10px;
			 }
			
			 .bookContainer ul {
			 list-style-type: none;
			 margin-bottom: 0;
			 }
			
			 .bookContainer bt {
			 float: right;
			 margin: 10px;
			 }
			
			 #addBook label {
			 width: 100px;
			 margin-right: 10px;
			 text-align: right;
			 line-height: 25px;
			 }
			
			 #addBook label, #addBook input {
			 display: block;
			 margin-bottom: 10px;
			 float: left;
			 }
			
			 #addBook label[for="tt"], #addBook label[for="releaseDate"] {
			 clear: both;
			 }
			
			 #addBook bt {
			 display: block;
			 margin: 5px 20px 10px 10px;
			 float: right;
			 clear: both;
			 }
			
			 #addBook div {
			 width: 550px;
			 }
			
			 #addBook div:after {
			 content: "";
			 display: block;
			 height: 0;
			 visibility: hidden;
			 clear: both;
			 font-size: 0;
			 line-height: 0;
			 }
			 Now it looksbit better:
			
			
			 So this is what we want final result to look like, but with more books. Go ahead and copy bookContainer divfew more times if you would like to see what it looks like.
			 Now, we are ready to start developing actual app.
			
			 Creating Md, Cl, Vws, and App
			 First, we’ll needmd ofbook andcl to hold list. These are both very simple, with md only declaring some defaults:
			
			 // site/js/mds/book.js
			
			 app = app || {};
			
			 app.Book = bb.Md.x({
			 df: {
			 coverImage: 'img/placeholder.png',
			 tt: 'No tt',
			 author: 'Unknown',
			 releaseDate: 'Unknown',
			 keywords: 'None'
			 }
			 });
			 // site/js/cls/lib.js
			
			 app = app || {};
			
			 app.Lib = bb.Cl.x({
			 md: app.Book
			 });
			 Next, in order to display books we’ll needview:
			
			 // site/js/views/book.js
			
			 app = app || {};
			
			 app.BookVw = bb.V.x({
			 tagName: 'div',
			 k: 'bookContainer',
			 tp: _.tp( $( '#bookTp' ).h() ),
			
			 r: function() {
			 //this.el is what we defined in tagName. use $el to get access to jQ h() function
			 this.$el.h( this.tp( this.md.atts ) );
			
			 return this;
			 }
			 });
			 We’ll also needview for list itself:
			
			 // site/js/views/lib.js
			
			 app = app || {};
			
			 app.LibVw = bb.V.x({
			 el: '#books',
			
			 i: function( initialBooks ) {
			 this.cl = new app.Lib( initialBooks );
			 this.r();
			 },
			
			 // render lib by rendering each book in its cl
			 r: function() {
			 this.cl.each(function( item ) {
			 this.renderBook( item );
			 }, this );
			 },
			
			 // renderbook by creatingBookVw and appending the
			 // el it renders to lib's el
			 renderBook: function( item ) {
			 bookVw = new app.BookVw({
			 md: item
			 });
			 this.$el.A( bookVw.r().el );
			 }
			 });
			 Note that in init function, we accept array of data that we pass to app.Lib constructor. We’ll use this to populate our cl
			 with some sample data so that we can see everything is working correctly. Finally, we have entry point for our code, along with sample data:
			
			 // site/js/app.js
			
			 app = app || {};
			
			 $(function() {
			 books = [
			 { tt: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
			 { tt: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
			 { tt: 'Scala for Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
			 { tt: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
			 { tt: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
			 ];
			
			 new app.LibVw( books );
			 });
			 Our app just passes sample data tonew instance of app.LibVw that it creates. Since init() constructor in LibVw invokes view’s r() met,
			 all books in lib will be displayed. Since we are passing our entry point ascb to jQ (in form of its $ alias), function will execute when DOM is ready.
			
			 If you view index.html in bw, you should see something like this:
			
			
			 This iscomplete bb app, though it doesn’t yet do anything interesting.
			
			 Wiring in interface
			 Now, we’ll add some functionality to useless form at top and delete bts on each book.
			
			 Adding mds
			 When user clicks add bt, we want to take data in form and use it to createnew md. In LibVw, we need to add event handler for click event:
			
			 evs:{
			 'click #add':'addBook'
			 },
			
			 addBook: function( e ) {
			 e.preventDefault();
			
			 formData = {};
			
			 $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			 if( $( el ).val() != '' )
			 {
			 formData[ el.id ] = $( el ).val();
			 }
			 });
			
			 this.cl.add( new app.Book( formData ) );
			 },
			 We select all input els of form that haveval and iterate over them using jQ’s each. Since we used same names for ids in our form as keys on our Book md,
			 we can simply store them directly in formData object. We then createnew Book from data and add it to cl. We skip fields withoutval so that defaults will be applied.
			
			 bb passes event object asparameter to event-handling function. This is useful for us in this case since we don’t want form to actually submit and reload page.
			 Addingcall to preventDefault on event in addBook function takes care of this for us.
			
			 Now, we just need to make view render again whennew md is added. To do this, we put
			
			 this.l2( this.cl, 'add', this.renderBook );
			 in init function of LibVw.
			
			 Now, you should be ready to take app forspin.
			
			
			 You may notice that file input for cover image isn’t working, but that is left as exercise to reader.
			
			 Removing mds
			 Next, we need to wire up delete bt. Set up event handler in BookVw:
			
			 evs: {
			 'click .delete': 'deleteBook'
			 },
			
			 deleteBook: function() {
			 //Delete md
			 this.md.destroy();
			
			 //Delete view
			 this.rm();
			 },
			 You should now be able to add and rm books from lib.
			
			 Creating back-end
			 Now, we need to makesmall detour and set upserver withREST api. Since this isJavaScript book, we will use JavaScript to create server using node.js.
			 If you are more comfortable in setting upREST server in another language, this is API you need to conform to:
			
			 url             HTTP Method  Operation
			 /api/books      GET          Get array of all books
			 /api/books/:id  GET          Get book with id of :id
			 /api/books      POST         Addnew book and return book with id attr added
			 /api/books/:id  PUT          Update book with id of :id
			 /api/books/:id  DELETE       Delete book with id of :id
			 The outline for this section looks like this:
			
			 Install node.js, npm, and MongoDB
			 Install node modules
			 Createsimple web server
			 Connect to db
			 Create REST API
			 Install node.js, npm, and MongoDB
			 Download and install node.js from nodejs.org. The node package manager (npm) will be installed as well.
			
			 Download, install, and run MongoDB from mongodb.org (you need Mongo to be running to store data inMongo db).
			 There are detailed installation guides on website.
			
			 Install node modules
			 Createfile called package.json in root of your project. It should look like
			
			 {
			 "name": "backbone-lib",
			 "version": "0.0.1",
			 "description": "A simple lib app using bb",
			 "dependencies": {
			 "express": "~3.1.0",
			 "path": "~0.4.9",
			 "mongoose": "~3.5.5",
			 "body-parser": "~1.9.1"
			 }
			 }
			 Amongst other things, this file tells npm what dependencies are for our project. On command line, from root of your project, type:
			
			 npm install
			 You should see npm fetch dependencies that we listed in our package.json and save them withinfolder called node_modules.
			
			 Your folder structure should look something like this:
			
			 node_modules/
			 .bin/
			 body-parser/
			 express/
			 mongoose/
			 path/
			 site/
			 css/
			 img/
			 js/
			 index.html
			 package.json
			 Createsimple web server
			 Createfile named server.js in project root containing following code:
			
			 // Module dependencies.
			 app_root = __dirname,
			 express = require( 'express' ), //Web framework
			 bodyParser = require('body-parser'), //Parser for reading request body
			 path = require( 'path' ), //Utilities for dealing with file paths
			 mongoose = require( 'mongoose' ); //MongoDB integration
			
			 //Create server
			 app = express();
			
			 //Where to serve static content
			 app.use( express.static( path.join( app_root, 'site') ) );
			 app.use(bodyParser());
			
			 //Start server
			 port = 4711;
			
			 app.listen( port, function() {
			 $l( 'Express server listening on port %d in %s mode', port, app.settings.env );
			 });
			 We start off by loading modules required for this project: Express for creating HTTP server, Path for dealing with file paths,
			 and mongoose for connecting with db. We then create Express server and configure it using anonymous function. This ispretty standard configuration
			 and for our app we don’t actually need metOverride part. It is used for issuing PUT and DELETE HTTP requests directly fromform,
			 since forms normally only support GET and POST. Finally, we start server by running listen function. The port number used, in this case 4711,
			 could be any free port on your system. I simply used 4711 since it is unlikely to have been used by anything else. We are now ready to run our first server:
			
			 node server.js
			 If you open bw on http://localhost:4711 you should see something like this:
			
			
			 This is where we left off in Part 2, but we are now running onserver instead of directly from files. Great job! We can now start defining routes (URLs)
			 that server should react to. This will be our REST API. Routes are defined by using app followed by one of HTTP verbs get, put, post, and delete, which corresponds to
			 Create, Read, Update and Delete. Let us go back to server.js and definesimple route:
			
			 // Routes
			 app.get( '/api', function( request, response ) {
			 response.send( 'Lib API is running' );
			 });
			 The get function takesURL as first parameter andfunction as second. The function will be called with request and response objects.
			 Now, you can restart node and go to our spec URL:
			
			
			 Connect to db
			 Fantastic. Now, since we want to store our data in MongoDB, we need to defineschema. Add this to server.js:
			
			 //Connect to db
			 mongoose.connect( 'mongodb://localhost/lib_db' );
			
			 //Schemas
			 Book = new mongoose.Schema({
			 tt: String,
			 author: String,
			 releaseDate: Date
			 });
			
			 //Mds
			 BookMd = mongoose.md( 'Book', Book );
			
			 // Configure server
			 app.configure( function() {
			 //parses request body and populates request.body
			 app.use( express.bodyParser() );
			
			 //checks request.body for HTTP met overrides
			 app.use( express.metOverride() );
			
			 //perform route lookup based on url and HTTP met
			 app.use( app.router );
			
			 //Where to serve static content
			 app.use( express.static( path.join( app_root, 'site') ) );
			
			 //Show all errors in development
			 app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
			 });
			 As you can see, schema definitions are quite straight forward. They can be more advanced, but this will do for us. I also extractedmd (BookMd) from Mongo.
			 This is what we will be working with. Next up, we defineGET operation for REST API that will return all books:
			
			 //Getlist of all books
			 app.get( '/api/books', function( request, response ) {
			 return BookMd.find( function( err, books ) {
			 if( !err ) {
			 return response.send( books );
			 } else {
			 return $l( err );
			 }
			 });
			 });
			 The find function of Md is defined like this: function find (conditions, fields, ops, cb) – but since we wantfunction that returns all books we only need cb parameter.
			 The cb will be called with error object and array of found objects. If there was no error, we return array of objects to client using send function of response object.
			 Otherwise, we log error to console.
			
			 To test our API, we need to dolittle typing inJavaScript console. Restart node and go to localhost:4711 in your  bw. Open up JavaScript console.
			 If you are using Google Chrome, go to Vw->Developer->JavaScript Console. If you are using Firefox, install Firebug and go to Vw->Firebug.
			 Most other  bws will havesimilar console. In console type following:
			
			 jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
			 $l( 'Get response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 });
			 …and press enter and you should get something like this:
			
			
			 Here I used jQ to make call to our REST API, since it was already loaded on page.
			 returned array is obviously empty, since we have not put anything into db yet. Let’s go and createPOST route that enables adding new items in server.js:
			
			 //Insertnew book
			 app.post( '/api/books', function( request, response ) {
			 book = new BookMd({
			 tt: request.body.tt,
			 author: request.body.author,
			 releaseDate: request.body.releaseDate
			 });
			
			 return book.save( function( err ) {
			 if( !err ) {
			 $l( 'created' );
			 return response.send( book );
			 } else {
			 $l( err );
			 }
			 });
			 });
			 We start by creatingnew BookMd, passing object with tt, author, and releaseDate atts. The data are collected from request.body.
			 This means that anyone calling this operation in API needs to supplyJSON object containing tt, author, and releaseDate atts.
			 Actually, caller can omit any or all atts since we have not made any of them mandatory.
			
			 We then call save function on BookMd passing incb in same way as with prev get route. Finally, we return saved BookMd.
			 The reason we return BookMd and not just “success” or similar string is that when BookMd is saved it will get _id attr from MongoDB,
			 which client needs when updating or deleting spec book. Let’s try it out again. Restart node and go back to console and type:
			
			 jQ.post( '/api/books', {
			 'tt': 'JavaScript good parts',
			 'author': 'Douglas Crockford',
			 'releaseDate': new Date( 2008, 4, 1 ).getTime()
			 }, function(data, textStatus, jqXHR) {
			 $l( 'Post response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 });
			 ..and then
			
			 jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
			 $l( 'Get response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 });
			
			 You should now getone-el array back from our server. You may wonder about this line:
			
			 'releaseDate': new Date(2008, 4, 1).getTime()
			 MongoDB expects dates in UNIX time format (milliseconds from start of Jan 1st 1970 UTC), so we have to convert dates before posting.
			 The object we get back, however, containsJavaScript Date object. Also note _id attr of returned object.
			
			
			 Let’s move on to creatingGET request that retrievessingle book in server.js:
			
			
			 //Getsingle book by id
			 app.get( '/api/books/:id', function( request, response ) {
			 return BookMd.findById( request.params.id, function( err, book ) {
			 if( !err ) {            return response.send( book ) }
			 else {            return $l( err )  }  })});
			
			 Here, we use colon notation (:id) to tell Express that this part of route is dynamic. We also use findById function on BookMd to getsingle result.
			 If you restart node, you can getsingle book by adding id prevly returned to URL like this:
			
			 jQ.get( '/api/books/4f95a8cb1baa9b8a1b000006', function( data, textStatus, jqXHR ) {
			 $l( 'Get response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 });
			 Let’s create PUT (update) function next:
			
			 //Updatebook
			 app.put( '/api/books/:id', function( request, response ) {
			 $l( 'Updating book ' + request.body.tt );
			 return BookMd.findById( request.params.id, function( err, book ) {
			 book.tt = request.body.tt;
			 book.author = request.body.author;
			 book.releaseDate = request.body.releaseDate;
			
			 return book.save( function( err ) {
			 if( !err ) {
			 $l( 'book updated' );
			 return response.send( book );
			 } else {
			 $l( err );
			 }
			 });
			 });
			 })
			
			
			 This islittle bigr than prev ones, but is also pretty straight forward – we findbook by id, update its pops, save it, and send it back to client.
			
			 To test this, we need to use more general jQ ajax function. Again, in these examples, you will need to replace id property with one that matches item in your own db:
			
			 jQ.ajax({
			 url: '/api/books/4f95a8cb1baa9b8a1b000006',
			 type: 'PUT',
			 data: {
			 'tt': 'JavaScript The good parts',
			 'author': 'The Legendary Douglas Crockford',
			 'releaseDate': new Date( 2008, 4, 1 ).getTime()
			 },
			 success: function( data, textStatus, jqXHR ) {
			 $l( 'Put response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 }
			 });
			 Finally, we create delete route:
			
			 //Deletebook
			 app.delete( '/api/books/:id', function( request, response ) {
			 $l( 'Deleting book with id: ' + request.params.id );
			 return BookMd.findById( request.params.id, function( err, book ) {
			 return book.rm( function( err ) {
			 if( !err ) {
			 $l( 'Book rmd' );
			 return response.send( '' );
			 } else {
			 $l( err );
			 }
			 });
			 });
			 });
			 …and try it out:
			
			 jQ.ajax({
			 url: '/api/books/4f95a5251baa9b8a1b000001',
			 type: 'DELETE',
			 success: function( data, textStatus, jqXHR ) {
			 $l( 'Delete response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 }
			 });
			 So now our REST API is complete – we have support for all four HTTP verbs. What’s next? Well, until now I have left out keywords part of our books.
			 This isbit more complicated sincebook could have several keywords and we don’t want to rep them asstring, but rather array of strings.
			 To do that, we need another schema. AddKeywords schema right above our Book schema:
			
			 //Schemas
			 Keywords = new mongoose.Schema({
			 keyword: String
			 });
			 To addsub schema to existing schema, we use brackets notation like so:
			
			 Book = new mongoose.Schema({
			 tt: String,
			 author: String,
			 releaseDate: Date,
			 keywords: [ Keywords ]                       *
			 });
			 Also update POST and PUT:
			
			 //Insertnew book
			 app.post( '/api/books', function( request, response ) {
			 book = new BookMd({
			 tt: request.body.tt,
			 author: request.body.author,
			 releaseDate: request.body.releaseDate,
			 keywords: request.body.keywords       *
			 });
			 book.save( function( err ) {
			 if( !err ) {
			 $l( 'created' );
			 return response.send( book );
			 } else {
			 return $l( err );
			 }
			 });
			 });
			
			 //Updatebook
			 app.put( '/api/books/:id', function( request, response ) {
			 $l( 'Updating book ' + request.body.tt );
			 return BookMd.findById( request.params.id, function( err, book ) {
			 book.tt = request.body.tt;
			 book.author = request.body.author;
			 book.releaseDate = request.body.releaseDate;
			 book.keywords = request.body.keywords; *
			
			 return book.save( function( err ) {
			 if( !err ) {
			 $l( 'book updated' );
			 } else {
			 $l( err );
			 }
			 return response.send( book );
			 });
			 });
			 });
			 There we are, that should be all we need, now we can try it out in console:
			
			 jQ.post( '/api/books', {
			 'tt': 'Secrets of JavaScript Ninja',
			 'author': 'John Resig',
			 'releaseDate': new Date( 2008, 3, 12 ).getTime(),
			 'keywords':[
			 { 'keyword': 'JavaScript' },
			 { 'keyword': 'Reference' }
			 ]
			 }, function( data, textStatus, jqXHR ) {
			 $l( 'Post response:' );
			 console.dir( data );
			 $l( textStatus );
			 console.dir( jqXHR );
			 });
			 You now havefully functional REST server that we can hook into from our front-end.
			
			 Talking to server
			 In this part, we will cover connecting our bb app to server through REST API.
			
			 As we mentioned in chapter 3 bb Basics, we can retrieve mds fromserver using cl.fetch() by setting cl.url to be URL of API endpoint. Let’s update Lib cl to do that now:
			
			 app = app || {};
			
			 app.Lib = bb.Cl.x({
			 md: app.Book,
			 url: '/api/books'     *
			 });
			 This results in default impl of bb.sync assuming that API looks like this:
			
			 url             HTTP Method  Operation
			 /api/books      GET          Get array of all books
			 /api/books/:id  GET          Get book with id of :id
			 /api/books      POST         Addnew book and return book with id attr added
			 /api/books/:id  PUT          Update book with id of :id
			 /api/books/:id  DELETE       Delete book with id of :id
			 To have our app retrieve Book mds from server on page load, we need to update LibVw.
			 The bb documentation recommends inserting all mds when page is generated on server side,
			 rather than fetching them from client side once page is loaded. Since this chapter is trying to give youmore complete picture of how to communicate withserver,
			 we will go ahead and ignore that recommendation. Go to LibVw declaration and update init function as follows:
			
			 i: function() {                    // UPDATED
			 this.cl = new app.Lib();    // UPDATED
			 this.cl.fetch({reset: true});   *
			 this.r();
			
			 this.l2( this.cl, 'add', this.renderBook );
			 this.l2( this.cl, 'reset', this.render ); *
			 },
			 Now that we are populating our Lib from db using this.cl.fetch(), init() function no longer takesset of sample data as argument and doesn’t pass anything to app.Lib constructor.
			 You can now rm sample data from site/js/app.js, which should reduce it tosingle statement which creates LibVw:
			
			 // site/js/app.js
			
			 app = app || {};
			
			 $(function() {
			 new app.LibVw();  // UPDATED
			 });
			 We have also addedlistener on reset event. We need to do this since mds are fetched asynchronously after page is rendered. When fetch completes,
			 bb fires reset event, as requested by reset: true option, and our listener re-renders view. If you reload page now, you should see all books that are stored on server:
			
			
			 As you can see, date and keywords lookbit weird. The date delivered from server is converted intoJavaScript Date object and when applied to underscore tp,
			 it will use toString() function to display it. There isn’t very good support for formatting dates in JavaScript so we will use dateFormat jQ plugin to fix this.
			 Go ahead and download it from here and put it in your site/js/lib folder. Update book tp so that date is displayed with:
			
			 <li><%= $.format.date( new Date( releaseDate ), 'MMMM yyyy' ) %></li>
			 and addscript el for plugin
			
			 <script src="js/lib/jquery-dateFormat-1.0.js"></script>
			 Now, date on page should lookbit better. How about keywords? Since we are receiving keywords in array we need to execute some code that generatesstring of separated keywords.
			 To do that, we can omit equals character in tp tag which will let us execute code that doesn’t display anything:
			
			 <li><% _.e( keywords, function( keyobj ) {%> <%= keyobj.keyword %><% } ); %></li>
			 Here I iterate over keywords array using Underscore each function and print out every single keyword. Note that I display keyword using <%= tag.
			 This will display keywords with spaces between them.
			
			 Reloading page again should look quite decent:
			
			
			 Now go ahead and deletebook and then reload page: Tadaa! deleted book is back! Not cool, why is this?
			 This happens because when we get BookMds from server they have _id attr (notice underscore),
			 but bb expects id attr (no underscore). Since no id attr is present, bb sees this md as new and deletingnew md doesn’t need any synchronization.
			
			 To fix this, we can use parse function of bb.Md. The parse function lets you edit server response before it is passed to Md constructor. Addparse met to Book md:
			
			 parse: function( response ) {
			 response.id = response._id;
			 return response;
			 }
			 Simply copy val of _id to needed id attr. If you reload page, you will see that mds are actually deleted on server when you press delete bt.
			
			 Another, simpler way of making bb recognize id as its unique identifier is to set idAttribute of md toid.
			
			 If you now try to addnew book using form, you’ll notice that it issimilar story to delete – mds won’t get persisted on server.
			 This is because bb.Cl.add doesn’t automatically sync, but it is easy to fix. In LibVw, we find in views/lib.js change line reading:
			
			 this.cl.add( new Book( formData ) );
			 …to:
			
			 this.cl.create( formData );
			 Now, newly created books will get persisted. Actually, they probably won’t if you enterdate. The server expectsdate in UNIX timestamp format (milliseconds since Jan 1, 1970).
			 Also, any keywords you enter won’t be stored since server expects array of objects with attr ‘keyword’.
			
			 We’ll start by fixing date issue. We don’t really want users to manually enterdate in spec format, so we’ll use standard datepicker from jQ UI.
			 Go ahead and createcust jQ UI download containing datepicker from here. Add css theme to site/css/ and JavaScript to site/js/lib. Link to them in index.html:
			
			 <link rel="stylesheet" href="css/cupertino/jquery-ui-1.10.0.cust.css">
			 “cupertino” is name of style I chose when downloading jQ UI.
			
			 The JavaScript file must be loaded after jQ.
			
			 <script src="js/lib/jquery.min.js"></script>
			 <script src="js/lib/jquery-ui-1.10.0.cust.min.js"></script>
			 Now in app.js, binddatepicker to our releaseDate field:
			
			 app = app || {};
			
			 $(function() {
			 $( '#releaseDate' ).datepicker();
			 new app.LibVw();
			 });
			 You should now be able to pickdate when clicking in releaseDate field:
			
			
			 Finally, we have to make sure that form input is properly transformed into our storage format. Change addBook function in LibVw to:
			
			 addBook: function( e ) {
			 e.preventDefault();
			
			 formData = {};
			
			 $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			 if( $( el ).val() != '' )
			 {
			 if( el.id === 'keywords' ) {
			 formData[ el.id ] = [];
			 _.e( $( el ).val().split( ' ' ), function( keyword ) {
			 formData[ el.id ].push({ 'keyword': keyword });
			 });
			 } else if( el.id === 'releaseDate' ) {
			 formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
			 } else {
			 formData[ el.id ] = $( el ).val();
			 }
			 }
			 // Clear input field val
			 $( el ).val('');
			 });
			
			 this.cl.create( formData );
			 },
			 Our change adds two checks to form input fields. First, we’re checking if current el is keywords input field,
			 in which case we’re splitting string on each space and creating array of keyword objects.
			
			 Then we’re checking if current el is releaseDate input field, in which case we’re calling datePicker(“getDate”) which returnsDate object.
			 We then use getTime function on that to get time in milliseconds.
			
			 Now, you should be able to add new books with bothrelease date and keywords!
			
			
			 Summary
			 In this chapter, we made our app persistent by binding it toserver usingREST API.
			 We also looked at some problems that might occur when serializing and deserializing data and their sols.
			 We looked at dateFormat and datepicker jQ plugins and how to do some more advanced things in our Underscore tps. The code is avail here.
			
			 */
		}
//restufl: ** EXAMPLE 2 BOOK LIB //
// Exercise 2: Book Lib - Your First RESTful bb.js App
//
// While our first app gave usgood taste of how bb.js apps are made, most real-world apps will want to communicate withback-end of some sort.
// Let’s reinforce what we have already learned with another example,
// but this time we will also createRESTful API for our app to talk to.
//
// In this exercise, we will build lib app for managing digital books using bb. For each book, we will store tt, author, date of release,
// and some keywords. We’ll also showpicture of cover.
//
// Setting up
// First, we need to createfolder structure for our project. To keep front-end and back-end separate, we will createfolder called site for our client in project root.
// Within it, we will create css, img, and js directories.
//
// As with last example, we will split our JavaScript files by their function, so under js directory create folders named lib, mds, cls, and views.
// Your directory hierarchy should look like this:
//
// site/
// css/
// img/
// js/
// cls/
// lib/
// mds/
// views/
// Download bb, Underscore, and jQ libraries and copy them to your js/lib folder. We needplaceholder image for book covers. Save this image to your site/img folder:
//
//
// Just like before we need to load all of our dependencies in site/index.html file:
//
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8"/>
// <tt>bb.js Lib</tt>
// <link rel="stylesheet" href="css/screen.css">
// </head>
// <body>
// <script src="js/lib/jquery.min.js"></script>
// <script src="js/lib/underscore-min.js"></script>
// <script src="js/lib/backbone-min.js"></script>
// <script src="js/mds/book.js"></script>
// <script src="js/cls/lib.js"></script>
// <script src="js/views/book.js"></script>
// <script src="js/views/lib.js"></script>
// <script src="js/app.js"></script>
// </body>
// </html>
// We should also add in HTML for user interface. We’ll wantform for addingnew book, so add following immediately inside body el:
//
// <div id="books">
// <form id="addBook" action="#">
// <div>
// <label for="coverImage">CoverImage: </label><input id="coverImage" type="file" />
// <label for="tt">Title: </label><input id="tt" type="text" />
// <label for="author">Author: </label><input id="author" type="text" />
// <label for="releaseDate">Release date: </label><input id="releaseDate" type="text" />
// <label for="keywords">Keywords: </label><input id="keywords" type="text" />
// <bt id="add">Add</bt>
// </div>
// </form>
// </div>
// and we’ll needtp for displaying each book which should be placed before script tags:
//
// <script id="bookTp" type="text/tp">
// <img src="<%= coverImage %>"/>
// <ul>
// <li><%= tt %></li>
// <li><%= author %></li>
// <li><%= releaseDate %></li>
// <li><%= keywords %></li>
// </ul>
//
// <bt class="delete">Delete</bt>
// </script>
// To see what this will look like with some data in it, go ahead and addmanually filled-in book to books div.
//
// <div class="bookContainer">
// <img src="img/placeholder.png"/>
// <ul>
// <li>Title</li>
// <li>Author</li>
// <li>Release Date</li>
// <li>Keywords</li>
// </ul>
//
// <bt class="delete">Delete</bt>
// </div>
// Open this file in bw and it should look something like this:
//
//
// Not so great. This is notCSS tutorial, but we still need to do some formatting. Createfile named screen.css in your site/css folder:
//
// body {
// background-color: #eee;
// }
//
// .bookContainer {
// outline: 1px solid #aaa;
// width: 350px;
// height: 130px;
// background-color: #fff;
// float: left;
// margin: 5px;
// }
//
// .bookContainer img {
// float: left;
// margin: 10px;
// }
//
// .bookContainer ul {
// list-style-type: none;
// margin-bottom: 0;
// }
//
// .bookContainer bt {
// float: right;
// margin: 10px;
// }
//
// #addBook label {
// width: 100px;
// margin-right: 10px;
// text-align: right;
// line-height: 25px;
// }
//
// #addBook label, #addBook input {
// display: block;
// margin-bottom: 10px;
// float: left;
// }
//
// #addBook label[for="tt"], #addBook label[for="releaseDate"] {
// clear: both;
// }
//
// #addBook bt {
// display: block;
// margin: 5px 20px 10px 10px;
// float: right;
// clear: both;
// }
//
// #addBook div {
// width: 550px;
// }
//
// #addBook div:after {
// content: "";
// display: block;
// height: 0;
// visibility: hidden;
// clear: both;
// font-size: 0;
// line-height: 0;
// }
// Now it looksbit better:
//
//
// So this is what we want final result to look like, but with more books. Go ahead and copy bookContainer divfew more times if you would like to see what it looks like.
// Now, we are ready to start developing actual app.
//
// Creating Md, Cl, Vws, and App
// First, we’ll needmd ofbook andcl to hold list. These are both very simple, with md only declaring some defaults:
//
// // site/js/mds/book.js
//
// app = app || {};
//
// app.Book = bb.Md.x({
// df: {
// coverImage: 'img/placeholder.png',
// tt: 'No tt',
// author: 'Unknown',
// releaseDate: 'Unknown',
// keywords: 'None'
// }
// });
// // site/js/cls/lib.js
//
// app = app || {};
//
// app.Lib = bb.Cl.x({
// md: app.Book
// });
// Next, in order to display books we’ll needview:
//
// // site/js/views/book.js
//
// app = app || {};
//
// app.BookVw = bb.V.x({
// tagName: 'div',
// k: 'bookContainer',
// tp: _.tp( $( '#bookTp' ).h() ),
//
// r: function() {
// //this.el is what we defined in tagName. use $el to get access to jQ h() function
// this.$el.h( this.tp( this.md.atts ) );
//
// return this;
// }
// });
// We’ll also needview for list itself:
//
// // site/js/views/lib.js
//
// app = app || {};
//
// app.LibVw = bb.V.x({
// el: '#books',
//
// i: function( initialBooks ) {
// this.cl = new app.Lib( initialBooks );
// this.r();
// },
//
// // render lib by rendering each book in its cl
// r: function() {
// this.cl.each(function( item ) {
// this.renderBook( item );
// }, this );
// },
//
// // renderbook by creatingBookVw and appending the
// // el it renders to lib's el
// renderBook: function( item ) {
// bookVw = new app.BookVw({
// md: item
// });
// this.$el.A( bookVw.r().el );
// }
// });
// Note that in init function, we accept array of data that we pass to app.Lib constructor. We’ll use this to populate our cl
// with some sample data so that we can see everything is working correctly. Finally, we have entry point for our code, along with sample data:
//
// // site/js/app.js
//
// app = app || {};
//
// $(function() {
// books = [
// { tt: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
// { tt: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
// { tt: 'Scala for Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
// { tt: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
// { tt: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
// ];
//
// new app.LibVw( books );
// });
// Our app just passes sample data tonew instance of app.LibVw that it creates. Since init() constructor in LibVw invokes view’s r() met,
// all books in lib will be displayed. Since we are passing our entry point ascb to jQ (in form of its $ alias), function will execute when DOM is ready.
//
// If you view index.html in bw, you should see something like this:
//
//
// This iscomplete bb app, though it doesn’t yet do anything interesting.
//
// Wiring in interface
// Now, we’ll add some functionality to useless form at top and delete bts on each book.
//
// Adding mds
// When user clicks add bt, we want to take data in form and use it to createnew md. In LibVw, we need to add event handler for click event:
//
// evs:{
// 'click #add':'addBook'
// },
//
// addBook: function( e ) {
// e.preventDefault();
//
// formData = {};
//
// $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
// if( $( el ).val() != '' )
// {
// formData[ el.id ] = $( el ).val();
// }
// });
//
// this.cl.add( new app.Book( formData ) );
// },
// We select all input els of form that haveval and iterate over them using jQ’s each. Since we used same names for ids in our form as keys on our Book md,
// we can simply store them directly in formData object. We then createnew Book from data and add it to cl. We skip fields withoutval so that defaults will be applied.
//
// bb passes event object asparameter to event-handling function. This is useful for us in this case since we don’t want form to actually submit and reload page.
// Addingcall to preventDefault on event in addBook function takes care of this for us.
//
// Now, we just need to make view render again whennew md is added. To do this, we put
//
// this.l2( this.cl, 'add', this.renderBook );
// in init function of LibVw.
//
// Now, you should be ready to take app forspin.
//
//
// You may notice that file input for cover image isn’t working, but that is left as exercise to reader.
//
// Removing mds
// Next, we need to wire up delete bt. Set up event handler in BookVw:
//
// evs: {
// 'click .delete': 'deleteBook'
// },
//
// deleteBook: function() {
// //Delete md
// this.md.destroy();
//
// //Delete view
// this.rm();
// },
// You should now be able to add and rm books from lib.
//
// Creating back-end
// Now, we need to makesmall detour and set upserver withREST api. Since this isJavaScript book, we will use JavaScript to create server using node.js.
// If you are more comfortable in setting upREST server in another language, this is API you need to conform to:
//
// url             HTTP Method  Operation
// /api/books      GET          Get array of all books
// /api/books/:id  GET          Get book with id of :id
// /api/books      POST         Addnew book and return book with id attr added
// /api/books/:id  PUT          Update book with id of :id
// /api/books/:id  DELETE       Delete book with id of :id
// The outline for this section looks like this:
//
// Install node.js, npm, and MongoDB
// Install node modules
// Createsimple web server
// Connect to db
// Create REST API
// Install node.js, npm, and MongoDB
// Download and install node.js from nodejs.org. The node package manager (npm) will be installed as well.
//
// Download, install, and run MongoDB from mongodb.org (you need Mongo to be running to store data inMongo db).
// There are detailed installation guides on website.
//
// Install node modules
// Createfile called package.json in root of your project. It should look like
//
// {
// "name": "backbone-lib",
// "version": "0.0.1",
// "description": "A simple lib app using bb",
// "dependencies": {
// "express": "~3.1.0",
// "path": "~0.4.9",
// "mongoose": "~3.5.5",
// "body-parser": "~1.9.1"
// }
// }
// Amongst other things, this file tells npm what dependencies are for our project. On command line, from root of your project, type:
//
// npm install
// You should see npm fetch dependencies that we listed in our package.json and save them withinfolder called node_modules.
//
// Your folder structure should look something like this:
//
// node_modules/
// .bin/
// body-parser/
// express/
// mongoose/
// path/
// site/
// css/
// img/
// js/
// index.html
// package.json
// Createsimple web server
// Createfile named server.js in project root containing following code:
//
// // Module dependencies.
// app_root = __dirname,
// express = require( 'express' ), //Web framework
// bodyParser = require('body-parser'), //Parser for reading request body
// path = require( 'path' ), //Utilities for dealing with file paths
// mongoose = require( 'mongoose' ); //MongoDB integration
//
// //Create server
// app = express();
//
// //Where to serve static content
// app.use( express.static( path.join( app_root, 'site') ) );
// app.use(bodyParser());
//
// //Start server
// port = 4711;
//
// app.listen( port, function() {
// $l( 'Express server listening on port %d in %s mode', port, app.settings.env );
// });
// We start off by loading modules required for this project: Express for creating HTTP server, Path for dealing with file paths,
// and mongoose for connecting with db. We then create Express server and configure it using anonymous function. This ispretty standard configuration
// and for our app we don’t actually need metOverride part. It is used for issuing PUT and DELETE HTTP requests directly fromform,
// since forms normally only support GET and POST. Finally, we start server by running listen function. The port number used, in this case 4711,
// could be any free port on your system. I simply used 4711 since it is unlikely to have been used by anything else. We are now ready to run our first server:
//
// node server.js
// If you open bw on http://localhost:4711 you should see something like this:
//
//
// This is where we left off in Part 2, but we are now running onserver instead of directly from files. Great job! We can now start defining routes (URLs)
// that server should react to. This will be our REST API. Routes are defined by using app followed by one of HTTP verbs get, put, post, and delete, which corresponds to
// Create, Read, Update and Delete. Let us go back to server.js and definesimple route:
//
// // Routes
// app.get( '/api', function( request, response ) {
// response.send( 'Lib API is running' );
// });
// The get function takesURL as first parameter andfunction as second. The function will be called with request and response objects.
// Now, you can restart node and go to our spec URL:
//
//
// Connect to db
// Fantastic. Now, since we want to store our data in MongoDB, we need to defineschema. Add this to server.js:
//
// //Connect to db
// mongoose.connect( 'mongodb://localhost/lib_db' );
//
// //Schemas
// Book = new mongoose.Schema({
// tt: String,
// author: String,
// releaseDate: Date
// });
//
// //Mds
// BookMd = mongoose.md( 'Book', Book );
//
// // Configure server
// app.configure( function() {
// //parses request body and populates request.body
// app.use( express.bodyParser() );
//
// //checks request.body for HTTP met overrides
// app.use( express.metOverride() );
//
// //perform route lookup based on url and HTTP met
// app.use( app.router );
//
// //Where to serve static content
// app.use( express.static( path.join( app_root, 'site') ) );
//
// //Show all errors in development
// app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
// });
// As you can see, schema definitions are quite straight forward. They can be more advanced, but this will do for us. I also extractedmd (BookMd) from Mongo.
// This is what we will be working with. Next up, we defineGET operation for REST API that will return all books:
//
// //Getlist of all books
// app.get( '/api/books', function( request, response ) {
// return BookMd.find( function( err, books ) {
// if( !err ) {
// return response.send( books );
// } else {
// return $l( err );
// }
// });
// });
// The find function of Md is defined like this: function find (conditions, fields, ops, cb) – but since we wantfunction that returns all books we only need cb parameter.
// The cb will be called with error object and array of found objects. If there was no error, we return array of objects to client using send function of response object.
// Otherwise, we log error to console.
//
// To test our API, we need to dolittle typing inJavaScript console. Restart node and go to localhost:4711 in your  bw. Open up JavaScript console.
// If you are using Google Chrome, go to Vw->Developer->JavaScript Console. If you are using Firefox, install Firebug and go to Vw->Firebug.
// Most other  bws will havesimilar console. In console type following:
//
// jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
// $l( 'Get response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// });
// …and press enter and you should get something like this:
//
//
// Here I used jQ to make call to our REST API, since it was already loaded on page.
// returned array is obviously empty, since we have not put anything into db yet. Let’s go and createPOST route that enables adding new items in server.js:
//
// //Insertnew book
// app.post( '/api/books', function( request, response ) {
// book = new BookMd({
// tt: request.body.tt,
// author: request.body.author,
// releaseDate: request.body.releaseDate
// });
//
// return book.save( function( err ) {
// if( !err ) {
// $l( 'created' );
// return response.send( book );
// } else {
// $l( err );
// }
// });
// });
// We start by creatingnew BookMd, passing object with tt, author, and releaseDate atts. The data are collected from request.body.
// This means that anyone calling this operation in API needs to supplyJSON object containing tt, author, and releaseDate atts.
// Actually, caller can omit any or all atts since we have not made any of them mandatory.
//
// We then call save function on BookMd passing incb in same way as with prev get route. Finally, we return saved BookMd.
// The reason we return BookMd and not just “success” or similar string is that when BookMd is saved it will get _id attr from MongoDB,
// which client needs when updating or deleting spec book. Let’s try it out again. Restart node and go back to console and type:
//
// jQ.post( '/api/books', {
// 'tt': 'JavaScript good parts',
// 'author': 'Douglas Crockford',
// 'releaseDate': new Date( 2008, 4, 1 ).getTime()
// }, function(data, textStatus, jqXHR) {
// $l( 'Post response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// });
// ..and then
//
// jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
// $l( 'Get response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// });
//
// You should now getone-el array back from our server. You may wonder about this line:
//
// 'releaseDate': new Date(2008, 4, 1).getTime()
// MongoDB expects dates in UNIX time format (milliseconds from start of Jan 1st 1970 UTC), so we have to convert dates before posting.
// The object we get back, however, containsJavaScript Date object. Also note _id attr of returned object.
//
//
// Let’s move on to creatingGET request that retrievessingle book in server.js:
//
//
// //Getsingle book by id
// app.get( '/api/books/:id', function( request, response ) {
// return BookMd.findById( request.params.id, function( err, book ) {
// if( !err ) {            return response.send( book ) }
// else {            return $l( err )  }  })});
//
// Here, we use colon notation (:id) to tell Express that this part of route is dynamic. We also use findById function on BookMd to getsingle result.
// If you restart node, you can getsingle book by adding id prevly returned to URL like this:
//
// jQ.get( '/api/books/4f95a8cb1baa9b8a1b000006', function( data, textStatus, jqXHR ) {
// $l( 'Get response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// });
// Let’s create PUT (update) function next:
//
// //Updatebook
// app.put( '/api/books/:id', function( request, response ) {
// $l( 'Updating book ' + request.body.tt );
// return BookMd.findById( request.params.id, function( err, book ) {
// book.tt = request.body.tt;
// book.author = request.body.author;
// book.releaseDate = request.body.releaseDate;
//
// return book.save( function( err ) {
// if( !err ) {
// $l( 'book updated' );
// return response.send( book );
// } else {
// $l( err );
// }
// });
// });
// })
//
//
// This islittle bigr than prev ones, but is also pretty straight forward – we findbook by id, update its pops, save it, and send it back to client.
//
// To test this, we need to use more general jQ ajax function. Again, in these examples, you will need to replace id property with one that matches item in your own db:
//
// jQ.ajax({
// url: '/api/books/4f95a8cb1baa9b8a1b000006',
// type: 'PUT',
// data: {
// 'tt': 'JavaScript The good parts',
// 'author': 'The Legendary Douglas Crockford',
// 'releaseDate': new Date( 2008, 4, 1 ).getTime()
// },
// success: function( data, textStatus, jqXHR ) {
// $l( 'Put response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// }
// });
// Finally, we create delete route:
//
// //Deletebook
// app.delete( '/api/books/:id', function( request, response ) {
// $l( 'Deleting book with id: ' + request.params.id );
// return BookMd.findById( request.params.id, function( err, book ) {
// return book.rm( function( err ) {
// if( !err ) {
// $l( 'Book rmd' );
// return response.send( '' );
// } else {
// $l( err );
// }
// });
// });
// });
// …and try it out:
//
// jQ.ajax({
// url: '/api/books/4f95a5251baa9b8a1b000001',
// type: 'DELETE',
// success: function( data, textStatus, jqXHR ) {
// $l( 'Delete response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// }
// });
// So now our REST API is complete – we have support for all four HTTP verbs. What’s next? Well, until now I have left out keywords part of our books.
// This isbit more complicated sincebook could have several keywords and we don’t want to rep them asstring, but rather array of strings.
// To do that, we need another schema. AddKeywords schema right above our Book schema:
//
// //Schemas
// Keywords = new mongoose.Schema({
// keyword: String
// });
// To addsub schema to existing schema, we use brackets notation like so:
//
// Book = new mongoose.Schema({
// tt: String,
// author: String,
// releaseDate: Date,
// keywords: [ Keywords ]                       *
// });
// Also update POST and PUT:
//
// //Insertnew book
// app.post( '/api/books', function( request, response ) {
// book = new BookMd({
// tt: request.body.tt,
// author: request.body.author,
// releaseDate: request.body.releaseDate,
// keywords: request.body.keywords       *
// });
// book.save( function( err ) {
// if( !err ) {
// $l( 'created' );
// return response.send( book );
// } else {
// return $l( err );
// }
// });
// });
//
// //Updatebook
// app.put( '/api/books/:id', function( request, response ) {
// $l( 'Updating book ' + request.body.tt );
// return BookMd.findById( request.params.id, function( err, book ) {
// book.tt = request.body.tt;
// book.author = request.body.author;
// book.releaseDate = request.body.releaseDate;
// book.keywords = request.body.keywords; *
//
// return book.save( function( err ) {
// if( !err ) {
// $l( 'book updated' );
// } else {
// $l( err );
// }
// return response.send( book );
// });
// });
// });
// There we are, that should be all we need, now we can try it out in console:
//
// jQ.post( '/api/books', {
// 'tt': 'Secrets of JavaScript Ninja',
// 'author': 'John Resig',
// 'releaseDate': new Date( 2008, 3, 12 ).getTime(),
// 'keywords':[
// { 'keyword': 'JavaScript' },
// { 'keyword': 'Reference' }
// ]
// }, function( data, textStatus, jqXHR ) {
// $l( 'Post response:' );
// console.dir( data );
// $l( textStatus );
// console.dir( jqXHR );
// });
// You now havefully functional REST server that we can hook into from our front-end.
//
// Talking to server
// In this part, we will cover connecting our bb app to server through REST API.
//
// As we mentioned in chapter 3 bb Basics, we can retrieve mds fromserver using cl.fetch() by setting cl.url to be URL of API endpoint. Let’s update Lib cl to do that now:
//
// app = app || {};
//
// app.Lib = bb.Cl.x({
// md: app.Book,
// url: '/api/books'     *
// });
// This results in default impl of bb.sync assuming that API looks like this:
//
// url             HTTP Method  Operation
// /api/books      GET          Get array of all books
// /api/books/:id  GET          Get book with id of :id
// /api/books      POST         Addnew book and return book with id attr added
// /api/books/:id  PUT          Update book with id of :id
// /api/books/:id  DELETE       Delete book with id of :id
// To have our app retrieve Book mds from server on page load, we need to update LibVw.
// The bb documentation recommends inserting all mds when page is generated on server side,
// rather than fetching them from client side once page is loaded. Since this chapter is trying to give youmore complete picture of how to communicate withserver,
// we will go ahead and ignore that recommendation. Go to LibVw declaration and update init function as follows:
//
// i: function() {                    // UPDATED
// this.cl = new app.Lib();    // UPDATED
// this.cl.fetch({reset: true});   *
// this.r();
//
// this.l2( this.cl, 'add', this.renderBook );
// this.l2( this.cl, 'reset', this.render ); *
// },
// Now that we are populating our Lib from db using this.cl.fetch(), init() function no longer takesset of sample data as argument and doesn’t pass anything to app.Lib constructor.
// You can now rm sample data from site/js/app.js, which should reduce it tosingle statement which creates LibVw:
//
// // site/js/app.js
//
// app = app || {};
//
// $(function() {
// new app.LibVw();  // UPDATED
// });
// We have also addedlistener on reset event. We need to do this since mds are fetched asynchronously after page is rendered. When fetch completes,
// bb fires reset event, as requested by reset: true option, and our listener re-renders view. If you reload page now, you should see all books that are stored on server:
//
//
// As you can see, date and keywords lookbit weird. The date delivered from server is converted intoJavaScript Date object and when applied to underscore tp,
// it will use toString() function to display it. There isn’t very good support for formatting dates in JavaScript so we will use dateFormat jQ plugin to fix this.
// Go ahead and download it from here and put it in your site/js/lib folder. Update book tp so that date is displayed with:
//
// <li><%= $.format.date( new Date( releaseDate ), 'MMMM yyyy' ) %></li>
// and addscript el for plugin
//
// <script src="js/lib/jquery-dateFormat-1.0.js"></script>
// Now, date on page should lookbit better. How about keywords? Since we are receiving keywords in array we need to execute some code that generatesstring of separated keywords.
// To do that, we can omit equals character in tp tag which will let us execute code that doesn’t display anything:
//
// <li><% _.e( keywords, function( keyobj ) {%> <%= keyobj.keyword %><% } ); %></li>
// Here I iterate over keywords array using Underscore each function and print out every single keyword. Note that I display keyword using <%= tag.
// This will display keywords with spaces between them.
//
// Reloading page again should look quite decent:
//
//
// Now go ahead and deletebook and then reload page: Tadaa! deleted book is back! Not cool, why is this?
// This happens because when we get BookMds from server they have _id attr (notice underscore),
// but bb expects id attr (no underscore). Since no id attr is present, bb sees this md as new and deletingnew md doesn’t need any synchronization.
//
// To fix this, we can use parse function of bb.Md. The parse function lets you edit server response before it is passed to Md constructor. Addparse met to Book md:
//
// parse: function( response ) {
// response.id = response._id;
// return response;
// }
// Simply copy val of _id to needed id attr. If you reload page, you will see that mds are actually deleted on server when you press delete bt.
//
// Another, simpler way of making bb recognize id as its unique identifier is to set idAttribute of md toid.
//
// If you now try to addnew book using form, you’ll notice that it issimilar story to delete – mds won’t get persisted on server.
// This is because bb.Cl.add doesn’t automatically sync, but it is easy to fix. In LibVw, we find in views/lib.js change line reading:
//
// this.cl.add( new Book( formData ) );
// …to:
//
// this.cl.create( formData );
// Now, newly created books will get persisted. Actually, they probably won’t if you enterdate. The server expectsdate in UNIX timestamp format (milliseconds since Jan 1, 1970).
// Also, any keywords you enter won’t be stored since server expects array of objects with attr ‘keyword’.
//
// We’ll start by fixing date issue. We don’t really want users to manually enterdate in spec format, so we’ll use standard datepicker from jQ UI.
// Go ahead and createcust jQ UI download containing datepicker from here. Add css theme to site/css/ and JavaScript to site/js/lib. Link to them in index.html:
//
// <link rel="stylesheet" href="css/cupertino/jquery-ui-1.10.0.cust.css">
// “cupertino” is name of style I chose when downloading jQ UI.
//
// The JavaScript file must be loaded after jQ.
//
// <script src="js/lib/jquery.min.js"></script>
// <script src="js/lib/jquery-ui-1.10.0.cust.min.js"></script>
// Now in app.js, binddatepicker to our releaseDate field:
//
// app = app || {};
//
// $(function() {
// $( '#releaseDate' ).datepicker();
// new app.LibVw();
// });
// You should now be able to pickdate when clicking in releaseDate field:
//
//
// Finally, we have to make sure that form input is properly transformed into our storage format. Change addBook function in LibVw to:
//
// addBook: function( e ) {
// e.preventDefault();
//
// formData = {};
//
// $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
// if( $( el ).val() != '' )
// {
// if( el.id === 'keywords' ) {
// formData[ el.id ] = [];
// _.e( $( el ).val().split( ' ' ), function( keyword ) {
// formData[ el.id ].push({ 'keyword': keyword });
// });
// } else if( el.id === 'releaseDate' ) {
// formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
// } else {
// formData[ el.id ] = $( el ).val();
// }
// }
// // Clear input field val
// $( el ).val('');
// });
//
// this.cl.create( formData );
// },
// Our change adds two checks to form input fields. First, we’re checking if current el is keywords input field,
// in which case we’re splitting string on each space and creating array of keyword objects.
//
// Then we’re checking if current el is releaseDate input field, in which case we’re calling datePicker(“getDate”) which returnsDate object.
// We then use getTime function on that to get time in milliseconds.
//
// Now, you should be able to add new books with bothrelease date and keywords!
// Summary
// In this chapter, we made our app persistent by binding it toserver usingREST API.
// We also looked at some problems that might occur when serializing and deserializing data and their sols.
// We looked at dateFormat and datepicker jQ plugins and how to do some more advanced things in our Underscore tps. The code is avail here.
//BBEXT:  // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
//LIBBOOK:  
		/*
		
		
		
		 Exercise 2: Book Lib - Your First RESTful bb.js App
		
		 While our first app gave usgood taste of how bb.js apps are made, most real-world apps will want to communicate withback-end of some sort.
		 Let’s reinforce what we have already learned with another example,
		 but this time we will also createRESTful API for our app to talk to.
		
		 In this exercise, we will build lib app for managing digital books using bb. For each book, we will store tt, author, date of release,
		 and some keywords. We’ll also showpicture of cover.
		
		 Setting up
		 First, we need to createfolder structure for our project. To keep front-end and back-end separate, we will createfolder called site for our client in project root.
		 Within it, we will create css, img, and js directories.
		
		 As with last example, we will split our JavaScript files by their function, so under js directory create folders named lib, mds, cls, and views.
		 Your directory hierarchy should look like this:
		
		 site/
		 css/
		 img/
		 js/
		 cls/
		 lib/
		 mds/
		 views/
		 Download bb, Underscore, and jQ libraries and copy them to your js/lib folder. We needplaceholder image for book covers. Save this image to your site/img folder:
		
		
		 Just like before we need to load all of our dependencies in site/index.html file:
		
		 <!DOCTYPE html>
		 <html lang="en">
		 <head>
		 <meta charset="UTF-8"/>
		 <tt>bb.js Lib</tt>
		 <link rel="stylesheet" href="css/screen.css">
		 </head>
		 <body>
		 <script src="js/lib/jquery.min.js"></script>
		 <script src="js/lib/underscore-min.js"></script>
		 <script src="js/lib/backbone-min.js"></script>
		 <script src="js/mds/book.js"></script>
		 <script src="js/cls/lib.js"></script>
		 <script src="js/views/book.js"></script>
		 <script src="js/views/lib.js"></script>
		 <script src="js/app.js"></script>
		 </body>
		 </html>
		 We should also add in HTML for user interface. We’ll wantform for addingnew book, so add following immediately inside body el:
		
		 <div id="books">
		 <form id="addBook" action="#">
		 <div>
		 <label for="coverImage">CoverImage: </label><input id="coverImage" type="file" />
		 <label for="tt">Title: </label><input id="tt" type="text" />
		 <label for="author">Author: </label><input id="author" type="text" />
		 <label for="releaseDate">Release date: </label><input id="releaseDate" type="text" />
		 <label for="keywords">Keywords: </label><input id="keywords" type="text" />
		 <bt id="add">Add</bt>
		 </div>
		 </form>
		 </div>
		 and we’ll needtp for displaying each book which should be placed before script tags:
		
		 <script id="bookTp" type="text/tp">
		 <img src="<%= coverImage %>"/>
		 <ul>
		 <li><%= tt %></li>
		 <li><%= author %></li>
		 <li><%= releaseDate %></li>
		 <li><%= keywords %></li>
		 </ul>
		
		 <bt class="delete">Delete</bt>
		 </script>
		 To see what this will look like with some data in it, go ahead and addmanually filled-in book to books div.
		
		 <div class="bookContainer">
		 <img src="img/placeholder.png"/>
		 <ul>
		 <li>Title</li>
		 <li>Author</li>
		 <li>Release Date</li>
		 <li>Keywords</li>
		 </ul>
		
		 <bt class="delete">Delete</bt>
		 </div>
		 Open this file in bw and it should look something like this:
		
		
		 Not so great. This is notCSS tutorial, but we still need to do some formatting. Createfile named screen.css in your site/css folder:
		
		 body {
		 background-color: #eee;
		 }
		
		 .bookContainer {
		 outline: 1px solid #aaa;
		 width: 350px;
		 height: 130px;
		 background-color: #fff;
		 float: left;
		 margin: 5px;
		 }
		
		 .bookContainer img {
		 float: left;
		 margin: 10px;
		 }
		
		 .bookContainer ul {
		 list-style-type: none;
		 margin-bottom: 0;
		 }
		
		 .bookContainer bt {
		 float: right;
		 margin: 10px;
		 }
		
		 #addBook label {
		 width: 100px;
		 margin-right: 10px;
		 text-align: right;
		 line-height: 25px;
		 }
		
		 #addBook label, #addBook input {
		 display: block;
		 margin-bottom: 10px;
		 float: left;
		 }
		
		 #addBook label[for="tt"], #addBook label[for="releaseDate"] {
		 clear: both;
		 }
		
		 #addBook bt {
		 display: block;
		 margin: 5px 20px 10px 10px;
		 float: right;
		 clear: both;
		 }
		
		 #addBook div {
		 width: 550px;
		 }
		
		 #addBook div:after {
		 content: "";
		 display: block;
		 height: 0;
		 visibility: hidden;
		 clear: both;
		 font-size: 0;
		 line-height: 0;
		 }
		 Now it looksbit better:
		
		
		 So this is what we want final result to look like, but with more books. Go ahead and copy bookContainer divfew more times if you would like to see what it looks like.
		 Now, we are ready to start developing actual app.
		
		 Creating Md, Cl, Vws, and App
		 First, we’ll needmd ofbook andcl to hold list. These are both very simple, with md only declaring some defaults:
		
		 // site/js/mds/book.js
		
		 app = app || {};
		
		 app.Book = bb.Md.x({
		 df: {
		 coverImage: 'img/placeholder.png',
		 tt: 'No tt',
		 author: 'Unknown',
		 releaseDate: 'Unknown',
		 keywords: 'None'
		 }
		 });
		 // site/js/cls/lib.js
		
		 app = app || {};
		
		 app.Lib = bb.Cl.x({
		 md: app.Book
		 });
		 Next, in order to display books we’ll needview:
		
		 // site/js/views/book.js
		
		 app = app || {};
		
		 app.BookVw = bb.V.x({
		 tagName: 'div',
		 k: 'bookContainer',
		 tp: _.tp( $( '#bookTp' ).h() ),
		
		 r: function() {
		 //this.el is what we defined in tagName. use $el to get access to jQ h() function
		 this.$el.h( this.tp( this.md.atts ) );
		
		 return this;
		 }
		 });
		 We’ll also needview for list itself:
		
		 // site/js/views/lib.js
		
		 app = app || {};
		
		 app.LibVw = bb.V.x({
		 el: '#books',
		
		 i: function( initialBooks ) {
		 this.cl = new app.Lib( initialBooks );
		 this.r();
		 },
		
		 // render lib by rendering each book in its cl
		 r: function() {
		 this.cl.each(function( item ) {
		 this.renderBook( item );
		 }, this );
		 },
		
		 // renderbook by creatingBookVw and appending the
		 // el it renders to lib's el
		 renderBook: function( item ) {
		 bookVw = new app.BookVw({
		 md: item
		 });
		 this.$el.A( bookVw.r().el );
		 }
		 });
		 Note that in init function, we accept array of data that we pass to app.Lib constructor. We’ll use this to populate our cl
		 with some sample data so that we can see everything is working correctly. Finally, we have entry point for our code, along with sample data:
		
		 // site/js/app.js
		
		 app = app || {};
		
		 $(function() {
		 books = [
		 { tt: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
		 { tt: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
		 { tt: 'Scala for Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
		 { tt: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
		 { tt: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
		 ];
		
		 new app.LibVw( books );
		 });
		 Our app just passes sample data tonew instance of app.LibVw that it creates. Since init() constructor in LibVw invokes view’s r() met,
		 all books in lib will be displayed. Since we are passing our entry point ascb to jQ (in form of its $ alias), function will execute when DOM is ready.
		
		 If you view index.html in bw, you should see something like this:
		
		
		 This iscomplete bb app, though it doesn’t yet do anything interesting.
		
		 Wiring in interface
		 Now, we’ll add some functionality to useless form at top and delete bts on each book.
		
		 Adding mds
		 When user clicks add bt, we want to take data in form and use it to createnew md. In LibVw, we need to add event handler for click event:
		
		 evs:{
		 'click #add':'addBook'
		 },
		
		 addBook: function( e ) {
		 e.preventDefault();
		
		 formData = {};
		
		 $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
		 if( $( el ).val() != '' )
		 {
		 formData[ el.id ] = $( el ).val();
		 }
		 });
		
		 this.cl.add( new app.Book( formData ) );
		 },
		 We select all input els of form that haveval and iterate over them using jQ’s each. Since we used same names for ids in our form as keys on our Book md,
		 we can simply store them directly in formData object. We then createnew Book from data and add it to cl. We skip fields withoutval so that defaults will be applied.
		
		 bb passes event object asparameter to event-handling function. This is useful for us in this case since we don’t want form to actually submit and reload page.
		 Addingcall to preventDefault on event in addBook function takes care of this for us.
		
		 Now, we just need to make view render again whennew md is added. To do this, we put
		
		 this.l2( this.cl, 'add', this.renderBook );
		 in init function of LibVw.
		
		 Now, you should be ready to take app forspin.
		
		
		 You may notice that file input for cover image isn’t working, but that is left as exercise to reader.
		
		 Removing mds
		 Next, we need to wire up delete bt. Set up event handler in BookVw:
		
		 evs: {
		 'click .delete': 'deleteBook'
		 },
		
		 deleteBook: function() {
		 //Delete md
		 this.md.destroy();
		
		 //Delete view
		 this.rm();
		 },
		 You should now be able to add and rm books from lib.
		
		 Creating back-end
		 Now, we need to makesmall detour and set upserver withREST api. Since this isJavaScript book, we will use JavaScript to create server using node.js.
		 If you are more comfortable in setting upREST server in another language, this is API you need to conform to:
		
		 url             HTTP Method  Operation
		 /api/books      GET          Get array of all books
		 /api/books/:id  GET          Get book with id of :id
		 /api/books      POST         Addnew book and return book with id attr added
		 /api/books/:id  PUT          Update book with id of :id
		 /api/books/:id  DELETE       Delete book with id of :id
		 The outline for this section looks like this:
		
		
		
		 Your folder structure should look something like this:
		 node_modules/
		 .bin/
		 body-parser/
		 express/
		 mongoose/
		 path/
		 site/
		 css/
		 img/
		 js/
		 index.html
		 package.json
		 Createsimple web server
		 Createfile named server.js in project root containing following code:
		
		 // Module dependencies.
		 app_root = __dirname,
		 express = require( 'express' ), //Web framework
		 bodyParser = require('body-parser'), //Parser for reading request body
		 path = require( 'path' ), //Utilities for dealing with file paths
		 mongoose = require( 'mongoose' ); //MongoDB integration
		
		 //Create server
		 app = express();
		
		 //Where to serve static content
		 app.use( express.static( path.join( app_root, 'site') ) );
		 app.use(bodyParser());
		
		 //Start server
		 port = 4711;
		
		 app.listen( port, function() {
		 $l( 'Express server listening on port %d in %s mode', port, app.settings.env );
		 });
		 We start off by loading modules required for this project: Express for creating HTTP server, Path for dealing with file paths,
		 and mongoose for connecting with db. We then create Express server and configure it using anonymous function. This ispretty standard configuration
		 and for our app we don’t actually need metOverride part. It is used for issuing PUT and DELETE HTTP requests directly fromform,
		 since forms normally only support GET and POST. Finally, we start server by running listen function. The port number used, in this case 4711,
		 could be any free port on your system. I simply used 4711 since it is unlikely to have been used by anything else. We are now ready to run our first server:
		
		 node server.js
		 If you open bw on http://localhost:4711 you should see something like this:
		
		
		 This is where we left off in Part 2, but we are now running onserver instead of directly from files. Great job! We can now start defining routes (URLs)
		 that server should react to. This will be our REST API. Routes are defined by using app followed by one of HTTP verbs get, put, post, and delete, which corresponds to
		 Create, Read, Update and Delete. Let us go back to server.js and definesimple route:
		
		 // Routes
		 app.get( '/api', function( request, response ) {
		 response.send( 'Lib API is running' );
		 });
		 The get function takesURL as first parameter andfunction as second. The function will be called with request and response objects.
		 Now, you can restart node and go to our spec URL:
		
		
		 Connect to db
		 Fantastic. Now, since we want to store our data in MongoDB, we need to defineschema. Add this to server.js:
		
		 //Connect to db
		 mongoose.connect( 'mongodb://localhost/lib_db' );
		
		 //Schemas
		 Book = new mongoose.Schema({
		 tt: String,
		 author: String,
		 releaseDate: Date
		 });
		
		 //Mds
		 BookMd = mongoose.md( 'Book', Book );
		
		 // Configure server
		 app.configure( function() {
		 //parses request body and populates request.body
		 app.use( express.bodyParser() );
		
		 //checks request.body for HTTP met overrides
		 app.use( express.metOverride() );
		
		 //perform route lookup based on url and HTTP met
		 app.use( app.router );
		
		 //Where to serve static content
		 app.use( express.static( path.join( app_root, 'site') ) );
		
		 //Show all errors in development
		 app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
		 });
		 As you can see, schema definitions are quite straight forward. They can be more advanced, but this will do for us. I also extractedmd (BookMd) from Mongo.
		 This is what we will be working with. Next up, we defineGET operation for REST API that will return all books:
		
		 //Getlist of all books
		 app.get( '/api/books', function( request, response ) {
		 return BookMd.find( function( err, books ) {
		 if( !err ) {
		 return response.send( books );
		 } else {
		 return $l( err );
		 }
		 });
		 });
		 The find function of Md is defined like this: function find (conditions, fields, ops, cb) – but since we wantfunction that returns all books we only need cb parameter.
		 The cb will be called with error object and array of found objects. If there was no error, we return array of objects to client using send function of response object.
		 Otherwise, we log error to console.
		
		 To test our API, we need to dolittle typing inJavaScript console. Restart node and go to localhost:4711 in your  bw. Open up JavaScript console.
		 If you are using Google Chrome, go to Vw->Developer->JavaScript Console. If you are using Firefox, install Firebug and go to Vw->Firebug.
		 Most other  bws will havesimilar console. In console type following:
		
		 jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
		 $l( 'Get response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 });
		 …and press enter and you should get something like this:
		
		
		 Here I used jQ to make call to our REST API, since it was already loaded on page.
		 returned array is obviously empty, since we have not put anything into db yet. Let’s go and createPOST route that enables adding new items in server.js:
		
		 //Insertnew book
		 app.post( '/api/books', function( request, response ) {
		 book = new BookMd({
		 tt: request.body.tt,
		 author: request.body.author,
		 releaseDate: request.body.releaseDate
		 });
		
		 return book.save( function( err ) {
		 if( !err ) {
		 $l( 'created' );
		 return response.send( book );
		 } else {
		 $l( err );
		 }
		 });
		 });
		 We start by creatingnew BookMd, passing object with tt, author, and releaseDate atts. The data are collected from request.body.
		 This means that anyone calling this operation in API needs to supplyJSON object containing tt, author, and releaseDate atts.
		 Actually, caller can omit any or all atts since we have not made any of them mandatory.
		
		 We then call save function on BookMd passing incb in same way as with prev get route. Finally, we return saved BookMd.
		 The reason we return BookMd and not just “success” or similar string is that when BookMd is saved it will get _id attr from MongoDB,
		 which client needs when updating or deleting spec book. Let’s try it out again. Restart node and go back to console and type:
		
		 jQ.post( '/api/books', {
		 'tt': 'JavaScript good parts',
		 'author': 'Douglas Crockford',
		 'releaseDate': new Date( 2008, 4, 1 ).getTime()
		 }, function(data, textStatus, jqXHR) {
		 $l( 'Post response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 });
		 ..and then
		
		 jQ.get( '/api/books/', function( data, textStatus, jqXHR ) {
		 $l( 'Get response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 });
		
		 You should now getone-el array back from our server. You may wonder about this line:
		
		 'releaseDate': new Date(2008, 4, 1).getTime()
		 MongoDB expects dates in UNIX time format (milliseconds from start of Jan 1st 1970 UTC), so we have to convert dates before posting.
		 The object we get back, however, containsJavaScript Date object. Also note _id attr of returned object.
		
		
		 Let’s move on to creatingGET request that retrievessingle book in server.js:
		
		
		 //Getsingle book by id
		 app.get( '/api/books/:id', function( request, response ) {
		 return BookMd.findById( request.params.id, function( err, book ) {
		 if( !err ) {            return response.send( book ) }
		 else {            return $l( err )  }  })});
		
		 Here, we use colon notation (:id) to tell Express that this part of route is dynamic. We also use findById function on BookMd to getsingle result.
		 If you restart node, you can getsingle book by adding id prevly returned to URL like this:
		
		 jQ.get( '/api/books/4f95a8cb1baa9b8a1b000006', function( data, textStatus, jqXHR ) {
		 $l( 'Get response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 });
		 Let’s create PUT (update) function next:
		
		 //Updatebook
		 app.put( '/api/books/:id', function( request, response ) {
		 $l( 'Updating book ' + request.body.tt );
		 return BookMd.findById( request.params.id, function( err, book ) {
		 book.tt = request.body.tt;
		 book.author = request.body.author;
		 book.releaseDate = request.body.releaseDate;
		
		 return book.save( function( err ) {
		 if( !err ) {
		 $l( 'book updated' );
		 return response.send( book );
		 } else {
		 $l( err );
		 }
		 });
		 });
		 })
		
		
		 This islittle bigr than prev ones, but is also pretty straight forward – we findbook by id, update its pops, save it, and send it back to client.
		
		 To test this, we need to use more general jQ ajax function. Again, in these examples, you will need to replace id property with one that matches item in your own db:
		
		 jQ.ajax({
		 url: '/api/books/4f95a8cb1baa9b8a1b000006',
		 type: 'PUT',
		 data: {
		 'tt': 'JavaScript The good parts',
		 'author': 'The Legendary Douglas Crockford',
		 'releaseDate': new Date( 2008, 4, 1 ).getTime()
		 },
		 success: function( data, textStatus, jqXHR ) {
		 $l( 'Put response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 }
		 });
		 Finally, we create delete route:
		
		 //Deletebook
		 app.delete( '/api/books/:id', function( request, response ) {
		 $l( 'Deleting book with id: ' + request.params.id );
		 return BookMd.findById( request.params.id, function( err, book ) {
		 return book.rm( function( err ) {
		 if( !err ) {
		 $l( 'Book rmd' );
		 return response.send( '' );
		 } else {
		 $l( err );
		 }
		 });
		 });
		 });
		 …and try it out:
		
		 jQ.ajax({
		 url: '/api/books/4f95a5251baa9b8a1b000001',
		 type: 'DELETE',
		 success: function( data, textStatus, jqXHR ) {
		 $l( 'Delete response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 }
		 });
		 So now our REST API is complete – we have support for all four HTTP verbs. What’s next? Well, until now I have left out keywords part of our books.
		 This isbit more complicated sincebook could have several keywords and we don’t want to rep them asstring, but rather array of strings.
		 To do that, we need another schema. AddKeywords schema right above our Book schema:
		
		 //Schemas
		 Keywords = new mongoose.Schema({
		 keyword: String
		 });
		 To addsub schema to existing schema, we use brackets notation like so:
		
		 Book = new mongoose.Schema({
		 tt: String,
		 author: String,
		 releaseDate: Date,
		 keywords: [ Keywords ]                       *
		 });
		 Also update POST and PUT:
		
		 //Insertnew book
		 app.post( '/api/books', function( request, response ) {
		 book = new BookMd({
		 tt: request.body.tt,
		 author: request.body.author,
		 releaseDate: request.body.releaseDate,
		 keywords: request.body.keywords       *
		 });
		 book.save( function( err ) {
		 if( !err ) {
		 $l( 'created' );
		 return response.send( book );
		 } else {
		 return $l( err );
		 }
		 });
		 });
		
		 //Updatebook
		 app.put( '/api/books/:id', function( request, response ) {
		 $l( 'Updating book ' + request.body.tt );
		 return BookMd.findById( request.params.id, function( err, book ) {
		 book.tt = request.body.tt;
		 book.author = request.body.author;
		 book.releaseDate = request.body.releaseDate;
		 book.keywords = request.body.keywords; *
		
		 return book.save( function( err ) {
		 if( !err ) {
		 $l( 'book updated' );
		 } else {
		 $l( err );
		 }
		 return response.send( book );
		 });
		 });
		 });
		 There we are, that should be all we need, now we can try it out in console:
		
		 jQ.post( '/api/books', {
		 'tt': 'Secrets of JavaScript Ninja',
		 'author': 'John Resig',
		 'releaseDate': new Date( 2008, 3, 12 ).getTime(),
		 'keywords':[
		 { 'keyword': 'JavaScript' },
		 { 'keyword': 'Reference' }
		 ]
		 }, function( data, textStatus, jqXHR ) {
		 $l( 'Post response:' );
		 console.dir( data );
		 $l( textStatus );
		 console.dir( jqXHR );
		 });
		 You now havefully functional REST server that we can hook into from our front-end.
		
		 Talking to server
		 In this part, we will cover connecting our bb app to server through REST API.
		
		 As we mentioned in chapter 3 bb Basics, we can retrieve mds fromserver using cl.fetch() by setting cl.url to be URL of API endpoint. Let’s update Lib cl to do that now:
		
		 app = app || {};
		
		 app.Lib = bb.Cl.x({
		 md: app.Book,
		 url: '/api/books'     *
		 });
		 This results in default impl of bb.sync assuming that API looks like this:
		
		 url             HTTP Method  Operation
		 /api/books      GET          Get array of all books
		 /api/books/:id  GET          Get book with id of :id
		 /api/books      POST         Addnew book and return book with id attr added
		 /api/books/:id  PUT          Update book with id of :id
		 /api/books/:id  DELETE       Delete book with id of :id
		 To have our app retrieve Book mds from server on page load, we need to update LibVw.
		 The bb documentation recommends inserting all mds when page is generated on server side,
		 rather than fetching them from client side once page is loaded. Since this chapter is trying to give youmore complete picture of how to communicate withserver,
		 we will go ahead and ignore that recommendation. Go to LibVw declaration and update init function as follows:
		
		 i: function() {                    // UPDATED
		 this.cl = new app.Lib();    // UPDATED
		 this.cl.fetch({reset: true});   *
		 this.r();
		
		 this.l2( this.cl, 'add', this.renderBook );
		 this.l2( this.cl, 'reset', this.render ); *
		 },
		 Now that we are populating our Lib from db using this.cl.fetch(), init() function no longer takesset of sample data as argument and doesn’t pass anything to app.Lib constructor.
		 You can now rm sample data from site/js/app.js, which should reduce it tosingle statement which creates LibVw:
		
		 // site/js/app.js
		
		 app = app || {};
		
		 $(function() {
		 new app.LibVw();  // UPDATED
		 });
		 We have also addedlistener on reset event. We need to do this since mds are fetched asynchronously after page is rendered. When fetch completes,
		 bb fires reset event, as requested by reset: true option, and our listener re-renders view. If you reload page now, you should see all books that are stored on server:
		
		
		 As you can see, date and keywords lookbit weird. The date delivered from server is converted intoJavaScript Date object and when applied to underscore tp,
		 it will use toString() function to display it. There isn’t very good support for formatting dates in JavaScript so we will use dateFormat jQ plugin to fix this.
		 Go ahead and download it from here and put it in your site/js/lib folder. Update book tp so that date is displayed with:
		
		 <li><%= $.format.date( new Date( releaseDate ), 'MMMM yyyy' ) %></li>
		 and addscript el for plugin
		
		 <script src="js/lib/jquery-dateFormat-1.0.js"></script>
		 Now, date on page should lookbit better. How about keywords? Since we are receiving keywords in array we need to execute some code that generatesstring of separated keywords.
		 To do that, we can omit equals character in tp tag which will let us execute code that doesn’t display anything:
		
		 <li><% _.e( keywords, function( keyobj ) {%> <%= keyobj.keyword %><% } ); %></li>
		 Here I iterate over keywords array using Underscore each function and print out every single keyword. Note that I display keyword using <%= tag.
		 This will display keywords with spaces between them.
		
		 Reloading page again should look quite decent:
		
		
		 Now go ahead and deletebook and then reload page: Tadaa! deleted book is back! Not cool, why is this?
		 This happens because when we get BookMds from server they have _id attr (notice underscore),
		 but bb expects id attr (no underscore). Since no id attr is present, bb sees this md as new and deletingnew md doesn’t need any synchronization.
		
		 To fix this, we can use parse function of bb.Md. The parse function lets you edit server response before it is passed to Md constructor. Addparse met to Book md:
		
		 parse: function( response ) {
		 response.id = response._id;
		 return response;
		 }
		 Simply copy val of _id to needed id attr. If you reload page, you will see that mds are actually deleted on server when you press delete bt.
		
		 Another, simpler way of making bb recognize id as its unique identifier is to set idAttribute of md toid.
		
		 If you now try to addnew book using form, you’ll notice that it issimilar story to delete – mds won’t get persisted on server.
		 This is because bb.Cl.add doesn’t automatically sync, but it is easy to fix. In LibVw, we find in views/lib.js change line reading:
		
		 this.cl.add( new Book( formData ) );
		 …to:
		
		 this.cl.create( formData );
		 Now, newly created books will get persisted. Actually, they probably won’t if you enterdate. The server expectsdate in UNIX timestamp format (milliseconds since Jan 1, 1970).
		 Also, any keywords you enter won’t be stored since server expects array of objects with attr ‘keyword’.
		
		 We’ll start by fixing date issue. We don’t really want users to manually enterdate in spec format, so we’ll use standard datepicker from jQ UI.
		 Go ahead and createcust jQ UI download containing datepicker from here. Add css theme to site/css/ and JavaScript to site/js/lib. Link to them in index.html:
		
		 <link rel="stylesheet" href="css/cupertino/jquery-ui-1.10.0.cust.css">
		 “cupertino” is name of style I chose when downloading jQ UI.
		
		 The JavaScript file must be loaded after jQ.
		
		 <script src="js/lib/jquery.min.js"></script>
		 <script src="js/lib/jquery-ui-1.10.0.cust.min.js"></script>
		 Now in app.js, binddatepicker to our releaseDate field:
		
		 app = app || {};
		
		 $(function() {
		 $( '#releaseDate' ).datepicker();
		 new app.LibVw();
		 });
		 You should now be able to pickdate when clicking in releaseDate field:
		
		
		 Finally, we have to make sure that form input is properly transformed into our storage format. Change addBook function in LibVw to:
		
		 addBook: function( e ) {
		 e.preventDefault();
		
		 formData = {};
		
		 $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
		 if( $( el ).val() != '' )
		 {
		 if( el.id === 'keywords' ) {
		 formData[ el.id ] = [];
		 _.e( $( el ).val().split( ' ' ), function( keyword ) {
		 formData[ el.id ].push({ 'keyword': keyword });
		 });
		 } else if( el.id === 'releaseDate' ) {
		 formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
		 } else {
		 formData[ el.id ] = $( el ).val();
		 }
		 }
		 // Clear input field val
		 $( el ).val('');
		 });
		
		 this.cl.create( formData );
		 },
		 Our change adds two checks to form input fields. First, we’re checking if current el is keywords input field,
		 in which case we’re splitting string on each space and creating array of keyword objects.
		
		 Then we’re checking if current el is releaseDate input field, in which case we’re calling datePicker(“getDate”) which returnsDate object.
		 We then use getTime function on that to get time in milliseconds.
		
		 Now, you should be able to add new books with bothrelease date and keywords!
		
		
		 Summary
		 In this chapter, we made our app persistent by binding it toserver usingREST API.
		 We also looked at some problems that might occur when serializing and deserializing data and their sols.
		 We looked at dateFormat and datepicker jQ plugins and how to do some more advanced things in our Underscore tps. The code is avail here.
		
		 */
	}
}