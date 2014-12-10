#pragma strict
import System;

var controls : String[];
var spriteAnimator : Animator;
var velocity : float;
var actualGridPosition : Vector3;
var lastDirection: int;
var terrain: GameObject;
var buraco: GameObject;
var prePrize : GameObject;

var caveBool : Boolean;
var jumpSceneOnCaveAll : Boolean;
var xMinToCave : int;
var xMaxToCave : int;
var yMinToCave : int;
var yMaxToCave : int;

var foundAnyThing : Boolean;
var coordsToFound : Vector2;

var portal : Boolean;
var coordsToPortal : Vector2;
var portalScene : String;

var end: Boolean = false;

var time : int;
function Awake(){
	if(time == 0){
		var timeOBJ : GameObject = GameObject.Find("Time");
		timeOBJ.active = false;
	}
	else
	{
		timeCountDown();
	}
}

function Start () {
	spriteAnimator = GetComponent(Animator);
	controls[0] = "w";
	controls[1] = "a";
	controls[2] = "s";
	controls[3] = "d";
	lastDirection = 2;
	terrain = GameObject.Find("Terrain");

	
}

function timeCountDown()
{
	var clock : GameObject = GameObject.Find("Clock");
	var clockText :  UnityEngine.UI.Text = clock.GetComponent("Text");
	clockText.text = time-1+":"+"59";
	for(var t=time-1; t>=0;t--){
		if(t<1) clockText.color = new Color(255,0,0,1);
		for(var h=59;h>=0;h--){
			var ht = h < 10 ? "0"+h.ToString() : h.ToString();
			clockText.text = t+":"+ht;
			yield WaitForSeconds(1);
		}
		if(t<=0) Application.LoadLevel('menu');
	}
}

function Update () {
	//checando direção de player-----------------------------------------------------------
	var moveUp    : String = Input.GetKey(controls[0]) ? "1" :  "0";
	var moveLeft  : String = Input.GetKey(controls[1]) ? "1" :  "0";
	var moveDown  : String = Input.GetKey(controls[2]) ? "1" :  "0";
	var moveRight : String = Input.GetKey(controls[3]) ? "1" :  "0";

	var control : String = String.Concat(moveUp,moveLeft);
	    control = String.Concat(control,moveDown);
	    control = String.Concat(control,moveRight);
	/* --------------------------------------------------------
		o controle é mapeado em um numero binario
	 	
	 	1000 -> Movendo para cima     -> Animator.direction = 8
	 	0100 -> Movendo para esquerda -> Animator.direction = 4
	 	0010 -> Movendo para direita  -> Animator.direction = 2
	 	0001 -> Movendo para baixo    -> Animator.direction = 1
	 	0000 -> stand by              -> Animator.walk = false
	--------------------------------------------------------- */ 
	var direction : int = Convert.ToInt32(control,2);
	//modificando a direção do player e movendo;
	ChangeDirection(direction);
	//overOnTile();
	//cavando
	if(Input.GetKeyDown('space') && rigidbody2D.velocity == Vector3(0,0,0) && caveBool){
		spriteAnimator.SetBool('cave',true);
	}

	var position = getGridPosition();

	if(portal && position.x == coordsToPortal.x && Math.Abs(position.y) == coordsToPortal.y && !end){
		var prize :GameObject = Instantiate(prePrize) as GameObject;
		Time.timeScale = 0;
		end = true;
	}
	
}
function overOnTile(){
	var onTile : GameObject = getGrid(getGridRelativePosition());
	var allTiles : GameObject[] = GameObject.FindGameObjectsWithTag('OnTop');
	for(var i : int = 0; i<allTiles.length;i++){
		allTiles[i].renderer.material.color = Color.white;
	}
	var hoverColor = new Color(1,.5,0,.7);
	onTile.transform.Find('tile3').renderer.material.color = hoverColor;
	onTile.transform.Find('tile2').renderer.material.color = hoverColor;
	onTile.transform.Find('tile1').renderer.material.color = hoverColor;
	onTile.transform.Find('tile0').renderer.material.color = hoverColor;
}
//Movimentação do player---------------------------------------------------------------------
function ChangeDirection(direction : int)
{
	//verifica se vai para outra direção
	
	//verificando se há alguma direção possivel, Obs: detecta multiplos comandos e ignora
	if(direction == 1 || direction == 2 || direction == 4 || direction == 8)
	{
		if(spriteAnimator.GetInteger('direction') != direction){
			spriteAnimator.SetTrigger('changeDirection');
			spriteAnimator.SetBool('cave',false);
			lastDirection = direction;
		}
		
		spriteAnimator.SetInteger('direction',direction);
		spriteAnimator.SetBool('walk',true);
		return;
	}
	// se em multiplos toques parar? comentar o if
	//if(direction == 0)
	spriteAnimator.SetBool('walk',false);
	rigidbody2D.velocity = new Vector3(0,0,0);
	
	
	
	//transform.position = actualGridPosition;
}
function fixOnGrid(){
	var actualGrid : Transform = getGrid(getGridRelativePosition()).transform;
	var nextPosition: Vector3 = actualGrid.position;
		nextPosition.y += 0.4;
	transform.position = Vector3.Lerp(transform.position,nextPosition,0.1);
	//transform.position = actualGrid.position;
}
function MoveUp()
{
	rigidbody2D.velocity = new Vector3(0,velocity,0);
}
function MoveDown()
{
	rigidbody2D.velocity = new Vector3(0,velocity*(-1),0);
}
function MoveRight()
{
	rigidbody2D.velocity = new Vector3(velocity,0,0);
}
function MoveLeft()
{
	rigidbody2D.velocity = new Vector3(velocity*(-1),0,0);
}
//---------------------------------------------------------------------------------------------
function nextFase(fase: String)
{
	Application.LoadLevel(fase);
}
//Logica para cavar----------------------------------------------------------------------------
function cave(direction: int)
{
	var position = getGridPosition();
	if(position.x >= xMinToCave && position.x <= xMaxToCave){
		if(Math.Abs(position.y) >= yMinToCave && Math.Abs(position.y) <= yMaxToCave){
			if(!getGrid(position)){
				var gridCavado :GameObject = Instantiate(buraco, position, Quaternion.identity) as GameObject;
				if(gridCavado){
					gridCavado.name = "GRID_"+position.x+"_"+position.y;
					gridCavado.tag = "buraco";

				}
			}
		}
	}
	
}
function stopCave()
{
	spriteAnimator.SetBool('cave',false);
	var qtdBuracos : int = GameObject.FindGameObjectsWithTag("buraco").length;
	var qtdX = (xMaxToCave - xMinToCave) +1;
	var qtdY = (yMaxToCave - yMinToCave) +1;
	var position = getGridPosition();
	var prize :GameObject;
	if(foundAnyThing && position.x == coordsToFound.x && Math.Abs(position.y) == coordsToFound.y && !end){
		prize = Instantiate(prePrize) as GameObject;
		Time.timeScale = 0;
		end = true;
	}
	if(qtdBuracos >= (qtdX*qtdY) && jumpSceneOnCaveAll && !end ){
		prize = Instantiate(prePrize) as GameObject;
		Time.timeScale = 0;
		end = true;
		
	}
}
function getGrid(position: Vector3) :  GameObject{
	return terrain.Find("GRID_"+position.x+"_"+position.y);
}
function getGridPosition() : Vector3{
	var pos = transform.position;
	pos.x = Mathf.Round(pos.x-0.2);
	pos.y = Mathf.Round(pos.y-0.4);
	return new Vector3(pos.x,pos.y,0);
}
function getGridRelativePosition() : Vector3{
	var pos = transform.position;
	pos.x = Mathf.Round(Mathf.Abs(pos.x-0.2));
	pos.y = Mathf.Round(Mathf.Abs(pos.y-0.4));
	return new Vector3(pos.x,pos.y,0);
}

//---------------------------------------------------------------------------------------------
