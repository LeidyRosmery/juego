function Princess(map, x, y) {
 Hero.call(this, map, x, y);
}
Princess.prototype = Object.create(Hero.prototype);
Princess.prototype.constructor = Princess;
// image property MUST be defined in prototype
Princess.prototype.image = 'characters/princess/princess.png';
Princess.prototype.name = 'TOAD';
Princess.prototype.message="Hi my name is ";
//Princess.prototype.voice='Google UK English Female';
//Princess.prototype.name = 'princesa';
//Princess.prototype.voice = 'diego';
Princess.prototype.say=function(){
 Hero.prototype.say.call(Princess.prototype);
}
