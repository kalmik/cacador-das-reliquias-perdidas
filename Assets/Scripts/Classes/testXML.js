#pragma strict

var pl : PlaceList;

function Start () {
	pl =  new PlaceList();
	var lugar: Place = new Place();
	lugar.Name = "prefeitura";
	lugar.MapName = "map1";
	lugar.Town = "caíco";
	lugar.State = "RN";
	lugar.NPC = "Prefeito";
	lugar.Dialogue = "Oi meu nome é prefeito";
	pl.Places.Add(lugar);

	lugar = new Place();
	lugar.Name = "Cemitério";
	lugar.MapName = "map1";
	lugar.Town = "caíco";
	lugar.State = "RN";
	lugar.NPC = "Coveiro";
	lugar.Dialogue = "Oi meu nome é coveiro";
	pl.Places.Add(lugar);

	lugar = new Place();
	lugar.Name = "Padaria";
	lugar.MapName = "map1";
	lugar.Town = "caíco";
	lugar.State = "RN";
	lugar.NPC = "Padeiro";
	lugar.Dialogue = "Oi meu nome é padeiro";
	pl.Places.Add(lugar);

	lugar = new Place();
	lugar.Name = "prefeitura";
	lugar.MapName = "map2";
	lugar.Town = "Jardim do Seridó";
	lugar.State = "RN";
	lugar.NPC = "Prefeito";
	lugar.Dialogue = "Oi meu nome é prefeito";
	pl.Places.Add(lugar);

	lugar = new Place();
	lugar.Name = "prefeitura";
	lugar.MapName = "map3";
	lugar.Town = "Lajes";
	lugar.State = "RN";
	lugar.NPC = "Prefeito";
	lugar.Dialogue = "Oi meu nome é prefeito";
	pl.Places.Add(lugar);

	pl.Save();
}

function Update () {

}