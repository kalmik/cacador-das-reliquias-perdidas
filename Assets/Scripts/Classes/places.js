#pragma strict
import System.Collections.Generic;
import System.Xml;
import System.Xml.Serialization;
import System.IO;
import System.Text;

@XmlRoot("PlacesCollection")
public class PlaceList
{
	
	private static var path = 'DataBase/places.xml';
	//XML Items
	@XmlArray("lugares")
  	@XmlArrayItem("lugar")
 	public var Places : List.<Place> = new List.<Place>();

 	
 	public function Save()
 	{
 		var path = path;
 		var serializer : XmlSerializer = new XmlSerializer(PlaceList);
 		var encoding = Encoding.GetEncoding("utf-8");
 		var stream : StreamWriter = new StreamWriter(path, false, encoding);
 		serializer.Serialize(stream, this);
 		stream.Close();
 	}
 
 	public static function Load():PlaceList 
 	{
 		var path = path;
 		var serializer : XmlSerializer = new XmlSerializer(PlaceList);
 		var stream : Stream = new FileStream(path, FileMode.Open);
 		var result : PlaceList = serializer.Deserialize(stream) as PlaceList;
 		stream.Close();
 		return result;
 	}
}

public class Place
{
	@XmlAttribute("nome")
	public var Name : String;
	@XmlAttribute("mapName")
	public var MapName : String;
	@XmlAttribute("estado")
	public var State : String;
	@XmlAttribute("cidade")
	public var Town : String;
	@XmlAttribute("ator")
	public var NPC : String;
	@XmlAttribute("ordem")
	public var Order : int;
	@XmlAttribute("dialogo")
	public var Dialogue : String;
	@XmlAttribute("dialogo-errado")
	public var WrongDialogue : String;
	@XmlAttribute("foto")
	public var Face : String;
	
 	public static function findByState(_criteria:String):Array
 	{
 		var arr: Array = new Array();
 		var Places = PlaceList.Load().Places;
 		for(var i : int = 0; i < Places.Count; i++){
 			if(Places[i].State === _criteria) arr.Push(Places[i]);
 		}

 		return arr;
 	}

 	public static function findByName(_criteria:String):Array
 	{
 		var arr: Array = new Array();
 		var Places = PlaceList.Load().Places;
 		for(var i : int = 0; i < Places.Count; i++){
 			if(Places[i].Name === _criteria) arr.Push(Places[i]);
 		}
 		
 		return arr;
 	}
 	public static function findByName(_name:String,_town:String):Place
 	{
 		var Places = PlaceList.Load().Places;
 		for(var i : int = 0; i < Places.Count; i++){
 			if(Places[i].Name == _name && Places[i].Town == _town) return Places[i];
 		}
 		
 		return null;
 	}
 	public static function findByTown(_criteria:String):List.<Place>
 	{
 		var arr: List.<Place> = new List.<Place>();
 		var Places = PlaceList.Load().Places;
 		for(var i : int = 0; i < Places.Count; i++){
 			if(Places[i].Town == _criteria) arr.Add(Places[i]);
 		}
 		
 		return arr;
 	}
 	public static function findByMapName(_criteria:String):Array
 	{
 		var arr: Array = new Array();
 		var Places = PlaceList.Load().Places;
 		for(var i : int = 0; i < Places.Count; i++){
 			if(Places[i].MapName === _criteria) arr.Push(Places[i]);
 		}
 		
 		return arr;
 	}
 	 	
 	
 	//Loads the xml directly from the given string. Useful in combination with www.text.
	//public static function LoadFromText(text : String):PlaceList
	//{
 	//	var serializer : XmlSerializer = new XmlSerializer(PlaceList);
 	//	return serializer.Deserialize(new StringReader(text)) as PlaceList;
 	//}
}









