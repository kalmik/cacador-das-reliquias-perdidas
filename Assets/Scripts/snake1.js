#pragma strict
var player : GameObject;
var velocityRate: float;
var animator : Animator;
function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
	animator = gameObject.GetComponent(Animator);
}

function Update () {
}
function virar(){
	var rD: int = Mathf.FloorToInt(Random.Range(1.0,5.0));
	if(rD == animator.GetInteger('axis')){
		virar();
		return;
	}
	animator.SetInteger('axis',rD);
}
function andarD(){
	rigidbody2D.velocity.x = velocityRate;
	rigidbody2D.velocity.y = 0;
}
function andarE(){
	rigidbody2D.velocity.x = velocityRate*-1;
	rigidbody2D.velocity.y = 0;
}

function andarC(){
	rigidbody2D.velocity.y = velocityRate*-1;
	rigidbody2D.velocity.x = 0;
}
function andarB(){
	rigidbody2D.velocity.y = velocityRate;
	rigidbody2D.velocity.x = 0;
}
function OnCollisionEnter2D(col : Collision2D){
	virar();
	if(col.gameObject.tag == "Player"){
		Application.LoadLevel("menu");
	}

}

