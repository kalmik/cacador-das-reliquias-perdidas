#pragma strict

static var qtdObjetivos = 0;
var canvasDialogue: GameObject;
var objetivos : String[];
var cidade : String;

function Start(){

	Time.timeScale = 1;
	PlayerPrefs.SetString('cidade',cidade);
	PlayerPrefs.SetInt('objetivos',0);
	PlayerPrefs.SetInt('hora',7);

	var mapButtons : GameObject[] = GameObject.FindGameObjectsWithTag('mapButton');
	objetivos = new String[mapButtons.length];
	var i = 0;
	for(button in mapButtons){
		objetivos[i] = button.name;
		i++;
	}

	//onShowCanvasDialogue("Rodoviária");
}
function callCanvasDialogue(place:String){

	onShowCanvasDialogue(place);	
}
function onShowCanvasDialogue(place:String){

	var placeHour   : UnityEngine.UI.Text = GameObject.Find('horalocal').GetComponent('Text');
	var horalocal = PlayerPrefs.GetInt('hora');

	for(var h=0;h<=60;h++){

		var ht = h <10 ? "0"+h.ToString() : h.ToString();
		placeHour.text = horalocal+":"+ht;
		yield WaitForSeconds(0.05);
	}
	horalocal += 1;
	PlayerPrefs.SetInt('hora',horalocal);
	horalocal = PlayerPrefs.GetInt('hora');
	placeHour.text = horalocal+":00";
	canvasDialogue.active = true;

	var mapButtons : GameObject[] = GameObject.FindGameObjectsWithTag('mapButton');

	for(button in mapButtons){
		var controller : UnityEngine.UI.Button = button.GetComponent('Button');
		controller.interactable = false;
		qtdObjetivos++;
	}
	//PlayerPrefs.SetInt('hora',PlayerPrefs.GetInt('hora')+1);
	if( loadContent(place,PlayerPrefs.GetString('cidade'),PlayerPrefs.GetInt('objetivos')) && PlayerPrefs.GetInt('objetivos') < mapButtons.length){
			
		for(var o:int =0 ;o<objetivos.length;o++){
			print(place);
			if(objetivos[o] == place){
				print("achei");
				objetivos[o] = "checked";
				PlayerPrefs.SetInt('objetivos',PlayerPrefs.GetInt('objetivos')+1);
				break;
			}
		}
		
		if(PlayerPrefs.GetInt('objetivos') == mapButtons.length){
			var play : GameObject = GameObject.Find('playButton');
			var PlayButtonImage : UnityEngine.UI.Image = play.GetComponent("Image");
			var PlayButton : UnityEngine.UI.Button = play.GetComponent("Button");

			var bt : GameObject = GameObject.Find('JogarButton');
			var PlayButtonText : UnityEngine.UI.Text = bt.GetComponent("Text");
			PlayButtonText.color = new Color(255,255,0,1);

			PlayButton.interactable = true;
			PlayButtonImage.color = new Color(255,255,255,1);
		}
	}
	print(PlayerPrefs.GetInt('objetivos'));
}

function onHideCanvasDialogue(){
	var mapButtons : GameObject[] = GameObject.FindGameObjectsWithTag('mapButton');

	for(button in mapButtons){
		var controller : UnityEngine.UI.Button = button.GetComponent('Button');
		controller.interactable = true;
	}	
}

function onClickToLoadLevel(_level: String){
	Application.LoadLevel(_level);
}

function onClickUpText(){
	var text: GameObject = GameObject.Find("NPCDialogue");
	text.transform.position.y += 2;
}

function onClickDownText(){
	var text: GameObject = GameObject.Find("NPCDialogue");
	text.transform.position.y -= 2;
}

private function loadContent(_place,_town, _order: int):Boolean{
	var place : Place = Place().findByName(_place,_town);
	var npcDialogue : UnityEngine.UI.Text = GameObject.Find('NPCDialogue').GetComponent('Text');
	var npcName     : UnityEngine.UI.Text = GameObject.Find('NPCName').GetComponent('Text');
	var placeName   : UnityEngine.UI.Text = GameObject.Find('placeName').GetComponent('Text');

	var npcImage : UnityEngine.UI.Image = GameObject.Find('NPCFace').GetComponent('Image');
	npcImage.sprite = Resources.Load('Sprites/Persons/Faces/'+place.Face, Sprite);
	
	npcName.text = place.NPC;
	placeName.text = place.Name;

	if(_order >= place.Order-1){
		var a : String; 
		a = place.Dialogue;
		npcDialogue.text = a;
		return true;	
	}
	npcDialogue.text = place.WrongDialogue;
	return false;

}