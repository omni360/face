$stc('', '../art', '_data', 'superWeb/both', 'superWeb')
$stc(


		'wid',
		
		'bone', 'boneLoop',

		'knock', 'knockLoop', 'knockCust',
		
		 'loop',
		 
		   'sync',
		 
		   'sappy'
		   
)

Both = ['superUnder', 'superJ', 'superTime']

SuperWeb=[
		
		
	'jq', 'first', 'second','cssData', 'superJQ', 'superAnim', 'sty', 'rules' ,
	'flex',  'media' ,
	 'superHTML', 'superInput',
	  'superImage', 'htmlPlus',
	  
	 'checkbox',
	  
	'$mock'
]

Bone= [ 

	'bb', 'bonePre',
	'bone',
	
	'models','collections','views','router',
	'routerApps',
		
	'bbPerfect', 'bbRecs',
	
	'bbApps',  
 'bbTweet', 'local', 'superTemplate',
 
 'boneQuery',
 
 'course',//'bbBook',
 'bbAdder', 'blogRoll', 'bbSort', 'bbLoop', 
 'bbTweet', 
 'dirt', 'tut','breakRoll','bbLS','local'
  
]
 
 Knock=[
 
 
	 'ko', 'knock00', 'knock0', 'knock',    'koEls',
	 'koApps','eachEls',
	 
	//  'customizing',
	 'koAppsBasic', 'koAppsFancy', 'like',
	 
	 //'scrp',
	// 'liveExamples',
	 'list','workingEachApps',
	  'documentRouter'
 
 ]
  
Wid = [
		
	'jqui',   'checkbox',
	  'wid', 'calc', 'uiApps', 'uiAppsMore',
	'widFilt', 
	 'widSuperDlg','widLS','cheese','countdownTimer','widCaption'
]

 
$a.g('/box/:app', function (q, p) {
	
	app = q.params.app.toUpperCase()
	html = ''//' - '
	html += '<link rel="stylesheet" type="text/css"  href="/jqui.css"></script>'
	html += '<link rel="stylesheet" type="text/css"  href="/theme.css"></script>'
	html += $js(
			
			Both, SuperWeb,
			
			Wid,
			Bone,
			Knock, ['sap']
			
	)	// Geo, Can, Stage, Fiz

	html += '<script> $(function(){ $l("app:  ' + app + '"); ' + app + '()})</script>'
	p.send(html)
	
})


function graphics(){
	
	//Deps: 'dfDefs' 'ko', 'jqui', 'gpc', 'bx', 'cjs', 'cjsMC',
	
	Can = ['superCan']
	
	Geo = ['clip', 'clipDraw', 'geo', 'clump', 'scrape', 
	'separate', 'polyCircle', 'explode']
	
	Create = ['easel', 'shapes', 'objects',
	'graphics', 'container', 'writing', 'loader',
	'official', 'stageFilt',
	'justEaselApps', 'stageDrawApps', 'bmFillApps','tween',
	 'animLoop', 'shake', 'justEaselApps']

	Fiz = ['box', 'world', 'debug', '$walls', '$vec', '$state', '$shapes', '$make',
	'$generate', '$fiz', '$mouseWorld', '$query', 'mouseQuery', 'worldEach',
	'$collide', '$contact', '$filtering', '$handle', '$listen']


}

// <---  100 google fonts?