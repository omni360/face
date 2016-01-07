Stage = ['cjs', 'cjsMC',
	'createCore', 'cjsEvents', 'stage', 'ticker', 'loader', 'tran',
	'objects', 'matrix', 'cjsPoly',
	'cjsGx', 'cjsShape', 'curve', 'domElOb', 'cjsGrad',
	'reggy', 'transform', 'cjsText', 'container',
	'cjsCir', 'cjsRec', 'official', 'interesting','cache', 'filter',
'cjsColor',

	'alphaMaskFilter', 'alphaMapFilter', 'blurFilter','graphTest',
	
	 
	   'cache',
	'colorFilter', 'colorMatrixFilter', 'bitmap', 'cjsMouse',
	'tween', 'easing', 'sprite', 'ssBuilder', 'zoe', 'SSData',
	'movie', 'timeline', 'gunnertron', 'layers'
]
$stc('', '../art',




		'web/both', 'web','web/events',
		 'web/css', 'web/dom', 'web/html', 'web/js',
		'web/front/wid',
		  'web/front/nok',
		    'web/front/bone',
		'web/front/sync',
		'graphics', 'graphics/can','graphics/gpc', 'graphics/ctx',
		'easel',
		'easel/bitmap', 'easel/dob', 'easel/dobs', 'easel/draw', 'easel/events',
		'easel/filter', 'easel/shapes',
		'anim',
		'anim/flash',
		  'anim/sprite',
		   'anim/movieClip',
		
		'mashUp','sync',
		'wappy','wappy/work',
		'wappy/muggy',
		'muggy',
		'fiz/box',
		'fiz',
		'box/core',
		'box',
		'box/body', 'box/fixture', 'box/shapes', 'box/world',
		'fiz/bods', 'fiz/fixts', 'fiz/shapes', 'fiz/world',
		'box/geo', 'box/collide',
			'worldQuery','collide','joints','control','yip','arcade','games','geo',
			'bxApps',
			'Joints',
			'fiz/body','fiz/fixture','fiz/world','fiz/joint','fiz/query','fiz/collide','fiz/control',
			'fiz/box/body','fiz/box/fixture','fiz/box/world','fiz/box/core'
)





	Box = [
		'bx', 'box0', 'boxPt', 'vec', 'mat',
		'world', 'worldBod',
		'worldFix',
		'worldPol',
		'debug',
		'bodies', 'bodyDefs', 'fixtures', 'fixtureDefs',
		'fixShapes',
		'bodShapes',
		'shapes',
		'edges', 'walls',
		'bodFix', 'forces',
		'boxApps', 'bxMouseApps',
		'bxShapeApps',
		'edgeApps', 'controlApps', 'fixApps', 'boxBool',
		'fizApps', 'forcesApps', 'mouseJtApps',
		'worldApps', 'bxWebsiteEx1', 'bxWebsiteEx2',
		'boxEach', 'queryAB', 'queryPoint',
		'joints', 'distanceJt', 'mouseJt', 'boxKlas'
	]
	web()
 mods()

jsArrs= [
	Both, Web,  Graphics,Stage//, Box, Front, Wap
]

$a.get('/box/:app*', function (q, p) {
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(jsArrs)
	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
})
function web(){
	Both = ['superUnder', 'superJ', 'superTime']
	Web = ['jq',
		'webColor', 'webCss', 'webFont', 'web',
		'rules', 'media', 'flex', 'styles',
		'sJQ',  'attributes', 'qAnim', 'traverse',
		'html', 'inputs', 'lists', 'submit',
		'root', 'nest', 'appy', 'localStorage', 
		'll','l',
		
		'webEvents',
		'webMouse',
		 'webDrag',
		 'press',
		'webTouch',
		'webKeys'
	
	
	]
}
function mods() {
	Graphics = [
		'gpc',   'pureDa',
		'jqGraphics', 'gpClipper', 'superCtx', 'superCan',
		'ctxDraw', 'ctxImg', 'ctxGlobComp', 'ctxGrad', 'ctxMug', 'ctxPixels', 'ctxShad',
		'ctxText', 'ctxTransform',
		'canDraw', 'canImg', 'canGlobComp',   'canMug', 'canPixels', 'canShad',
		'canText', 'canTransform',
		'gpcCtx',
		'parallax'
	]
	Front = [
		'mock',
		'jqui', 'uiWids', 'custWids', 'widLS', 'effects', 'interactions', 'dog', 'wid', 'widLS',
		'bb', 'bone', 'bbColl', 'bbDirt', 'bbEvt', 'bbFiltColl', 'bbRtr', 'bbView', 'bbLS', 'bbServer', 'bbServerMore',
		'ko', 'knock', 'koCustom', 'koMore'
	]

	Wap = ['wappy', 'users', 'login', 'social', 'widUser']
}
 