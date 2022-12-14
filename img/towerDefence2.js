(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("towerDefence2",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[16, 16, 16, 19, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 19, 19, 19, 19, 19, 19, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 19, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 19, 19, 19, 19, 19, 19, 16, 16, 16, 16, 19, 19, 19, 19, 19, 19, 19,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
         "height":12,
         "id":1,
         "name":"\u041f\u0440\u043e\u0448\u0430\u0440\u043e\u043a \u043f\u043b\u0438\u0442\u043e\u043a 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 18, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 20, 0, 0, 4, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 20, 0, 0, 18, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 20, 0, 0, 18, 0, 22, 33, 33, 21, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 20, 0, 0, 18, 0, 20, 0, 0, 18, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 20, 0, 0, 18, 0, 20, 0, 0, 18, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 18, 0, 8, 5, 5, 7, 0, 20, 0, 0, 18, 0, 8, 5, 5, 5, 5, 5,
            0, 0, 18, 0, 0, 0, 0, 0, 0, 20, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 32, 33, 33, 33, 33, 33, 33, 34, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":2,
         "name":"Road",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 87, 88,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 101, 102,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, 71,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 48, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":3,
         "name":"Obstacles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 114, 115,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 128, 129,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 142, 143,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 46, 0, 0, 0, 0, 46, 0, 44, 0, 45, 43, 0, 44, 49, 48, 44, 0, 43, 0],
         "height":12,
         "id":4,
         "name":"Obstacles 2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"Road",
         "objects":[
                {
                 "class":"",
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":1.84824200418743,
                         "y":-218.092556494116
                        }, 
                        {
                         "x":-3.69648400837485,
                         "y":541.534907226915
                        }, 
                        {
                         "x":316.049382716049,
                         "y":541.534907226915
                        }, 
                        {
                         "x":317.897624720237,
                         "y":219.940798498303
                        }, 
                        {
                         "x":639.491733448848,
                         "y":221.789040502491
                        }, 
                        {
                         "x":637.643491444661,
                         "y":547.079633239477
                        }, 
                        {
                         "x":1234.6256587972,
                         "y":539.686665222728
                        }],
                 "rotation":0,
                 "visible":true,
                 "width":0,
                 "x":225.485524510866,
                 "y":-1.84824200418742
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":false,
         "x":0,
         "y":0
        }, 
        {
         "data":[14, 0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 14, 0, 0,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":6,
         "name":"Towers",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"tileset.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":20
});