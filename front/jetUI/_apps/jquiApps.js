$l('jquiApps')
 ///// /   commm   apps ////////////////////
UI2= TIP = function () {
	z()
	$.p([
		$.a('text goes here: ').ti('description, yo'),
		$.ip().ti('little help..')
	])//.tooltip()
	$(document).tooltip()
}
UI5 = TIP = function () {
	z()
	$.p([
		$.a('text goes here: ').ti('description, yo'),
		$.ip().ti('little help..')
	])//.tooltip()
	$(document).tooltip()
}
UI6 = DIAL = function () {
	$.dlg = function (msg) {
		var dlg = $("#response-dialog")
		if (!dlg[0]) {
			dlg = $.d().at({
				title: "Messaage",
				id: "response-dialog"
			})
		}
		dlg.html(msg).dialog({
			autoOpen: true,
			width: 400, modal: true,
			closeOnEscape: true,
			buttons: {
				Ok: function () {
					dlg.dialog("close")
				}
			}
		})
	}
	$l('dial')
	$.x(null, 'dialog')
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(3, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
UI8 = DIAL = function () {
	$.dlg = function (msg) {
		var dlg = $("#response-dialog")
		if (!dlg[0]) {
			dlg = $.d().at({
				title: "Messaage",
				id: "response-dialog"
			})
		}
		dlg.html(msg).dialog({
			autoOpen: true,
			width: 400, modal: true,
			closeOnEscape: true,
			buttons: {
				Ok: function () {
					dlg.dialog("close")
				}
			}
		})
	}
	$l('dial')
	$.x(null, 'dialog')
	$.d([
		$.p('This is the default dialog which is useful for displaying information'),
		$.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')
	$("#dialog").dialog()
	$.dlg('dialog 1')
	_.in(3, function () {
		$.dlg('dialog 2')
		$.dlg('dialog 3')
		$.dlg('dialog 4')
	})
}
PROG = function () {
	z();
	$.d().id('progressbar')
	$("#progressbar").progressbar({
		value: false
	})
}
UI9 = PROG = function () {
	z();
	$.d().id('progressbar')
	$("#progressbar").progressbar({
		value: false
	})
}
///// /   navigate  apps ////////////////////
UISLMENU = USM = function () {
	$.x()
	$.fn.slM = function () {
		var g = G(arguments)
		this.selectmenu.apply(this, g)
		return this
	}
	$CSS({
		fieldset: {B: 0},
		label: {d: 'b', M: '30px 0 0 0'},
		select: {w: 200},
		_overflow: {h: 200}
	})
	$.d([$.f().at('action', '#').A($('<fieldset>').A(
			$.lb('select a speed').for('speed'),
			$.sl().id('speed').n('speed').A(
					$.op('slower'), $.op('slow'),
					$.op('medium').at('selected', 'selected'),
					$.op('fast'), $.op('faster')),
			$.lb('Select a file').for('files'),
			$.sl().n('files').id('files').A(
					$.og("Scripts").A(
							$.op('jquery', 'jquery'),
							$.op('ui.juqery.jus', 'jqueryui')),
					$.og("Other files").A(
							$.op('some unknown file', 'somefile'),
							$.op('Some other file w long option text', 'someotherfile'))),
			$.lb('Select a number').for('number'),
			$.sl().n('number').id('number').A(
					$.op('1'), $.op('2').at('selected', "selected"),
					$.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
					$.op('8'), $.op('9'), $.op('10'),
					$.op('11'), $.op('12'), $.op('13'), $.op('14'),
					$.op('15'), $.op('16'), $.op('17'), $.op('18'),
					$.op('19')
			)))]).K('demo')
	$("#speed").selectmenu()
	$("#files").selectmenu()
	$("#number").selectmenu().selectmenu("menuWidget").K("overflow")
}
UI10 = MENU = function () {
	z();
	$CSS({'.ui-menu': {w: 150}})
	$.ul([
		$.li(['Hockey']),
		$.li(['Football', $.ul([
			$.li('Iain Hume'),
			$.li('Del Piero'),
			$.li('David James')])]),
		$.li(['Cricket', $.ul([
			$.li('Sachin'),
			$.li('Ganguly'),
			$.li('Dravid'),
			$.li('yano')
		])]).A(),
		$.li(['KickBoxing']).K('ui-state-disabled'),
		$.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
	]).id('menu')
	$("#menu").menu()
}
UI22= UITAB = function () {
	z()
	$.d([
		$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
			$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
			$('<li><a href="#fragment-3"><span>Three</span></a></li>')
		]),
		$.dI('fragment-1').A(
				$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
		$.dI('fragment-2').A(l1),
		$.dI('fragment-3').A(l2)
	]).tabs()
}
UI56 = AUTOCP = function () {
	$.x('x', 'autocp')
	availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
		"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
		"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
	$.d([
		$.lb('Tags:').for('tags'), $.ip().id('tags')
	]).K('ui-widget')
	$(function () {
		$("#tags").autocomplete({source: availableTags})
	})
	function other() {
		AUTOCOMP = function () {
			z()
			$.lb('Select a programming language: ', "autocomplete")
			$.ip().id("autocomplete")
			tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
			$("#autocomplete").autocomplete({
				source: function (request, response) {
					var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
					response($.grep(tags, function (item) {
						return matcher.test(item);
					}));
				}
			})
		}
	}
}
UI54 = ACCORD = ACC = function () {
	z()
	ul = $.ul([
		$.li('List item 1'),
		$.li('List item 2'),
		$.li('List item 3')
	])
	$.d([
		$.h3('Section 1'), $.d([$.p(l1)]),
		$.h3('Section 2'), $.d([$.p(l2)]),
		$.h3('Section 3'), $.d([$.p(l1), ul])
	]).accordion()
}
UISLMENU = USM = function () {
	$.x()
	$.fn.slM = function () {
		var g = G(arguments)
		this.selectmenu.apply(this, g)
		return this
	}
	$CSS({
		fieldset: {B: 0},
		label: {d: 'b', M: '30px 0 0 0'},
		select: {w: 200},
		_overflow: {h: 200}
	})
	$.d([$.f().at('action', '#').A($('<fieldset>').A(
			$.lb('select a speed').for('speed'),
			$.sl().id('speed').n('speed').A(
					$.op('slower'), $.op('slow'),
					$.op('medium').at('selected', 'selected'),
					$.op('fast'), $.op('faster')),
			$.lb('Select a file').for('files'),
			$.sl().n('files').id('files').A(
					$.og("Scripts").A(
							$.op('jquery', 'jquery'),
							$.op('ui.juqery.jus', 'jqueryui')),
					$.og("Other files").A(
							$.op('some unknown file', 'somefile'),
							$.op('Some other file w long option text', 'someotherfile'))),
			$.lb('Select a number').for('number'),
			$.sl().n('number').id('number').A(
					$.op('1'), $.op('2').at('selected', "selected"),
					$.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
					$.op('8'), $.op('9'), $.op('10'),
					$.op('11'), $.op('12'), $.op('13'), $.op('14'),
					$.op('15'), $.op('16'), $.op('17'), $.op('18'),
					$.op('19')
			)))]).K('demo')
	$("#speed").selectmenu()
	$("#files").selectmenu()
	$("#number").selectmenu().selectmenu("menuWidget").K("overflow")
}
MENU = function () {
	z();
	$CSS({'.ui-menu': {w: 150}})
	$.ul([
		$.li(['Hockey']),
		$.li(['Football', $.ul([
			$.li('Iain Hume'),
			$.li('Del Piero'),
			$.li('David James')])]),
		$.li(['Cricket', $.ul([
			$.li('Sachin'),
			$.li('Ganguly'),
			$.li('Dravid'),
			$.li('yano')
		])]).A(),
		$.li(['KickBoxing']).K('ui-state-disabled'),
		$.li(['Tennis', $.ul([$.li().A('Patrick Rafter')])])
	]).id('menu')
	$("#menu").menu()
}
UITAB = function () {
	z()
	$.d([
		$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
			$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
			$('<li><a href="#fragment-3"><span>Three</span></a></li>')
		]),
		$.dI('fragment-1').A(
				$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
		$.dI('fragment-2').A(l1),
		$.dI('fragment-3').A(l2)
	]).tabs()
}
UI123 = AUTOCP = function () {
	$.x('x', 'autocp')
	availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
		"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
		"JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]
	$.d([
		$.lb('Tags:').for('tags'), $.ip().id('tags')
	]).K('ui-widget')
	$(function () {
		$("#tags").autocomplete({source: availableTags})
	})
	function other() {
		AUTOCOMP = function () {
			z()
			$.lb('Select a programming language: ', "autocomplete")
			$.ip().id("autocomplete")
			tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
			$("#autocomplete").autocomplete({
				source: function (request, response) {
					var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
					response($.grep(tags, function (item) {
						return matcher.test(item);
					}));
				}
			})
		}
	}
}
UI167 = ACCORD = ACC = function () {
	z()
	ul = $.ul([
		$.li('List item 1'),
		$.li('List item 2'),
		$.li('List item 3')
	])
	$.d([
		$.h3('Section 1'), $.d([$.p(l1)]),
		$.h3('Section 2'), $.d([$.p(l2)]),
		$.h3('Section 3'), $.d([$.p(l1), ul])
	]).accordion()
}
/// inputs apps //////////////
DATEPICK = function () {
	$.x('b', 'jqui')
	$.d().id("datepicker")
	$("#datepicker").datepicker()
	function alt() {
		$.p('Date: ').A($.ip().id('dtp'))
		$('#dtp').dtp()
		d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
	}
}
UI1 = DATEPICK = function () {
	$.x('b', 'jqui')
	$.d().id("datepicker")
	$("#datepicker").datepicker()
	function alt() {
		$.p('Date: ').A($.ip().id('dtp'))
		$('#dtp').dtp()
		d = $.d('b', 400, 400).A(ip = $.ip('date').datepicker()).pad(20)
	}
}
RBUI = BUTSET = RADIOBTUI = function () {
	z()
	/*
	 $.f([$.fs([$.lg('Favorite jQuery Project'),
	 $.dI('radio',[
	 $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
	 $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
	 $.lb('Color','color'), $.rb('project', 'color')
	 ])
	 ])])
	 */
	$.dI('radio', [
		$.lb('Sizzle', 'sizzle'), $.rb('project', 'sizzle'),
		$.lb('Qunitz', 'color'), $.rb('project', 'color'),
		$.lb('Color', 'qunit'), $.rb('project', 'qunit', '+')
	])
	$("#radio").buttonset()
}
UI122 = RBUI = BUTSET = RADIOBTUI = function () {
	z()
	/*
	 $.f([$.fs([$.lg('Favorite jQuery Project'),
	 $.dI('radio',[
	 $.lb('Sizzle','sizzle'),  $.rb('project', 'sizzle'),
	 $.lb('QUnitz','qunit'),  $.rb('project', 'qunit','+'),
	 $.lb('Color','color'), $.rb('project', 'color')
	 ])
	 ])])
	 */
	$.dI('radio', [
		$.lb('Sizzle', 'sizzle'), $.rb('project', 'sizzle'),
		$.lb('Qunitz', 'color'), $.rb('project', 'color'),
		$.lb('Color', 'qunit'), $.rb('project', 'qunit', '+')
	])
	$("#radio").buttonset()
}
SLIDER = RANGEUI = function () {
	z();
	$CSS({_slider: {M: 12}});
	$.dI('slider').slider()
}
UI133 = SLIDER = RANGEUI = function () {
	z();
	$CSS({_slider: {M: 12}});
	$.dI('slider').slider()
}
NUMSPINN = function () {
	$.ip().A().C('o').spinner()
}
UI14 = NUMSPINN = function () {
	$.ip().A().C('o').spinner()
}
UIBUT = function () {
	z()
	$.C('o')
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	$('<div>').A().A('hello').WH(70, 50).button()
	$('<div>').A().A('hello').WH(70, 50).H(200).css({
		borderColor: 'blue',
		borderStyle: 'dashed',
		borderWidth: 200
	})
}//
UI15 = UIBUT = function () {
	z()
	$.C('o')
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	$('<div>').A().A('hello').WH(70, 50).button()
	$('<div>').A().A('hello').WH(70, 50).H(200).css({
		borderColor: 'blue',
		borderStyle: 'dashed',
		borderWidth: 200
	})
}//
CBW1 = function () {
	z()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	s = $('<span>').A(
			$('<div>').A(
					$.cb().id('sm'),
					$.lb('Small', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('md'),
					$.lb('Medium', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('lg'),
					$.lb('Large', 'check').K('ui-widget'))
	).A()
	$("input[type='checkbox']").checkbox();
}
UI13 = CBW = function () {
	z()
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> <div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div> <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
	$(html).A()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	// Create three checkbox instances.
	$(function () {
		$("input[type='checkbox']").checkbox();
	});
}
CBW1 = function () {
	z()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	s = $('<span>').A(
			$('<div>').A(
					$.cb().id('sm'),
					$.lb('Small', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('md'),
					$.lb('Medium', 'check').K('ui-widget')
			),
			$('<div>').A(
					$.cb().id('lg'),
					$.lb('Large', 'check').K('ui-widget'))
	).A()
	$("input[type='checkbox']").checkbox();
}
UI12 = CBW = function () {
	z()
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> <div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div> <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
	$(html).A()
	$.widget("app.checkbox", {
		_create: function () {
			
			// Call the default widget constructor first.
			this._super();
			// Hide the HTML checkbox, then insert our button.
			this.element.addClass("ui-helper-hidden-accessible");
			this.button = $("<button/>").insertAfter(this.element);
			// Configure the button by adding our widget class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			this.button.addClass("ui-checkbox")
					.text("checkbox")
					.button({
						text: false,
						icons: {
							primary: "ui-icon-blank"
						},
						create: function (e, ui) {
							$(this).removeAttr("title");
						}
					});
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			this._on(this.button, {
				click: function (e) {
					this.element.prop("checked", !this.element.is(":checked"));
					this.refresh();
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			this.refresh();
		},
		_destroy: function () {
			
			// Standard widget cleanup.
			this._super();
			// Display the HTML checkbox and remove the button.
			this.element.removeClass("ui-helper-hidden-accessible");
			this.button.button("destroy").remove();
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.is(":checked") ?
						"ui-icon-check" : "ui-icon-blank"
			});
		}
	});
	// Create three checkbox instances.
	$(function () {
		$("input[type='checkbox']").checkbox();
	});
}
SPANFOCUS = FOC = function () {
	$.x()
	$.sp('Some Span').id("my-span").at('tabindex', "0")
	$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
	$.sp('Some Span2').id("my-span2").at('tabindex', "0")
	document.getElementById('my-span').focus()
	document.getElementById('my-span2').focus()
}
UI111 = SPANFOCUS = FOC = function () {
	$.x()
	$.sp('Some Span').id("my-span").at('tabindex', "0")
	$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
	$.sp('Some Span2').id("my-span2").at('tabindex', "0")
	document.getElementById('my-span').focus()
	document.getElementById('my-span2').focus()
}
 