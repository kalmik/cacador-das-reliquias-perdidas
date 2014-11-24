#pragma strict

var gridUnit : GameObject;
var gridUnitBlocked : GameObject;
var terrain : GameObject;

var terrainSize : Vector2;

function Awake () {
	for(var j: int = 0; j < terrainSize.y; j++){
		for(var i: int = 0; i < terrainSize.x; i++){
			var position = new Vector3(i,j*-1,0);
			var gu : GameObject;
			if(i == 0 || j == 0 || i == terrainSize.x-1 || j == terrainSize.y-1){
				gu = Instantiate (gridUnitBlocked, position, Quaternion.identity) as GameObject;
				gu.transform.parent = terrain.transform;
				gu.name = "GRID_"+i+"_"+j;
				gu.tag = 'GridBlocked';
				continue;
			}
			gu = Instantiate (gridUnit, position, Quaternion.identity) as GameObject;
			gu.transform.parent = terrain.transform;
			gu.name = "GRID_"+i+"_"+j;
		}
	}
	
}

function Update () {

}