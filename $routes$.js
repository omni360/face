$stc('', '../art', '_data', 'both', 'superWeb', 'superCSS','rules','front',
'font/bone', 'front/jet', 'front/knock', 'front/templating'
		// 'front/both', 'front/superWeb', 'front/can',
		//'front/bone', 'front/nok', 'front/UI', 'front/wid',
		//'geo',
		//'stage', 'superEasel', 'stage/anim', 'stage/loader',
		//'fiz', 'fiz/collide', 'fiz/query', 'fiz/joints', 'fiz/control', 
		//'spaz', 'spaz/cam', 'spaz/arcade', 'wappy'
)

Deps = [
	  'dfDefs',
	 
	 // 'ko', 'jqui', 'gpc', 'bx', 'cjs', 'cjsMC',
]
Both = ['superUnder', 'superJ', 'superTime']
Web=['jq', 'first', 'second','cssData', 'superJQ']
Css=[ 'sty',    'rules' ]
Flex = ['flex',  'media' ]
Html = [ 'superHTML','htmlPlus', 'superInput', 'superImage', 'superCan' ]
SuperWeb=['superAnim' ] 
Nok = ['ko','nok',  'koApps' //, 'koArrFilter', 'koPlus', 'grid'
]
Jet = ['jqui', 'widget' ]
//, 'jquiApps', 'calc', 'multi', 'progBar', 'capt', 'sDialog', 'widFilt']
Bone = [
	'bb' //, 'bbViews', 'bbRouter', 'bbLocalStorage', 'bbAppsData', 'bbColls', 'bbWasPerfect', 'bbAvail', 'bbApps', 'bbAppsBasic', 'bbAppsCool', 'bbAppsMore'
]
Geo = ['clip', 'clipDraw','geo', 'clump', 'scrape', 'separate', 'polyCircle', 'explode']
Stage = [
	'easel', 'dob', 'stageDraw', 'solve', 'iso',
	'stageApps', 'stageDrawApps', 'stageWorks', 'official',
	'tween', 'animLoop', 'shake', 'justEaselApps'
]
Easel = ['easel', 'shapes', 'objects', 
          'graphics','container',   'writing', 'loader',
	'official','stageFilt',
	'justEaselApps', 'stageDrawApps','bmFillApps']
Fiz = [  'box', 'world', 'debug', '$walls', '$vec', '$state', '$shapes','$make',
	'$generate', '$fiz', '$mouseWorld', '$query', 'mouseQuery', 'worldEach',
	'$collide', '$contact', '$filtering', '$handle','$listen'

 
	]
$a.g('/box/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	
 
	html += $js(
			  Both,  Web, Css, Flex,  Html, SuperWeb,
			
			//Front, Nok,
			Jet, 
			Bone,
			Nok
			// Easel, Fiz, Geo
	
	)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	
	p.send(html)
})